import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SuperheroForm } from '../../types/SuperheroForm';
import { GetoneService } from '../../services/getone.service';
import { NewheroService } from '../../services/newhero.service';
import { SuperheroT } from '../../types/SuperheroT';
import { SuperheroData } from '../../types/SuperheroData';
import { EditheroService } from '../../services/edithero.service';
import { SnackBarConfig } from '../../constants/SnackBarConfig';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-heroform',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './heroform.component.html',
  styleUrl: './heroform.component.scss',
})
export class HeroformComponent {
  id: string | null = '';
  data: Object = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getOne: GetoneService,
    private newHero: NewheroService,
    private edithero: EditheroService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getOneHero();
    }
    if (history.state.name && history.state.image) {
      this.heroForm.get('id')?.setValue(history.state.id);
      this.heroForm.get('name')?.setValue(history.state.name.toUpperCase());
      this.heroForm.get('image')?.setValue(history.state.image);
    }
  }

  save() {
    if (this.id) {
      this.edit();
    } else {
      this.create();
    }
    this.router.navigate(['/']);
  }

  heroForm = new FormGroup<SuperheroForm>({
    id: new FormControl(0, []),
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  isInvalid(param: string) {
    return this.heroForm.get(param)?.invalid;
  }

  getOneHero() {
    if (this.id) {
      this.getOne.one(this.id).subscribe((data: Object) => (this.data = data));
    }
  }

  create() {
    this.newHero
      .newHero(this.heroForm.value as SuperheroData)
      .subscribe((res: SuperheroT) => {
        console.log(res);
        this.openSnackBar('The hero was created');
      });
  }

  edit() {
    if (this.id) {
      this.edithero
        .edit(this.id, this.heroForm.value as SuperheroData)
        .subscribe((data: SuperheroT) => {
          console.log(data);
          this.openSnackBar('The hero was edited');
        });
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', SnackBarConfig);
  }
}
