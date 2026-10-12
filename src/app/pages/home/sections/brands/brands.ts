import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Carousel } from '../../../../shared/carousel/carousel';

interface Brand {
  readonly name: string;
  readonly logo: string;
}

@Component({
  selector: 'app-brands',
  imports: [Carousel],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Brands {
  protected readonly brands: readonly Brand[] = [
    { name: 'Trek', logo: 'images/brand-trek.png' },
    { name: 'Giant Bicycles', logo: 'images/brand-giant.png' },
    { name: 'Specialized', logo: 'images/brand-specialized.png' },
  ];
}
