using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Service
{
    public interface IMessageService
    {
        public string CreateMessage(Message message);
        public bool UpdateMessage(Message message);
        public List<Message> GetAllMessage();
        public bool DeleteMessage(int Id);
    }
}
