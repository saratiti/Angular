using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Repository
{
    public interface ISliderRepository
    {
        public string CreateSlider(Slider slider);
        public bool UpdateSlider(Slider slider);  
        public List<Slider> GetAllSlider();
        public bool DeleteSlider(int id);
    }
}
