using System;
using System.Collections.Generic;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository reviewRepository;

        public ReviewService(IReviewRepository reviewRepository)
        {

            this.reviewRepository = reviewRepository;
        }
        public string CreateReview(Review review)
        {
            return reviewRepository.CreateReview(review);
        }

        public bool DeleteReview(Review review)
        {
            return reviewRepository.UpdateReview(review);
        }

        public List<Review> GetAllReview()
        {
            return reviewRepository.GetAllReview();
        }

        public bool UpdateReview(Review review)
        {
            return reviewRepository.UpdateReview(review);
        }
    }
}
