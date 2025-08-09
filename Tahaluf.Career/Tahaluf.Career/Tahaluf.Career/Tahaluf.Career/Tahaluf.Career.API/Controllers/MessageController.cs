using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : Controller
    {
        private readonly IMessageService messageService;
        public MessageController(IMessageService messageService)
        {
            this.messageService = messageService;
        }
        [HttpPost]
        public string CreateMessage(Message message)
        {
            return messageService.CreateMessage(message);
        }
        [HttpDelete("{id}")]
        public bool DeleteMessage(int Id)
        {
            return messageService.DeleteMessage(Id);
        }
        [HttpGet]
        public List<Message> GetAllMessage()
        {
            return messageService.GetAllMessage();
        }
        [HttpPut]
        public bool UpdateMessage(Message message)
        {
            return messageService.UpdateMessage(message);
        }
    }
}
