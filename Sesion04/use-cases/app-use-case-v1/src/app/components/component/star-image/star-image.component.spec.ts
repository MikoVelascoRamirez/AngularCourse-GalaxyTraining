import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarImageComponent } from './star-image.component';

describe('StarImageComponent', () => {
  let component: StarImageComponent;
  let fixture: ComponentFixture<StarImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
