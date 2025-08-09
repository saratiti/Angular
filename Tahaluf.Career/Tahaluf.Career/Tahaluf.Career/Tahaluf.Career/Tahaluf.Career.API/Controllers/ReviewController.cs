using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : Controller
    {
        private readonly IReviewService reviewService;

        public ReviewController(IReviewService reviewService)
        {

           this.reviewService = reviewService;
        }
        [HttpPost]
        public string CreateReview(Review review)
        {
            return reviewService.CreateReview(review);
        }
        [HttpDelete]
        public bool DeleteReview(Review review)
        {
            return reviewService.UpdateReview(review);
        }
        [HttpGet]
        public List<Review> GetAllReview()
        {
            return reviewService.GetAllReview();
        }
        [HttpPut]
        public bool UpdateReview(Review review)
        {
            return reviewService.UpdateReview(review);
        }
    }
}
