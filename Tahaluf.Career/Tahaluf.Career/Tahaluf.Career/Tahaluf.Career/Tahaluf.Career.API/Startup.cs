using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tahaluf.Career.core.Common;
using Tahaluf.Career.core.Repository;
using Tahaluf.Career.core.Service;
using Tahaluf.Career.infra.Common;
using Tahaluf.Career.infra.Repository;
using Tahaluf.Career.infra.Service;

namespace Tahaluf.Career.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(corsOptions =>
            {
                corsOptions.AddPolicy("x",
                builder =>
                {
                    //builder.WithOrigins("http://127.0.0.1:4200", "http://localhost:4200", "https://localhost:4200")
                    // .AllowAnyHeader()
                    // .AllowAnyMethod();
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }
          ).AddJwtBearer(y =>
          {
              y.RequireHttpsMetadata = false;
              y.SaveToken = true;
              y.TokenValidationParameters = new TokenValidationParameters
              {
                  ValidateIssuerSigningKey = true,
                  IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("[SECRET USED TO SIGN AND VERIFY JWT TOKENS, IT CAN BE ANY STRING]")),
                  ValidateIssuer = false,
                  ValidateAudience = false
              };
          }
                    );
            services.AddControllers();
            services.AddScoped<IDbContext, DbContext>();
            services.AddScoped<IContactRepository, ContactRepository>();
            services.AddScoped<IContactService, ContactService>();
            services.AddScoped<IHomepageRepository, HomepageRepository>();
            services.AddScoped<IHomepageService, HomepageService>();
            services.AddScoped<IReviewRepository, ReviewRepository>();
            services.AddScoped<IReviewService, ReviewService>();
            services.AddScoped<IJobvacncyRepository, JobvacncyRepository>();
            services.AddScoped<IJobvacncyService, JobvacncyService>();
            services.AddScoped<ISliderRepository, SliderRepository>();
            services.AddScoped<ISliderService, SliderService>();
            services.AddScoped<ITestimonialRepository, TestimonialRepository>();
            services.AddScoped<ITestimonialService, TestimonialService>();
            services.AddScoped<IClientRepository, ClientRepository>();
            services.AddScoped<IClientService, ClientService>();
            services.AddScoped<ICompanyRepository, CompanyRepository>();
            services.AddScoped<ICompanyService, CompanyService>();
            services.AddScoped<IEducationRepository, EducationRepository>();
            services.AddScoped<IEducationService, EducationService>();
            services.AddScoped<IJWTRepository, JWTRepository>();
            services.AddScoped<IJWTService, JWTService>();
            services.AddScoped<IMessageRepository, MessageRepository>();
            services.AddScoped<IMessageService, MessageService>();
            services.AddScoped<IApplyJobRepository, ApplyJobRepository>();
            services.AddScoped<IApplyJobService, ApplyJobService>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("x");
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
