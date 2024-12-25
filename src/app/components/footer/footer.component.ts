import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  userEmail: string = ''; 

  serviceId: string = 'service_xvlwaog';
  templateId: string = 'template_g4udhrd'; 
  publicKey: string = 'TtSx7sWPRO9tT1hfx'; 

  async subscribe() {
    const templateParams = {
      email: this.userEmail,
    };

    try {
      await emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey);
      alert('Reminder email sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send reminder email. Please try again later.');
    }
  }

  sendReminder() {
    this.subscribe();
  }
}
