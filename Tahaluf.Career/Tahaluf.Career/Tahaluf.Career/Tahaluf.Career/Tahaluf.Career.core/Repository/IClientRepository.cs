using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Repository
{
    public interface IClientRepository
    {
        public List<Client> GetAllClient();
        public bool CreateClient(Client client);
        public bool UpdateClient(Client client);
        public bool DeleteClient(int id);
        public List<Client> GetByclientId(int id);


    }
}
