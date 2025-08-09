using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class ApplyJobService : IApplyJobService
    {
        private readonly IApplyJobRepository applyJobRepository;
        public ApplyJobService(IApplyJobRepository _applyJobRepository)
        {
            applyJobRepository = _applyJobRepository;
        }

        public List<Applyjob> GetAllApplyJob()
        {
            return applyJobRepository.GetAllApplyJob();
        }
        public bool CreateApplyJob(Applyjob applyjob)
        {
            return applyJobRepository.CreateApplyJob(applyjob);
        }
        public bool UpdateApplyJob(Applyjob applyjob)
        {
            return applyJobRepository.UpdateApplyJob(applyjob);
        }
        public bool DeleteApplyJob(int id)
        {
            return applyJobRepository.DeleteApplyJob(id);
        }

        //public List<Applyjob> GetAllApplyJobCompany() 
        //{
        //    return applyJobRepository.GetAllApplyJobCompany();
        //}
        public List<applyClientJob> GetAllApplyJobClientdto()
        {
            return applyJobRepository.GetAllApplyJobClientdto();
        }
        public List<applyClientJob> GetAllApplyJobClient(int id)
        {
            return applyJobRepository.GetAllApplyJobClient(id);
        }

        public List<applycompanyvac> GetAllApplyJobCompanyDTO()

        {
            return applyJobRepository.GetAllApplyJobCompanyDTO();
        }
        public List<applyClientJob> SearchBetweenToDateclient(searchtwodate searchtwodate)
        {
            return applyJobRepository.SearchBetweenToDateclient(searchtwodate);


        }
        public bool CreateCV(Applyjob applyjob)
        {
            return applyJobRepository.CreateCV(applyjob);

        }
        public List<applycompanyvac> GetAllApplyJobMessage(int id)
        {
            return applyJobRepository.GetAllApplyJobMessage(id);
        }
        public List<applycompanyvac> GetApplyJobclientid(int id, int num)
        {
            return applyJobRepository.GetApplyJobclientid(id,num);
        }
        public List<applyClientJob> SearchBetweenToDate(searchtwodate searchtwodate)
        { 
        return applyJobRepository.SearchBetweenToDate(searchtwodate);
        }

        public List<applynumber> numberofapplyjob(searchtwodate searchtwodate1)
        {
            return applyJobRepository.numberofapplyjob(searchtwodate1);
        }


        public List<applynumber> numberofapplyjobreject(searchtwodate searchtwodate1) 
        {
            return applyJobRepository.numberofapplyjobreject(searchtwodate1);


        }
        public List<applynumber> numberofapplyjobaccept(searchtwodate searchtwodate1)
        { 
            return applyJobRepository.numberofapplyjobaccept(searchtwodate1);

        }
        public List<applyClientJob> GetAllApplyJobClientmess(int id)
        {
            return applyJobRepository.GetAllApplyJobClientmess(id);
      
        
        }
    }
}