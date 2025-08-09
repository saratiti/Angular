using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Login
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int LoginType { get; set; }
        public string RoleName { get; set; }
        public ICollection<Company>Companies{ get; set; }
        public ICollection<Client> clients { get; set; }
    }
}

