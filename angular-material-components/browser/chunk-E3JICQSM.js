import {
  animate,
  keyframes,
  sequence,
  state,
  style,
  transition,
  trigger
} from "./chunk-RXOSU6ZG.js";
import {
  CdkPortalOutlet,
  ComponentPortal,
  DateAdapter,
  ErrorStateMatcher,
  FlexibleConnectedPositionStrategy,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_FORM_FIELD,
  MAT_INPUT_VALUE_ACCESSOR,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSelectModule,
  Overlay,
  OverlayConfig,
  OverlayModule,
  PortalModule,
  TemplatePortal,
  _MatInternalFormField
} from "./chunk-DAIRKQZL.js";
import {
  A11yModule,
  ANIMATION_MODULE_TYPE,
  Attribute,
  BACKSPACE,
  CdkMonitorFocus,
  CdkScrollableModule,
  CdkTrapFocus,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CheckboxRequiredValidator,
  CommonModule,
  Component,
  ContentChild,
  ControlContainer,
  DOCUMENT,
  DOWN_ARROW,
  DefaultValueAccessor,
  Directionality,
  Directive,
  END,
  ENTER,
  ESCAPE,
  ElementRef,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HOME,
  HostAttributeToken,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LEFT_ARROW,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatRipple,
  MaxLengthValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  NgZone,
  Optional,
  Output,
  PAGE_DOWN,
  PAGE_UP,
  Platform,
  PlatformModule,
  RIGHT_ARROW,
  ReactiveFormsModule,
  RendererFactory2,
  RuntimeError,
  SPACE,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  UP_ARROW,
  Validators,
  Version,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  __publicField,
  __spreadProps,
  __spreadValues,
  _getFocusedElementPierceShadowDom,
  booleanAttribute,
  coerceBooleanProperty,
  coerceStringArray,
  debounceTime,
  filter,
  forwardRef,
  hasModifierKey,
  inject,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  startWith,
  take,
  takeUntil,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4XONJ4JF.js";

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c0 = ["input"];
var _c1 = ["label"];
var _c2 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatCheckbox),
  multi: true
};
var MatCheckboxChange = class {
  constructor() {
    /** The source checkbox of the event. */
    __publicField(this, "source");
    /** The new `checked` value of the checkbox. */
    __publicField(this, "checked");
  }
};
var defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
var _MatCheckbox = class _MatCheckbox {
  constructor() {
    __publicField(this, "_elementRef", inject(ElementRef));
    __publicField(this, "_changeDetectorRef", inject(ChangeDetectorRef));
    __publicField(this, "_ngZone", inject(NgZone));
    __publicField(this, "_animationMode", inject(ANIMATION_MODULE_TYPE, {
      optional: true
    }));
    __publicField(this, "_options", inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
      optional: true
    }));
    /** CSS classes to add when transitioning between the different checkbox states. */
    __publicField(this, "_animationClasses", {
      uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
      uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
      checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
      checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
      indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
      indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
    });
    /**
     * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
     * take precedence so this may be omitted.
     */
    __publicField(this, "ariaLabel", "");
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */
    __publicField(this, "ariaLabelledby", null);
    /** The 'aria-describedby' attribute is read after the element's label and field type. */
    __publicField(this, "ariaDescribedby");
    /**
     * Users can specify the `aria-expanded` attribute which will be forwarded to the input element
     */
    __publicField(this, "ariaExpanded");
    /**
     * Users can specify the `aria-controls` attribute which will be forwarded to the input element
     */
    __publicField(this, "ariaControls");
    /** Users can specify the `aria-owns` attribute which will be forwarded to the input element */
    __publicField(this, "ariaOwns");
    __publicField(this, "_uniqueId");
    /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
    __publicField(this, "id");
    /** Whether the checkbox is required. */
    __publicField(this, "required");
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
    __publicField(this, "labelPosition", "after");
    /** Name value will be applied to the input element if present */
    __publicField(this, "name", null);
    /** Event emitted when the checkbox's `checked` value changes. */
    __publicField(this, "change", new EventEmitter());
    /** Event emitted when the checkbox's `indeterminate` value changes. */
    __publicField(this, "indeterminateChange", new EventEmitter());
    /** The value attribute of the native input element */
    __publicField(this, "value");
    /** Whether the checkbox has a ripple. */
    __publicField(this, "disableRipple");
    /** The native `<input type="checkbox">` element */
    __publicField(this, "_inputElement");
    /** The native `<label>` element */
    __publicField(this, "_labelElement");
    /** Tabindex for the checkbox. */
    __publicField(this, "tabIndex");
    // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
    // the lack of type checking previously and assigning random strings.
    /**
     * Theme color of the checkbox. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/checkbox/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    __publicField(this, "color");
    /** Whether the checkbox should remain interactive when it is disabled. */
    __publicField(this, "disabledInteractive");
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */
    __publicField(this, "_onTouched", () => {
    });
    __publicField(this, "_currentAnimationClass", "");
    __publicField(this, "_currentCheckState", TransitionCheckState.Init);
    __publicField(this, "_controlValueAccessorChangeFn", () => {
    });
    __publicField(this, "_validatorChangeFn", () => {
    });
    __publicField(this, "_checked", false);
    __publicField(this, "_disabled", false);
    __publicField(this, "_indeterminate", false);
    var _a, _b;
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = (_b = (_a = this._options) == null ? void 0 : _a.disabledInteractive) != null ? _b : false;
  }
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    var _a;
    return (_a = this._inputElement) == null ? void 0 : _a.nativeElement;
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return "".concat(this.id || this._uniqueId, "-input");
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this._indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = value;
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    var _a;
    const clickAction = (_a = this._options) == null ? void 0 : _a.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationMode === "NoopAnimations") {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
};
__publicField(_MatCheckbox, "\u0275fac", function MatCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCheckbox)();
});
__publicField(_MatCheckbox, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatCheckbox,
  selectors: [["mat-checkbox"]],
  viewQuery: function MatCheckbox_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-checkbox"],
  hostVars: 16,
  hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("id", ctx.id);
      \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
      \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
      \u0275\u0275classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
    }
  },
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
    ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
    ariaControls: [0, "aria-controls", "ariaControls"],
    ariaOwns: [0, "aria-owns", "ariaOwns"],
    id: "id",
    required: [2, "required", "required", booleanAttribute],
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
    color: "color",
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
    checked: [2, "checked", "checked", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  exportAs: ["matCheckbox"],
  features: [\u0275\u0275ProvidersFeature([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
    provide: NG_VALIDATORS,
    useExisting: _MatCheckbox,
    multi: true
  }]), \u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c2,
  decls: 15,
  vars: 23,
  consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
  template: function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 3);
      \u0275\u0275listener("click", function MatCheckbox_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._preventBubblingFromLabel($event));
      });
      \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
      \u0275\u0275listener("click", function MatCheckbox_Template_div_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onTouchTargetClick());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "input", 6, 1);
      \u0275\u0275listener("blur", function MatCheckbox_Template_input_blur_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onBlur());
      })("click", function MatCheckbox_Template_input_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onInputClick());
      })("change", function MatCheckbox_Template_input_change_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onInteractionEvent($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 7);
      \u0275\u0275elementStart(7, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 9);
      \u0275\u0275element(9, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(10, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "label", 13, 2);
      \u0275\u0275projection(14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const checkbox_r2 = \u0275\u0275reference(2);
      \u0275\u0275property("labelPosition", ctx.labelPosition);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
      \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
      \u0275\u0275advance(7);
      \u0275\u0275property("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
      \u0275\u0275advance();
      \u0275\u0275property("for", ctx.inputId);
    }
  },
  dependencies: [MatRipple, _MatInternalFormField],
  styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var MatCheckbox = _MatCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationMode === 'NoopAnimations'",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: '<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">\n  <div #checkbox class="mdc-checkbox">\n    <!-- Render this element first so the input is on top. -->\n    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>\n    <input #input\n           type="checkbox"\n           class="mdc-checkbox__native-control"\n           [class.mdc-checkbox--selected]="checked"\n           [attr.aria-label]="ariaLabel || null"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           [attr.aria-checked]="indeterminate ? \'mixed\' : null"\n           [attr.aria-controls]="ariaControls"\n           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"\n           [attr.aria-expanded]="ariaExpanded"\n           [attr.aria-owns]="ariaOwns"\n           [attr.name]="name"\n           [attr.value]="value"\n           [checked]="checked"\n           [indeterminate]="indeterminate"\n           [disabled]="disabled && !disabledInteractive"\n           [id]="inputId"\n           [required]="required"\n           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"\n           (blur)="_onBlur()"\n           (click)="_onInputClick()"\n           (change)="_onInteractionEvent($event)"/>\n    <div class="mdc-checkbox__ripple"></div>\n    <div class="mdc-checkbox__background">\n      <svg class="mdc-checkbox__checkmark"\n           focusable="false"\n           viewBox="0 0 24 24"\n           aria-hidden="true">\n        <path class="mdc-checkbox__checkmark-path"\n              fill="none"\n              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>\n      </svg>\n      <div class="mdc-checkbox__mixedmark"></div>\n    </div>\n    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple\n      [matRippleTrigger]="checkbox"\n      [matRippleDisabled]="disableRipple || disabled"\n      [matRippleCentered]="true"></div>\n  </div>\n  <!--\n    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back\n    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced\n    an unnecessary accessibility tree node.\n  -->\n  <label class="mdc-label" #label [for]="inputId">\n    <ng-content></ng-content>\n  </label>\n</div>\n',
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatCheckboxRequiredValidator),
  multi: true
};
var _MatCheckboxRequiredValidator = class _MatCheckboxRequiredValidator extends CheckboxRequiredValidator {
};
__publicField(_MatCheckboxRequiredValidator, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275MatCheckboxRequiredValidator_BaseFactory;
  return function MatCheckboxRequiredValidator_Factory(__ngFactoryType__) {
    return (\u0275MatCheckboxRequiredValidator_BaseFactory || (\u0275MatCheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MatCheckboxRequiredValidator)))(__ngFactoryType__ || _MatCheckboxRequiredValidator);
  };
})());
__publicField(_MatCheckboxRequiredValidator, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCheckboxRequiredValidator,
  selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
  features: [\u0275\u0275ProvidersFeature([MAT_CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
}));
var MatCheckboxRequiredValidator = _MatCheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "mat-checkbox[required][formControlName],\n             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]",
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
    }]
  }], null, null);
})();
var __MatCheckboxRequiredValidatorModule = class __MatCheckboxRequiredValidatorModule {
};
__publicField(__MatCheckboxRequiredValidatorModule, "\u0275fac", function _MatCheckboxRequiredValidatorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __MatCheckboxRequiredValidatorModule)();
});
__publicField(__MatCheckboxRequiredValidatorModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: __MatCheckboxRequiredValidatorModule
}));
__publicField(__MatCheckboxRequiredValidatorModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({}));
var _MatCheckboxRequiredValidatorModule = __MatCheckboxRequiredValidatorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatCheckboxRequiredValidatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckboxRequiredValidator],
      exports: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
var _MatCheckboxModule = class _MatCheckboxModule {
};
__publicField(_MatCheckboxModule, "\u0275fac", function MatCheckboxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCheckboxModule)();
});
__publicField(_MatCheckboxModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatCheckboxModule
}));
__publicField(_MatCheckboxModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCheckbox, MatCommonModule, MatCommonModule]
}));
var MatCheckboxModule = _MatCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox, MatCommonModule],
      exports: [MatCheckbox, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/core.mjs
var VERSION = new Version("19.2.15");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
var TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var _NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  constructor() {
    super();
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 14.0.0
     */
    __publicField(this, "useUtcForDisplay", false);
    /** The injected locale. */
    __publicField(this, "_matDateLocale", inject(MAT_DATE_LOCALE, {
      optional: true
    }));
    const matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style2) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style2,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style2) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style2,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    var _a, _b, _c;
    if (typeof Intl !== "undefined" && Intl.Locale) {
      const locale = new Intl.Locale(this.locale);
      const firstDay = (_c = (_b = ((_a = locale.getWeekInfo) == null ? void 0 : _a.call(locale)) || locale.weekInfo) == null ? void 0 : _b.firstDay) != null ? _c : 0;
      return firstDay === 7 ? 0 : firstDay;
    }
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error('Invalid month index "'.concat(month, '". Month index has to be between 0 and 11.'));
      }
      if (date < 1) {
        throw Error('Invalid date "'.concat(date, '". Date has to be greater than 0.'));
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Invalid date "'.concat(date, '" for month with index "').concat(month, '".'));
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  setTime(target, hours, minutes, seconds) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!inRange(hours, 0, 23)) {
        throw Error('Invalid hours "'.concat(hours, '". Hours value must be between 0 and 23.'));
      }
      if (!inRange(minutes, 0, 59)) {
        throw Error('Invalid minutes "'.concat(minutes, '". Minutes value must be between 0 and 59.'));
      }
      if (!inRange(seconds, 0, 59)) {
        throw Error('Invalid seconds "'.concat(seconds, '". Seconds value must be between 0 and 59.'));
      }
    }
    const clone = this.clone(target);
    clone.setHours(hours, minutes, seconds, 0);
    return clone;
  }
  getHours(date) {
    return date.getHours();
  }
  getMinutes(date) {
    return date.getMinutes();
  }
  getSeconds(date) {
    return date.getSeconds();
  }
  parseTime(userValue, parseFormat) {
    if (typeof userValue !== "string") {
      return userValue instanceof Date ? new Date(userValue.getTime()) : null;
    }
    const value = userValue.trim();
    if (value.length === 0) {
      return null;
    }
    let result = this._parseTimeString(value);
    if (result === null) {
      const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, "").trim();
      if (withoutExtras.length > 0) {
        result = this._parseTimeString(withoutExtras);
      }
    }
    return result || this.invalid();
  }
  addSeconds(date, amount) {
    return new Date(date.getTime() + amount * 1e3);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
  /**
   * Attempts to parse a time string into a date object. Returns null if it cannot be parsed.
   * @param value Time string to parse.
   */
  _parseTimeString(value) {
    const parsed = value.toUpperCase().match(TIME_REGEX);
    if (parsed) {
      let hours = parseInt(parsed[1]);
      const minutes = parseInt(parsed[2]);
      let seconds = parsed[3] == null ? void 0 : parseInt(parsed[3]);
      const amPm = parsed[4];
      if (hours === 12) {
        hours = amPm === "AM" ? 0 : hours;
      } else if (amPm === "PM") {
        hours += 12;
      }
      if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
        return this.setTime(this.today(), hours, minutes, seconds || 0);
      }
    }
    return null;
  }
};
__publicField(_NativeDateAdapter, "\u0275fac", function NativeDateAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NativeDateAdapter)();
});
__publicField(_NativeDateAdapter, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NativeDateAdapter,
  factory: _NativeDateAdapter.\u0275fac
}));
var NativeDateAdapter = _NativeDateAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Injectable
  }], () => [], null);
})();
function inRange(value, min, max) {
  return !isNaN(value) && value >= min && value <= max;
}
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null,
    timeInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    timeInput: {
      hour: "numeric",
      minute: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    },
    timeOptionLabel: {
      hour: "numeric",
      minute: "numeric"
    }
  }
};
var _NativeDateModule = class _NativeDateModule {
};
__publicField(_NativeDateModule, "\u0275fac", function NativeDateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NativeDateModule)();
});
__publicField(_NativeDateModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NativeDateModule
}));
__publicField(_NativeDateModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }]
}));
var NativeDateModule = _NativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var _MatNativeDateModule = class _MatNativeDateModule {
};
__publicField(_MatNativeDateModule, "\u0275fac", function MatNativeDateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatNativeDateModule)();
});
__publicField(_MatNativeDateModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatNativeDateModule
}));
__publicField(_MatNativeDateModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideNativeDateAdapter()]
}));
var MatNativeDateModule = _MatNativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}

// projects/datetime-picker-v2/src/lib/core/date-adapter.ts
var NgxMatDateAdapter = class extends DateAdapter {
  /**
   * Check if two date have same time
   * @param a Date 1
   * @param b Date 2
   */
  isSameTime(a, b) {
    if (a == null || b == null)
      return true;
    return this.getHour(a) === this.getHour(b) && this.getMinute(a) === this.getMinute(b) && this.getSecond(a) === this.getSecond(b);
  }
  /**
   * Copy time from a date to a another date
   * @param toDate
   * @param fromDate
   */
  copyTime(toDate, fromDate) {
    this.setHour(toDate, this.getHour(fromDate));
    this.setMinute(toDate, this.getMinute(fromDate));
    this.setSecond(toDate, this.getSecond(fromDate));
  }
  /**
  * Compares two dates.
  * @param first The first date to compare.
  * @param second The second date to compare.
  * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
  *     a number greater than 0 if the first date is later.
  */
  compareDateWithTime(first, second, showSeconds) {
    let res = super.compareDate(first, second) || this.getHour(first) - this.getHour(second) || this.getMinute(first) - this.getMinute(second);
    if (showSeconds) {
      res = res || this.getSecond(first) - this.getSecond(second);
    }
    return res;
  }
  /**
   * Set time by using default values
   * @param defaultTime List default values [hour, minute, second]
   */
  setTimeByDefaultValues(date, defaultTime) {
    if (!Array.isArray(defaultTime)) {
      throw Error("@Input DefaultTime should be an array");
    }
    this.setHour(date, defaultTime[0] || 0);
    this.setMinute(date, defaultTime[1] || 0);
    this.setSecond(date, defaultTime[2] || 0);
  }
};

// projects/datetime-picker-v2/src/lib/core/native-date-adapter.ts
var SUPPORTS_INTL_API;
try {
  SUPPORTS_INTL_API = typeof Intl != "undefined";
} catch {
  SUPPORTS_INTL_API = false;
}
var DEFAULT_MONTH_NAMES = {
  "long": [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  "short": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  "narrow": ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]
};
var DEFAULT_DATE_NAMES = range2(31, (i) => String(i + 1));
var DEFAULT_DAY_OF_WEEK_NAMES = {
  "long": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "narrow": ["S", "M", "T", "W", "T", "F", "S"]
};
var ISO_8601_REGEX2 = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range2(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var _NgxMatNativeDateAdapter = class _NgxMatNativeDateAdapter extends NgxMatDateAdapter {
  constructor(matDateLocale, platform) {
    super();
    this.useUtcForDisplay = true;
    super.setLocale(matDateLocale);
    this.useUtcForDisplay = !platform.TRIDENT;
    this._clampDate = platform.TRIDENT || platform.EDGE;
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style2) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, { month: style2, timeZone: "utc" });
      return range2(12, (i) => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1))));
    }
    return DEFAULT_MONTH_NAMES[style2];
  }
  getDateNames() {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, { day: "numeric", timeZone: "utc" });
      return range2(31, (i) => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
    }
    return DEFAULT_DATE_NAMES;
  }
  getDayOfWeekNames(style2) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style2, timeZone: "utc" });
      return range2(7, (i) => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
    }
    return DEFAULT_DAY_OF_WEEK_NAMES[style2];
  }
  getYearName(date) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, { year: "numeric", timeZone: "utc" });
      return this._stripDirectionalityCharacters(this._format(dtf, date));
    }
    return String(this.getYear(date));
  }
  getFirstDayOfWeek() {
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (month < 0 || month > 11) {
      throw Error('Invalid month index "'.concat(month, '". Month index has to be between 0 and 11.'));
    }
    if (date < 1) {
      throw Error('Invalid date "'.concat(date, '". Date has to be greater than 0.'));
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month) {
      throw Error('Invalid date "'.concat(date, '" for month with index "').concat(month, '".'));
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    if (SUPPORTS_INTL_API) {
      if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
        date = this.clone(date);
        date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
      }
      displayFormat = __spreadProps(__spreadValues({}, displayFormat), { timeZone: "utc" });
      const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
      return this._stripDirectionalityCharacters(this._format(dtf, date));
    }
    return this._stripDirectionalityCharacters(date.toDateString());
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [
      date.getUTCFullYear(),
      this._2digit(date.getUTCMonth() + 1),
      this._2digit(date.getUTCDate())
    ].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX2.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  getHour(date) {
    return date.getHours();
  }
  getMinute(date) {
    return date.getMinutes();
  }
  getSecond(date) {
    return date.getSeconds();
  }
  setHour(date, value) {
    date.setHours(value);
  }
  setMinute(date, value) {
    date.setMinutes(value);
  }
  setSecond(date, value) {
    date.setSeconds(value);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const result = new Date(year, month, date);
    if (year >= 0 && year < 100) {
      result.setFullYear(this.getYear(result) - 1900);
    }
    return result;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
   * other browsers do not. We remove them to make output consistent and because they interfere with
   * date parsing.
   * @param str The string to strip direction characters from.
   * @returns The stripped string.
   */
  _stripDirectionalityCharacters(str) {
    return str.replace(/[\u200e\u200f]/g, "");
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
};
_NgxMatNativeDateAdapter.\u0275fac = function NgxMatNativeDateAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatNativeDateAdapter)(\u0275\u0275inject(MAT_DATE_LOCALE, 8), \u0275\u0275inject(Platform));
};
_NgxMatNativeDateAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NgxMatNativeDateAdapter, factory: _NgxMatNativeDateAdapter.\u0275fac });
var NgxMatNativeDateAdapter = _NgxMatNativeDateAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatNativeDateAdapter, [{
    type: Injectable
  }], () => [{ type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [MAT_DATE_LOCALE]
  }] }, { type: Platform }], null);
})();

// projects/datetime-picker-v2/src/lib/core/native-date-formats.ts
var DEFAULT_DATE_INPUT = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
var NGX_MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: DEFAULT_DATE_INPUT
  },
  display: {
    dateInput: DEFAULT_DATE_INPUT,
    monthYearLabel: { year: "numeric", month: "short" },
    dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
    monthYearA11yLabel: { year: "numeric", month: "long" }
  }
};

// projects/datetime-picker-v2/src/lib/core/date-formats.ts
var NGX_MAT_DATE_FORMATS = new InjectionToken("ngx-mat-date-formats");

// projects/datetime-picker-v2/src/lib/core/native-date.module.ts
var _NgxNativeDateModule = class _NgxNativeDateModule {
};
_NgxNativeDateModule.\u0275fac = function NgxNativeDateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxNativeDateModule)();
};
_NgxNativeDateModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NgxNativeDateModule });
_NgxNativeDateModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter }
], imports: [PlatformModule] });
var NgxNativeDateModule = _NgxNativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxNativeDateModule, [{
    type: NgModule,
    args: [{
      imports: [PlatformModule],
      providers: [
        { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter }
      ]
    }]
  }], null, null);
})();
var _NgxMatNativeDateModule = class _NgxMatNativeDateModule {
};
_NgxMatNativeDateModule.\u0275fac = function NgxMatNativeDateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatNativeDateModule)();
};
_NgxMatNativeDateModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NgxMatNativeDateModule });
_NgxMatNativeDateModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: NGX_MAT_NATIVE_DATE_FORMATS }], imports: [NgxNativeDateModule] });
var NgxMatNativeDateModule = _NgxMatNativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatNativeDateModule, [{
    type: NgModule,
    args: [{
      imports: [NgxNativeDateModule],
      providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: NGX_MAT_NATIVE_DATE_FORMATS }]
    }]
  }], null, null);
})();

// projects/datetime-picker-v2/src/lib/utils/date-utils.ts
var LIMIT_TIMES = {
  minHour: 0,
  maxHour: 24,
  minMinute: 0,
  maxMinute: 60,
  minSecond: 0,
  maxSecond: 60,
  meridian: 12
};
var MERIDIANS = {
  AM: "AM",
  PM: "PM"
};
var DEFAULT_STEP = 1;
var NUMERIC_REGEX = /[^0-9]/g;
var PATTERN_INPUT_HOUR = /^(2[0-3]|[0-1][0-9]|[0-9])$/;
var PATTERN_INPUT_MINUTE = /^([0-5][0-9]|[0-9])$/;
var PATTERN_INPUT_SECOND = /^([0-5][0-9]|[0-9])$/;
function formatTwoDigitTimeValue(val) {
  const txt = val.toString();
  return txt.length > 1 ? txt : "0".concat(txt);
}
function createMissingDateImplError(provider) {
  return Error("NgxMatDatetimePicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: NgxMatNativeDateModule, NgxMatMomentModule, or provide a custom implementation.");
}

