using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository companyRepository;
        public CompanyService(ICompanyRepository _companyRepository)
        {
            companyRepository = _companyRepository;
        }
        public List<Company> GetAllCompany()
        {
            return companyRepository.GetAllCompany();
        }
        public bool CreateCompany(Company company)
        {
            return companyRepository.CreateCompany(company);
        }
        public bool UpdateCompany(Company company)
        {
            return companyRepository.UpdateCompany(company);

        }
        public bool DeleteCompany(int id)
        {
            return companyRepository.DeleteCompany(id);

        }

        public List<Company> getNameCompany(string name)
        {
            return companyRepository.getNameCompany(name);
        }
        public List<Company> getByCompanyId(int id)
        {
            return companyRepository.getByCompanyId(id);
        }
        public bool UpdateCompanyPASS(Company company)
        {
            return companyRepository.UpdateCompanyPASS(company);
        }
        public List<Company> GetAllCompanyregister(searchtwodate searchtwodate1)
        { 
        return companyRepository.GetAllCompanyregister(searchtwodate1);
        }
    }
}
