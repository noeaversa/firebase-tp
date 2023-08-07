import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  }
  showWrongEmail = false
  showWrongPassLength = false
  showWrongUser = false
  showWrongPass = false

  constructor(private userService: UserService, private router: Router){}
  
  restoreErrorVariables(){
    this.showWrongEmail = false
    this.showWrongPass = false
    this.showWrongUser = false
    this.showWrongPassLength = false
  }
  
  loguearse(){
    this.userService.login(this.user)
    .then((res) => {
      console.log(res)
      this.router.navigate(['get-data'])
    })
    .catch(error => {
      console.log(error)
      if(error.message.includes("invalid-email")){ this.showWrongEmail = true }
      else if(error.message.includes("6")){ this.showWrongPassLength = true }
      else if(error.message.includes("user-not-found")){this.showWrongUser = true}
      else if(error.message.includes("wrong-password")){this.showWrongPass = true}
    })
  }
}