// projects/datetime-picker-v2/src/lib/timepicker.component.ts
function NgxMatTimepickerComponent_tr_3_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 10);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_tr_3_td_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.change("second", true));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "expand_less");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled || ctx_r1.disableMinute);
  }
}
function NgxMatTimepickerComponent_tr_3_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 6);
  }
}
function NgxMatTimepickerComponent_tr_3_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function NgxMatTimepickerComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "button", 10);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_tr_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("hour", true));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "expand_less");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(5, "td");
    \u0275\u0275elementStart(6, "td")(7, "button", 10);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_tr_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("minute", true));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "expand_less");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "td");
    \u0275\u0275template(11, NgxMatTimepickerComponent_tr_3_td_11_Template, 4, 1, "td", 3)(12, NgxMatTimepickerComponent_tr_3_td_12_Template, 1, 0, "td", 8)(13, NgxMatTimepickerComponent_tr_3_td_13_Template, 1, 0, "td", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.disabled || ctx_r1.disableMinute);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enableMeridian);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enableMeridian);
  }
}
function NgxMatTimepickerComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 6);
    \u0275\u0275text(1, ":");
    \u0275\u0275elementEnd();
  }
}
function NgxMatTimepickerComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "mat-form-field", 4)(2, "input", 11);
    \u0275\u0275listener("input", function NgxMatTimepickerComponent_td_14_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formatInput($event.target));
    })("keydown.ArrowUp", function NgxMatTimepickerComponent_td_14_Template_input_keydown_ArrowUp_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.change("second", true);
      return \u0275\u0275resetView($event.preventDefault());
    })("keydown.ArrowDown", function NgxMatTimepickerComponent_td_14_Template_input_keydown_ArrowDown_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.change("second", false);
      return \u0275\u0275resetView($event.preventDefault());
    })("blur", function NgxMatTimepickerComponent_td_14_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("second"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r1.color);
  }
}
function NgxMatTimepickerComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 6);
  }
}
function NgxMatTimepickerComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 12)(1, "button", 13);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_td_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMeridian());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r1.color)("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.meridian, " ");
  }
}
function NgxMatTimepickerComponent_tr_17_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function NgxMatTimepickerComponent_tr_17_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 14);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_tr_17_td_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.change("second", false));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "expand_more");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled || ctx_r1.disableMinute);
  }
}
function NgxMatTimepickerComponent_tr_17_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 6);
  }
}
function NgxMatTimepickerComponent_tr_17_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function NgxMatTimepickerComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "button", 14);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_tr_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("hour", false));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(5, "td");
    \u0275\u0275elementStart(6, "td")(7, "button", 14);
    \u0275\u0275listener("click", function NgxMatTimepickerComponent_tr_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.change("minute", false));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, NgxMatTimepickerComponent_tr_17_td_10_Template, 1, 0, "td", 3)(11, NgxMatTimepickerComponent_tr_17_td_11_Template, 4, 1, "td", 3)(12, NgxMatTimepickerComponent_tr_17_td_12_Template, 1, 0, "td", 8)(13, NgxMatTimepickerComponent_tr_17_td_13_Template, 1, 0, "td", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.disabled || ctx_r1.disableMinute);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enableMeridian);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enableMeridian);
  }
}
var _NgxMatTimepickerComponent = class _NgxMatTimepickerComponent {
  /** Hour */
  get hour() {
    let val = Number(this.form.controls["hour"].value);
    return isNaN(val) ? 0 : val;
  }
  get minute() {
    let val = Number(this.form.controls["minute"].value);
    return isNaN(val) ? 0 : val;
  }
  get second() {
    let val = Number(this.form.controls["second"].value);
    return isNaN(val) ? 0 : val;
  }
  /** Whether or not the form is valid */
  get valid() {
    return this.form.valid;
  }
  constructor(cd, _dateAdapter) {
    this.cd = cd;
    this._dateAdapter = _dateAdapter;
    this.disabled = false;
    this.showSpinners = true;
    this.stepHour = DEFAULT_STEP;
    this.stepMinute = DEFAULT_STEP;
    this.stepSecond = DEFAULT_STEP;
    this.showSeconds = false;
    this.disableMinute = false;
    this.enableMeridian = false;
    this.color = "primary";
    this.meridian = MERIDIANS.AM;
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    this._destroyed = new Subject();
    this.pattern = PATTERN_INPUT_HOUR;
    if (!this._dateAdapter) {
      throw createMissingDateImplError("NgxMatDateAdapter");
    }
    this.form = new FormGroup({
      hour: new FormControl(null, [
        Validators.required,
        Validators.pattern(PATTERN_INPUT_HOUR)
      ]),
      minute: new FormControl(null, [
        Validators.required,
        Validators.pattern(PATTERN_INPUT_MINUTE)
      ]),
      second: new FormControl(null, [
        Validators.required,
        Validators.pattern(PATTERN_INPUT_SECOND)
      ])
    });
  }
  ngOnInit() {
    this.form.valueChanges.pipe(takeUntil(this._destroyed), debounceTime(400)).subscribe((val) => {
      this._updateModel();
    });
  }
  ngOnChanges(changes) {
    if (changes.disabled || changes.disableMinute) {
      this._setDisableStates();
    }
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Writes a new value to the element.
   * @param obj
   */
  writeValue(val) {
    if (val != null) {
      this._model = val;
      this._updateHourMinuteSecond();
    }
  }
  /** Registers a callback function that is called when the control's value changes in the UI. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Enables or disables the appropriate DOM element */
  setDisabledState(isDisabled) {
    this._disabled = isDisabled;
    this.cd.markForCheck();
  }
  /**
   * Format input
   * @param input
   */
  formatInput(input) {
    input.value = input.value.replace(NUMERIC_REGEX, "");
  }
  /** Toggle meridian */
  toggleMeridian() {
    this.meridian = this.meridian === MERIDIANS.AM ? MERIDIANS.PM : MERIDIANS.AM;
    this.change("hour");
  }
  /** Change property of time */
  change(prop, up) {
    const next = this._getNextValueByProp(prop, up);
    this.form.controls[prop].setValue(formatTwoDigitTimeValue(next), {
      onlySelf: false,
      emitEvent: false
    });
    this._updateModel();
  }
  /** Update controls of form by model */
  _updateHourMinuteSecond() {
    let _hour = this._dateAdapter.getHour(this._model);
    const _minute = this._dateAdapter.getMinute(this._model);
    const _second = this._dateAdapter.getSecond(this._model);
    if (this.enableMeridian) {
      if (_hour >= LIMIT_TIMES.meridian) {
        _hour = _hour - LIMIT_TIMES.meridian;
        this.meridian = MERIDIANS.PM;
      } else {
        this.meridian = MERIDIANS.AM;
      }
      if (_hour === 0) {
        _hour = LIMIT_TIMES.meridian;
      }
    }
    this.form.patchValue({
      hour: formatTwoDigitTimeValue(_hour),
      minute: formatTwoDigitTimeValue(_minute),
      second: formatTwoDigitTimeValue(_second)
    }, {
      emitEvent: false
    });
  }
  /** Update model */
  _updateModel() {
    let _hour = this.hour;
    if (this.enableMeridian) {
      if (this.meridian === MERIDIANS.AM && _hour === LIMIT_TIMES.meridian) {
        _hour = 0;
      } else if (this.meridian === MERIDIANS.PM && _hour !== LIMIT_TIMES.meridian) {
        _hour = _hour + LIMIT_TIMES.meridian;
      }
    }
    if (this._model) {
      const clonedModel = this._dateAdapter.clone(this._model);
      this._dateAdapter.setHour(clonedModel, _hour);
      this._dateAdapter.setMinute(clonedModel, this.minute);
      this._dateAdapter.setSecond(clonedModel, this.second);
      this._onChange(clonedModel);
    }
  }
  /**
   * Get next value by property
   * @param prop
   * @param up
   */
  _getNextValueByProp(prop, up) {
    const keyProp = prop[0].toUpperCase() + prop.slice(1);
    const min = LIMIT_TIMES["min".concat(keyProp)];
    let max = LIMIT_TIMES["max".concat(keyProp)];
    if (prop === "hour" && this.enableMeridian) {
      max = LIMIT_TIMES.meridian;
    }
    let next;
    if (up == null) {
      next = this[prop] % max;
      if (prop === "hour" && this.enableMeridian) {
        if (next === 0)
          next = max;
      }
    } else {
      next = up ? this[prop] + this["step".concat(keyProp)] : this[prop] - this["step".concat(keyProp)];
      if (prop === "hour" && this.enableMeridian) {
        next = next % (max + 1);
        if (next === 0)
          next = up ? 1 : max;
      } else {
        next = next % max;
      }
      if (up) {
        next = next > max ? next - max + min : next;
      } else {
        next = next < min ? next - min + max : next;
      }
    }
    return next;
  }
  /**
   * Set disable states
   */
  _setDisableStates() {
    if (this.disabled) {
      this.form.disable();
    } else {
      this.form.enable();
      if (this.disableMinute) {
        this.form.get("minute").disable();
        if (this.showSeconds) {
          this.form.get("second").disable();
        }
      }
    }
  }
};
_NgxMatTimepickerComponent.\u0275fac = function NgxMatTimepickerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatTimepickerComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgxMatDateAdapter, 8));
};
_NgxMatTimepickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatTimepickerComponent, selectors: [["ngx-mat-timepicker"]], hostAttrs: [1, "ngx-mat-timepicker"], inputs: { disabled: "disabled", showSpinners: "showSpinners", stepHour: "stepHour", stepMinute: "stepMinute", stepSecond: "stepSecond", showSeconds: "showSeconds", disableMinute: "disableMinute", enableMeridian: "enableMeridian", defaultTime: "defaultTime", color: "color" }, exportAs: ["ngxMatTimepicker"], features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NgxMatTimepickerComponent),
    multi: true
  }
]), \u0275\u0275NgOnChangesFeature], decls: 18, vars: 9, consts: [[3, "formGroup"], [1, "ngx-mat-timepicker-table"], [1, "ngx-mat-timepicker-tbody"], [4, "ngIf"], ["appearance", "fill", 3, "color"], ["type", "text", "matInput", "", "maxlength", "2", "formControlName", "hour", 3, "input", "keydown.ArrowUp", "keydown.ArrowDown", "blur"], [1, "ngx-mat-timepicker-spacer"], ["type", "text", "matInput", "", "maxlength", "2", "formControlName", "minute", 3, "input", "keydown.ArrowUp", "keydown.ArrowDown", "blur"], ["class", "ngx-mat-timepicker-spacer", 4, "ngIf"], ["class", "ngx-mat-timepicker-meridian", 4, "ngIf"], ["type", "button", "mat-icon-button", "", "aria-label", "expand_less icon", 3, "click", "disabled"], ["type", "text", "matInput", "", "maxlength", "2", "formControlName", "second", 3, "input", "keydown.ArrowUp", "keydown.ArrowDown", "blur"], [1, "ngx-mat-timepicker-meridian"], ["mat-button", "", "mat-stroked-button", "", 3, "click", "color", "disabled"], ["type", "button", "mat-icon-button", "", "aria-label", "expand_more icon", 3, "click", "disabled"]], template: function NgxMatTimepickerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0)(1, "table", 1)(2, "tbody", 2);
    \u0275\u0275template(3, NgxMatTimepickerComponent_tr_3_Template, 14, 5, "tr", 3);
    \u0275\u0275elementStart(4, "tr")(5, "td")(6, "mat-form-field", 4)(7, "input", 5);
    \u0275\u0275listener("input", function NgxMatTimepickerComponent_Template_input_input_7_listener($event) {
      return ctx.formatInput($event.target);
    })("keydown.ArrowUp", function NgxMatTimepickerComponent_Template_input_keydown_ArrowUp_7_listener($event) {
      ctx.change("hour", true);
      return $event.preventDefault();
    })("keydown.ArrowDown", function NgxMatTimepickerComponent_Template_input_keydown_ArrowDown_7_listener($event) {
      ctx.change("hour", false);
      return $event.preventDefault();
    })("blur", function NgxMatTimepickerComponent_Template_input_blur_7_listener() {
      return ctx.change("hour");
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 6);
    \u0275\u0275text(9, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "mat-form-field", 4)(12, "input", 7);
    \u0275\u0275listener("input", function NgxMatTimepickerComponent_Template_input_input_12_listener($event) {
      return ctx.formatInput($event.target);
    })("keydown.ArrowUp", function NgxMatTimepickerComponent_Template_input_keydown_ArrowUp_12_listener($event) {
      ctx.change("minute", true);
      return $event.preventDefault();
    })("keydown.ArrowDown", function NgxMatTimepickerComponent_Template_input_keydown_ArrowDown_12_listener($event) {
      ctx.change("minute", false);
      return $event.preventDefault();
    })("blur", function NgxMatTimepickerComponent_Template_input_blur_12_listener() {
      return ctx.change("minute");
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, NgxMatTimepickerComponent_td_13_Template, 2, 0, "td", 8)(14, NgxMatTimepickerComponent_td_14_Template, 3, 1, "td", 3)(15, NgxMatTimepickerComponent_td_15_Template, 1, 0, "td", 8)(16, NgxMatTimepickerComponent_td_16_Template, 3, 3, "td", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, NgxMatTimepickerComponent_tr_17_Template, 14, 6, "tr", 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.showSpinners);
    \u0275\u0275advance(3);
    \u0275\u0275property("color", ctx.color);
    \u0275\u0275advance(5);
    \u0275\u0275property("color", ctx.color);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.enableMeridian);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.enableMeridian);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showSpinners);
  }
}, dependencies: [
  CommonModule,
  NgIf,
  MatInputModule,
  MatInput,
  MatFormField,
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatIconModule,
  MatIcon,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MaxLengthValidator,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatSelectModule,
  MatFormFieldModule
], styles: ["/* projects/datetime-picker-v2/src/lib/timepicker.component.scss */\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td {\n  text-align: center;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer {\n  font-weight: bold;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mdc-button {\n  min-width: 64px;\n  line-height: 36px;\n  border-radius: 4px;\n  min-width: 0;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  flex-shrink: 0;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button {\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  padding: 0;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button .mat-icon {\n  font-size: 24px;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field {\n  width: 24px;\n  max-width: 24px;\n  text-align: center;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field.mat-focused .mdc-text-field--filled .mat-mdc-form-field-focus-overlay,\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field:hover .mdc-text-field--filled .mat-mdc-form-field-focus-overlay {\n  background-color: transparent;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled {\n  background-color: transparent !important;\n  padding: 0 !important;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix {\n  padding: 4px 0;\n  min-height: 1px !important;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix input {\n  text-align: center;\n  font-size: 14px;\n}\n/*# sourceMappingURL=timepicker.component.css.map */\n"], encapsulation: 2 });
var NgxMatTimepickerComponent = _NgxMatTimepickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatTimepickerComponent, [{
    type: Component,
    args: [{ selector: "ngx-mat-timepicker", host: {
      class: "ngx-mat-timepicker"
    }, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgxMatTimepickerComponent),
        multi: true
      }
    ], exportAs: "ngxMatTimepicker", encapsulation: ViewEncapsulation.None, standalone: true, imports: [
      CommonModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatFormFieldModule
    ], template: '<form [formGroup]="form">\r\n  <table class="ngx-mat-timepicker-table">\r\n    <tbody class="ngx-mat-timepicker-tbody">\r\n      <tr *ngIf="showSpinners">\r\n        <td>\r\n          <button type="button" mat-icon-button aria-label="expand_less icon" (click)="change(\'hour\', true)"\r\n            [disabled]="disabled">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td></td>\r\n        <td>\r\n          <button type="button" mat-icon-button aria-label="expand_less icon" (click)="change(\'minute\', true)"\r\n            [disabled]="disabled || disableMinute">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button> </td>\r\n        <td></td>\r\n        <td *ngIf="showSeconds">\r\n          <button type="button" mat-icon-button aria-label="expand_less icon" (click)="change(\'second\', true)"\r\n            [disabled]="disabled || disableMinute">\r\n            <mat-icon>expand_less</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td *ngIf="enableMeridian" class="ngx-mat-timepicker-spacer"></td>\r\n        <td *ngIf="enableMeridian"></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>\r\n          <mat-form-field appearance="fill" [color]="color">\r\n            <input type="text" matInput (input)="formatInput($any($event).target)" maxlength="2" formControlName="hour"\r\n              (keydown.ArrowUp)="change(\'hour\', true); $event.preventDefault()"\r\n              (keydown.ArrowDown)="change(\'hour\', false); $event.preventDefault()" (blur)="change(\'hour\')">\r\n          </mat-form-field>\r\n        </td>\r\n        <td class="ngx-mat-timepicker-spacer">&#58;</td>\r\n        <td>\r\n          <mat-form-field appearance="fill" [color]="color">\r\n            <input type="text" matInput (input)="formatInput($any($event).target)" maxlength="2"\r\n              formControlName="minute" (keydown.ArrowUp)="change(\'minute\', true); $event.preventDefault()"\r\n              (keydown.ArrowDown)="change(\'minute\', false); $event.preventDefault()" (blur)="change(\'minute\')">\r\n          </mat-form-field>\r\n        </td>\r\n        <td *ngIf="showSeconds" class="ngx-mat-timepicker-spacer">&#58;</td>\r\n        <td *ngIf="showSeconds">\r\n          <mat-form-field appearance="fill" [color]="color">\r\n            <input type="text" matInput (input)="formatInput($any($event).target)" maxlength="2"\r\n              formControlName="second" (keydown.ArrowUp)="change(\'second\', true); $event.preventDefault()"\r\n              (keydown.ArrowDown)="change(\'second\', false); $event.preventDefault()" (blur)="change(\'second\')">\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td *ngIf="enableMeridian" class="ngx-mat-timepicker-spacer"></td>\r\n        <td *ngIf="enableMeridian" class="ngx-mat-timepicker-meridian">\r\n          <button mat-button (click)="toggleMeridian()" mat-stroked-button [color]="color" [disabled]="disabled">\r\n            {{meridian}}\r\n          </button>\r\n        </td>\r\n      </tr>\r\n\r\n      <tr *ngIf="showSpinners">\r\n        <td>\r\n          <button type="button" mat-icon-button aria-label="expand_more icon" (click)="change(\'hour\', false)"\r\n            [disabled]="disabled">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button> </td>\r\n        <td></td>\r\n        <td>\r\n          <button type="button" mat-icon-button aria-label="expand_more icon" (click)="change(\'minute\', false)"\r\n            [disabled]="disabled || disableMinute">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button> </td>\r\n        <td *ngIf="showSeconds"></td>\r\n        <td *ngIf="showSeconds">\r\n          <button type="button" mat-icon-button aria-label="expand_more icon" (click)="change(\'second\', false)"\r\n            [disabled]="disabled || disableMinute">\r\n            <mat-icon>expand_more</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td *ngIf="enableMeridian" class="ngx-mat-timepicker-spacer"></td>\r\n        <td *ngIf="enableMeridian"></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</form>', styles: ["/* projects/datetime-picker-v2/src/lib/timepicker.component.scss */\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td {\n  text-align: center;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer {\n  font-weight: bold;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mdc-button {\n  min-width: 64px;\n  line-height: 36px;\n  border-radius: 4px;\n  min-width: 0;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  flex-shrink: 0;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button {\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  padding: 0;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button .mat-icon {\n  font-size: 24px;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field {\n  width: 24px;\n  max-width: 24px;\n  text-align: center;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field.mat-focused .mdc-text-field--filled .mat-mdc-form-field-focus-overlay,\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field:hover .mdc-text-field--filled .mat-mdc-form-field-focus-overlay {\n  background-color: transparent;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled {\n  background-color: transparent !important;\n  padding: 0 !important;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix {\n  padding: 4px 0;\n  min-height: 1px !important;\n}\n.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix input {\n  text-align: center;\n  font-size: 14px;\n}\n/*# sourceMappingURL=timepicker.component.css.map */\n"] }]
  }], () => [{ type: ChangeDetectorRef }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }], { disabled: [{
    type: Input
  }], showSpinners: [{
    type: Input
  }], stepHour: [{
    type: Input
  }], stepMinute: [{
    type: Input
  }], stepSecond: [{
    type: Input
  }], showSeconds: [{
    type: Input
  }], disableMinute: [{
    type: Input
  }], enableMeridian: [{
    type: Input
  }], defaultTime: [{
    type: Input
  }], color: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatTimepickerComponent, { className: "NgxMatTimepickerComponent", filePath: "projects/datetime-picker-v2/src/lib/timepicker.component.ts", lineNumber: 73 });
})();

// projects/datetime-picker-v2/src/lib/date-selection-model.ts
var NgxDateRange = class {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};
var _NgxMatDateSelectionModel = class _NgxMatDateSelectionModel {
  constructor(selection, _adapter) {
    this.selection = selection;
    this._adapter = _adapter;
    this._selectionChanged = new Subject();
    this.selectionChanged = this._selectionChanged;
    this.selection = selection;
  }
  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */
  updateSelection(value, source) {
    const oldValue = this.selection;
    this.selection = value;
    this._selectionChanged.next({ selection: value, source, oldValue });
  }
  ngOnDestroy() {
    this._selectionChanged.complete();
  }
  _isValidDateInstance(date) {
    return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
  }
};
_NgxMatDateSelectionModel.\u0275fac = function NgxMatDateSelectionModel_Factory(__ngFactoryType__) {
  \u0275\u0275invalidFactory();
};
_NgxMatDateSelectionModel.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NgxMatDateSelectionModel, factory: _NgxMatDateSelectionModel.\u0275fac });
var NgxMatDateSelectionModel = _NgxMatDateSelectionModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDateSelectionModel, [{
    type: Injectable
  }], () => [{ type: void 0 }, { type: NgxMatDateAdapter }], null);
})();
var _NgxMatSingleDateSelectionModel = class _NgxMatSingleDateSelectionModel extends NgxMatDateSelectionModel {
  constructor(adapter) {
    super(null, adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a single date selection, the added date
   * simply overwrites the previous selection
   */
  add(date) {
    super.updateSelection(date, this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    return this.selection != null && this._isValidDateInstance(this.selection);
  }
  /**
   * Checks whether the current selection is complete. In the case of a single date selection, this
   * is true if the current selection is not null.
   */
  isComplete() {
    return this.selection != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _NgxMatSingleDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
};
_NgxMatSingleDateSelectionModel.\u0275fac = function NgxMatSingleDateSelectionModel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatSingleDateSelectionModel)(\u0275\u0275inject(NgxMatDateAdapter));
};
_NgxMatSingleDateSelectionModel.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NgxMatSingleDateSelectionModel, factory: _NgxMatSingleDateSelectionModel.\u0275fac });
var NgxMatSingleDateSelectionModel = _NgxMatSingleDateSelectionModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatSingleDateSelectionModel, [{
    type: Injectable
  }], () => [{ type: NgxMatDateAdapter }], null);
})();
var _NgxMatRangeDateSelectionModel = class _NgxMatRangeDateSelectionModel extends NgxMatDateSelectionModel {
  constructor(adapter) {
    super(new NgxDateRange(null, null), adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a date range selection, the added date
   * fills in the next `null` value in the range. If both the start and the end already have a date,
   * the selection is reset so that the given date is the new `start` and the `end` is null.
   */
  add(date) {
    let { start, end } = this.selection;
    if (start == null) {
      start = date;
    } else if (end == null) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    super.updateSelection(new NgxDateRange(start, end), this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    const { start, end } = this.selection;
    if (start == null && end == null) {
      return true;
    }
    if (start != null && end != null) {
      return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
    }
    return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
  }
  /**
   * Checks whether the current selection is complete. In the case of a date range selection, this
   * is true if the current selection has a non-null `start` and `end`.
   */
  isComplete() {
    return this.selection.start != null && this.selection.end != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _NgxMatRangeDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
};
_NgxMatRangeDateSelectionModel.\u0275fac = function NgxMatRangeDateSelectionModel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatRangeDateSelectionModel)(\u0275\u0275inject(NgxMatDateAdapter));
};
_NgxMatRangeDateSelectionModel.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NgxMatRangeDateSelectionModel, factory: _NgxMatRangeDateSelectionModel.\u0275fac });
var NgxMatRangeDateSelectionModel = _NgxMatRangeDateSelectionModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatRangeDateSelectionModel, [{
    type: Injectable
  }], () => [{ type: NgxMatDateAdapter }], null);
})();
function NGX_MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new NgxMatSingleDateSelectionModel(adapter);
}
var NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: NgxMatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), NgxMatDateSelectionModel], NgxMatDateAdapter],
  useFactory: NGX_MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
function NGX_MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new NgxMatRangeDateSelectionModel(adapter);
}
var NGX_MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: NgxMatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), NgxMatDateSelectionModel], NgxMatDateAdapter],
  useFactory: NGX_MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};

// projects/datetime-picker-v2/src/lib/datepicker-errors.ts
function createMissingDateImplError2(provider) {
  return Error("NgxMatDatetimePicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: NgxMatNativeDateModule, NgxMatMomentDateModule, or provide a custom implementation.");
}

