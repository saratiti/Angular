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
    public class MessageRepository : IMessageRepository
    {
        private readonly IDbContext DbContext;

        public MessageRepository(IDbContext DbContext)
        {
           this. DbContext = DbContext;
        }

        public string CreateMessage(Message message)
        {
            var p = new DynamicParameters();
            p.Add("M_Message ",message.Message1, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("M_Stutus", message.Stutus, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("M_ResponsDate", message.Responsdate, dbType: DbType.Date, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Message_Package.CreateMessage", p, commandType: CommandType.StoredProcedure);
            return "Successfully";
        }

        public bool DeleteMessage(int Id)
        {
            var p = new DynamicParameters();
            p.Add(" M_ID",Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Message_Package.DeleteMessage", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Message> GetAllMessage()
        {
            IEnumerable<Message> result = DbContext.Connection.Query<Message>("Message_Package.GetAllMessage", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UpdateMessage(Message message)
        {
            var p = new DynamicParameters();
            p.Add(" M_ID", message.Message_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("M_Message ", message.Message1, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("M_Stutus", message.Stutus, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("M_ResponsDate", message.Responsdate, dbType: DbType.Date, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Message_Package.UpdateMessage", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}

