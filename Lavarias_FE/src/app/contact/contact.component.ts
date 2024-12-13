import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  instructor = {
    name: 'Erna-Kristi Martinez',
    school: 'University of Baguio',
    email: '20240191@s.ubaguio.edu',
  };

  constructor() {}

  ngOnInit(): void {}
}