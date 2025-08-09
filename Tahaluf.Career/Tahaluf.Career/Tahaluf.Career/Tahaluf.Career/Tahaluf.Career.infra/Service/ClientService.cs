using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository clientRepository;
        public ClientService(IClientRepository _clientRepository)
        {
            clientRepository = _clientRepository;
        }
        public List<Client> GetAllClient()
        {
            return clientRepository.GetAllClient();
        }
        public bool CreateClient(Client client)
        {
            return clientRepository.CreateClient(client);
        }
        public bool UpdateClient(Client client)
        {
            return clientRepository.UpdateClient(client);

        }
        public bool DeleteClient(int id)
        {
            return clientRepository.DeleteClient(id);

        }
        public List<Client> GetByclientId(int id)
        { 
            return clientRepository.GetByclientId(id);

        }
    }
}
