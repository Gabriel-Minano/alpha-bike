import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Carousel } from '../../../../shared/carousel/carousel';
import { Category, CategoryCard } from '../../components/category-card/category-card';

@Component({
  selector: 'app-categories',
  imports: [Carousel, CategoryCard],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Categories {
  // Agrega más categorías aquí: el carrusel se desplaza solo cuando hay más de 3.
  protected readonly categories: readonly Category[] = [
    {
      slug: 'montana',
      label: 'Montañera',
      image: 'images/cat-montanera.png',
      alt: 'Bicicleta de montaña negra con detalles rojos',
    },
    {
      slug: 'ruta',
      label: 'Ruta',
      image: 'images/cat-ruta.png',
      alt: 'Bicicleta de ruta azul',
    },
    {
      slug: 'bmx',
      label: 'BMX',
      image: 'images/cat-bmx.png',
      alt: 'Bicicleta BMX negra con llantas verdes',
    },
  ];
}
