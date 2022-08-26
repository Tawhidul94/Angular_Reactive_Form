import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_reactive_form';

  loginform=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(10)])
  });

  get username(){
    return this.loginform.get('username');
  }

  get password(){
    return this.loginform.get('password');
  }

  userdata(){
    console.log(this.loginform.value);
  }
  
}
