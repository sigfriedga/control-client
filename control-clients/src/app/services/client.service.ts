import {
  Injectable
} from "@angular/core";
import {
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import {
  Client
} from "../model/client.model";
import {
  map,
  observable
} from "rxjs";

@Injectable

export class ClientService {
  clientsCollection: AngularFirestoreCollection < Client > ;
  clientDoc: AngularFirestoreDocument < Client > ;

  clients: observable < Client[] > ;
  client: observable < Client >

    constructor(private db: AngularFirestore) {
      this.clientsCollection = db.collection('clients', ref => ref.orderBy('name', 'asc'));
    }

  getClients(): observable < Client[] > {
    this.client = this.clientsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map( action => {
          const data = action.payload.doc.data() as Client;
          data.id = action.payload.doc.id;
          return data
        })
      })
    );
    return this.clients;
  }

  addClient(client: Client){
    this.clientsCollection.add(client);
  }
}
