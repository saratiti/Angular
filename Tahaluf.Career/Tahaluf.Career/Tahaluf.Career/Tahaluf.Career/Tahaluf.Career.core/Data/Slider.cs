using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Slider
    {

        [Key]
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public string Title { get; set; }
        public string Caption { get; set; }

        [ForeignKey("Home_ID")]
        public int Home_ID { get; set; }
        public virtual Homepage Home { get; set; }
    }
}
