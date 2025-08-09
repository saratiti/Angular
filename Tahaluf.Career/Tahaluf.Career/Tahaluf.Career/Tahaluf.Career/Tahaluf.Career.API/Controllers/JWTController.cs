using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JWTController : Controller
    {
        private readonly IJWTService jwtService;

        public JWTController(IJWTService jwtService)
        {
            this.jwtService = jwtService;
        }
        [HttpGet]
     
        [ProducesResponseType(typeof(List<Login>), StatusCodes.Status200OK)]
        public List<Login> GetAllLogin()
        {
            return jwtService.GetAllLogin();

        }
        [HttpPost]
      
        public IActionResult Auth([FromBody] Client client)
        {
            var token = jwtService.Auth(client);
            if (token == null)
            {
                return Unauthorized();
            }
            else
            {
                return Ok(token);
            }
        }
        [HttpPost]
        [Route("companylogin")]
        public IActionResult Auth([FromBody] Company company)
        {
            var token = jwtService.Auth(company);
            if (token == null)
            {
                return Unauthorized();
            }
            else
            {
                return Ok(token);
            }
        }

    }
}
