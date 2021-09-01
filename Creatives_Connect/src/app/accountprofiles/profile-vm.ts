import { UploadLineVM } from "./upload-line-vm";


export class ProfileVM {
    

    constructor(){
        this.UploadLineVMs = [];
    }

    ProfileID : number;
    Customer_ID : number;
    SkillID : number;
    SkillName : string;
    Bio : string;
    ProfilePic: string;
    Username: string;
    Pricing: string;

    UploadLineVMs : UploadLineVM[];


}