// projects/datetime-picker-v2/src/lib/calendar-body.ts
var _c02 = ["ngx-mat-calendar-body", ""];
function NgxMatCalendarBody_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 3)(1, "td", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0.numCols);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function NgxMatCalendarBody_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0._firstRowOffset);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0._firstRowOffset >= ctx_r0.labelMinRequiredCells ? ctx_r0.label : "", " ");
  }
}
function NgxMatCalendarBody_tr_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 8)(1, "button", 9);
    \u0275\u0275listener("click", function NgxMatCalendarBody_tr_1_td_2_Template_button_click_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._cellClicked(item_r3, $event));
    })("focus", function NgxMatCalendarBody_tr_1_td_2_Template_button_focus_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._emitActiveDateChange(item_r3, $event));
    });
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const colIndex_r4 = ctx.index;
    const rowIndex_r5 = \u0275\u0275nextContext().index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r0._cellWidth)("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275classProp("mat-calendar-body-active", ctx_r0._isSelected(item_r3.compareValue));
    \u0275\u0275attribute("data-mat-row", rowIndex_r5)("focusable", ctx_r0._isActiveCell(rowIndex_r5, colIndex_r4) ? "true" : "false")("data-mat-col", colIndex_r4);
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-disabled", !item_r3.enabled)("mat-calendar-body-active", ctx_r0._isActiveCell(rowIndex_r5, colIndex_r4))("mat-calendar-body-range-start", ctx_r0._isRangeStart(item_r3.compareValue))("mat-calendar-body-range-end", ctx_r0._isRangeEnd(item_r3.compareValue))("mat-calendar-body-in-range", ctx_r0._isInRange(item_r3.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r0._isComparisonBridgeStart(item_r3.compareValue, rowIndex_r5, colIndex_r4))("mat-calendar-body-comparison-bridge-end", ctx_r0._isComparisonBridgeEnd(item_r3.compareValue, rowIndex_r5, colIndex_r4))("mat-calendar-body-comparison-start", ctx_r0._isComparisonStart(item_r3.compareValue))("mat-calendar-body-comparison-end", ctx_r0._isComparisonEnd(item_r3.compareValue))("mat-calendar-body-in-comparison-range", ctx_r0._isInComparisonRange(item_r3.compareValue))("mat-calendar-body-preview-start", ctx_r0._isPreviewStart(item_r3.compareValue))("mat-calendar-body-preview-end", ctx_r0._isPreviewEnd(item_r3.compareValue))("mat-calendar-body-in-preview", ctx_r0._isInPreview(item_r3.compareValue));
    \u0275\u0275property("ngClass", item_r3.cssClasses)("tabindex", ctx_r0._isActiveCell(rowIndex_r5, colIndex_r4) ? 0 : -1);
    \u0275\u0275attribute("aria-label", item_r3.ariaLabel)("aria-disabled", !item_r3.enabled || null)("aria-pressed", ctx_r0._isSelected(item_r3.compareValue))("aria-current", ctx_r0.todayValue === item_r3.compareValue ? "date" : null)("aria-describedby", ctx_r0._getDescribedby(item_r3.compareValue));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-selected", ctx_r0._isSelected(item_r3.compareValue))("mat-calendar-body-comparison-identical", ctx_r0._isComparisonIdentical(item_r3.compareValue))("mat-calendar-body-today", ctx_r0.todayValue === item_r3.compareValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.displayValue, " ");
  }
}
function NgxMatCalendarBody_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 5);
    \u0275\u0275template(1, NgxMatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 6)(2, NgxMatCalendarBody_tr_1_td_2_Template, 5, 51, "td", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const rowIndex_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rowIndex_r5 === 0 && ctx_r0._firstRowOffset);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r6);
  }
}
var NgxMatCalendarCell = class {
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
  }
};
var calendarBodyId = 1;
var _NgxMatCalendarBody = class _NgxMatCalendarBody {
  ngAfterViewChecked() {
    if (this._focusActiveCellAfterViewChecked) {
      this._focusActiveCell();
      this._focusActiveCellAfterViewChecked = false;
    }
  }
  constructor(_elementRef, _ngZone) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._platform = inject(Platform);
    this._focusActiveCellAfterViewChecked = false;
    this.numCols = 7;
    this.activeCell = 0;
    this.isRange = false;
    this.cellAspectRatio = 1;
    this.previewStart = null;
    this.previewEnd = null;
    this.selectedValueChange = new EventEmitter();
    this.previewChange = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    this.dragStarted = new EventEmitter();
    this.dragEnded = new EventEmitter();
    this._didDragSinceMouseDown = false;
    this._enterHandler = (event) => {
      if (this._skipNextFocus && event.type === "focus") {
        this._skipNextFocus = false;
        return;
      }
      if (event.target && this.isRange) {
        const cell = this._getCellFromElement(event.target);
        if (cell) {
          this._ngZone.run(() => this.previewChange.emit({ value: cell.enabled ? cell : null, event }));
        }
      }
    };
    this._touchmoveHandler = (event) => {
      if (!this.isRange)
        return;
      const target = getActualTouchTarget(event);
      const cell = target ? this._getCellFromElement(target) : null;
      if (target !== event.target) {
        this._didDragSinceMouseDown = true;
      }
      if (getCellElement(event.target)) {
        event.preventDefault();
      }
      this._ngZone.run(() => this.previewChange.emit({ value: (cell == null ? void 0 : cell.enabled) ? cell : null, event }));
    };
    this._leaveHandler = (event) => {
      if (this.previewEnd !== null && this.isRange) {
        if (event.type !== "blur") {
          this._didDragSinceMouseDown = true;
        }
        if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
          this._ngZone.run(() => this.previewChange.emit({ value: null, event }));
        }
      }
    };
    this._mousedownHandler = (event) => {
      if (!this.isRange)
        return;
      this._didDragSinceMouseDown = false;
      const cell = event.target && this._getCellFromElement(event.target);
      if (!cell || !this._isInRange(cell.rawValue)) {
        return;
      }
      this._ngZone.run(() => {
        this.dragStarted.emit({
          value: cell.rawValue,
          event
        });
      });
    };
    this._mouseupHandler = (event) => {
      if (!this.isRange)
        return;
      const cellElement = getCellElement(event.target);
      if (!cellElement) {
        this._ngZone.run(() => {
          this.dragEnded.emit({ value: null, event });
        });
        return;
      }
      if (cellElement.closest(".mat-calendar-body") !== this._elementRef.nativeElement) {
        return;
      }
      this._ngZone.run(() => {
        var _a;
        const cell = this._getCellFromElement(cellElement);
        this.dragEnded.emit({ value: (_a = cell == null ? void 0 : cell.rawValue) != null ? _a : null, event });
      });
    };
    this._touchendHandler = (event) => {
      const target = getActualTouchTarget(event);
      if (target) {
        this._mouseupHandler({ target });
      }
    };
    this._id = "mat-calendar-body-".concat(calendarBodyId++);
    this._startDateLabelId = "".concat(this._id, "-start-date");
    this._endDateLabelId = "".concat(this._id, "-end-date");
    _ngZone.runOutsideAngular(() => {
      const element = _elementRef.nativeElement;
      element.addEventListener("mouseenter", this._enterHandler, true);
      element.addEventListener("touchmove", this._touchmoveHandler, true);
      element.addEventListener("focus", this._enterHandler, true);
      element.addEventListener("mouseleave", this._leaveHandler, true);
      element.addEventListener("blur", this._leaveHandler, true);
      element.addEventListener("mousedown", this._mousedownHandler);
      element.addEventListener("touchstart", this._mousedownHandler);
      if (this._platform.isBrowser) {
        window.addEventListener("mouseup", this._mouseupHandler);
        window.addEventListener("touchend", this._touchendHandler);
      }
    });
  }
  /** Called when a cell is clicked. */
  _cellClicked(cell, event) {
    if (this._didDragSinceMouseDown) {
      return;
    }
    if (cell.enabled) {
      this.selectedValueChange.emit({ value: cell.value, event });
    }
  }
  _emitActiveDateChange(cell, event) {
    if (cell.enabled) {
      this.activeDateChange.emit({ value: cell.value, event });
    }
  }
  /** Returns whether a cell should be marked as selected. */
  _isSelected(value) {
    return this.startValue === value || this.endValue === value;
  }
  ngOnChanges(changes) {
    const columnChanges = changes["numCols"];
    const { rows, numCols } = this;
    if (changes["rows"] || columnChanges) {
      this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    }
    if (changes["cellAspectRatio"] || columnChanges || !this._cellPadding) {
      this._cellPadding = "".concat(50 * this.cellAspectRatio / numCols, "%");
    }
    if (columnChanges || !this._cellWidth) {
      this._cellWidth = "".concat(100 / numCols, "%");
    }
  }
  ngOnDestroy() {
    const element = this._elementRef.nativeElement;
    element.removeEventListener("mouseenter", this._enterHandler, true);
    element.removeEventListener("touchmove", this._touchmoveHandler, true);
    element.removeEventListener("focus", this._enterHandler, true);
    element.removeEventListener("mouseleave", this._leaveHandler, true);
    element.removeEventListener("blur", this._leaveHandler, true);
    element.removeEventListener("mousedown", this._mousedownHandler);
    element.removeEventListener("touchstart", this._mousedownHandler);
    if (this._platform.isBrowser) {
      window.removeEventListener("mouseup", this._mouseupHandler);
      window.removeEventListener("touchend", this._touchendHandler);
    }
  }
  /** Returns whether a cell is active. */
  _isActiveCell(rowIndex, colIndex) {
    let cellNumber = rowIndex * this.numCols + colIndex;
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }
    return cellNumber == this.activeCell;
  }
  _focusActiveCell(movePreview = true) {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => {
        setTimeout(() => {
          const activeCell = this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");
          if (activeCell) {
            if (!movePreview) {
              this._skipNextFocus = true;
            }
            activeCell.focus();
          }
        });
      });
    });
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _scheduleFocusActiveCellAfterViewChecked() {
    this._focusActiveCellAfterViewChecked = true;
  }
  /** Gets whether a value is the start of the main range. */
  _isRangeStart(value) {
    return isStart(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is the end of the main range. */
  _isRangeEnd(value) {
    return isEnd(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is within the currently-selected range. */
  _isInRange(value) {
    return isInRange(value, this.startValue, this.endValue, this.isRange);
  }
  /** Gets whether a value is the start of the comparison range. */
  _isComparisonStart(value) {
    return isStart(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Whether the cell is a start bridge cell between the main and comparison ranges. */
  _isComparisonBridgeStart(value, rowIndex, colIndex) {
    if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
      return false;
    }
    let previousCell = this.rows[rowIndex][colIndex - 1];
    if (!previousCell) {
      const previousRow = this.rows[rowIndex - 1];
      previousCell = previousRow && previousRow[previousRow.length - 1];
    }
    return previousCell && !this._isRangeEnd(previousCell.compareValue);
  }
  /** Whether the cell is an end bridge cell between the main and comparison ranges. */
  _isComparisonBridgeEnd(value, rowIndex, colIndex) {
    if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
      return false;
    }
    let nextCell = this.rows[rowIndex][colIndex + 1];
    if (!nextCell) {
      const nextRow = this.rows[rowIndex + 1];
      nextCell = nextRow && nextRow[0];
    }
    return nextCell && !this._isRangeStart(nextCell.compareValue);
  }
  /** Gets whether a value is the end of the comparison range. */
  _isComparisonEnd(value) {
    return isEnd(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Gets whether a value is within the current comparison range. */
  _isInComparisonRange(value) {
    return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
  }
  _isComparisonIdentical(value) {
    return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
  }
  /** Gets whether a value is the start of the preview range. */
  _isPreviewStart(value) {
    return isStart(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is the end of the preview range. */
  _isPreviewEnd(value) {
    return isEnd(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is inside the preview range. */
  _isInPreview(value) {
    return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
  }
  /** Gets ids of aria descriptions for the start and end of a date range. */
  _getDescribedby(value) {
    if (!this.isRange) {
      return null;
    }
    if (this.startValue === value && this.endValue === value) {
      return "".concat(this._startDateLabelId, " ").concat(this._endDateLabelId);
    } else if (this.startValue === value) {
      return this._startDateLabelId;
    } else if (this.endValue === value) {
      return this._endDateLabelId;
    }
    return null;
  }
  /** Finds the MatCalendarCell that corresponds to a DOM node. */
  _getCellFromElement(element) {
    const cell = getCellElement(element);
    if (cell) {
      const row = cell.getAttribute("data-mat-row");
      const col = cell.getAttribute("data-mat-col");
      if (row && col) {
        return this.rows[parseInt(row)][parseInt(col)];
      }
    }
    return null;
  }
};
_NgxMatCalendarBody.\u0275fac = function NgxMatCalendarBody_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatCalendarBody)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
};
_NgxMatCalendarBody.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatCalendarBody, selectors: [["", "ngx-mat-calendar-body", ""]], hostAttrs: [1, "ngx-mat-calendar-body"], inputs: { label: "label", rows: "rows", todayValue: "todayValue", startValue: "startValue", endValue: "endValue", labelMinRequiredCells: "labelMinRequiredCells", numCols: "numCols", activeCell: "activeCell", isRange: "isRange", cellAspectRatio: "cellAspectRatio", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd", previewStart: "previewStart", previewEnd: "previewEnd", startDateAccessibleName: "startDateAccessibleName", endDateAccessibleName: "endDateAccessibleName" }, outputs: { selectedValueChange: "selectedValueChange", previewChange: "previewChange", activeDateChange: "activeDateChange", dragStarted: "dragStarted", dragEnded: "dragEnded" }, exportAs: ["matCalendarBody"], standalone: false, features: [\u0275\u0275NgOnChangesFeature], attrs: _c02, decls: 6, vars: 6, consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], [1, "mat-calendar-body-hidden-label", 3, "id"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell-container", 3, "width", "paddingTop", "mat-calendar-body-active", "paddingBottom", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "click", "focus", "ngClass", "tabindex"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]], template: function NgxMatCalendarBody_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgxMatCalendarBody_tr_0_Template, 3, 6, "tr", 0)(1, NgxMatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
    \u0275\u0275elementStart(2, "label", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.rows);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx._startDateLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.startDateAccessibleName, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx._endDateLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.endDateAccessibleName, "\n");
  }
}, dependencies: [NgClass, NgForOf, NgIf], styles: ['/* projects/datetime-picker-v2/src/lib/calendar-body.scss */\n.mat-calendar-body {\n  min-width: 224px;\n}\n.mat-calendar-body-label {\n  height: 0;\n  line-height: 0;\n  text-align: left;\n  padding-left: 4.7142857143%;\n  padding-right: 4.7142857143%;\n}\n.mat-calendar-body-hidden-label {\n  display: none;\n}\n.mat-calendar-body-cell-container {\n  position: relative;\n  height: 0;\n  line-height: 0;\n}\n.mat-calendar-body-cell {\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: none;\n  text-align: center;\n  outline: none;\n  font-family: inherit;\n  margin: 0;\n}\n.mat-calendar-body-cell::-moz-focus-inner {\n  border: 0;\n}\n.mat-calendar-body-cell::before,\n.mat-calendar-body-cell::after,\n.mat-calendar-body-cell-preview {\n  content: "";\n  position: absolute;\n  top: 5%;\n  left: 0;\n  z-index: 0;\n  box-sizing: border-box;\n  display: block;\n  height: 90%;\n  width: 100%;\n}\n.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,\n.mat-calendar-body-range-start::after,\n.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,\n.mat-calendar-body-comparison-start::after,\n.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {\n  left: 5%;\n  width: 95%;\n  border-top-left-radius: 999px;\n  border-bottom-left-radius: 999px;\n}\n[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,\n[dir=rtl] .mat-calendar-body-range-start::after,\n[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,\n[dir=rtl] .mat-calendar-body-comparison-start::after,\n[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {\n  left: 0;\n  border-radius: 0;\n  border-top-right-radius: 999px;\n  border-bottom-right-radius: 999px;\n}\n.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,\n.mat-calendar-body-range-end::after,\n.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,\n.mat-calendar-body-comparison-end::after,\n.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {\n  width: 95%;\n  border-top-right-radius: 999px;\n  border-bottom-right-radius: 999px;\n}\n[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,\n[dir=rtl] .mat-calendar-body-range-end::after,\n[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,\n[dir=rtl] .mat-calendar-body-comparison-end::after,\n[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {\n  left: 5%;\n  border-radius: 0;\n  border-top-left-radius: 999px;\n  border-bottom-left-radius: 999px;\n}\n[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,\n[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {\n  width: 95%;\n  border-top-right-radius: 999px;\n  border-bottom-right-radius: 999px;\n}\n.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,\n[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,\n.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,\n[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {\n  width: 90%;\n}\n.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {\n  border-top: dashed 1px;\n  border-bottom: dashed 1px;\n}\n.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {\n  border-left: dashed 1px;\n}\n[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {\n  border-left: 0;\n  border-right: dashed 1px;\n}\n.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {\n  border-right: dashed 1px;\n}\n[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {\n  border-right: 0;\n  border-left: dashed 1px;\n}\n.mat-calendar-body-disabled {\n  cursor: default;\n}\n@media (forced-colors: active) {\n  .mat-calendar-body-disabled {\n    opacity: 0.5;\n  }\n}\n.mat-calendar-body-cell-content {\n  top: 5%;\n  left: 5%;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 90%;\n  height: 90%;\n  line-height: 1;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 999px;\n}\n.mat-calendar-body-cell-content.mat-focus-indicator {\n  position: absolute;\n}\n@media (forced-colors: active) {\n  .mat-calendar-body-cell-content {\n    border: none;\n  }\n}\n@media (forced-colors: active) {\n  .mat-datepicker-popup:not(:empty),\n  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {\n    outline: solid 1px;\n  }\n  .mat-calendar-body-today {\n    outline: dotted 1px;\n  }\n  .mat-calendar-body-cell::before,\n  .mat-calendar-body-cell::after,\n  .mat-calendar-body-selected {\n    background: none;\n  }\n  .mat-calendar-body-in-range::before,\n  .mat-calendar-body-comparison-bridge-start::before,\n  .mat-calendar-body-comparison-bridge-end::before {\n    border-top: solid 1px;\n    border-bottom: solid 1px;\n  }\n  .mat-calendar-body-range-start::before {\n    border-left: solid 1px;\n  }\n  [dir=rtl] .mat-calendar-body-range-start::before {\n    border-left: 0;\n    border-right: solid 1px;\n  }\n  .mat-calendar-body-range-end::before {\n    border-right: solid 1px;\n  }\n  [dir=rtl] .mat-calendar-body-range-end::before {\n    border-right: 0;\n    border-left: solid 1px;\n  }\n  .mat-calendar-body-in-comparison-range::before {\n    border-top: dashed 1px;\n    border-bottom: dashed 1px;\n  }\n  .mat-calendar-body-comparison-start::before {\n    border-left: dashed 1px;\n  }\n  [dir=rtl] .mat-calendar-body-comparison-start::before {\n    border-left: 0;\n    border-right: dashed 1px;\n  }\n  .mat-calendar-body-comparison-end::before {\n    border-right: dashed 1px;\n  }\n  [dir=rtl] .mat-calendar-body-comparison-end::before {\n    border-right: 0;\n    border-left: dashed 1px;\n  }\n}\n[dir=rtl] .mat-calendar-body-label {\n  text-align: right;\n}\n/*# sourceMappingURL=calendar-body.css.map */\n'], encapsulation: 2, changeDetection: 0 });
var NgxMatCalendarBody = _NgxMatCalendarBody;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatCalendarBody, [{
    type: Component,
    args: [{ selector: "[ngx-mat-calendar-body]", host: {
      class: "ngx-mat-calendar-body"
    }, exportAs: "matCalendarBody", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: '<!--\r\n  If there\'s not enough space in the first row, create a separate label row. We mark this row as\r\n  aria-hidden because we don\'t want it to be read out as one of the weeks in the month.\r\n-->\r\n<tr *ngIf="_firstRowOffset < labelMinRequiredCells" aria-hidden="true">\r\n  <td\r\n    class="mat-calendar-body-label"\r\n    [attr.colspan]="numCols"\r\n    [style.paddingTop]="_cellPadding"\r\n    [style.paddingBottom]="_cellPadding"\r\n  >\r\n    {{label}}\r\n  </td>\r\n</tr>\r\n\r\n<!-- Create the first row separately so we can include a special spacer cell. -->\r\n<tr *ngFor="let row of rows; let rowIndex = index" role="row">\r\n  <!--\r\n    This cell is purely decorative, but we can\'t put `aria-hidden` or `role="presentation"` on it,\r\n    because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the\r\n    table cells is maintained by setting the top and bottom padding as a percentage of the width\r\n    (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\r\n  -->\r\n  <td\r\n    *ngIf="rowIndex === 0 && _firstRowOffset"\r\n    class="mat-calendar-body-label"\r\n    [attr.colspan]="_firstRowOffset"\r\n    [style.paddingTop]="_cellPadding"\r\n    [style.paddingBottom]="_cellPadding"\r\n  >\r\n    {{_firstRowOffset >= labelMinRequiredCells ? label : \'\'}}\r\n  </td>\r\n  <!--\r\n    Each gridcell in the calendar contains a button, which signals to assistive technology that the\r\n    cell is interactable, as well as the selection state via `aria-pressed`. See #23476 for\r\n    background.\r\n  -->\r\n  <td\r\n    *ngFor="let item of row; let colIndex = index"\r\n    role="gridcell"\r\n    class="mat-calendar-body-cell-container"\r\n    [style.width]="_cellWidth"\r\n    [style.paddingTop]="_cellPadding"\r\n    [class.mat-calendar-body-active]="_isSelected(item.compareValue)"\r\n    [style.paddingBottom]="_cellPadding"\r\n    [attr.data-mat-row]="rowIndex"\r\n    [attr.focusable]="_isActiveCell(rowIndex, colIndex) ? \'true\' : \'false\'"\r\n    [attr.data-mat-col]="colIndex"\r\n  >\r\n    <button\r\n      type="button"\r\n      class="mat-calendar-body-cell"\r\n      [ngClass]="item.cssClasses"\r\n      [tabindex]="_isActiveCell(rowIndex, colIndex) ? 0 : -1"\r\n      [class.mat-calendar-body-disabled]="!item.enabled"\r\n      [class.mat-calendar-body-active]="_isActiveCell(rowIndex, colIndex)"\r\n      [class.mat-calendar-body-range-start]="_isRangeStart(item.compareValue)"\r\n      [class.mat-calendar-body-range-end]="_isRangeEnd(item.compareValue)"\r\n      [class.mat-calendar-body-in-range]="_isInRange(item.compareValue)"\r\n      [class.mat-calendar-body-comparison-bridge-start]="_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)"\r\n      [class.mat-calendar-body-comparison-bridge-end]="_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)"\r\n      [class.mat-calendar-body-comparison-start]="_isComparisonStart(item.compareValue)"\r\n      [class.mat-calendar-body-comparison-end]="_isComparisonEnd(item.compareValue)"\r\n      [class.mat-calendar-body-in-comparison-range]="_isInComparisonRange(item.compareValue)"\r\n      [class.mat-calendar-body-preview-start]="_isPreviewStart(item.compareValue)"\r\n      [class.mat-calendar-body-preview-end]="_isPreviewEnd(item.compareValue)"\r\n      [class.mat-calendar-body-in-preview]="_isInPreview(item.compareValue)"\r\n      [attr.aria-label]="item.ariaLabel"\r\n      [attr.aria-disabled]="!item.enabled || null"\r\n      [attr.aria-pressed]="_isSelected(item.compareValue)"\r\n      [attr.aria-current]="todayValue === item.compareValue ? \'date\' : null"\r\n      [attr.aria-describedby]="_getDescribedby(item.compareValue)"\r\n      (click)="_cellClicked(item, $event)"\r\n      (focus)="_emitActiveDateChange(item, $event)"\r\n    >\r\n      <span\r\n        class="mat-calendar-body-cell-content mat-focus-indicator"\r\n        [class.mat-calendar-body-selected]="_isSelected(item.compareValue)"\r\n        [class.mat-calendar-body-comparison-identical]="_isComparisonIdentical(item.compareValue)"\r\n        [class.mat-calendar-body-today]="todayValue === item.compareValue"\r\n      >\r\n        {{item.displayValue}}\r\n      </span>\r\n      <span class="mat-calendar-body-cell-preview" aria-hidden="true"></span>\r\n    </button>\r\n  </td>\r\n</tr>\r\n\r\n<label [id]="_startDateLabelId" class="mat-calendar-body-hidden-label">\r\n  {{startDateAccessibleName}}\r\n</label>\r\n<label [id]="_endDateLabelId" class="mat-calendar-body-hidden-label">\r\n  {{endDateAccessibleName}}\r\n</label>\r\n', styles: ['/* projects/datetime-picker-v2/src/lib/calendar-body.scss */\n.mat-calendar-body {\n  min-width: 224px;\n}\n.mat-calendar-body-label {\n  height: 0;\n  line-height: 0;\n  text-align: left;\n  padding-left: 4.7142857143%;\n  padding-right: 4.7142857143%;\n}\n.mat-calendar-body-hidden-label {\n  display: none;\n}\n.mat-calendar-body-cell-container {\n  position: relative;\n  height: 0;\n  line-height: 0;\n}\n.mat-calendar-body-cell {\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: none;\n  text-align: center;\n  outline: none;\n  font-family: inherit;\n  margin: 0;\n}\n.mat-calendar-body-cell::-moz-focus-inner {\n  border: 0;\n}\n.mat-calendar-body-cell::before,\n.mat-calendar-body-cell::after,\n.mat-calendar-body-cell-preview {\n  content: "";\n  position: absolute;\n  top: 5%;\n  left: 0;\n  z-index: 0;\n  box-sizing: border-box;\n  display: block;\n  height: 90%;\n  width: 100%;\n}\n.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,\n.mat-calendar-body-range-start::after,\n.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,\n.mat-calendar-body-comparison-start::after,\n.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {\n  left: 5%;\n  width: 95%;\n  border-top-left-radius: 999px;\n  border-bottom-left-radius: 999px;\n}\n[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,\n[dir=rtl] .mat-calendar-body-range-start::after,\n[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,\n[dir=rtl] .mat-calendar-body-comparison-start::after,\n[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {\n  left: 0;\n  border-radius: 0;\n  border-top-right-radius: 999px;\n  border-bottom-right-radius: 999px;\n}\n.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,\n.mat-calendar-body-range-end::after,\n.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,\n.mat-calendar-body-comparison-end::after,\n.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {\n  width: 95%;\n  border-top-right-radius: 999px;\n  border-bottom-right-radius: 999px;\n}\n[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,\n[dir=rtl] .mat-calendar-body-range-end::after,\n[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,\n[dir=rtl] .mat-calendar-body-comparison-end::after,\n[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {\n  left: 5%;\n  border-radius: 0;\n  border-top-left-radius: 999px;\n  border-bottom-left-radius: 999px;\n}\n[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,\n[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {\n  width: 95%;\n  border-top-right-radius: 999px;\n  border-bottom-right-radius: 999px;\n}\n.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,\n[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,\n.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,\n[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {\n  width: 90%;\n}\n.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {\n  border-top: dashed 1px;\n  border-bottom: dashed 1px;\n}\n.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {\n  border-left: dashed 1px;\n}\n[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {\n  border-left: 0;\n  border-right: dashed 1px;\n}\n.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {\n  border-right: dashed 1px;\n}\n[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {\n  border-right: 0;\n  border-left: dashed 1px;\n}\n.mat-calendar-body-disabled {\n  cursor: default;\n}\n@media (forced-colors: active) {\n  .mat-calendar-body-disabled {\n    opacity: 0.5;\n  }\n}\n.mat-calendar-body-cell-content {\n  top: 5%;\n  left: 5%;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 90%;\n  height: 90%;\n  line-height: 1;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 999px;\n}\n.mat-calendar-body-cell-content.mat-focus-indicator {\n  position: absolute;\n}\n@media (forced-colors: active) {\n  .mat-calendar-body-cell-content {\n    border: none;\n  }\n}\n@media (forced-colors: active) {\n  .mat-datepicker-popup:not(:empty),\n  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {\n    outline: solid 1px;\n  }\n  .mat-calendar-body-today {\n    outline: dotted 1px;\n  }\n  .mat-calendar-body-cell::before,\n  .mat-calendar-body-cell::after,\n  .mat-calendar-body-selected {\n    background: none;\n  }\n  .mat-calendar-body-in-range::before,\n  .mat-calendar-body-comparison-bridge-start::before,\n  .mat-calendar-body-comparison-bridge-end::before {\n    border-top: solid 1px;\n    border-bottom: solid 1px;\n  }\n  .mat-calendar-body-range-start::before {\n    border-left: solid 1px;\n  }\n  [dir=rtl] .mat-calendar-body-range-start::before {\n    border-left: 0;\n    border-right: solid 1px;\n  }\n  .mat-calendar-body-range-end::before {\n    border-right: solid 1px;\n  }\n  [dir=rtl] .mat-calendar-body-range-end::before {\n    border-right: 0;\n    border-left: solid 1px;\n  }\n  .mat-calendar-body-in-comparison-range::before {\n    border-top: dashed 1px;\n    border-bottom: dashed 1px;\n  }\n  .mat-calendar-body-comparison-start::before {\n    border-left: dashed 1px;\n  }\n  [dir=rtl] .mat-calendar-body-comparison-start::before {\n    border-left: 0;\n    border-right: dashed 1px;\n  }\n  .mat-calendar-body-comparison-end::before {\n    border-right: dashed 1px;\n  }\n  [dir=rtl] .mat-calendar-body-comparison-end::before {\n    border-right: 0;\n    border-left: dashed 1px;\n  }\n}\n[dir=rtl] .mat-calendar-body-label {\n  text-align: right;\n}\n/*# sourceMappingURL=calendar-body.css.map */\n'] }]
  }], () => [{ type: ElementRef }, { type: NgZone }], { label: [{
    type: Input
  }], rows: [{
    type: Input
  }], todayValue: [{
    type: Input
  }], startValue: [{
    type: Input
  }], endValue: [{
    type: Input
  }], labelMinRequiredCells: [{
    type: Input
  }], numCols: [{
    type: Input
  }], activeCell: [{
    type: Input
  }], isRange: [{
    type: Input
  }], cellAspectRatio: [{
    type: Input
  }], comparisonStart: [{
    type: Input
  }], comparisonEnd: [{
    type: Input
  }], previewStart: [{
    type: Input
  }], previewEnd: [{
    type: Input
  }], startDateAccessibleName: [{
    type: Input
  }], endDateAccessibleName: [{
    type: Input
  }], selectedValueChange: [{
    type: Output
  }], previewChange: [{
    type: Output
  }], activeDateChange: [{
    type: Output
  }], dragStarted: [{
    type: Output
  }], dragEnded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatCalendarBody, { className: "NgxMatCalendarBody", filePath: "projects/datetime-picker-v2/src/lib/calendar-body.ts", lineNumber: 68 });
})();
function isTableCell(node) {
  return (node == null ? void 0 : node.nodeName) === "TD";
}
function getCellElement(element) {
  var _a;
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell((_a = element.parentNode) == null ? void 0 : _a.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return (cell == null ? void 0 : cell.getAttribute("data-mat-row")) != null ? cell : null;
}
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}

