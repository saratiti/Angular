using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Repository
{
    public interface IJWTRepository
    {
        public List<Login> GetAllLogin();
        public Client Auth(Client client);
        public Company Auth(Company company);
    }
}
