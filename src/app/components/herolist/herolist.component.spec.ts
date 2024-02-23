import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerolistComponent } from './herolist.component';

describe('HerolistComponent', () => {
  let component: HerolistComponent;
  let fixture: ComponentFixture<HerolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
