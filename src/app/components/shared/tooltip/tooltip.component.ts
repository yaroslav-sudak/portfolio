import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent {
  position = input<'top' | 'bottom' | 'left' | 'right'>('bottom');
  text = input<string>('Tooltip example');
}
