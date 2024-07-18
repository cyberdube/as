import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-bounce-button',
  templateUrl: './bounce-button.component.html',
  styleUrls: ['./bounce-button.component.css'],
  animations: [
    trigger('bounce', [
      transition('inactive => active', [
        animate('0.5s ease-in', style({ transform: 'translateY(-100px)' })),
        animate('0.5s ease-out', style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class BounceButtonComponent {
  isActive = false;

  toggleBounce() {
    this.isActive = !this.isActive;
  }
}
