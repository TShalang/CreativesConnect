using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CC_API
{
    public class UploadLineVM
    {
        public UploadLineVM() { }
        public int Upload_LineID { get; set; }
        public int ProfileID { get; set; }
        public string File_Upload { get; set; }
        public string File_Type { get; set; }
    }
}