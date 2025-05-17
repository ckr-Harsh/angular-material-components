import {
  matDatepickerAnimations
} from "./chunk-SGMMUF4F.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  MAT_INPUT_VALUE_ACCESSOR,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MatPrefix,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  MatTab,
  MatTabGroup,
  NgxMatHighlightDirective,
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  PortalModule,
  SharedModule,
  TemplatePortal
} from "./chunk-DAIRKQZL.js";
import {
  A11yModule,
  ANIMATION_MODULE_TYPE,
  CdkScrollable,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  DOCUMENT,
  DOWN_ARROW,
  DefaultValueAccessor,
  Directionality,
  Directive,
  ESCAPE,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FocusTrapFactory,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InteractivityChecker,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatMiniFabButton,
  MaxValidator,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgZone,
  NumberValueAccessor,
  Optional,
  Output,
  Platform,
  ReactiveFormsModule,
  Renderer2,
  RouterModule,
  Subject,
  Subscription,
  TemplateRef,
  UP_ARROW,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  _IdGenerator,
  __publicField,
  __spreadProps,
  __spreadValues,
  _getFocusedElementPierceShadowDom,
  afterNextRender,
  coerceBooleanProperty,
  coerceNumberProperty,
  debounceTime,
  defer,
  distinctUntilChanged,
  filter,
  forwardRef,
  hasModifierKey,
  inject,
  merge,
  of,
  setClassMetadata,
  startWith,
  take,
  takeUntil,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  constructor() {
    /**
     * Where the attached component should live in Angular's *logical* component tree.
     * This affects what is available for injection and the change detection order for the
     * component instantiated inside of the dialog. This does not affect where the dialog
     * content will be rendered.
     */
    __publicField(this, "viewContainerRef");
    /**
     * Injector used for the instantiation of the component to be attached. If provided,
     * takes precedence over the injector indirectly provided by `ViewContainerRef`.
     */
    __publicField(this, "injector");
    /** ID for the dialog. If omitted, a unique one will be generated. */
    __publicField(this, "id");
    /** The ARIA role of the dialog element. */
    __publicField(this, "role", "dialog");
    /** Optional CSS class or classes applied to the overlay panel. */
    __publicField(this, "panelClass", "");
    /** Whether the dialog has a backdrop. */
    __publicField(this, "hasBackdrop", true);
    /** Optional CSS class or classes applied to the overlay backdrop. */
    __publicField(this, "backdropClass", "");
    /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
    __publicField(this, "disableClose", false);
    /** Width of the dialog. */
    __publicField(this, "width", "");
    /** Height of the dialog. */
    __publicField(this, "height", "");
    /** Min-width of the dialog. If a number is provided, assumes pixel units. */
    __publicField(this, "minWidth");
    /** Min-height of the dialog. If a number is provided, assumes pixel units. */
    __publicField(this, "minHeight");
    /** Max-width of the dialog. If a number is provided, assumes pixel units. */
    __publicField(this, "maxWidth");
    /** Max-height of the dialog. If a number is provided, assumes pixel units. */
    __publicField(this, "maxHeight");
    /** Strategy to use when positioning the dialog. Defaults to centering it on the page. */
    __publicField(this, "positionStrategy");
    /** Data being injected into the child component. */
    __publicField(this, "data", null);
    /** Layout direction for the dialog's content. */
    __publicField(this, "direction");
    /** ID of the element that describes the dialog. */
    __publicField(this, "ariaDescribedBy", null);
    /** ID of the element that labels the dialog. */
    __publicField(this, "ariaLabelledBy", null);
    /** Dialog label applied via `aria-label` */
    __publicField(this, "ariaLabel", null);
    /**
     * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
     * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
     * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
     */
    __publicField(this, "ariaModal", false);
    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    __publicField(this, "autoFocus", "first-tabbable");
    /**
     * Whether the dialog should restore focus to the previously-focused element upon closing.
     * Has the following behavior based on the type that is passed in:
     * - `boolean` - when true, will return focus to the element that was focused before the dialog
     *    was opened, otherwise won't restore focus at all.
     * - `string` - focus will be restored to the first element that matches the CSS selector.
     * - `HTMLElement` - focus will be restored to the specific element.
     */
    __publicField(this, "restoreFocus", true);
    /**
     * Scroll strategy to be used for the dialog. This determines how
     * the dialog responds to scrolling underneath the panel element.
     */
    __publicField(this, "scrollStrategy");
    /**
     * Whether the dialog should close when the user navigates backwards or forwards through browser
     * history. This does not apply to navigation via anchor element unless using URL-hash based
     * routing (`HashLocationStrategy` in the Angular router).
     */
    __publicField(this, "closeOnNavigation", true);
    /**
     * Whether the dialog should close when the dialog service is destroyed. This is useful if
     * another service is wrapping the dialog and is managing the destruction instead.
     */
    __publicField(this, "closeOnDestroy", true);
    /**
     * Whether the dialog should close when the underlying overlay is detached. This is useful if
     * another service is wrapping the dialog and is managing the destruction instead. E.g. an
     * external detachment can happen as a result of a scroll strategy triggering it or when the
     * browser location changes.
     */
    __publicField(this, "closeOnOverlayDetachments", true);
    /**
     * Alternate `ComponentFactoryResolver` to use when resolving the associated component.
     * @deprecated No longer used. Will be removed.
     * @breaking-change 20.0.0
     */
    __publicField(this, "componentFactoryResolver");
    /**
     * Providers that will be exposed to the contents of the dialog. Can also
     * be provided as a function in order to generate the providers lazily.
     */
    __publicField(this, "providers");
    /**
     * Component into which the dialog content will be rendered. Defaults to `CdkDialogContainer`.
     * A configuration object can be passed in to customize the providers that will be exposed
     * to the dialog container.
     */
    __publicField(this, "container");
    /**
     * Context that will be passed to template-based dialogs.
     * A function can be passed in to resolve the context lazily.
     */
    __publicField(this, "templateContext");
  }
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var _CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  constructor() {
    super();
    __publicField(this, "_elementRef", inject(ElementRef));
    __publicField(this, "_focusTrapFactory", inject(FocusTrapFactory));
    __publicField(this, "_config");
    __publicField(this, "_interactivityChecker", inject(InteractivityChecker));
    __publicField(this, "_ngZone", inject(NgZone));
    __publicField(this, "_overlayRef", inject(OverlayRef));
    __publicField(this, "_focusMonitor", inject(FocusMonitor));
    __publicField(this, "_renderer", inject(Renderer2));
    __publicField(this, "_changeDetectorRef", inject(ChangeDetectorRef));
    __publicField(this, "_injector", inject(Injector));
    __publicField(this, "_platform", inject(Platform));
    __publicField(this, "_document", inject(DOCUMENT, {
      optional: true
    }));
    /** The portal outlet inside of this container into which the dialog content will be loaded. */
    __publicField(this, "_portalOutlet");
    __publicField(this, "_focusTrapped", new Subject());
    /** The class that traps and manages focus within the dialog. */
    __publicField(this, "_focusTrap", null);
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */
    __publicField(this, "_elementFocusedBeforeDialogWasOpened", null);
    /**
     * Type of interaction that led to the dialog being closed. This is used to determine
     * whether the focus style will be applied when returning focus to its original location
     * after the dialog is closed.
     */
    __publicField(this, "_closeInteractionType", null);
    /**
     * Queue of the IDs of the dialog's label element, based on their definition order. The first
     * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
     * where there are two or more titles in the DOM at a time and the first one is destroyed while
     * the rest are present.
     */
    __publicField(this, "_ariaLabelledByQueue", []);
    __publicField(this, "_isDestroyed", false);
    /**
     * Attaches a DOM portal to the dialog container.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    __publicField(this, "attachDomPortal", (portal) => {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwDialogContentAlreadyAttachedError();
      }
      const result = this._portalOutlet.attachDomPortal(portal);
      this._contentAttached();
      return result;
    });
    this._config = inject(DialogConfig, {
      optional: true
    }) || new DialogConfig();
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._handleBackdropClicks();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._focusTrapped.complete();
    this._isDestroyed = true;
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          deregisterBlur();
          deregisterMousedown();
          element.removeAttribute("tabindex");
        };
        const deregisterBlur = this._renderer.listen(element, "blur", callback);
        const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus(options) {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      var _a2;
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus(options);
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = (_a2 = this._focusTrap) == null ? void 0 : _a2.focusInitialElement(options);
          if (!focusedSuccessfully) {
            this._focusDialogContainer(options);
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options);
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus, options);
          break;
      }
      this._focusTrapped.next();
    }, {
      injector: this._injector
    });
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer(options) {
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus(options);
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  /** Sets up the listener that handles clicks on the dialog backdrop. */
  _handleBackdropClicks() {
    this._overlayRef.backdropClick().subscribe(() => {
      if (this._config.disableClose) {
        this._recaptureFocus();
      }
    });
  }
};
__publicField(_CdkDialogContainer, "\u0275fac", function CdkDialogContainer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDialogContainer)();
});
__publicField(_CdkDialogContainer, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkDialogContainer,
  selectors: [["cdk-dialog-container"]],
  viewQuery: function CdkDialogContainer_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(CdkPortalOutlet, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
    }
  },
  hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
  hostVars: 6,
  hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkPortalOutlet", ""]],
  template: function CdkDialogContainer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
  },
  dependencies: [CdkPortalOutlet],
  styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"],
  encapsulation: 2
}));
var CdkDialogContainer = _CdkDialogContainer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  constructor(overlayRef, config) {
    __publicField(this, "overlayRef");
    __publicField(this, "config");
    /**
     * Instance of component opened into the dialog. Will be
     * null when the dialog is opened using a `TemplateRef`.
     */
    __publicField(this, "componentInstance");
    /**
     * `ComponentRef` of the component opened into the dialog. Will be
     * null when the dialog is opened using a `TemplateRef`.
     */
    __publicField(this, "componentRef");
    /** Instance of the container that is rendering out the dialog content. */
    __publicField(this, "containerInstance");
    /** Whether the user is allowed to close the dialog. */
    __publicField(this, "disableClose");
    /** Emits when the dialog has been closed. */
    __publicField(this, "closed", new Subject());
    /** Emits when the backdrop of the dialog is clicked. */
    __publicField(this, "backdropClick");
    /** Emits when on keyboard events within the dialog. */
    __publicField(this, "keydownEvents");
    /** Emits on pointer events that happen outside of the dialog. */
    __publicField(this, "outsidePointerEvents");
    /** Unique ID for the dialog. */
    __publicField(this, "id");
    /** Subscription to external detachments of the dialog. */
    __publicField(this, "_detachSubscription");
    this.overlayRef = overlayRef;
    this.config = config;
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this.containerInstance) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = (options == null ? void 0 : options.focusOrigin) || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
var _Dialog = class _Dialog {
  constructor() {
    __publicField(this, "_overlay", inject(Overlay));
    __publicField(this, "_injector", inject(Injector));
    __publicField(this, "_defaultOptions", inject(DEFAULT_DIALOG_CONFIG, {
      optional: true
    }));
    __publicField(this, "_parentDialog", inject(_Dialog, {
      optional: true,
      skipSelf: true
    }));
    __publicField(this, "_overlayContainer", inject(OverlayContainer));
    __publicField(this, "_idGenerator", inject(_IdGenerator));
    __publicField(this, "_openDialogsAtThisLevel", []);
    __publicField(this, "_afterAllClosedAtThisLevel", new Subject());
    __publicField(this, "_afterOpenedAtThisLevel", new Subject());
    __publicField(this, "_ariaHiddenElements", /* @__PURE__ */ new Map());
    __publicField(this, "_scrollStrategy", inject(DIALOG_SCROLL_STRATEGY));
    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */
    __publicField(this, "afterAllClosed", defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0))));
  }
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || this._idGenerator.getId("cdk-dialog-");
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Dialog with id "'.concat(config.id, '" exists already. The dialog id must be unique.'));
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    if (!this.openDialogs.length) {
      const overlayContainer = this._overlayContainer.getContainerElement();
      if (dialogContainer._focusTrapped) {
        dialogContainer._focusTrapped.pipe(take(1)).subscribe(() => {
          this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
        });
      } else {
        this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
      }
    }
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state = new OverlayConfig({
      positionStrategy: config.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation
    });
    if (config.backdropClass) {
      state.backdropClass = config.backdropClass;
    }
    return state;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    var _a2;
    const userInjector = config.injector || ((_a2 = config.viewContainerRef) == null ? void 0 : _a2.injector);
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }));
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    var _a2;
    const userInjector = config.injector || ((_a2 = config.viewContainerRef) == null ? void 0 : _a2.injector);
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: {
          value: config.direction,
          change: of()
        }
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology(overlayContainer) {
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
};
__publicField(_Dialog, "\u0275fac", function Dialog_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Dialog)();
});
__publicField(_Dialog, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Dialog,
  factory: _Dialog.\u0275fac,
  providedIn: "root"
}));
var Dialog = _Dialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var _DialogModule = class _DialogModule {
};
__publicField(_DialogModule, "\u0275fac", function DialogModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DialogModule)();
});
__publicField(_DialogModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _DialogModule
}));
__publicField(_DialogModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [Dialog],
  imports: [
    OverlayModule,
    PortalModule,
    A11yModule,
    // Re-export the PortalModule so that people extending the `CdkDialogContainer`
    // don't have to remember to import it or be faced with an unhelpful error.
    PortalModule
  ]
}));
var DialogModule = _DialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/module-BnDTus5c.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  constructor() {
    /**
     * Where the attached component should live in Angular's *logical* component tree.
     * This affects what is available for injection and the change detection order for the
     * component instantiated inside of the dialog. This does not affect where the dialog
     * content will be rendered.
     */
    __publicField(this, "viewContainerRef");
    /**
     * Injector used for the instantiation of the component to be attached. If provided,
     * takes precedence over the injector indirectly provided by `ViewContainerRef`.
     */
    __publicField(this, "injector");
    /** ID for the dialog. If omitted, a unique one will be generated. */
    __publicField(this, "id");
    /** The ARIA role of the dialog element. */
    __publicField(this, "role", "dialog");
    /** Custom class for the overlay pane. */
    __publicField(this, "panelClass", "");
    /** Whether the dialog has a backdrop. */
    __publicField(this, "hasBackdrop", true);
    /** Custom class for the backdrop. */
    __publicField(this, "backdropClass", "");
    /** Whether the user can use escape or clicking on the backdrop to close the modal. */
    __publicField(this, "disableClose", false);
    /** Width of the dialog. */
    __publicField(this, "width", "");
    /** Height of the dialog. */
    __publicField(this, "height", "");
    /** Min-width of the dialog. If a number is provided, assumes pixel units. */
    __publicField(this, "minWidth");
    /** Min-height of the dialog. If a number is provided, assumes pixel units. */
    __publicField(this, "minHeight");
    /** Max-width of the dialog. If a number is provided, assumes pixel units. */
    __publicField(this, "maxWidth");
    /** Max-height of the dialog. If a number is provided, assumes pixel units. */
    __publicField(this, "maxHeight");
    /** Position overrides. */
    __publicField(this, "position");
    /** Data being injected into the child component. */
    __publicField(this, "data", null);
    /** Layout direction for the dialog's content. */
    __publicField(this, "direction");
    /** ID of the element that describes the dialog. */
    __publicField(this, "ariaDescribedBy", null);
    /** ID of the element that labels the dialog. */
    __publicField(this, "ariaLabelledBy", null);
    /** Aria label to assign to the dialog element. */
    __publicField(this, "ariaLabel", null);
    /**
     * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
     * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
     * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
     */
    __publicField(this, "ariaModal", false);
    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    __publicField(this, "autoFocus", "first-tabbable");
    /**
     * Whether the dialog should restore focus to the
     * previously-focused element, after it's closed.
     */
    __publicField(this, "restoreFocus", true);
    /** Whether to wait for the opening animation to finish before trapping focus. */
    __publicField(this, "delayFocusTrap", true);
    /** Scroll strategy to be used for the dialog. */
    __publicField(this, "scrollStrategy");
    /**
     * Whether the dialog should close when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */
    __publicField(this, "closeOnNavigation", true);
    /**
     * Alternate `ComponentFactoryResolver` to use when resolving the associated component.
     * @deprecated No longer used. Will be removed.
     * @breaking-change 20.0.0
     */
    __publicField(this, "componentFactoryResolver");
    /**
     * Duration of the enter animation in ms.
     * Should be a number, string type is deprecated.
     * @breaking-change 17.0.0 Remove string signature.
     */
    __publicField(this, "enterAnimationDuration");
    /**
     * Duration of the exit animation in ms.
     * Should be a number, string type is deprecated.
     * @breaking-change 17.0.0 Remove string signature.
     */
    __publicField(this, "exitAnimationDuration");
  }
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var _a, _b;
var _MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  constructor() {
    super(...arguments);
    __publicField(this, "_animationMode", inject(ANIMATION_MODULE_TYPE, {
      optional: true
    }));
    /** Emits when an animation state changes. */
    __publicField(this, "_animationStateChanged", new EventEmitter());
    /** Whether animations are enabled. */
    __publicField(this, "_animationsEnabled", this._animationMode !== "NoopAnimations");
    /** Number of actions projected in the dialog. */
    __publicField(this, "_actionSectionCount", 0);
    /** Host element of the dialog container component. */
    __publicField(this, "_hostElement", this._elementRef.nativeElement);
    /** Duration of the dialog open animation. */
    __publicField(this, "_enterAnimationDuration", this._animationsEnabled ? (_a = parseCssTime(this._config.enterAnimationDuration)) != null ? _a : OPEN_ANIMATION_DURATION : 0);
    /** Duration of the dialog close animation. */
    __publicField(this, "_exitAnimationDuration", this._animationsEnabled ? (_b = parseCssTime(this._config.exitAnimationDuration)) != null ? _b : CLOSE_ANIMATION_DURATION : 0);
    /** Current timer for dialog animations. */
    __publicField(this, "_animationTimer", null);
    /**
     * Completes the dialog open by clearing potential animation classes, trapping
     * focus and emitting an opened event.
     */
    __publicField(this, "_finishDialogOpen", () => {
      this._clearAnimationClasses();
      this._openAnimationDone(this._enterAnimationDuration);
    });
    /**
     * Completes the dialog close by clearing potential animation classes, restoring
     * focus and emitting a closed event.
     */
    __publicField(this, "_finishDialogClose", () => {
      this._clearAnimationClasses();
      this._animationStateChanged.emit({
        state: "closed",
        totalTime: this._exitAnimationDuration
      });
    });
  }
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, "".concat(this._enterAnimationDuration, "ms"));
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, "".concat(this._exitAnimationDuration, "ms"));
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
};
__publicField(_MatDialogContainer, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275MatDialogContainer_BaseFactory;
  return function MatDialogContainer_Factory(__ngFactoryType__) {
    return (\u0275MatDialogContainer_BaseFactory || (\u0275MatDialogContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogContainer)))(__ngFactoryType__ || _MatDialogContainer);
  };
})());
__publicField(_MatDialogContainer, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatDialogContainer,
  selectors: [["mat-dialog-container"]],
  hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
  hostVars: 10,
  hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("id", ctx._config.id);
      \u0275\u0275attribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      \u0275\u0275classProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 3,
  vars: 0,
  consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
  template: function MatDialogContainer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
      \u0275\u0275elementEnd()();
    }
  },
  dependencies: [CdkPortalOutlet],
  styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mdc-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'],
  encapsulation: 2
}));
var MatDialogContainer = _MatDialogContainer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mdc-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n']
    }]
  }], null, null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  constructor(_ref, config, _containerInstance) {
    __publicField(this, "_ref");
    __publicField(this, "_containerInstance");
    /** The instance of component opened into the dialog. */
    __publicField(this, "componentInstance");
    /**
     * `ComponentRef` of the component opened into the dialog. Will be
     * null when the dialog is opened using a `TemplateRef`.
     */
    __publicField(this, "componentRef");
    /** Whether the user is allowed to close the dialog. */
    __publicField(this, "disableClose");
    /** Unique ID for the dialog. */
    __publicField(this, "id");
    /** Subject for notifying the user that the dialog has finished opening. */
    __publicField(this, "_afterOpened", new Subject());
    /** Subject for notifying the user that the dialog has started closing. */
    __publicField(this, "_beforeClosed", new Subject());
    /** Result to be passed to afterClosed. */
    __publicField(this, "_result");
    /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
    __publicField(this, "_closeFallbackTimeout");
    /** Current state of the dialog. */
    __publicField(this, "_state", MatDialogState.OPEN);
    // TODO(crisbeto): we shouldn't have to declare this property, because `DialogRef.close`
    // already has a second `options` parameter that we can use. The problem is that internal tests
    // have assertions like `expect(MatDialogRef.close).toHaveBeenCalledWith(foo)` which will break,
    // because it'll be called with two arguments by things like `MatDialogClose`.
    /** Interaction that caused the dialog to close. */
    __publicField(this, "_closeInteractionType");
    this._ref = _ref;
    this._containerInstance = _containerInstance;
    this.disableClose = config.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var _MatDialog = class _MatDialog {
  constructor() {
    __publicField(this, "_overlay", inject(Overlay));
    __publicField(this, "_defaultOptions", inject(MAT_DIALOG_DEFAULT_OPTIONS, {
      optional: true
    }));
    __publicField(this, "_scrollStrategy", inject(MAT_DIALOG_SCROLL_STRATEGY));
    __publicField(this, "_parentDialog", inject(_MatDialog, {
      optional: true,
      skipSelf: true
    }));
    __publicField(this, "_idGenerator", inject(_IdGenerator));
    __publicField(this, "_dialog", inject(Dialog));
    __publicField(this, "_openDialogsAtThisLevel", []);
    __publicField(this, "_afterAllClosedAtThisLevel", new Subject());
    __publicField(this, "_afterOpenedAtThisLevel", new Subject());
    __publicField(this, "dialogConfigClass", MatDialogConfig);
    __publicField(this, "_dialogRefConstructor");
    __publicField(this, "_dialogContainerType");
    __publicField(this, "_dialogDataToken");
    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */
    __publicField(this, "afterAllClosed", defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0))));
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
    config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      container: {
        type: this._dialogContainerType,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          {
            provide: this.dialogConfigClass,
            useValue: config
          },
          {
            provide: DialogConfig,
            useValue: config
          }
        ]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config == null ? void 0 : config.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
};
__publicField(_MatDialog, "\u0275fac", function MatDialog_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatDialog)();
});
__publicField(_MatDialog, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MatDialog,
  factory: _MatDialog.\u0275fac,
  providedIn: "root"
}));
var MatDialog = _MatDialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _MatDialogClose = class _MatDialogClose {
  constructor() {
    __publicField(this, "dialogRef", inject(MatDialogRef, {
      optional: true
    }));
    __publicField(this, "_elementRef", inject(ElementRef));
    __publicField(this, "_dialog", inject(MatDialog));
    /** Screen-reader label for the button. */
    __publicField(this, "ariaLabel");
    /** Default to "button" to prevents accidental form submits. */
    __publicField(this, "type", "button");
    /** Dialog close input. */
    __publicField(this, "dialogResult");
    __publicField(this, "_matDialogClose");
  }
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
};
__publicField(_MatDialogClose, "\u0275fac", function MatDialogClose_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatDialogClose)();
});
__publicField(_MatDialogClose, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatDialogClose,
  selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
  hostVars: 2,
  hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MatDialogClose_click_HostBindingHandler($event) {
        return ctx._onButtonClick($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    }
  },
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    type: "type",
    dialogResult: [0, "mat-dialog-close", "dialogResult"],
    _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
  },
  exportAs: ["matDialogClose"],
  features: [\u0275\u0275NgOnChangesFeature]
}));
var MatDialogClose = _MatDialogClose;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var _MatDialogLayoutSection = class _MatDialogLayoutSection {
  constructor() {
    __publicField(this, "_dialogRef", inject(MatDialogRef, {
      optional: true
    }));
    __publicField(this, "_elementRef", inject(ElementRef));
    __publicField(this, "_dialog", inject(MatDialog));
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    var _a2;
    const instance = (_a2 = this._dialogRef) == null ? void 0 : _a2._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
};
__publicField(_MatDialogLayoutSection, "\u0275fac", function MatDialogLayoutSection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatDialogLayoutSection)();
});
__publicField(_MatDialogLayoutSection, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatDialogLayoutSection
}));
var MatDialogLayoutSection = _MatDialogLayoutSection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive
  }], () => [], null);
})();
var _MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  constructor() {
    super(...arguments);
    __publicField(this, "id", inject(_IdGenerator).getId("mat-mdc-dialog-title-"));
  }
  _onAdd() {
    var _a2, _b2;
    (_b2 = (_a2 = this._dialogRef._containerInstance) == null ? void 0 : _a2._addAriaLabelledBy) == null ? void 0 : _b2.call(_a2, this.id);
  }
  _onRemove() {
    var _a2, _b2, _c;
    (_c = (_b2 = (_a2 = this._dialogRef) == null ? void 0 : _a2._containerInstance) == null ? void 0 : _b2._removeAriaLabelledBy) == null ? void 0 : _c.call(_b2, this.id);
  }
};
__publicField(_MatDialogTitle, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275MatDialogTitle_BaseFactory;
  return function MatDialogTitle_Factory(__ngFactoryType__) {
    return (\u0275MatDialogTitle_BaseFactory || (\u0275MatDialogTitle_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
  };
})());
__publicField(_MatDialogTitle, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatDialogTitle,
  selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
  hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
  hostVars: 1,
  hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  exportAs: ["matDialogTitle"],
  features: [\u0275\u0275InheritDefinitionFeature]
}));
var MatDialogTitle = _MatDialogTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var _MatDialogContent = class _MatDialogContent {
};
__publicField(_MatDialogContent, "\u0275fac", function MatDialogContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatDialogContent)();
});
__publicField(_MatDialogContent, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatDialogContent,
  selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
  hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
  features: [\u0275\u0275HostDirectivesFeature([CdkScrollable])]
}));
var MatDialogContent = _MatDialogContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var _MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  constructor() {
    super(...arguments);
    /**
     * Horizontal alignment of action buttons.
     */
    __publicField(this, "align");
  }
  _onAdd() {
    var _a2, _b2;
    (_b2 = (_a2 = this._dialogRef._containerInstance) == null ? void 0 : _a2._updateActionSectionCount) == null ? void 0 : _b2.call(_a2, 1);
  }
  _onRemove() {
    var _a2, _b2;
    (_b2 = (_a2 = this._dialogRef._containerInstance) == null ? void 0 : _a2._updateActionSectionCount) == null ? void 0 : _b2.call(_a2, -1);
  }
};
__publicField(_MatDialogActions, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275MatDialogActions_BaseFactory;
  return function MatDialogActions_Factory(__ngFactoryType__) {
    return (\u0275MatDialogActions_BaseFactory || (\u0275MatDialogActions_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
  };
})());
__publicField(_MatDialogActions, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatDialogActions,
  selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
  hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
  hostVars: 6,
  hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align"
  },
  features: [\u0275\u0275InheritDefinitionFeature]
}));
var MatDialogActions = _MatDialogActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var _MatDialogModule = class _MatDialogModule {
};
__publicField(_MatDialogModule, "\u0275fac", function MatDialogModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatDialogModule)();
});
__publicField(_MatDialogModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatDialogModule
}));
__publicField(_MatDialogModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [MatDialog],
  imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule]
}));
var MatDialogModule = _MatDialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();

