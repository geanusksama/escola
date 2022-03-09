import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoComponentComponent } from './aluno-component.component';

describe('AlunoComponentComponent', () => {
  let component: AlunoComponentComponent;
  let fixture: ComponentFixture<AlunoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
