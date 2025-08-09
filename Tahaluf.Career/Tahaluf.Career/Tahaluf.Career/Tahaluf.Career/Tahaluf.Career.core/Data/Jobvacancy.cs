using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Jobvacancy
    {
        [Key]
        public int Jobvacancy_ID { get; set; }
        public string Joptitle { get; set; }
        public string Salary { get; set; }
        public string Jobdescription { get; set; }
        public string Opening { get; set; }
        public string Joblocation { get; set; }
        public DateTime? Applaydate { get; set; }
        public DateTime? Lastdate { get; set; }
        public DateTime? Postingdate { get; set; }
        [ForeignKey("Company_ID")]
        public int Company_ID { get; set; }
        public virtual Company Company { get; set; }
        public  ICollection<Applyjob> Applyjobs { get; set; }
       
    }
}

