using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Repository
{
    public interface IContactRepository
    {
        public string CreateContact(Contact contact);
        public bool UpdateContact(Contact contact);
        public List<Contact> GetAllContact();
        public bool DeleteContact(int Id);
    }
}
