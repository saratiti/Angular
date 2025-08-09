using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Service
{
    public interface IAboutService
    {
        public bool CreateAbout(About about);
        public bool UpdateAbout(About about);
        public List<About> GetAllAbout();
        public bool DeleteAbout(int Id);
        public bool UpdateImage(About about);
    }
}
