import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'x'
  | 'menu'
  | 'arrow-left-circle'
  | 'arrow-right-circle'
  | 'triangle-left'
  | 'triangle-right'
  | 'bike'
  | 'map-pin'
  | 'phone'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'message-circle';

/** Iconos SVG en línea (estilo "lucide"), sin dependencias externas. Heredan el color con currentColor. */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(24);
  readonly strokeWidth = input(2);
}
