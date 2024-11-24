import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-lg">
      <div class="container mx-auto px-6">
        <nav class="flex items-center justify-between h-20">
          <!-- Location -->
          <div class="text-gray-400 text-sm">Asia/Jakarta</div>

          <!-- Navigation -->
          <div class="flex items-center space-x-2">
            <a *ngFor="let item of navItems" 
               [href]="item.href"
               class="px-4 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300">
              <span class="flex items-center gap-2">
                <i [class]="item.icon"></i>
                {{ item.label }}
              </span>
            </a>
          </div>

          <!-- Time -->
          <div class="text-gray-400 text-sm">{{currentTime}}</div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  navItems = [
    { label: 'Home', href: '#home', icon: 'fas fa-home' },
    { label: 'About', href: '#about', icon: 'fas fa-user' },
    { label: 'Work', href: '#work', icon: 'fas fa-briefcase' },
    { label: 'Blog', href: '#blog', icon: 'fas fa-blog' },
    { label: 'Gallery', href: '#gallery', icon: 'fas fa-images' }
  ];

  currentTime = '07:34:20';

  constructor() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  private updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
}