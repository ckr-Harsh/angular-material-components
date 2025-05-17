import {
  MatCheckboxModule,
  NgxMatNativeDateModule
} from "./chunk-E3JICQSM.js";
import "./chunk-RXOSU6ZG.js";
import {
  MatDatepickerModule
} from "./chunk-SGMMUF4F.js";
import {
  ErrorStateMatcher,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatHint,
  MatInputModule,
  MatLabel,
  MatOption,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  MatTab,
  MatTabGroup,
  NgxMatHighlightDirective,
  SharedModule
} from "./chunk-DAIRKQZL.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  FormControl,
  FormControlDirective,
  FormGroupDirective,
  FormsModule,
  Inject,
  Input,
  JsonPipe,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  NgControl,
  NgControlStatus,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgModule,
  Optional,
  Platform,
  ReactiveFormsModule,
  RouterModule,
  Subject,
  Validators,
  ViewChild,
  ViewEncapsulation,
  coerceBooleanProperty,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4XONJ4JF.js";

// projects/file-input-v2/src/lib/file-input.component.ts
var _c0 = ["inputFile"];
var _c1 = ["inputValue"];
var _c2 = [[["", "ngxMatFileInputIcon", ""]]];
var _c3 = ["[ngxMatFileInputIcon]"];
function NgxMatFileInputComponent_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 7);
    \u0275\u0275text(1, "attach_file");
    \u0275\u0275elementEnd();
  }
}
var nextUniqueId = 0;
var _NgxMatFileInputIcon = class _NgxMatFileInputIcon {
};
_NgxMatFileInputIcon.\u0275fac = function NgxMatFileInputIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatFileInputIcon)();
};
_NgxMatFileInputIcon.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatFileInputIcon, selectors: [["", "ngxMatFileInputIcon", ""]], standalone: false });
var NgxMatFileInputIcon = _NgxMatFileInputIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatFileInputIcon, [{
    type: Directive,
    args: [{
      selector: "[ngxMatFileInputIcon]",
      standalone: false
    }]
  }], null, null);
})();
var _NgxMatFileInputComponent = class _NgxMatFileInputComponent extends MatFormFieldControl {
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = coerceBooleanProperty(value);
  }
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = coerceBooleanProperty(value);
  }
  get accept() {
    return this._accept;
  }
  set accept(value) {
    this._accept = value;
  }
  constructor(_elementRef, _platform, _cd, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher) {
    super();
    this._elementRef = _elementRef;
    this._platform = _platform;
    this._cd = _cd;
    this.color = "primary";
    this._errorState = false;
    this._uid = "ngx-mat-fileinput-".concat(nextUniqueId++);
    this.stateChanges = new Subject();
    this.focused = false;
    this.controlType = "ngx-mat-file-input";
    this.autofilled = false;
    this._onTouched = () => {
    };
    this._onChange = () => {
    };
    this._multiple = false;
    this.placeholder = "Choose a file";
    this.separator = ",";
    this._readonly = true;
    this.setDescribedByIds = (ids) => {
    };
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
      this.errorStateMatcher.isErrorState(this.ngControl, this._elementRef);
    }
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this._updateInputValue(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Focuses the input. */
  focus(options) {
    this._inputValueRef.nativeElement.focus(options);
  }
  _focusChanged(isFocused) {
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
  setDescribedByIds(ids) {
    this._ariaDescribedby = ids.join("");
  }
  _isBadInput() {
    let validity = this._inputValueRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  openFilePicker(event) {
    this._inputFileRef.nativeElement.click();
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this._markAsTouched();
  }
  handleFiles(filelist) {
    if (filelist.length > 0) {
      const files = new Array();
      for (let i = 0; i < filelist.length; i++) {
        files.push(filelist.item(i));
      }
      this._updateInputValue(files);
      this._resetInputFile();
      this._onChange(this.multiple ? files : files[0]);
    }
  }
  /** Handles a click on the control's container. */
  onContainerClick(event) {
  }
  _resetInputFile() {
    this._inputFileRef.nativeElement.value = "";
  }
  _updateInputValue(files) {
    let text = null;
    if (files) {
      if (Array.isArray(files)) {
        text = this._multiple ? files.map((x) => x.name).join(this.separator) : files[0].name;
      } else {
        text = files.name != null ? files.name : null;
      }
    }
    this._inputValueRef.nativeElement.value = text;
  }
};
_NgxMatFileInputComponent.\u0275fac = function NgxMatFileInputComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatFileInputComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgControl, 8), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(ErrorStateMatcher));
};
_NgxMatFileInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatFileInputComponent, selectors: [["ngx-mat-file-input"]], contentQueries: function NgxMatFileInputComponent_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuery(dirIndex, NgxMatFileInputIcon, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._customIcon = _t.first);
  }
}, viewQuery: function NgxMatFileInputComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
    \u0275\u0275viewQuery(_c1, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputFileRef = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputValueRef = _t.first);
  }
}, hostAttrs: [1, "ngx-mat-file-input"], inputs: { color: "color", multiple: "multiple", placeholder: "placeholder", separator: "separator", errorStateMatcher: "errorStateMatcher", readonly: "readonly", accept: "accept" }, exportAs: ["ngx-mat-file-input"], standalone: false, features: [\u0275\u0275ProvidersFeature([
  {
    provide: MatFormFieldControl,
    useExisting: forwardRef(() => _NgxMatFileInputComponent)
  }
]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c3, decls: 8, vars: 13, consts: [["inputValue", ""], ["inputFile", ""], ["autocomplete", "off", 1, "mat-mdc-input-element", "mat-mdc-form-field-input-control", "mdc-text-field__input", 3, "disabled", "required"], [1, "mat-mdc-form-field-suffix"], ["matSuffix", "", "mat-icon-button", "", "type", "button", 1, "button-browse", 3, "click", "color", "disabled"], ["class", "ngx-mat-file-input--default-icon", 4, "ngIf"], ["type", "file", 1, "input-file", 3, "change", "multiple", "accept"], [1, "ngx-mat-file-input--default-icon"]], template: function NgxMatFileInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275projectionDef(_c2);
    \u0275\u0275element(0, "input", 2, 0);
    \u0275\u0275elementStart(2, "div", 3)(3, "button", 4);
    \u0275\u0275listener("click", function NgxMatFileInputComponent_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openFilePicker($event));
    });
    \u0275\u0275template(4, NgxMatFileInputComponent_mat_icon_4_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 6, 1);
    \u0275\u0275listener("change", function NgxMatFileInputComponent_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleFiles($event.target.files));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    \u0275\u0275property("disabled", ctx.disabled)("required", ctx.required);
    \u0275\u0275attribute("id", ctx.id)("placeholder", ctx.placeholder)("readonly", ctx.readonly || null)("aria-describedby", ctx._ariaDescribedby || null)("aria-invalid", ctx.errorState)("aria-required", ((tmp_9_0 = ctx.required) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : false).toString());
    \u0275\u0275advance(3);
    \u0275\u0275property("color", ctx.color)("disabled", ctx.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx._customIcon);
    \u0275\u0275advance(2);
    \u0275\u0275property("multiple", ctx.multiple)("accept", ctx.accept);
  }
}, dependencies: [NgIf, MatIconButton, MatIcon, MatSuffix], styles: ["/* projects/file-input-v2/src/lib/file-input.component.scss */\n.mat-mdc-form-field-appearance-outline .mat-form-field-prefix .ngx-mat-file-input--default-icon,\n.mat-mdc-form-field-appearance-outline .mat-form-field-suffix .ngx-mat-file-input--default-icon {\n  width: 1em;\n}\n.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .ngx-mat-file-input--default-icon,\n.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .ngx-mat-file-input--default-icon {\n  display: block;\n  width: 1.5em;\n  height: 1.5em;\n}\n.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,\n.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon {\n  margin: auto;\n}\n.ngx-mat-file-input {\n  display: flex;\n  line-height: 18px;\n  align-items: center;\n}\n.ngx-mat-file-input .input-file {\n  display: block;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=file-input.component.css.map */\n"], encapsulation: 2 });
var NgxMatFileInputComponent = _NgxMatFileInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatFileInputComponent, [{
    type: Component,
    args: [{ selector: "ngx-mat-file-input", encapsulation: ViewEncapsulation.None, host: {
      class: "ngx-mat-file-input"
    }, providers: [
      {
        provide: MatFormFieldControl,
        useExisting: forwardRef(() => NgxMatFileInputComponent)
      }
    ], exportAs: "ngx-mat-file-input", standalone: false, template: '<input\r\n  #inputValue\r\n  autocomplete="off"\r\n  class="mat-mdc-input-element mat-mdc-form-field-input-control mdc-text-field__input"\r\n  [attr.id]="id"\r\n  [attr.placeholder]="placeholder"\r\n  [disabled]="disabled"\r\n  [required]="required"\r\n  [attr.readonly]="readonly || null"\r\n  [attr.aria-describedby]="_ariaDescribedby || null"\r\n  [attr.aria-invalid]="errorState"\r\n  [attr.aria-required]="(required ?? false).toString()"\r\n/>\r\n<div class="mat-mdc-form-field-suffix">\r\n  <button\r\n    matSuffix\r\n    mat-icon-button\r\n    [color]="color"\r\n    class="button-browse"\r\n    (click)="openFilePicker($event)"\r\n    type="button"\r\n    [disabled]="disabled"\r\n  >\r\n    <mat-icon *ngIf="!_customIcon" class="ngx-mat-file-input--default-icon"\r\n      >attach_file</mat-icon\r\n    >\r\n    <ng-content select="[ngxMatFileInputIcon]"></ng-content>\r\n  </button>\r\n</div>\r\n<input\r\n  type="file"\r\n  #inputFile\r\n  (change)="handleFiles($event.target.files)"\r\n  class="input-file"\r\n  [multiple]="multiple"\r\n  [accept]="accept"\r\n/>\r\n', styles: ["/* projects/file-input-v2/src/lib/file-input.component.scss */\n.mat-mdc-form-field-appearance-outline .mat-form-field-prefix .ngx-mat-file-input--default-icon,\n.mat-mdc-form-field-appearance-outline .mat-form-field-suffix .ngx-mat-file-input--default-icon {\n  width: 1em;\n}\n.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .ngx-mat-file-input--default-icon,\n.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .ngx-mat-file-input--default-icon {\n  display: block;\n  width: 1.5em;\n  height: 1.5em;\n}\n.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,\n.mat-mdc-form-field:not(.mat-form-field-appearance-outline) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon {\n  margin: auto;\n}\n.ngx-mat-file-input {\n  display: flex;\n  line-height: 18px;\n  align-items: center;\n}\n.ngx-mat-file-input .input-file {\n  display: block;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=file-input.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }, { type: Platform }, { type: ChangeDetectorRef }, { type: NgControl, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NgControl]
  }] }, { type: NgForm, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NgForm]
  }] }, { type: FormGroupDirective, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [FormGroupDirective]
  }] }, { type: ErrorStateMatcher }], { _inputFileRef: [{
    type: ViewChild,
    args: ["inputFile", { static: true }]
  }], _inputValueRef: [{
    type: ViewChild,
    args: ["inputValue", { static: true }]
  }], _customIcon: [{
    type: ContentChild,
    args: [NgxMatFileInputIcon]
  }], color: [{
    type: Input
  }], multiple: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], separator: [{
    type: Input
  }], errorStateMatcher: [{
    type: Input
  }], readonly: [{
    type: Input
  }], accept: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatFileInputComponent, { className: "NgxMatFileInputComponent", filePath: "projects/file-input-v2/src/lib/file-input.component.ts", lineNumber: 55 });
})();

