using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class MessageService : IMessageService
    {
        private readonly IMessageRepository messageRepository;
        public MessageService(IMessageRepository messageRepository)
        {
           this.messageRepository = messageRepository;
        }
        public string CreateMessage(Message message)
        {
            return messageRepository.CreateMessage(message);
        }

        public bool DeleteMessage(int Id)
        {
            return messageRepository.DeleteMessage(Id);
        }

        public List<Message> GetAllMessage()
        {
            return messageRepository.GetAllMessage();
        }

        public bool UpdateMessage(Message message)
        {
            return messageRepository.UpdateMessage(message);
        }
    }
}
