import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountprofileService } from 'src/app/shared/accountprofile.service';
import { ProfileService } from 'src/app/shared/profile.service';
import { Uploadline } from 'src/app/shared/uploadline.model';


@Component({
  selector: 'app-uploadline',
  templateUrl: './uploadline.component.html',
  styleUrls: ['./uploadline.component.scss']
})
export class UploadlineComponent implements OnInit {
  formData: Uploadline;

  isValid: boolean = true;

  constructor(public dialogRef: MatDialogRef<UploadlineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private profileService: AccountprofileService
  ) { }

  ngOnInit(): void {


    this.formData = {
      Upload_LineID: null,
      ProfileID: this.data.ProfileID,
      File_Upload: '',
      File_Type: ''
    }
    this.object.url = false;
  }

  onSubmit(form: NgForm) {
    if(this.validateForm(form.value)){
      form.form.addControl( 'File_Upload' , new FormControl('') );
      form.controls['File_Upload'].setValue(this.formData.File_Upload);
    this.profileService.uploadItems.push(form.value);
    this.dialogRef.close()
    }
  }

  validateForm(formData: Uploadline) {
    this.isValid = true;
    if (formData.File_Upload == '') 
      this.isValid = false;
    return this.isValid;


  }

  public object: any = {};

  file(i){
    if(i.files && i.files[0]){
      var r = new FileReader();
      r.onload = (e : any) => {
        console.log(e.target.result)
        this.formData.File_Upload = e.target.result;

        this.object.url = e.target.result;
      }
      r.readAsDataURL(i.files[0]);
    }

  }
}
