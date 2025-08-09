using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class TestimonialService : ITestimonialService
    {
        private readonly ITestimonialRepository testimonialRepository;

        public TestimonialService(ITestimonialRepository testimonialRepository)
        {

            this.testimonialRepository = testimonialRepository;
        }
        public string CreateTestimonial(Testimonial testimonial)
        {
            return testimonialRepository.CreateTestimonial(testimonial);
        }

        public bool DeleteTestimonial(int id)
        {
            return testimonialRepository.DeleteTestimonial(id);
        }

        public List<Testimonial> GetAllTestimonial()
        {
            return testimonialRepository.GetAllTestimonial();
        }

        public bool UpdateTestimonial(Testimonial testimonial)
        {
            return testimonialRepository.UpdateTestimonial(testimonial);
        }

        public List<Testimonial> GetAllTestimonialhome()
        {
            return testimonialRepository.GetAllTestimonialhome();
        }
    }
}
