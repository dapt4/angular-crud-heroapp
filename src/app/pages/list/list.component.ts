import { Component } from '@angular/core';
import { FinderComponent } from '../../components/finder/finder.component';
import { GetdataService } from '../../services/getdata.service';
import { SuperheroT } from '../../types/SuperheroT';
import { CommonModule } from '@angular/common';
import { HerolistComponent } from '../../components/herolist/herolist.component';
import { DeleteheroService } from '../../services/deletehero.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MydialogComponent } from '../../components/mydialog/mydialog.component';
import { DialogData } from '../../types/DialogData';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    FinderComponent,
    CommonModule,
    HerolistComponent,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule,
    MydialogComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  heroState: SuperheroT[] = [];
  matchState: SuperheroT[] = [];
  findValue: string = '';

  constructor(
    private service: GetdataService,
    private delService: DeleteheroService,
    public dialog: MatDialog
  ) {}

  openDialog(id: number) {
    const dialogR = this.dialog.open(MydialogComponent, { data: { id: id } });
    dialogR.afterClosed().subscribe((data: DialogData) => {
      if (data) {
        this.deleteOne(data.id);
      }
    });
  }

  find(value: string) {
    this.findValue = value;
    this.matchState = this.heroState.filter((hero) => {
      return hero.name.toLowerCase().includes(value);
    });
  }

  deleteOne(id: number) {
    this.heroState = this.heroState.filter((hero) => hero.id !== id);
    this.find(this.findValue);
    this.delService.del(id).subscribe((res: Object) => console.log(res));
  }

  ngOnInit() {
    this.service.getAll().subscribe((data: SuperheroT[]) => {
      this.heroState = data;
      this.matchState = data;
    });
  }
}
