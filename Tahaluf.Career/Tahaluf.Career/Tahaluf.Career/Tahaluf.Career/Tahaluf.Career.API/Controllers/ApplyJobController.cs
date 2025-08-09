using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.API.Controllers
{
    //PROCEDURE SearchBetweenToDateclient(DateFrom in date, DateTo in date, Com_Id IN NUMBER)
    [Route("api/[controller]")]
    [ApiController]
    public class ApplyJobController : ControllerBase
    {
        private readonly IApplyJobService ApplyJobService;

        public ApplyJobController(IApplyJobService _ApplyJobService)
        {
            ApplyJobService = _ApplyJobService;
        }

        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<Applyjob>), StatusCodes.Status200OK)]
        public List<Applyjob> GetAllApplyJob()
        {
            return ApplyJobService.GetAllApplyJob();

        }

        [HttpGet]
        [Route("GetAllApplyJobClient/{id}")]
        [ProducesResponseType(typeof(List<applyClientJob>), StatusCodes.Status200OK)]
        public List<applyClientJob> GetAllApplyJobClient(int id)
        {
            return ApplyJobService.GetAllApplyJobClient(id);

        }

        [HttpPost]
        [Route("[action]")]
        [ProducesResponseType(typeof(Applyjob), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Applyjob), StatusCodes.Status400BadRequest)]

        public bool CreateApplyjob([FromBody] Applyjob applyjob)
        {
            return ApplyJobService.CreateApplyJob(applyjob);
            ////جيبلي المعلومات من السيرفس ورجعلي اياها
        }


        [HttpPut]
        [Route("[action]")]
        [ProducesResponseType(typeof(Applyjob), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Applyjob), StatusCodes.Status400BadRequest)]
        public bool UpdateApplyJob([FromBody] Applyjob applyjob)
        {
            return ApplyJobService.UpdateApplyJob(applyjob);

        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public bool DeleteApplyJob(int id)
        {
            return ApplyJobService.DeleteApplyJob(id);
        }
    
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<applyClientJob>), StatusCodes.Status200OK)]
        public List<applyClientJob> GetAllApplyJobClientdto()
        {
            return ApplyJobService.GetAllApplyJobClientdto();
        }
        [HttpGet]
        [Route("[action]")]
        [ProducesResponseType(typeof(List<applycompanyvac>), StatusCodes.Status200OK)]
        public List<applycompanyvac> GetAllApplyJobCompanyDTO()
        {
            return ApplyJobService.GetAllApplyJobCompanyDTO();
        }
        [HttpPost]
        [Route("[action]")]
        [ProducesResponseType(typeof(applyClientJob), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(applyClientJob), StatusCodes.Status400BadRequest)]


        public List<applyClientJob> SearchBetweenToDateclient([FromBody]searchtwodate searchtwodate)
        {

            return ApplyJobService.SearchBetweenToDateclient(searchtwodate);


        }
        [HttpPost]
        [Route("[action]")]
        [ProducesResponseType(typeof(applyClientJob), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(applyClientJob), StatusCodes.Status400BadRequest)]
        public List<applyClientJob> SearchBetweenToDate(searchtwodate searchtwodate)
        {
            return ApplyJobService.SearchBetweenToDate(searchtwodate);


        }
        [HttpGet]
        [Route("GetAllApplyJobMessage/{id}")]
        [ProducesResponseType(typeof(List<applycompanyvac>), StatusCodes.Status200OK)]
        public List<applycompanyvac> GetAllApplyJobMessage(int id)
        {
            return ApplyJobService.GetAllApplyJobMessage(id);
        }

        [HttpGet]
        [Route("GetApplyJobclientid/{id}/{num}")]
        [ProducesResponseType(typeof(List<applycompanyvac>), StatusCodes.Status200OK)]
        public List<applycompanyvac> GetApplyJobclientid(int id, int num)
        {
            return ApplyJobService.GetApplyJobclientid(id, num);
        }

        [HttpPost]
        [Route("[action]")]
   
        public List<applynumber> numberofapplyjob(searchtwodate searchtwodate1)
        {
            return ApplyJobService.numberofapplyjob(searchtwodate1);


        }
        [HttpPost]
        [Route("[action]")]
 
        public List<applynumber> numberofapplyjobreject(searchtwodate searchtwodate1)
        {
            return ApplyJobService.numberofapplyjobreject(searchtwodate1);


        }
        [HttpPost]
        [Route("[action]")]
      
        public List<applynumber> numberofapplyjobaccept(searchtwodate searchtwodate1)
        {
            return ApplyJobService.numberofapplyjobaccept(searchtwodate1);


        }

  

        [HttpGet]
        [Route("GetAllApplyJobClientmess/{id}")]
        [ProducesResponseType(typeof(List<applyClientJob>), StatusCodes.Status200OK)]
        public List<applyClientJob> GetAllApplyJobClientmess(int id)
        {
            return ApplyJobService.GetAllApplyJobClientmess(id);

        }
        [HttpPost]
        [Route("[action]")]
        public bool CreateCV(Applyjob applyjob)
        {
            return ApplyJobService.CreateCV(applyjob);
        }


        [HttpPost]
        [Route("UPLOADCV")]
        public Applyjob UPLOADCV()
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

        
                Applyjob Item = new Applyjob();
               Item.UPLOADCV = fileName;
                return Item;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}