// projects/file-input-v2/src/lib/file-input.module.ts
var _NgxMatFileInputModule = class _NgxMatFileInputModule {
};
_NgxMatFileInputModule.\u0275fac = function NgxMatFileInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatFileInputModule)();
};
_NgxMatFileInputModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NgxMatFileInputModule });
_NgxMatFileInputModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
] });
var NgxMatFileInputModule = _NgxMatFileInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatFileInputModule, [{
    type: NgModule,
    args: [{
      declarations: [
        NgxMatFileInputComponent,
        NgxMatFileInputIcon
      ],
      imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
      ],
      exports: [
        NgxMatFileInputComponent,
        NgxMatFileInputIcon
      ]
    }]
  }], null, null);
})();

// projects/file-input-v2/src/lib/validators/max-size.validator.ts
function MaxSizeValidator(max) {
  return (ctrl) => {
    max = Number(max);
    if (isNaN(max)) {
      throw "MaxSizeValidator: max of size of file is invalid";
    }
    if (!ctrl.value)
      return null;
    let files = ctrl.value;
    if (!Array.isArray(ctrl.value)) {
      files = [ctrl.value];
    }
    if (!files.length)
      return null;
    const add = (a, b) => a + b;
    const sumSize = files.map((x) => x.size).reduce(add);
    if (sumSize > max) {
      return {
        maxSize: true
      };
    }
    return null;
  };
}

