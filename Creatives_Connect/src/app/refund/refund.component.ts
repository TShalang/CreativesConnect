import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){     
   
    
      this.alertWithSuccess();


}


alertWithSuccess(){  
  Swal.fire('Success...', 'Your request has been sent.', 'success').then(function(result){
 
               }) ;    
}
}
