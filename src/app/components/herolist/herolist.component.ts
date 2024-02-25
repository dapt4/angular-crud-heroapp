import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperheroT } from '../../types/SuperheroT';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-herolist',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './herolist.component.html',
  styleUrl: './herolist.component.scss',
})
export class HerolistComponent {
  @Input() herolist: SuperheroT[] = [];
  @Output() deleteHeroEvent = new EventEmitter();

  deleteHero(id: number) {
    this.deleteHeroEvent.emit(id);
  }

  upper(name: string): string {
    const charArr: string[] = name.split('');
    charArr[0] = charArr[0].toUpperCase();
    return charArr.join('');
  }
}