// projects/datetime-picker-v2/src/lib/date-range-selection-strategy.ts
var NGX_MAT_DATE_RANGE_SELECTION_STRATEGY = new InjectionToken("NGX_MAT_DATE_RANGE_SELECTION_STRATEGY");
var _DefaultNgxMatCalendarRangeStrategy = class _DefaultNgxMatCalendarRangeStrategy {
  constructor(_dateAdapter) {
    this._dateAdapter = _dateAdapter;
  }
  selectionFinished(date, currentRange) {
    let { start, end } = currentRange;
    if (start == null) {
      start = date;
    } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    return new NgxDateRange(start, end);
  }
  createPreview(activeDate, currentRange) {
    let start = null;
    let end = null;
    if (currentRange.start && !currentRange.end && activeDate) {
      start = currentRange.start;
      end = activeDate;
    }
    return new NgxDateRange(start, end);
  }
  createDrag(dragOrigin, originalRange, newDate) {
    let start = originalRange.start;
    let end = originalRange.end;
    if (!start || !end) {
      return null;
    }
    const adapter = this._dateAdapter;
    const isRange = adapter.compareDate(start, end) !== 0;
    const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
    const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
    const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
    if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
      start = newDate;
      if (adapter.compareDate(newDate, end) > 0) {
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
    } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
      end = newDate;
      if (adapter.compareDate(newDate, start) < 0) {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
      }
    } else {
      start = adapter.addCalendarYears(start, diffYears);
      start = adapter.addCalendarMonths(start, diffMonths);
      start = adapter.addCalendarDays(start, diffDays);
      end = adapter.addCalendarYears(end, diffYears);
      end = adapter.addCalendarMonths(end, diffMonths);
      end = adapter.addCalendarDays(end, diffDays);
    }
    return new NgxDateRange(start, end);
  }
};
_DefaultNgxMatCalendarRangeStrategy.\u0275fac = function DefaultNgxMatCalendarRangeStrategy_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultNgxMatCalendarRangeStrategy)(\u0275\u0275inject(NgxMatDateAdapter));
};
_DefaultNgxMatCalendarRangeStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DefaultNgxMatCalendarRangeStrategy, factory: _DefaultNgxMatCalendarRangeStrategy.\u0275fac });
var DefaultNgxMatCalendarRangeStrategy = _DefaultNgxMatCalendarRangeStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultNgxMatCalendarRangeStrategy, [{
    type: Injectable
  }], () => [{ type: NgxMatDateAdapter }], null);
})();
function NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultNgxMatCalendarRangeStrategy(adapter);
}
var NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[new Optional(), new SkipSelf(), NGX_MAT_DATE_RANGE_SELECTION_STRATEGY], NgxMatDateAdapter],
  useFactory: NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};

// projects/datetime-picker-v2/src/lib/month-view.ts
function NgxMatMonthView_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 5)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.long);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.narrow);
  }
}
var DAYS_PER_WEEK = 7;
var _NgxMatMonthView = class _NgxMatMonthView {
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof NgxDateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setRanges(this._selected);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rangeStrategy = _rangeStrategy;
    this._rerenderSubscription = Subscription.EMPTY;
    this.activeDrag = null;
    this.selectedChange = new EventEmitter();
    this._userSelection = new EventEmitter();
    this.dragStarted = new EventEmitter();
    this.dragEnded = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    if (!this._dateAdapter) {
      throw createMissingDateImplError2("NgxMatDateAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError2("NGX_MAT_DATE_FORMATS");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnChanges(changes) {
    const comparisonChange = changes["comparisonStart"] || changes["comparisonEnd"];
    if (comparisonChange && !comparisonChange.firstChange) {
      this._setRanges(this.selected);
    }
    if (changes["activeDrag"] && !this.activeDrag) {
      this._clearPreview();
    }
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new date is selected. */
  _dateSelected(event) {
    const date = event.value;
    const selectedDate = this._getDateFromDayOfMonth(date);
    let rangeStartDate;
    let rangeEndDate;
    if (this._selected instanceof NgxDateRange) {
      rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
      rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
    } else {
      rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
    }
    if (rangeStartDate !== date || rangeEndDate !== date) {
      this.selectedChange.emit(selectedDate);
    }
    this._userSelection.emit({ value: selectedDate, event: event.event });
    this._clearPreview();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Takes the index of a calendar body cell wrapped in in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromDayOfMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this._activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
        break;
      case PAGE_DOWN:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        if (this._canSelect(this._activeDate)) {
          event.preventDefault();
        }
        return;
      case ESCAPE:
        if (this._previewEnd != null && !hasModifierKey(event)) {
          this._clearPreview();
          if (this.activeDrag) {
            this.dragEnded.emit({ value: null, event });
          } else {
            this.selectedChange.emit(null);
            this._userSelection.emit({ value: null, event });
          }
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
        this._dateSelected({ value: this._dateAdapter.getDate(this._activeDate), event });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this month view. */
  _init() {
    this._setRanges(this.selected);
    this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
    this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
    let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
    this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    this._initWeekdays();
    this._createWeekCells();
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell(movePreview) {
    this._matCalendarBody._focusActiveCell(movePreview);
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /** Called when the user has activated a new cell and the preview needs to be updated. */
  _previewChanged({ event, value: cell }) {
    var _a, _b;
    if (this._rangeStrategy) {
      const value = cell ? cell.rawValue : null;
      const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
      this._previewStart = this._getCellCompareValue(previewRange.start);
      this._previewEnd = this._getCellCompareValue(previewRange.end);
      if (this.activeDrag && value) {
        const dragRange = (_b = (_a = this._rangeStrategy).createDrag) == null ? void 0 : _b.call(_a, this.activeDrag.value, this.selected, value, event);
        if (dragRange) {
          this._previewStart = this._getCellCompareValue(dragRange.start);
          this._previewEnd = this._getCellCompareValue(dragRange.end);
        }
      }
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Called when the user has ended a drag. If the drag/drop was successful,
   * computes and emits the new range selection.
   */
  _dragEnded(event) {
    var _a, _b;
    if (!this.activeDrag)
      return;
    if (event.value) {
      const dragDropResult = (_b = (_a = this._rangeStrategy) == null ? void 0 : _a.createDrag) == null ? void 0 : _b.call(_a, this.activeDrag.value, this.selected, event.value, event.event);
      this.dragEnded.emit({ value: dragDropResult != null ? dragDropResult : null, event: event.event });
    } else {
      this.dragEnded.emit({ value: null, event: event.event });
    }
  }
  /**
   * Takes a day of the month and returns a new date in the same month and year as the currently
   *  active date. The returned date will have the same day of the month as the argument date.
   */
  _getDateFromDayOfMonth(dayOfMonth) {
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
  }
  /** Initializes the weekdays. */
  _initWeekdays() {
    const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this._dateAdapter.getDayOfWeekNames("narrow");
    const longWeekdays = this._dateAdapter.getDayOfWeekNames("long");
    let weekdays = longWeekdays.map((long, i) => {
      return { long, narrow: narrowWeekdays[i] };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  }
  /** Creates MatCalendarCells for the dates in this month. */
  _createWeekCells() {
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._dateAdapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell == DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
      const enabled = this._shouldEnableDate(date);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      const cellClasses = this.dateClass ? this.dateClass(date, "month") : void 0;
      this._weeks[this._weeks.length - 1].push(new NgxMatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
    }
  }
  /** Date filter for the month */
  _shouldEnableDate(date) {
    return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
  }
  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  _getDateInCurrentMonth(date) {
    return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
  }
  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  _hasSameMonthAndYear(d1, d2) {
    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
  }
  /** Gets the value that will be used to one cell to another. */
  _getCellCompareValue(date) {
    if (date) {
      const year = this._dateAdapter.getYear(date);
      const month = this._dateAdapter.getMonth(date);
      const day = this._dateAdapter.getDate(date);
      return new Date(year, month, day).getTime();
    }
    return null;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the current range based on a model value. */
  _setRanges(selectedValue) {
    if (selectedValue instanceof NgxDateRange) {
      this._rangeStart = this._getCellCompareValue(selectedValue.start);
      this._rangeEnd = this._getCellCompareValue(selectedValue.end);
      this._isRange = true;
    } else {
      this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
      this._isRange = false;
    }
    this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
    this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
  }
  /** Gets whether a date can be selected in the month view. */
  _canSelect(date) {
    return !this.dateFilter || this.dateFilter(date);
  }
  /** Clears out preview state. */
  _clearPreview() {
    this._previewStart = this._previewEnd = null;
  }
};
_NgxMatMonthView.\u0275fac = function NgxMatMonthView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatMonthView)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
};
_NgxMatMonthView.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatMonthView, selectors: [["ngx-mat-month-view"]], viewQuery: function NgxMatMonthView_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(NgxMatCalendarBody, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
  }
}, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd", startDateAccessibleName: "startDateAccessibleName", endDateAccessibleName: "endDateAccessibleName", activeDrag: "activeDrag" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection", dragStarted: "dragStarted", dragEnded: "dragEnded", activeDateChange: "activeDateChange" }, exportAs: ["ngxMatMonthView"], standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 7, vars: 15, consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", "colspan", "7", 1, "mat-calendar-table-header-divider"], ["ngx-mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName"], ["scope", "col"], [1, "cdk-visually-hidden"], ["aria-hidden", "true"]], template: function NgxMatMonthView_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
    \u0275\u0275template(3, NgxMatMonthView_th_3_Template, 5, 2, "th", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tr");
    \u0275\u0275element(5, "th", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "tbody", 4);
    \u0275\u0275listener("selectedValueChange", function NgxMatMonthView_Template_tbody_selectedValueChange_6_listener($event) {
      return ctx._dateSelected($event);
    })("activeDateChange", function NgxMatMonthView_Template_tbody_activeDateChange_6_listener($event) {
      return ctx._updateActiveDate($event);
    })("previewChange", function NgxMatMonthView_Template_tbody_previewChange_6_listener($event) {
      return ctx._previewChanged($event);
    })("dragStarted", function NgxMatMonthView_Template_tbody_dragStarted_6_listener($event) {
      return ctx.dragStarted.emit($event);
    })("dragEnded", function NgxMatMonthView_Template_tbody_dragEnded_6_listener($event) {
      return ctx._dragEnded($event);
    })("keyup", function NgxMatMonthView_Template_tbody_keyup_6_listener($event) {
      return ctx._handleCalendarBodyKeyup($event);
    })("keydown", function NgxMatMonthView_Template_tbody_keydown_6_listener($event) {
      return ctx._handleCalendarBodyKeydown($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx._weekdays);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
  }
}, dependencies: [NgForOf, NgxMatCalendarBody], encapsulation: 2, changeDetection: 0 });
var NgxMatMonthView = _NgxMatMonthView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatMonthView, [{
    type: Component,
    args: [{ selector: "ngx-mat-month-view", exportAs: "ngxMatMonthView", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: '<table class="mat-calendar-table" role="grid">\r\n  <thead class="mat-calendar-table-header">\r\n    <tr>\r\n      <th scope="col" *ngFor="let day of _weekdays">\r\n        <span class="cdk-visually-hidden">{{day.long}}</span>\r\n        <span aria-hidden="true">{{day.narrow}}</span>\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th\r\n        aria-hidden="true"\r\n        class="mat-calendar-table-header-divider"\r\n        colspan="7"\r\n      ></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody\r\n    ngx-mat-calendar-body\r\n    [label]="_monthLabel"\r\n    [rows]="_weeks"\r\n    [todayValue]="_todayDate!"\r\n    [startValue]="_rangeStart!"\r\n    [endValue]="_rangeEnd!"\r\n    [comparisonStart]="_comparisonRangeStart"\r\n    [comparisonEnd]="_comparisonRangeEnd"\r\n    [previewStart]="_previewStart"\r\n    [previewEnd]="_previewEnd"\r\n    [isRange]="_isRange"\r\n    [labelMinRequiredCells]="3"\r\n    [activeCell]="_dateAdapter.getDate(activeDate) - 1"\r\n    [startDateAccessibleName]="startDateAccessibleName"\r\n    [endDateAccessibleName]="endDateAccessibleName"\r\n    (selectedValueChange)="_dateSelected($event)"\r\n    (activeDateChange)="_updateActiveDate($event)"\r\n    (previewChange)="_previewChanged($event)"\r\n    (dragStarted)="dragStarted.emit($event)"\r\n    (dragEnded)="_dragEnded($event)"\r\n    (keyup)="_handleCalendarBodyKeyup($event)"\r\n    (keydown)="_handleCalendarBodyKeydown($event)"\r\n  ></tbody>\r\n</table>\r\n' }]
  }], () => [{ type: ChangeDetectorRef }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_FORMATS]
  }] }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: Directionality, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Inject,
    args: [NGX_MAT_DATE_RANGE_SELECTION_STRATEGY]
  }, {
    type: Optional
  }] }], { activeDate: [{
    type: Input
  }], selected: [{
    type: Input
  }], minDate: [{
    type: Input
  }], maxDate: [{
    type: Input
  }], dateFilter: [{
    type: Input
  }], dateClass: [{
    type: Input
  }], comparisonStart: [{
    type: Input
  }], comparisonEnd: [{
    type: Input
  }], startDateAccessibleName: [{
    type: Input
  }], endDateAccessibleName: [{
    type: Input
  }], activeDrag: [{
    type: Input
  }], selectedChange: [{
    type: Output
  }], _userSelection: [{
    type: Output
  }], dragStarted: [{
    type: Output
  }], dragEnded: [{
    type: Output
  }], activeDateChange: [{
    type: Output
  }], _matCalendarBody: [{
    type: ViewChild,
    args: [NgxMatCalendarBody]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatMonthView, { className: "NgxMatMonthView", filePath: "projects/datetime-picker-v2/src/lib/month-view.ts", lineNumber: 65 });
})();

// projects/datetime-picker-v2/src/lib/multi-year-view.ts
var yearsPerPage = 24;
var yearsPerRow = 4;
var _NgxMatMultiYearView = class _NgxMatMultiYearView {
  /** The date to display in this multi-year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof NgxDateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedYear(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = Subscription.EMPTY;
    this.selectedChange = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    if (!this._dateAdapter) {
      throw createMissingDateImplError2("NgxMatDateAdapter");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Initializes this multi-year view. */
  _init() {
    this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
    const activeYear = this._dateAdapter.getYear(this._activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    this._years = [];
    for (let i = 0, row = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length == yearsPerRow) {
        this._years.push(row.map((year) => this._createCellForYear(year)));
        row = [];
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Handles when a new year is selected. */
  _yearSelected(event) {
    const year = event.value;
    const selectedYear = this._dateAdapter.createDate(year, 0, 1);
    const selectedDate = this._getDateFromYear(year);
    this.yearSelected.emit(selectedYear);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const year = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromYear(year);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCellAfterViewChecked();
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._yearSelected({ value: this._dateAdapter.getYear(this._activeDate), event });
      }
      this._selectionKeyPressed = false;
    }
  }
  _getActiveCell() {
    return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Takes a year and returns a new date on the same day and month as the currently active date
   *  The returned date will have the same year as the argument date.
   */
  _getDateFromYear(year) {
    const activeMonth = this._dateAdapter.getMonth(this.activeDate);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
    const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    return normalizedDate;
  }
  /** Creates an MatCalendarCell for the given year. */
  _createCellForYear(year) {
    const date = this._dateAdapter.createDate(year, 0, 1);
    const yearName = this._dateAdapter.getYearName(date);
    const cellClasses = this.dateClass ? this.dateClass(date, "multi-year") : void 0;
    return new NgxMatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
  }
  /** Whether the given year is enabled. */
  _shouldEnableYear(year) {
    if (year === void 0 || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
    for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-highlighted year based on a model value. */
  _setSelectedYear(value) {
    this._selectedYear = null;
    if (value instanceof NgxDateRange) {
      const displayValue = value.start || value.end;
      if (displayValue) {
        this._selectedYear = this._dateAdapter.getYear(displayValue);
      }
    } else if (value) {
      this._selectedYear = this._dateAdapter.getYear(value);
    }
  }
};
_NgxMatMultiYearView.\u0275fac = function NgxMatMultiYearView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatMultiYearView)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8));
};
_NgxMatMultiYearView.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatMultiYearView, selectors: [["ngx-mat-multi-year-view"]], viewQuery: function NgxMatMultiYearView_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(NgxMatCalendarBody, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
  }
}, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", activeDateChange: "activeDateChange" }, exportAs: ["ngxMatMultiYearView"], standalone: false, decls: 5, vars: 7, consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["ngx-mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell"]], template: function NgxMatMultiYearView_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
    \u0275\u0275element(3, "th", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "tbody", 3);
    \u0275\u0275listener("selectedValueChange", function NgxMatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
      return ctx._yearSelected($event);
    })("activeDateChange", function NgxMatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
      return ctx._updateActiveDate($event);
    })("keyup", function NgxMatMultiYearView_Template_tbody_keyup_4_listener($event) {
      return ctx._handleCalendarBodyKeyup($event);
    })("keydown", function NgxMatMultiYearView_Template_tbody_keydown_4_listener($event) {
      return ctx._handleCalendarBodyKeydown($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
  }
}, dependencies: [NgxMatCalendarBody], encapsulation: 2, changeDetection: 0 });
var NgxMatMultiYearView = _NgxMatMultiYearView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatMultiYearView, [{
    type: Component,
    args: [{ selector: "ngx-mat-multi-year-view", exportAs: "ngxMatMultiYearView", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: '<table class="mat-calendar-table" role="grid">\r\n  <thead aria-hidden="true" class="mat-calendar-table-header">\r\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\r\n  </thead>\r\n  <tbody ngx-mat-calendar-body\r\n         [rows]="_years"\r\n         [todayValue]="_todayYear"\r\n         [startValue]="_selectedYear!"\r\n         [endValue]="_selectedYear!"\r\n         [numCols]="4"\r\n         [cellAspectRatio]="4 / 7"\r\n         [activeCell]="_getActiveCell()"\r\n         (selectedValueChange)="_yearSelected($event)"\r\n         (activeDateChange)="_updateActiveDate($event)"\r\n         (keyup)="_handleCalendarBodyKeyup($event)"\r\n         (keydown)="_handleCalendarBodyKeydown($event)">\r\n  </tbody>\r\n</table>\r\n' }]
  }], () => [{ type: ChangeDetectorRef }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: Directionality, decorators: [{
    type: Optional
  }] }], { activeDate: [{
    type: Input
  }], selected: [{
    type: Input
  }], minDate: [{
    type: Input
  }], maxDate: [{
    type: Input
  }], dateFilter: [{
    type: Input
  }], dateClass: [{
    type: Input
  }], selectedChange: [{
    type: Output
  }], yearSelected: [{
    type: Output
  }], activeDateChange: [{
    type: Output
  }], _matCalendarBody: [{
    type: ViewChild,
    args: [NgxMatCalendarBody]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatMultiYearView, { className: "NgxMatMultiYearView", filePath: "projects/datetime-picker-v2/src/lib/multi-year-view.ts", lineNumber: 55 });
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}

// projects/datetime-picker-v2/src/lib/year-view.ts
var _NgxMatYearView = class _NgxMatYearView {
  /** The date to display in this year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof NgxDateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedMonth(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = Subscription.EMPTY;
    this.selectedChange = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.activeDateChange = new EventEmitter();
    if (!this._dateAdapter) {
      throw createMissingDateImplError2("NgxMatDateAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError2("NGX_MAT_DATE_FORMATS");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new month is selected. */
  _monthSelected(event) {
    const month = event.value;
    const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    this.monthSelected.emit(selectedMonth);
    const selectedDate = this._getDateFromMonth(month);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._monthSelected({ value: this._dateAdapter.getMonth(this._activeDate), event });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this year view. */
  _init() {
    this._setSelectedMonth(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
    let monthNames = this._dateAdapter.getMonthNames("short");
    this._months = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11]
    ].map((row) => row.map((month) => this._createCellForMonth(month, monthNames[month])));
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Schedules the matCalendarBody to focus the active cell after change detection has run */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  _getMonthInCurrentYear(date) {
    return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
  }
  /**
   * Takes a month and returns a new date in the same day and year as the currently active date.
   *  The returned date will have the same month as the argument date.
   */
  _getDateFromMonth(month) {
    const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
  }
  /** Creates an MatCalendarCell for the given month. */
  _createCellForMonth(month, monthName) {
    const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
    const cellClasses = this.dateClass ? this.dateClass(date, "year") : void 0;
    return new NgxMatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
  }
  /** Whether the given month is enabled. */
  _shouldEnableMonth(month) {
    const activeYear = this._dateAdapter.getYear(this.activeDate);
    if (month === void 0 || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
    for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is after this.maxDate, considering
   * just the month and year of this.maxDate
   */
  _isYearAndMonthAfterMaxDate(year, month) {
    if (this.maxDate) {
      const maxYear = this._dateAdapter.getYear(this.maxDate);
      const maxMonth = this._dateAdapter.getMonth(this.maxDate);
      return year > maxYear || year === maxYear && month > maxMonth;
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is before this.minDate, considering
   * just the month and year of this.minDate
   */
  _isYearAndMonthBeforeMinDate(year, month) {
    if (this.minDate) {
      const minYear = this._dateAdapter.getYear(this.minDate);
      const minMonth = this._dateAdapter.getMonth(this.minDate);
      return year < minYear || year === minYear && month < minMonth;
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-selected month based on a model value. */
  _setSelectedMonth(value) {
    if (value instanceof NgxDateRange) {
      this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
    } else {
      this._selectedMonth = this._getMonthInCurrentYear(value);
    }
  }
};
_NgxMatYearView.\u0275fac = function NgxMatYearView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatYearView)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8));
};
_NgxMatYearView.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatYearView, selectors: [["ngx-mat-year-view"]], viewQuery: function NgxMatYearView_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(NgxMatCalendarBody, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
  }
}, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", monthSelected: "monthSelected", activeDateChange: "activeDateChange" }, exportAs: ["ngxMatYearView"], standalone: false, decls: 5, vars: 9, consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["ngx-mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell"]], template: function NgxMatYearView_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
    \u0275\u0275element(3, "th", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "tbody", 3);
    \u0275\u0275listener("selectedValueChange", function NgxMatYearView_Template_tbody_selectedValueChange_4_listener($event) {
      return ctx._monthSelected($event);
    })("activeDateChange", function NgxMatYearView_Template_tbody_activeDateChange_4_listener($event) {
      return ctx._updateActiveDate($event);
    })("keyup", function NgxMatYearView_Template_tbody_keyup_4_listener($event) {
      return ctx._handleCalendarBodyKeyup($event);
    })("keydown", function NgxMatYearView_Template_tbody_keydown_4_listener($event) {
      return ctx._handleCalendarBodyKeydown($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
  }
}, dependencies: [NgxMatCalendarBody], encapsulation: 2, changeDetection: 0 });
var NgxMatYearView = _NgxMatYearView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatYearView, [{
    type: Component,
    args: [{ selector: "ngx-mat-year-view", exportAs: "ngxMatYearView", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: '<table class="mat-calendar-table" role="grid">\r\n  <thead aria-hidden="true" class="mat-calendar-table-header">\r\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\r\n  </thead>\r\n  <tbody ngx-mat-calendar-body\r\n         [label]="_yearLabel"\r\n         [rows]="_months"\r\n         [todayValue]="_todayMonth!"\r\n         [startValue]="_selectedMonth!"\r\n         [endValue]="_selectedMonth!"\r\n         [labelMinRequiredCells]="2"\r\n         [numCols]="4"\r\n         [cellAspectRatio]="4 / 7"\r\n         [activeCell]="_dateAdapter.getMonth(activeDate)"\r\n         (selectedValueChange)="_monthSelected($event)"\r\n         (activeDateChange)="_updateActiveDate($event)"\r\n         (keyup)="_handleCalendarBodyKeyup($event)"\r\n         (keydown)="_handleCalendarBodyKeydown($event)">\r\n  </tbody>\r\n</table>\r\n' }]
  }], () => [{ type: ChangeDetectorRef }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_FORMATS]
  }] }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: Directionality, decorators: [{
    type: Optional
  }] }], { activeDate: [{
    type: Input
  }], selected: [{
    type: Input
  }], minDate: [{
    type: Input
  }], maxDate: [{
    type: Input
  }], dateFilter: [{
    type: Input
  }], dateClass: [{
    type: Input
  }], selectedChange: [{
    type: Output
  }], monthSelected: [{
    type: Output
  }], activeDateChange: [{
    type: Output
  }], _matCalendarBody: [{
    type: ViewChild,
    args: [NgxMatCalendarBody]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatYearView, { className: "NgxMatYearView", filePath: "projects/datetime-picker-v2/src/lib/year-view.ts", lineNumber: 56 });
})();

