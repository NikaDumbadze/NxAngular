import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuringComponentsComponent } from './structuring-components.component';

describe('StructuringComponentsComponent', () => {
  let component: StructuringComponentsComponent;
  let fixture: ComponentFixture<StructuringComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructuringComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StructuringComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
