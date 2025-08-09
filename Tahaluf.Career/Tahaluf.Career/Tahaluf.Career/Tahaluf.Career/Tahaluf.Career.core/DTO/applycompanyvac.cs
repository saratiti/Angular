using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.DTO
{
    public class applycompanyvac
    {

        public int APPLYJOB_ID { get; set; }
        public string UPLOADCV { get; set; }
        //public string UPLOADCERTIFICATE { get; set; }
        public DateTime? APPLYDATE { get; set; }
        public DateTime? RESPONSEDATE { get; set; }
        public string MESSAGE { get; set; }
        public string Stutus { get; set; }
        public string Fullname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string LogoImage { get; set; }
        public string CompanyUrl { get; set; }
        public string Joptitle { get; set; }
        public string Salary { get; set; }
        public string Jobdescription { get; set; }
        public string Opening { get; set; }
        public string Joblocation { get; set; }
        public DateTime? Applaydate { get; set; }
        public DateTime? Lastdate { get; set; }
        public DateTime? Postingdate { get; set; }
        public int Client_ID { get; set; }
        public int JobVacancy_ID { get; set; }
        public int Company_ID { get; set; }

    }
}