// projects/color-picker-v2/src/lib/helpers/color-helpers.ts
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
var mathRound = Math.round;
var NUMERIC_REGEX = /[^0-9]/g;
var MAX_RGB = 255;
var BASIC_COLORS = [
  "#ffffff",
  "#ffff00",
  "#ff00ff",
  "#ff0000",
  "#c0c0c0",
  "#808080",
  "#808000",
  "#800080",
  "#800000",
  "#00ffff",
  "#00ff00",
  "#008080",
  "#008000",
  "#0000ff",
  "#000080",
  "#000000"
];
function getColorAtPosition(ctx, x, y) {
  const imageData = ctx.getImageData(x, y, 1, 1).data;
  return { r: imageData[0], g: imageData[1], b: imageData[2] };
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [
    pad2(mathRound(r).toString(16)),
    pad2(mathRound(g).toString(16)),
    pad2(mathRound(b).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function pad2(c) {
  return c.length == 1 ? "0" + c : "" + c;
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(mathRound(r).toString(16)),
    pad2(mathRound(g).toString(16)),
    pad2(mathRound(b).toString(16))
  ];
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  let match;
  let obj;
  if (match = matchers.rgb.exec(color)) {
    return { r: match[1], g: match[2], b: match[3], a: 1 };
  }
  if (match = matchers.rgba.exec(color)) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4])
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: 1
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4])
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: 1
    };
  }
  return null;
}
function createMissingDateImplError(provider) {
  return Error("NgxMatColorPicker: No provider found for ".concat(provider, ". You must define MAT_COLOR_FORMATS in your module"));
}

