using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Company
    {
        [Key]
        public int Company_ID { get; set; }
        public string Fullname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string LogoImage { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string RoleName { get; set; }
        public string CompanyUrl { get; set; }
        public DateTime? registerDate { get; set; }
        public int countcompany { get; set; }

        
        public  ICollection<Jobvacancy> Jobvacancies { get; set; }
        
       

    }
}
