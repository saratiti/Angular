using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class AboutService: IAboutService
    {
        private readonly IAboutRepository aboutRepository;
        public AboutService(IAboutRepository _aboutRepository)
        {
            aboutRepository = _aboutRepository;
        }
        public bool CreateAbout(About about)
        {
            return aboutRepository.CreateAbout(about);
        }
        public bool UpdateAbout(About about)
        {
            return aboutRepository.UpdateAbout(about);
        }
        public List<About> GetAllAbout()
        {
            return aboutRepository.GetAllAbout();
        }
        public bool DeleteAbout(int Id)
        {
            return aboutRepository.DeleteAbout(Id);
        }
        public bool UpdateImage(About about)
        {
            return aboutRepository.UpdateImage(about);
        }
    }
}
