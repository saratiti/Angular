using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;
using Tahaluf.Career.core.Service;


namespace Tahaluf.Career.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : Controller
    {
        private readonly ICompanyService companyService;
        public CompanyController(ICompanyService Service)
        {
            companyService = Service;
        }
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<Company>), StatusCodes.Status200OK)]
        public List<Company> GetAllCompany()
        {
            return companyService.GetAllCompany();
        }
        [HttpPost]
        [Route("[action]")]
        [ProducesResponseType(typeof(Company), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Company), StatusCodes.Status400BadRequest)]

        public bool CreateCompany([FromBody] Company company) { return companyService.CreateCompany(company); }
        [HttpPut]
        [Route("[action]")]
        [ProducesResponseType(typeof(Company), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Company), StatusCodes.Status400BadRequest)]
        public bool UpdateCompany([FromBody] Company company) { return companyService.UpdateCompany(company); }

        [HttpDelete]
        public bool DeleteCompany(int id) { return companyService.DeleteCompany(id); }
        [HttpGet]
        [Route("getNameCompany/{name}")]
        public List<Company> getNameCompany(string name)
        {
            return companyService.getNameCompany(name);
        }
        [HttpGet]
        [Route("getByCompanyId/{id}")]
        public List<Company> getByCompanyId(int id)
        {
            return companyService.getByCompanyId(id);
        }
        //[HttpPut]
        //[Route("[action]")]
        //[ProducesResponseType(typeof(Company), StatusCodes.Status200OK)]
        //[ProducesResponseType(typeof(Company), StatusCodes.Status400BadRequest)]
        //public bool UpdateCompanyPASS(Company company)
        //{
        //    return companyService.UpdateCompanyPASS(company);
        //}
        [HttpPost]
        [Route("[action]")]
        [ProducesResponseType(typeof(Company), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Company), StatusCodes.Status400BadRequest)]

        public List<Company> GetAllCompanyregister([FromBody]searchtwodate searchtwodate1)
        {
            return companyService.GetAllCompanyregister(searchtwodate1);
        }


        [HttpPost]
        [Route("UploadImage/{id}")]
        public Company UploadImage(int id)
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
               
                Company Item = companyService.getByCompanyId(id).SingleOrDefault();
                Item.LogoImage = fileName;
                companyService.UpdateCompany(Item);
                return Item;
            }
            catch (Exception e)
            {
                return null;
            }
        }

    }
}
