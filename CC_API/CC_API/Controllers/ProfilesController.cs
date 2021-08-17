using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CC_API.Models;

namespace CC_API.Controllers
{
    public class ProfilesController : ApiController
    {
        private CC_DBEntities db = new CC_DBEntities();
        // GET: api/Profiles
        public System.Object GetProfiles()
        {
            var result = (from a in db.Profiles
                          join b in db.Customers on a.Customer_ID equals b.Customer_ID
                          join c in db.Skills on a.SkillID equals c.SkillID



                          select new
                          {
                              a.ProfileID,
                              a.Bio,
                              Customer = b.First_Name,
                              Skill = c.Description
                          }).ToList();

            return result;
        }


        [System.Web.Http.Route("api/Profiles/GetCustomerdetails/{id}")]
        [HttpGet]
        public dynamic GetCustomerDetails(int id)
        {
            try
            {
                Customer customerDetails = db.Customers.Where(zz => zz.Customer_ID == id).FirstOrDefault();

                dynamic user = new ExpandoObject();
                user.Customer_ID = customerDetails.Customer_ID;
                user.Contact_Number = customerDetails.Contact_Number;
                user.Email_Address = customerDetails.Email_Address;
                user.Name = customerDetails.First_Name + " " + customerDetails.Last_Name;
                return user;
            }
            catch (Exception)
            {

                throw;
            }

        }

        [System.Web.Http.Route("api/Profiles/getInfo/{id}")]
        [HttpGet]
        public System.Object getCaptureCollect(int id)
        {
            var collectionline = (from a in db.Customers
                                  join b in db.Users on a.UserID equals b.UserID
                                  join c in db.Profiles on a.Customer_ID equals c.Customer_ID
                                  where a.Customer_ID == id
                                  select new
                                  {
                                      a.First_Name,
                                      a.Last_Name,
                                      a.Contact_Number,
                                      a.Email_Address,                                     
                                      userName = b.UserName,
                                      c.ProfilePic


                                  }).FirstOrDefault();
            return collectionline;
        }

        [System.Web.Http.Route("api/Profiles/getAllInfo/{id}")]
        [HttpGet]
        public System.Object getAllInfo(int id)
        {
            var info = (from a in db.Profiles
                        join b in db.Customers on a.Customer_ID equals b.Customer_ID
                        join c in db.Skills on a.SkillID equals c.SkillID
                        join d in db.Profiles on a.Customer_ID equals d.Customer_ID

                        where a.ProfileID == id
                        select new
                                  {
                                      a.Bio,
                                      Skill = c.Description,
                                      b.First_Name,
                                      b.Last_Name,
                                      b.Contact_Number,
                                      b.Email_Address,
                                      b.User.UserName,
                            d.ProfilePic


                        }).FirstOrDefault();
            return info ;
        }




        [System.Web.Http.Route("api/Profiles/GetCustomerProfiles/{id}")]
        [HttpGet]
        public IHttpActionResult GetCustomerDesigns(int id)
        {
            try
            {
                List<ProfileVM> ProfileVMList = new List<ProfileVM>();

                List<Upload_Line> upload_Lines = db.Upload_Line.Where(x => x.ProfileID == id).ToList();

                List<Profile> ProfileList = db.Profiles
                    .Include(d => d.Upload_Line)
                    .Where(d => d.Customer_ID == id).ToList();

                foreach (var profile in ProfileList)
                {
                    ProfileVM profileVM = new ProfileVM();
                    profileVM.Customer_ID = profile.Customer_ID.Value;
                    profileVM.Bio = profile.Bio;
                    profileVM.ProfileID = profile.ProfileID;
                    //designVM.Design_Name = design.Design_Name;
                    profileVM.ProfilePic = profile.ProfilePic;
                    profileVM.SkillID = profile.SkillID.Value;

                    profileVM.SkillName = db.Skills
                        .Where(s => s.SkillID == profileVM.SkillID)
                        .Select(s => s.Description)
                        .FirstOrDefault();

                    foreach (var UploadLine in profile.Upload_Line)
                    {
                        UploadLineVM uploadLineVM = new UploadLineVM();
                        uploadLineVM.ProfileID = UploadLine.ProfileID.Value;
                        uploadLineVM.Upload_LineID = UploadLine.Upload_LineID;
                        uploadLineVM.File_Type = UploadLine.File_Type;
                        uploadLineVM.File_Upload = UploadLine.File_Upload;
                        profileVM.UploadLineVMs.Add(uploadLineVM);

                    }
                    ProfileVMList.Add(profileVM);
                }


                return Ok(ProfileVMList);
            }
            catch (Exception)
            {

                throw;
            }

        }