// projects/color-picker-v2/src/lib/models/color.model.ts
var Color = class {
  constructor(_r, _g, _b2, _a2) {
    this.r = _r > MAX_RGB ? MAX_RGB : _r;
    this.g = _g > MAX_RGB ? MAX_RGB : _g;
    this.b = _b2 > MAX_RGB ? MAX_RGB : _b2;
    if (_a2 != null) {
      this.a = _a2 > 1 ? 1 : _a2;
    } else {
      this.a = 1;
    }
    this.roundA = Math.round(this.a);
    this.hex = rgbToHex(this.r, this.g, this.b);
    this.rgba = this.toRgba();
  }
  toHex(allow3Char) {
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  }
  toRgba() {
    return "rgba(".concat(this.r, ",").concat(this.g, ",").concat(this.b, ",").concat(this.a, ")");
  }
  toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  }
  toRgbString() {
    return this.a === 1 ? "rgb(" + Math.round(this.r) + ", " + Math.round(this.g) + ", " + Math.round(this.b) + ")" : "rgba(" + Math.round(this.r) + ", " + Math.round(this.g) + ", " + Math.round(this.b) + ", " + this.roundA + ")";
  }
  toHex8(allow4Char) {
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  }
  toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  }
  toString(format) {
    let formatSet = !!format;
    let formattedString;
    let hasAlpha = this.a < 1 && this.a >= 0;
    let needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8");
    if (needsAlphaFormat) {
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    return formattedString || this.toHexString();
  }
};

// projects/color-picker-v2/src/lib/components/color-canvas/base-color-canvas.ts
var _NgxMatBaseColorCanvas = class _NgxMatBaseColorCanvas {
  constructor(zone, elementId) {
    this.zone = zone;
    this.colorChanged = new EventEmitter();
    this.x = 0;
    this.y = 0;
    this.drag = false;
    this._destroyed = new Subject();
    this.elementId = elementId;
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  ngAfterViewInit() {
    this.canvas = document.getElementById(this.elementId);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.draw();
  }
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.rect(0, 0, this.width, this.height);
    this.fillGradient();
    if (this.y != 0) {
      this.redrawIndicator(this.x, this.y);
    }
  }
  onMousedown(e) {
    this.drag = true;
    this.changeColor(e);
    this.zone.runOutsideAngular(() => {
      this.canvas.addEventListener("mousemove", this.onMousemove.bind(this));
    });
  }
  onMousemove(e) {
    if (this.drag) {
      this.zone.run(() => {
        this.changeColor(e);
      });
    }
  }
  onMouseup(e) {
    this.drag = false;
    this.canvas.removeEventListener("mousemove", this.onMousemove);
  }
  emitChange(color) {
    this.colorChanged.emit(color);
  }
};
_NgxMatBaseColorCanvas.\u0275fac = function NgxMatBaseColorCanvas_Factory(__ngFactoryType__) {
  \u0275\u0275invalidFactory();
};
_NgxMatBaseColorCanvas.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatBaseColorCanvas, inputs: { color: "color", theme: "theme" }, outputs: { colorChanged: "colorChanged" }, standalone: false });
var NgxMatBaseColorCanvas = _NgxMatBaseColorCanvas;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatBaseColorCanvas, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], () => [{ type: NgZone }, { type: void 0 }], { colorChanged: [{
    type: Output
  }], color: [{
    type: Input
  }], theme: [{
    type: Input
  }] });
})();

// projects/color-picker-v2/src/lib/components/color-canvas/color-slider/color-slider.component.ts
var _NgxMatColorSliderComponent = class _NgxMatColorSliderComponent extends NgxMatBaseColorCanvas {
  constructor(zone) {
    super(zone, "color-strip");
    this.zone = zone;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  fillGradient() {
    const grd = this.ctx.createLinearGradient(0, 0, 0, this.height);
    grd.addColorStop(0, "rgba(255, 0, 0, 1)");
    grd.addColorStop(0.17, "rgba(255, 255, 0, 1)");
    grd.addColorStop(0.34, "rgba(0, 255, 0, 1)");
    grd.addColorStop(0.51, "rgba(0, 255, 255, 1)");
    grd.addColorStop(0.68, "rgba(0, 0, 255, 1)");
    grd.addColorStop(0.85, "rgba(255, 0, 255, 1)");
    grd.addColorStop(1, "rgba(255, 0, 0, 1)");
    this.ctx.fillStyle = grd;
    this.ctx.fill();
  }
  redrawIndicator(x, y) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 2;
    this.ctx.arc(7.5, y, 7.5, 0, 2 * Math.PI, false);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  changeColor(e) {
    this.x = e.offsetX;
    this.y = e.offsetY;
    this.draw();
    const { r, g, b } = getColorAtPosition(this.ctx, e.offsetX, e.offsetY);
    this.emitChange(new Color(r, g, b));
  }
};
_NgxMatColorSliderComponent.\u0275fac = function NgxMatColorSliderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorSliderComponent)(\u0275\u0275directiveInject(NgZone));
};
_NgxMatColorSliderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatColorSliderComponent, selectors: [["ngx-mat-color-slider"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["id", "color-strip", "width", "15", "height", "234", 1, "zone-strip", 3, "mousedown", "mouseup"]], template: function NgxMatColorSliderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "canvas", 0);
    \u0275\u0275listener("mousedown", function NgxMatColorSliderComponent_Template_canvas_mousedown_0_listener($event) {
      return ctx.onMousedown($event);
    })("mouseup", function NgxMatColorSliderComponent_Template_canvas_mouseup_0_listener($event) {
      return ctx.onMouseup($event);
    });
    \u0275\u0275elementEnd();
  }
}, encapsulation: 2 });
var NgxMatColorSliderComponent = _NgxMatColorSliderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorSliderComponent, [{
    type: Component,
    args: [{ selector: "ngx-mat-color-slider", standalone: false, template: '<canvas id="color-strip" class="zone-strip" (mousedown)="onMousedown($event)" (mouseup)="onMouseup($event)"\r\n width="15" height="234"></canvas>' }]
  }], () => [{ type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatColorSliderComponent, { className: "NgxMatColorSliderComponent", filePath: "projects/color-picker-v2/src/lib/components/color-canvas/color-slider/color-slider.component.ts", lineNumber: 12 });
})();

// projects/color-picker-v2/src/lib/directives/numeric-color-input.directive.ts
var _NumericColorInputDirective = class _NumericColorInputDirective {
  constructor() {
  }
  onInput($event) {
    this._formatInput($event.target);
  }
  /**
  * Format input
  * @param input
  */
  _formatInput(input) {
    let val = Number(input.value.replace(NUMERIC_REGEX, ""));
    val = isNaN(val) ? 0 : val;
    input.value = val;
  }
};
_NumericColorInputDirective.\u0275fac = function NumericColorInputDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NumericColorInputDirective)();
};
_NumericColorInputDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NumericColorInputDirective, selectors: [["", "ngxMatNumericColorInput", ""]], hostBindings: function NumericColorInputDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("input", function NumericColorInputDirective_input_HostBindingHandler($event) {
      return ctx.onInput($event);
    });
  }
}, standalone: false });
var NumericColorInputDirective = _NumericColorInputDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericColorInputDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxMatNumericColorInput]",
      standalone: false
    }]
  }], () => [], { onInput: [{
    type: HostListener,
    args: ["input", ["$event"]]
  }] });
})();

