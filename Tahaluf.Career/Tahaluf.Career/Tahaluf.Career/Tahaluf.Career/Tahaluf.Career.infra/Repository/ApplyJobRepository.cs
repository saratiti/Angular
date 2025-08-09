using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Tahaluf.Career.core.Common;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;
using Tahaluf.Career.core.Repository;

namespace Tahaluf.Career.infra.Repository
{
    public class ApplyJobRepository : IApplyJobRepository
    {
        private readonly IDbContext DbContext;
        public ApplyJobRepository(IDbContext dbContext)
        {
            DbContext = dbContext;
        }


        public List<Applyjob> GetAllApplyJob()
        {
            IEnumerable<Applyjob> result = DbContext.Connection.Query<Applyjob>("ApplyJob_Package.GetAllApplyJob" , commandType: CommandType.StoredProcedure);
            return result.ToList();


        }
        //public List<Applyjob> GetAllApplyJobCompany()
        //{
        //    IEnumerable<Applyjob> result = DbContext.Connection.Query<Applyjob, Jobvacancy, Company, Applyjob>("ApplyJob_Package.GetAllApplyJobCompany", (applyjob, jobvac, company) =>
        //    {
        //        applyjob.jobvacancy = jobvac;
        //        jobvac.Company = company;

        //        return applyjob;
        //    },
        //    splitOn: "JobVacancy_ID"
        //    , commandType: CommandType.StoredProcedure);
        //    return result.Distinct().ToList();


