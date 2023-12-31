import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FileInput } from './file-input';

@Component({
  selector: 'dai-test',
  template: `<input type="file" daiFileInput [formControl]="fileInputForm" />`,
  imports: [FileInput, ReactiveFormsModule],
  standalone: true,
})
export class TestFileInput {
  fileInputForm = new FormControl<File | null>(null, {
    validators: [Validators.required],
  });
}

describe('FileInput', () => {
  let fileInput: FileInput;
  let fixture: ComponentFixture<TestFileInput>;
  let testComponent: TestFileInput;
  let fileInputEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileInput],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFileInput);
    fileInput = fixture.debugElement
      .query(By.directive(FileInput))
      .injector.get(FileInput);
    fileInputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    testComponent = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fileInput).toBeTruthy();
    expect(fileInputEl).toBeTruthy();
  });

  it('Should have class file-input', () => {
    expect(fileInputEl.classList).toContain('file-input');
  });

  describe('color', () => {
    it('should set the color to primary', () => {
      fileInput.color = 'primary';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-primary');
    });

    it('should set the color to secondary', () => {
      fileInput.color = 'secondary';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-secondary');
    });

    it('should set the color to accent', () => {
      fileInput.color = 'accent';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-accent');
    });

    it('should set the color to neutral', () => {
      fileInput.color = 'neutral';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-neutral');
    });

    it('should set the color to info', () => {
      fileInput.color = 'info';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-info');
    });

    it('should set the color to success', () => {
      fileInput.color = 'success';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-success');
    });

    it('should set the color to warning', () => {
      fileInput.color = 'warning';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-warning');
    });

    it('should set the color to error', () => {
      fileInput.color = 'error';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-error');
    });

    it('should set the color to base-100', () => {
      fileInput.color = 'base-100';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-base-100');
    });

    it('should set the color to base-200', () => {
      fileInput.color = 'base-200';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-base-200');
    });

    it('should set the color to base-300', () => {
      fileInput.color = 'base-300';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-base-300');
    });
  });

  describe('size', () => {
    it('should set the size to xsmall', () => {
      fileInput.size = 'xs';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-xs');
    });

    it('should set the size to small', () => {
      fileInput.size = 'sm';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-sm');
    });

    it('should set the size to meduim', () => {
      fileInput.size = 'md';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-md');
    });

    it('should set the size to large', () => {
      fileInput.size = 'lg';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-lg');
    });
  });

  describe('variant', () => {
    it('should set the variant to bordered', () => {
      fileInput.variant = 'bordered';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-bordered');
    });

    it('should set the variant to ghost', () => {
      fileInput.variant = 'ghost';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-ghost');
    });
  });

  describe('status', () => {
    it('should set the status to success', () => {
      fileInput.status = 'success';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-success');
    });

    it('should set the status to error', () => {
      fileInput.status = 'error';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-error');
    });

    it('should set the status to default', () => {
      fileInput.status = 'default';
      fixture.detectChanges();
      expect(fileInputEl.classList).toContain('file-input-neutral');
    });
  });

  describe('disabled', () => {
    it('should be disabled', () => {
      fileInput.disabled = true;
      fixture.detectChanges();
      expect(fileInputEl.getAttribute('disabled')).toEqual('true');
    });

    it('should set the disabled to false', () => {
      fileInput.disabled = false;
      fixture.detectChanges();
      expect(fileInputEl.getAttribute('disabled')).toBeNull();
    });
  });
});
