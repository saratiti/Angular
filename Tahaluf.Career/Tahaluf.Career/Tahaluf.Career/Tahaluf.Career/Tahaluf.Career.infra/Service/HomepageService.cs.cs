using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class HomepageService : IHomepageService
    {
        private readonly IHomepageRepository IhomeRepository;

        public HomepageService(IHomepageRepository homeRepository)
        {

            this.IhomeRepository = homeRepository;
        }
        public string CreateHome(Homepage homepage)
        {
            return IhomeRepository.CreateHome(homepage);
        }

        public bool DeleteHome(int id)
        {
            return IhomeRepository.DeleteHome(id);
        }

        public List<Homepage> GetAllHome()
        {
            return IhomeRepository.GetAllHome();
        }

        public bool UpdateHome(Homepage homepage)
        {
           return IhomeRepository.UpdateHome(homepage);
        }

        public List<Homepage> GetbyHomeId(int id)
        {
            return IhomeRepository.GetbyHomeId(id);
        }
    }
}
