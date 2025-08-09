using Dapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Linq;
using Tahaluf.Career.core.Common;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.infra.Common;
using Tahaluf.Career.core.DTO;

namespace Tahaluf.Career.infra.Repository
{
    public class JobvacncyRepository : IJobvacncyRepository
    {
        //connection to database
        private readonly IDbContext DbContext;

        public JobvacncyRepository(IDbContext dbcontext)
        {
            DbContext = dbcontext;
        }




//       create or replace PACKAGE JobVacancy_Package AS 
//PROCEDURE CreateJobVacancy(J_JopTitle in VARCHAR,J_Salary IN VARCHAR,J_JobDescription IN VARCHAR,J_Opening IN VARCHAR,J_JobLocation  IN VARCHAR,J_ApplayDate IN Date,J_LastDate IN Date,J_PostingDate IN Date,J_companyID IN NUMBER );
//PROCEDURE UpdateJobVacancy(JV_Id IN NUMBER,J_JopTitle in VARCHAR,J_Salary IN VARCHAR,J_JobDescription IN VARCHAR,J_Opening IN VARCHAR,J_JobLocation  IN VARCHAR,J_ApplayDate IN Date,J_LastDate IN Date,J_PostingDate IN Date , J_companyID IN NUMBER) ;
//PROCEDURE GetAllJobVacancy;
//PROCEDURE DeleteJobVacancy(JV_Id IN NUMBER);
//PROCEDURE getJobTitle(J_JopTitle in VARCHAR);
//PROCEDURE getbyJobTitleCompany(J_JopTitle in VARCHAR , C_Id in Number );
//PROCEDURE getbyJobTitle(J_JopTitle in VARCHAR);
//PROCEDURE getbyJobId(JV_Id in Number);
//PROCEDURE GetAllJobVacancyCompany;
//PROCEDURE getalljobbycompanyId(comId in number);
//END JobVacancy_Package;
        public string CreateJobVacancy(Jobvacancy jobVacancy)
        {
            var p = new DynamicParameters();

            p.Add("J_JopTitle", jobVacancy.Joptitle, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_Salary", jobVacancy.Salary, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_JobDescription", jobVacancy.Jobdescription, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_Opening", jobVacancy.Opening, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_JobLocation", jobVacancy.Joblocation, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_ApplayDate", jobVacancy.Applaydate, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("J_LastDate", jobVacancy.Lastdate, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("J_PostingDate", jobVacancy.Postingdate, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("J_companyID", jobVacancy.Company_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);

            var result = DbContext.Connection.ExecuteAsync("JobVacancy_Package.CreateJobVacancy", p, commandType: CommandType.StoredProcedure);


            return "Successfully";
        }

        public bool DeleteJobVacancy(int Id)
        {
            var p = new DynamicParameters();
            p.Add("JV_Id", Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("JobVacancy_Package.DeleteJobVacancy", p, commandType: CommandType.StoredProcedure);


            return true;
        }

        public List<Jobvacancy> GetAllJobVacancy()
        {
            IEnumerable<Jobvacancy> result = DbContext.Connection.Query<Jobvacancy>("JobVacancy_Package.GetAllJobVacancy", commandType: CommandType.StoredProcedure);
            return result.Distinct().ToList();
        }
        public List<applycompanyvac> GetAllJobVacancyCompany()
        {
            IEnumerable<applycompanyvac> result = DbContext.Connection.Query<applycompanyvac>("JobVacancy_Package.GetAllJobVacancyCompany"
          
            , commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
      
        public List<applycompanyvac> SearchBetweenToDate(searchtwodate searchtwodate1)
        {      var p = new DynamicParameters();
            p.Add("DateFrom", searchtwodate1.DateFrom, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("DateTo", searchtwodate1.DateTo, dbType: DbType.Date, direction: ParameterDirection.Input);

            IEnumerable<applycompanyvac> result = DbContext.Connection.Query<applycompanyvac>("JobVacancy_Package.SearchBetweenToDate",p

            , commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        public bool UpdateJobVacancy(Jobvacancy jobvacancy)
        {
            var p = new DynamicParameters();
            p.Add("JV_Id", jobvacancy.Jobvacancy_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("J_JopTitle", jobvacancy.Joptitle, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_Salary", jobvacancy.Salary, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_JobDescription", jobvacancy.Jobdescription, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_Opening", jobvacancy.Opening, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_JobLocation", jobvacancy.Joblocation, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("J_ApplayDate", jobvacancy.Applaydate, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("J_LastDate", jobvacancy.Lastdate, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("J_PostingDate", jobvacancy.Postingdate, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("J_companyID", jobvacancy.Company_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);

            var result = DbContext.Connection.ExecuteAsync("JobVacancy_Package.UpdateJobVacancy", p, commandType: CommandType.StoredProcedure);


            return true;
        }

        //getalljobbycompanyId

        public List<Jobvacancy> getalljobbycompanyId(int id)
        {
            var p = new DynamicParameters();
            p.Add("@comId", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Jobvacancy> result = DbContext.Connection.Query<Jobvacancy>("JobVacancy_Package.getalljobbycompanyId", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        //getbyJobTitle
        public List<applycompanyvac> getalljobbyjobTilte(string title)
        {
            var p = new DynamicParameters();
            p.Add("@J_JopTitle", title, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<applycompanyvac> result = DbContext.Connection.Query<applycompanyvac>("JobVacancy_Package.getbyJobTitle", p, commandType: CommandType.StoredProcedure);
            return result.ToList();

        }

        //getbyJobTitleCompany
        public List<Jobvacancy> getbyJobTitleCompany(SearchJobTitle searchJobTitle)
        {
            var p = new DynamicParameters();
            p.Add("@J_JopTitle", searchJobTitle.joptitle, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_Id", searchJobTitle.company_ID, dbType: DbType.Int16, direction: ParameterDirection.Input);

            IEnumerable<Jobvacancy> result = DbContext.Connection.Query<Jobvacancy>("JobVacancy_Package.getbyJobTitleCompany", p, commandType: CommandType.StoredProcedure);
            return result.ToList();

        }
        //getbyJobId
        public List<Jobvacancy> getbyJobId(int id)
        {
            var p = new DynamicParameters();
            p.Add("@JV_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Jobvacancy> result = DbContext.Connection.Query<Jobvacancy>("JobVacancy_Package.getbyJobId", p, commandType: CommandType.StoredProcedure);
            return result.ToList(); ;

        }


        public List<numberjob> GetNumberjobs(searchtwodate searchtwodate1)
        {
            var p = new DynamicParameters();
            p.Add("DateFrom", searchtwodate1.DateFrom, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("DateTo", searchtwodate1.DateTo, dbType: DbType.Date, direction: ParameterDirection.Input);

            IEnumerable<numberjob> result = DbContext.Connection.Query<numberjob>("JobVacancy_Package.numberofjob", p, commandType: CommandType.StoredProcedure);

            return result.ToList();
        }
    }
}
