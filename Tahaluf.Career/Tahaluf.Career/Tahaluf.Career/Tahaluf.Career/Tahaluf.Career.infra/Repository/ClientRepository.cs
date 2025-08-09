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
    public class ClientRepository : IClientRepository
    {
        private readonly IDbContext dbContext;

        public ClientRepository(IDbContext dbcontext)
        {
            dbContext = dbcontext;
        }


//        create or replace PACKAGE Client_Package AS
//PROCEDURE CreateClient(C_Fname IN VARCHAR, C_Lname IN VARCHAR, C_Email IN VARCHAR , C_BirthOfDate IN DATE , C_Phone IN VARCHAR, C_Gender IN VARCHAR, C_Address IN VARCHAR, C_ImageName IN VARCHAR, UName In VARCHAR , pass in VARCHAR, role in VARCHAR);
//        PROCEDURE UpdateClient(C_Id IN NUMBER, C_Fname IN VARCHAR, C_Lname IN VARCHAR, C_Email IN VARCHAR , C_BirthOfDate IN DATE , C_Phone IN VARCHAR, C_Gender IN VARCHAR, C_Address IN VARCHAR, C_ImageName IN VARCHAR);
//        PROCEDURE UpdatePass(C_Id IN NUMBER, pass IN VARCHAR);
//        PROCEDURE GetAllClient;
//        PROCEDURE GetByclientId(C_Id IN NUMBER);
//        PROCEDURE DeleteClient(C_Id IN NUMBER);
//        procedure User_Login(UName In VARCHAR , pass in VARCHAR);
//        END Client_Package;
        //......Get All Client ....///
        public List<Client> GetAllClient()
        {
            IEnumerable<Client> result = dbContext.Connection.Query<Client>("Client_Package.GetAllClient", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
      
       
        ///....Create Client....///
        public bool CreateClient(Client client)
        {
            var p = new DynamicParameters();
         
            p.Add("@C_Fname", client.Fname, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_Lname", client.Lname, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_Email", client.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_BirthOfDate", client.BirthOfDate, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("@C_Phone", client.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_Gender", client.Gender, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_Address", client.Address, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_ImageName", client.Imagename, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@UName", client.UserName, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@pass", client.c_Password, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@c_role", client.RoleName, dbType: DbType.String, direction: ParameterDirection.Input);

            var result = dbContext.Connection.ExecuteAsync("Client_Package.CreateClient",p, commandType: CommandType.StoredProcedure);
            return true;
        }

        ///...............Update Client.................////
        public bool UpdateClient(Client client)
        {
            var p = new DynamicParameters();
            p.Add("@C_Id", client.Client_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("@C_Fname", client.Fname, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_Lname", client.Lname, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_Email", client.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_BirthOfDate", client.BirthOfDate, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("@C_Phone", client.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_Gender", client.Gender, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_Address", client.Address, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@C_ImageName", client.Imagename, dbType: DbType.String, direction: ParameterDirection.Input);
          

            var result = dbContext.Connection.ExecuteAsync("Client_Package.UpdateClient", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool UpdatePass(Client client)
        {
            var p = new DynamicParameters();
            p.Add("@C_Id", client.Client_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("@pass", client.c_Password, dbType: DbType.String, direction: ParameterDirection.Input);



            var result = dbContext.Connection.ExecuteAsync("Client_Package.UpdatePass", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        ///...................Delete Client............///
        public bool DeleteClient(int id)
        {
            var p = new DynamicParameters();
            p.Add("@C_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = dbContext.Connection.ExecuteAsync("Client_Package.DeleteClient", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        //getby id client
        public List<Client> GetByclientId(int id) 
        {
            var p = new DynamicParameters();
            p.Add("@C_Id",id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Client> result = dbContext.Connection.Query<Client>("Client_Package.GetByclientId", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        
    }
}