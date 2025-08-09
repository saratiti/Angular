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
    public class TestimonialRepository : ITestimonialRepository
    {
        private readonly IDbContext DbContext;

        public TestimonialRepository(IDbContext dbcontext)
        {
            DbContext = dbcontext;
        }
        public string CreateTestimonial(Testimonial testimonial)
        {

            var p = new DynamicParameters();

           
            p.Add("T_NickName", testimonial.NickName, dbType: DbType.String, direction: ParameterDirection.Input); 
            p.Add("T_Message", testimonial.Message, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("T_Image", testimonial.ImagePath, dbType: DbType.String, direction: ParameterDirection.Input);

            var result = DbContext.Connection.ExecuteAsync("Testimonial_Package.CreateTestimonial", p, commandType: CommandType.StoredProcedure);

            return "Successfully";
        }

        public bool DeleteTestimonial(int id)
        {
            var p = new DynamicParameters();
            p.Add("T_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);          
            var result = DbContext.Connection.ExecuteAsync("Testimonial_Package.DeleteTestimonial", p, commandType: CommandType.StoredProcedure);

            return true;
        }

        public List<Testimonial> GetAllTestimonial()
        {
            IEnumerable<Testimonial> result = DbContext.Connection.Query<Testimonial>("Testimonial_Package.GetAllTestimonial", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        public List<Testimonial> GetAllTestimonialhome()
        {
            IEnumerable<Testimonial> result = DbContext.Connection.Query<Testimonial>("Testimonial_Package.GetAllTestimonialhome", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        

        public bool UpdateTestimonial(Testimonial testimonial)
        {
            
            var p = new DynamicParameters();
        
            p.Add("T_Id", testimonial.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("T_display", testimonial.display, dbType: DbType.String, direction: ParameterDirection.Input);  

            var result = DbContext.Connection.ExecuteAsync("Testimonial_Package.UpdateTestimonial", p, commandType: CommandType.StoredProcedure);

            return true;
        }
    }
}
