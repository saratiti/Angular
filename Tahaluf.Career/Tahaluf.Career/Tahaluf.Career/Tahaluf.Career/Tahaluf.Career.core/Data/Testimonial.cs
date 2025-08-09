using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Testimonial
    {
        [Key]
        public int Id { get; set; }
        public string NickName { get; set; }
        public string ImagePath { get; set; }
        public string Message { get; set; }
        public string display { get; set; }
        
        [ForeignKey("Home_ID")]
        public int Home_ID { get; set; } 
        public virtual Homepage Home { get; set; }
    }
}
