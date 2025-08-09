using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Education
    {
        [Key]
        public int Education_ID { get; set; }
        public string Major { get; set; }
        public string University { get; set; }
        public string Degree { get; set; }
        public int Gpa { get; set; }
        public string Uploadcv { get; set; }
     
      
        [ForeignKey("Client_ID")]
        public int Client_ID { get; set; }
        public virtual Client Client { get; set; }
    }
}
