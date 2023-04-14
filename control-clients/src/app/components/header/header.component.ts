import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  LoginService
} from 'src/app/services/login.service';
import {
  SettingsService
} from 'src/app/services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;
  public isDropdownCollapsed = true;

  isLoggedIn: boolean;
  loggedInUser: string;
  allowRegister: boolean;

  constructor(private loginService: LoginService, private router: Router, private settingService: SettingsService) {}

  ngOnInit() {
    this.loginService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.aemail;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.settingService.getSettings().subscribe(settings => {
      this.allowRegister = settings.allowRegistration;
    });

  }

  logOut() {
    this.loginService.logOut();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
