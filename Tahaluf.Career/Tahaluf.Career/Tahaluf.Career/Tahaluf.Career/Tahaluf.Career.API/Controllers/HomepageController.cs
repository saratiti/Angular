using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomepageController : Controller
    {
        private readonly IHomepageService service;

        public HomepageController(IHomepageService service)
        {
            this.service = service;
        }
        [HttpPost]
        public string CreateHome(Homepage homepage)

        {
            return service.CreateHome(homepage);
        }
        [HttpPut]
        public bool UpdateHome([FromBody] Homepage homepage)
        {
            return service.UpdateHome(homepage);
        }
        [HttpGet]
        public List<Homepage> GetAllHome()
        {
            return service.GetAllHome();
        }
        [HttpDelete("{id}")]
        public bool DeleteHome(int id)
        {
            return service.DeleteHome(id);
        }
        [HttpGet]
        [Route("[action]/{id}")]
        [ProducesResponseType(typeof(List<Homepage>), StatusCodes.Status200OK)]
        public List<Homepage> GetbyHomeId(int id)
        {
            return service.GetbyHomeId(id);
        }
    }
}
