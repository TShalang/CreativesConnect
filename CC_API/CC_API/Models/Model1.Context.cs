﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CC_DBEntities : DbContext
    {
        public CC_DBEntities()
            : base("name=CC_DBEntities")
        {
            base.Configuration.ProxyCreationEnabled = false;
            base.Configuration.LazyLoadingEnabled = false;
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<BankDetail> BankDetails { get; set; }
        public virtual DbSet<ClaimRefund> ClaimRefunds { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<File_Cat> File_Cat { get; set; }
        public virtual DbSet<Notification> Notifications { get; set; }
        public virtual DbSet<PaymentStatu> PaymentStatus { get; set; }
        public virtual DbSet<Profile> Profiles { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<Skill> Skills { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<Upload_Line> Upload_Line { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<User_Address> User_Address { get; set; }
    }
}
