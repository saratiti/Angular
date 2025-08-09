using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class SliderService : ISliderService
    {
        private readonly ISliderRepository sliderRepository;

        public SliderService(ISliderRepository sliderRepository)
        {

            this.sliderRepository = sliderRepository;
        }
        public string CreateSlider(Slider slider)
        {
            return sliderRepository.CreateSlider(slider);
        }

        public bool DeleteSlider(int id)
        {
            return sliderRepository.DeleteSlider(id);
        }

        public List<Slider> GetAllSlider()
        {
            return sliderRepository.GetAllSlider();
        }

        public bool UpdateSlider(Slider slider)
        {
            return sliderRepository.UpdateSlider(slider);
        }
    }
}
