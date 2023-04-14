import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FlashMessagesService
} from 'flash-messages-angular';
import {
  LoginService
} from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private flashMessages: FlashMessagesService, private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    })
  }

  register() {
    this.loginService.register(this.email, this.password)
      .then(res => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        this.flashMessages.show(error.messages, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      });
  }

}