// projects/datetime-picker-v2/src/lib/datepicker-intl.ts
var _NgxMatDatepickerIntl = class _NgxMatDatepickerIntl {
  constructor() {
    this.changes = new Subject();
    this.calendarLabel = "Calendar";
    this.openCalendarLabel = "Open calendar";
    this.closeCalendarLabel = "Close calendar";
    this.prevMonthLabel = "Previous month";
    this.nextMonthLabel = "Next month";
    this.prevYearLabel = "Previous year";
    this.nextYearLabel = "Next year";
    this.prevMultiYearLabel = "Previous 24 years";
    this.nextMultiYearLabel = "Next 24 years";
    this.switchToMonthViewLabel = "Choose date";
    this.switchToMultiYearViewLabel = "Choose month and year";
    this.startDateLabel = "Start date";
    this.endDateLabel = "End date";
  }
  /** Formats a range of years (used for visuals). */
  formatYearRange(start, end) {
    return "".concat(start, " \u2013 ").concat(end);
  }
  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start, end) {
    return "".concat(start, " to ").concat(end);
  }
};
_NgxMatDatepickerIntl.\u0275fac = function NgxMatDatepickerIntl_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerIntl)();
};
_NgxMatDatepickerIntl.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NgxMatDatepickerIntl, factory: _NgxMatDatepickerIntl.\u0275fac, providedIn: "root" });
var NgxMatDatepickerIntl = _NgxMatDatepickerIntl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerIntl, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// projects/datetime-picker-v2/src/lib/calendar.ts
var _c03 = ["*"];
function NgxMatCalendar_ng_template_0_Template(rf, ctx) {
}
function NgxMatCalendar_ngx_mat_month_view_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-mat-month-view", 5);
    \u0275\u0275twoWayListener("activeDateChange", function NgxMatCalendar_ngx_mat_month_view_2_Template_ngx_mat_month_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("_userSelection", function NgxMatCalendar_ngx_mat_month_view_2_Template_ngx_mat_month_view__userSelection_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dateSelected($event));
    })("dragStarted", function NgxMatCalendar_ngx_mat_month_view_2_Template_ngx_mat_month_view_dragStarted_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragStarted($event));
    })("dragEnded", function NgxMatCalendar_ngx_mat_month_view_2_Template_ngx_mat_month_view_dragEnded_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragEnded($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd)("startDateAccessibleName", ctx_r1.startDateAccessibleName)("endDateAccessibleName", ctx_r1.endDateAccessibleName)("activeDrag", ctx_r1._activeDrag);
  }
}
function NgxMatCalendar_ngx_mat_year_view_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-mat-year-view", 6);
    \u0275\u0275twoWayListener("activeDateChange", function NgxMatCalendar_ngx_mat_year_view_3_Template_ngx_mat_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("monthSelected", function NgxMatCalendar_ngx_mat_year_view_3_Template_ngx_mat_year_view_monthSelected_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._monthSelectedInYearView($event));
    })("selectedChange", function NgxMatCalendar_ngx_mat_year_view_3_Template_ngx_mat_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "month"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function NgxMatCalendar_ngx_mat_multi_year_view_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-mat-multi-year-view", 7);
    \u0275\u0275twoWayListener("activeDateChange", function NgxMatCalendar_ngx_mat_multi_year_view_4_Template_ngx_mat_multi_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("yearSelected", function NgxMatCalendar_ngx_mat_multi_year_view_4_Template_ngx_mat_multi_year_view_yearSelected_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._yearSelectedInMultiYearView($event));
    })("selectedChange", function NgxMatCalendar_ngx_mat_multi_year_view_4_Template_ngx_mat_multi_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "year"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
var calendarHeaderId = 1;
var _NgxMatCalendarHeader = class _NgxMatCalendarHeader {
  constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
    this._intl = _intl;
    this.calendar = calendar;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._id = "mat-calendar-header-".concat(calendarHeaderId++);
    this._periodButtonLabelId = "".concat(this._id, "-period-label");
    this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
  }
  /** The display text for the current calendar view. */
  get periodButtonText() {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
  }
  /** The aria description for the current calendar view. */
  get periodButtonDescription() {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
  }
  /** The `aria-label` for changing the calendar view. */
  get periodButtonLabel() {
    return this.calendar.currentView == "month" ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
  }
  /** The label for the previous button. */
  get prevButtonLabel() {
    return {
      month: this._intl.prevMonthLabel,
      year: this._intl.prevYearLabel,
      "multi-year": this._intl.prevMultiYearLabel
    }[this.calendar.currentView];
  }
  /** The label for the next button. */
  get nextButtonLabel() {
    return {
      month: this._intl.nextMonthLabel,
      year: this._intl.nextYearLabel,
      "multi-year": this._intl.nextMultiYearLabel
    }[this.calendar.currentView];
  }
  /** Handles user clicks on the period label. */
  currentPeriodClicked() {
    this.calendar.currentView = this.calendar.currentView == "month" ? "multi-year" : "month";
  }
  /** Handles user clicks on the previous button. */
  previousClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? -1 : -yearsPerPage);
  }
  /** Handles user clicks on the next button. */
  nextClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? 1 : yearsPerPage);
  }
  /** Whether the previous period button is enabled. */
  previousEnabled() {
    if (!this.calendar.minDate) {
      return true;
    }
    return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
  }
  /** Whether the next period button is enabled. */
  nextEnabled() {
    return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
  }
  /** Whether the two dates represent the same view in the current view mode (month or year). */
  _isSameView(date1, date2) {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
    }
    return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
  }
  /**
   * Format two individual labels for the minimum year and maximum year available in the multi-year
   * calendar view. Returns an array of two strings where the first string is the formatted label
   * for the minimum year, and the second string is the formatted label for the maximum year.
   */
  _formatMinAndMaxYearLabels() {
    const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
    const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
    const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
    const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
    return [minYearLabel, maxYearLabel];
  }
};
_NgxMatCalendarHeader.\u0275fac = function NgxMatCalendarHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatCalendarHeader)(\u0275\u0275directiveInject(NgxMatDatepickerIntl), \u0275\u0275directiveInject(forwardRef(() => NgxMatCalendar)), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_NgxMatCalendarHeader.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatCalendarHeader, selectors: [["ngx-mat-calendar-header"]], standalone: false, ngContentSelectors: _c03, decls: 13, vars: 11, consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "aria-live", "polite", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "click", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "click", "disabled"], [1, "mat-calendar-hidden-label", 3, "id"]], template: function NgxMatCalendarHeader_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function NgxMatCalendarHeader_Template_button_click_2_listener() {
      return ctx.currentPeriodClicked();
    });
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 4);
    \u0275\u0275element(6, "polygon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(7, "div", 6);
    \u0275\u0275projection(8);
    \u0275\u0275elementStart(9, "button", 7);
    \u0275\u0275listener("click", function NgxMatCalendarHeader_Template_button_click_9_listener() {
      return ctx.previousClicked();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function NgxMatCalendarHeader_Template_button_click_10_listener() {
      return ctx.nextClicked();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "label", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.periodButtonText);
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-invert", ctx.calendar.currentView !== "month");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx.previousEnabled());
    \u0275\u0275attribute("aria-label", ctx.prevButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.nextEnabled());
    \u0275\u0275attribute("aria-label", ctx.nextButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx._periodButtonLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.periodButtonDescription);
  }
}, dependencies: [MatButton, MatIconButton], encapsulation: 2, changeDetection: 0 });
var NgxMatCalendarHeader = _NgxMatCalendarHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatCalendarHeader, [{
    type: Component,
    args: [{ selector: "ngx-mat-calendar-header", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: '<div class="mat-calendar-header">\r\n  <div class="mat-calendar-controls">\r\n    <button mat-button type="button" class="mat-calendar-period-button"\r\n            (click)="currentPeriodClicked()" [attr.aria-label]="periodButtonLabel"\r\n            [attr.aria-describedby]="_periodButtonLabelId" aria-live="polite">\r\n      <span aria-hidden="true">{{periodButtonText}}</span>\r\n      <svg class="mat-calendar-arrow" [class.mat-calendar-invert]="calendar.currentView !== \'month\'"\r\n           viewBox="0 0 10 5" focusable="false" aria-hidden="true">\r\n           <polygon points="0,0 5,5 10,0"/>\r\n      </svg>\r\n    </button>\r\n\r\n    <div class="mat-calendar-spacer"></div>\r\n\r\n    <ng-content></ng-content>\r\n\r\n    <button mat-icon-button type="button" class="mat-calendar-previous-button"\r\n            [disabled]="!previousEnabled()" (click)="previousClicked()"\r\n            [attr.aria-label]="prevButtonLabel">\r\n    </button>\r\n\r\n    <button mat-icon-button type="button" class="mat-calendar-next-button"\r\n            [disabled]="!nextEnabled()" (click)="nextClicked()"\r\n            [attr.aria-label]="nextButtonLabel">\r\n    </button>\r\n  </div>\r\n</div>\r\n<label [id]="_periodButtonLabelId" class="mat-calendar-hidden-label">{{periodButtonDescription}}</label>\r\n' }]
  }], () => [{ type: NgxMatDatepickerIntl }, { type: NgxMatCalendar, decorators: [{
    type: Inject,
    args: [forwardRef(() => NgxMatCalendar)]
  }] }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_FORMATS]
  }] }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatCalendarHeader, { className: "NgxMatCalendarHeader", filePath: "projects/datetime-picker-v2/src/lib/calendar.ts", lineNumber: 59 });
})();
var _NgxMatCalendar = class _NgxMatCalendar {
  /** A date representing the period (month or year) to start the calendar in. */
  get startAt() {
    return this._startAt;
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof NgxDateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get activeDate() {
    return this._clampedActiveDate;
  }
  set activeDate(value) {
    this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  /** Whether the calendar is in month view. */
  get currentView() {
    return this._currentView;
  }
  set currentView(value) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.viewChanged.emit(viewChangedResult);
    }
  }
  constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._changeDetectorRef = _changeDetectorRef;
    this._moveFocusOnNextTick = false;
    this.startView = "month";
    this.selectedChange = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.viewChanged = new EventEmitter(true);
    this._userSelection = new EventEmitter();
    this._userDragDrop = new EventEmitter();
    this._activeDrag = null;
    this.stateChanges = new Subject();
    if (!this._dateAdapter) {
      throw createMissingDateImplError2("NgxMatDateAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError2("NGX_MAT_DATE_FORMATS");
    }
    this._intlChanges = _intl.changes.subscribe(() => {
      _changeDetectorRef.markForCheck();
      this.stateChanges.next();
    });
  }
  ngAfterContentInit() {
    this._calendarHeaderPortal = new ComponentPortal(this.headerComponent || NgxMatCalendarHeader);
    this.activeDate = this.startAt || this._dateAdapter.today();
    this._currentView = this.startView;
  }
  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this._intlChanges.unsubscribe();
    this.stateChanges.complete();
  }
  ngOnChanges(changes) {
    const minDateChange = changes["minDate"] && !this._dateAdapter.sameDate(changes["minDate"].previousValue, changes["minDate"].currentValue) ? changes["minDate"] : void 0;
    const maxDateChange = changes["maxDate"] && !this._dateAdapter.sameDate(changes["maxDate"].previousValue, changes["maxDate"].currentValue) ? changes["maxDate"] : void 0;
    const change = minDateChange || maxDateChange || changes["dateFilter"];
    if (change && !change.firstChange) {
      const view = this._getCurrentViewComponent();
      if (view) {
        this._changeDetectorRef.detectChanges();
        view._init();
      }
    }
    this.stateChanges.next();
  }
  /** Focuses the active date. */
  focusActiveCell() {
    this._getCurrentViewComponent()._focusActiveCell(false);
  }
  /** Updates today's date after an update of the active date */
  updateTodaysDate() {
    this._getCurrentViewComponent()._init();
  }
  /** Handles date selection in the month view. */
  _dateSelected(event) {
    if (event.value && this.selected) {
      this._dateAdapter.copyTime(event.value, this.selected);
    }
    const date = event.value;
    if (this.selected instanceof NgxDateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
      this.selectedChange.emit(date);
    }
    this._userSelection.emit(event);
  }
  /** Handles year selection in the multiyear view. */
  _yearSelectedInMultiYearView(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Handles month selection in the year view. */
  _monthSelectedInYearView(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Handles year/month selection in the multi-year/year views. */
  _goToDateInView(date, view) {
    this.activeDate = date;
    this.currentView = view;
  }
  /** Called when the user starts dragging to change a date range. */
  _dragStarted(event) {
    this._activeDrag = event;
  }
  /**
   * Called when a drag completes. It may end in cancellation or in the selection
   * of a new range.
   */
  _dragEnded(event) {
    if (!this._activeDrag)
      return;
    if (event.value) {
      this._userDragDrop.emit(event);
    }
    this._activeDrag = null;
  }
  /** Returns the component instance that corresponds to the current calendar view. */
  _getCurrentViewComponent() {
    return this.monthView || this.yearView || this.multiYearView;
  }
};
_NgxMatCalendar.\u0275fac = function NgxMatCalendar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatCalendar)(\u0275\u0275directiveInject(NgxMatDatepickerIntl), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_NgxMatCalendar.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatCalendar, selectors: [["ngx-mat-calendar"]], viewQuery: function NgxMatCalendar_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(NgxMatMonthView, 5);
    \u0275\u0275viewQuery(NgxMatYearView, 5);
    \u0275\u0275viewQuery(NgxMatMultiYearView, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.monthView = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.yearView = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiYearView = _t.first);
  }
}, hostAttrs: [1, "mat-calendar"], inputs: { headerComponent: "headerComponent", startAt: "startAt", startView: "startView", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd", startDateAccessibleName: "startDateAccessibleName", endDateAccessibleName: "endDateAccessibleName" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", _userSelection: "_userSelection", _userDragDrop: "_userDragDrop" }, standalone: false, features: [\u0275\u0275ProvidersFeature([NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), \u0275\u0275NgOnChangesFeature], decls: 5, vars: 5, consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag", "activeDateChange", "_userSelection", "dragStarted", "dragEnded", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDateChange", "_userSelection", "dragStarted", "dragEnded", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDateChange", "monthSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "yearSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"]], template: function NgxMatCalendar_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgxMatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, NgxMatCalendar_ngx_mat_month_view_2_Template, 1, 11, "ngx-mat-month-view", 2)(3, NgxMatCalendar_ngx_mat_year_view_3_Template, 1, 6, "ngx-mat-year-view", 3)(4, NgxMatCalendar_ngx_mat_multi_year_view_4_Template, 1, 6, "ngx-mat-multi-year-view", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("cdkPortalOutlet", ctx._calendarHeaderPortal);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx.currentView);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "multi-year");
  }
}, dependencies: [NgSwitch, NgSwitchCase, CdkMonitorFocus, CdkPortalOutlet, NgxMatMonthView, NgxMatYearView, NgxMatMultiYearView], styles: ['/* projects/datetime-picker-v2/src/lib/calendar.scss */\n.mat-calendar {\n  display: block;\n}\n.mat-calendar-header {\n  padding: 8px 8px 0 8px;\n}\n.mat-calendar-content {\n  padding: 0 8px 8px 8px;\n  outline: none;\n}\n.mat-calendar-controls {\n  display: flex;\n  align-items: center;\n  margin: 5% calc(4.7142857143% - 16px);\n}\n.mat-calendar-spacer {\n  flex: 1 1 auto;\n}\n.mat-calendar-period-button {\n  min-width: 0;\n  margin: 0 8px;\n}\n.mat-calendar-arrow {\n  display: inline-block;\n  width: 10px;\n  height: 5px;\n  margin: 0 0 0 5px;\n  vertical-align: middle;\n}\n.mat-calendar-arrow.mat-calendar-invert {\n  transform: rotate(180deg);\n}\n[dir=rtl] .mat-calendar-arrow {\n  margin: 0 5px 0 0;\n}\n@media (forced-colors: active) {\n  .mat-calendar-arrow {\n    fill: CanvasText;\n  }\n}\n.mat-calendar-previous-button,\n.mat-calendar-next-button {\n  position: relative;\n}\n.mat-calendar-previous-button::after,\n.mat-calendar-next-button::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: "";\n  margin: 15.5px;\n  border: 0 solid currentColor;\n  border-top-width: 2px;\n}\n[dir=rtl] .mat-calendar-previous-button,\n[dir=rtl] .mat-calendar-next-button {\n  transform: rotate(180deg);\n}\n.mat-calendar-previous-button::after {\n  border-left-width: 2px;\n  transform: translateX(2px) rotate(-45deg);\n}\n.mat-calendar-next-button::after {\n  border-right-width: 2px;\n  transform: translateX(-2px) rotate(45deg);\n}\n.mat-calendar-table {\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n}\n.mat-calendar-table-header th {\n  text-align: center;\n  padding: 0 0 8px 0;\n}\n.mat-calendar-table-header-divider {\n  position: relative;\n  height: 1px;\n}\n.mat-calendar-table-header-divider::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -8px;\n  right: -8px;\n  height: 1px;\n}\n.mat-calendar-body-cell-content::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);\n}\n.mat-calendar-body-cell:focus .mat-focus-indicator::before {\n  content: "";\n}\n.mat-calendar-hidden-label {\n  display: none;\n}\n/*# sourceMappingURL=calendar.css.map */\n'], encapsulation: 2, changeDetection: 0 });
var NgxMatCalendar = _NgxMatCalendar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatCalendar, [{
    type: Component,
    args: [{ selector: "ngx-mat-calendar", host: {
      class: "mat-calendar"
    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER], standalone: false, template: '<ng-template [cdkPortalOutlet]="_calendarHeaderPortal"></ng-template>\r\n\r\n<div class="mat-calendar-content" [ngSwitch]="currentView" cdkMonitorSubtreeFocus tabindex="-1">\r\n  <ngx-mat-month-view\r\n      *ngSwitchCase="\'month\'"\r\n      [(activeDate)]="activeDate"\r\n      [selected]="selected"\r\n      [dateFilter]="dateFilter"\r\n      [maxDate]="maxDate"\r\n      [minDate]="minDate"\r\n      [dateClass]="dateClass"\r\n      [comparisonStart]="comparisonStart"\r\n      [comparisonEnd]="comparisonEnd"\r\n      [startDateAccessibleName]="startDateAccessibleName"\r\n      [endDateAccessibleName]="endDateAccessibleName"\r\n      (_userSelection)="_dateSelected($event)"\r\n      (dragStarted)="_dragStarted($event)"\r\n      (dragEnded)="_dragEnded($event)"\r\n      [activeDrag]="_activeDrag"\r\n      >\r\n  </ngx-mat-month-view>\r\n\r\n  <ngx-mat-year-view\r\n      *ngSwitchCase="\'year\'"\r\n      [(activeDate)]="activeDate"\r\n      [selected]="selected"\r\n      [dateFilter]="dateFilter"\r\n      [maxDate]="maxDate"\r\n      [minDate]="minDate"\r\n      [dateClass]="dateClass"\r\n      (monthSelected)="_monthSelectedInYearView($event)"\r\n      (selectedChange)="_goToDateInView($event, \'month\')">\r\n  </ngx-mat-year-view>\r\n\r\n  <ngx-mat-multi-year-view\r\n      *ngSwitchCase="\'multi-year\'"\r\n      [(activeDate)]="activeDate"\r\n      [selected]="selected"\r\n      [dateFilter]="dateFilter"\r\n      [maxDate]="maxDate"\r\n      [minDate]="minDate"\r\n      [dateClass]="dateClass"\r\n      (yearSelected)="_yearSelectedInMultiYearView($event)"\r\n      (selectedChange)="_goToDateInView($event, \'year\')">\r\n  </ngx-mat-multi-year-view>\r\n</div>\r\n', styles: ['/* projects/datetime-picker-v2/src/lib/calendar.scss */\n.mat-calendar {\n  display: block;\n}\n.mat-calendar-header {\n  padding: 8px 8px 0 8px;\n}\n.mat-calendar-content {\n  padding: 0 8px 8px 8px;\n  outline: none;\n}\n.mat-calendar-controls {\n  display: flex;\n  align-items: center;\n  margin: 5% calc(4.7142857143% - 16px);\n}\n.mat-calendar-spacer {\n  flex: 1 1 auto;\n}\n.mat-calendar-period-button {\n  min-width: 0;\n  margin: 0 8px;\n}\n.mat-calendar-arrow {\n  display: inline-block;\n  width: 10px;\n  height: 5px;\n  margin: 0 0 0 5px;\n  vertical-align: middle;\n}\n.mat-calendar-arrow.mat-calendar-invert {\n  transform: rotate(180deg);\n}\n[dir=rtl] .mat-calendar-arrow {\n  margin: 0 5px 0 0;\n}\n@media (forced-colors: active) {\n  .mat-calendar-arrow {\n    fill: CanvasText;\n  }\n}\n.mat-calendar-previous-button,\n.mat-calendar-next-button {\n  position: relative;\n}\n.mat-calendar-previous-button::after,\n.mat-calendar-next-button::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: "";\n  margin: 15.5px;\n  border: 0 solid currentColor;\n  border-top-width: 2px;\n}\n[dir=rtl] .mat-calendar-previous-button,\n[dir=rtl] .mat-calendar-next-button {\n  transform: rotate(180deg);\n}\n.mat-calendar-previous-button::after {\n  border-left-width: 2px;\n  transform: translateX(2px) rotate(-45deg);\n}\n.mat-calendar-next-button::after {\n  border-right-width: 2px;\n  transform: translateX(-2px) rotate(45deg);\n}\n.mat-calendar-table {\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n}\n.mat-calendar-table-header th {\n  text-align: center;\n  padding: 0 0 8px 0;\n}\n.mat-calendar-table-header-divider {\n  position: relative;\n  height: 1px;\n}\n.mat-calendar-table-header-divider::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -8px;\n  right: -8px;\n  height: 1px;\n}\n.mat-calendar-body-cell-content::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);\n}\n.mat-calendar-body-cell:focus .mat-focus-indicator::before {\n  content: "";\n}\n.mat-calendar-hidden-label {\n  display: none;\n}\n/*# sourceMappingURL=calendar.css.map */\n'] }]
  }], () => [{ type: NgxMatDatepickerIntl }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_FORMATS]
  }] }, { type: ChangeDetectorRef }], { headerComponent: [{
    type: Input
  }], startAt: [{
    type: Input
  }], startView: [{
    type: Input
  }], selected: [{
    type: Input
  }], minDate: [{
    type: Input
  }], maxDate: [{
    type: Input
  }], dateFilter: [{
    type: Input
  }], dateClass: [{
    type: Input
  }], comparisonStart: [{
    type: Input
  }], comparisonEnd: [{
    type: Input
  }], startDateAccessibleName: [{
    type: Input
  }], endDateAccessibleName: [{
    type: Input
  }], selectedChange: [{
    type: Output
  }], yearSelected: [{
    type: Output
  }], monthSelected: [{
    type: Output
  }], viewChanged: [{
    type: Output
  }], _userSelection: [{
    type: Output
  }], _userDragDrop: [{
    type: Output
  }], monthView: [{
    type: ViewChild,
    args: [NgxMatMonthView]
  }], yearView: [{
    type: ViewChild,
    args: [NgxMatYearView]
  }], multiYearView: [{
    type: ViewChild,
    args: [NgxMatMultiYearView]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatCalendar, { className: "NgxMatCalendar", filePath: "projects/datetime-picker-v2/src/lib/calendar.ts", lineNumber: 258 });
})();

// projects/datetime-picker-v2/src/lib/aria-accessible-name.ts
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === "INPUT";
}
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === "TEXTAREA";
}
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  var _a, _b, _c, _d, _e, _f;
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = ((_b = (_a = currentNode.getAttribute) == null ? void 0 : _a.call(currentNode, "aria-labelledby")) == null ? void 0 : _b.split(/\s+/g)) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map((idRef) => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(" ");
    }
  }
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = (_c = currentNode.getAttribute("aria-label")) == null ? void 0 : _c.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    if ((_d = currentNode.labels) == null ? void 0 : _d.length) {
      return Array.from(currentNode.labels).map((x) => _computeAriaAccessibleNameInternal(x, false)).join(" ");
    }
    const placeholder = (_e = currentNode.getAttribute("placeholder")) == null ? void 0 : _e.trim();
    if (placeholder) {
      return placeholder;
    }
    const title = (_f = currentNode.getAttribute("title")) == null ? void 0 : _f.trim();
    if (title) {
      return title;
    }
  }
  return (currentNode.textContent || "").replace(/\s+/g, " ").trim();
}

// projects/datetime-picker-v2/src/lib/datepicker-input-base.ts
var NgxMatDatepickerInputEvent = class {
  constructor(target, targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
};
var _NgxMatDatepickerInputBase = class _NgxMatDatepickerInputBase {
  /** The value of the input. */
  get value() {
    return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
  }
  set value(value) {
    this._assignValueProgrammatically(value);
  }
  /** Whether the datepicker-input is disabled. */
  get disabled() {
    return !!this._disabled || this._parentDisabled();
  }
  set disabled(value) {
    const newValue = coerceBooleanProperty(value);
    const element = this._elementRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this.stateChanges.next(void 0);
    }
    if (newValue && this._isInitialized && element.blur) {
      element.blur();
    }
  }
  /** Gets the base validator functions. */
  _getValidators() {
    return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
  }
  /** Registers a date selection model with the input. */
  _registerModel(model) {
    this._model = model;
    this._valueChangesSubscription.unsubscribe();
    if (this._pendingValue) {
      this._assignValue(this._pendingValue);
    }
    this._valueChangesSubscription = this._model.selectionChanged.subscribe((event) => {
      if (this._shouldHandleChangeEvent(event)) {
        const value = this._getValueFromModel(event.selection);
        this._lastValueValid = this._isValidValue(value);
        this._cvaOnChange(value);
        this._onTouched();
        this._formatValue(value);
        this.dateInput.emit(new NgxMatDatepickerInputEvent(this, this._elementRef.nativeElement));
        this.dateChange.emit(new NgxMatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    });
  }
  constructor(_elementRef, _dateAdapter, _dateFormats) {
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this.dateChange = new EventEmitter();
    this.dateInput = new EventEmitter();
    this.stateChanges = new Subject();
    this._onTouched = () => {
    };
    this._validatorOnChange = () => {
    };
    this._cvaOnChange = () => {
    };
    this._valueChangesSubscription = Subscription.EMPTY;
    this._localeSubscription = Subscription.EMPTY;
    this._parseValidator = () => {
      return this._lastValueValid ? null : { "matDatepickerParse": { "text": this._elementRef.nativeElement.value } };
    };
    this._filterValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      return !controlValue || this._matchesFilter(controlValue) ? null : { "matDatepickerFilter": true };
    };
    this._minValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const min = this._getMinDate();
      return !min || !controlValue || this._dateAdapter.compareDateWithTime(min, controlValue) <= 0 ? null : { "matDatetimePickerMin": { "min": min, "actual": controlValue } };
    };
    this._maxValidator = (control) => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const max = this._getMaxDate();
      return !max || !controlValue || this._dateAdapter.compareDateWithTime(max, controlValue) >= 0 ? null : { "matDatetimePickerMax": { "max": max, "actual": controlValue } };
    };
    this._lastValueValid = false;
    if (!this._dateAdapter) {
      throw createMissingDateImplError2("NgxMatDateAdapter");
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError2("NGX_MAT_DATE_FORMATS");
    }
    this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
      this._assignValueProgrammatically(this.value);
    });
  }
  ngAfterViewInit() {
    this._isInitialized = true;
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._valueChangesSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** @docs-private */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** @docs-private */
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this._assignValueProgrammatically(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._cvaOnChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _onKeydown(event) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    const isAltDownArrow = hasModifierKey(event, "altKey") && event.keyCode === DOWN_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._openPopup();
      event.preventDefault();
    }
  }
  _onInput(value) {
    const lastValueWasValid = this._lastValueValid;
    let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
    this._lastValueValid = this._isValidValue(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    const isSameTime = this._dateAdapter.isSameTime(date, this.value);
    const isSameDate = this._dateAdapter.sameDate(date, this.value);
    const isSame = isSameDate && isSameTime;
    const hasChanged = !isSame;
    if (!date || hasChanged) {
      this._cvaOnChange(date);
    } else {
      if (value && !this.value) {
        this._cvaOnChange(date);
      }
      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }
    if (hasChanged) {
      this._assignValue(date);
      this.dateInput.emit(new NgxMatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
  }
  _onChange() {
    this.dateChange.emit(new NgxMatDatepickerInputEvent(this, this._elementRef.nativeElement));
  }
  /** Handles blur events on the input. */
  _onBlur() {
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
  }
  /** Formats a value and sets it on the input element. */
  _formatValue(value) {
    this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : "";
  }
  /** Assigns a value to the model. */
  _assignValue(value) {
    if (this._model) {
      this._assignValueToModel(value);
      this._pendingValue = null;
    } else {
      this._pendingValue = value;
    }
  }
  /** Whether a value is considered valid. */
  _isValidValue(value) {
    return !value || this._dateAdapter.isValid(value);
  }
  /**
   * Checks whether a parent control is disabled. This is in place so that it can be overridden
   * by inputs extending this one which can be placed inside of a group that can be disabled.
   */
  _parentDisabled() {
    return false;
  }
  /** Programmatically assigns a value to the input. */
  _assignValueProgrammatically(value) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = this._isValidValue(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    this._assignValue(value);
    this._formatValue(value);
  }
  /** Gets whether a value matches the current date filter. */
  _matchesFilter(value) {
    const filter2 = this._getDateFilter();
    return !filter2 || filter2(value);
  }
};
_NgxMatDatepickerInputBase.\u0275fac = function NgxMatDatepickerInputBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerInputBase)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8));
};
_NgxMatDatepickerInputBase.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatDatepickerInputBase, inputs: { value: "value", disabled: "disabled" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [\u0275\u0275NgOnChangesFeature] });
var NgxMatDatepickerInputBase = _NgxMatDatepickerInputBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerInputBase, [{
    type: Directive
  }], () => [{ type: ElementRef }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_FORMATS]
  }] }], { value: [{
    type: Input
  }], disabled: [{
    type: Input
  }], dateChange: [{
    type: Output
  }], dateInput: [{
    type: Output
  }] });
})();
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const { previousValue, currentValue } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}

