import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Settings
} from 'src/app/model/settings.model';
import {
  SettingsService
} from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  allowRegistration = false;

  constructor(private router: Router, private settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.getSettings().subscribe(
      (settings: Settings) => {
        this.allowRegistration = settings.allowRegistration;
      })
  }

  save() {
    let settings = {
      allowRegistration: this.allowRegistration
    };
    this.settingsService.modifySettings(settings);
    this.router.navigate(['/']);
  }

}
