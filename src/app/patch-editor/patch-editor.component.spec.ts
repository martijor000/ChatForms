import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchEditorComponent } from './patch-editor.component';

describe('PatchEditorComponent', () => {
  let component: PatchEditorComponent;
  let fixture: ComponentFixture<PatchEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
