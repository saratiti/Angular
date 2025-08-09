using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : Controller
    {
        private readonly IContactService service;

        public ContactController(IContactService service)
        {
          this.service = service;
        }
        [HttpPost]
        public string CreateContact(Contact contact)
        {
            return service.CreateContact(contact);
        }
        [HttpDelete("{id}")]
        public bool DeleteContact(int Id)
        {
            return service.DeleteContact(Id);
        }
        [HttpGet]
        public List<Contact> GetAllContact()
        {
            return service.GetAllContact();
        }
        [HttpPut]
        public bool UpdateContact([FromBody]Contact contact)
        {
            return service.UpdateContact(contact);
        }
    }
}
