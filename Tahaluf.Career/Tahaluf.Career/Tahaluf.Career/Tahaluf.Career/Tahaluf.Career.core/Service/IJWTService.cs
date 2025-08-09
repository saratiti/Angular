using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Service
{
    public interface IJWTService
    {
        public List<Login> GetAllLogin();
        public string Auth(Client client);
        public string Auth(Company company);
    }
}
