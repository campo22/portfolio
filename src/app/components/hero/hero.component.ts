import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      <!-- Background effects -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      <!-- Main content -->
      <div class="container mx-auto px-6 pt-32 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- Left side navigation -->
          <div class="w-64 space-y-8">
            <div class="space-y-2">
              <h3 class="text-white/60 text-sm font-medium">Introduction</h3>
              <a href="#about" class="block text-white hover:text-emerald-400 transition-colors">About Me</a>
            </div>

            <div class="space-y-2">
              <h3 class="text-white/60 text-sm font-medium">Work Experience</h3>
              <div class="space-y-1">
                <a href="#fly" class="block text-white hover:text-emerald-400 transition-colors">FLY</a>
                <a href="#creativ3" class="block text-white hover:text-emerald-400 transition-colors">Creativ3</a>
              </div>
            </div>

            <div class="space-y-2">
              <h3 class="text-white/60 text-sm font-medium">Technical Skills</h3>
              <div class="space-y-1">
                <a href="#skills" class="block text-white hover:text-emerald-400 transition-colors">Angular</a>
                <a href="#skills" class="block text-white hover:text-emerald-400 transition-colors">React</a>
                <a href="#skills" class="block text-white hover:text-emerald-400 transition-colors">Node.js</a>
              </div>
            </div>
          </div>

          <!-- Right side content -->
          <div class="flex-1 text-white">
            <!-- Profile section -->
            <div class="flex items-start gap-8 mb-12">
              <div class="relative">
                <img src="assets/profile.jpg" 
                     alt="Profile"
                     class="w-32 h-32 rounded-full object-cover border-2 border-emerald-400"
                     onerror="this.src='https://via.placeholder.com/128'">
                <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900"></div>
              </div>

              <div class="flex-1">
                <div class="flex items-center gap-4 mb-6">
                  <h1 class="text-6xl font-bold">John Doe</h1>
                  <button class="px-6 py-2 bg-emerald-400/20 text-emerald-400 rounded-full hover:bg-emerald-400/30 transition-colors">
                    Schedule a call →
                  </button>
                </div>
                <h2 class="text-3xl text-white/80 mb-6">Full Stack Developer</h2>
                <div class="flex gap-4">
                  <a href="https://github.com" target="_blank" class="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    GitHub
                  </a>
                  <a href="https://linkedin.com" target="_blank" class="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    LinkedIn
                  </a>
                  <a href="mailto:contact@example.com" class="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    Email
                  </a>
                </div>
              </div>
            </div>

            <!-- Description -->
            <p class="text-lg text-white/80 max-w-2xl leading-relaxed mb-12">
              Full stack developer with a passion for creating elegant solutions to complex problems. 
              Specialized in modern web technologies and scalable architecture.
            </p>

            <!-- Work Experience -->
            <div class="space-y-8">
              <h2 class="text-4xl font-bold mb-8">Work Experience</h2>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-2xl font-bold text-emerald-400">Senior Developer at TechCorp</h3>
                  <span class="text-white/60">2022 - Present</span>
                </div>
                <ul class="space-y-2 text-white/80">
                  <li class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Led the development of a major platform redesign, improving user engagement by 40%
                  </li>
                  <li class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Implemented CI/CD pipeline reducing deployment time by 60%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}