        [System.Web.Http.Route("api/Profiles/GetAllProfiles/{id}")]
        [HttpGet]
        public IHttpActionResult GetAllProfiles(int id)
        {
            try
            {
                List<ProfileVM> ProfileVMList = new List<ProfileVM>();

                List<Upload_Line> upload_Lines = db.Upload_Line.Where(x => x.ProfileID == id).ToList();

                List<Profile> ProfileList = db.Profiles
                    .Include(d => d.Upload_Line)
                    .Where(d => d.SkillID == id).ToList();

                foreach (var profile in ProfileList)
                {
                    ProfileVM profileVM = new ProfileVM();
                    profileVM.Customer_ID = profile.Customer_ID.Value;
                    
                    profileVM.Bio = profile.Bio;
                    profileVM.ProfileID = profile.ProfileID;
                    //designVM.Design_Name = design.Design_Name;
                    profileVM.SkillID = profile.SkillID.Value;
                    profileVM.ProfilePic = profile.ProfilePic;

                    profileVM.SkillName = db.Skills
                        .Where(s => s.SkillID == profileVM.SkillID)
                        .Select(s => s.Description)
                        .FirstOrDefault();

                    profileVM.CustomerName = db.Customers
                        .Where(c => c.Customer_ID == profileVM.Customer_ID)
                        .Select(c => c.First_Name + " " + c.Last_Name)
                        .FirstOrDefault();

                    foreach (var UploadLine in profile.Upload_Line)
                    {
                        UploadLineVM uploadLineVM = new UploadLineVM();
                        uploadLineVM.ProfileID = UploadLine.ProfileID.Value;
                        uploadLineVM.Upload_LineID = UploadLine.Upload_LineID;
                        uploadLineVM.File_Type = UploadLine.File_Type;
                        uploadLineVM.File_Upload = UploadLine.File_Upload;
                        profileVM.UploadLineVMs.Add(uploadLineVM);

                    }
                    ProfileVMList.Add(profileVM);
                }


                return Ok(ProfileVMList);
            }
            catch (Exception)
            {

                throw;
            }

        }


        [Route("api/Profiles/upload")]
        [HttpPost]
        public IHttpActionResult upload([FromBody] dynamic file)
        {
            try
            {
                db.Configuration.ProxyCreationEnabled = false;

                string upload = file.file;

                Profile profile = new Profile();

                profile.ProfilePic = upload;
                db.Profiles.Add(profile);
                db.SaveChanges();

                return Ok(profile);
            }
            catch (Exception)
            {

                throw;
            }
        }


        // GET: api/Profiles/5
        [ResponseType(typeof(Profile))]
        public IHttpActionResult GetProfile(int id)
        {
            Profile profile = db.Profiles.Find(id);
            if (profile == null)
            {
                return NotFound();
            }

            return Ok(profile);
        }

        // PUT: api/Profiles/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProfile(int id, Profile profile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != profile.ProfileID)
            {
                return BadRequest();
            }

            db.Entry(profile).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfileExists(id))
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


        // POST: api/Profiles
        [ResponseType(typeof(Profile))]
        public IHttpActionResult PostProfile(Profile profile)
        {
            try
            {
                //Profile Table
                db.Profiles.Add(profile);

                //Upload_Items table
                foreach (var item in profile.Upload_Line)
                {
                    db.Upload_Line.Add(item);
                }
                db.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }


        }

        // DELETE: api/Profiles/5
        [ResponseType(typeof(Profile))]
        public IHttpActionResult DeleteProfile(int id)
        {
            Profile profile = db.Profiles.Find(id);
            if (profile == null)
            {
                return NotFound();
            }

            db.Profiles.Remove(profile);
            db.SaveChanges();

            return Ok(profile);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProfileExists(int id)
        {
            return db.Profiles.Count(e => e.ProfileID == id) > 0;
        }
    }
}