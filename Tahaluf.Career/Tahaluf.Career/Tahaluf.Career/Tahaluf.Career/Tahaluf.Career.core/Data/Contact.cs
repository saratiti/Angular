using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Contact
    {
        [Key]
        public int ID { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }
        public string userName { get; set; }
        [ForeignKey("Home_ID")]
        public int Home_ID{ get; set; } 
        public virtual Homepage Home { get; set; }
    }
}