// projects/datetime-picker-v2/src/lib/date-range-input-parts.ts
var NGX_MAT_DATE_RANGE_INPUT_PARENT = new InjectionToken("NGX_MAT_DATE_RANGE_INPUT_PARENT");
var _NgxMatDateRangeInputPartBase = class _NgxMatDateRangeInputPartBase extends NgxMatDatepickerInputBase {
  constructor(_rangeInput, _elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
    super(_elementRef, dateAdapter, dateFormats);
    this._rangeInput = _rangeInput;
    this._elementRef = _elementRef;
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._injector = _injector;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this._dir = inject(Directionality, { optional: true });
    this._errorState = false;
  }
  ngOnInit() {
    const ngControl = this._injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    if (ngControl) {
      this.ngControl = ngControl;
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }
  /** Whether the component is in an error state. */
  get errorState() {
    return this._errorState;
  }
  /** Sets the error state of the component. */
  set errorState(value) {
    this._errorState = value;
    this._elementRef.nativeElement.classList.toggle("mat-error", value);
  }
  /** Updates the error state of the component. */
  updateErrorState() {
    const isInvalid = this._defaultErrorStateMatcher.isErrorState(this.ngControl, this._elementRef);
    this._errorState = isInvalid;
    this._elementRef.nativeElement.classList.toggle("mat-error", isInvalid);
  }
  /** Gets whether the input is empty. */
  isEmpty() {
    return this._elementRef.nativeElement.value.length === 0;
  }
  /** Gets the placeholder of the input. */
  _getPlaceholder() {
    return this._elementRef.nativeElement.placeholder;
  }
  /** Focuses the input. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  /** Gets the value that should be used when mirroring the input's size. */
  getMirrorValue() {
    const element = this._elementRef.nativeElement;
    const value = element.value;
    return value.length > 0 ? value : element.placeholder;
  }
  /** Handles `input` events on the input element. */
  _onInput(value) {
    super._onInput(value);
    this._rangeInput._handleChildValueChange();
  }
  /** Opens the datepicker associated with the input. */
  _openPopup() {
    this._rangeInput._openDatepicker();
  }
  /** Gets the minimum date from the range input. */
  _getMinDate() {
    return this._rangeInput.min;
  }
  /** Gets the maximum date from the range input. */
  _getMaxDate() {
    return this._rangeInput.max;
  }
  /** Gets the date filter function from the range input. */
  _getDateFilter() {
    return this._rangeInput.dateFilter;
  }
  _parentDisabled() {
    return this._rangeInput._groupDisabled;
  }
  _shouldHandleChangeEvent({ source }) {
    return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
  }
  _assignValueProgrammatically(value) {
    super._assignValueProgrammatically(value);
    const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
    opposite == null ? void 0 : opposite._validatorOnChange();
  }
  /** return the ARIA accessible name of the input element */
  _getAccessibleName() {
    return _computeAriaAccessibleName(this._elementRef.nativeElement);
  }
};
_NgxMatDateRangeInputPartBase.\u0275fac = function NgxMatDateRangeInputPartBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDateRangeInputPartBase)(\u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_INPUT_PARENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8));
};
_NgxMatDateRangeInputPartBase.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatDateRangeInputPartBase, features: [\u0275\u0275InheritDefinitionFeature] });
var NgxMatDateRangeInputPartBase = _NgxMatDateRangeInputPartBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDateRangeInputPartBase, [{
    type: Directive
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [NGX_MAT_DATE_RANGE_INPUT_PARENT]
  }] }, { type: ElementRef }, { type: ErrorStateMatcher }, { type: Injector }, { type: NgForm, decorators: [{
    type: Optional
  }] }, { type: FormGroupDirective, decorators: [{
    type: Optional
  }] }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_FORMATS]
  }] }], null);
})();
var _NgxMatStartDate = class _NgxMatStartDate extends NgxMatDateRangeInputPartBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    this._startValidator = (control) => {
      const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const end = this._model ? this._model.selection.end : null;
      return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : { matStartDateInvalid: { end, actual: start } };
    };
    this._validator = Validators.compose([
      ...super._getValidators(),
      this._startValidator
    ]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.start;
  }
  _shouldHandleChangeEvent(change) {
    var _a;
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !((_a = change.oldValue) == null ? void 0 : _a.start) ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range3 = new NgxDateRange(value, this._model.selection.end);
      this._model.updateSelection(range3, this);
    }
  }
  _formatValue(value) {
    super._formatValue(value);
    this._rangeInput._handleChildValueChange();
  }
  _onKeydown(event) {
    var _a;
    const endInput = this._rangeInput._endInput;
    const element = this._elementRef.nativeElement;
    const isLtr = ((_a = this._dir) == null ? void 0 : _a.value) !== "rtl";
    if ((event.keyCode === RIGHT_ARROW && isLtr || event.keyCode === LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
      event.preventDefault();
      endInput._elementRef.nativeElement.setSelectionRange(0, 0);
      endInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
};
_NgxMatStartDate.\u0275fac = function NgxMatStartDate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatStartDate)(\u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_INPUT_PARENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8));
};
_NgxMatStartDate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatStartDate, selectors: [["input", "ngxMatStartDate", ""]], hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"], hostVars: 5, hostBindings: function NgxMatStartDate_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("input", function NgxMatStartDate_input_HostBindingHandler($event) {
      return ctx._onInput($event.target.value);
    })("change", function NgxMatStartDate_change_HostBindingHandler() {
      return ctx._onChange();
    })("keydown", function NgxMatStartDate_keydown_HostBindingHandler($event) {
      return ctx._onKeydown($event);
    })("blur", function NgxMatStartDate_blur_HostBindingHandler() {
      return ctx._onBlur();
    });
  }
  if (rf & 2) {
    \u0275\u0275hostProperty("disabled", ctx.disabled);
    \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
  }
}, inputs: { errorStateMatcher: "errorStateMatcher" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, standalone: false, features: [\u0275\u0275ProvidersFeature([
  { provide: NG_VALUE_ACCESSOR, useExisting: _NgxMatStartDate, multi: true },
  { provide: NG_VALIDATORS, useExisting: _NgxMatStartDate, multi: true }
]), \u0275\u0275InheritDefinitionFeature] });
var NgxMatStartDate = _NgxMatStartDate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatStartDate, [{
    type: Directive,
    args: [{
      selector: "input[ngxMatStartDate]",
      host: {
        class: "mat-start-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null",
        "(blur)": "_onBlur()",
        type: "text"
      },
      providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: NgxMatStartDate, multi: true },
        { provide: NG_VALIDATORS, useExisting: NgxMatStartDate, multi: true }
      ],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"],
      inputs: ["errorStateMatcher"],
      standalone: false
    }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [NGX_MAT_DATE_RANGE_INPUT_PARENT]
  }] }, { type: ElementRef }, { type: ErrorStateMatcher }, { type: Injector }, { type: NgForm, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NgForm]
  }] }, { type: FormGroupDirective, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [FormGroupDirective]
  }] }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_FORMATS]
  }] }], null);
})();
var _NgxMatEndDate = class _NgxMatEndDate extends NgxMatDateRangeInputPartBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    this._endValidator = (control) => {
      const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const start = this._model ? this._model.selection.start : null;
      return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : { matEndDateInvalid: { start, actual: end } };
    };
    this._validator = Validators.compose([
      ...super._getValidators(),
      this._endValidator
    ]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.end;
  }
  _shouldHandleChangeEvent(change) {
    var _a;
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !((_a = change.oldValue) == null ? void 0 : _a.end) ? !!change.selection.end : !change.selection.end || !!super._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range3 = new NgxDateRange(this._model.selection.start, value);
      this._model.updateSelection(range3, this);
    }
  }
  _onKeydown(event) {
    var _a;
    const startInput = this._rangeInput._startInput;
    const element = this._elementRef.nativeElement;
    const isLtr = ((_a = this._dir) == null ? void 0 : _a.value) !== "rtl";
    if (event.keyCode === BACKSPACE && !element.value) {
      startInput.focus();
    } else if ((event.keyCode === LEFT_ARROW && isLtr || event.keyCode === RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
      event.preventDefault();
      const endPosition = startInput._elementRef.nativeElement.value.length;
      startInput._elementRef.nativeElement.setSelectionRange(endPosition, endPosition);
      startInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
};
_NgxMatEndDate.\u0275fac = function NgxMatEndDate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatEndDate)(\u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_INPUT_PARENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ErrorStateMatcher), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(NgForm, 8), \u0275\u0275directiveInject(FormGroupDirective, 8), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8));
};
_NgxMatEndDate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatEndDate, selectors: [["input", "ngxMatEndDate", ""]], hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"], hostVars: 5, hostBindings: function NgxMatEndDate_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("input", function NgxMatEndDate_input_HostBindingHandler($event) {
      return ctx._onInput($event.target.value);
    })("change", function NgxMatEndDate_change_HostBindingHandler() {
      return ctx._onChange();
    })("keydown", function NgxMatEndDate_keydown_HostBindingHandler($event) {
      return ctx._onKeydown($event);
    })("blur", function NgxMatEndDate_blur_HostBindingHandler() {
      return ctx._onBlur();
    });
  }
  if (rf & 2) {
    \u0275\u0275hostProperty("disabled", ctx.disabled);
    \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
  }
}, inputs: { errorStateMatcher: "errorStateMatcher" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, standalone: false, features: [\u0275\u0275ProvidersFeature([
  { provide: NG_VALUE_ACCESSOR, useExisting: _NgxMatEndDate, multi: true },
  { provide: NG_VALIDATORS, useExisting: _NgxMatEndDate, multi: true }
]), \u0275\u0275InheritDefinitionFeature] });
var NgxMatEndDate = _NgxMatEndDate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatEndDate, [{
    type: Directive,
    args: [{
      selector: "input[ngxMatEndDate]",
      host: {
        class: "mat-end-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null",
        "(blur)": "_onBlur()",
        type: "text"
      },
      providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: NgxMatEndDate, multi: true },
        { provide: NG_VALIDATORS, useExisting: NgxMatEndDate, multi: true }
      ],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"],
      inputs: ["errorStateMatcher"],
      standalone: false
    }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [NGX_MAT_DATE_RANGE_INPUT_PARENT]
  }] }, { type: ElementRef }, { type: ErrorStateMatcher }, { type: Injector }, { type: NgForm, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NgForm]
  }] }, { type: FormGroupDirective, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [FormGroupDirective]
  }] }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_FORMATS]
  }] }], null);
})();

// projects/datetime-picker-v2/src/lib/date-range-input.ts
var _c04 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
var _c12 = ["input[matStartDate]", "input[matEndDate]"];
var nextUniqueId = 0;
var _NgxMatDateRangeInput = class _NgxMatDateRangeInput {
  /** Current value of the range input. */
  get value() {
    return this._model ? this._model.selection : null;
  }
  /** Whether the control's label should float. */
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * Set the placeholder attribute on `matStartDate` and `matEndDate`.
   * @docs-private
   */
  get placeholder() {
    var _a, _b;
    const start = ((_a = this._startInput) == null ? void 0 : _a._getPlaceholder()) || "";
    const end = ((_b = this._endInput) == null ? void 0 : _b._getPlaceholder()) || "";
    return start || end ? "".concat(start, " ").concat(this.separator, " ").concat(end) : "";
  }
  /** The range picker that this input is associated with. */
  get rangePicker() {
    return this._rangePicker;
  }
  set rangePicker(rangePicker) {
    if (rangePicker) {
      this._model = rangePicker.registerInput(this);
      this._rangePicker = rangePicker;
      this._closedSubscription.unsubscribe();
      this._closedSubscription = rangePicker.closedStream.subscribe(() => {
        var _a, _b;
        (_a = this._startInput) == null ? void 0 : _a._onTouched();
        (_b = this._endInput) == null ? void 0 : _b._onTouched();
      });
      this._registerModel(this._model);
    }
  }
  /** Whether the input is required. */
  get required() {
    var _a, _b;
    return (_b = (_a = this._required) != null ? _a : this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) != null ? _b : false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  /** Function that can be used to filter out dates within the date range picker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const start = this._startInput;
    const end = this._endInput;
    const wasMatchingStart = start && start._matchesFilter(start.value);
    const wasMatchingEnd = end && end._matchesFilter(start.value);
    this._dateFilter = value;
    if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
      start._validatorOnChange();
    }
    if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
      end._validatorOnChange();
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._revalidate();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._revalidate();
    }
  }
  /** Whether the input is disabled. */
  get disabled() {
    return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
  }
  set disabled(value) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._groupDisabled) {
      this._groupDisabled = newValue;
      this.stateChanges.next(void 0);
    }
  }
  /** Whether the input is in an error state. */
  get errorState() {
    if (this._startInput && this._endInput) {
      return this._startInput.errorState || this._endInput.errorState;
    }
    return false;
  }
  /** Whether the datepicker input is empty. */
  get empty() {
    const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
    const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
    return startEmpty && endEmpty;
  }
  constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._formField = _formField;
    this._closedSubscription = Subscription.EMPTY;
    this.id = "mat-date-range-input-".concat(nextUniqueId++);
    this.focused = false;
    this.controlType = "mat-date-range-input";
    this._groupDisabled = false;
    this._ariaDescribedBy = null;
    this.separator = "\u2013";
    this.comparisonStart = null;
    this.comparisonEnd = null;
    this.stateChanges = new Subject();
    if (!_dateAdapter) {
      throw createMissingDateImplError2("NgxMatDateAdapter");
    }
    if (_formField == null ? void 0 : _formField._elementRef.nativeElement.classList.contains("mat-mdc-form-field")) {
      _elementRef.nativeElement.classList.add("mat-mdc-input-element", "mat-mdc-form-field-input-control", "mdc-text-field__input");
    }
    this.ngControl = control;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedBy = ids.length ? ids.join(" ") : null;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused && !this.disabled) {
      if (!this._model || !this._model.selection.start) {
        this._startInput.focus();
      } else {
        this._endInput.focus();
      }
    }
  }
  ngAfterContentInit() {
    if (!this._startInput) {
      throw Error("mat-date-range-input must contain a matStartDate input");
    }
    if (!this._endInput) {
      throw Error("mat-date-range-input must contain a matEndDate input");
    }
    if (this._model) {
      this._registerModel(this._model);
    }
    merge(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
      this.stateChanges.next(void 0);
    });
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._closedSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** Gets the date at which the calendar should start. */
  getStartValue() {
    return this.value ? this.value.start : null;
  }
  /** Gets the input's theme palette. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the element to which the calendar overlay should be attached. */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    return this._formField ? this._formField.getLabelId() : null;
  }
  /** Gets the value that is used to mirror the state input. */
  _getInputMirrorValue(part) {
    const input = part === "start" ? this._startInput : this._endInput;
    return input ? input.getMirrorValue() : "";
  }
  /** Whether the input placeholders should be hidden. */
  _shouldHidePlaceholders() {
    return this._startInput ? !this._startInput.isEmpty() : false;
  }
  /** Handles the value in one of the child inputs changing. */
  _handleChildValueChange() {
    this.stateChanges.next(void 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Opens the date range picker associated with the input. */
  _openDatepicker() {
    if (this._rangePicker) {
      this._rangePicker.open();
    }
  }
  /** Whether the separate text should be hidden. */
  _shouldHideSeparator() {
    return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
  }
  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    const formField = this._formField;
    return formField && formField._hasFloatingLabel() ? formField._labelId : null;
  }
  _getStartDateAccessibleName() {
    return this._startInput._getAccessibleName();
  }
  _getEndDateAccessibleName() {
    return this._endInput._getAccessibleName();
  }
  /** Updates the focused state of the range input. */
  _updateFocus(origin) {
    this.focused = origin !== null;
    this.stateChanges.next();
  }
  /** Re-runs the validators on the start/end inputs. */
  _revalidate() {
    if (this._startInput) {
      this._startInput._validatorOnChange();
    }
    if (this._endInput) {
      this._endInput._validatorOnChange();
    }
  }
  /** Registers the current date selection model with the start/end inputs. */
  _registerModel(model) {
    if (this._startInput) {
      this._startInput._registerModel(model);
    }
    if (this._endInput) {
      this._endInput._registerModel(model);
    }
  }
  /** Checks whether a specific range input directive is required. */
  _isTargetRequired(target) {
    var _a, _b;
    return (_b = (_a = target == null ? void 0 : target.ngControl) == null ? void 0 : _a.control) == null ? void 0 : _b.hasValidator(Validators.required);
  }
};
_NgxMatDateRangeInput.\u0275fac = function NgxMatDateRangeInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDateRangeInput)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ControlContainer, 10), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(MAT_FORM_FIELD, 8));
};
_NgxMatDateRangeInput.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatDateRangeInput, selectors: [["ngx-mat-date-range-input"]], contentQueries: function NgxMatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuery(dirIndex, NgxMatStartDate, 5);
    \u0275\u0275contentQuery(dirIndex, NgxMatEndDate, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._startInput = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._endInput = _t.first);
  }
}, hostAttrs: ["role", "group", 1, "mat-date-range-input"], hostVars: 8, hostBindings: function NgxMatDateRangeInput_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275attribute("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
    \u0275\u0275classProp("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
  }
}, inputs: { rangePicker: "rangePicker", required: "required", dateFilter: "dateFilter", min: "min", max: "max", disabled: "disabled", separator: "separator", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, exportAs: ["ngxMatDateRangeInput"], standalone: false, features: [\u0275\u0275ProvidersFeature([
  { provide: MatFormFieldControl, useExisting: _NgxMatDateRangeInput },
  {
    provide: NGX_MAT_DATE_RANGE_INPUT_PARENT,
    useExisting: _NgxMatDateRangeInput
  }
]), \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c12, decls: 11, vars: 5, consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]], template: function NgxMatDateRangeInput_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c04);
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("cdkFocusChange", function NgxMatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
      return ctx._updateFocus($event);
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275projection(8, 1);
    \u0275\u0275elementStart(9, "span", 2);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx._getInputMirrorValue("start"));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.separator);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx._getInputMirrorValue("end"));
  }
}, dependencies: [CdkMonitorFocus], styles: ["/* projects/datetime-picker-v2/src/lib/date-range-input.scss */\n.mat-date-range-input {\n  display: block;\n  width: 100%;\n}\n.mat-date-range-input-container {\n  display: flex;\n  align-items: center;\n}\n.mat-date-range-input-separator {\n  transition: opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin: 0 4px;\n}\n._mat-animation-noopable .mat-date-range-input-separator {\n  transition: none;\n}\n.mat-date-range-input-separator-hidden {\n  -webkit-user-select: none;\n  user-select: none;\n  opacity: 0;\n  transition: none;\n}\n.mat-date-range-input-wrapper {\n  position: relative;\n  overflow: hidden;\n  max-width: calc(50% - 4px);\n}\n.mat-date-range-input-end-wrapper {\n  flex-grow: 1;\n}\n.mat-date-range-input-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font: inherit;\n  background: transparent;\n  color: currentColor;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  vertical-align: bottom;\n  text-align: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 100%;\n}\n.mat-date-range-input-inner:-moz-ui-invalid {\n  box-shadow: none;\n}\n.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,\n.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {\n  -webkit-user-select: none;\n  user-select: none;\n  color: transparent !important;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n}\n@media (forced-colors: active) {\n  .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,\n  .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {\n    opacity: 0;\n  }\n}\n.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,\n.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {\n  -webkit-user-select: none;\n  user-select: none;\n  color: transparent !important;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n}\n@media (forced-colors: active) {\n  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,\n  .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {\n    opacity: 0;\n  }\n}\n.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,\n.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {\n  -webkit-user-select: none;\n  user-select: none;\n  color: transparent !important;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n}\n@media (forced-colors: active) {\n  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,\n  .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {\n    opacity: 0;\n  }\n}\n.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,\n.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {\n  -webkit-user-select: none;\n  user-select: none;\n  color: transparent !important;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n}\n@media (forced-colors: active) {\n  .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,\n  .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {\n    opacity: 0;\n  }\n}\n._mat-animation-noopable .mat-date-range-input-inner::placeholder {\n  transition: none;\n}\n._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder {\n  transition: none;\n}\n._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder {\n  transition: none;\n}\n._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder {\n  transition: none;\n}\n.mat-date-range-input-mirror {\n  -webkit-user-select: none;\n  user-select: none;\n  visibility: hidden;\n  white-space: nowrap;\n  display: inline-block;\n  min-width: 2px;\n}\n.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix {\n  width: 200px;\n}\n/*# sourceMappingURL=date-range-input.css.map */\n"], encapsulation: 2, changeDetection: 0 });
var NgxMatDateRangeInput = _NgxMatDateRangeInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDateRangeInput, [{
    type: Component,
    args: [{ selector: "ngx-mat-date-range-input", exportAs: "ngxMatDateRangeInput", host: {
      class: "mat-date-range-input",
      "[class.mat-date-range-input-hide-placeholders]": "_shouldHidePlaceholders()",
      "[class.mat-date-range-input-required]": "required",
      "[attr.id]": "id",
      role: "group",
      "[attr.aria-labelledby]": "_getAriaLabelledby()",
      "[attr.aria-describedby]": "_ariaDescribedBy",
      // Used by the test harness to tie this input to its calendar. We can't depend on
      // `aria-owns` for this, because it's only defined while the calendar is open.
      "[attr.data-mat-calendar]": "rangePicker ? rangePicker.id : null"
    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
      { provide: MatFormFieldControl, useExisting: NgxMatDateRangeInput },
      {
        provide: NGX_MAT_DATE_RANGE_INPUT_PARENT,
        useExisting: NgxMatDateRangeInput
      }
    ], standalone: false, template: '<div\r\n  class="mat-date-range-input-container"\r\n  cdkMonitorSubtreeFocus\r\n  (cdkFocusChange)="_updateFocus($event)">\r\n  <div class="mat-date-range-input-wrapper">\r\n    <ng-content select="input[matStartDate]"></ng-content>\r\n    <span\r\n      class="mat-date-range-input-mirror"\r\n      aria-hidden="true">{{_getInputMirrorValue(\'start\')}}</span>\r\n  </div>\r\n\r\n  <span\r\n    class="mat-date-range-input-separator"\r\n    [class.mat-date-range-input-separator-hidden]="_shouldHideSeparator()">{{separator}}</span>\r\n\r\n  <div class="mat-date-range-input-wrapper mat-date-range-input-end-wrapper">\r\n    <ng-content select="input[matEndDate]"></ng-content>\r\n    <span\r\n      class="mat-date-range-input-mirror"\r\n      aria-hidden="true">{{_getInputMirrorValue(\'end\')}}</span>\r\n  </div>\r\n</div>\r\n\r\n', styles: ["/* projects/datetime-picker-v2/src/lib/date-range-input.scss */\n.mat-date-range-input {\n  display: block;\n  width: 100%;\n}\n.mat-date-range-input-container {\n  display: flex;\n  align-items: center;\n}\n.mat-date-range-input-separator {\n  transition: opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin: 0 4px;\n}\n._mat-animation-noopable .mat-date-range-input-separator {\n  transition: none;\n}\n.mat-date-range-input-separator-hidden {\n  -webkit-user-select: none;\n  user-select: none;\n  opacity: 0;\n  transition: none;\n}\n.mat-date-range-input-wrapper {\n  position: relative;\n  overflow: hidden;\n  max-width: calc(50% - 4px);\n}\n.mat-date-range-input-end-wrapper {\n  flex-grow: 1;\n}\n.mat-date-range-input-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font: inherit;\n  background: transparent;\n  color: currentColor;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  vertical-align: bottom;\n  text-align: inherit;\n  -webkit-appearance: none;\n  width: 100%;\n  height: 100%;\n}\n.mat-date-range-input-inner:-moz-ui-invalid {\n  box-shadow: none;\n}\n.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,\n.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {\n  -webkit-user-select: none;\n  user-select: none;\n  color: transparent !important;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n}\n@media (forced-colors: active) {\n  .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,\n  .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder {\n    opacity: 0;\n  }\n}\n.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,\n.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {\n  -webkit-user-select: none;\n  user-select: none;\n  color: transparent !important;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n}\n@media (forced-colors: active) {\n  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,\n  .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder {\n    opacity: 0;\n  }\n}\n.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,\n.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {\n  -webkit-user-select: none;\n  user-select: none;\n  color: transparent !important;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n}\n@media (forced-colors: active) {\n  .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,\n  .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder {\n    opacity: 0;\n  }\n}\n.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,\n.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {\n  -webkit-user-select: none;\n  user-select: none;\n  color: transparent !important;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n}\n@media (forced-colors: active) {\n  .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,\n  .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder {\n    opacity: 0;\n  }\n}\n._mat-animation-noopable .mat-date-range-input-inner::placeholder {\n  transition: none;\n}\n._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder {\n  transition: none;\n}\n._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder {\n  transition: none;\n}\n._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder {\n  transition: none;\n}\n.mat-date-range-input-mirror {\n  -webkit-user-select: none;\n  user-select: none;\n  visibility: hidden;\n  white-space: nowrap;\n  display: inline-block;\n  min-width: 2px;\n}\n.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix {\n  width: 200px;\n}\n/*# sourceMappingURL=date-range-input.css.map */\n"] }]
  }], () => [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: ControlContainer, decorators: [{
    type: Optional
  }, {
    type: Self
  }, {
    type: Inject,
    args: [ControlContainer]
  }] }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [MAT_FORM_FIELD]
  }] }], { rangePicker: [{
    type: Input
  }], required: [{
    type: Input
  }], dateFilter: [{
    type: Input
  }], min: [{
    type: Input
  }], max: [{
    type: Input
  }], disabled: [{
    type: Input
  }], separator: [{
    type: Input
  }], comparisonStart: [{
    type: Input
  }], comparisonEnd: [{
    type: Input
  }], _startInput: [{
    type: ContentChild,
    args: [NgxMatStartDate]
  }], _endInput: [{
    type: ContentChild,
    args: [NgxMatEndDate]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatDateRangeInput, { className: "NgxMatDateRangeInput", filePath: "projects/datetime-picker-v2/src/lib/date-range-input.ts", lineNumber: 77 });
})();

// node_modules/@angular/animations/fesm2022/animations.mjs
var _AnimationBuilder = class _AnimationBuilder {
};
__publicField(_AnimationBuilder, "\u0275fac", function AnimationBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimationBuilder)();
});
__publicField(_AnimationBuilder, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AnimationBuilder,
  factory: () => (() => inject(BrowserAnimationBuilder))(),
  providedIn: "root"
}));
var AnimationBuilder = _AnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var _BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  constructor(rootRenderer, doc) {
    super();
    __publicField(this, "animationModuleType", inject(ANIMATION_MODULE_TYPE, {
      optional: true
    }));
    __publicField(this, "_nextAnimationId", 0);
    __publicField(this, "_renderer");
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
};
__publicField(_BrowserAnimationBuilder, "\u0275fac", function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
});
__publicField(_BrowserAnimationBuilder, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _BrowserAnimationBuilder,
  factory: _BrowserAnimationBuilder.\u0275fac,
  providedIn: "root"
}));
var BrowserAnimationBuilder = _BrowserAnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    __publicField(this, "_id");
    __publicField(this, "_renderer");
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  constructor(id, element, options, _renderer) {
    __publicField(this, "id");
    __publicField(this, "element");
    __publicField(this, "_renderer");
    __publicField(this, "parentPlayer", null);
    __publicField(this, "_started", false);
    __publicField(this, "totalTime", 0);
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, "@@".concat(this.id, ":").concat(eventName), callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    var _a, _b, _c, _d;
    return (_d = (_c = (_b = (_a = unwrapAnimationRenderer(this._renderer)) == null ? void 0 : _a.engine) == null ? void 0 : _b.players[this.id]) == null ? void 0 : _c.getPosition()) != null ? _d : 0;
  }
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, "@@".concat(id, ":").concat(command), args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// projects/datetime-picker-v2/src/lib/datepicker-animations.ts
var ngxMatDatepickerAnimations = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: trigger("transformPanel", [
    transition("void => enter-dropdown", animate("120ms cubic-bezier(0, 0, 0.2, 1)", keyframes([
      style({ opacity: 0, transform: "scale(1, 0.8)" }),
      style({ opacity: 1, transform: "scale(1, 1)" })
    ]))),
    transition("void => enter-dialog", animate("150ms cubic-bezier(0, 0, 0.2, 1)", keyframes([
      style({ opacity: 0, transform: "scale(0.7)" }),
      style({ transform: "none", opacity: 1 })
    ]))),
    transition("* => void", animate("100ms linear", style({ opacity: 0 })))
  ]),
  /** Fades in the content of the calendar. */
  fadeInCalendar: trigger("fadeInCalendar", [
    state("void", style({ opacity: 0 })),
    state("enter", style({ opacity: 1 })),
    // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
    // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
    transition("void => *", animate("120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"))
  ])
};

