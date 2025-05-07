import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  params = input<{
    position?: "top" | "bottom" | "left" | "right",
    text: string
  }>({
    position: "bottom",
    text: ""
  });
}
