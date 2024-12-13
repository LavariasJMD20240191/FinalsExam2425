import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent implements OnInit{
  consultationData = {
    name: '',
    email: '',
    query: ''
  };

  successMessage: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  submitConsultation() {
    // Log the consultation data (in real-world applications, you'd send it to a backend)
    console.log('Consultation Data:', this.consultationData);

    // Show success message
    this.successMessage = 'Your query has been successfully submitted. We will get back to you soon.';

    // Reset the form
    this.consultationData = { name: '', email: '', query: '' };

    // Hide success message after 5 seconds
    setTimeout(() => {
      this.successMessage = null;
    }, 5000);
  }
}