// projects/datetime-picker-v2/src/lib/datepicker-base.ts
function NgxMatDatepickerContent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "ngx-mat-timepicker", 7);
    \u0275\u0275twoWayListener("ngModelChange", function NgxMatDatepickerContent_ng_container_2_div_1_Template_ngx_mat_timepicker_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1._modelTime, $event) || (ctx_r1._modelTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NgxMatDatepickerContent_ng_container_2_div_1_Template_ngx_mat_timepicker_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimeChanged($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("disable-seconds", !ctx_r1.datepicker._showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("showSpinners", ctx_r1.datepicker._showSpinners)("showSeconds", ctx_r1.datepicker._showSeconds)("disabled", ctx_r1.datepicker._disabled || !ctx_r1._modelTime)("stepHour", ctx_r1.datepicker._stepHour)("stepMinute", ctx_r1.datepicker._stepMinute)("stepSecond", ctx_r1.datepicker._stepSecond);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1._modelTime);
    \u0275\u0275property("color", ctx_r1.datepicker._color)("enableMeridian", ctx_r1.datepicker._enableMeridian)("disableMinute", ctx_r1.datepicker._disableMinute);
  }
}
function NgxMatDatepickerContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NgxMatDatepickerContent_ng_container_2_div_1_Template, 2, 12, "div", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.datepicker._hideTime);
  }
}
function NgxMatDatepickerContent_ng_template_3_Template(rf, ctx) {
}
var datepickerUid = 0;
var NGX_MAT_DATEPICKER_SCROLL_STRATEGY = new InjectionToken("ngx-mat-datepicker-scroll-strategy");
function NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: NGX_MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
var __NgxMatDatepickerContentBase = class __NgxMatDatepickerContentBase {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
};
__NgxMatDatepickerContentBase.\u0275fac = function _NgxMatDatepickerContentBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __NgxMatDatepickerContentBase)(\u0275\u0275directiveInject(ElementRef));
};
__NgxMatDatepickerContentBase.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: __NgxMatDatepickerContentBase, inputs: { color: "color" } });
var _NgxMatDatepickerContentBase = __NgxMatDatepickerContentBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_NgxMatDatepickerContentBase, [{
    type: Directive
  }], () => [{ type: ElementRef }], { color: [{
    type: Input
  }] });
})();
var _NgxMatDatepickerContent = class _NgxMatDatepickerContent extends _NgxMatDatepickerContentBase {
  get isViewMonth() {
    if (!this._calendar || this._calendar.currentView == null)
      return true;
    return this._calendar.currentView == "month";
  }
  constructor(elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._globalModel = _globalModel;
    this._dateAdapter = _dateAdapter;
    this._rangeSelectionStrategy = _rangeSelectionStrategy;
    this._subscriptions = new Subscription();
    this._animationDone = new Subject();
    this._isAnimating = false;
    this._actionsPortal = null;
    this._closeButtonText = intl.closeCalendarLabel;
  }
  ngOnInit() {
    this._animationState = this.datepicker.touchUi ? "enter-dialog" : "enter-dropdown";
  }
  ngAfterViewInit() {
    this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    }));
    this._calendar.focusActiveCell();
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this._animationDone.complete();
  }
  onTimeChanged(selectedDateWithTime) {
    const userEvent = {
      value: selectedDateWithTime,
      event: null
    };
    this._updateUserSelectionWithCalendarUserEvent(userEvent);
  }
  _handleUserSelection(event) {
    this._updateUserSelectionWithCalendarUserEvent(event);
    if (this.datepicker.hideTime) {
      if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
        this.datepicker.close();
      }
    }
  }
  _updateUserSelectionWithCalendarUserEvent(event) {
    const selection = this._model.selection;
    const value = event.value;
    const isRange = selection instanceof NgxDateRange;
    if (isRange && this._rangeSelectionStrategy) {
      const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
      this._model.updateSelection(newSelection, this);
    } else {
      const isSameTime = this._dateAdapter.isSameTime(selection, value);
      const isSameDate = this._dateAdapter.sameDate(value, selection);
      const isSame = isSameDate && isSameTime;
      if (value && (isRange || !isSame)) {
        this._model.add(value);
      }
    }
  }
  _handleUserDragDrop(event) {
    this._model.updateSelection(event.value, this);
  }
  _startExitAnimation() {
    this._animationState = "void";
    this._changeDetectorRef.markForCheck();
  }
  _handleAnimationEvent(event) {
    this._isAnimating = event.phaseName === "start";
    if (!this._isAnimating) {
      this._animationDone.next();
    }
  }
  _getSelected() {
    this._modelTime = this._model.selection;
    return this._model.selection;
  }
  /** Applies the current pending selection to the global model. */
  _applyPendingSelection() {
    if (this._model !== this._globalModel) {
      this._globalModel.updateSelection(this._model.selection, this);
    }
  }
  /**
   * Assigns a new portal containing the datepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
   * necessary if the portal is assigned during initialization, but it may be required if it's
   * added at a later point.
   */
  _assignActions(portal, forceRerender) {
    this._model = portal ? this._globalModel.clone() : this._globalModel;
    this._actionsPortal = portal;
    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
};
_NgxMatDatepickerContent.\u0275fac = function NgxMatDatepickerContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerContent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgxMatDateSelectionModel), \u0275\u0275directiveInject(NgxMatDateAdapter), \u0275\u0275directiveInject(NGX_MAT_DATE_RANGE_SELECTION_STRATEGY, 8), \u0275\u0275directiveInject(NgxMatDatepickerIntl));
};
_NgxMatDatepickerContent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatDatepickerContent, selectors: [["ngx-mat-datepicker-content"]], viewQuery: function NgxMatDatepickerContent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(NgxMatCalendar, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._calendar = _t.first);
  }
}, hostAttrs: ["role", "dialog", "aria-modal", "true", 1, "mat-datepicker-content"], hostVars: 13, hostBindings: function NgxMatDatepickerContent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275syntheticHostListener("@transformPanel.start", function NgxMatDatepickerContent_animation_transformPanel_start_HostBindingHandler($event) {
      return ctx._handleAnimationEvent($event);
    })("@transformPanel.done", function NgxMatDatepickerContent_animation_transformPanel_done_HostBindingHandler($event) {
      return ctx._handleAnimationEvent($event);
    });
  }
  if (rf & 2) {
    \u0275\u0275syntheticHostProperty("@transformPanel", ctx._animationState);
    \u0275\u0275classProp("mat-datepicker-content-touch", ctx.datepicker.touchUi)("mat-datepicker-content-touch-with-time", !ctx.datepicker.hideTime)("mat-app-background", true)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
  }
}, inputs: { color: "color" }, exportAs: ["ngxMatDatepickerContent"], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 28, consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop", "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], [4, "ngIf"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "focus", "blur", "click"], ["class", "time-container", 3, "disable-seconds", 4, "ngIf"], [1, "time-container"], [3, "ngModelChange", "showSpinners", "showSeconds", "disabled", "stepHour", "stepMinute", "stepSecond", "ngModel", "color", "enableMeridian", "disableMinute"]], template: function NgxMatDatepickerContent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "ngx-mat-calendar", 1);
    \u0275\u0275listener("yearSelected", function NgxMatDatepickerContent_Template_ngx_mat_calendar_yearSelected_1_listener($event) {
      return ctx.datepicker._selectYear($event);
    })("monthSelected", function NgxMatDatepickerContent_Template_ngx_mat_calendar_monthSelected_1_listener($event) {
      return ctx.datepicker._selectMonth($event);
    })("viewChanged", function NgxMatDatepickerContent_Template_ngx_mat_calendar_viewChanged_1_listener($event) {
      return ctx.datepicker._viewChanged($event);
    })("_userSelection", function NgxMatDatepickerContent_Template_ngx_mat_calendar__userSelection_1_listener($event) {
      return ctx._handleUserSelection($event);
    })("_userDragDrop", function NgxMatDatepickerContent_Template_ngx_mat_calendar__userDragDrop_1_listener($event) {
      return ctx._handleUserDragDrop($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, NgxMatDatepickerContent_ng_container_2_Template, 2, 1, "ng-container", 2)(3, NgxMatDatepickerContent_ng_template_3_Template, 0, 0, "ng-template", 3);
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("focus", function NgxMatDatepickerContent_Template_button_focus_4_listener() {
      return ctx._closeButtonFocused = true;
    })("blur", function NgxMatDatepickerContent_Template_button_blur_4_listener() {
      return ctx._closeButtonFocused = false;
    })("click", function NgxMatDatepickerContent_Template_button_click_4_listener() {
      return ctx.datepicker.close();
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275classProp("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", ctx._actionsPortal)("mat-datepicker-content-container-with-time", !ctx.datepicker._hideTime);
    \u0275\u0275attribute("aria-modal", true)("aria-labelledby", (tmp_4_0 = ctx._dialogLabelId) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : void 0);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter")("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isViewMonth);
    \u0275\u0275advance();
    \u0275\u0275property("cdkPortalOutlet", ctx._actionsPortal);
    \u0275\u0275advance();
    \u0275\u0275classProp("cdk-visually-hidden", !ctx._closeButtonFocused);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx._closeButtonText, " ");
  }
}, dependencies: [NgClass, NgIf, MatButton, CdkTrapFocus, CdkPortalOutlet, NgControlStatus, NgModel, NgxMatTimepickerComponent, NgxMatCalendar], styles: ['/* projects/datetime-picker-v2/src/lib/datepicker-content.scss */\n.mat-datepicker-content {\n  display: block;\n  border-radius: 4px;\n}\n.mat-datepicker-content .mat-calendar {\n  width: 296px;\n  height: 354px;\n}\n.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {\n  height: auto;\n}\n.mat-datepicker-content .mat-datepicker-close-button {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 8px;\n}\n.ng-animating .mat-datepicker-content .mat-datepicker-close-button {\n  display: none;\n}\n.mat-datepicker-content-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 6px;\n  margin-top: 0.2rem;\n}\n.time-container {\n  display: flex;\n  position: relative;\n  padding-top: 5px;\n  justify-content: center;\n}\n.time-container.disable-seconds .ngx-mat-timepicker .table {\n  margin-left: 9px;\n}\n.time-container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-datepicker-content-touch {\n  display: block;\n  max-height: 90vh;\n  position: relative;\n  overflow: visible;\n}\n.mat-datepicker-content-touch .mat-datepicker-content-container {\n  min-height: 312px;\n  max-height: 815px;\n  min-width: 250px;\n  max-width: 750px;\n}\n.mat-datepicker-content-touch .mat-calendar {\n  width: 100%;\n  height: auto;\n}\n@media all and (orientation: landscape) {\n  .mat-datepicker-content-touch .mat-datepicker-content-container {\n    width: 64vh;\n    height: 90vh;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time {\n    height: auto;\n  }\n}\n@media all and (orientation: portrait) {\n  .mat-datepicker-content-touch {\n    max-height: 100vh;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container {\n    width: 80vw;\n    height: 100vw;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time {\n    height: auto;\n    max-height: 870px;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time.mat-datepicker-content-container-with-actions {\n    max-height: none !important;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {\n    height: 115vw;\n  }\n}\n/*# sourceMappingURL=datepicker-content.css.map */\n'], encapsulation: 2, data: { animation: [
  ngxMatDatepickerAnimations.transformPanel,
  ngxMatDatepickerAnimations.fadeInCalendar
] }, changeDetection: 0 });
var NgxMatDatepickerContent = _NgxMatDatepickerContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerContent, [{
    type: Component,
    args: [{ selector: "ngx-mat-datepicker-content", host: {
      class: "mat-datepicker-content",
      "[@transformPanel]": "_animationState",
      "(@transformPanel.start)": "_handleAnimationEvent($event)",
      "(@transformPanel.done)": "_handleAnimationEvent($event)",
      "[class.mat-datepicker-content-touch]": "datepicker.touchUi",
      "[class.mat-datepicker-content-touch-with-time]": "!datepicker.hideTime",
      "[class.mat-app-background]": "true",
      "[class.mat-primary]": 'color === "primary"',
      "[class.mat-accent]": 'color === "accent"',
      "[class.mat-warn]": 'color === "warn"',
      role: "dialog",
      "aria-modal": "true"
    }, animations: [
      ngxMatDatepickerAnimations.transformPanel,
      ngxMatDatepickerAnimations.fadeInCalendar
    ], exportAs: "ngxMatDatepickerContent", encapsulation: ViewEncapsulation.None, inputs: ["color"], changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: '<div\r\n  cdkTrapFocus\r\n  role="dialog"\r\n  [attr.aria-modal]="true"\r\n  [attr.aria-labelledby]="_dialogLabelId ?? undefined"\r\n  class="mat-datepicker-content-container"\r\n  [class.mat-datepicker-content-container-with-custom-header]="datepicker.calendarHeaderComponent"\r\n  [class.mat-datepicker-content-container-with-actions]="_actionsPortal"\r\n  [class.mat-datepicker-content-container-with-time]="!datepicker._hideTime"\r\n>\r\n  <ngx-mat-calendar\r\n    [id]="datepicker.id"\r\n    [ngClass]="datepicker.panelClass"\r\n    [startAt]="datepicker.startAt"\r\n    [startView]="datepicker.startView"\r\n    [minDate]="datepicker._getMinDate()"\r\n    [maxDate]="datepicker._getMaxDate()"\r\n    [dateFilter]="datepicker._getDateFilter()"\r\n    [headerComponent]="datepicker.calendarHeaderComponent"\r\n    [selected]="_getSelected()"\r\n    [dateClass]="datepicker.dateClass"\r\n    [comparisonStart]="comparisonStart"\r\n    [comparisonEnd]="comparisonEnd"\r\n    [@fadeInCalendar]="\'enter\'"\r\n    [startDateAccessibleName]="startDateAccessibleName"\r\n    [endDateAccessibleName]="endDateAccessibleName"\r\n    (yearSelected)="datepicker._selectYear($event)"\r\n    (monthSelected)="datepicker._selectMonth($event)"\r\n    (viewChanged)="datepicker._viewChanged($event)"\r\n    (_userSelection)="_handleUserSelection($event)"\r\n    (_userDragDrop)="_handleUserDragDrop($event)"\r\n  ></ngx-mat-calendar>\r\n\r\n  <ng-container *ngIf="isViewMonth">\r\n    <div\r\n      *ngIf="!datepicker._hideTime"\r\n      class="time-container"\r\n      [class.disable-seconds]="!datepicker._showSeconds"\r\n    >\r\n      <ngx-mat-timepicker\r\n        [showSpinners]="datepicker._showSpinners"\r\n        [showSeconds]="datepicker._showSeconds"\r\n        [disabled]="datepicker._disabled || !_modelTime"\r\n        [stepHour]="datepicker._stepHour"\r\n        [stepMinute]="datepicker._stepMinute"\r\n        [stepSecond]="datepicker._stepSecond"\r\n        [(ngModel)]="_modelTime"\r\n        [color]="datepicker._color"\r\n        [enableMeridian]="datepicker._enableMeridian"\r\n        [disableMinute]="datepicker._disableMinute"\r\n        (ngModelChange)="onTimeChanged($event)"\r\n      >\r\n      </ngx-mat-timepicker>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-template [cdkPortalOutlet]="_actionsPortal"></ng-template>\r\n\r\n  <!-- Invisible close button for screen reader users. -->\r\n  <button\r\n    type="button"\r\n    mat-raised-button\r\n    class="mat-datepicker-close-button"\r\n    [class.cdk-visually-hidden]="!_closeButtonFocused"\r\n    (focus)="_closeButtonFocused = true"\r\n    (blur)="_closeButtonFocused = false"\r\n    (click)="datepicker.close()"\r\n  >\r\n    {{ _closeButtonText }}\r\n  </button>\r\n</div>\r\n', styles: ['/* projects/datetime-picker-v2/src/lib/datepicker-content.scss */\n.mat-datepicker-content {\n  display: block;\n  border-radius: 4px;\n}\n.mat-datepicker-content .mat-calendar {\n  width: 296px;\n  height: 354px;\n}\n.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {\n  height: auto;\n}\n.mat-datepicker-content .mat-datepicker-close-button {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 8px;\n}\n.ng-animating .mat-datepicker-content .mat-datepicker-close-button {\n  display: none;\n}\n.mat-datepicker-content-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 6px;\n  margin-top: 0.2rem;\n}\n.time-container {\n  display: flex;\n  position: relative;\n  padding-top: 5px;\n  justify-content: center;\n}\n.time-container.disable-seconds .ngx-mat-timepicker .table {\n  margin-left: 9px;\n}\n.time-container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-datepicker-content-touch {\n  display: block;\n  max-height: 90vh;\n  position: relative;\n  overflow: visible;\n}\n.mat-datepicker-content-touch .mat-datepicker-content-container {\n  min-height: 312px;\n  max-height: 815px;\n  min-width: 250px;\n  max-width: 750px;\n}\n.mat-datepicker-content-touch .mat-calendar {\n  width: 100%;\n  height: auto;\n}\n@media all and (orientation: landscape) {\n  .mat-datepicker-content-touch .mat-datepicker-content-container {\n    width: 64vh;\n    height: 90vh;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time {\n    height: auto;\n  }\n}\n@media all and (orientation: portrait) {\n  .mat-datepicker-content-touch {\n    max-height: 100vh;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container {\n    width: 80vw;\n    height: 100vw;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time {\n    height: auto;\n    max-height: 870px;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time.mat-datepicker-content-container-with-actions {\n    max-height: none !important;\n  }\n  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {\n    height: 115vw;\n  }\n}\n/*# sourceMappingURL=datepicker-content.css.map */\n'] }]
  }], () => [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: NgxMatDateSelectionModel }, { type: NgxMatDateAdapter }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_RANGE_SELECTION_STRATEGY]
  }] }, { type: NgxMatDatepickerIntl }], { _calendar: [{
    type: ViewChild,
    args: [NgxMatCalendar]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatDatepickerContent, { className: "NgxMatDatepickerContent", filePath: "projects/datetime-picker-v2/src/lib/datepicker-base.ts", lineNumber: 152 });
})();
var _NgxMatDatepickerBase = class _NgxMatDatepickerBase {
  /** The date to open the calendar to initially. */
  get startAt() {
    return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** Color palette to use on the datepicker's calendar. */
  get color() {
    return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : void 0);
  }
  set color(value) {
    this._color = value;
  }
  /**
   * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
   * than a dropdown and elements have more padding to allow for bigger touch targets.
   */
  get touchUi() {
    return this._touchUi;
  }
  set touchUi(value) {
    this._touchUi = coerceBooleanProperty(value);
  }
  get hideTime() {
    return this._hideTime;
  }
  set hideTime(value) {
    this._hideTime = coerceBooleanProperty(value);
  }
  /** Whether the datepicker pop-up should be disabled. */
  get disabled() {
    return this._disabled === void 0 && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this.stateChanges.next(void 0);
    }
  }
  /**
   * Whether to restore focus to the previously-focused element when the calendar is closed.
   * Note that automatic focus restoration is an accessibility feature and it is recommended that
   * you provide your own equivalent, if you decide to turn it off.
   */
  get restoreFocus() {
    return this._restoreFocus;
  }
  set restoreFocus(value) {
    this._restoreFocus = coerceBooleanProperty(value);
  }
  /**
   * Classes to be passed to the date picker panel.
   * Supports string and string array values, similar to `ngClass`.
   */
  get panelClass() {
    return this._panelClass;
  }
  set panelClass(value) {
    this._panelClass = coerceStringArray(value);
  }
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    coerceBooleanProperty(value) ? this.open() : this.close();
  }
  /** Whether the timepicker'spinners is shown. */
  get showSpinners() {
    return this._showSpinners;
  }
  set showSpinners(value) {
    this._showSpinners = value;
  }
  /** Whether the second part is disabled. */
  get showSeconds() {
    return this._showSeconds;
  }
  set showSeconds(value) {
    this._showSeconds = value;
  }
  /** Step hour */
  get stepHour() {
    return this._stepHour;
  }
  set stepHour(value) {
    this._stepHour = value;
  }
  /** Step minute */
  get stepMinute() {
    return this._stepMinute;
  }
  set stepMinute(value) {
    this._stepMinute = value;
  }
  /** Step second */
  get stepSecond() {
    return this._stepSecond;
  }
  set stepSecond(value) {
    this._stepSecond = value;
  }
  /** Enable meridian */
  get enableMeridian() {
    return this._enableMeridian;
  }
  set enableMeridian(value) {
    this._enableMeridian = value;
  }
  /** disable minute */
  get disableMinute() {
    return this._disableMinute;
  }
  set disableMinute(value) {
    this._disableMinute = value;
  }
  /** Step second */
  get defaultTime() {
    return this._defaultTime;
  }
  set defaultTime(value) {
    this._defaultTime = value;
  }
  /** The minimum selectable date. */
  _getMinDate() {
    return this.datepickerInput && this.datepickerInput.min;
  }
  /** The maximum selectable date. */
  _getMaxDate() {
    return this.datepickerInput && this.datepickerInput.max;
  }
  _getDateFilter() {
    return this.datepickerInput && this.datepickerInput.dateFilter;
  }
  constructor(_overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _model) {
    this._overlay = _overlay;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._model = _model;
    this._inputStateChanges = Subscription.EMPTY;
    this._document = inject(DOCUMENT);
    this.startView = "month";
    this._touchUi = false;
    this._hideTime = false;
    this.xPosition = "start";
    this.yPosition = "below";
    this._restoreFocus = true;
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.viewChanged = new EventEmitter(true);
    this.openedStream = new EventEmitter();
    this.closedStream = new EventEmitter();
    this._opened = false;
    this._showSpinners = true;
    this._showSeconds = false;
    this._stepHour = DEFAULT_STEP;
    this._stepMinute = DEFAULT_STEP;
    this._stepSecond = DEFAULT_STEP;
    this._enableMeridian = false;
    this.id = "mat-datepicker-".concat(datepickerUid++);
    this._focusedElementBeforeOpen = null;
    this._backdropHarnessClass = "".concat(this.id, "-backdrop");
    this.stateChanges = new Subject();
    if (!this._dateAdapter) {
      throw createMissingDateImplError2("NgxMatDateAdapter");
    }
    this._scrollStrategy = scrollStrategy;
  }
  ngOnChanges(changes) {
    const positionChange = changes["xPosition"] || changes["yPosition"];
    if (positionChange && !positionChange.firstChange && this._overlayRef) {
      const positionStrategy = this._overlayRef.getConfig().positionStrategy;
      if (positionStrategy instanceof FlexibleConnectedPositionStrategy) {
        this._setConnectedPositions(positionStrategy);
        if (this.opened) {
          this._overlayRef.updatePosition();
        }
      }
    }
    this.stateChanges.next(void 0);
  }
  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this.stateChanges.complete();
  }
  /** Selects the given date */
  select(date) {
    this._model.add(date);
  }
  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Emits selected month in year view */
  _selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Emits changed view */
  _viewChanged(view) {
    this.viewChanged.emit(view);
  }
  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   * @returns Selection model that the input should hook itself up to.
   */
  registerInput(input) {
    if (this.datepickerInput) {
      throw Error("A MatDatepicker can only be associated with a single input.");
    }
    this._inputStateChanges.unsubscribe();
    this.datepickerInput = input;
    this._inputStateChanges = input.stateChanges.subscribe(() => this.stateChanges.next(void 0));
    return this._model;
  }
  /**
   * Registers a portal containing action buttons with the datepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal) {
    var _a;
    if (this._actionsPortal) {
      throw Error("A MatDatepicker can only be associated with a single actions row.");
    }
    this._actionsPortal = portal;
    (_a = this._componentRef) == null ? void 0 : _a.instance._assignActions(portal, true);
  }
  /**
   * Removes a portal containing action buttons from the datepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal) {
    var _a;
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      (_a = this._componentRef) == null ? void 0 : _a.instance._assignActions(null, true);
    }
  }
  /** Open the calendar. */
  open() {
    var _a;
    if (this._opened || this.disabled || ((_a = this._componentRef) == null ? void 0 : _a.instance._isAnimating)) {
      return;
    }
    if (!this.datepickerInput) {
      throw Error("Attempted to open an MatDatepicker with no associated input.");
    }
    this._focusedElementBeforeOpen = _getFocusedElementPierceShadowDom();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Close the calendar. */
  close() {
    var _a;
    if (!this._opened || ((_a = this._componentRef) == null ? void 0 : _a.instance._isAnimating)) {
      return;
    }
    const canRestoreFocus = this._restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === "function";
    const completeClose = () => {
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };
    if (this._componentRef) {
      const { instance, location } = this._componentRef;
      instance._startExitAnimation();
      instance._animationDone.pipe(take(1)).subscribe(() => {
        const activeElement = this._document.activeElement;
        if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
          this._focusedElementBeforeOpen.focus();
        }
        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
    }
    if (canRestoreFocus) {
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /** Applies the current pending selection on the overlay to the model. */
  _applyPendingSelection() {
    var _a, _b;
    (_b = (_a = this._componentRef) == null ? void 0 : _a.instance) == null ? void 0 : _b._applyPendingSelection();
  }
  /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
  _forwardContentValues(instance) {
    instance.datepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
    instance._assignActions(this._actionsPortal, false);
  }
  /** Opens the overlay with the calendar. */
  _openOverlay() {
    this._destroyOverlay();
    const isDialog = this.touchUi;
    const portal = new ComponentPortal(NgxMatDatepickerContent, this._viewContainerRef);
    const overlayRef = this._overlayRef = this._overlay.create(new OverlayConfig({
      positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
      hasBackdrop: true,
      backdropClass: [
        isDialog ? "cdk-overlay-dark-backdrop" : "mat-overlay-transparent-backdrop",
        this._backdropHarnessClass
      ],
      direction: this._dir,
      scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
      panelClass: "mat-datepicker-".concat(isDialog ? "dialog" : "popup")
    }));
    this._getCloseStream(overlayRef).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
    overlayRef.keydownEvents().subscribe((event) => {
      const keyCode = event.keyCode;
      if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === PAGE_UP || keyCode === PAGE_DOWN) {
        event.preventDefault();
      }
    });
    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);
    if (!isDialog) {
      this._ngZone.onStable.pipe(take(1)).subscribe(() => overlayRef.updatePosition());
    }
  }
  /** Destroys the current overlay. */
  _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDialogStrategy() {
    return this._overlay.position().global().centerHorizontally().centerVertically();
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDropdownStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
    return this._setConnectedPositions(strategy);
  }
  /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
  _setConnectedPositions(strategy) {
    const primaryX = this.xPosition === "end" ? "end" : "start";
    const secondaryX = primaryX === "start" ? "end" : "start";
    const primaryY = this.yPosition === "above" ? "bottom" : "top";
    const secondaryY = primaryY === "top" ? "bottom" : "top";
    return strategy.withPositions([
      {
        originX: primaryX,
        originY: secondaryY,
        overlayX: primaryX,
        overlayY: primaryY
      },
      {
        originX: primaryX,
        originY: primaryY,
        overlayX: primaryX,
        overlayY: secondaryY
      },
      {
        originX: secondaryX,
        originY: secondaryY,
        overlayX: secondaryX,
        overlayY: primaryY
      },
      {
        originX: secondaryX,
        originY: primaryY,
        overlayX: secondaryX,
        overlayY: secondaryY
      }
    ]);
  }
  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  _getCloseStream(overlayRef) {
    const ctrlShiftMetaModifiers = [
      "ctrlKey",
      "shiftKey",
      "metaKey"
    ];
    return merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((event) => {
      return event.keyCode === ESCAPE && !hasModifierKey(event) || this.datepickerInput && hasModifierKey(event, "altKey") && event.keyCode === UP_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    })));
  }
};
_NgxMatDatepickerBase.\u0275fac = function NgxMatDatepickerBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerBase)(\u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(NGX_MAT_DATEPICKER_SCROLL_STRATEGY), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NgxMatDateSelectionModel));
};
_NgxMatDatepickerBase.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatDatepickerBase, inputs: { calendarHeaderComponent: "calendarHeaderComponent", startAt: "startAt", startView: "startView", color: "color", touchUi: "touchUi", hideTime: "hideTime", disabled: "disabled", xPosition: "xPosition", yPosition: "yPosition", restoreFocus: "restoreFocus", dateClass: "dateClass", panelClass: "panelClass", opened: "opened", showSpinners: "showSpinners", showSeconds: "showSeconds", stepHour: "stepHour", stepMinute: "stepMinute", stepSecond: "stepSecond", enableMeridian: "enableMeridian", disableMinute: "disableMinute", defaultTime: "defaultTime" }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", openedStream: "opened", closedStream: "closed" }, features: [\u0275\u0275NgOnChangesFeature] });
var NgxMatDatepickerBase = _NgxMatDatepickerBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerBase, [{
    type: Directive
  }], () => [{ type: Overlay }, { type: NgZone }, { type: ViewContainerRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [NGX_MAT_DATEPICKER_SCROLL_STRATEGY]
  }] }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: Directionality, decorators: [{
    type: Optional
  }] }, { type: NgxMatDateSelectionModel }], { calendarHeaderComponent: [{
    type: Input
  }], startAt: [{
    type: Input
  }], startView: [{
    type: Input
  }], color: [{
    type: Input
  }], touchUi: [{
    type: Input
  }], hideTime: [{
    type: Input
  }], disabled: [{
    type: Input
  }], xPosition: [{
    type: Input
  }], yPosition: [{
    type: Input
  }], restoreFocus: [{
    type: Input
  }], yearSelected: [{
    type: Output
  }], monthSelected: [{
    type: Output
  }], viewChanged: [{
    type: Output
  }], dateClass: [{
    type: Input
  }], openedStream: [{
    type: Output,
    args: ["opened"]
  }], closedStream: [{
    type: Output,
    args: ["closed"]
  }], panelClass: [{
    type: Input
  }], opened: [{
    type: Input
  }], showSpinners: [{
    type: Input
  }], showSeconds: [{
    type: Input
  }], stepHour: [{
    type: Input
  }], stepMinute: [{
    type: Input
  }], stepSecond: [{
    type: Input
  }], enableMeridian: [{
    type: Input
  }], disableMinute: [{
    type: Input
  }], defaultTime: [{
    type: Input
  }] });
})();

