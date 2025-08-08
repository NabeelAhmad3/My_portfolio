import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  mailIcon = faPaperPlane;
  isLoading = false;
  statusMessage = '';

  userInput = {
    name: '',
    email: '',
    message: ''
  };
error: any;

  constructor() {
    emailjs.init({ publicKey: environment.emailJs.publicKey });
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async handleSendMail(event: Event): Promise<void> {
    event.preventDefault();

    if (!this.userInput.name || !this.userInput.email || !this.userInput.message) {
      this.statusMessage = 'Please fill in all fields';
      return;
    }

    if (!this.isValidEmail(this.userInput.email)) {
      this.statusMessage = 'Please enter a valid email';
      return;
    }

    try {
      this.isLoading = true;

      const templateParams = {
        from_name: this.userInput.name,
        from_email: this.userInput.email,
        message: this.userInput.message
      };

      await emailjs.send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        templateParams
      );

      this.statusMessage = 'Message sent successfully!';
      this.userInput = { name: '', email: '', message: '' };

    } catch (error) {
      console.error('Error sending email:', error);
      this.statusMessage = 'Failed to send message. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }
}
