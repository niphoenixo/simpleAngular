import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerUserForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl('')

  });
  constructor(private users:CommonService) { }

  ngOnInit(): void {
  }

  registerUser(){
   		//console.log(this.registerUserForm.value)
   		this.users.insertUser(this.registerUserForm.value).subscribe((result)=>{
   		  console.log("nisha===>  ",result)

   		})
  }

}