// projects/color-picker-v2/src/lib/components/color-canvas/color-canvas.component.ts
var RADIUS_NOB = 5;
var _NgxMatColorCanvasComponent = class _NgxMatColorCanvasComponent extends NgxMatBaseColorCanvas {
  get rCtrl() {
    return this.formGroup.get("r");
  }
  get gCtrl() {
    return this.formGroup.get("g");
  }
  get bCtrl() {
    return this.formGroup.get("b");
  }
  get aCtrl() {
    return this.formGroup.get("a");
  }
  get hexCtrl() {
    return this.formGroup.get("hex");
  }
  constructor(zone) {
    super(zone, "color-block");
    this.zone = zone;
    this._resetBaseColor = true;
    this.formGroup = new FormGroup({
      r: new FormControl(null, [Validators.required]),
      g: new FormControl(null, [Validators.required]),
      b: new FormControl(null, [Validators.required]),
      a: new FormControl(null, [Validators.required]),
      hex: new FormControl(null, [Validators.required, Validators.pattern(matchers.hex6)])
    });
  }
  ngOnInit() {
    const rgbaCtrl$ = merge(this.rCtrl.valueChanges, this.gCtrl.valueChanges, this.bCtrl.valueChanges, this.aCtrl.valueChanges);
    rgbaCtrl$.pipe(takeUntil(this._destroyed), debounceTime(400)).subscribe((_) => {
      const color = new Color(Number(this.rCtrl.value), Number(this.gCtrl.value), Number(this.bCtrl.value), Number(this.aCtrl.value));
      this.emitChange(color);
    });
    const hexCtrl$ = this.hexCtrl.valueChanges;
    hexCtrl$.pipe(takeUntil(this._destroyed), debounceTime(400), distinctUntilChanged()).subscribe((hex) => {
      const obj = stringInputToObject(hex);
      if (obj != null) {
        const color = new Color(obj.r, obj.g, obj.b, obj.a);
        this.emitChange(color);
      }
    });
  }
  ngOnChanges(changes) {
    if (changes.color && changes.color.currentValue) {
      this.updateForm(changes.color.currentValue);
      if (this._resetBaseColor) {
        this._baseColor = changes.color.currentValue;
      }
      this._resetBaseColor = true;
      if (!changes.color.firstChange) {
        this.draw();
      }
    }
  }
  updateForm(val) {
    const config = { emitEvent: false };
    this.rCtrl.setValue(val.r, config);
    this.gCtrl.setValue(val.g, config);
    this.bCtrl.setValue(val.b, config);
    this.aCtrl.setValue(val.a, config);
    this.hexCtrl.setValue(val.hex, config);
  }
  redrawIndicator(x, y) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.arc(x, y, RADIUS_NOB, 0, 2 * Math.PI, false);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  fillGradient() {
    this.ctx.fillStyle = this._baseColor ? this._baseColor.rgba : "rgba(255,255,255,1)";
    this.ctx.fillRect(0, 0, this.width, this.height);
    const grdWhite = this.ctx.createLinearGradient(0, 0, this.width, 0);
    grdWhite.addColorStop(0, "rgba(255,255,255,1)");
    grdWhite.addColorStop(1, "rgba(255,255,255,0)");
    this.ctx.fillStyle = grdWhite;
    this.ctx.fillRect(0, 0, this.width, this.height);
    const grdBlack = this.ctx.createLinearGradient(0, 0, 0, this.height);
    grdBlack.addColorStop(0, "rgba(0,0,0,0)");
    grdBlack.addColorStop(1, "rgba(0,0,0,1)");
    this.ctx.fillStyle = grdBlack;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  onSliderColorChanged(c) {
    this._baseColor = c;
    this.color = c;
    this.fillGradient();
    this.emitChange(c);
  }
  changeColor(e) {
    this.x = e.offsetX;
    this.y = e.offsetY;
    this._resetBaseColor = false;
    this.draw();
    const { r, g, b } = getColorAtPosition(this.ctx, e.offsetX, e.offsetY);
    this.emitChange(new Color(r, g, b));
  }
};
_NgxMatColorCanvasComponent.\u0275fac = function NgxMatColorCanvasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorCanvasComponent)(\u0275\u0275directiveInject(NgZone));
};
_NgxMatColorCanvasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatColorCanvasComponent, selectors: [["ngx-mat-color-canvas"]], hostAttrs: [1, "ngx-mat-color-canvas"], standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 30, vars: 8, consts: [[3, "formGroup"], [1, "color-canvas-row"], [1, "zone-canvas"], ["id", "color-block", "width", "200", "height", "235", 1, "zone-block", 3, "mousedown", "mouseup"], [3, "colorChanged"], [1, "zone-inputs"], [3, "color"], ["matInput", "", "formControlName", "r", "ngxMatNumericColorInput", "", "autocomplete", "off"], ["matInput", "", "formControlName", "g", "ngxMatNumericColorInput", "", "autocomplete", "off"], ["matInput", "", "formControlName", "b", "ngxMatNumericColorInput", "", "autocomplete", "off"], ["mat-mini-fab", "", 1, "preview"], ["matPrefix", "", 1, "symbol"], ["matInput", "", "formControlName", "hex", "autocomplete", "off"], [1, "input-opacity", 3, "color"], ["matInput", "", "formControlName", "a", "type", "number", "min", "0", "max", "1", "step", "0.1", "autocomplete", "off"]], template: function NgxMatColorCanvasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "canvas", 3);
    \u0275\u0275listener("mousedown", function NgxMatColorCanvasComponent_Template_canvas_mousedown_3_listener($event) {
      return ctx.onMousedown($event);
    })("mouseup", function NgxMatColorCanvasComponent_Template_canvas_mouseup_3_listener($event) {
      return ctx.onMouseup($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ngx-mat-color-slider", 4);
    \u0275\u0275listener("colorChanged", function NgxMatColorCanvasComponent_Template_ngx_mat_color_slider_colorChanged_4_listener($event) {
      return ctx.onSliderColorChanged($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "mat-form-field", 6)(7, "mat-label");
    \u0275\u0275text(8, "R");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12, "G");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 6)(15, "mat-label");
    \u0275\u0275text(16, "B");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 1);
    \u0275\u0275element(19, "button", 10);
    \u0275\u0275elementStart(20, "mat-form-field", 6)(21, "mat-label");
    \u0275\u0275text(22, "HEX6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-label", 11);
    \u0275\u0275text(24, "#\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 13)(27, "mat-label");
    \u0275\u0275text(28, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.formGroup);
    \u0275\u0275advance(6);
    \u0275\u0275property("color", ctx.theme);
    \u0275\u0275advance(4);
    \u0275\u0275property("color", ctx.theme);
    \u0275\u0275advance(4);
    \u0275\u0275property("color", ctx.theme);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background-color", (ctx.color == null ? null : ctx.color.rgba) || "transparent");
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx.theme);
    \u0275\u0275advance(6);
    \u0275\u0275property("color", ctx.theme);
  }
}, dependencies: [MatInput, MatFormField, MatLabel, MatPrefix, MatMiniFabButton, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, NgxMatColorSliderComponent, NumericColorInputDirective], styles: ["/* projects/color-picker-v2/src/lib/components/color-canvas/color-canvas.component.scss */\n.ngx-mat-color-canvas .color-canvas-row {\n  display: flex;\n}\n.ngx-mat-color-canvas .color-canvas-row:first-of-type {\n  height: 235px;\n  margin-bottom: 12px;\n}\n.ngx-mat-color-canvas .color-canvas-row:first-of-type .card {\n  height: 180px;\n}\n.ngx-mat-color-canvas .color-canvas-row canvas:hover {\n  cursor: crosshair;\n}\n.ngx-mat-color-canvas .color-canvas-row .zone {\n  display: flex;\n}\n.ngx-mat-color-canvas .color-canvas-row .zone-canvas {\n  height: 235px;\n}\n.ngx-mat-color-canvas .color-canvas-row .zone-canvas .zone-block {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.ngx-mat-color-canvas .color-canvas-row .zone-strip {\n  flex-basis: auto;\n  margin-left: 10px;\n}\n.ngx-mat-color-canvas .color-canvas-row .zone-inputs {\n  display: flex;\n  width: 60px;\n  height: 235px;\n  flex-direction: column;\n  margin-left: 16px;\n  margin-top: 12px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) {\n  display: flex;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .preview {\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  width: 40px;\n  margin-top: 12px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field {\n  margin-left: 16px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:first-of-type {\n  width: 170px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:first-of-type .symbol {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.54);\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:last-of-type {\n  width: 60px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:last-of-type .mat-mdc-text-field-wrapper {\n  padding: 0 8px;\n}\n.ngx-mat-color-canvas .mat-mdc-form-field-label {\n  font-weight: bold;\n}\n.ngx-mat-color-canvas .mat-mdc-form-field .mdc-text-field--filled:not(.mdc-text-field--disabled) {\n  background-color: transparent;\n}\n/*# sourceMappingURL=color-canvas.component.css.map */\n"], encapsulation: 2 });
var NgxMatColorCanvasComponent = _NgxMatColorCanvasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorCanvasComponent, [{
    type: Component,
    args: [{ selector: "ngx-mat-color-canvas", encapsulation: ViewEncapsulation.None, host: {
      "class": "ngx-mat-color-canvas"
    }, standalone: false, template: '<form [formGroup]="formGroup">\r\n    <div class="color-canvas-row">\r\n        <div class="zone-canvas">\r\n            <canvas id="color-block" class="zone-block" (mousedown)="onMousedown($event)" (mouseup)="onMouseup($event)"\r\n                width="200" height="235"></canvas>\r\n            <ngx-mat-color-slider (colorChanged)="onSliderColorChanged($event)"></ngx-mat-color-slider>\r\n        </div>\r\n\r\n        <div class="zone-inputs">\r\n            <mat-form-field [color]="theme">\r\n                <mat-label>R</mat-label>\r\n                <input matInput formControlName="r" ngxMatNumericColorInput autocomplete="off">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field [color]="theme">\r\n                <mat-label>G</mat-label>\r\n                <input matInput formControlName="g" ngxMatNumericColorInput autocomplete="off">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field [color]="theme">\r\n                <mat-label>B</mat-label>\r\n                <input matInput formControlName="b" ngxMatNumericColorInput autocomplete="off">\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="color-canvas-row">\r\n        <button mat-mini-fab [style.background-color]="color?.rgba || \'transparent\'" class="preview"></button>\r\n        <mat-form-field [color]="theme">\r\n            <mat-label>HEX6</mat-label>\r\n            <mat-label matPrefix class="symbol">#&nbsp;</mat-label>\r\n            <input matInput formControlName="hex" autocomplete="off">\r\n        </mat-form-field>\r\n        <mat-form-field class="input-opacity" [color]="theme">\r\n            <mat-label>A</mat-label>\r\n            <input matInput formControlName="a" type="number" min="0" max="1" step="0.1" autocomplete="off">\r\n        </mat-form-field>\r\n    </div>\r\n</form>', styles: ["/* projects/color-picker-v2/src/lib/components/color-canvas/color-canvas.component.scss */\n.ngx-mat-color-canvas .color-canvas-row {\n  display: flex;\n}\n.ngx-mat-color-canvas .color-canvas-row:first-of-type {\n  height: 235px;\n  margin-bottom: 12px;\n}\n.ngx-mat-color-canvas .color-canvas-row:first-of-type .card {\n  height: 180px;\n}\n.ngx-mat-color-canvas .color-canvas-row canvas:hover {\n  cursor: crosshair;\n}\n.ngx-mat-color-canvas .color-canvas-row .zone {\n  display: flex;\n}\n.ngx-mat-color-canvas .color-canvas-row .zone-canvas {\n  height: 235px;\n}\n.ngx-mat-color-canvas .color-canvas-row .zone-canvas .zone-block {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.ngx-mat-color-canvas .color-canvas-row .zone-strip {\n  flex-basis: auto;\n  margin-left: 10px;\n}\n.ngx-mat-color-canvas .color-canvas-row .zone-inputs {\n  display: flex;\n  width: 60px;\n  height: 235px;\n  flex-direction: column;\n  margin-left: 16px;\n  margin-top: 12px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) {\n  display: flex;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .preview {\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  width: 40px;\n  margin-top: 12px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field {\n  margin-left: 16px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:first-of-type {\n  width: 170px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:first-of-type .symbol {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.54);\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:last-of-type {\n  width: 60px;\n}\n.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-mdc-form-field:last-of-type .mat-mdc-text-field-wrapper {\n  padding: 0 8px;\n}\n.ngx-mat-color-canvas .mat-mdc-form-field-label {\n  font-weight: bold;\n}\n.ngx-mat-color-canvas .mat-mdc-form-field .mdc-text-field--filled:not(.mdc-text-field--disabled) {\n  background-color: transparent;\n}\n/*# sourceMappingURL=color-canvas.component.css.map */\n"] }]
  }], () => [{ type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatColorCanvasComponent, { className: "NgxMatColorCanvasComponent", filePath: "projects/color-picker-v2/src/lib/components/color-canvas/color-canvas.component.ts", lineNumber: 21 });
})();

// projects/color-picker-v2/src/lib/components/color-collection/color-collection.component.ts
var _c0 = (a0) => ({ "active": a0 });
function NgxMatColorCollectionComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function NgxMatColorCollectionComponent_button_1_Template_button_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(c_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", c_r2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx_r2.selectedColor === c_r2))("disableRipple", true);
  }
}
function NgxMatColorCollectionComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function NgxMatColorCollectionComponent_button_3_Template_button_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(c_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", c_r5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx_r2.selectedColor === c_r5))("disableRipple", true);
  }
}
var _NgxMatColorCollectionComponent = class _NgxMatColorCollectionComponent {
  set color(c) {
    if (c) {
      this.selectedColor = c.toHexString();
    }
  }
  constructor() {
    this.colorChanged = new EventEmitter();
    this.colors1 = BASIC_COLORS.slice(0, 8);
    this.colors2 = BASIC_COLORS.slice(8, 16);
  }
  ngOnInit() {
  }
  select(hex) {
    this.selectedColor = hex;
    const { r, g, b, a } = stringInputToObject(hex);
    this.colorChanged.emit(new Color(r, g, b, a));
  }
};
_NgxMatColorCollectionComponent.\u0275fac = function NgxMatColorCollectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorCollectionComponent)();
};
_NgxMatColorCollectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatColorCollectionComponent, selectors: [["ngx-mat-color-collection"]], hostAttrs: [1, "ngx-mat-color-collection"], inputs: { color: "color" }, outputs: { colorChanged: "colorChanged" }, standalone: false, decls: 4, vars: 2, consts: [[1, "color-collection-row"], ["mat-mini-fab", "", "class", "btn-color", 3, "background-color", "ngClass", "disableRipple", "click", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", 1, "btn-color", 3, "click", "ngClass", "disableRipple"]], template: function NgxMatColorCollectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, NgxMatColorCollectionComponent_button_1_Template, 1, 6, "button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 0);
    \u0275\u0275template(3, NgxMatColorCollectionComponent_button_3_Template, 1, 6, "button", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.colors1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.colors2);
  }
}, dependencies: [NgClass, NgForOf, MatMiniFabButton], styles: ["/* projects/color-picker-v2/src/lib/components/color-collection/color-collection.component.scss */\n.ngx-mat-color-collection .btn-color {\n  height: 20px;\n  width: 20px;\n  margin-right: 11px;\n  box-shadow: none;\n  opacity: 0.3;\n  will-change: opacity;\n  transition: opacity 0.3s linear;\n}\n.ngx-mat-color-collection .btn-color.active {\n  box-shadow:\n    0 3px 5px -1px rgba(0, 0, 0, 0.2),\n    0 6px 10px 0 rgba(0, 0, 0, 0.14),\n    0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  opacity: 1;\n}\n.ngx-mat-color-collection .btn-color .mat-mdc-button-touch-target {\n  display: none !important;\n}\n/*# sourceMappingURL=color-collection.component.css.map */\n"], encapsulation: 2 });
var NgxMatColorCollectionComponent = _NgxMatColorCollectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorCollectionComponent, [{
    type: Component,
    args: [{ selector: "ngx-mat-color-collection", encapsulation: ViewEncapsulation.None, host: {
      "class": "ngx-mat-color-collection"
    }, standalone: false, template: '<div class="color-collection-row">\r\n  <button *ngFor="let c of colors1" mat-mini-fab [style.background-color]="c" class="btn-color"\r\n    (click)="select(c)" [ngClass]="{\'active\': selectedColor === c}" [disableRipple]="true">\r\n  </button>\r\n</div>\r\n<div class="color-collection-row">\r\n  <button *ngFor="let c of colors2" mat-mini-fab [style.background-color]="c" class="btn-color"\r\n    (click)="select(c)" [ngClass]="{\'active\': selectedColor === c}" [disableRipple]="true">\r\n  </button>\r\n</div>', styles: ["/* projects/color-picker-v2/src/lib/components/color-collection/color-collection.component.scss */\n.ngx-mat-color-collection .btn-color {\n  height: 20px;\n  width: 20px;\n  margin-right: 11px;\n  box-shadow: none;\n  opacity: 0.3;\n  will-change: opacity;\n  transition: opacity 0.3s linear;\n}\n.ngx-mat-color-collection .btn-color.active {\n  box-shadow:\n    0 3px 5px -1px rgba(0, 0, 0, 0.2),\n    0 6px 10px 0 rgba(0, 0, 0, 0.14),\n    0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  opacity: 1;\n}\n.ngx-mat-color-collection .btn-color .mat-mdc-button-touch-target {\n  display: none !important;\n}\n/*# sourceMappingURL=color-collection.component.css.map */\n"] }]
  }], () => [], { colorChanged: [{
    type: Output
  }], color: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatColorCollectionComponent, { className: "NgxMatColorCollectionComponent", filePath: "projects/color-picker-v2/src/lib/components/color-collection/color-collection.component.ts", lineNumber: 15 });
})();

