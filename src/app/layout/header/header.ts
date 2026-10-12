import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { Icon } from '../../shared/icon/icon';

interface NavItem {
  readonly label: string;
  readonly path: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly router = inject(Router);

  protected readonly navItems: readonly NavItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Bicicletas', path: '/bicicletas' },
    { label: 'Accesorio', path: '/accesorios' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Contacto', path: '/contacto' },
  ];

  protected readonly query = signal('');
  protected readonly menuOpen = signal(false);

  protected onSearchInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected clearSearch(): void {
    this.query.set('');
  }

  protected submitSearch(event: Event): void {
    event.preventDefault();
    const q = this.query().trim();
    if (!q) return;
    this.closeMenu();
    this.router.navigate(['/bicicletas'], { queryParams: { q } });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
