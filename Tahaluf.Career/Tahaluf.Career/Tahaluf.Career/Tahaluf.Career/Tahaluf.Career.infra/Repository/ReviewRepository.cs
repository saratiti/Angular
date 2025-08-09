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
    public class ReviewRepository : IReviewRepository
    {
        private readonly IDbContext DbContext;

        public ReviewRepository(IDbContext dbcontext)
        {
            DbContext = dbcontext;
        }
        public string CreateReview(Review review)
        {
            var p = new DynamicParameters();
            p.Add("R_Value", review.Value, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Review_Package.CreateReview", p, commandType: CommandType.StoredProcedure);

            return "Successfully";
        }

        public bool DeleteReview(Review review)
        {
            var p = new DynamicParameters();
            p.Add("R_Id", review.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Review_Package.DeleteReview", p, commandType: CommandType.StoredProcedure);

            return true;
        }

        public List<Review> GetAllReview()
        {
            IEnumerable<Review> result = DbContext.Connection.Query<Review>("Review_Package.GetAllReview", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UpdateReview(Review review)
        {
            var p = new DynamicParameters();
            p.Add("R_Id", review.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("R_Value", review.Value, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = DbContext.Connection.ExecuteAsync("Review_Package.UpdateReview", p, commandType: CommandType.StoredProcedure);

            return true;
        }
    }
}
