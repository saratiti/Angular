using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutController : Controller
    {
        private readonly IAboutService aboutService;

        public AboutController(IAboutService _aboutService)
        {
            aboutService = _aboutService;
        }
        [HttpPost]
        public bool CreateAbout(About about)
        {
            return aboutService.CreateAbout(about);
        }
        [HttpPut]
        public bool UpdateAbout(About about)
        { return aboutService.UpdateAbout(about); }
        [HttpGet]
        public List<About> GetAllAbout()
        {
            return aboutService.GetAllAbout();
        }
        [HttpDelete]
        public bool DeleteAbout(int Id)
        {
            return aboutService.DeleteAbout(Id);
        }
        [HttpPut]
        [Route("action")]
        public bool UpdateImage(About about)
        {
            return aboutService.UpdateImage(about);

        }

        [HttpPost]
        [Route("UploadImage")]
        public About UploadImage()
        {

            
            try
            {
                var file = Request.Form.Files[0];
                var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
                var fullPath = Path.Combine("C:\\Users\\Administrator\\Desktop\\FinalProject\\Career\\src\\assets\\images", fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                About Item = new About();
                Item.ImageUS = fileName;
                return Item;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
