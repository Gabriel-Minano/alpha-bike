import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButton {
  // TODO: confirmar el número real (formato internacional, sin "+" ni espacios)
  protected readonly href =
    'https://wa.me/51912543818?text=' + encodeURIComponent('Hola, quisiera más información sobre Alpha Bike.');
}
