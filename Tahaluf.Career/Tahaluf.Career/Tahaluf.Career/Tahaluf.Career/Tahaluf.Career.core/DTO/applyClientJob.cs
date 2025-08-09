using System;
using System.Collections.Generic;
using System.Text;

namespace Tahaluf.Career.core.DTO
{
    public class applyClientJob
    {
        public int Client_ID { get; set; }
        public int APPLYJOB_ID { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string Joptitle { get; set; }
        public string Imagename { get; set; }
        public string Joblocation { get; set; }
        public DateTime? APPLYDATE { get; set; }
        public DateTime? RESPONSEDATE { get; set; }
        public int Company_ID { get; set; }
        public int JobVacancy_ID { get; set; }

        public string Stutus { get; set; }

        public string LogoImage { get; set; }
        public string Fullname { get; set; }
    }
}
