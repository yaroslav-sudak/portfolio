import { Component, output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  clicked = output<Event>();

  clickEvent($event: Event) {
    this.clicked.emit($event);
  }
}
