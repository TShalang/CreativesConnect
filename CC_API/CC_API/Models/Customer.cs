//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CC_API.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Customer
    {
        public int Customer_ID { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Contact_Number { get; set; }
        public string Email_Address { get; set; }
        public Nullable<int> UserID { get; set; }
        public Nullable<int> Address_ID { get; set; }
        public string OTP { get; set; }
        public Nullable<bool> verified { get; set; }
    
        public virtual User User { get; set; }
    }
}
