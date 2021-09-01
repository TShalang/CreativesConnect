import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claimpayment } from '../shared/claimpayment';
import { ProjectsService } from '../shared/projects.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-claimpayment',
  templateUrl: './claimpayment.component.html',
  styleUrls: ['./claimpayment.component.scss']
})
export class ClaimpaymentComponent implements OnInit {

  formData: Claimpayment;

  // userObj = new User;

  constructor(public service: ProjectsService, private httpService: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    
    this.service.paymentClaims = {
    BankDetailsID: 0,
    BranchCode: '',
    AccountNumber: '',
    Bank: '',
    Name: '',
    ProjectID: localStorage.ProjectID
    }
    this.service.paymentClaimList = [];
  }

  onSubmit(){     
   
    this.service.claimPayment(this.service.paymentClaims).subscribe(res => {
      this.alertWithSuccess();
      console.log(res); 

})
}
alertWithSuccess(){  
  Swal.fire('Success...', 'An email has been sent to CreativesConnect, You will receive your money soon!', 'success').then(function(result){
  window.location.href = "/myprojects"
               }) ;    
}

}
