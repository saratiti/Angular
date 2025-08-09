using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;

namespace Tahaluf.Career.core.Service
{
    public interface IEducationService
    {
        public List<Education> GetAllEducation();
        public bool CreateEducation(Education education);
        public bool UpdateEducation(Education education);
        public bool DeleteEducation(int id);
        public List<clientEdu> GetAllClientEdu();
        public List<Education> GetEducationbyclientid(int id);
    }
}
