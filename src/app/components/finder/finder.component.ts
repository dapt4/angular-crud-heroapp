import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-finder',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './finder.component.html',
  styleUrl: './finder.component.scss',
})
export class FinderComponent {
  @Output() valueEvent = new EventEmitter<string>();

  inputHandler(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.valueEvent.emit(value)
  }
}
