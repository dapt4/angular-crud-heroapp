import { FormControl } from '@angular/forms';

export interface SuperheroForm {
  id?: FormControl<number | null>;
  name: FormControl<string | null>;
  image: FormControl<string | null>;
}
