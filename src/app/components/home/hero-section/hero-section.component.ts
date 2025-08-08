import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import { faDownload,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { personalData } from '@/utils/data/personal-data';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule]
})
export class HeroSectionComponent {
  personalData = personalData;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebookSquare;
  faDownload = faDownload;
}