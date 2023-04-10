import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';
import {
  FlashMessagesService
} from 'flash-messages-angular';
import {
  Client
} from 'src/app/model/client.model';
import {
  ClientService
} from 'src/app/services/client.service';
import {
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  client: Client = {
    name: '',
    surname: '',
    email: '',
    balance: 0
  }

  @ViewChild("clientForm") clientForm: NgForm;

  @ViewChild("closeButton") closeButton: ElementRef;

  constructor(private cliensService: ClientService, private flashMessages: FlashMessagesService) {}

  ngOnInit() {
    this.cliensService.getClients().subscribe(
      clients => {
        /*TODO*/
        this.clients = clients;
      }
    )
  }

  getTotalBalance() {
    let totalBalance: number = 0;
    if (this.clients) {
      this.clients.forEach(client => {
        totalBalance += client.balance; /*TODO*/
      })
    }
    return totalBalance;
  }

  add({
    value,
    valid
  }: {
    value: Client,
    valid: boolean
  }) {
    if (!valid) {
      this.flashMessages.show('Por faavor llena el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      //Agregar nuevo componente
      this.cliensService.addClient(value);
      this.clientForm.resetForm();
      this.closeModal();
    }
  }

  private closeModal() {
    this.closeButton.nativeElement.click();
  }
}
