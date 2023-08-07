import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user = {
    email: '',
    password: ''
  }
  showWrongEmail = false
  showWrongPass = false
  userAlreadyInUse = false

  constructor(private userService: UserService, private router: Router){}
  ngOnInit(): void {
    
  }

  restoreErrorVariables(){
    this.userAlreadyInUse = false
    this.showWrongEmail = false
    this.showWrongPass = false
  }

  Ingresar() {
    this.restoreErrorVariables()
    this.userService.register(this.user)
      .then((res) => {
        console.log(res)
        this.router.navigate(['get-data'])
      })
      .catch(error => {
        console.log(error)
        if(error.message.includes("invalid-email")){ this.showWrongEmail = true }
        else if(error.message.includes("Password")){ this.showWrongPass = true }
        else if(error.message.includes("email-already-in-use")){this.userAlreadyInUse = true}
      })
  }

}
