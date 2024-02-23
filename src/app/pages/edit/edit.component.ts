import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeroformComponent } from '../../components/heroform/heroform.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterModule,
    HeroformComponent,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {

}
