import { Component } from '@angular/core';
import { User } from '../../shared/user'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {} as User; 
}
