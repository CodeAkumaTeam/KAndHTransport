import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgForm, FormsModule } from '@angular/forms'; 
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly SERVICE_ID = environment.emailjs.SERVICE_ID;
  private readonly TEMPLATE_ID = environment.emailjs.TEMPLATE_ID;
  private readonly USER_ID = environment.emailjs.USER_ID;

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;

      emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, formData, this.USER_ID)
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully!', response);
          alert('Email sent successfully!');
          form.reset();
        })
        .catch((error: any) => {
          console.error('Error sending email:', error);
          alert('Failed to send email. Please try again.');
        });
    }
  }
}