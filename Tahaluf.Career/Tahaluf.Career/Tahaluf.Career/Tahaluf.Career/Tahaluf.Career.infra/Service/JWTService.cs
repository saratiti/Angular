using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;

namespace Tahaluf.Career.infra.Service
{
    public class JWTService : IJWTService
    {
        private readonly IJWTRepository jwtRepository;
        public JWTService(IJWTRepository jwtRepository)
        {
            this.jwtRepository = jwtRepository;
        }

     
        public List<Login> GetAllLogin()
        {
            return jwtRepository.GetAllLogin();
        }
        public string Auth(Client client)
        {
            var result = jwtRepository.Auth(client);  //username role name

            if (result == null)
            {
                return null;
            }
            else
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenKey = Encoding.ASCII.GetBytes("[SECRET USED TO SIGN AND VERIFY JWT TOKENS, IT CAN BE ANY STRING]");
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                {
                              new Claim(ClaimTypes.Name, result.UserName),
                              new Claim(ClaimTypes.Role, result.RoleName),
                             new Claim(ClaimTypes.NameIdentifier,result.Client_ID.ToString(), ClaimValueTypes.Integer)


                }

                 ),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }

        }

        public string Auth(Company company)
        {
            var result = jwtRepository.Auth(company);  //username role name

            if (result == null)
            {
                return null;
            }
            else
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenKey = Encoding.ASCII.GetBytes("[SECRET USED TO SIGN AND VERIFY JWT TOKENS, IT CAN BE ANY STRING]");
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                {
                              new Claim(ClaimTypes.Name, result.UserName),
                              new Claim(ClaimTypes.Role, result.RoleName),
                             new Claim(ClaimTypes.NameIdentifier,result.Company_ID.ToString(), ClaimValueTypes.Integer)


                }

                 ),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }

        }


        }
}