// projects/datetime-picker-v2/src/lib/date-range-picker.ts
var _NgxMatDateRangePicker = class _NgxMatDateRangePicker extends NgxMatDatepickerBase {
  _forwardContentValues(instance) {
    super._forwardContentValues(instance);
    const input = this.datepickerInput;
    if (input) {
      instance.comparisonStart = input.comparisonStart;
      instance.comparisonEnd = input.comparisonEnd;
      instance.startDateAccessibleName = input._getStartDateAccessibleName();
      instance.endDateAccessibleName = input._getEndDateAccessibleName();
    }
  }
};
_NgxMatDateRangePicker.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NgxMatDateRangePicker_BaseFactory;
  return function NgxMatDateRangePicker_Factory(__ngFactoryType__) {
    return (\u0275NgxMatDateRangePicker_BaseFactory || (\u0275NgxMatDateRangePicker_BaseFactory = \u0275\u0275getInheritedFactory(_NgxMatDateRangePicker)))(__ngFactoryType__ || _NgxMatDateRangePicker);
  };
})();
_NgxMatDateRangePicker.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatDateRangePicker, selectors: [["ngx-mat-date-range-picker"]], exportAs: ["ngxMatDateRangePicker"], standalone: false, features: [\u0275\u0275ProvidersFeature([
  NGX_MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
  NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER,
  { provide: NgxMatDatepickerBase, useExisting: _NgxMatDateRangePicker }
]), \u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function NgxMatDateRangePicker_Template(rf, ctx) {
}, encapsulation: 2, changeDetection: 0 });
var NgxMatDateRangePicker = _NgxMatDateRangePicker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDateRangePicker, [{
    type: Component,
    args: [{
      selector: "ngx-mat-date-range-picker",
      template: "",
      exportAs: "ngxMatDateRangePicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        NGX_MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
        NGX_MAT_CALENDAR_RANGE_STRATEGY_PROVIDER,
        { provide: NgxMatDatepickerBase, useExisting: NgxMatDateRangePicker }
      ],
      standalone: false
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatDateRangePicker, { className: "NgxMatDateRangePicker", filePath: "projects/datetime-picker-v2/src/lib/date-range-picker.ts", lineNumber: 34 });
})();

// projects/datetime-picker-v2/src/lib/datepicker.ts
var _NgxMatDatetimepicker = class _NgxMatDatetimepicker extends NgxMatDatepickerBase {
  get color() {
    return super.color;
  }
  set color(value) {
    super.color = value;
  }
};
_NgxMatDatetimepicker.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NgxMatDatetimepicker_BaseFactory;
  return function NgxMatDatetimepicker_Factory(__ngFactoryType__) {
    return (\u0275NgxMatDatetimepicker_BaseFactory || (\u0275NgxMatDatetimepicker_BaseFactory = \u0275\u0275getInheritedFactory(_NgxMatDatetimepicker)))(__ngFactoryType__ || _NgxMatDatetimepicker);
  };
})();
_NgxMatDatetimepicker.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatDatetimepicker, selectors: [["ngx-mat-datetime-picker"]], hostVars: 6, hostBindings: function NgxMatDatetimepicker_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
  }
}, inputs: { color: "color" }, exportAs: ["ngxMatDatetimePicker"], standalone: false, features: [\u0275\u0275ProvidersFeature([
  NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
  { provide: NgxMatDatepickerBase, useExisting: _NgxMatDatetimepicker }
]), \u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function NgxMatDatetimepicker_Template(rf, ctx) {
}, encapsulation: 2, changeDetection: 0 });
var NgxMatDatetimepicker = _NgxMatDatetimepicker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatetimepicker, [{
    type: Component,
    args: [{
      selector: "ngx-mat-datetime-picker",
      template: "",
      exportAs: "ngxMatDatetimePicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        NGX_MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
        { provide: NgxMatDatepickerBase, useExisting: NgxMatDatetimepicker }
      ],
      host: {
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"'
      },
      standalone: false
    }]
  }], null, { color: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatDatetimepicker, { className: "NgxMatDatetimepicker", filePath: "projects/datetime-picker-v2/src/lib/datepicker.ts", lineNumber: 35 });
})();

// projects/datetime-picker-v2/src/lib/datepicker-actions.ts
var _c05 = ["*"];
function NgxMatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var _NgxMatDatepickerApply = class _NgxMatDatepickerApply {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
  _applySelection() {
    this._datepicker._applyPendingSelection();
    this._datepicker.close();
  }
};
_NgxMatDatepickerApply.\u0275fac = function NgxMatDatepickerApply_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerApply)(\u0275\u0275directiveInject(NgxMatDatepickerBase));
};
_NgxMatDatepickerApply.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatDatepickerApply, selectors: [["", "ngxMatDatepickerApply", ""], ["", "ngxMatDateRangePickerApply", ""]], hostBindings: function NgxMatDatepickerApply_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function NgxMatDatepickerApply_click_HostBindingHandler() {
      return ctx._applySelection();
    });
  }
}, standalone: false });
var NgxMatDatepickerApply = _NgxMatDatepickerApply;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerApply, [{
    type: Directive,
    args: [{
      selector: "[ngxMatDatepickerApply], [ngxMatDateRangePickerApply]",
      host: { "(click)": "_applySelection()" },
      standalone: false
    }]
  }], () => [{ type: NgxMatDatepickerBase }], null);
})();
var _NgxMatDatepickerCancel = class _NgxMatDatepickerCancel {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
};
_NgxMatDatepickerCancel.\u0275fac = function NgxMatDatepickerCancel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerCancel)(\u0275\u0275directiveInject(NgxMatDatepickerBase));
};
_NgxMatDatepickerCancel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatDatepickerCancel, selectors: [["", "ngxMatDatepickerCancel", ""], ["", "ngxMatDateRangePickerCancel", ""]], hostBindings: function NgxMatDatepickerCancel_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function NgxMatDatepickerCancel_click_HostBindingHandler() {
      return ctx._datepicker.close();
    });
  }
}, standalone: false });
var NgxMatDatepickerCancel = _NgxMatDatepickerCancel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerCancel, [{
    type: Directive,
    args: [{
      selector: "[ngxMatDatepickerCancel], [ngxMatDateRangePickerCancel]",
      host: { "(click)": "_datepicker.close()" },
      standalone: false
    }]
  }], () => [{ type: NgxMatDatepickerBase }], null);
})();
var _NgxMatDatepickerActions = class _NgxMatDatepickerActions {
  constructor(_datepicker, _viewContainerRef) {
    this._datepicker = _datepicker;
    this._viewContainerRef = _viewContainerRef;
  }
  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    this._datepicker.registerActions(this._portal);
  }
  ngOnDestroy() {
    var _a;
    this._datepicker.removeActions(this._portal);
    if (this._portal && this._portal.isAttached) {
      (_a = this._portal) == null ? void 0 : _a.detach();
    }
  }
};
_NgxMatDatepickerActions.\u0275fac = function NgxMatDatepickerActions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerActions)(\u0275\u0275directiveInject(NgxMatDatepickerBase), \u0275\u0275directiveInject(ViewContainerRef));
};
_NgxMatDatepickerActions.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatDatepickerActions, selectors: [["ngx-mat-datepicker-actions"], ["ngx-mat-date-range-picker-actions"]], viewQuery: function NgxMatDatepickerActions_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(TemplateRef, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._template = _t.first);
  }
}, standalone: false, ngContentSelectors: _c05, decls: 1, vars: 0, consts: [[1, "mat-datepicker-actions"]], template: function NgxMatDatepickerActions_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275template(0, NgxMatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
  }
}, styles: ["/* projects/datetime-picker-v2/src/lib/datepicker-actions.scss */\n.mat-datepicker-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 8px;\n}\n.mat-datepicker-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 8px;\n}\n[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 0;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=datepicker-actions.css.map */\n"], encapsulation: 2, changeDetection: 0 });
var NgxMatDatepickerActions = _NgxMatDatepickerActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerActions, [{
    type: Component,
    args: [{ selector: "ngx-mat-datepicker-actions, ngx-mat-date-range-picker-actions", template: '\n    <ng-template>\n      <div class="mat-datepicker-actions">\n        <ng-content></ng-content>\n      </div>\n    </ng-template>\n  ', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: false, styles: ["/* projects/datetime-picker-v2/src/lib/datepicker-actions.scss */\n.mat-datepicker-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 8px;\n}\n.mat-datepicker-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 8px;\n}\n[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 0;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=datepicker-actions.css.map */\n"] }]
  }], () => [{ type: NgxMatDatepickerBase }, { type: ViewContainerRef }], { _template: [{
    type: ViewChild,
    args: [TemplateRef]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatDatepickerActions, { className: "NgxMatDatepickerActions", filePath: "projects/datetime-picker-v2/src/lib/datepicker-actions.ts", lineNumber: 60 });
})();

// projects/datetime-picker-v2/src/lib/datepicker-input.ts
var NGX_MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxMatDatepickerInput),
  multi: true
};
var NGX_MAT_DATEPICKER_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NgxMatDatepickerInput),
  multi: true
};
var _NgxMatDatepickerInput = class _NgxMatDatepickerInput extends NgxMatDatepickerInputBase {
  /** The datepicker that this input is associated with. */
  set ngxMatDatetimePicker(datepicker) {
    if (datepicker) {
      this._datepicker = datepicker;
      this._closedSubscription = datepicker.closedStream.subscribe(() => this._onTouched());
      this._registerModel(datepicker.registerInput(this));
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._validatorOnChange();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._validatorOnChange();
    }
  }
  /** Function that can be used to filter out dates within the datepicker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const wasMatchingValue = this._matchesFilter(this.value);
    this._dateFilter = value;
    if (this._matchesFilter(this.value) !== wasMatchingValue) {
      this._validatorOnChange();
    }
  }
  constructor(elementRef, dateAdapter, dateFormats, _formField) {
    super(elementRef, dateAdapter, dateFormats);
    this._formField = _formField;
    this._closedSubscription = Subscription.EMPTY;
    this._validator = Validators.compose(super._getValidators());
  }
  /**
   * Gets the element that the datepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    if (this._formField) {
      return this._formField.getLabelId();
    }
    return this._elementRef.nativeElement.getAttribute("aria-labelledby");
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the value at which the calendar should start. */
  getStartValue() {
    return this.value;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._closedSubscription.unsubscribe();
  }
  /** Opens the associated datepicker. */
  _openPopup() {
    if (this._datepicker) {
      this._datepicker.open();
    }
  }
  _getValueFromModel(modelValue) {
    return modelValue;
  }
  _assignValueToModel(value) {
    if (this._model) {
      this._model.updateSelection(value, this);
    }
  }
  /** Gets the input's minimum date. */
  _getMinDate() {
    return this._min;
  }
  /** Gets the input's maximum date. */
  _getMaxDate() {
    return this._max;
  }
  /** Gets the input's date filtering function. */
  _getDateFilter() {
    return this._dateFilter;
  }
  _shouldHandleChangeEvent(event) {
    return event.source !== this;
  }
};
_NgxMatDatepickerInput.\u0275fac = function NgxMatDatepickerInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerInput)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgxMatDateAdapter, 8), \u0275\u0275directiveInject(NGX_MAT_DATE_FORMATS, 8), \u0275\u0275directiveInject(MAT_FORM_FIELD, 8));
};
_NgxMatDatepickerInput.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatDatepickerInput, selectors: [["input", "ngxMatDatetimePicker", ""]], hostAttrs: [1, "mat-datepicker-input"], hostVars: 6, hostBindings: function NgxMatDatepickerInput_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("input", function NgxMatDatepickerInput_input_HostBindingHandler($event) {
      return ctx._onInput($event.target.value);
    })("change", function NgxMatDatepickerInput_change_HostBindingHandler() {
      return ctx._onChange();
    })("blur", function NgxMatDatepickerInput_blur_HostBindingHandler() {
      return ctx._onBlur();
    })("keydown", function NgxMatDatepickerInput_keydown_HostBindingHandler($event) {
      return ctx._onKeydown($event);
    });
  }
  if (rf & 2) {
    \u0275\u0275hostProperty("disabled", ctx.disabled);
    \u0275\u0275attribute("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
  }
}, inputs: { ngxMatDatetimePicker: "ngxMatDatetimePicker", min: "min", max: "max", dateFilter: [0, "matDatepickerFilter", "dateFilter"] }, exportAs: ["ngxMatDatepickerInput"], standalone: false, features: [\u0275\u0275ProvidersFeature([
  NGX_MAT_DATEPICKER_VALUE_ACCESSOR,
  NGX_MAT_DATEPICKER_VALIDATORS,
  { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: _NgxMatDatepickerInput }
]), \u0275\u0275InheritDefinitionFeature] });
var NgxMatDatepickerInput = _NgxMatDatepickerInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerInput, [{
    type: Directive,
    args: [{
      selector: "input[ngxMatDatetimePicker]",
      providers: [
        NGX_MAT_DATEPICKER_VALUE_ACCESSOR,
        NGX_MAT_DATEPICKER_VALIDATORS,
        { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: NgxMatDatepickerInput }
      ],
      host: {
        "class": "mat-datepicker-input",
        "[attr.aria-haspopup]": '_datepicker ? "dialog" : null',
        "[attr.aria-owns]": "(_datepicker?.opened && _datepicker.id) || null",
        "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
        "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "_datepicker ? _datepicker.id : null",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(blur)": "_onBlur()",
        "(keydown)": "_onKeydown($event)"
      },
      exportAs: "ngxMatDatepickerInput",
      standalone: false
    }]
  }], () => [{ type: ElementRef }, { type: NgxMatDateAdapter, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [NGX_MAT_DATE_FORMATS]
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [MAT_FORM_FIELD]
  }] }], { ngxMatDatetimePicker: [{
    type: Input
  }], min: [{
    type: Input
  }], max: [{
    type: Input
  }], dateFilter: [{
    type: Input,
    args: ["matDatepickerFilter"]
  }] });
})();

// projects/datetime-picker-v2/src/lib/datepicker-toggle.ts
var _c06 = ["button"];
var _c13 = [[["", "ngxMatDatepickerToggleIcon", ""]]];
var _c22 = ["[ngxMatDatepickerToggleIcon]"];
function NgxMatDatepickerToggle__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "path", 4);
    \u0275\u0275elementEnd();
  }
}
var _NgxMatDatepickerToggleIcon = class _NgxMatDatepickerToggleIcon {
};
_NgxMatDatepickerToggleIcon.\u0275fac = function NgxMatDatepickerToggleIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerToggleIcon)();
};
_NgxMatDatepickerToggleIcon.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatDatepickerToggleIcon, selectors: [["", "ngxMatDatepickerToggleIcon", ""]], standalone: false });
var NgxMatDatepickerToggleIcon = _NgxMatDatepickerToggleIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerToggleIcon, [{
    type: Directive,
    args: [{
      selector: "[ngxMatDatepickerToggleIcon]",
      standalone: false
    }]
  }], null, null);
})();
var _NgxMatDatepickerToggle = class _NgxMatDatepickerToggle {
  /** Whether the toggle button is disabled. */
  get disabled() {
    if (this._disabled === void 0 && this.datepicker) {
      return this.datepicker.disabled;
    }
    return !!this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }
  constructor(_intl, _changeDetectorRef, defaultTabIndex) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._stateChanges = Subscription.EMPTY;
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  ngOnChanges(changes) {
    if (changes["datepicker"]) {
      this._watchStateChanges();
    }
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  _open(event) {
    if (this.datepicker && !this.disabled) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : of();
    const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : of();
    const datepickerToggled = this.datepicker ? merge(this.datepicker.openedStream, this.datepicker.closedStream) : of();
    this._stateChanges.unsubscribe();
    this._stateChanges = merge(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
  }
};
_NgxMatDatepickerToggle.\u0275fac = function NgxMatDatepickerToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatepickerToggle)(\u0275\u0275directiveInject(NgxMatDatepickerIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275injectAttribute("tabindex"));
};
_NgxMatDatepickerToggle.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatDatepickerToggle, selectors: [["ngx-mat-datepicker-toggle"]], contentQueries: function NgxMatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuery(dirIndex, NgxMatDatepickerToggleIcon, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._customIcon = _t.first);
  }
}, viewQuery: function NgxMatDatepickerToggle_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c06, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._button = _t.first);
  }
}, hostAttrs: [1, "mat-datepicker-toggle"], hostVars: 8, hostBindings: function NgxMatDatepickerToggle_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function NgxMatDatepickerToggle_click_HostBindingHandler($event) {
      return ctx._open($event);
    });
  }
  if (rf & 2) {
    \u0275\u0275attribute("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
    \u0275\u0275classProp("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
  }
}, inputs: { datepicker: [0, "for", "datepicker"], tabIndex: "tabIndex", ariaLabel: [0, "aria-label", "ariaLabel"], disabled: "disabled", disableRipple: "disableRipple" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c22, decls: 4, vars: 5, consts: [["button", ""], ["mat-icon-button", "", "type", "button", 3, "disabled"], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]], template: function NgxMatDatepickerToggle_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c13);
    \u0275\u0275elementStart(0, "button", 1, 0);
    \u0275\u0275template(2, NgxMatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
    \u0275\u0275projection(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", ctx.disabled);
    \u0275\u0275attribute("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx._customIcon);
  }
}, dependencies: [NgIf, MatIconButton], styles: ["/* projects/datetime-picker-v2/src/lib/datepicker-toggle.scss */\n.mat-datepicker-toggle {\n  pointer-events: auto;\n}\n@media (forced-colors: active) {\n  .mat-datepicker-toggle-default-icon {\n    color: CanvasText;\n  }\n}\n/*# sourceMappingURL=datepicker-toggle.css.map */\n"], encapsulation: 2, changeDetection: 0 });
var NgxMatDatepickerToggle = _NgxMatDatepickerToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatepickerToggle, [{
    type: Component,
    args: [{ selector: "ngx-mat-datepicker-toggle", host: {
      class: "mat-datepicker-toggle",
      "[attr.tabindex]": "null",
      "[class.mat-datepicker-toggle-active]": "datepicker && datepicker.opened",
      "[class.mat-accent]": 'datepicker && datepicker.color === "accent"',
      "[class.mat-warn]": 'datepicker && datepicker.color === "warn"',
      // Used by the test harness to tie this toggle to its datepicker.
      "[attr.data-mat-calendar]": "datepicker ? datepicker.id : null",
      // Bind the `click` on the host, rather than the inner `button`, so that we can call
      // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
      // it so that the input doesn't get focused automatically by the form field (See #21836).
      "(click)": "_open($event)"
    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: '<button\r\n  #button\r\n  mat-icon-button\r\n  type="button"\r\n  [attr.aria-haspopup]="datepicker ? \'dialog\' : null"\r\n  [attr.aria-label]="ariaLabel || _intl.openCalendarLabel"\r\n  [attr.tabindex]="disabled ? -1 : tabIndex"\r\n  [disabled]="disabled"\r\n>\r\n  <svg\r\n    *ngIf="!_customIcon"\r\n    class="mat-datepicker-toggle-default-icon"\r\n    viewBox="0 0 24 24"\r\n    width="24px"\r\n    height="24px"\r\n    fill="currentColor"\r\n    focusable="false"\r\n  >\r\n    <path\r\n      d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"\r\n    />\r\n  </svg>\r\n\r\n  <ng-content select="[ngxMatDatepickerToggleIcon]"></ng-content>\r\n</button>\r\n', styles: ["/* projects/datetime-picker-v2/src/lib/datepicker-toggle.scss */\n.mat-datepicker-toggle {\n  pointer-events: auto;\n}\n@media (forced-colors: active) {\n  .mat-datepicker-toggle-default-icon {\n    color: CanvasText;\n  }\n}\n/*# sourceMappingURL=datepicker-toggle.css.map */\n"] }]
  }], () => [{ type: NgxMatDatepickerIntl }, { type: ChangeDetectorRef }, { type: void 0, decorators: [{
    type: Attribute,
    args: ["tabindex"]
  }] }], { datepicker: [{
    type: Input,
    args: ["for"]
  }], tabIndex: [{
    type: Input
  }], ariaLabel: [{
    type: Input,
    args: ["aria-label"]
  }], disabled: [{
    type: Input
  }], disableRipple: [{
    type: Input
  }], _customIcon: [{
    type: ContentChild,
    args: [NgxMatDatepickerToggleIcon]
  }], _button: [{
    type: ViewChild,
    args: ["button"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatDatepickerToggle, { className: "NgxMatDatepickerToggle", filePath: "projects/datetime-picker-v2/src/lib/datepicker-toggle.ts", lineNumber: 53 });
})();

// projects/datetime-picker-v2/src/lib/datepicker-module.ts
var _NgxMatDatetimePickerModule = class _NgxMatDatetimePickerModule {
};
_NgxMatDatetimePickerModule.\u0275fac = function NgxMatDatetimePickerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatDatetimePickerModule)();
};
_NgxMatDatetimePickerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NgxMatDatetimePickerModule });
_NgxMatDatetimePickerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  NgxMatDatepickerIntl,
  NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
], imports: [
  CommonModule,
  MatButtonModule,
  OverlayModule,
  A11yModule,
  PortalModule,
  FormsModule,
  ReactiveFormsModule,
  NgxMatTimepickerComponent,
  CdkScrollableModule
] });
var NgxMatDatetimePickerModule = _NgxMatDatetimePickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatDatetimePickerModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        MatButtonModule,
        OverlayModule,
        A11yModule,
        PortalModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatTimepickerComponent
      ],
      exports: [
        CdkScrollableModule,
        NgxMatCalendar,
        NgxMatCalendarBody,
        NgxMatDatetimepicker,
        NgxMatDatepickerContent,
        NgxMatDatepickerInput,
        NgxMatDatepickerToggle,
        NgxMatDatepickerToggleIcon,
        NgxMatMonthView,
        NgxMatYearView,
        NgxMatMultiYearView,
        NgxMatCalendarHeader,
        NgxMatDateRangeInput,
        NgxMatStartDate,
        NgxMatEndDate,
        NgxMatDateRangePicker,
        NgxMatDatepickerActions,
        NgxMatDatepickerCancel,
        NgxMatDatepickerApply,
        NgxMatTimepickerComponent
      ],
      declarations: [
        NgxMatCalendar,
        NgxMatCalendarBody,
        NgxMatDatetimepicker,
        NgxMatDatepickerContent,
        NgxMatDatepickerInput,
        NgxMatDatepickerToggle,
        NgxMatDatepickerToggleIcon,
        NgxMatMonthView,
        NgxMatYearView,
        NgxMatMultiYearView,
        NgxMatCalendarHeader,
        NgxMatDateRangeInput,
        NgxMatStartDate,
        NgxMatEndDate,
        NgxMatDateRangePicker,
        NgxMatDatepickerActions,
        NgxMatDatepickerCancel,
        NgxMatDatepickerApply
      ],
      providers: [
        NgxMatDatepickerIntl,
        NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
      ]
    }]
  }], null, null);
})();

export {
  MatCheckbox,
  MatCheckboxModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerComponent,
  NgxMatDatetimepicker,
  NgxMatDatepickerApply,
  NgxMatDatepickerCancel,
  NgxMatDatepickerActions,
  NgxMatDatepickerInput,
  NgxMatDatepickerToggleIcon,
  NgxMatDatepickerToggle,
  NgxMatDatetimePickerModule
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.10
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-E3JICQSM.js.map
