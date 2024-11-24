import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-16 text-center gradient-text" data-aos="fade-up">
          Featured Projects
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects" 
               class="card p-6" 
               data-aos="fade-up"
               [attr.data-aos-delay]="project.delay">
            <img [src]="project.image" 
                 [alt]="project.title" 
                 class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-bold mb-2">{{project.title}}</h3>
            <p class="text-gray-400 mb-4">{{project.description}}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span *ngFor="let tag of project.tags" 
                    class="px-3 py-1 text-sm bg-gray-800 rounded-full">
                {{tag}}
              </span>
            </div>
            <a [href]="project.link" 
               class="inline-block text-blue-400 hover:text-blue-300 transition">
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects: (Project & { delay: number })[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with real-time updates",
      image: "assets/project1.jpg",
      tags: ["Angular", "Firebase", "Stripe"],
      link: "#",
      delay: 0
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "assets/project2.jpg",
      tags: ["TypeScript", "Chart.js", "REST API"],
      link: "#",
      delay: 100
    },
    {
      title: "Task Management App",
      description: "Collaborative task management solution",
      image: "assets/project3.jpg",
      tags: ["Angular", "Node.js", "MongoDB"],
      link: "#",
      delay: 200
    }
  ];
}