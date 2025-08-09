using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Repository
{
    public interface ITestimonialRepository
    {
        public string CreateTestimonial(Testimonial testimonial);
        public bool UpdateTestimonial(Testimonial testimonial);
        public List<Testimonial> GetAllTestimonial();
        public bool DeleteTestimonial(int id);
        public List<Testimonial> GetAllTestimonialhome();
    }
}
