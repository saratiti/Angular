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
    public class ContactRepository : IContactRepository
    {
        private readonly IDbContext DbContext;

        public ContactRepository(IDbContext dbcontext)
        {
            DbContext = dbcontext;
        }
        public string CreateContact(Contact contact)
        
        {
            var p = new DynamicParameters();
            p.Add("C_Email", contact.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("C_Phone", contact.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("C_Message", contact.Message, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("C_userName", contact.userName, dbType: DbType.String, direction: ParameterDirection.Input);

            var result = DbContext.Connection.ExecuteAsync("Contact_Package.CreateContact", p, commandType: CommandType.StoredProcedure);

            return "Successfully";
        }

        public bool DeleteContact(int Id)
        {
            var p = new DynamicParameters();
            p.Add("CT_Id", Id, dbType: DbType.Int32, direction: ParameterDirection.Input);   
            var result = DbContext.Connection.ExecuteAsync("Contact_Package.DeleteContact", p, commandType: CommandType.StoredProcedure);


            return true;
        }

        public List<Contact> GetAllContact()
        {
            IEnumerable<Contact> result = DbContext.Connection.Query<Contact>("Contact_Package.GetAllContact", commandType: CommandType.StoredProcedure);
            return result.ToList();

        }

        public bool UpdateContact(Contact contact)
        {
            var p = new DynamicParameters();
            p.Add("CT_Id", contact.ID, dbType: DbType.Int32, direction: ParameterDirection.Input);      
            p.Add("C_Email", contact.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("C_Phone", contact.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("C_Message", contact.Message, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("C_userName", contact.userName, dbType: DbType.String, direction: ParameterDirection.Input);

            var result = DbContext.Connection.ExecuteAsync("Contact_Package.UpdateContact", p, commandType: CommandType.StoredProcedure);


            return true;
        }
    }
}
