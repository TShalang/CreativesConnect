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
    
    public partial class Project
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Project()
        {
            this.BankDetails = new HashSet<BankDetail>();
            this.ClaimRefunds = new HashSet<ClaimRefund>();
        }
    
        public int ProjectID { get; set; }
        public Nullable<int> ProfileID { get; set; }
        public string Description { get; set; }
        public Nullable<decimal> Amount { get; set; }
        public Nullable<int> PaymentStatusID { get; set; }
        public Nullable<decimal> Deposit { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<int> Customer_ID { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BankDetail> BankDetails { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ClaimRefund> ClaimRefunds { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual PaymentStatu PaymentStatu { get; set; }
        public virtual Profile Profile { get; set; }
    }
}
