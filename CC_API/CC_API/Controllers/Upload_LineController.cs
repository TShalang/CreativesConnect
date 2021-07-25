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
    public class Upload_LineController : ApiController
    {
        private CC_DBEntities db = new CC_DBEntities();

        // GET: api/Upload_Line
        public IQueryable<Upload_Line> GetUpload_Line()
        {
            return db.Upload_Line;
        }

        // GET: api/Upload_Line/5
        [ResponseType(typeof(Upload_Line))]
        public IHttpActionResult GetUpload_Line(int id)
        {
            Upload_Line upload_Line = db.Upload_Line.Find(id);
            if (upload_Line == null)
            {
                return NotFound();
            }

            return Ok(upload_Line);
        }

        // PUT: api/Upload_Line/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUpload_Line(int id, Upload_Line upload_Line)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != upload_Line.Upload_LineID)
            {
                return BadRequest();
            }

            db.Entry(upload_Line).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Upload_LineExists(id))
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

        // POST: api/Upload_Line
        [ResponseType(typeof(Upload_Line))]
        public IHttpActionResult PostUpload_Line(Upload_Line upload_Line)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Upload_Line.Add(upload_Line);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = upload_Line.Upload_LineID }, upload_Line);
        }

        // DELETE: api/Upload_Line/5
        [ResponseType(typeof(Upload_Line))]
        public IHttpActionResult DeleteUpload_Line(int id)
        {
            Upload_Line upload_Line = db.Upload_Line.Find(id);
            if (upload_Line == null)
            {
                return NotFound();
            }

            db.Upload_Line.Remove(upload_Line);
            db.SaveChanges();

            return Ok(upload_Line);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Upload_LineExists(int id)
        {
            return db.Upload_Line.Count(e => e.Upload_LineID == id) > 0;
        }
    }
}