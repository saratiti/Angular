using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Tahaluf.Career.core.Common;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;

namespace Tahaluf.Career.infra.Repository
{
    public class HomepageRepository : IHomepageRepository
    {
        private readonly IDbContext DbContext;

        public HomepageRepository(IDbContext dbcontext)
        {
            DbContext = dbcontext;
        }
        public string CreateHome(Homepage homepage)
        {
            var p = new DynamicParameters();
            p.Add("H_NameHome", homepage.Namehome, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Home_Package.CreateHome", p, commandType: CommandType.StoredProcedure);

            return "Successfully";
        }

        public bool DeleteHome(int id)
        {
            var p = new DynamicParameters();
            p.Add("H_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input); 
            var result = DbContext.Connection.ExecuteAsync("Home_Package.DeleteHome", p, commandType: CommandType.StoredProcedure);

            return true;
        }

        public List<Homepage> GetAllHome()
        {
            IEnumerable<Homepage> result = DbContext.Connection.Query<Homepage>("Home_Package.GetAllHome", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UpdateHome(Homepage homepage)
        {
            var p = new DynamicParameters();
            p.Add("H_Id", homepage.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("H_NameHome", homepage.Namehome, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Home_Package.UpdateHome", p, commandType: CommandType.StoredProcedure);

            return true;
        }

        public List<Homepage> GetbyHomeId(int id)
        {
            var p = new DynamicParameters();
            p.Add("H_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Homepage> result = DbContext.Connection.Query<Homepage>("Home_Package.GetByHomeId",p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
    }
}
