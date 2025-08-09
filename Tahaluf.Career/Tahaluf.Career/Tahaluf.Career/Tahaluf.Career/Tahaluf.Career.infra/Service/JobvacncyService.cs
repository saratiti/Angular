using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class JobvacncyService : IJobvacncyService
    {
        private readonly IJobvacncyRepository IjobRepository;

        public JobvacncyService(IJobvacncyRepository IjobRepository)
        {

            this.IjobRepository = IjobRepository;
        }
        public string CreateJobVacancy(Jobvacancy jobVacancy)
        {
            return IjobRepository.CreateJobVacancy(jobVacancy);
        }

        public bool DeleteJobVacancy(int Id)
        {
            return IjobRepository.DeleteJobVacancy(Id);
        }

        public List<Jobvacancy> GetAllJobVacancy()
        {
            return IjobRepository.GetAllJobVacancy();
        }

        public bool UpdateJobVacancy(Jobvacancy jobvacancy)
        {
            return IjobRepository.UpdateJobVacancy(jobvacancy);
        }
        public List<applycompanyvac> GetAllJobVacancyCompany()
        {
            return IjobRepository.GetAllJobVacancyCompany();
        }
        public List<applycompanyvac> getalljobbyjobTilte(string title)
        {
            return IjobRepository.getalljobbyjobTilte(title);

        }

        public List<Jobvacancy> getalljobbycompanyId(int id)
        { return IjobRepository.getalljobbycompanyId(id); }
        public List<Jobvacancy> getbyJobId(int id) 
        {
            return IjobRepository.getbyJobId(id);
        }
        public List<Jobvacancy> getbyJobTitleCompany(SearchJobTitle searchJobTitle)
        {
            return IjobRepository.getbyJobTitleCompany(searchJobTitle);
        }
        public List<applycompanyvac> SearchBetweenToDate(searchtwodate searchtwodate1)
        {
            return IjobRepository.SearchBetweenToDate(searchtwodate1);


        }
        public List<numberjob> GetNumberjobs(searchtwodate searchtwodate1)
        {
            return IjobRepository.GetNumberjobs(searchtwodate1);
         
        
        }
    }
}
