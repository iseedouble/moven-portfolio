import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsProjectComponent } from './card-details-project.component';

describe('CardDetailsProjectComponent', () => {
  let component: CardDetailsProjectComponent;
  let fixture: ComponentFixture<CardDetailsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetailsProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDetailsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
