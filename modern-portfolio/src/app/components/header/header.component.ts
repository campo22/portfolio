import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed w-full z-50 bg-opacity-90 bg-gray-900 backdrop-blur-sm">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <a href="#" class="text-2xl font-bold gradient-text">Portfolio</a>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-white hover:text-gray-300 transition">Home</a>
            <a href="#projects" class="text-white hover:text-gray-300 transition">Projects</a>
            <a href="#skills" class="text-white hover:text-gray-300 transition">Skills</a>
            <a href="#contact" class="text-white hover:text-gray-300 transition">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}