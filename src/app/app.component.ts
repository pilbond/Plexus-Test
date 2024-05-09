import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardOverviewComponent } from './card-overview/card-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CardOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'plexus-test';
  cards = [
    {
      "city":"London",
      "image":"assets/london.webp",
      "rating":3,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo vestibulum nisl, at feugiat purus pharetra non. Maecenas at vulputate ipsum. Donec vitae commodo tellus, a finibus dui. Donec fermentum risus vel orci pharetra scelerisque. Cras ac congue ipsum, ut elementum sem. Duis vel enim id mauris malesuada pharetra eget faucibus ex. Nunc pharetra, eros quis commodo dapibus, nisi sapien convallis turpis, eu tempus ipsum ligula eu tortor. Phasellus sit amet purus vel nisl interdum dignissim. Pellentesque sodales tristique magna non fringilla." 
    },
    {
      "city":"Hong Kong",
      "image":"assets/hong-kong.webp",
      "rating":4,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo vestibulum nisl, at feugiat purus pharetra non. Maecenas at vulputate ipsum. Donec vitae commodo tellus, a finibus dui. Donec fermentum risus vel orci pharetra scelerisque. Cras ac congue ipsum, ut elementum sem. Duis vel enim id mauris malesuada pharetra eget faucibus ex. Nunc pharetra, eros quis commodo dapibus, nisi sapien convallis turpis, eu tempus ipsum ligula eu tortor. Vivamus eu vestibulum orci. Donec gravida ex vel eros lobortis tincidunt."
    },
    {
      "city":"New York",
      "image":"assets/new-york.webp",
      "rating":4,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo vestibulum nisl, at feugiat purus pharetra non. Maecenas at vulputate ipsum. Donec vitae commodo tellus, a finibus dui. Donec fermentum risus vel orci pharetra scelerisque. Cras ac congue ipsum, ut elementum sem. Duis vel enim id mauris malesuada pharetra eget faucibus ex. Nunc pharetra, eros quis commodo dapibus, nisi sapien convallis turpis, eu tempus ipsum ligula eu tortor. Praesent vitae eros vitae ex hendrerit fermentum et et mauris. Proin fermentum tortor dolor, quis sagittis neque aliquet at."
    },
    {
      "city":"Sidney",
      "image":"assets/sidney.webp",
      "rating":2,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo vestibulum nisl, at feugiat purus pharetra non. Maecenas at vulputate ipsum. Donec vitae commodo tellus, a finibus dui. Donec fermentum risus vel orci pharetra scelerisque. Cras ac congue ipsum, ut elementum sem. Duis vel enim id mauris malesuada pharetra eget faucibus ex. Nunc pharetra, eros quis commodo dapibus, nisi sapien convallis turpis, eu tempus ipsum ligula eu tortor. Phasellus pharetra ante sit amet tellus maximus, ut egestas ex vestibulum. Phasellus quis turpis mi."
    }
  ];
}