// projects/color-picker-v2/src/lib/components/color-palette/color-palette.component.ts
var _NgxMatColorPaletteComponent = class _NgxMatColorPaletteComponent {
  constructor() {
    this.colorChanged = new EventEmitter();
  }
  ngOnInit() {
  }
  handleColorChanged(color) {
    this.colorChanged.emit(color);
  }
};
_NgxMatColorPaletteComponent.\u0275fac = function NgxMatColorPaletteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorPaletteComponent)();
};
_NgxMatColorPaletteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatColorPaletteComponent, selectors: [["ngx-mat-color-palette"]], hostAttrs: [1, "ngx-mat-color-palette"], inputs: { color: "color", theme: "theme" }, outputs: { colorChanged: "colorChanged" }, standalone: false, decls: 2, vars: 3, consts: [[3, "colorChanged", "color", "theme"], [3, "colorChanged", "color"]], template: function NgxMatColorPaletteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngx-mat-color-canvas", 0);
    \u0275\u0275listener("colorChanged", function NgxMatColorPaletteComponent_Template_ngx_mat_color_canvas_colorChanged_0_listener($event) {
      return ctx.handleColorChanged($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "ngx-mat-color-collection", 1);
    \u0275\u0275listener("colorChanged", function NgxMatColorPaletteComponent_Template_ngx_mat_color_collection_colorChanged_1_listener($event) {
      return ctx.handleColorChanged($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", ctx.color)("theme", ctx.theme);
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx.color);
  }
}, dependencies: [NgxMatColorCanvasComponent, NgxMatColorCollectionComponent], styles: ["/* projects/color-picker-v2/src/lib/components/color-palette/color-palette.component.scss */\n.ngx-mat-color-palette .actions {\n  margin-top: 10px;\n  display: flex;\n}\n.ngx-mat-color-palette .actions .left {\n  display: flex;\n  flex-direction: column;\n  margin-right: 15px;\n}\n.ngx-mat-color-palette .actions .left .preview {\n  flex: 2 1 auto;\n  margin-bottom: 10px;\n}\n.ngx-mat-color-palette .actions .right {\n  display: flex;\n  width: 60px;\n  flex-direction: column;\n}\n/*# sourceMappingURL=color-palette.component.css.map */\n"], encapsulation: 2 });
var NgxMatColorPaletteComponent = _NgxMatColorPaletteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorPaletteComponent, [{
    type: Component,
    args: [{ selector: "ngx-mat-color-palette", encapsulation: ViewEncapsulation.None, host: {
      "class": "ngx-mat-color-palette"
    }, standalone: false, template: '<ngx-mat-color-canvas (colorChanged)="handleColorChanged($event)" [color]="color"\r\n  [theme]="theme"></ngx-mat-color-canvas>\r\n\r\n<ngx-mat-color-collection (colorChanged)="handleColorChanged($event)" [color]="color">\r\n</ngx-mat-color-collection>', styles: ["/* projects/color-picker-v2/src/lib/components/color-palette/color-palette.component.scss */\n.ngx-mat-color-palette .actions {\n  margin-top: 10px;\n  display: flex;\n}\n.ngx-mat-color-palette .actions .left {\n  display: flex;\n  flex-direction: column;\n  margin-right: 15px;\n}\n.ngx-mat-color-palette .actions .left .preview {\n  flex: 2 1 auto;\n  margin-bottom: 10px;\n}\n.ngx-mat-color-palette .actions .right {\n  display: flex;\n  width: 60px;\n  flex-direction: column;\n}\n/*# sourceMappingURL=color-palette.component.css.map */\n"] }]
  }], () => [], { colorChanged: [{
    type: Output
  }], color: [{
    type: Input
  }], theme: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatColorPaletteComponent, { className: "NgxMatColorPaletteComponent", filePath: "projects/color-picker-v2/src/lib/components/color-palette/color-palette.component.ts", lineNumber: 15 });
})();

// projects/color-picker-v2/src/lib/services/color-adapter.ts
var _ColorAdapter = class _ColorAdapter {
  constructor() {
  }
  sameColor(a, b) {
    if (a == null && b == null)
      return true;
    if (a != null && b != null)
      return a.rgba === b.rgba;
    return false;
  }
  format(c, format) {
    return c.toString(format);
  }
  parse(value) {
    const obj = stringInputToObject(value);
    if (obj) {
      return new Color(obj.r, obj.g, obj.b, obj.a);
    }
    return null;
  }
};
_ColorAdapter.\u0275fac = function ColorAdapter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ColorAdapter)();
};
_ColorAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ColorAdapter, factory: _ColorAdapter.\u0275fac });
var ColorAdapter = _ColorAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorAdapter, [{
    type: Injectable
  }], () => [], null);
})();

// projects/color-picker-v2/src/lib/services/color-formats.ts
var MAT_COLOR_FORMATS = new InjectionToken("mat-color-formats");

// projects/color-picker-v2/src/lib/components/color-picker/color-picker.component.ts
var NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY = new InjectionToken("ngx-mat-colorpicker-scroll-strategy");
function NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY
};
var _NgxMatColorPickerContentComponent = class _NgxMatColorPickerContentComponent {
  constructor(elementRef) {
  }
};
_NgxMatColorPickerContentComponent.\u0275fac = function NgxMatColorPickerContentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorPickerContentComponent)(\u0275\u0275directiveInject(ElementRef));
};
_NgxMatColorPickerContentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatColorPickerContentComponent, selectors: [["ngx-mat-color-picker-content"]], viewQuery: function NgxMatColorPickerContentComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(NgxMatColorPaletteComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._palette = _t.first);
  }
}, hostAttrs: [1, "ngx-mat-colorpicker-content"], hostVars: 3, hostBindings: function NgxMatColorPickerContentComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275syntheticHostProperty("@transformPanel", "enter");
    \u0275\u0275classProp("ngx-mat-colorpicker-content-touch", ctx.picker.touchUi);
  }
}, inputs: { color: "color" }, exportAs: ["ngxMatColorPickerContent"], standalone: false, decls: 1, vars: 1, consts: [[3, "colorChanged", "color"]], template: function NgxMatColorPickerContentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngx-mat-color-palette", 0);
    \u0275\u0275listener("colorChanged", function NgxMatColorPickerContentComponent_Template_ngx_mat_color_palette_colorChanged_0_listener($event) {
      return ctx.picker.select($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", ctx.picker._selected);
  }
}, dependencies: [NgxMatColorPaletteComponent], styles: ["/* projects/color-picker-v2/src/lib/components/color-picker/color-picker-content.component.scss */\n.ngx-mat-colorpicker-content {\n  display: block;\n  border-radius: 4px;\n  box-shadow:\n    0 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0 4px 5px 0 rgba(0, 0, 0, 0.14),\n    0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  padding: 16px;\n}\n.ngx-mat-colorpicker-content .ngx-mat-color-palette {\n  width: 296px;\n  height: 354px;\n}\n.ngx-mat-colorpicker-content-touch {\n  display: block;\n  max-height: 80vh;\n  overflow: auto;\n}\n.ngx-mat-colorpicker-content-touch .ngx-mat-color-palette {\n  min-width: 250px;\n  min-height: 312px;\n  max-width: 750px;\n  max-height: 788px;\n}\n@media all and (orientation: landscape) {\n  .mat-colorpicker-content-touch .ngx-mat-color-palette {\n    width: 64vh;\n    height: 80vh;\n  }\n}\n@media all and (orientation: portrait) {\n  .mat-colorpicker-content-touch .ngx-mat-color-palette {\n    width: 80vw;\n    height: 100vw;\n  }\n}\n/*# sourceMappingURL=color-picker-content.component.css.map */\n"], encapsulation: 2, data: { animation: [
  matDatepickerAnimations.transformPanel,
  matDatepickerAnimations.fadeInCalendar
] }, changeDetection: 0 });
var NgxMatColorPickerContentComponent = _NgxMatColorPickerContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorPickerContentComponent, [{
    type: Component,
    args: [{ selector: "ngx-mat-color-picker-content", host: {
      class: "ngx-mat-colorpicker-content",
      "[@transformPanel]": '"enter"',
      "[class.ngx-mat-colorpicker-content-touch]": "picker.touchUi"
    }, animations: [
      matDatepickerAnimations.transformPanel,
      matDatepickerAnimations.fadeInCalendar
    ], exportAs: "ngxMatColorPickerContent", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, inputs: ["color"], standalone: false, template: '<ngx-mat-color-palette\r\n  (colorChanged)="picker.select($event)"\r\n  [color]="picker._selected"\r\n></ngx-mat-color-palette>\r\n', styles: ["/* projects/color-picker-v2/src/lib/components/color-picker/color-picker-content.component.scss */\n.ngx-mat-colorpicker-content {\n  display: block;\n  border-radius: 4px;\n  box-shadow:\n    0 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0 4px 5px 0 rgba(0, 0, 0, 0.14),\n    0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  padding: 16px;\n}\n.ngx-mat-colorpicker-content .ngx-mat-color-palette {\n  width: 296px;\n  height: 354px;\n}\n.ngx-mat-colorpicker-content-touch {\n  display: block;\n  max-height: 80vh;\n  overflow: auto;\n}\n.ngx-mat-colorpicker-content-touch .ngx-mat-color-palette {\n  min-width: 250px;\n  min-height: 312px;\n  max-width: 750px;\n  max-height: 788px;\n}\n@media all and (orientation: landscape) {\n  .mat-colorpicker-content-touch .ngx-mat-color-palette {\n    width: 64vh;\n    height: 80vh;\n  }\n}\n@media all and (orientation: portrait) {\n  .mat-colorpicker-content-touch .ngx-mat-color-palette {\n    width: 80vw;\n    height: 100vw;\n  }\n}\n/*# sourceMappingURL=color-picker-content.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }], { _palette: [{
    type: ViewChild,
    args: [NgxMatColorPaletteComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatColorPickerContentComponent, { className: "NgxMatColorPickerContentComponent", filePath: "projects/color-picker-v2/src/lib/components/color-picker/color-picker.component.ts", lineNumber: 77 });
})();
var _NgxMatColorPickerComponent = class _NgxMatColorPickerComponent {
  get disabled() {
    return this._disabled === void 0 && this._pickerInput ? this._pickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this._disabledChange.next(newValue);
    }
  }
  get touchUi() {
    return this._touchUi;
  }
  set touchUi(value) {
    this._touchUi = coerceBooleanProperty(value);
  }
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    value ? this.open() : this.close();
  }
  /** Default Color palette to use on the datepicker's calendar. */
  get defaultColor() {
    return this._defaultColor;
  }
  set defaultColor(value) {
    this._defaultColor = value;
  }
  /** Color palette to use on the datepicker's calendar. */
  get color() {
    return this._color || (this._pickerInput ? this._pickerInput.getThemePalette() : void 0);
  }
  set color(value) {
    this._color = value;
  }
  /** The currently selected date. */
  get _selected() {
    return this._validSelected;
  }
  set _selected(value) {
    this._validSelected = value;
  }
  constructor(_dialog, _overlay, _zone, _adapter, _dir, scrollStrategy, _document, _viewContainerRef) {
    this._dialog = _dialog;
    this._overlay = _overlay;
    this._zone = _zone;
    this._adapter = _adapter;
    this._dir = _dir;
    this._document = _document;
    this._viewContainerRef = _viewContainerRef;
    this.openedStream = new EventEmitter();
    this.closedStream = new EventEmitter();
    this._touchUi = false;
    this._opened = false;
    this._defaultColor = "primary";
    this._validSelected = null;
    this._disabledChange = new Subject();
    this._focusedElementBeforeOpen = null;
    this._inputSubscription = Subscription.EMPTY;
    this._selectedChanged = new Subject();
    this._scrollStrategy = scrollStrategy;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.close();
    this._inputSubscription.unsubscribe();
    this._disabledChange.complete();
    if (this._popupRef) {
      this._popupRef.dispose();
      this._popupComponentRef = null;
    }
  }
  /** Selects the given date */
  select(nextVal) {
    let oldValue = this._selected;
    this._selected = nextVal;
    if (!this._adapter.sameColor(oldValue, this._selected)) {
      this._selectedChanged.next(nextVal);
    }
  }
  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   */
  registerInput(input) {
    if (this._pickerInput) {
      throw Error("A ColorPicker can only be associated with a single input.");
    }
    this._pickerInput = input;
    this._inputSubscription = this._pickerInput._valueChange.subscribe((value) => this._selected = value);
  }
  open() {
    if (this._opened || this.disabled) {
      return;
    }
    if (!this._pickerInput) {
      throw Error("Attempted to open an ColorPicker with no associated input.");
    }
    if (this._document) {
      this._focusedElementBeforeOpen = this._document.activeElement;
    }
    this.touchUi ? this._openAsDialog() : this._openAsPopup();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Open the calendar as a dialog. */
  _openAsDialog() {
    if (this._dialogRef) {
      this._dialogRef.close();
    }
    this._dialogRef = this._dialog.open(NgxMatColorPickerContentComponent, {
      direction: this._dir ? this._dir.value : "ltr",
      viewContainerRef: this._viewContainerRef,
      panelClass: "ngx-mat-colorpicker-dialog"
    });
    this._dialogRef.afterClosed().subscribe(() => this.close());
    this._dialogRef.componentInstance.picker = this;
    this._setColor();
  }
  /** Open the calendar as a popup. */
  _openAsPopup() {
    if (!this._portal) {
      this._portal = new ComponentPortal(NgxMatColorPickerContentComponent, this._viewContainerRef);
    }
    if (!this._popupRef) {
      this._createPopup();
    }
    if (!this._popupRef.hasAttached()) {
      this._popupComponentRef = this._popupRef.attach(this._portal);
      this._popupComponentRef.instance.picker = this;
      this._setColor();
      this._zone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this._popupRef.updatePosition();
      });
    }
  }
  /** Create the popup. */
  _createPopup() {
    const overlayConfig = new OverlayConfig({
      positionStrategy: this._createPopupPositionStrategy(),
      hasBackdrop: true,
      backdropClass: "mat-overlay-transparent-backdrop",
      direction: this._dir,
      scrollStrategy: this._scrollStrategy(),
      panelClass: "mat-colorpicker-popup"
    });
    this._popupRef = this._overlay.create(overlayConfig);
    this._popupRef.overlayElement.setAttribute("role", "dialog");
    merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(filter((event) => {
      return event.keyCode === ESCAPE || this._pickerInput && event.altKey && event.keyCode === UP_ARROW;
    }))).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
  }
  close() {
    if (!this._opened) {
      return;
    }
    if (this._popupRef && this._popupRef.hasAttached()) {
      this._popupRef.detach();
    }
    if (this._dialogRef) {
      this._dialogRef.close();
      this._dialogRef = null;
    }
    if (this._portal && this._portal.isAttached) {
      this._portal.detach();
    }
    const completeClose = () => {
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
        this._focusedElementBeforeOpen = null;
      }
    };
    if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === "function") {
      this._focusedElementBeforeOpen.focus();
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /** Passes the current theme color along to the calendar overlay. */
  _setColor() {
    const color = this.color;
  }
  /** Create the popup PositionStrategy. */
  _createPopupPositionStrategy() {
    return this._overlay.position().flexibleConnectedTo(this._pickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".ngx-mat-colorpicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition().withPositions([
      {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
      },
      {
        originX: "end",
        originY: "bottom",
        overlayX: "end",
        overlayY: "top"
      },
      {
        originX: "end",
        originY: "top",
        overlayX: "end",
        overlayY: "bottom"
      }
    ]);
  }
};
_NgxMatColorPickerComponent.\u0275fac = function NgxMatColorPickerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorPickerComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ColorAdapter), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY), \u0275\u0275directiveInject(DOCUMENT, 8), \u0275\u0275directiveInject(ViewContainerRef));
};
_NgxMatColorPickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatColorPickerComponent, selectors: [["ngx-mat-color-picker"]], inputs: { disabled: "disabled", touchUi: "touchUi", opened: "opened", defaultColor: "defaultColor", color: "color" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["ngxMatColorPicker"], standalone: false, decls: 0, vars: 0, template: function NgxMatColorPickerComponent_Template(rf, ctx) {
}, encapsulation: 2, changeDetection: 0 });
var NgxMatColorPickerComponent = _NgxMatColorPickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorPickerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-mat-color-picker",
      template: "",
      exportAs: "ngxMatColorPicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      standalone: false
    }]
  }], () => [{ type: MatDialog }, { type: Overlay }, { type: NgZone }, { type: ColorAdapter }, { type: Directionality, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Inject,
    args: [NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY]
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: ViewContainerRef }], { openedStream: [{
    type: Output,
    args: ["opened"]
  }], closedStream: [{
    type: Output,
    args: ["closed"]
  }], disabled: [{
    type: Input
  }], touchUi: [{
    type: Input
  }], opened: [{
    type: Input
  }], defaultColor: [{
    type: Input
  }], color: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatColorPickerComponent, { className: "NgxMatColorPickerComponent", filePath: "projects/color-picker-v2/src/lib/components/color-picker/color-picker.component.ts", lineNumber: 95 });
})();

