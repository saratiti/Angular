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
using static System.Net.WebRequestMethods;

namespace Tahaluf.Career.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobvacncyController : Controller
    {
        private readonly IJobvacncyService jobservice;

        public JobvacncyController(IJobvacncyService Ijobservice)
        {
            jobservice = Ijobservice;
        }
        [HttpPost]
        [Route("[action]")]
        [ProducesResponseType(typeof(Jobvacancy), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Jobvacancy), StatusCodes.Status400BadRequest)]
        public string CreateJobVacancy(Jobvacancy jobVacancy)
        {
            return jobservice.CreateJobVacancy(jobVacancy);
        }
        [HttpDelete]
        [Route("[action]/{id}")]
        public bool DeleteJobVacancy(int Id)
        {
            return jobservice.DeleteJobVacancy(Id);
        }
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<Jobvacancy>), StatusCodes.Status200OK)]
        public List<Jobvacancy> GetAllJobVacancy()
        {
            return jobservice.GetAllJobVacancy();
        }
        [HttpPut]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<Jobvacancy>), StatusCodes.Status200OK)]
        public bool UpdateJobVacancy([FromBody] Jobvacancy jobvacancy)
        {
            return jobservice.UpdateJobVacancy(jobvacancy);
        }
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<applycompanyvac>), StatusCodes.Status200OK)]
        public List<applycompanyvac> GetAllJobVacancyCompany()
        {
            return jobservice.GetAllJobVacancyCompany();
        }
        [HttpGet]
        [Route("[action]/{title}")]
        [ProducesResponseType(typeof(List<applycompanyvac>), StatusCodes.Status200OK)]
        public List<applycompanyvac> getalljobbyjobTilte(string title)
        {
            return jobservice.getalljobbyjobTilte(title);
        }
        [HttpGet]
        [Route("[action]/{id}")]
        [ProducesResponseType(typeof(List<Jobvacancy>), StatusCodes.Status200OK)]
        public List<Jobvacancy> getalljobbycompanyId(int id)
        {
            return jobservice.getalljobbycompanyId(id);
        }
        [HttpGet]
        [Route("[action]/{id}")]
        [ProducesResponseType(typeof(List<Jobvacancy>), StatusCodes.Status200OK)]
        public List<Jobvacancy> getbyJobId(int id)
        {
            return jobservice.getbyJobId(id);
        }

        [HttpPost]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<Jobvacancy>), StatusCodes.Status200OK)]
        public List<Jobvacancy> getbyJobTitleCompany([FromBody] SearchJobTitle searchJobTitle)
        {
            return jobservice.getbyJobTitleCompany(searchJobTitle);
        }

        [HttpPost]
        [Route("[action]")]
        public List<applycompanyvac> SearchBetweenToDate(searchtwodate searchtwodate1)
        {
            return jobservice.SearchBetweenToDate(searchtwodate1);
      
        
        }


        [HttpPost]
        [Route("[action]")]
        public List<numberjob> GetNumberjobs(searchtwodate searchtwodate1)

        {
            return jobservice.GetNumberjobs(searchtwodate1);


        }
    }

}
