using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Applyjob
    {
        [Key]
        public int APPLYJOB_ID { get; set; }
        public string UPLOADCV { get; set; }
        //public string UPLOADCERTIFICATE { get; set; }
        public DateTime? APPLYDATE { get; set; }
        public DateTime? RESPONSEDATE { get; set; }
        public string MESSAGE { get; set; }
        public string Stutus { get; set; }
        public int countjob { get; set; }


        [ForeignKey("CLIENT_ID")]
        public int Client_ID { get; set; }
        public virtual Client client { get; set; }
        [ForeignKey("JobVacancy_ID")]
        public int JobVacancy_ID { get; set; }
        public virtual Jobvacancy jobvacancy { get; set; }
       
    }
}
