import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  FlashMessagesService
} from 'flash-messages-angular';
import {
  Client
} from 'src/app/model/client.model';
import {
  ClientService
} from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client: Client = {
    name: '',
    surname: '',
    email: '',
    balance: 0
  }

  id: string;

  constructor(private cliensService: ClientService, private flashMessages: FlashMessagesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.cliensService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
  }

  save({value, valid}: {value: Client, valid: boolean}){
    if(!valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        ccsClass: 'alert-danger', timeout: 4000
      });
    }else{
      value.id = this.id;
      //modificar el cliente
      this.cliensService.modifyClient(value);
      this.router.navigate(['/']);
    }
  }

  delete(){
    if(confirm('¿seguro que desea eliminar el cliente?')){
      this.cliensService.deleteClient(this.client);
      this.router.navigate(['/']);
    }
  }
}
