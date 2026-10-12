import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  TemplateRef,
  contentChild,
  input,
  viewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { Icon } from '../icon/icon';

/**
 * Carrusel reutilizable con scroll-snap.
 *
 * Uso:
 *   <app-carousel [items]="lista" label="Mi carrusel" arrows="circle">
 *     <ng-template let-item> ...contenido de cada slide... </ng-template>
 *   </app-carousel>
 *
 * - Se ven 3 slides en escritorio, 2 en tablet y 1 en móvil.
 * - Las flechas avanzan un slide y, al llegar al final, vuelven al inicio (y viceversa).
 */
@Component({
  selector: 'app-carousel',
  imports: [NgTemplateOutlet, Icon],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carousel<T> {
  readonly items = input.required<readonly T[]>();
  readonly label = input.required<string>();
  readonly arrows = input<'circle' | 'triangle'>('circle');

  protected readonly slideTemplate = contentChild.required(TemplateRef);
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');

  protected go(direction: 1 | -1): void {
    const el = this.track().nativeElement;
    const firstSlide = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = firstSlide ? firstSlide.getBoundingClientRect().width + gap : el.clientWidth;

    const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

    const atStart = el.scrollLeft <= 1;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior });
    } else if (direction === -1 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior });
    } else {
      el.scrollBy({ left: direction * step, behavior });
    }
  }
}
