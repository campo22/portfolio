import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-16 text-center gradient-text" data-aos="fade-up">
          Skills & Expertise
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div *ngFor="let skill of skills" 
               class="card p-6 text-center" 
               data-aos="fade-up"
               [attr.data-aos-delay]="skill.delay">
            <div class="text-4xl mb-4">{{skill.icon}}</div>
            <h3 class="text-xl font-bold mb-2">{{skill.name}}</h3>
            <p class="text-gray-400">{{skill.level}}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  skills = [
    { name: "Angular", level: "Expert", icon: "🅰️", delay: 0 },
    { name: "TypeScript", level: "Advanced", icon: "📘", delay: 100 },
    { name: "HTML/CSS", level: "Expert", icon: "🎨", delay: 200 },
    { name: "Node.js", level: "Intermediate", icon: "🟢", delay: 300 },
    { name: "React", level: "Advanced", icon: "⚛️", delay: 400 },
    { name: "Python", level: "Intermediate", icon: "🐍", delay: 500 },
    { name: "Git", level: "Advanced", icon: "📦", delay: 600 },
    { name: "Docker", level: "Intermediate", icon: "🐳", delay: 700 }
  ];
}