"use strict";
(self.webpackChunkangular_material_components =
  self.webpackChunkangular_material_components || []).push([
  [342],
  {
    2342: (E, h, i) => {
      i.r(h), i.d(h, { DemoDatetimeModule: () => d });
      var Z = i(6895),
        l = i(4006),
        _ = i(4859),
        m = i(3546),
        f = i(6709),
        s = i(9549),
        M = i(7392),
        T = i(4144),
        u = i(1948),
        b = i(4385),
        C = i(6630),
        g = i(8842),
        q = i(3288),
        e = i(4650),
        v = i(8428),
        k = i(7149),
        A = i(882),
        c = i(8056),
        w = i(3238),
        O = i(3425),
        U = i(3848);
      const x = ["picker"];
      function S(n, o) {
        if (
          (1 & n && (e.TgZ(0, "mat-radio-button", 35), e._uU(1), e.qZA()),
          2 & n)
        ) {
          const t = o.$implicit;
          e.Q6J("value", t.value), e.xp6(1), e.hij(" ", t.label, "");
        }
      }
      function y(n, o) {
        if (
          (1 & n && (e.TgZ(0, "mat-radio-button", 35), e._uU(1), e.qZA()),
          2 & n)
        ) {
          const t = o.$implicit;
          e.Q6J("value", t.value), e.xp6(1), e.hij(" ", t.label, "");
        }
      }
      function J(n, o) {
        if (
          (1 & n && (e.TgZ(0, "mat-radio-button", 35), e._uU(1), e.qZA()),
          2 & n)
        ) {
          const t = o.$implicit;
          e.Q6J("value", t.value), e.xp6(1), e.hij(" ", t.label, "");
        }
      }
      function P(n, o) {
        if (
          (1 & n && (e.TgZ(0, "mat-radio-button", 35), e._uU(1), e.qZA()),
          2 & n)
        ) {
          const t = o.$implicit;
          e.Q6J("value", t.value), e.xp6(1), e.hij(" ", t.label, "");
        }
      }
      function N(n, o) {
        if (
          (1 & n && (e.TgZ(0, "mat-radio-button", 35), e._uU(1), e.qZA()),
          2 & n)
        ) {
          const t = o.$implicit;
          e.Q6J("value", t.value), e.xp6(1), e.hij(" ", t.label, "");
        }
      }
      function Q(n, o) {
        if (
          (1 & n && (e.TgZ(0, "mat-radio-button", 35), e._uU(1), e.qZA()),
          2 & n)
        ) {
          const t = o.$implicit;
          e.Q6J("value", t.value), e.xp6(1), e.hij(" ", t.label, "");
        }
      }
      function I(n, o) {
        if (
          (1 & n && (e.TgZ(0, "mat-radio-button", 35), e._uU(1), e.qZA()),
          2 & n)
        ) {
          const t = o.$implicit;
          e.Q6J("value", t.value), e.xp6(1), e.hij(" ", t.label, "");
        }
      }
      function H(n, o) {
        if ((1 & n && (e.TgZ(0, "mat-option", 36), e._uU(1), e.qZA()), 2 & n)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function F(n, o) {
        if ((1 & n && (e.TgZ(0, "mat-option", 36), e._uU(1), e.qZA()), 2 & n)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function j(n, o) {
        if ((1 & n && (e.TgZ(0, "mat-option", 36), e._uU(1), e.qZA()), 2 & n)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Y(n, o) {
        if ((1 & n && (e.TgZ(0, "mat-option", 36), e._uU(1), e.qZA()), 2 & n)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      class p {
        constructor() {
          (this.disabled = !1),
            (this.showSpinners = !0),
            (this.showSeconds = !1),
            (this.touchUi = !1),
            (this.enableMeridian = !1),
            (this.stepHour = 1),
            (this.stepMinute = 1),
            (this.stepSecond = 1),
            (this.color = "primary"),
            (this.disableMinute = !1),
            (this.hideTime = !1),
            (this.dateControl = new l.NI(new Date())),
            (this.options = [
              { value: !0, label: "True" },
              { value: !1, label: "False" },
            ]),
            (this.listColors = ["primary", "accent", "warn"]),
            (this.stepHours = [1, 2, 3, 4, 5]),
            (this.stepMinutes = [1, 5, 10, 15, 20, 25]),
            (this.stepSeconds = [1, 5, 10, 15, 20, 25]),
            (this.code1 =
              "npm install --save @angular-material-components/datetime-picker"),
            (this.code3 =
              '<mat-form-field>\n  <input matInput [ngxMatDatetimePicker]="picker" placeholder="Choose a date" [formControl]="dateControl"\n    [min]="minDate" [max]="maxDate" [disabled]="disabled">\n  <ngx-mat-datepicker-toggle matSuffix [for]="picker"></ngx-mat-datepicker-toggle>\n  <ngx-mat-datetime-picker #picker [showSpinners]="showSpinners" [showSeconds]="showSeconds"\n    [stepHour]="stepHour" [stepMinute]="stepMinute" [stepSecond]="stepSecond" [touchUi]="touchUi"\n    [color]="color" [enableMeridian]="enableMeridian" [disableMinute]="disableMinute" [hideTime]="hideTime">\n  </ngx-mat-datetime-picker>\n</mat-form-field>'),
            (this.code2 =
              "import {\n           NgxMatDatetimePickerModule, \n           NgxMatNativeDateModule, \n           NgxMatTimepickerComponent \n  } from '@angular-material-components/datetime-picker';\n  \n@NgModule({\n  imports: [\n    ...\n    NgxMatDatetimePickerModule,\n    NgxMatTimepickerComponent,\n    NgxMatNativeDateModule,\n    ...\n  ]\n})\nexport class AppModule { }"),
            (this.code4 =
              "npm install --save  @angular-material-components/moment-adapter"),
            (this.code5 =
              "@Injectable()\nexport class CustomDateAdapter extends NgxMatDateAdapter<D> {...}\n// D can be Date, Moment or customized type"),
            (this.code6 =
              "@NgModule({\n  providers: [\n    {\n      provide: NgxMatDateAdapter,\n      useClass: CustomDateAdapter,\n      deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]\n    }\n  ],\n})\nexport class CustomDateModule { }"),
            (this.code7 =
              '// If using Moment\nconst CUSTOM_DATE_FORMATS: NgxMatDateFormats = {\n  parse: {\n    dateInput: "l, LTS"\n  },\n  display: {\n    dateInput: "l, LTS",\n    monthYearLabel: "MMM YYYY",\n    dateA11yLabel: "LL",\n    monthYearA11yLabel: "MMMM YYYY"\n  }\n};\n\n//and in the module providers \nproviders: [\n    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_FORMATS }\n  ]'),
            (this.code8 =
              '<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">'),
            (this.code9 =
              '<mat-form-field>\n  <input matInput [ngxMatDatetimePicker]="pickerCustomIcon" placeholder="Choose a date"\n    [formControl]="dateControl" [min]="minDate" [max]="maxDate" [disabled]="disabled">\n  <ngx-mat-datepicker-toggle matSuffix [for]="pickerCustomIcon"></ngx-mat-datepicker-toggle>\n  <ngx-mat-datetime-picker #pickerCustomIcon [showSpinners]="showSpinners" [showSeconds]="showSeconds"\n    [stepHour]="stepHour" [stepMinute]="stepMinute" [stepSecond]="stepSecond" [touchUi]="touchUi"\n    [color]="color" [enableMeridian]="enableMeridian" [disableMinute]="disableMinute" [hideTime]="hideTime">\n    <ngx-mat-datepicker-actions>\n      <button mat-button ngxMatDatepickerCancel>Cancel</button>\n      <button mat-raised-button color="primary" ngxMatDatepickerApply>Apply</button>\n    </ngx-mat-datepicker-actions>\n  </ngx-mat-datetime-picker>\n</mat-form-field>'),
            (this.code10 =
              '<mat-form-field>\n<input matInput [ngxMatDatetimePicker]="pickerCustomIcon" placeholder="Choose a date"\n  [formControl]="dateControl" [min]="minDate" [max]="maxDate" [disabled]="disabled">\n<ngx-mat-datepicker-toggle matSuffix [for]="pickerCustomIcon">\n  <mat-icon ngxMatDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n</ngx-mat-datepicker-toggle>\n<ngx-mat-datetime-picker #pickerCustomIcon [showSpinners]="showSpinners" [showSeconds]="showSeconds"\n  [stepHour]="stepHour" [stepMinute]="stepMinute" [stepSecond]="stepSecond" [touchUi]="touchUi"\n  [color]="color" [enableMeridian]="enableMeridian" [disableMinute]="disableMinute" [hideTime]="hideTime">\n</ngx-mat-datetime-picker>\n</mat-form-field>');
        }
        ngOnInit() {}
        toggleMinDate(o) {
          o.checked ? this._setMinDate() : (this.minDate = null);
        }
        toggleMaxDate(o) {
          o.checked ? this._setMaxDate() : (this.maxDate = null);
        }
        closePicker() {
          this.picker.cancel();
        }
        _setMinDate() {
          const o = new Date();
          (this.minDate = new Date()), this.minDate.setDate(o.getDate() - 1);
        }
        _setMaxDate() {
          const o = new Date();
          (this.maxDate = new Date()), this.maxDate.setDate(o.getDate() + 1);
        }
      }
      (p.ɵfac = function (o) {
        return new (o || p)();
      }),
        (p.ɵcmp = e.Xpm({
          type: p,
          selectors: [["app-demo-datetime"]],
          viewQuery: function (o, t) {
            if ((1 & o && e.Gf(x, 7), 2 & o)) {
              let r;
              e.iGM((r = e.CRH())) && (t.picker = r.first);
            }
          },
          decls: 373,
          vars: 100,
          consts: [
            [3, "mat-stretch-tabs"],
            ["label", "API"],
            ["href", "https://www.buymeacoffee.com/h2qutc", "target", "_blank"],
            [
              "src",
              "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
              "alt",
              "Buy Me A Coffee",
              2,
              "height",
              "35px !important",
              "width",
              "150px !important",
            ],
            [
              "href",
              "https://www.npmjs.com/package/@angular-material-components/datetime-picker",
              "target",
              "_blank",
            ],
            [
              "src",
              "https://badge.fury.io/js/%40angular-material-components%2Fdatetime-picker.svg",
            ],
            ["ngxMatHighlight", ""],
            ["ngxMatHighlight", "", 1, "language-typescript"],
            [1, "api-table-properties"],
            [
              "href",
              "https://www.npmjs.com/package/@angular-material-components/moment-adapter",
            ],
            ["ngxMatHighlight", "", 1, "language-html"],
            [
              "href",
              "https://material.angular.io/guide/theming#using-a-pre-built-theme",
            ],
            ["ngxMatHighlight", "", 1, "language-css"],
            ["label", "Example"],
            [1, "zone", "zone-picker"],
            [1, "datepicker-wrapper"],
            [
              "matInput",
              "",
              "placeholder",
              "Choose a date",
              3,
              "ngxMatDatetimePicker",
              "formControl",
              "min",
              "max",
              "disabled",
            ],
            ["matSuffix", "", 3, "for"],
            [
              3,
              "showSpinners",
              "showSeconds",
              "stepHour",
              "stepMinute",
              "stepSecond",
              "touchUi",
              "color",
              "enableMeridian",
              "disableMinute",
              "hideTime",
            ],
            ["picker", ""],
            [1, "zone", "zone-config"],
            [1, "config-wrapper"],
            [1, "label"],
            [
              "aria-label",
              "Select an option",
              3,
              "ngModel",
              "color",
              "ngModelChange",
            ],
            [
              "class",
              "example-radio-button",
              3,
              "value",
              4,
              "ngFor",
              "ngForOf",
            ],
            [1, "config-wrapper", "config-wrapper_step"],
            [3, "color"],
            [3, "ngModel", "ngModelChange"],
            [3, "value", 4, "ngFor", "ngForOf"],
            [3, "color", "change"],
            ["pickerWithActions", ""],
            ["mat-button", "", "ngxMatDatepickerCancel", ""],
            [
              "mat-raised-button",
              "",
              "color",
              "primary",
              "ngxMatDatepickerApply",
              "",
              3,
              "color",
            ],
            ["ngxMatDatepickerToggleIcon", ""],
            ["pickerCustomIcon", ""],
            [1, "example-radio-button", 3, "value"],
            [3, "value"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e.TgZ(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "p"),
                e._uU(3, "Thank you so much for your coffee \u2764\ufe0f "),
                e.qZA(),
                e.TgZ(4, "a", 2),
                e._UZ(5, "img", 3),
                e.qZA(),
                e.TgZ(6, "h1"),
                e._uU(
                  7,
                  "API reference for @angular-material-components/datetime-picker"
                ),
                e.qZA(),
                e.TgZ(8, "h2"),
                e._uU(9, "Getting started"),
                e.qZA(),
                e.TgZ(10, "a", 4),
                e._UZ(11, "img", 5),
                e.qZA(),
                e.TgZ(12, "pre")(13, "code", 6),
                e._uU(14),
                e.qZA()(),
                e.TgZ(15, "h2"),
                e._uU(16, "Setup"),
                e.qZA(),
                e.TgZ(17, "pre"),
                e._uU(18, "      "),
                e.TgZ(19, "code", 7),
                e._uU(20),
                e.qZA(),
                e._uU(21, "\n    "),
                e.qZA(),
                e.TgZ(22, "h2"),
                e._uU(23, "Properties @Input"),
                e.qZA(),
                e.TgZ(24, "table", 8)(25, "tbody")(26, "tr")(27, "th"),
                e._uU(28, "Name"),
                e.qZA(),
                e.TgZ(29, "th"),
                e._uU(30, "Type"),
                e.qZA(),
                e.TgZ(31, "th"),
                e._uU(32, "Default value"),
                e.qZA(),
                e.TgZ(33, "th"),
                e._uU(34, "Description"),
                e.qZA()(),
                e.TgZ(35, "tr")(36, "td")(37, "div"),
                e._uU(38, "disabled"),
                e.qZA()(),
                e.TgZ(39, "td"),
                e._uU(40, "boolean"),
                e.qZA(),
                e.TgZ(41, "td"),
                e._uU(42, "null"),
                e.qZA(),
                e.TgZ(43, "td")(44, "p"),
                e._uU(
                  45,
                  "If true, the picker is readonly and can't be modified"
                ),
                e.qZA()()(),
                e.TgZ(46, "tr")(47, "td")(48, "div"),
                e._uU(49, "showSpinners"),
                e.qZA()(),
                e.TgZ(50, "td"),
                e._uU(51, "boolean"),
                e.qZA(),
                e.TgZ(52, "td"),
                e._uU(53, "true"),
                e.qZA(),
                e.TgZ(54, "td")(55, "p"),
                e._uU(
                  56,
                  "If true, the spinners above and below input are visible "
                ),
                e.qZA()()(),
                e.TgZ(57, "tr")(58, "td")(59, "div"),
                e._uU(60, "showSeconds"),
                e.qZA()(),
                e.TgZ(61, "td"),
                e._uU(62, "boolean"),
                e.qZA(),
                e.TgZ(63, "td"),
                e._uU(64, "true"),
                e.qZA(),
                e.TgZ(65, "td")(66, "p"),
                e._uU(67, "If true, it is not possible to select seconds "),
                e.qZA()()(),
                e.TgZ(68, "tr")(69, "td")(70, "div"),
                e._uU(71, "disableMinute"),
                e.qZA()(),
                e.TgZ(72, "td"),
                e._uU(73, "boolean"),
                e.qZA(),
                e.TgZ(74, "td"),
                e._uU(75, "false"),
                e.qZA(),
                e.TgZ(76, "td")(77, "p"),
                e._uU(78, "If true, the minute is readonly "),
                e.qZA()()(),
                e.TgZ(79, "tr")(80, "td")(81, "div"),
                e._uU(82, "defaultTime"),
                e.qZA()(),
                e.TgZ(83, "td"),
                e._uU(84, "Array"),
                e.qZA(),
                e.TgZ(85, "td"),
                e._uU(86, "undefined"),
                e.qZA(),
                e.TgZ(87, "td")(88, "p"),
                e._uU(
                  89,
                  "An array [hour, minute, second] for default time when the date is not yet defined "
                ),
                e.qZA()()(),
                e.TgZ(90, "tr")(91, "td")(92, "div"),
                e._uU(93, "stepHour"),
                e.qZA()(),
                e.TgZ(94, "td"),
                e._uU(95, "number"),
                e.qZA(),
                e.TgZ(96, "td"),
                e._uU(97, "1"),
                e.qZA(),
                e.TgZ(98, "td")(99, "p"),
                e._uU(
                  100,
                  "The number of hours to add/substract when clicking hour spinners "
                ),
                e.qZA()()(),
                e.TgZ(101, "tr")(102, "td")(103, "div"),
                e._uU(104, "stepMinute"),
                e.qZA()(),
                e.TgZ(105, "td"),
                e._uU(106, "number"),
                e.qZA(),
                e.TgZ(107, "td"),
                e._uU(108, "1"),
                e.qZA(),
                e.TgZ(109, "td")(110, "p"),
                e._uU(
                  111,
                  "The number of minutes to add/substract when clicking minute spinners "
                ),
                e.qZA()()(),
                e.TgZ(112, "tr")(113, "td")(114, "div"),
                e._uU(115, "stepSecond"),
                e.qZA()(),
                e.TgZ(116, "td"),
                e._uU(117, "number"),
                e.qZA(),
                e.TgZ(118, "td"),
                e._uU(119, "1"),
                e.qZA(),
                e.TgZ(120, "td")(121, "p"),
                e._uU(
                  122,
                  "The number of seconds to add/substract when clicking second spinners "
                ),
                e.qZA()()(),
                e.TgZ(123, "tr")(124, "td")(125, "div"),
                e._uU(126, "color"),
                e.qZA()(),
                e.TgZ(127, "td"),
                e._uU(128, "ThemePalette"),
                e.qZA(),
                e.TgZ(129, "td"),
                e._uU(130, "undefined"),
                e.qZA(),
                e.TgZ(131, "td")(132, "p"),
                e._uU(
                  133,
                  "Color palette to use on the datepicker's calendar "
                ),
                e.qZA()()(),
                e.TgZ(134, "tr")(135, "td")(136, "div"),
                e._uU(137, "enableMeridian"),
                e.qZA()(),
                e.TgZ(138, "td"),
                e._uU(139, "boolean"),
                e.qZA(),
                e.TgZ(140, "td"),
                e._uU(141, "false"),
                e.qZA(),
                e.TgZ(142, "td")(143, "p"),
                e._uU(144, "Whether to display 12H or 24H mode "),
                e.qZA()()(),
                e.TgZ(145, "tr")(146, "td")(147, "div"),
                e._uU(148, "hideTime"),
                e.qZA()(),
                e.TgZ(149, "td"),
                e._uU(150, "boolean"),
                e.qZA(),
                e.TgZ(151, "td"),
                e._uU(152, "false"),
                e.qZA(),
                e.TgZ(153, "td")(154, "p"),
                e._uU(155, "If true, the time is hidden "),
                e.qZA()()(),
                e.TgZ(156, "tr")(157, "td")(158, "div"),
                e._uU(159, "touchUi"),
                e.qZA()(),
                e.TgZ(160, "td"),
                e._uU(161, "boolean"),
                e.qZA(),
                e.TgZ(162, "td"),
                e._uU(163, "false"),
                e.qZA(),
                e.TgZ(164, "td")(165, "p"),
                e._uU(
                  166,
                  "Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets. "
                ),
                e.qZA()()()()(),
                e.TgZ(167, "h2"),
                e._uU(
                  168,
                  "Choosing a date implementation and date format settings "
                ),
                e.qZA(),
                e.TgZ(169, "p"),
                e._uU(
                  170,
                  "The datepicker was built to be date implementation agnostic. This means that it can be made to work with a variety of different date implementations. However it also means that developers need to make sure to provide the appropriate pieces for the datepicker to work with their chosen implementation."
                ),
                e.qZA(),
                e.TgZ(171, "p"),
                e._uU(
                  172,
                  "The easiest way to ensure this is to import one of the provided date modules:"
                ),
                e.qZA(),
                e.TgZ(173, "table", 8)(174, "tbody")(175, "tr"),
                e._UZ(176, "th"),
                e.TgZ(177, "th"),
                e._uU(178, "NgxMatNativeDateModule"),
                e.qZA(),
                e.TgZ(179, "th"),
                e._uU(180, "NgxMatMomentModule"),
                e.qZA()(),
                e.TgZ(181, "tr")(182, "td"),
                e._uU(183, "Date type "),
                e.qZA(),
                e.TgZ(184, "td"),
                e._uU(185, "Date"),
                e.qZA(),
                e.TgZ(186, "td"),
                e._uU(187, "Moment"),
                e.qZA()(),
                e.TgZ(188, "tr")(189, "td"),
                e._uU(190, "Dependencies"),
                e.qZA(),
                e.TgZ(191, "td"),
                e._uU(192, "None"),
                e.qZA(),
                e.TgZ(193, "td"),
                e._uU(194, "Moment.js"),
                e.qZA()(),
                e.TgZ(195, "tr")(196, "td"),
                e._uU(197, "Import from "),
                e.qZA(),
                e.TgZ(198, "td"),
                e._uU(199, "@angular-material-components/datetime-picker"),
                e.qZA(),
                e.TgZ(200, "td")(201, "a", 9),
                e._uU(202, "@angular-material-components/moment-adapter"),
                e.qZA()()()()(),
                e._uU(203, " To use "),
                e.TgZ(204, "strong"),
                e._uU(205, "NgxMatMomentModule"),
                e.qZA(),
                e._uU(206, ": "),
                e.TgZ(207, "pre")(208, "code", 6),
                e._uU(209),
                e.qZA()(),
                e.TgZ(210, "p"),
                e._uU(211, "Please note: "),
                e.TgZ(212, "strong"),
                e._uU(213, "NgxMatNativeDateModule"),
                e.qZA(),
                e._uU(
                  214,
                  " is based off the functionality available in JavaScript's native Date object. Thus it is not suitable for many locales. One of the biggest shortcomings of the native Date object is the inability to set the parse format."
                ),
                e.qZA(),
                e.TgZ(215, "p"),
                e._uU(216, "We highly recommend using the "),
                e.TgZ(217, "strong"),
                e._uU(218, "NgxMatMomentModule"),
                e.qZA(),
                e._uU(219, " or a custom "),
                e.TgZ(220, "strong"),
                e._uU(221, "NgxMatDateAdapter"),
                e.qZA(),
                e._uU(
                  222,
                  " that works with the formatting/parsing library of your choice."
                ),
                e.qZA(),
                e._uU(223, " For example: Creating a custom date adapter "),
                e.TgZ(224, "pre")(225, "code", 7),
                e._uU(226),
                e.qZA()(),
                e._uU(227, " Creating a custom date adapter module "),
                e.TgZ(228, "pre")(229, "code", 7),
                e._uU(230),
                e.qZA()(),
                e._uU(
                  231,
                  " You can also customize the date format by providing your custom "
                ),
                e.TgZ(232, "strong"),
                e._uU(233, "NGX_MAT_DATE_FORMATS"),
                e.qZA(),
                e._uU(234, " in your module. "),
                e.TgZ(235, "pre")(236, "code", 7),
                e._uU(237),
                e.qZA()(),
                e.TgZ(238, "h2"),
                e._uU(239, "Datetime picker with action buttons"),
                e.qZA(),
                e.TgZ(240, "pre")(241, "code", 10),
                e._uU(242),
                e.qZA()(),
                e.TgZ(243, "h2"),
                e._uU(244, "Datetime picker with custom icon"),
                e.qZA(),
                e.TgZ(245, "pre")(246, "code", 10),
                e._uU(247),
                e.qZA()(),
                e.TgZ(248, "h2"),
                e._uU(249, "Theming"),
                e.qZA(),
                e.TgZ(250, "p"),
                e._uU(251, "@see @angular/material "),
                e.TgZ(252, "a", 11),
                e._uU(253, "Using a pre-built theme"),
                e.qZA()(),
                e.TgZ(254, "p"),
                e._uU(
                  255,
                  "Add the Material Design icon font to your index.html"
                ),
                e.qZA(),
                e.TgZ(256, "pre")(257, "code", 12),
                e._uU(258),
                e.qZA()()(),
                e.TgZ(259, "mat-tab", 13)(260, "mat-card", 14)(
                  261,
                  "mat-card-content"
                )(
                  262,
                  "div",
                  15
                )(263, "mat-form-field"),
                e._UZ(264, "input", 16)(265, "ngx-mat-datepicker-toggle", 17)(
                  266,
                  "ngx-mat-datetime-picker",
                  18,
                  19
                ),
                e.qZA()(),
                e.TgZ(268, "h4"),
                e._uU(269),
                e.qZA()()(),
                e.TgZ(270, "mat-card", 20)(271, "mat-card-content")(
                  272,
                  "div",
                  21
                )(273, "span", 22),
                e._uU(274, "disabled (Default: false) "),
                e.qZA(),
                e.TgZ(275, "mat-radio-group", 23),
                e.NdJ("ngModelChange", function (a) {
                  return (t.disabled = a);
                }),
                e.YNc(276, S, 2, 2, "mat-radio-button", 24),
                e.qZA()(),
                e.TgZ(277, "div", 21)(278, "span", 22),
                e._uU(279, "showSpinners (Default: true) "),
                e.qZA(),
                e.TgZ(280, "mat-radio-group", 23),
                e.NdJ("ngModelChange", function (a) {
                  return (t.showSpinners = a);
                }),
                e.YNc(281, y, 2, 2, "mat-radio-button", 24),
                e.qZA()(),
                e.TgZ(282, "div", 21)(283, "span", 22),
                e._uU(284, "showSeconds (Default: false) "),
                e.qZA(),
                e.TgZ(285, "mat-radio-group", 23),
                e.NdJ("ngModelChange", function (a) {
                  return (t.showSeconds = a);
                }),
                e.YNc(286, J, 2, 2, "mat-radio-button", 24),
                e.qZA()(),
                e.TgZ(287, "div", 21)(288, "span", 22),
                e._uU(289, "disableMinute (Default: false) "),
                e.qZA(),
                e.TgZ(290, "mat-radio-group", 23),
                e.NdJ("ngModelChange", function (a) {
                  return (t.disableMinute = a);
                }),
                e.YNc(291, P, 2, 2, "mat-radio-button", 24),
                e.qZA()(),
                e.TgZ(292, "div", 21)(293, "span", 22),
                e._uU(294, "touchUi (Default: false) "),
                e.qZA(),
                e.TgZ(295, "mat-radio-group", 23),
                e.NdJ("ngModelChange", function (a) {
                  return (t.touchUi = a);
                }),
                e.YNc(296, N, 2, 2, "mat-radio-button", 24),
                e.qZA()(),
                e.TgZ(297, "div", 21)(298, "span", 22),
                e._uU(299, "hideTime (Default: false) "),
                e.qZA(),
                e.TgZ(300, "mat-radio-group", 23),
                e.NdJ("ngModelChange", function (a) {
                  return (t.hideTime = a);
                }),
                e.YNc(301, Q, 2, 2, "mat-radio-button", 24),
                e.qZA()(),
                e.TgZ(302, "div", 21)(303, "span", 22),
                e._uU(304, "enableMeridian (Default: false) "),
                e.qZA(),
                e.TgZ(305, "mat-radio-group", 23),
                e.NdJ("ngModelChange", function (a) {
                  return (t.enableMeridian = a);
                }),
                e.YNc(306, I, 2, 2, "mat-radio-button", 24),
                e.qZA()(),
                e.TgZ(307, "div", 25)(308, "span", 22),
                e._uU(309, "steps "),
                e.qZA(),
                e.TgZ(310, "mat-form-field", 26)(311, "mat-label"),
                e._uU(312, "hour (default: 1)"),
                e.qZA(),
                e.TgZ(313, "mat-select", 27),
                e.NdJ("ngModelChange", function (a) {
                  return (t.stepHour = a);
                }),
                e.YNc(314, H, 2, 2, "mat-option", 28),
                e.qZA()(),
                e.TgZ(315, "mat-form-field", 26)(316, "mat-label"),
                e._uU(317, "minute (default: 1)"),
                e.qZA(),
                e.TgZ(318, "mat-select", 27),
                e.NdJ("ngModelChange", function (a) {
                  return (t.stepMinute = a);
                }),
                e.YNc(319, F, 2, 2, "mat-option", 28),
                e.qZA()(),
                e.TgZ(320, "mat-form-field", 26)(321, "mat-label"),
                e._uU(322, "second (default: 1)"),
                e.qZA(),
                e.TgZ(323, "mat-select", 27),
                e.NdJ("ngModelChange", function (a) {
                  return (t.stepSecond = a);
                }),
                e.YNc(324, j, 2, 2, "mat-option", 28),
                e.qZA()()(),
                e.TgZ(325, "div", 21)(326, "span", 22),
                e._uU(327, "color (Default: primary) "),
                e.qZA(),
                e.TgZ(328, "mat-form-field", 26)(329, "mat-label"),
                e._uU(330, "Select color"),
                e.qZA(),
                e.TgZ(331, "mat-select", 27),
                e.NdJ("ngModelChange", function (a) {
                  return (t.color = a);
                }),
                e.YNc(332, Y, 2, 2, "mat-option", 28),
                e.qZA()()(),
                e.TgZ(333, "div", 21)(334, "mat-checkbox", 29),
                e.NdJ("change", function (a) {
                  return t.toggleMinDate(a);
                }),
                e._uU(335),
                e.qZA()(),
                e.TgZ(336, "div", 21)(337, "mat-checkbox", 29),
                e.NdJ("change", function (a) {
                  return t.toggleMaxDate(a);
                }),
                e._uU(338),
                e.qZA()()()(),
                e.TgZ(339, "pre")(340, "code", 10),
                e._uU(341),
                e.qZA()(),
                e.TgZ(342, "h2"),
                e._uU(343, "Datetime picker with action buttons"),
                e.qZA(),
                e.TgZ(344, "pre")(345, "code", 10),
                e._uU(346),
                e.qZA()(),
                e.TgZ(347, "mat-card", 14)(348, "mat-card-content")(
                  349,
                  "mat-form-field"
                ),
                e._UZ(350, "input", 16)(351, "ngx-mat-datepicker-toggle", 17),
                e.TgZ(
                  352,
                  "ngx-mat-datetime-picker",
                  18,
                  30
                )(354, "ngx-mat-datepicker-actions")(355, "button", 31),
                e._uU(356, "Cancel"),
                e.qZA(),
                e.TgZ(357, "button", 32),
                e._uU(358, "Apply"),
                e.qZA()()()()()(),
                e.TgZ(359, "h2"),
                e._uU(360, "Datetime picker with custom icon"),
                e.qZA(),
                e.TgZ(361, "pre")(362, "code", 10),
                e._uU(363),
                e.qZA()(),
                e.TgZ(364, "mat-card", 14)(365, "mat-card-content")(
                  366,
                  "mat-form-field"
                ),
                e._UZ(367, "input", 16),
                e.TgZ(368, "ngx-mat-datepicker-toggle", 17)(
                  369,
                  "mat-icon",
                  33
                ),
                e._uU(370, "keyboard_arrow_down"),
                e.qZA()(),
                e._UZ(371, "ngx-mat-datetime-picker", 18, 34),
                e.qZA()()()()()),
              2 & o)
            ) {
              const r = e.MAs(267),
                a = e.MAs(353),
                D = e.MAs(372);
              e.Q6J("mat-stretch-tabs", !1),
                e.xp6(14),
                e.Oqu(t.code1),
                e.xp6(6),
                e.hij("", t.code2, "\n      "),
                e.xp6(189),
                e.Oqu(t.code4),
                e.xp6(17),
                e.Oqu(t.code5),
                e.xp6(4),
                e.Oqu(t.code6),
                e.xp6(7),
                e.Oqu(t.code7),
                e.xp6(5),
                e.Oqu(t.code9),
                e.xp6(5),
                e.Oqu(t.code10),
                e.xp6(11),
                e.Oqu(t.code8),
                e.xp6(6),
                e.Q6J("ngxMatDatetimePicker", r)("formControl", t.dateControl)(
                  "min",
                  t.minDate
                )("max", t.maxDate)("disabled", t.disabled),
                e.xp6(1),
                e.Q6J("for", r),
                e.xp6(1),
                e.Q6J("showSpinners", t.showSpinners)(
                  "showSeconds",
                  t.showSeconds
                )("stepHour", t.stepHour)("stepMinute", t.stepMinute)(
                  "stepSecond",
                  t.stepSecond
                )("touchUi", t.touchUi)("color", t.color)(
                  "enableMeridian",
                  t.enableMeridian
                )("disableMinute", t.disableMinute)("hideTime", t.hideTime),
                e.xp6(3),
                e.hij(
                  "Selected date: ",
                  null == t.dateControl.value
                    ? null
                    : t.dateControl.value.toLocaleString(),
                  ""
                ),
                e.xp6(6),
                e.Q6J("ngModel", t.disabled)("color", t.color),
                e.xp6(1),
                e.Q6J("ngForOf", t.options),
                e.xp6(4),
                e.Q6J("ngModel", t.showSpinners)("color", t.color),
                e.xp6(1),
                e.Q6J("ngForOf", t.options),
                e.xp6(4),
                e.Q6J("ngModel", t.showSeconds)("color", t.color),
                e.xp6(1),
                e.Q6J("ngForOf", t.options),
                e.xp6(4),
                e.Q6J("ngModel", t.disableMinute)("color", t.color),
                e.xp6(1),
                e.Q6J("ngForOf", t.options),
                e.xp6(4),
                e.Q6J("ngModel", t.touchUi)("color", t.color),
                e.xp6(1),
                e.Q6J("ngForOf", t.options),
                e.xp6(4),
                e.Q6J("ngModel", t.hideTime)("color", t.color),
                e.xp6(1),
                e.Q6J("ngForOf", t.options),
                e.xp6(4),
                e.Q6J("ngModel", t.enableMeridian)("color", t.color),
                e.xp6(1),
                e.Q6J("ngForOf", t.options),
                e.xp6(4),
                e.Q6J("color", t.color),
                e.xp6(3),
                e.Q6J("ngModel", t.stepHour),
                e.xp6(1),
                e.Q6J("ngForOf", t.stepHours),
                e.xp6(1),
                e.Q6J("color", t.color),
                e.xp6(3),
                e.Q6J("ngModel", t.stepMinute),
                e.xp6(1),
                e.Q6J("ngForOf", t.stepMinutes),
                e.xp6(1),
                e.Q6J("color", t.color),
                e.xp6(3),
                e.Q6J("ngModel", t.stepSecond),
                e.xp6(1),
                e.Q6J("ngForOf", t.stepSeconds),
                e.xp6(4),
                e.Q6J("color", t.color),
                e.xp6(3),
                e.Q6J("ngModel", t.color),
                e.xp6(1),
                e.Q6J("ngForOf", t.listColors),
                e.xp6(2),
                e.Q6J("color", t.color),
                e.xp6(1),
                e.hij(
                  " Min date (Default: null, Demo: now - 1 day) = ",
                  null == t.minDate ? null : t.minDate.toLocaleString(),
                  " "
                ),
                e.xp6(2),
                e.Q6J("color", t.color),
                e.xp6(1),
                e.hij(
                  " Max date (Default: null, Demo: now + 2 days) = ",
                  null == t.maxDate ? null : t.maxDate.toLocaleString(),
                  " "
                ),
                e.xp6(3),
                e.Oqu(t.code3),
                e.xp6(5),
                e.Oqu(t.code9),
                e.xp6(4),
                e.Q6J("ngxMatDatetimePicker", a)("formControl", t.dateControl)(
                  "min",
                  t.minDate
                )("max", t.maxDate)("disabled", t.disabled),
                e.xp6(1),
                e.Q6J("for", a),
                e.xp6(1),
                e.Q6J("showSpinners", t.showSpinners)(
                  "showSeconds",
                  t.showSeconds
                )("stepHour", t.stepHour)("stepMinute", t.stepMinute)(
                  "stepSecond",
                  t.stepSecond
                )("touchUi", t.touchUi)("color", t.color)(
                  "enableMeridian",
                  t.enableMeridian
                )("disableMinute", t.disableMinute)("hideTime", t.hideTime),
                e.xp6(5),
                e.Q6J("color", t.color),
                e.xp6(6),
                e.Oqu(t.code10),
                e.xp6(4),
                e.Q6J("ngxMatDatetimePicker", D)("formControl", t.dateControl)(
                  "min",
                  t.minDate
                )("max", t.maxDate)("disabled", t.disabled),
                e.xp6(1),
                e.Q6J("for", D),
                e.xp6(3),
                e.Q6J("showSpinners", t.showSpinners)(
                  "showSeconds",
                  t.showSeconds
                )("stepHour", t.stepHour)("stepMinute", t.stepMinute)(
                  "stepSecond",
                  t.stepSecond
                )("touchUi", t.touchUi)("color", t.color)(
                  "enableMeridian",
                  t.enableMeridian
                )("disableMinute", t.disableMinute)("hideTime", t.hideTime);
            }
          },
          dependencies: [
            Z.sg,
            T.Nt,
            s.KE,
            s.hX,
            s.R9,
            v.r,
            k.T$,
            A.k,
            A.T,
            c.c_,
            c.dW,
            c.cL,
            l.Fj,
            l.JJ,
            l.On,
            l.oH,
            _.lW,
            u.VQ,
            u.U0,
            b.gD,
            w.ey,
            f.oG,
            M.Hw,
            m.a8,
            m.dn,
            O.P,
            U.uX,
            U.SP,
          ],
          styles: [
            ".config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center;flex-wrap:wrap}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px;display:block;width:225px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;border-collapse:collapse;border-spacing:2px;background-color:#fff}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#00000014}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.table[_ngcontent-%COMP%]{border-collapse:collapse;margin-bottom:30px;height:250px}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;color:#fff}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{background-color:#268fa7}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-of-type{background-color:#8a178c}.datepicker-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}",
          ],
        }));
      const L = [{ path: "", component: p }];
      class d {}
      (d.ɵfac = function (o) {
        return new (o || d)();
      }),
        (d.ɵmod = e.oAB({ type: d })),
        (d.ɵinj = e.cJS({
          providers: [{ provide: s.o2, useValue: { appearance: "fill" } }],
          imports: [
            Z.ez,
            C.Bz.forChild(L),
            T.c,
            g.EC,
            g.Yy,
            l.u5,
            l.UX,
            _.ot,
            g.K,
            u.Fk,
            b.LD,
            f.p9,
            M.Ps,
            m.QW,
            q.m,
          ],
        }));
    },
  },
]);
