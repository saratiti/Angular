using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;

namespace Tahaluf.Career.core.Repository
{
    public interface IApplyJobRepository
    {
        public List<Applyjob> GetAllApplyJob();
        public bool CreateApplyJob(Applyjob applyjob);
        public bool UpdateApplyJob(Applyjob applyjob);
        public bool DeleteApplyJob(int id);
        //public List<Applyjob> GetAllApplyJobCompany();
        public List<applyClientJob> GetAllApplyJobClient(int id);
        public List<applyClientJob> GetAllApplyJobClientdto();
        public List<applycompanyvac> GetAllApplyJobCompanyDTO();
        public List<applyClientJob> SearchBetweenToDateclient(searchtwodate searchtwodate);
        public List<applycompanyvac> GetAllApplyJobMessage(int id);
        public List<applycompanyvac> GetApplyJobclientid(int id, int num);
        public List<applyClientJob> SearchBetweenToDate(searchtwodate searchtwodate);
        public List<applynumber> numberofapplyjob(searchtwodate searchtwodate1);
        public List<applynumber> numberofapplyjobreject(searchtwodate searchtwodate1);
        public List<applynumber> numberofapplyjobaccept(searchtwodate searchtwodate1);
        public List<applyClientJob> GetAllApplyJobClientmess(int id);
        public bool CreateCV(Applyjob applyjob);

    }
}
