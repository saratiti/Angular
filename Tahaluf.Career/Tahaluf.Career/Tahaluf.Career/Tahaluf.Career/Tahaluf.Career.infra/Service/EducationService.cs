using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class EducationService : IEducationService
    {
        private readonly IEducationRepository educationRepository;
        public EducationService(IEducationRepository _educationRepository)
        {
            educationRepository = _educationRepository;
        }
        public List<Education> GetAllEducation()
        {
            return educationRepository.GetAllEducation();
        }

        public bool CreateEducation(Education education)
        {
            return educationRepository.CreateEducation(education);
        }
        public bool UpdateEducation(Education education)
        {
            return educationRepository.UpdateEducation(education);
        }
        public bool DeleteEducation(int id)
        {
            return educationRepository.DeleteEducation(id);

        }
        public List<clientEdu> GetAllClientEdu()
        {
            return educationRepository.GetAllClientEdu();
        }
        public List<Education> GetEducationbyclientid(int id)
        {
            return educationRepository.GetEducationbyclientid(id);
        }

    }
}

