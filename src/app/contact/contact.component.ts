import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  // Affichage du message de succès à la place du formulaire
  formData = {
    name: '',
    email: '',
    tel: '',
    object: '',
    msg: ''
  };

  messageSent = false;

  submitForm(): void {
    this.messageSent = true;
  }

}
