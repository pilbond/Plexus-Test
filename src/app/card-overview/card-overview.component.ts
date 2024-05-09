import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'card-overview',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './card-overview.component.html',
  styleUrl: './card-overview.component.scss'
})
export class CardOverviewComponent {

  @Input() city!: string;
  @Input() image!: string;
  @Input() rating!: number;
  @Input() text!: string;

  expanded: boolean = false;

  toggleText() {
    this.expanded = !this.expanded;
  }
}
