import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10" data-aos="fade-up">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-8 gradient-text">
            Creative Developer
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-12">
            Crafting digital experiences with passion and precision
          </p>
          <a href="#projects" 
             class="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:opacity-90 transition">
            View My Work
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}