using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Client
    {
        [Key]
        public int Client_ID { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string Email { get; set; }
        public DateTime? BirthOfDate { get; set; }
        public string Phone { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string Imagename { get; set; }

        public string UserName { get; set; }
        public string c_Password { get; set; }
      
        public string RoleName { get; set; }

        //[ForeignKey("loginId")]
        //public int loginId { get; set; }
        //public virtual Login Login { get; set; }
        public  ICollection<Applyjob> Applyjobs { get; set; }
        public  ICollection<Message> Messages { get; set; }
        public ICollection<Education> Educations { get; set; }
        public  ICollection<Homepage> Homepages { get; set; }

    }
}
