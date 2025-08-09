using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Tahaluf.Career.core.Common;
using Tahaluf.Career.core.Data;
using Tahaluf.Career.core.DTO;
using Tahaluf.Career.core.Repository;

namespace Tahaluf.Career.infra.Repository
{
//    create or replace PACKAGE Company_Package AS
//PROCEDURE CreateCompany(CO_FullName in VARCHAR, CO_Email in VARCHAR , CO_Phone in VARCHAR, CO_Address in VARCHAR, CO_LogoImage in VARCHAR, CO_CompanyUrl in VARCHAR, Co_userName in VARCHAR, Co_role IN VARCHAR, C_pass IN VARCHAR);
//    PROCEDURE UpdateCompany(CO_Id IN NUMBER, CO_FullName in VARCHAR, CO_Email in VARCHAR , CO_Phone in VARCHAR, CO_Address in VARCHAR, CO_LogoImage in VARCHAR, CO_CompanyUrl in VARCHAR);
//    PROCEDURE UpdateCompanyPASS(C_pass IN VARCHAR, CO_Id IN NUMBER);
//    PROCEDURE GetAllCompany;
//    PROCEDURE DeleteCompany(CO_Id IN NUMBER);
//    PROCEDURE getNameCompany(CO_Na IN Varchar);
//    PROCEDURE getByCompanyId(CO_Id IN Number);
//    END Company_Package;
    public class CompanyRepository : ICompanyRepository
        {
            private readonly IDbContext dbContext;

            public CompanyRepository(IDbContext dbcontext)
            {
                dbContext = dbcontext;
            }



        //......Get All Company ....///
        public List<Company> GetAllCompany()
            {
                IEnumerable<Company> result = dbContext.Connection.Query<Company>("Company_Package.GetAllCompany", commandType: CommandType.StoredProcedure);
                return result.ToList();
            }
            ///....Create Company....///
            public bool CreateCompany(Company company)
            {
                var p = new DynamicParameters();
                p.Add("CO_FullName", company.Fullname, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_Email", company.Email, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_Phone", company.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_Address", company.Address, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_LogoImage", company.LogoImage, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_CompanyUrl", company.CompanyUrl, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("Co_userName", company.UserName, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("Co_role", company.RoleName, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("C_pass", company.Password, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_date", company.registerDate, dbType: DbType.Date, direction: ParameterDirection.Input);

            var result = dbContext.Connection.ExecuteAsync("Company_Package.CreateCompany", p, commandType: CommandType.StoredProcedure);
                return true;
            }

            ///...............Update Company.................////
            public bool UpdateCompany(Company company)
            {
                var p = new DynamicParameters();
                p.Add("CO_Id", company.Company_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
                p.Add("CO_FullName", company.Fullname, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_Email", company.Email, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_Phone", company.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_Address", company.Address, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_LogoImage", company.LogoImage, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("CO_CompanyUrl", company.CompanyUrl, dbType: DbType.String, direction: ParameterDirection.Input);


            var result = dbContext.Connection.ExecuteAsync("Company_Package.UpdateCompany", p,commandType: CommandType.StoredProcedure);
                return true;
            }

            ///...................Delete Company............///
            public bool DeleteCompany(int id)
            {
                var p = new DynamicParameters();
                p.Add("C_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
                var result = dbContext.Connection.ExecuteAsync("Company_Package.DeleteCompany", p,commandType: CommandType.StoredProcedure);
                return true;
            }
        /// update password ////
        public bool UpdateCompanyPASS(Company company)
        {
            var p = new DynamicParameters();
            p.Add("CO_Id", company.Company_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("C_pass", company.Password, dbType: DbType.String, direction: ParameterDirection.Input);
         

            var result = dbContext.Connection.ExecuteAsync("Company_Package.UpdateCompanyPASS", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public List<Company> getNameCompany(string name)
        {
            var p = new DynamicParameters();
            p.Add("CO_Na", name, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<Company> result = dbContext.Connection.Query<Company>("Company_Package.getNameCompany", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<Company> getByCompanyId(int id)
        {
            var p = new DynamicParameters();
            p.Add("CO_Id", id, dbType: DbType.Int16, direction: ParameterDirection.Input);
            IEnumerable<Company> result = dbContext.Connection.Query<Company>("Company_Package.getByCompanyId", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }


   
        public List<Company> GetAllCompanyregister(searchtwodate searchtwodate1)
        {
            var p = new DynamicParameters();
            p.Add("DateFrom", searchtwodate1.DateFrom, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("DateTo", searchtwodate1.DateTo, dbType: DbType.Date, direction: ParameterDirection.Input);
       
            IEnumerable<Company> result = dbContext.Connection.Query<Company>("Company_Package.GetAllCompanyregister",p,commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

    }
    }


