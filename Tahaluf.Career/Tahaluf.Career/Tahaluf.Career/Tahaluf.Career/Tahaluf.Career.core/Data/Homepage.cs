using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Tahaluf.Career.core.Data
{
    public class Homepage
    {
        [Key]
        public int Id { get; set; }
        public string Namehome { get; set; }
        [ForeignKey("Client_ID")]
        public int Client_ID { get; set; }
        public virtual Client Client { get; set; }
        public ICollection<Contact> Contacts { get; set; }
        public  ICollection<Review> Reviews { get; set; }
        public  ICollection<Slider> Sliders { get; set; }
        public ICollection<Testimonial> Testimonials { get; set; }

    }
}
