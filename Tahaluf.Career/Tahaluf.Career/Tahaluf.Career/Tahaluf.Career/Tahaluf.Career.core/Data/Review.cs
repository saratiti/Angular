using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Review
    {

        [Key]
        public int Id { get; set; }
        public int Value { get; set; }
        [ForeignKey("Home_ID")]
        public int Home_ID { get; set; }
        public virtual Homepage Home { get; set; }
    }
}
