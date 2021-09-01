using CC_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace CC_API.Emails
{
    public class EmailService
    {

        public void SendEmail(BankDetail bankDetail)
        {
            SmtpClient emp = new SmtpClient();
            emp.DeliveryMethod = SmtpDeliveryMethod.Network;
            emp.EnableSsl = true;
            emp.Host = "smtp.gmail.com";
            emp.Port = 587;

            System.Net.NetworkCredential credentials = new System.Net.NetworkCredential("kimosystem1@gmail.com", "Kimo1234");
            emp.UseDefaultCredentials = false;
            emp.Credentials = credentials;

            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("kimosystem1@gmail.co");
            msg.To.Add(new MailAddress("shalangt@gmail.com"));

            msg.Subject = "CreativesConnect Payment";
            msg.IsBodyHtml = true;
            msg.Body = "New Payment Request" + "<br/>" + "<br/>" + "Name on Account: " + bankDetail.Name + "<br/>" + "Bank: " + bankDetail.Bank + "<br/>" +
               "Branch Code: " + bankDetail.BranchCode + "<br/>" + "Account Number " + bankDetail.AccountNumber + "<br/>" + "Reference: CC102064";

            try
            {
                emp.Send(msg);
                //return "OK";
            }
            catch (Exception)
            {

            }
            //return "OK";
        }
    }
}