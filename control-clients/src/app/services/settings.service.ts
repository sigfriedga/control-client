import {
  AngularFirestoreDocument,
  AngularFirestore
} from '@angular/fire/firestore'
import {
  Settings
} from '../model/settings.model';
import {
  Observable
} from 'rxjs';
import {
  Injectable
} from '@angular/core';

//@Injectable()/*TODO*/
export class SettingsService {
  settingsDoc: AngularFirestoreDocument < Settings > ;
  settings: Observable < Settings > ;

  //unique id from settings collection
  id = '1';

  constructor(private db: AngularFirestore) {}

  getSettings(): Observable < Settings > {
    this.settingsDoc = this.db.doc < Settings > (`settings/${this.id}`);
    this.settings = this.settingsDoc.valueChanges();
    return this.settings;
  }

  modifySettings(settings: Settings) {
    this.settingsDoc = this.db.doc < Settings > (`settings/${this.id}`);
    this.settingsDoc.update(settings);
  }
}
