import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesFunctionsComponent } from './pipes-functions.component';

describe('PipesFunctionsComponent', () => {
  let component: PipesFunctionsComponent;
  let fixture: ComponentFixture<PipesFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesFunctionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
