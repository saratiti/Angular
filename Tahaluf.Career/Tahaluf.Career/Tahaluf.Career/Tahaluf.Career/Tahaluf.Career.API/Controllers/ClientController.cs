using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Service;


namespace Tahaluf.Career.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : Controller
    {
        private readonly IClientService clientService;
        public ClientController(IClientService service)
        {
            clientService = service;
        }
        [HttpGet]
        //[Route("[action]")]
        [ProducesResponseType(typeof(List<Client>), StatusCodes.Status200OK)]
        public List<Client> GetAllClient()
        {
            return clientService.GetAllClient();
        }

        [HttpPost]
        //[Route("[action]")]
        [ProducesResponseType(typeof(Client), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Client), StatusCodes.Status400BadRequest)]

        public bool CreateClient([FromBody] Client client) { return clientService.CreateClient(client); }
        [HttpPut]
        //[Route("[action]")]
        [ProducesResponseType(typeof(Client), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Client), StatusCodes.Status400BadRequest)]
        public bool UpdateClient([FromBody] Client client) { return clientService.UpdateClient(client); }
        [HttpDelete]
        //[Route("[action]")]
        [Route("delete/{id}")]
        public bool DeleteClient(int id) { return clientService.DeleteClient(id); }

        [HttpGet]

        [Route("GetByclientId/{id}")]
        public List<Client> GetByclientId(int id)
        {

            return clientService.GetByclientId(id);
        }

        [HttpPost]
        [Route("UploadImage/{id}")]
        public Client UploadImage(int id)
        {


            try
            {

                var file = Request.Form.Files[0];
                var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
                var fullPath = Path.Combine("C:\\Users\\Administrator\\Desktop\\FinalProject\\Career\\src\\assets\\images", fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                Client Item = clientService.GetByclientId(id).SingleOrDefault();
                Item.Imagename = fileName;
                clientService.UpdateClient(Item);
                return Item;
            }
            catch (Exception e)
            {
                return null;
            }
        }



    }
}

   