// projects/color-picker-v2/src/lib/components/color-picker/color-input.component.ts
var NgxMatColorPickerInputEvent = class {
  constructor(target, targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
};
var MAT_COLORPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxMatColorPickerInput),
  multi: true
};
var MAT_COLORPICKER_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NgxMatColorPickerInput),
  multi: true
};
var _NgxMatColorPickerInput = class _NgxMatColorPickerInput {
  set ngxMatColorPicker(value) {
    if (!value) {
      return;
    }
    this._picker = value;
    this._picker.registerInput(this);
    this._pickerSubscription.unsubscribe();
    this._pickerSubscription = this._picker._selectedChanged.subscribe((selected) => {
      this.value = selected;
      this._cvaOnChange(selected);
      this._onTouched();
      this.colorInput.emit(new NgxMatColorPickerInputEvent(this, this._elementRef.nativeElement));
      this.colorChange.emit(new NgxMatColorPickerInputEvent(this, this._elementRef.nativeElement));
    });
  }
  /** Whether the colorpicker-input is disabled. */
  get disabled() {
    return !!this._disabled;
  }
  set disabled(value) {
    const newValue = coerceBooleanProperty(value);
    const element = this._elementRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this._disabledChange.emit(newValue);
    }
    if (newValue && element.blur) {
      element.blur();
    }
  }
  /** The value of the input. */
  get value() {
    return this._value;
  }
  set value(value) {
    const oldValue = this.value;
    this._value = value;
    this._formatValue(value);
    if (!this._adapter.sameColor(oldValue, value)) {
      this._valueChange.emit(value);
    }
  }
  constructor(_elementRef, _formField, _colorFormats, _adapter) {
    this._elementRef = _elementRef;
    this._formField = _formField;
    this._colorFormats = _colorFormats;
    this._adapter = _adapter;
    this.colorChange = new EventEmitter();
    this.colorInput = new EventEmitter();
    this._disabledChange = new EventEmitter();
    this._valueChange = new EventEmitter();
    this._onTouched = () => {
    };
    this._cvaOnChange = () => {
    };
    this._validatorOnChange = () => {
    };
    this._pickerSubscription = Subscription.EMPTY;
    this._validator = Validators.compose([]);
    this._lastValueValid = false;
    if (!this._colorFormats) {
      throw createMissingDateImplError("MAT_COLOR_FORMATS");
    }
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  /**
   * @deprecated
   * @breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
   */
  getPopupConnectionElementRef() {
    return this.getConnectedOverlayOrigin();
  }
  /**
  * Gets the element that the colorpicker popup should be connected to.
  * @return The element to connect the popup to.
  */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this._pickerSubscription.unsubscribe();
    this._valueChange.complete();
    this._disabledChange.complete();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.value = value;
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
  _onChange() {
    this.colorChange.emit(new NgxMatColorPickerInputEvent(this, this._elementRef.nativeElement));
  }
  _onKeydown(event) {
    const isAltDownArrow = event.altKey && event.keyCode === DOWN_ARROW;
    if (this._picker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._picker.open();
      event.preventDefault();
    }
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
    this._elementRef.nativeElement.value = value ? this._adapter.format(value, this._colorFormats.display.colorInput) : "";
  }
  _onInput(value) {
    const lastValueWasValid = this._lastValueValid;
    const nextValue = this._adapter.parse(value);
    if (!this._adapter.sameColor(nextValue, this._value)) {
      this._value = nextValue;
      this._cvaOnChange(nextValue);
      this._valueChange.emit(nextValue);
      this.colorInput.emit(new NgxMatColorPickerInputEvent(this, this._elementRef.nativeElement));
    } else if (lastValueWasValid !== this._lastValueValid) {
      this._validatorOnChange();
    }
  }
};
_NgxMatColorPickerInput.\u0275fac = function NgxMatColorPickerInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorPickerInput)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatFormField, 8), \u0275\u0275directiveInject(MAT_COLOR_FORMATS, 8), \u0275\u0275directiveInject(ColorAdapter));
};
_NgxMatColorPickerInput.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatColorPickerInput, selectors: [["input", "ngxMatColorPicker", ""]], hostVars: 3, hostBindings: function NgxMatColorPickerInput_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("input", function NgxMatColorPickerInput_input_HostBindingHandler($event) {
      return ctx._onInput($event.target.value);
    })("change", function NgxMatColorPickerInput_change_HostBindingHandler() {
      return ctx._onChange();
    })("blur", function NgxMatColorPickerInput_blur_HostBindingHandler() {
      return ctx._onBlur();
    })("keydown", function NgxMatColorPickerInput_keydown_HostBindingHandler($event) {
      return ctx._onKeydown($event);
    });
  }
  if (rf & 2) {
    \u0275\u0275hostProperty("disabled", ctx.disabled);
    \u0275\u0275attribute("aria-haspopup", ctx._picker ? "dialog" : null)("aria-owns", (ctx._picker == null ? null : ctx._picker.opened) && ctx._picker.id || null);
  }
}, inputs: { ngxMatColorPicker: "ngxMatColorPicker", disabled: "disabled", value: "value" }, outputs: { colorChange: "colorChange", colorInput: "colorInput" }, exportAs: ["ngxMatColorPickerInput"], standalone: false, features: [\u0275\u0275ProvidersFeature([
  MAT_COLORPICKER_VALUE_ACCESSOR,
  MAT_COLORPICKER_VALIDATORS,
  { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: _NgxMatColorPickerInput }
])] });
var NgxMatColorPickerInput = _NgxMatColorPickerInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorPickerInput, [{
    type: Directive,
    args: [{
      selector: "input[ngxMatColorPicker]",
      providers: [
        MAT_COLORPICKER_VALUE_ACCESSOR,
        MAT_COLORPICKER_VALIDATORS,
        { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: NgxMatColorPickerInput }
      ],
      host: {
        "[attr.aria-haspopup]": '_picker ? "dialog" : null',
        "[attr.aria-owns]": "(_picker?.opened && _picker.id) || null",
        "[disabled]": "disabled",
        "(input)": "_onInput($event.target.value)",
        "(change)": "_onChange()",
        "(blur)": "_onBlur()",
        "(keydown)": "_onKeydown($event)"
      },
      exportAs: "ngxMatColorPickerInput",
      standalone: false
    }]
  }], () => [{ type: ElementRef }, { type: MatFormField, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [MAT_COLOR_FORMATS]
  }] }, { type: ColorAdapter }], { ngxMatColorPicker: [{
    type: Input
  }], disabled: [{
    type: Input
  }], value: [{
    type: Input
  }], colorChange: [{
    type: Output
  }], colorInput: [{
    type: Output
  }] });
})();

