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
    public class JWTRepository: IJWTRepository
    {
        private readonly IDbContext DbContext;
        public JWTRepository(IDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public Client Auth(Client client)
        {
            var p = new DynamicParameters();
            p.Add("UName", client.UserName, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("pass", client.c_Password, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<Client> result = DbContext.Connection.Query<Client>("Client_Package.User_Login", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }
        public Company Auth(Company company)
        {
            var p = new DynamicParameters();
            p.Add("UName", company.UserName, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("pass", company.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<Company> result = DbContext.Connection.Query<Company>("Company_Package.User_Login", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }
        public List<Login> GetAllLogin()
        {
            IEnumerable<Login> result = DbContext.Connection.Query<Login>("Login_Package.GetAllLogin", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

      



    }
}


