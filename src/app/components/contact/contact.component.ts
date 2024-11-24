import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-16 text-center gradient-text" data-aos="fade-up">
          Get In Touch
        </h2>
        
        <div class="max-w-2xl mx-auto">
          <form class="space-y-6" data-aos="fade-up">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" 
                     id="name" 
                     class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" 
                     id="email" 
                     class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" 
                        rows="4" 
                        class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            
            <button type="submit" 
                    class="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Send Message
            </button>
          </form>
          
          <div class="mt-12 flex justify-center space-x-6" data-aos="fade-up">
            <a href="#" class="text-gray-400 hover:text-white transition">
              <span class="sr-only">GitHub</span>
              GitHub
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition">
              <span class="sr-only">LinkedIn</span>
              LinkedIn
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition">
              <span class="sr-only">Twitter</span>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}