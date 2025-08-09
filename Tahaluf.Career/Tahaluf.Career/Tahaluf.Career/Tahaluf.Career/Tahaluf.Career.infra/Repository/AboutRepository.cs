using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Dapper;
using Tahaluf.Career.core.Common;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;

namespace Tahaluf.Career.infra.Repository
{
    public class AboutRepository : IAboutRepository
    {
        private readonly IDbContext dbContext;

        public AboutRepository(IDbContext dbcontext)
        {
            dbContext = dbcontext;
        }

        //PROCEDURE CreateAbout(A_Title in VARCHAR, A_Caption IN VARCHAR, A_ImageUS In Varchar);
        //PROCEDURE UpdateAbout(A_Id IN NUMBER, A_Title in VARCHAR, A_Caption IN VARCHAR, A_ImageUS In Varchar);
        //PROCEDURE GetAllAbout;
        //PROCEDURE DeleteAbout(A_Id IN NUMBER);
        public bool CreateAbout(About about)
        {
            var p = new DynamicParameters();
            p.Add("@A_Title", about.Title, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@A_Caption", about.Caption, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@A_ImageUS", about.ImageUS, dbType: DbType.String, direction: ParameterDirection.Input);


            var result = dbContext.Connection.ExecuteAsync("About_Package.CreateAbout", p, commandType: CommandType.StoredProcedure);
            return true;

        }
        public bool UpdateAbout(About about) {
            var p = new DynamicParameters();
            p.Add("@A_Id", about.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("@A_Title", about.Title, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@A_Caption", about.Caption, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@A_ImageUS", about.ImageUS, dbType: DbType.String, direction: ParameterDirection.Input);


            var result = dbContext.Connection.ExecuteAsync("About_Package.UpdateAbout", p, commandType: CommandType.StoredProcedure);
            return true;

        }

         public bool UpdateImage(About about)
        {
            var p = new DynamicParameters();
            p.Add("@A_Id", about.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
  
            p.Add("@A_ImageUS", about.ImageUS, dbType: DbType.String, direction: ParameterDirection.Input);


            var result = dbContext.Connection.ExecuteAsync("About_Package.UpdateImage", p, commandType: CommandType.StoredProcedure);
            return true;

        }
        public List<About> GetAllAbout() {


            IEnumerable<About> result = dbContext.Connection.Query<About>("About_Package.GetAllAbout", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        public bool DeleteAbout(int Id) {

            var p = new DynamicParameters();
            p.Add("@A_Id", Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = dbContext.Connection.ExecuteAsync("About_Package.DeleteAbout", p, commandType: CommandType.StoredProcedure);
            return true;

        }
    }
}
