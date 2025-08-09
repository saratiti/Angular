using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;
using Tahaluf.Career.infra.Repository;

namespace Tahaluf.Career.infra.Service
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository IcontactRepository;

        public ContactService(IContactRepository contactRepository)
        {

            this.IcontactRepository = contactRepository;
        }
        public string CreateContact(Contact contact)
        {
            return IcontactRepository.CreateContact(contact);
        }

        public bool DeleteContact(int Id)
        {
            return IcontactRepository.DeleteContact(Id);
        }

        public List<Contact> GetAllContact()
        {
            return IcontactRepository.GetAllContact();
        }

        public bool UpdateContact(Contact contact)
        {
            return IcontactRepository.UpdateContact(contact);
        }
    }
}
