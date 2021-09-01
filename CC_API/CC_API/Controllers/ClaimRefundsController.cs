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
    public class ClaimRefundsController : ApiController
    {
        private CC_DBEntities db = new CC_DBEntities();

        // GET: api/ClaimRefunds
        public IQueryable<ClaimRefund> GetClaimRefunds()
        {
            return db.ClaimRefunds;
        }

        // GET: api/ClaimRefunds/5
        [ResponseType(typeof(ClaimRefund))]
        public IHttpActionResult GetClaimRefund(int id)
        {
            ClaimRefund claimRefund = db.ClaimRefunds.Find(id);
            if (claimRefund == null)
            {
                return NotFound();
            }

            return Ok(claimRefund);
        }

        // PUT: api/ClaimRefunds/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutClaimRefund(int id, ClaimRefund claimRefund)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != claimRefund.ClaimRefundID)
            {
                return BadRequest();
            }

            db.Entry(claimRefund).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClaimRefundExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ClaimRefunds
        [ResponseType(typeof(ClaimRefund))]
        public IHttpActionResult PostClaimRefund(ClaimRefund claimRefund)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ClaimRefunds.Add(claimRefund);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = claimRefund.ClaimRefundID }, claimRefund);
        }

        // DELETE: api/ClaimRefunds/5
        [ResponseType(typeof(ClaimRefund))]
        public IHttpActionResult DeleteClaimRefund(int id)
        {
            ClaimRefund claimRefund = db.ClaimRefunds.Find(id);
            if (claimRefund == null)
            {
                return NotFound();
            }

            db.ClaimRefunds.Remove(claimRefund);
            db.SaveChanges();

            return Ok(claimRefund);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ClaimRefundExists(int id)
        {
            return db.ClaimRefunds.Count(e => e.ClaimRefundID == id) > 0;
        }
    }
}