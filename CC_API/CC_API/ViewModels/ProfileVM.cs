using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CC_API
{
    public class ProfileVM
    {
        public ProfileVM()
        {
            this.UploadLineVMs = new HashSet<UploadLineVM>();
        }

        public int ProfileID { get; set; }
        public int Customer_ID { get; set; }
        public string CustomerName { get; set; }
        public int SkillID { get; set; }
        public string SkillName { get; set; }
        public string Bio { get; set; }

        public virtual ICollection<UploadLineVM> UploadLineVMs { get; set; }
    }
}