// projects/color-picker-v2/src/lib/components/color-toggle/color-toggle.component.ts
var _c02 = ["button"];
var _c1 = [[["", "ngxMatColorpickerToggleIcon", ""]]];
var _c2 = ["[ngxMatColorpickerToggleIcon]"];
function NgxMatColorToggleComponent_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, " palette ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r1.picker == null ? null : ctx_r1.picker._selected == null ? null : ctx_r1.picker._selected.rgba);
  }
}
var _NgxMatColorpickerToggleIcon = class _NgxMatColorpickerToggleIcon {
};
_NgxMatColorpickerToggleIcon.\u0275fac = function NgxMatColorpickerToggleIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorpickerToggleIcon)();
};
_NgxMatColorpickerToggleIcon.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NgxMatColorpickerToggleIcon, selectors: [["", "ngxMatColorpickerToggleIcon", ""]], standalone: false });
var NgxMatColorpickerToggleIcon = _NgxMatColorpickerToggleIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorpickerToggleIcon, [{
    type: Directive,
    args: [{
      selector: "[ngxMatColorpickerToggleIcon]",
      standalone: false
    }]
  }], null, null);
})();
var _NgxMatColorToggleComponent = class _NgxMatColorToggleComponent {
  get disabled() {
    if (this._disabled == null && this.picker) {
      return this.picker.disabled;
    }
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor(_cd) {
    this._cd = _cd;
    this._stateChanges = Subscription.EMPTY;
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes["picker"]) {
      this._watchStateChanges();
    }
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  open(event) {
    if (this.picker && !this.disabled) {
      this.picker.open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const disabled$ = this.picker ? this.picker._disabledChange : of();
    const inputDisabled$ = this.picker && this.picker._pickerInput ? this.picker._pickerInput._disabledChange : of();
    const pickerToggled$ = this.picker ? merge(this.picker.openedStream, this.picker.closedStream) : of();
    this._stateChanges.unsubscribe();
    this._stateChanges = merge(disabled$, inputDisabled$, pickerToggled$).subscribe(() => this._cd.markForCheck());
  }
};
_NgxMatColorToggleComponent.\u0275fac = function NgxMatColorToggleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorToggleComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_NgxMatColorToggleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NgxMatColorToggleComponent, selectors: [["ngx-mat-color-toggle"]], contentQueries: function NgxMatColorToggleComponent_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuery(dirIndex, NgxMatColorpickerToggleIcon, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._customIcon = _t.first);
  }
}, viewQuery: function NgxMatColorToggleComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._button = _t.first);
  }
}, hostAttrs: [1, "ngx-mat-color-toggle"], hostVars: 7, hostBindings: function NgxMatColorToggleComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("focus", function NgxMatColorToggleComponent_focus_HostBindingHandler() {
      return ctx._button.focus();
    });
  }
  if (rf & 2) {
    \u0275\u0275attribute("tabindex", -1);
    \u0275\u0275classProp("ngx-mat-color-toggle-active", ctx.picker && ctx.picker.opened)("mat-accent", ctx.picker && ctx.picker.color === "accent")("mat-warn", ctx.picker && ctx.picker.color === "warn");
  }
}, inputs: { picker: [0, "for", "picker"], tabIndex: "tabIndex", disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["ngxMatColorPickerToggle"], standalone: false, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c2, decls: 4, vars: 5, consts: [["button", ""], ["mat-icon-button", "", "type", "button", 3, "click", "disabled", "disableRipple"], [3, "color", 4, "ngIf"]], template: function NgxMatColorToggleComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275projectionDef(_c1);
    \u0275\u0275elementStart(0, "button", 1, 0);
    \u0275\u0275listener("click", function NgxMatColorToggleComponent_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.open($event));
    });
    \u0275\u0275template(2, NgxMatColorToggleComponent_mat_icon_2_Template, 2, 2, "mat-icon", 2);
    \u0275\u0275projection(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
    \u0275\u0275attribute("aria-haspopup", ctx.picker ? "dialog" : null)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx._customIcon);
  }
}, dependencies: [NgIf, MatIconButton, MatIcon], styles: ["/* projects/color-picker-v2/src/lib/components/color-toggle/color-toggle.component.scss */\n.mat-form-field-appearance .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,\n.mat-form-field-appearance .mat-form-field-suffix .ngx-mat-color-toggle-default-icon {\n  width: 1em;\n}\n.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,\n.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-suffix .ngx-mat-color-toggle-default-icon {\n  display: block;\n  width: 1.5em;\n  height: 1.5em;\n}\n.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-prefix .mat-icon-button .ngx-mat-color-toggle-default-icon,\n.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-suffix .mat-icon-button .ngx-mat-color-toggle-default-icon {\n  margin: auto;\n}\n/*# sourceMappingURL=color-toggle.component.css.map */\n"], encapsulation: 2 });
var NgxMatColorToggleComponent = _NgxMatColorToggleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorToggleComponent, [{
    type: Component,
    args: [{ selector: "ngx-mat-color-toggle", host: {
      "class": "ngx-mat-color-toggle",
      // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
      // consumer may have provided, while still being able to receive focus.
      "[attr.tabindex]": "-1",
      "[class.ngx-mat-color-toggle-active]": "picker && picker.opened",
      "[class.mat-accent]": 'picker && picker.color === "accent"',
      "[class.mat-warn]": 'picker && picker.color === "warn"',
      "(focus)": "_button.focus()"
    }, exportAs: "ngxMatColorPickerToggle", encapsulation: ViewEncapsulation.None, standalone: false, template: '<button #button mat-icon-button type="button" [attr.aria-haspopup]="picker ? \'dialog\' : null"\r\n  [attr.tabindex]="disabled ? -1 : tabIndex" [disabled]="disabled" (click)="open($event)"\r\n  [disableRipple]="disableRipple">\r\n\r\n  <mat-icon *ngIf="!_customIcon" [style.color]="picker?._selected?.rgba">\r\n    palette\r\n  </mat-icon>\r\n\r\n  <ng-content select="[ngxMatColorpickerToggleIcon]"></ng-content>\r\n\r\n</button>', styles: ["/* projects/color-picker-v2/src/lib/components/color-toggle/color-toggle.component.scss */\n.mat-form-field-appearance .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,\n.mat-form-field-appearance .mat-form-field-suffix .ngx-mat-color-toggle-default-icon {\n  width: 1em;\n}\n.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,\n.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-suffix .ngx-mat-color-toggle-default-icon {\n  display: block;\n  width: 1.5em;\n  height: 1.5em;\n}\n.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-prefix .mat-icon-button .ngx-mat-color-toggle-default-icon,\n.mat-form-field:not(.mat-form-field-appearance) .mat-form-field-suffix .mat-icon-button .ngx-mat-color-toggle-default-icon {\n  margin: auto;\n}\n/*# sourceMappingURL=color-toggle.component.css.map */\n"] }]
  }], () => [{ type: ChangeDetectorRef }], { picker: [{
    type: Input,
    args: ["for"]
  }], tabIndex: [{
    type: Input
  }], disabled: [{
    type: Input
  }], disableRipple: [{
    type: Input
  }], _customIcon: [{
    type: ContentChild,
    args: [NgxMatColorpickerToggleIcon]
  }], _button: [{
    type: ViewChild,
    args: ["button"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NgxMatColorToggleComponent, { className: "NgxMatColorToggleComponent", filePath: "projects/color-picker-v2/src/lib/components/color-toggle/color-toggle.component.ts", lineNumber: 33 });
})();

// projects/color-picker-v2/src/lib/color-picker.module.ts
var _NgxMatColorPickerModule = class _NgxMatColorPickerModule {
};
_NgxMatColorPickerModule.\u0275fac = function NgxMatColorPickerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMatColorPickerModule)();
};
_NgxMatColorPickerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NgxMatColorPickerModule });
_NgxMatColorPickerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  ColorAdapter,
  NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
], imports: [
  CommonModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatRadioModule,
  FormsModule,
  ReactiveFormsModule,
  MatDialogModule,
  PortalModule,
  MatIconModule
] });
var NgxMatColorPickerModule = _NgxMatColorPickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMatColorPickerModule, [{
    type: NgModule,
    args: [{
      declarations: [
        NgxMatColorPaletteComponent,
        NgxMatColorCanvasComponent,
        NgxMatColorCollectionComponent,
        NgxMatColorSliderComponent,
        NumericColorInputDirective,
        NgxMatColorPickerContentComponent,
        NgxMatColorPickerComponent,
        NgxMatColorToggleComponent,
        NgxMatColorpickerToggleIcon,
        NgxMatColorPickerInput
      ],
      imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        PortalModule,
        MatIconModule
      ],
      exports: [
        NgxMatColorToggleComponent,
        NgxMatColorPickerInput,
        NgxMatColorPickerComponent,
        NgxMatColorpickerToggleIcon
      ],
      providers: [
        ColorAdapter,
        NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
      ]
    }]
  }], null, null);
})();

