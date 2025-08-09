using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestimonialController : Controller
    {
        private readonly ITestimonialService testimonialService;

        public TestimonialController(ITestimonialService testimonialService)
        {

           this. testimonialService = testimonialService;
        }
        [HttpPost]
        public string CreateTestimonial(Testimonial testimonial)
        {
            return testimonialService.CreateTestimonial(testimonial);
        }
        [HttpDelete("{id}")]
        public bool DeleteTestimonial(int id)
        {
            return testimonialService.DeleteTestimonial(id);
        }
        [HttpGet]
        public List<Testimonial> GetAllTestimonial()
        {
            return testimonialService.GetAllTestimonial();
        }
        [HttpPut]
        public bool UpdateTestimonial(Testimonial testimonial)
        {
            return testimonialService.UpdateTestimonial(testimonial);
        }

        [HttpGet]
        [Route("[action]")]
        public List<Testimonial> GetAllTestimonialhome()
        {
            return testimonialService.GetAllTestimonialhome();

        }

        [HttpPost]
        [Route("UploadImage")]
        public Testimonial UploadImage()
        {

            //E:\tahaluf\test\src\assets\images
            try
            {
                var file = Request.Form.Files[0];
                var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
                var fullPath = Path.Combine("C:\\Users\\Administrator\\Desktop\\FinalProject\\Career\\src\\assets\\images", fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                Testimonial Item = new Testimonial();
                Item.ImagePath = fileName;
                return Item;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
