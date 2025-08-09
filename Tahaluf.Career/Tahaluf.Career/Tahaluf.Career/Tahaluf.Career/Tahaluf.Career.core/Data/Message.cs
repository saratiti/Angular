using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Message
    {
        [Key]
        public int Message_ID { get; set; }
        public string Message1 { get; set; }
        public string Stutus { get; set; }
        public DateTime? Responsdate { get; set; }
        [ForeignKey("ApplyJob_ID")]
        public int ApplyJob_ID { get; set; }
        public virtual Applyjob Applyjob { get; set; }
        [ForeignKey("Client_ID")]
        public int Client_ID { get; set; }
        public virtual Client Client { get; set; }

    }
}
