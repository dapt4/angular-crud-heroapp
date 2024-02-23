import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperheroT } from '../../types/SuperheroT';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-herolist',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './herolist.component.html',
  styleUrl: './herolist.component.scss',
})
export class HerolistComponent {
  @Input() herolist: SuperheroT[] = [];
  @Output() deleteHeroEvent = new EventEmitter()

  deleteHero(id: number){
    this.deleteHeroEvent.emit(id)
  }
}