// src/app/demo-colorpicker/demo-colorpicker.component.ts
function DemoColorpickerComponent_mat_radio_button_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 30);
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
function DemoColorpickerComponent_mat_radio_button_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 30);
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
function DemoColorpickerComponent_mat_option_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 31);
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
var _DemoColorpickerComponent = class _DemoColorpickerComponent {
  constructor() {
    this.disabled = false;
    this.color = "primary";
    this.touchUi = false;
    this.colorCtr = new FormControl(new Color(0, 255, 255), [
      Validators.required
    ]);
    this.options = [
      { value: true, label: "True" },
      { value: false, label: "False" }
    ];
    this.listColors = ["primary", "accent", "warn"];
    this.code3 = '<mat-form-field>\n  <input matInput [ngxMatColorPicker]="picker" [formControl]="colorCtr" [disabled]="disabled">\n  <ngx-mat-color-toggle matSuffix [for]="picker"></ngx-mat-color-toggle>\n  <ngx-mat-color-picker #picker [touchUi]="touchUi" [color]="color"></ngx-mat-color-picker>\n</mat-form-field>';
    this.code6 = "\nimport { Color } from '@angular-material-components/color-picker';\ncolorCtr: AbstractControl = new FormControl(new Color(255, 243, 0), [Validators.required]);";
    this.code1 = "npm install --save @angular-material-components/color-picker";
    this.code2 = "import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } \n  from '@angular-material-components/color-picker'\n\n  @NgModule({\n    ...\n    imports: [\n         ...\n         NgxMatColorPickerModule\n    ],\n    providers: [\n     { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }\n    ],\n    ...\n })\n export class AppModule { }";
    this.code4 = "export const CUSTOM_MAT_COLOR_FORMATS: MatColorFormats = {\n    display: {\n        colorInput: 'hex'\n    }\n}\n\n@NgModule({\n    ...\n    providers: [\n      { provide: MAT_COLOR_FORMATS, useValue: CUSTOM_MAT_COLOR_FORMATS }\n    ],\n    ...\n  })\nexport class AppModule { }";
    this.code5 = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">';
    this.code7 = '<mat-form-field>\n  <input matInput [ngxMatColorPicker]="pickerCustomIcon" [formControl]="colorCtr" [disabled]="disabled">\n  <ngx-mat-color-toggle matSuffix [for]="pickerCustomIcon">\n    <mat-icon ngxMatColorpickerToggleIcon>keyboard_arrow_down</mat-icon>\n  </ngx-mat-color-toggle>\n  <ngx-mat-color-picker #pickerCustomIcon [touchUi]="touchUi" [color]="color"></ngx-mat-color-picker>\n</mat-form-field>';
  }
  ngOnInit() {
  }
  onDisabledChanged(value) {
    if (!value) {
      this.colorCtr.enable();
    } else {
      this.colorCtr.disable();
    }
  }
};
_DemoColorpickerComponent.\u0275fac = function DemoColorpickerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DemoColorpickerComponent)();
};
_DemoColorpickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoColorpickerComponent, selectors: [["ngx-mat-demo-colorpicker"]], standalone: false, decls: 139, vars: 33, consts: [["picker", ""], ["pickerCustomIcon", ""], [3, "mat-stretch-tabs"], ["label", "API"], ["href", "https://www.npmjs.com/package/@angular-material-components/color-picker", "target", "_blank"], ["src", "https://badge.fury.io/js/%40angular-material-components%2Fcolor-picker.svg"], ["ngxMatHighlight", ""], ["ngxMatHighlight", "", 1, "language-typescript"], [1, "api-table-properties"], ["href", "https://material.angular.io/guide/theming#using-a-pre-built-theme"], ["ngxMatHighlight", "", 1, "language-css"], ["label", "Example"], [1, "zone", "zone-value"], [1, "row"], [1, "zone", "zone-picker"], ["matInput", "", 3, "ngxMatColorPicker", "formControl", "disabled"], ["matSuffix", "", 3, "for"], [3, "touchUi", "color"], [1, "zone", "zone-config"], [1, "config-wrapper"], [1, "label"], ["aria-label", "Select an option", 3, "ngModelChange", "color", "ngModel"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Select an option", 3, "ngModelChange", "ngModel", "color"], [3, "color"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["ngxMatHighlight", "", 1, "html"], ["ngxMatHighlight", "", 1, "language-html"], ["ngxMatColorpickerToggleIcon", ""], [1, "example-radio-button", 3, "value"], [3, "value"]], template: function DemoColorpickerComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-group", 2)(1, "mat-tab", 3)(2, "h1");
    \u0275\u0275text(3, "API reference for @angular-material-components/color-picker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Getting started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 4);
    \u0275\u0275element(7, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "pre")(9, "code", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h2");
    \u0275\u0275text(12, "Setup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "pre")(14, "code", 7);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h2");
    \u0275\u0275text(17, "Properties @Input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "table", 8)(19, "tbody")(20, "tr")(21, "th");
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
    \u0275\u0275text(39, "If true, the picker is readonly and can't be modified");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "tr")(41, "td")(42, "div");
    \u0275\u0275text(43, "touchUi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45, "boolean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47, "false");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td")(49, "p");
    \u0275\u0275text(50, " Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "tr")(52, "td")(53, "div");
    \u0275\u0275text(54, "color");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56, "ThemePalette");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td");
    \u0275\u0275text(58, "undefined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td")(60, "p");
    \u0275\u0275text(61, "Color palette to use on the color picker");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "h2");
    \u0275\u0275text(63, "Choosing color format settings to display in input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p");
    \u0275\u0275text(65, " The color-picker use ");
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67, "NGX_MAT_COLOR_FORMATS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " by default. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p");
    \u0275\u0275text(70, " You can also customize the color format by providing your custom MAT_COLOR_FORMATS in your module. ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " For example: ");
    \u0275\u0275elementStart(72, "pre")(73, "code", 7);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "h2");
    \u0275\u0275text(76, "Theming");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "p");
    \u0275\u0275text(78, " @see @angular/material ");
    \u0275\u0275elementStart(79, "a", 9);
    \u0275\u0275text(80, "Using a pre-built theme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "p");
    \u0275\u0275text(82, "Add the Material Design icon font to your index.html");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "pre")(84, "code", 10);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "mat-tab", 11)(87, "mat-card", 12)(88, "mat-card-content")(89, "div", 13);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 13);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "mat-card", 14)(94, "mat-card-content")(95, "mat-form-field");
    \u0275\u0275element(96, "input", 15)(97, "ngx-mat-color-toggle", 16)(98, "ngx-mat-color-picker", 17, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "mat-card", 18)(101, "div", 19)(102, "span", 20);
    \u0275\u0275text(103, "disabled (Default: false) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "mat-radio-group", 21);
    \u0275\u0275listener("ngModelChange", function DemoColorpickerComponent_Template_mat_radio_group_ngModelChange_104_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onDisabledChanged($event));
    });
    \u0275\u0275template(105, DemoColorpickerComponent_mat_radio_button_105_Template, 2, 2, "mat-radio-button", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 19)(107, "span", 20);
    \u0275\u0275text(108, "touchUi (Default: false) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "mat-radio-group", 23);
    \u0275\u0275twoWayListener("ngModelChange", function DemoColorpickerComponent_Template_mat_radio_group_ngModelChange_109_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.touchUi, $event) || (ctx.touchUi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(110, DemoColorpickerComponent_mat_radio_button_110_Template, 2, 2, "mat-radio-button", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 19)(112, "span", 20);
    \u0275\u0275text(113, "color (Default: primary) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "mat-form-field", 24)(115, "mat-label");
    \u0275\u0275text(116, "Select color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function DemoColorpickerComponent_Template_mat_select_ngModelChange_117_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.color, $event) || (ctx.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(118, DemoColorpickerComponent_mat_option_118_Template, 2, 2, "mat-option", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(119, "pre")(120, "code", 7);
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "pre")(123, "code", 27);
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "h2");
    \u0275\u0275text(126, "Color picker with custom icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "pre")(128, "code", 28);
    \u0275\u0275text(129);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "mat-card", 14)(131, "mat-card-content")(132, "mat-form-field");
    \u0275\u0275element(133, "input", 15);
    \u0275\u0275elementStart(134, "ngx-mat-color-toggle", 16)(135, "mat-icon", 29);
    \u0275\u0275text(136, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(137, "ngx-mat-color-picker", 17, 1);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const picker_r5 = \u0275\u0275reference(99);
    const pickerCustomIcon_r6 = \u0275\u0275reference(138);
    \u0275\u0275property("mat-stretch-tabs", false);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.code1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.code2);
    \u0275\u0275advance(59);
    \u0275\u0275textInterpolate(ctx.code4);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.code5);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", ctx.colorCtr.value == null ? null : ctx.colorCtr.value.rgba);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" HEX: ", ctx.colorCtr.value == null ? null : ctx.colorCtr.value.hex, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("RGBA: ", ctx.colorCtr.value == null ? null : ctx.colorCtr.value.rgba, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngxMatColorPicker", picker_r5)("formControl", ctx.colorCtr)("disabled", ctx.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r5);
    \u0275\u0275advance();
    \u0275\u0275property("touchUi", ctx.touchUi)("color", ctx.color);
    \u0275\u0275advance(6);
    \u0275\u0275property("color", ctx.color)("ngModel", ctx.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.options);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.touchUi);
    \u0275\u0275property("color", ctx.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.options);
    \u0275\u0275advance(4);
    \u0275\u0275property("color", ctx.color);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.listColors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.code6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.code3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.code7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngxMatColorPicker", pickerCustomIcon_r6)("formControl", ctx.colorCtr)("disabled", ctx.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("for", pickerCustomIcon_r6);
    \u0275\u0275advance(3);
    \u0275\u0275property("touchUi", ctx.touchUi)("color", ctx.color);
  }
}, dependencies: [NgForOf, NgxMatColorToggleComponent, NgxMatColorPickerInput, NgxMatColorPickerComponent, NgxMatColorpickerToggleIcon, MatCard, MatCardContent, DefaultValueAccessor, NgControlStatus, NgModel, FormControlDirective, MatFormField, MatLabel, MatSuffix, MatInput, MatRadioGroup, MatRadioButton, MatSelect, MatOption, MatIcon, NgxMatHighlightDirective, MatTab, MatTabGroup], styles: ["\n\n.config-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 15px;\n  display: block;\n  width: 225px;\n}\n.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  width: 100px;\n}\n.zone[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.zone-value[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.zone-config[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.api-table-properties[_ngcontent-%COMP%] {\n  text-align: left;\n  border-radius: 2px;\n  border-spacing: 0;\n  margin: 0 0 32px;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 2px;\n  background-color: white;\n}\n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n  vertical-align: middle;\n}\n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  padding: 8px 16px;\n}\n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, \n.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  font-weight: bold;\n}\n.zone-value[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.zone-value[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px;\n  max-width: 200px;\n}\n/*# sourceMappingURL=demo-colorpicker.component.css.map */"] });
var DemoColorpickerComponent = _DemoColorpickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoColorpickerComponent, [{
    type: Component,
    args: [{ selector: "ngx-mat-demo-colorpicker", standalone: false, template: '<mat-tab-group [mat-stretch-tabs]="false">\r\n  <mat-tab label="API">\r\n    <h1>API reference for &#64;angular-material-components/color-picker</h1>\r\n    <h2>Getting started</h2>\r\n\r\n    <a\r\n      href="https://www.npmjs.com/package/@angular-material-components/color-picker"\r\n      target="_blank"\r\n    >\r\n      <img\r\n        src="https://badge.fury.io/js/%40angular-material-components%2Fcolor-picker.svg"\r\n      />\r\n    </a>\r\n\r\n    <pre><code ngxMatHighlight>{{code1}}</code></pre>\r\n\r\n    <h2>Setup</h2>\r\n    <pre><code ngxMatHighlight class="language-typescript">{{code2}}</code></pre>\r\n\r\n    <h2>Properties &#64;Input</h2>\r\n    <table class="api-table-properties">\r\n      <tbody>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>Default value</th>\r\n          <th>Description</th>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>\r\n            <div>disabled</div>\r\n          </td>\r\n          <td>boolean</td>\r\n          <td>null</td>\r\n          <td>\r\n            <p>If true, the picker is readonly and can\'t be modified</p>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>\r\n            <div>touchUi</div>\r\n          </td>\r\n          <td>boolean</td>\r\n          <td>false</td>\r\n          <td>\r\n            <p>\r\n              Whether the calendar UI is in touch mode. In touch mode the\r\n              calendar opens in a dialog rather than a popup and elements have\r\n              more padding to allow for bigger touch targets.\r\n            </p>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>\r\n            <div>color</div>\r\n          </td>\r\n          <td>ThemePalette</td>\r\n          <td>undefined</td>\r\n          <td>\r\n            <p>Color palette to use on the color picker</p>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <h2>Choosing color format settings to display in input</h2>\r\n\r\n    <p>\r\n      The color-picker use <strong>NGX_MAT_COLOR_FORMATS</strong> by default.\r\n    </p>\r\n\r\n    <p>\r\n      You can also customize the color format by providing your custom\r\n      MAT_COLOR_FORMATS in your module.\r\n    </p>\r\n    For example:\r\n    <pre><code ngxMatHighlight class="language-typescript">{{code4}}</code></pre>\r\n\r\n    <h2>Theming</h2>\r\n    <p>\r\n      &#64;see &#64;angular/material\r\n      <a\r\n        href="https://material.angular.io/guide/theming#using-a-pre-built-theme"\r\n        >Using a pre-built theme</a\r\n      >\r\n    </p>\r\n    <p>Add the Material Design icon font to your index.html</p>\r\n    <pre><code ngxMatHighlight class="language-css">{{code5}}</code></pre>\r\n  </mat-tab>\r\n  <mat-tab label="Example">\r\n    <mat-card class="zone zone-value">\r\n      <mat-card-content>\r\n        <div class="row" [style.background-color]="colorCtr.value?.rgba">\r\n          HEX: {{ colorCtr.value?.hex }}\r\n        </div>\r\n        <div class="row">RGBA: {{ colorCtr.value?.rgba }}</div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class="zone zone-picker">\r\n      <mat-card-content>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            [ngxMatColorPicker]="picker"\r\n            [formControl]="colorCtr"\r\n            [disabled]="disabled"\r\n          />\r\n          <ngx-mat-color-toggle matSuffix [for]="picker"></ngx-mat-color-toggle>\r\n          <ngx-mat-color-picker\r\n            #picker\r\n            [touchUi]="touchUi"\r\n            [color]="color"\r\n          ></ngx-mat-color-picker>\r\n        </mat-form-field>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class="zone zone-config">\r\n      <div class="config-wrapper">\r\n        <span class="label">disabled (Default: false) </span>\r\n        <mat-radio-group\r\n          aria-label="Select an option"\r\n          [color]="color"\r\n          [ngModel]="disabled"\r\n          (ngModelChange)="onDisabledChanged($event)"\r\n        >\r\n          <mat-radio-button\r\n            class="example-radio-button"\r\n            *ngFor="let option of options"\r\n            [value]="option.value"\r\n          >\r\n            {{ option.label }}</mat-radio-button\r\n          >\r\n        </mat-radio-group>\r\n      </div>\r\n\r\n      <div class="config-wrapper">\r\n        <span class="label">touchUi (Default: false) </span>\r\n        <mat-radio-group\r\n          aria-label="Select an option"\r\n          [(ngModel)]="touchUi"\r\n          [color]="color"\r\n        >\r\n          <mat-radio-button\r\n            class="example-radio-button"\r\n            *ngFor="let option of options"\r\n            [value]="option.value"\r\n          >\r\n            {{ option.label }}</mat-radio-button\r\n          >\r\n        </mat-radio-group>\r\n      </div>\r\n\r\n      <div class="config-wrapper">\r\n        <span class="label">color (Default: primary) </span>\r\n        <mat-form-field [color]="color">\r\n          <mat-label>Select color</mat-label>\r\n          <mat-select [(ngModel)]="color">\r\n            <mat-option *ngFor="let item of listColors" [value]="item">\r\n              {{ item }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <pre><code ngxMatHighlight class="language-typescript">{{code6}}</code></pre>\r\n    <pre><code ngxMatHighlight class="html">{{code3}}</code></pre>\r\n\r\n    <h2>Color picker with custom icon</h2>\r\n    <pre><code ngxMatHighlight class="language-html">{{code7}}</code></pre>\r\n\r\n    <mat-card class="zone zone-picker">\r\n      <mat-card-content>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            [ngxMatColorPicker]="pickerCustomIcon"\r\n            [formControl]="colorCtr"\r\n            [disabled]="disabled"\r\n          />\r\n          <ngx-mat-color-toggle matSuffix [for]="pickerCustomIcon">\r\n            <mat-icon ngxMatColorpickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n          </ngx-mat-color-toggle>\r\n          <ngx-mat-color-picker\r\n            #pickerCustomIcon\r\n            [touchUi]="touchUi"\r\n            [color]="color"\r\n          ></ngx-mat-color-picker>\r\n        </mat-form-field>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n', styles: ["/* src/app/demo-colorpicker/demo-colorpicker.component.scss */\n.config-wrapper {\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.config-wrapper .label {\n  font-weight: bold;\n  margin-right: 15px;\n  display: block;\n  width: 225px;\n}\n.config-wrapper .mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n.config-wrapper_step .mat-mdc-form-field {\n  margin-right: 20px;\n  width: 100px;\n}\n.zone {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.zone-value {\n  font-weight: bold;\n}\n.zone-config {\n  flex-direction: column;\n}\n.api-table-properties {\n  text-align: left;\n  border-radius: 2px;\n  border-spacing: 0;\n  margin: 0 0 32px;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 2px;\n  background-color: white;\n}\n.api-table-properties tbody {\n  display: table-row-group;\n  vertical-align: middle;\n}\n.api-table-properties tbody tr:nth-child(even) {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.api-table-properties tbody td,\n.api-table-properties tbody th {\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  padding: 8px 16px;\n}\n.api-table-properties tbody td:first-child,\n.api-table-properties tbody th:first-child {\n  font-weight: bold;\n}\n.zone-value {\n  display: flex;\n  flex-direction: column;\n}\n.zone-value .row {\n  display: block;\n  padding: 5px;\n  max-width: 200px;\n}\n/*# sourceMappingURL=demo-colorpicker.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoColorpickerComponent, { className: "DemoColorpickerComponent", filePath: "src/app/demo-colorpicker/demo-colorpicker.component.ts", lineNumber: 12 });
})();

// src/app/demo-colorpicker/demo-colorpicker.module.ts
var routes = [{ path: "", component: DemoColorpickerComponent }];
var CUSTOM_MAT_COLOR_FORMATS = {
  display: {
    colorInput: "hex8"
  }
};
var _DemoColorpickerModule = class _DemoColorpickerModule {
};
_DemoColorpickerModule.\u0275fac = function DemoColorpickerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DemoColorpickerModule)();
};
_DemoColorpickerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DemoColorpickerModule });
_DemoColorpickerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  { provide: MAT_COLOR_FORMATS, useValue: CUSTOM_MAT_COLOR_FORMATS }
], imports: [
  CommonModule,
  RouterModule.forChild(routes),
  NgxMatColorPickerModule,
  MatCardModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatIconModule,
  SharedModule
] });
var DemoColorpickerModule = _DemoColorpickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoColorpickerModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxMatColorPickerModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatIconModule,
        SharedModule
      ],
      providers: [
        { provide: MAT_COLOR_FORMATS, useValue: CUSTOM_MAT_COLOR_FORMATS }
      ],
      declarations: [DemoColorpickerComponent]
    }]
  }], null, null);
})();
export {
  DemoColorpickerModule
};
//# sourceMappingURL=demo-colorpicker.module-2SIIVSWL.js.map
