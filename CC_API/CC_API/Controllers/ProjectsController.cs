using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CC_API.Models;

namespace CC_API.Controllers
{
    public class ProjectsController : ApiController
    {
        private CC_DBEntities db = new CC_DBEntities();

        [System.Web.Http.Route("api/Profiles/getMyProjects")]
        [HttpGet]
        public System.Object getMyProjects()
        {
            var projects = (from a in db.Projects
                            join b in db.Profiles on a.ProfileID equals b.ProfileID
                            join c in db.Customers on a.Customer_ID equals c.Customer_ID
                                  
                                  select new
                                  {
                                      a.ProjectID,
                                      a.Amount,
                                      a.Description,
                                      a.StartDate,
                                      a.EndDate,
                                      deposit = (a.Amount* b.Deposit)/100,
                                      Status = a.PaymentStatu.Description,
                                      a.PaymentStatusID,
                                      Client = c.First_Name + " " + c.Last_Name,
                                      Creative = b.Username


                                  }).ToList();
            return projects;
        }

        [System.Web.Http.Route("api/Projects/MakePayment/{id}")]
        [HttpGet]
        public IHttpActionResult MakePayment(int id)
        {

            var CurrentProject = db.Projects.Where(co => co.ProjectID == id).FirstOrDefault();


            CurrentProject.PaymentStatusID = 3;

            db.Entry(CurrentProject).State = EntityState.Modified;
            db.SaveChanges();

            return Ok();
        }

        // POST: api/Projects
        [ResponseType(typeof(Project))]
        public IHttpActionResult PostProject(Project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Projects.Add(project);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = project.ProjectID }, project);
        }

        // DELETE: api/Projects/5
        [ResponseType(typeof(Project))]
        public IHttpActionResult DeleteProject(int id)
        {
            Project project = db.Projects.Find(id);
            if (project == null)
            {
                return NotFound();
            }

            db.Projects.Remove(project);
            db.SaveChanges();

            return Ok(project);
        }

    }
}