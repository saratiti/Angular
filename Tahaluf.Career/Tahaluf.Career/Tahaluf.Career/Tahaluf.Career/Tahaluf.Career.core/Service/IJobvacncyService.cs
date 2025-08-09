using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;

namespace Tahaluf.Career.core.Service
{
   public interface IJobvacncyService
    {
        public string CreateJobVacancy(Jobvacancy jobVacancy);
        public bool UpdateJobVacancy(Jobvacancy jobvacancy);
        public List<Jobvacancy> GetAllJobVacancy();
        public bool DeleteJobVacancy(int Id);
 
        public List<applycompanyvac> GetAllJobVacancyCompany();
        public List<applycompanyvac> getalljobbyjobTilte(string title);

        public List<Jobvacancy> getalljobbycompanyId(int id);
        public List<Jobvacancy> getbyJobId(int id);
      
        public List<Jobvacancy> getbyJobTitleCompany(SearchJobTitle searchJobTitle);
        public List<applycompanyvac> SearchBetweenToDate(searchtwodate searchtwodate1);
        public List<numberjob> GetNumberjobs(searchtwodate searchtwodate1);

    }
}
