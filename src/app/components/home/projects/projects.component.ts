import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  demo: string;
  images: string[];
  role: string;
  code: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      name: "Car Bidding Website",
      description: "Car Bidding Website with users can sells and buy cars on auction.",
      tools: ["Angular 18", "Node Js", "MySql", "Xamp", "Git", "Vs Code"],
      demo: "https://carbidding.netlify.app",
      images: [
        "assets/projects/1.png",
        "assets/projects/2.png",
        "assets/projects/3.png",
        "assets/projects/33.png"
      ],
      role: "Full Stack Developer",
      code: "https://github.com/NabeelAhmad3/BiddingApp.git"
    },
    {
      id: 2,
      name: "UniGuard",
      description: "Security system Website for university to access of pre register vehicles.",
      tools: ["Angular 19", "Fast Api", "Postgress", "Git", "Vs Code"],
      demo: "",
      images: [
        "assets/projects/4.png",
        "assets/projects/5.png",
        "assets/projects/6.png"
      ],
      role: "Angular Developer",
      code: "https://github.com/NabeelAhmad3/Unigaurd_Web.git"
    },
    {
      id: 3,
      name: "HRMS",
      description: "HR managenemt system which cover all aspects of HR activities.",
      tools: ["Angular 15", ".net boiler plate", "MS SQL Server", "Git", "Vs Code", "Visual Studio"],
      demo: "",
      images: [
        "assets/projects/7.png",
        "assets/projects/8.png",
        "assets/projects/9.png",
        "assets/projects/99.png"
      ],
      role: "Angular Developer",
      code: ""
    },
    {
      id: 4,
      name: "Virtual Healthcare",
      description: "A healthcare mobile app for patient management, appointments, and medical record tracking.",
      tools: ["Angular 20", "Ionic", "Capacitor", "Firebase", "Git", "Vs Code", "Android Studio"],
      demo: "https://virtualhealing.netlify.app/",
      images: [
        "assets/projects/10.png",
        "assets/projects/11.png",
        "assets/projects/12.png",
        "assets/projects/12a.png"
      ],
      role: "Full Stack Developer",
      code: "https://github.com/NabeelAhmad3/virtual_healthcare_ionic_app"
    },
    {
      id: 5,
      name: "Pharmacy POS",
      description: "A pharmacy POS system for managing sales, inventory, billing, and customer transactions.",
      tools: ["Angular 21", "Electron", "Node Js", "SQLite", "Git", "Vs Code"],
      demo: "",
      images: [
        "assets/projects/16.png",
        "assets/projects/17.png",
        "assets/projects/18.png",
        "assets/projects/19.png"
      ],
      role: "Full Stack Developer",
      code: "https://github.com/NabeelAhmad3/virtual_healthcare_ionic_app"
    },
    {
      id: 6,
      name: "Smart Drive Tracking",
      description: "A real-time GPS vehicle tracking app that monitors driver speed, trips, and overspeed alerts.",
      tools: ["Angular 21", "Ionic", "Capacitor", "Node Js", "Postgres", "Git", "Vs Code", "Android Studio"],
      demo: "https://smartdrivetracking.netlify.app",
      images: [
        "assets/projects/13.png",
        "assets/projects/14.png",
        "assets/projects/15.png",
        "assets/projects/16a.png",

      ],
      role: "Full Stack Developer",
      code: "https://github.com/NabeelAhmad3/SmartDrive-Frontend"
    }
  ];


  activeImageIndex: { [key: number]: number } = {};
  intervals: { [key: number]: any } = {};

  ngOnInit(): void {
    this.projects.forEach((project) => {
      this.activeImageIndex[project.id] = 0;
      this.startAutoSlide(project.id, project.images.length);
    });
  }

  ngOnDestroy(): void {
    Object.values(this.intervals).forEach((interval) => clearInterval(interval));
  }

  startAutoSlide(projectId: number, totalImages: number): void {
    this.intervals[projectId] = setInterval(() => {
      this.nextSlide(projectId, totalImages);
    }, 5000);
  }

  nextSlide(projectId: number, total: number): void {
    this.activeImageIndex[projectId] =
      (this.activeImageIndex[projectId] + 1) % total;
  }

  prevSlide(projectId: number): void {
    const total = this.projects.find((p) => p.id === projectId)?.images.length || 1;
    this.activeImageIndex[projectId] =
      (this.activeImageIndex[projectId] - 1 + total) % total;
  }
  onMouseEnter(projectId: number) {
    clearInterval(this.intervals[projectId]);
  }

  onMouseLeave(projectId: number, total: number) {
    this.startAutoSlide(projectId, total);
  }

}
