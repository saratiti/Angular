using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Tahaluf.Career.core.Common;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;

namespace Tahaluf.Career.infra.Repository
{
    public class SliderRepository : ISliderRepository
    {
        private readonly IDbContext DbContext;

        public SliderRepository(IDbContext dbcontext)
        {
            DbContext = dbcontext;
        }
        //PROCEDURE UpdateSlider(S_Id IN NUMBER, S_ImagePath in VARCHAR2, S_Title IN VARCHAR2, S_Caption IN VARCHAR2)
        public string CreateSlider(Slider slider)
        {

            var p = new DynamicParameters();
            p.Add("S_ImagePath", slider.ImagePath, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("S_Title", slider.Title, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("S_Caption", slider.Caption, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Slider_Package.CreateSlider", p, commandType: CommandType.StoredProcedure);

            return "Successfully";
        }

        public bool DeleteSlider(int id)
        {
            var p = new DynamicParameters();
            p.Add("S_Id",id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Slider_Package.DeleteSlider", p, commandType: CommandType.StoredProcedure);

            return true;
        }

        public List<Slider> GetAllSlider()
        {
            IEnumerable<Slider> result = DbContext.Connection.Query<Slider>("Slider_Package.GetAllSlider", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UpdateSlider(Slider slider)
        {
            var p = new DynamicParameters();
            p.Add("S_Id", slider.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("S_ImagePath", slider.ImagePath, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("S_Title", slider.Title, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("S_Caption", slider.Caption, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Slider_Package.UpdateSlider", p, commandType: CommandType.StoredProcedure);

            return true;
        }
    }
}
