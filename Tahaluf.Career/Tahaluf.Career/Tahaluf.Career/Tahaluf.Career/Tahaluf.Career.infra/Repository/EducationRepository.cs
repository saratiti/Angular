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
    public class EducationRepository : IEducationRepository
    {
        private readonly IDbContext dbContext;

        public EducationRepository(IDbContext dbcontext)
        {
            dbContext = dbcontext;
        }


        //......Get All Education ....///
        public List<Education> GetAllEducation()
        {
            IEnumerable<Education> result = dbContext.Connection.Query<Education>("Education_Package.GetAllEducation", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        ///....Create Education....///
        public bool CreateEducation(Education education)
        {
            var p = new DynamicParameters();
            p.Add("E_Major", education.Major, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("E_University", education.University, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("E_Degree", education.Degree, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("E_GPA", education.Gpa, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("E_UploadCV", education.Uploadcv, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("E_UploadCertificate", education.Uploadcertificate, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("E_Achivement", education.Achivement, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("C_id", education.Client_ID, dbType: DbType.String, direction: ParameterDirection.Input);
            

            var result = dbContext.Connection.ExecuteAsync("Education_Package.CreateEducation", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdateEducation(Education education)
        {
            var p = new DynamicParameters();
            p.Add("Edu_Id", education.Education_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("E_Major", education.Major, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("E_University", education.University, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("E_Degree", education.Degree, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("E_GPA", education.Gpa, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("E_UploadCV", education.Uploadcv, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("E_UploadCertificate", education.Uploadcertificate, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("E_Achivement", education.Achivement, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("C_id", education.Client_ID, dbType: DbType.String, direction: ParameterDirection.Input);

            var result = dbContext.Connection.ExecuteAsync("Education_Package.UpdateEducation", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        ///...................Delete Education............///
        public bool DeleteEducation(int id)
        {
            var p = new DynamicParameters();
            p.Add("Edu_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = dbContext.Connection.ExecuteAsync("Education_Package.DeleteEducation", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        // Get All Client with Education
        public List<clientEdu> GetAllClientEdu()
        {
            IEnumerable<clientEdu> result = dbContext.Connection.Query<clientEdu>("Education_Package.GetAllClientEdu", 
          
            commandType: CommandType.StoredProcedure);
            return result.ToList();


        }
        public List<Education> GetEducationbyclientid(int id)
        {
            var p = new DynamicParameters();
            p.Add("@C_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Education> result = dbContext.Connection.Query<Education>("Education_Package.GetEducationbyclientid", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        
    }
    }
