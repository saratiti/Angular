using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;

namespace Tahaluf.Career.core.Service
{
    public interface ICompanyService
    {
        public List<Company> GetAllCompany();
        public bool CreateCompany(Company company);
        public bool UpdateCompany(Company company);
        public bool DeleteCompany(int id);
        public List<Company> getNameCompany(string name);
        public List<Company> getByCompanyId(int id);
        public bool UpdateCompanyPASS(Company company);
        public List<Company> GetAllCompanyregister(searchtwodate searchtwodate1);
    }
}
