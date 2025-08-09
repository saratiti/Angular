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
    public class SliderController : Controller
    {
        private readonly ISliderService sliderService;

        public SliderController(ISliderService sliderService)
        {

            this.sliderService = sliderService;
        }
     [HttpPost ]
        public string CreateSlider(Slider slider)
        {
            return sliderService.CreateSlider(slider);
        }
        [HttpDelete]
        [Route("delete/{id}")]
        public bool DeleteSlider(int id)
        {
            return sliderService.DeleteSlider(id);
        }
        [HttpGet]
        public List<Slider> GetAllSlider()
        {
            return sliderService.GetAllSlider();
        }
        [HttpPut]
        public bool UpdateSlider(Slider slider)
        {
            return sliderService.UpdateSlider(slider);
        }
        [HttpPost]
        [Route("UploadImage")]
        public Slider UploadImage()
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
               
                Slider Item = new Slider();
                Item.ImagePath = fileName;
                sliderService.CreateSlider(Item);
                return Item;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
