import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-apology',
  standalone: true, 
  templateUrl: './apology.component.html',
  styleUrls: ['./apology.component.css'],
  imports: [CommonModule] 
})
export class ApologyComponent {
  showLoveMessage = false;
  heartColor = 'red';
  noButtonStyle = { top: '50%', left: '60%' };

  changeHeartColor() {
    this.showLoveMessage = true;
  }

  moveNoButton() {
    const newTop = Math.random() * 80 + '%';
    const newLeft = Math.random() * 80 + '%';
    this.noButtonStyle = { top: newTop, left: newLeft };

    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibra por 200ms
    }
  }
}
