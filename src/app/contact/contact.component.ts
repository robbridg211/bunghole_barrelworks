import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    user: any;

    loading = false;
    buttonText = "Submit";
    show = true;
  
    nameFormControl = new FormControl("", [
      Validators.required,
      Validators.minLength(3), 
    ]);

    emailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
    emailFormControl = new FormControl("", [
      Validators.required,
      Validators.pattern(this.emailRegEx)
    ]);

    phoneRegEx = /\-?\d*\.?\d{1,2}/;
    phoneFormControl = new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(this.phoneRegEx)
    ]);

    messageFormControl = new FormControl("", [
      Validators.required,
    ]);    

    constructor(public http: HttpService) { }

    ngOnInit() {
      this.user =  {
        name: "", email: "", phone: "", message: ""};
    }
    
    register() {
      this.loading = true;
      this.buttonText = "Submitting...";
      let user = {
        name: this.nameFormControl.value,
        email: this.emailFormControl.value,
        phone: this.phoneFormControl.value,
        message: this.messageFormControl.value,
      }

      this.http.sendEmail("http://localhost:8000/sendmail", user).subscribe(
        data => {
          let res: any=data;
          console.log(`From Component.ts - Message Sent: ${user.name}, ${user.email}, ${user.phone}, ${user.message} with resID: ${res.messageId}`);
        },
        err => {
          console.log(err);
          this.loading = false;
          this.buttonText = "Submit";
        },() => {
          this.loading = false;
          this.buttonText = "Submit";
        }
        );
        
      }







    }
    