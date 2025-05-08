import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Platform } from "@angular/cdk/platform";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  DoCheck,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormGroupDirective,
  NgControl,
  NgForm,
} from "@angular/forms";
import { ErrorStateMatcher, ThemePalette } from "@angular/material/core";
import { MatFormFieldControl } from "@angular/material/form-field";
import { Subject } from "rxjs";
import { FileOrArrayFile } from "./file-input-type";

let nextUniqueId = 0;

@Directive({
  selector: "[ngxMatFileInputIcon]",
  standalone: false,
})
export class NgxMatFileInputIcon {}

@Component({
  selector: "ngx-mat-file-input",
  templateUrl: "file-input.component.html",
  styleUrls: ["file-input.component.scss"],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "ngx-mat-file-input",
  },
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => NgxMatFileInputComponent),
    },
  ],
  exportAs: "ngx-mat-file-input",
  standalone: false,
})
export class NgxMatFileInputComponent
  extends MatFormFieldControl<FileOrArrayFile>
  implements OnDestroy, DoCheck, ControlValueAccessor
{
  @ViewChild("inputFile", { static: true }) private _inputFileRef: ElementRef;
  @ViewChild("inputValue", { static: true }) private _inputValueRef: ElementRef;

  /** Custom icon set by the consumer. */
  @ContentChild(NgxMatFileInputIcon) _customIcon: NgxMatFileInputIcon;

  @Input() color: ThemePalette = "primary";
  private _errorState = false;

  protected _uid = `ngx-mat-fileinput-${nextUniqueId++}`;
  protected _previousNativeValue: any;

  readonly stateChanges: Subject<void> = new Subject<void>();
  focused: boolean = false;
  errorState: boolean;
  controlType: string = "ngx-mat-file-input";
  autofilled: boolean = false;
  _ariaDescribedby: string;

  /** Function when touched */
  _onTouched = () => {};

  /** Function when changed */
  _onChange: (value: FileOrArrayFile) => void = () => {};

  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  protected _multiple = false;

  @Input() placeholder: string = "Choose a file";
  @Input() separator: string = ",";

  @Input() errorStateMatcher: ErrorStateMatcher;
  protected _value: FileOrArrayFile;

  @Input()
  get readonly(): boolean {
    return this._readonly;
  }
  set readonly(value: boolean) {
    this._readonly = coerceBooleanProperty(value);
  }
  protected _readonly = true;

  @Input()
  get accept(): string {
    return this._accept;
  }
  set accept(value: string) {
    this._accept = value;
  }
  protected _accept: string;

  constructor(
    protected _elementRef: ElementRef<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    protected _platform: Platform,
    private _cd: ChangeDetectorRef,
    @Optional() @Inject(NgControl) ngControl: NgControl,
    @Optional() @Inject(NgForm) _parentForm: NgForm,
    @Optional()
    @Inject(FormGroupDirective)
    _parentFormGroup: FormGroupDirective,
    _defaultErrorStateMatcher: ErrorStateMatcher
  ) {
    super();
    this.setDescribedByIds = (ids: string[]) => {};
    if (ngControl && "valueAccessor" in ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  ngOnChanges() {
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  ngDoCheck() {
    if (this.ngControl) {
      this.errorStateMatcher.isErrorState(
        this.ngControl as any,
        this._elementRef as any
      );
    }
  }

  // Implemented as part of ControlValueAccessor.
  writeValue(value: FileOrArrayFile): void {
    this._updateInputValue(value);
  }

  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  /** Focuses the input. */
  focus(options?: FocusOptions): void {
    this._inputValueRef.nativeElement.focus(options);
  }

  _focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }

  /** Mark the field as touched */
  _markAsTouched() {
    this._onTouched();
    this._cd.markForCheck();
    this.stateChanges.next();
  }

  setDescribedByIds(ids: string[]): void {
    this._ariaDescribedby = ids.join("");
  }

  protected _isBadInput() {
    let validity = (this._inputValueRef.nativeElement as HTMLInputElement)
      .validity;
    return validity && validity.badInput;
  }

  openFilePicker(event?: MouseEvent) {
    this._inputFileRef.nativeElement.click();
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this._markAsTouched();
  }

  handleFiles(filelist: FileList) {
    if (filelist.length > 0) {
      const files: Array<File> = new Array();
      for (let i = 0; i < filelist.length; i++) {
        files.push(filelist.item(i));
      }
      this._updateInputValue(files);
      this._resetInputFile();
      this._onChange(this.multiple ? files : files[0]);
    }
  }

  /** Handles a click on the control's container. */
  onContainerClick(event: MouseEvent) {}

  private _resetInputFile() {
    this._inputFileRef.nativeElement.value = "";
  }

  private _updateInputValue(files: FileOrArrayFile) {
    let text = null;
    if (files) {
      if (Array.isArray(files)) {
        text = this._multiple
          ? files.map((x) => x.name).join(this.separator)
          : files[0].name;
      } else {
        text = files.name != null ? files.name : null;
      }
    }

    this._inputValueRef.nativeElement.value = text;
  }
}
