import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetfilyFormService } from 'src/app/services/netfily-form.service';
import { Interfaz } from 'src/app/models/interfaz';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nombre: string | undefined
  email: string | undefined
  mensaje: string | undefined
  
  constructor(private netfilyService: NetfilyFormService, private router: Router) { }

  sendEmail(formContact: NgForm) {
    if (
      formContact.invalid
    ) {
      return;
    }

    const data = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    };
    const entry = {
      ...data,
    } as Interfaz;

    this.netfilyService.submitForm(entry).subscribe(
      (res) => {
        this.router.navigate(["/success"])
        formContact.resetForm()
      },
      (err) => {
        alert("HA PASADO ALGO MALO")
      }
    )
  };
}

