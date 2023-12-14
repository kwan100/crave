import { Component } from '@angular/core';
import { SlideInOutAnimation } from './animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [SlideInOutAnimation]
})
export class SidebarComponent {
  animationState = 'out';

  toggleSettings() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }
}
