using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Service
{
    public interface IClientService
    {
        public List<Client> GetAllClient();
        public bool CreateClient(Client client);
        public bool UpdateClient(Client client);
        public bool DeleteClient(int id);
        public List<Client> GetByclientId(int id);
    }
}
