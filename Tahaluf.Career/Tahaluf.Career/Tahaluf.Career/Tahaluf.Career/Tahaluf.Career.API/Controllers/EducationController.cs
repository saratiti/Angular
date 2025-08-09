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
    public class EducationController : Controller
    {
        private readonly IEducationService educationService;
        public EducationController(IEducationService _educationService)
        {
            educationService = _educationService;
        }
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<Education>), StatusCodes.Status200OK)]
        public List<Education> GetAllEducation()
        {
            return educationService.GetAllEducation();
        }
        [HttpPost]
        [Route("[action]")]
        [ProducesResponseType(typeof(Education), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Education), StatusCodes.Status400BadRequest)]

        public bool CreateEducation([FromBody] Education education) { return educationService.CreateEducation(education); }
        [HttpPut]
        [Route("[action]")]
        [ProducesResponseType(typeof(Education), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Education), StatusCodes.Status400BadRequest)]
        public bool UpdateEducation([FromBody] Education education) { return educationService.UpdateEducation(education); }
        [HttpDelete]
        [Route("[action]/{id}")]
      
        public bool DeleteEducation(int id) { return educationService.DeleteEducation(id); }

        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<clientEdu>), StatusCodes.Status200OK)]
        public List<clientEdu> GetAllClientEdu()
        {
            return educationService.GetAllClientEdu();
        }
        [HttpGet]
        [Route("[action]")]
        [Route("GetEducationbyclientid/{id}")]
        public List<Education> GetEducationbyclientid(int id)
        {
            return educationService.GetEducationbyclientid(id);
        }




        [HttpPost]
        [Route("Uploadcv")]
        public Education Uploadcv()
        {

            
            try
            {
                var file = Request.Form.Files[0];
                var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
                var fullPath = Path.Combine("C:\\Users\\Administrator\\Desktop\\FinalProject\\Career\\src\\assets\\doc", fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                Education Item = new Education();
                Item.Uploadcv = fileName;
                return Item;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