// src/app/demo-fileinput/demo-fileinput.component.ts
function DemoFileInputComponent_li_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1 == null ? null : item_r1.name);
  }
}
function DemoFileInputComponent_mat_radio_button_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2.label, "");
  }
}
function DemoFileInputComponent_mat_radio_button_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.label, "");
  }
}
function DemoFileInputComponent_mat_option_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
  }
}
function DemoFileInputComponent_mat_option_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("value", item_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5, " ");
  }
}
var presetFiles = [new File([], "file 1"), new File([], "file 2")];
var presetFile = new File([], "file 1");
var _DemoFileInputComponent = class _DemoFileInputComponent {
  constructor() {
    this.color = "primary";
    this.disabled = false;
    this.multiple = false;
    this.options = [
      { value: true, label: "True" },
      { value: false, label: "False" }
    ];
    this.listColors = ["primary", "accent", "warn"];
    this.listAccepts = [
      null,
      ".png",
      "image/*",
      ".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    this.code3 = '<mat-form-field>\n  <ngx-mat-file-input [formControl]="fileControl" [multiple]="multiple" [accept]="accept" [color]="color">\n    <!-- <mat-icon ngxMatFileInputIcon>folder</mat-icon> -->\n  </ngx-mat-file-input>\n</mat-form-field>';
    this.code4 = '<mat-form-field>\n  <ngx-mat-file-input [formControl]="file2Control" [multiple]="multiple" [accept]="accept" [color]="color">\n    <mat-icon ngxMatFileInputIcon>folder</mat-icon>\n  </ngx-mat-file-input>\n</mat-form-field>';
    this.code5 = '<mat-form-field appearance="outline">\n  <ngx-mat-file-input [formControl]="file3Control">\n  </ngx-mat-file-input>\n  <mat-hint>Hint</mat-hint>\n</mat-form-field>';
    this.code1 = "npm install --save @angular-material-components/file-input";
    this.code2 = "import { NgxMatFileInputModule } from '@angular-material-components/file-input';\n  \n  @NgModule({\n     ...\n     imports: [\n          ...\n          NgxMatFileInputModule\n     ]\n     ...\n  })\n  export class AppModule { }";
    this.code6 = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">';
    this.maxSize = 16;
    this.nbFiles = 0;
    this.fileControl = new FormControl(this.files, [
      Validators.required,
      MaxSizeValidator(this.maxSize * 1024)
    ]);
    this.file2Control = new FormControl(this.files);
    this.file3Control = new FormControl(this.files);
  }
  ngOnInit() {
    this.fileControl.valueChanges.subscribe((files) => {
      if (!Array.isArray(files)) {
        this.files = [files];
      } else {
        this.files = files;
      }
    });
    this.file3Control.valueChanges.subscribe((files) => {
      let data;
      if (!Array.isArray(files)) {
        data = [files];
      } else {
        data = files;
      }
      this.nbFiles = data.length;
    });
  }
  onDisabledChanged(value) {
    if (!value) {
      this.fileControl.enable();
    } else {
      this.fileControl.disable();
    }
  }
};
_DemoFileInputComponent.\u0275fac = function DemoFileInputComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DemoFileInputComponent)();
};
_DemoFileInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoFileInputComponent, selectors: [["app-demo-fileinput"]], standalone: false, decls: 152, vars: 27, consts: [[3, "mat-stretch-tabs"], ["label", "API"], ["href", "https://www.npmjs.com/package/@angular-material-components/file-input", "target", "_blank"], ["src", "https://badge.fury.io/js/%40angular-material-components%2Ffile-input.svg"], ["ngxMatHighlight", ""], ["ngxMatHighlight", "", 1, "language-typescript"], [1, "api-table-properties"], ["href", "https://material.angular.io/guide/theming#using-a-pre-built-theme"], ["ngxMatHighlight", "", 1, "language-css"], ["label", "Example"], [1, "zone", "zone-picker"], [3, "formControl", "multiple", "accept", "color"], [1, "zone", "zone-value", "flex-column"], [1, "title"], [1, "value"], [4, "ngFor", "ngForOf"], [1, "zone", "zone-errors", "flex-column"], [1, "zone", "zone-config"], [1, "config-wrapper"], [1, "label"], ["aria-label", "Select an option", 3, "ngModelChange", "ngModel"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["ngxMatHighlight", "", 1, "language-html"], [3, "formControl"], ["ngxMatFileInputIcon", ""], ["appearance", "outline"], [1, "example-radio-button", 3, "value"], [3, "value"]], template: function DemoFileInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "h1");
    \u0275\u0275text(3, "API reference for @angular-material-components/file-input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Getting started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 2);
    \u0275\u0275element(7, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "pre")(9, "code", 4);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h2");
    \u0275\u0275text(12, "Setup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "pre")(14, "code", 5);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h2");
    \u0275\u0275text(17, "Properties @Input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "table", 6)(19, "tbody")(20, "tr")(21, "th");
    \u0275\u0275text(22, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Default value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "tr")(30, "td")(31, "div");
    \u0275\u0275text(32, "disabled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34, "boolean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36, "null");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td")(38, "p");
    \u0275\u0275text(39, "If true, the file input is readonly.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "tr")(41, "td")(42, "div");
    \u0275\u0275text(43, "multiple");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45, "boolean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47, "false");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td")(49, "p");
    \u0275\u0275text(50, " If true, the file input allows the user to select more than one file. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "tr")(52, "td")(53, "div");
    \u0275\u0275text(54, "accept");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56, "string");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td");
    \u0275\u0275text(58, "null");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td")(60, "p");
    \u0275\u0275text(61, ' Limiting accepted file types (For example: accept="image/png, image/jpeg" or accept=".png, .jpg, .jpeg" \u2014 Accept PNG or JPEG files.) ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "tr")(63, "td")(64, "div");
    \u0275\u0275text(65, "color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "td");
    \u0275\u0275text(67, "ThemePalette");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69, "null");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "td")(71, "p");
    \u0275\u0275text(72, "Theme color palette for the component.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(73, "h2");
    \u0275\u0275text(74, "Theming");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p");
    \u0275\u0275text(76, " @see @angular/material ");
    \u0275\u0275elementStart(77, "a", 7);
    \u0275\u0275text(78, "Using a pre-built theme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "p");
    \u0275\u0275text(80, "Add the Material Design icon font to your index.html");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "pre")(82, "code", 8);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "mat-tab", 9)(85, "mat-card", 10)(86, "mat-card-content")(87, "mat-form-field");
    \u0275\u0275element(88, "ngx-mat-file-input", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "mat-card", 12)(90, "mat-card-content")(91, "div", 13);
    \u0275\u0275text(92, "Selected file(s):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 14)(94, "ul");
    \u0275\u0275template(95, DemoFileInputComponent_li_95_Template, 2, 1, "li", 15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(96, "mat-card", 16)(97, "mat-card-content")(98, "div", 13);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 14);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "json");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "mat-card", 17)(104, "mat-card-content")(105, "div", 18)(106, "span", 19);
    \u0275\u0275text(107, "disabled (Default: false) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "mat-radio-group", 20);
    \u0275\u0275listener("ngModelChange", function DemoFileInputComponent_Template_mat_radio_group_ngModelChange_108_listener($event) {
      return ctx.onDisabledChanged($event);
    });
    \u0275\u0275template(109, DemoFileInputComponent_mat_radio_button_109_Template, 2, 2, "mat-radio-button", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 18)(111, "span", 19);
    \u0275\u0275text(112, "multiple (Default: false) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "mat-radio-group", 20);
    \u0275\u0275twoWayListener("ngModelChange", function DemoFileInputComponent_Template_mat_radio_group_ngModelChange_113_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.multiple, $event) || (ctx.multiple = $event);
      return $event;
    });
    \u0275\u0275template(114, DemoFileInputComponent_mat_radio_button_114_Template, 2, 2, "mat-radio-button", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 18)(116, "span", 19);
    \u0275\u0275text(117, "accept (Default: null) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "mat-form-field")(119, "mat-label");
    \u0275\u0275text(120, "Select accept");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "mat-select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function DemoFileInputComponent_Template_mat_select_ngModelChange_121_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.accept, $event) || (ctx.accept = $event);
      return $event;
    });
    \u0275\u0275template(122, DemoFileInputComponent_mat_option_122_Template, 2, 2, "mat-option", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "div", 18)(124, "span", 19);
    \u0275\u0275text(125, "color (Default: primary) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "mat-form-field")(127, "mat-label");
    \u0275\u0275text(128, "Select color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "mat-select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function DemoFileInputComponent_Template_mat_select_ngModelChange_129_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.color, $event) || (ctx.color = $event);
      return $event;
    });
    \u0275\u0275template(130, DemoFileInputComponent_mat_option_130_Template, 2, 2, "mat-option", 23);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(131, "pre")(132, "code", 24);
    \u0275\u0275text(133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "h4");
    \u0275\u0275text(135, " You can provide a custom icon by using the directive ngxMatFileInputIcon ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "pre")(137, "code", 24);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "mat-form-field")(140, "ngx-mat-file-input", 25)(141, "mat-icon", 26);
    \u0275\u0275text(142, "folder");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(143, "h4");
    \u0275\u0275text(144, " You can use with all properties of MatFormField such as appearance variants, hint... ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "pre")(146, "code", 24);
    \u0275\u0275text(147);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "mat-form-field", 27);
    \u0275\u0275element(149, "ngx-mat-file-input", 25);
    \u0275\u0275elementStart(150, "mat-hint");
    \u0275\u0275text(151);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("mat-stretch-tabs", false);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.code1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.code2);
    \u0275\u0275advance(68);
    \u0275\u0275textInterpolate(ctx.code6);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControl", ctx.fileControl)("multiple", ctx.multiple)("accept", ctx.accept)("color", ctx.color);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.files);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Errors (Max size: ", ctx.maxSize, "Ko)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 25, ctx.fileControl.errors));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.options);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.multiple);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.options);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.accept);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.listAccepts);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.listColors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.code3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.code4);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx.file2Control);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.code5);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx.file3Control);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.nbFiles, " selected file(s)");
  }
}, dependencies: [NgForOf, MatFormField, MatLabel, MatHint, NgControlStatus, NgModel, FormControlDirective, MatRadioGroup, MatRadioButton, MatSelect, MatOption, MatIcon, MatCard, MatCardContent, NgxMatFileInputComponent, NgxMatFileInputIcon, NgxMatHighlightDirective, MatTab, MatTabGroup, JsonPipe], styles: ["\n\n.config-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 15px;\n  display: block;\n  width: 225px;\n}\n.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  width: 100px;\n}\n.zone[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.zone-value[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.zone-config[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.api-table-properties[_ngcontent-%COMP%] {\n  text-align: left;\n  border-radius: 2px;\n  border-spacing: 0;\n  margin: 0 0 32px;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 2px;\n  background-color: white;\n}\n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n  vertical-align: middle;\n}\n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  padding: 8px 16px;\n}\n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, \n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  font-weight: bold;\n}\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.flex-column[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=demo-fileinput.component.css.map */"] });
var DemoFileInputComponent = _DemoFileInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoFileInputComponent, [{
    type: Component,
    args: [{ selector: "app-demo-fileinput", standalone: false, template: '<mat-tab-group [mat-stretch-tabs]="false">\r\n  <mat-tab label="API">\r\n    <h1>API reference for &#64;angular-material-components/file-input</h1>\r\n    <h2>Getting started</h2>\r\n\r\n    <a\r\n      href="https://www.npmjs.com/package/@angular-material-components/file-input"\r\n      target="_blank"\r\n    >\r\n      <img\r\n        src="https://badge.fury.io/js/%40angular-material-components%2Ffile-input.svg"\r\n      />\r\n    </a>\r\n\r\n    <pre><code ngxMatHighlight>{{code1}}</code></pre>\r\n\r\n    <h2>Setup</h2>\r\n    <pre><code ngxMatHighlight class="language-typescript">{{code2}}</code></pre>\r\n\r\n    <h2>Properties &#64;Input</h2>\r\n    <table class="api-table-properties">\r\n      <tbody>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default value</th>\r\n          <th>Description</th>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>\r\n            <div>disabled</div>\r\n          </td>\r\n          <td>boolean</td>\r\n          <td>null</td>\r\n          <td>\r\n            <p>If true, the file input is readonly.</p>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>\r\n            <div>multiple</div>\r\n          </td>\r\n          <td>boolean</td>\r\n          <td>false</td>\r\n          <td>\r\n            <p>\r\n              If true, the file input allows the user to select more than one\r\n              file.\r\n            </p>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>\r\n            <div>accept</div>\r\n          </td>\r\n          <td>string</td>\r\n          <td>null</td>\r\n          <td>\r\n            <p>\r\n              Limiting accepted file types (For example: accept="image/png,\r\n              image/jpeg" or accept=".png, .jpg, .jpeg" \u2014 Accept PNG or JPEG\r\n              files.)\r\n            </p>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>\r\n            <div>color</div>\r\n          </td>\r\n          <td>ThemePalette</td>\r\n          <td>null</td>\r\n          <td>\r\n            <p>Theme color palette for the component.</p>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <h2>Theming</h2>\r\n    <p>\r\n      &#64;see &#64;angular/material\r\n      <a\r\n        href="https://material.angular.io/guide/theming#using-a-pre-built-theme"\r\n        >Using a pre-built theme</a\r\n      >\r\n    </p>\r\n    <p>Add the Material Design icon font to your index.html</p>\r\n    <pre><code ngxMatHighlight class="language-css">{{code6}}</code></pre>\r\n  </mat-tab>\r\n  <mat-tab label="Example">\r\n    <mat-card class="zone zone-picker">\r\n      <mat-card-content>\r\n        <mat-form-field>\r\n          <ngx-mat-file-input\r\n            [formControl]="fileControl"\r\n            [multiple]="multiple"\r\n            [accept]="accept"\r\n            [color]="color"\r\n          >\r\n            <!-- <mat-icon ngxMatFileInputIcon>folder</mat-icon> -->\r\n          </ngx-mat-file-input>\r\n        </mat-form-field>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class="zone zone-value flex-column">\r\n      <mat-card-content>\r\n        <div class="title">Selected file(s):</div>\r\n        <div class="value">\r\n          <ul>\r\n            <li *ngFor="let item of files">{{ item?.name }}</li>\r\n          </ul>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class="zone zone-errors flex-column">\r\n      <mat-card-content>\r\n        <div class="title">Errors (Max size: {{ maxSize }}Ko)</div>\r\n        <div class="value">{{ fileControl.errors | json }}</div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class="zone zone-config">\r\n      <mat-card-content>\r\n        <div class="config-wrapper">\r\n          <span class="label">disabled (Default: false) </span>\r\n          <mat-radio-group\r\n            aria-label="Select an option"\r\n            [ngModel]="disabled"\r\n            (ngModelChange)="onDisabledChanged($event)"\r\n          >\r\n            <mat-radio-button\r\n              class="example-radio-button"\r\n              *ngFor="let option of options"\r\n              [value]="option.value"\r\n            >\r\n              {{ option.label }}</mat-radio-button\r\n            >\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <div class="config-wrapper">\r\n          <span class="label">multiple (Default: false) </span>\r\n          <mat-radio-group aria-label="Select an option" [(ngModel)]="multiple">\r\n            <mat-radio-button\r\n              class="example-radio-button"\r\n              *ngFor="let option of options"\r\n              [value]="option.value"\r\n            >\r\n              {{ option.label }}</mat-radio-button\r\n            >\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <div class="config-wrapper">\r\n          <span class="label">accept (Default: null) </span>\r\n          <mat-form-field>\r\n            <mat-label>Select accept</mat-label>\r\n            <mat-select [(ngModel)]="accept">\r\n              <mat-option *ngFor="let item of listAccepts" [value]="item">\r\n                {{ item }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class="config-wrapper">\r\n          <span class="label">color (Default: primary) </span>\r\n          <mat-form-field>\r\n            <mat-label>Select color</mat-label>\r\n            <mat-select [(ngModel)]="color">\r\n              <mat-option *ngFor="let item of listColors" [value]="item">\r\n                {{ item }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <pre><code ngxMatHighlight class="language-html">{{code3}}</code></pre>\r\n\r\n    <h4>\r\n      You can provide a custom icon by using the directive ngxMatFileInputIcon\r\n    </h4>\r\n\r\n    <pre><code ngxMatHighlight class="language-html">{{code4}}</code></pre>\r\n\r\n    <mat-form-field>\r\n      <ngx-mat-file-input [formControl]="file2Control">\r\n        <mat-icon ngxMatFileInputIcon>folder</mat-icon>\r\n      </ngx-mat-file-input>\r\n    </mat-form-field>\r\n\r\n    <h4>\r\n      You can use with all properties of MatFormField such as appearance\r\n      variants, hint...\r\n    </h4>\r\n\r\n    <pre><code ngxMatHighlight class="language-html">{{code5}}</code></pre>\r\n\r\n    <mat-form-field appearance="outline">\r\n      <ngx-mat-file-input [formControl]="file3Control"> </ngx-mat-file-input>\r\n      <mat-hint>{{ nbFiles }} selected file(s)</mat-hint>\r\n    </mat-form-field>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n', styles: ["/* src/app/demo-fileinput/demo-fileinput.component.scss */\n.config-wrapper {\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.config-wrapper .label {\n  font-weight: bold;\n  margin-right: 15px;\n  display: block;\n  width: 225px;\n}\n.config-wrapper .mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n.config-wrapper_step .mat-mdc-form-field {\n  margin-right: 20px;\n  width: 100px;\n}\n.zone {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.zone-value {\n  font-weight: bold;\n}\n.zone-config {\n  flex-direction: column;\n}\n.api-table-properties {\n  text-align: left;\n  border-radius: 2px;\n  border-spacing: 0;\n  margin: 0 0 32px;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 2px;\n  background-color: white;\n}\n.api-table-properties tbody {\n  display: table-row-group;\n  vertical-align: middle;\n}\n.api-table-properties tbody tr:nth-child(even) {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.api-table-properties tbody td,\n.api-table-properties tbody th {\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  padding: 8px 16px;\n}\n.api-table-properties tbody td:first-child,\n.api-table-properties tbody th:first-child {\n  font-weight: bold;\n}\n.flex-column {\n  flex-direction: column;\n}\n.flex-column .title {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.flex-column .value {\n  display: block;\n}\n/*# sourceMappingURL=demo-fileinput.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoFileInputComponent, { className: "DemoFileInputComponent", filePath: "src/app/demo-fileinput/demo-fileinput.component.ts", lineNumber: 18 });
})();

// src/app/demo-fileinput/demo-fileinput.module.ts
var routes = [{ path: "", component: DemoFileInputComponent }];
var _DemoFileInputModule = class _DemoFileInputModule {
};
_DemoFileInputModule.\u0275fac = function DemoFileInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DemoFileInputModule)();
};
_DemoFileInputModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DemoFileInputModule });
_DemoFileInputModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  RouterModule.forChild(routes),
  MatDatepickerModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  NgxMatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  NgxMatFileInputModule,
  SharedModule
] });
var DemoFileInputModule = _DemoFileInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoFileInputModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatDatepickerModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        NgxMatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        MatCardModule,
        NgxMatFileInputModule,
        SharedModule
      ],
      declarations: [DemoFileInputComponent]
    }]
  }], null, null);
})();
export {
  DemoFileInputModule
};
//# sourceMappingURL=demo-fileinput.module-W6NLCTXY.js.map
