using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Service
{
    public interface IHomepageService
    {
        public string CreateHome(Homepage homepage);
        public bool UpdateHome(Homepage homepage);
        public List<Homepage> GetAllHome();
        public bool DeleteHome(int id);
        public List<Homepage> GetbyHomeId(int id);
    }
}
