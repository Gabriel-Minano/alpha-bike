import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Hero } from './sections/hero/hero';
import { Categories } from './sections/categories/categories';
import { Brands } from './sections/brands/brands';

@Component({
  selector: 'app-home',
  imports: [Hero, Categories, Brands],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