        //}
        public List<applycompanyvac> GetAllApplyJobCompanyDTO()
        {
            IEnumerable<applycompanyvac> result = DbContext.Connection.Query<applycompanyvac>("ApplyJob_Package.GetAllApplyJobCompany",
            commandType: CommandType.StoredProcedure);
            return result.ToList();


        }
        public List<applyClientJob> GetAllApplyJobClient(int id)
        {

            var p = new DynamicParameters();

            p.Add("Com_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<applyClientJob> result = DbContext.Connection.Query<applyClientJob>("ApplyJob_Package.GetAllApplyJobClient",p, commandType: CommandType.StoredProcedure);
            return result.ToList();


        }

        public List<applyClientJob> GetAllApplyJobClientmess(int id)
        {

            var p = new DynamicParameters();

            p.Add("Com_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<applyClientJob> result = DbContext.Connection.Query<applyClientJob>("ApplyJob_Package.GetAllApplyJobClientmess",p, commandType: CommandType.StoredProcedure);
            return result.ToList();


        }

        public List<applyClientJob> GetAllApplyJobClientdto()
        {

            IEnumerable<applyClientJob> result = DbContext.Connection.Query<applyClientJob>("ApplyJob_Package.GetAllApplyJobClientCompany", commandType: CommandType.StoredProcedure);
            return result.ToList();
       

        }
        public bool CreateApplyJob(Applyjob applyjob)
        {
            var p = new DynamicParameters();
            p.Add("A_UploadCV", applyjob.UPLOADCV, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("A_UploadCertificate", applyjob.UPLOADCERTIFICATE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("A_ApplytDate ", applyjob.APPLYDATE, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            //p.Add("A_ResponsDate", applyjob.RESPONSEDATE, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            //p.Add("A_Message", applyjob.MESSAGE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("A_client_id", applyjob.Client_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("A_job_id", applyjob.JobVacancy_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            
            var result = DbContext.Connection.ExecuteAsync("ApplyJob_Package.CreateApplyJob", p, commandType: CommandType.StoredProcedure);
            return true;

            
        }

        public bool CreateCV(Applyjob applyjob)
        {
            var p = new DynamicParameters();
            p.Add("A_UploadCV", applyjob.UPLOADCV, dbType: DbType.String, direction: ParameterDirection.Input);
   

            var result = DbContext.Connection.ExecuteAsync("ApplyJob_Package.CreateCV", p, commandType: CommandType.StoredProcedure);
            return true;


        }


        public bool UpdateApplyJob(Applyjob applyjob)
        {

            var p = new DynamicParameters();

            p.Add("AJ_Id", applyjob.APPLYJOB_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            //p.Add("A_UploadCV", applyjob.UPLOADCV, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("A_UploadCertificate", applyjob.UPLOADCERTIFICATE, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("A_ApplytDate ", applyjob.APPLYDATE, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("A_ResponsDate", applyjob.RESPONSEDATE, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("A_Message", applyjob.MESSAGE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("A_Stutus", applyjob.Stutus, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("ApplyJob_Package.UpdateApplyJob", p, commandType: CommandType.StoredProcedure);
            return true;
        }

    


        public List<applynumber> numberofapplyjob(searchtwodate searchtwodate1)
        {

            var p = new DynamicParameters();

            p.Add("DateFrom", searchtwodate1.DateFrom, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("DateTo", searchtwodate1.DateTo, dbType: DbType.Date, direction: ParameterDirection.Input);
            IEnumerable<applynumber> result = DbContext.Connection.Query<applynumber>("ApplyJob_Package.numberofapplyjob", p, commandType: CommandType.StoredProcedure);
            return result.ToList();


        }
        public List<applynumber> numberofapplyjobaccept(searchtwodate searchtwodate1)
        {

            var p = new DynamicParameters();

            p.Add("DateFrom", searchtwodate1.DateFrom, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("DateTo", searchtwodate1.DateTo, dbType: DbType.Date, direction: ParameterDirection.Input);
            IEnumerable<applynumber> result = DbContext.Connection.Query<applynumber>("ApplyJob_Package.numberofapplyjobaccept", p, commandType: CommandType.StoredProcedure);
            return result.ToList();


        }
        public List<applynumber> numberofapplyjobreject(searchtwodate searchtwodate1)
        {

            var p = new DynamicParameters();

            p.Add("DateFrom", searchtwodate1.DateFrom, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("DateTo", searchtwodate1.DateTo, dbType: DbType.Date, direction: ParameterDirection.Input);
            IEnumerable<applynumber> result = DbContext.Connection.Query<applynumber>("ApplyJob_Package.numberofapplyjobreject", p, commandType: CommandType.StoredProcedure);
            return result.ToList();


        }


 
        public bool DeleteApplyJob(int id)
        {
            var p = new DynamicParameters();
            p.Add("AJ_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);

            var result = DbContext.Connection.ExecuteAsync("ApplyJob_Package.DeleteApplyJob", p, commandType: CommandType.StoredProcedure);
            return true;
        }


        //SearchBetweenToDateclient

        public List<applyClientJob> SearchBetweenToDateclient(searchtwodate searchtwodate)
        {
            //PROCEDURE SearchBetweenToDateclient(DateFrom in date, DateTo in date, Com_Id IN NUMBER)
            var p = new DynamicParameters();

            p.Add("DateFrom", searchtwodate.DateFrom, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("DateTo", searchtwodate.DateTo, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("Com_Id", searchtwodate.Com_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);

            IEnumerable<applyClientJob> result = DbContext.Connection.Query<applyClientJob>("ApplyJob_Package.SearchBetweenToDateclient", p, commandType: CommandType.StoredProcedure);
            return result.ToList();


        }
        public List<applyClientJob> SearchBetweenToDate(searchtwodate searchtwodate)
        {
       
            var p = new DynamicParameters();

            p.Add("DateFrom", searchtwodate.DateFrom, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("DateTo", searchtwodate.DateTo, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            //p.Add("Com_Id", searchtwodate.Com_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);

            IEnumerable<applyClientJob> result = DbContext.Connection.Query<applyClientJob>("ApplyJob_Package.SearchBetweenToDate", p, commandType: CommandType.StoredProcedure);
            return result.ToList();


        }
        //get message by clientid

        public List<applycompanyvac> GetAllApplyJobMessage(int id)
        {

            var p = new DynamicParameters();

            p.Add("C_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<applycompanyvac> result = DbContext.Connection.Query<applycompanyvac>("ApplyJob_Package.GetAllApplyJobMessage", p, commandType: CommandType.StoredProcedure);
            return result.ToList();


        }
        //PROCEDURE GetApplyJobclientid(C_Id in number, daynum in number)
        public List<applycompanyvac> GetApplyJobclientid(int id,int num)
        {

            var p = new DynamicParameters();

            p.Add("C_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("daynum", num, dbType: DbType.Int32, direction: ParameterDirection.Input);

            IEnumerable<applycompanyvac> result = DbContext.Connection.Query<applycompanyvac>("ApplyJob_Package.GetApplyJobclientid", p, commandType: CommandType.StoredProcedure);
            return result.ToList();


        }
    }
}