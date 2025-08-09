using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;

namespace Tahaluf.Career.core.Repository
{
    public interface IReviewRepository
    {
        public string CreateReview(Review review);
        public bool UpdateReview(Review review);
        public List<Review> GetAllReview();
        public bool DeleteReview(Review review);

    }
}
