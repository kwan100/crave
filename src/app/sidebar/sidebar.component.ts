import { Component } from '@angular/core';
import { SlideInOutAnimation } from './animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [SlideInOutAnimation]
})
export class SidebarComponent {
  animationState = 'out';

  constructor(private http: HttpClient) {

  }

  toggleSettings() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
    this.http.get<any[]>('/search?location=boise').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Error occurred:', error);
      }
    });
  }
}
