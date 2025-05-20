import { A11yModule } from "@angular/cdk/a11y";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { CdkScrollableModule } from "@angular/cdk/scrolling";
import { MatButtonModule } from "@angular/material/button";
import { NgxMatDateRangeInput } from "./date-range-input";
import { NgxMatEndDate, NgxMatStartDate } from "./date-range-input-parts";
import { NgxMatDateRangePicker } from "./date-range-picker";
import { NgxMatDatetimepicker } from "./datepicker";
import {
  NgxMatDatepickerActions,
  NgxMatDatepickerApply,
  NgxMatDatepickerCancel,
} from "./datepicker-actions";
import {
  NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
  NgxMatDatepickerContent,
} from "./datepicker-base";
import { NgxMatDatepickerInput } from "./datepicker-input";
import { NgxMatDatepickerIntl } from "./datepicker-intl";
import {
  NgxMatDatepickerToggleIcon,
  NgxMatDatepickerToggle,
} from "./datepicker-toggle";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxMatTimepickerComponent } from "./timepicker.component";
import { MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    OverlayModule,
    A11yModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatTimepickerComponent,
    MatRippleModule,
    MatDatepickerModule,
  ],
  exports: [
    CdkScrollableModule,
    NgxMatDatetimepicker,
    NgxMatDatepickerContent,
    NgxMatDatepickerInput,
    NgxMatDatepickerToggle,
    NgxMatDatepickerToggleIcon,
    NgxMatDateRangeInput,
    NgxMatStartDate,
    NgxMatEndDate,
    NgxMatDateRangePicker,
    NgxMatDatepickerActions,
    NgxMatDatepickerCancel,
    NgxMatDatepickerApply,
    NgxMatTimepickerComponent,
  ],
  declarations: [
    NgxMatDatetimepicker,
    NgxMatDatepickerContent,
    NgxMatDatepickerInput,
    NgxMatDatepickerToggle,
    NgxMatDatepickerToggleIcon,
    NgxMatDateRangeInput,
    NgxMatStartDate,
    NgxMatEndDate,
    NgxMatDateRangePicker,
    NgxMatDatepickerActions,
    NgxMatDatepickerCancel,
    NgxMatDatepickerApply,
  ],
  providers: [
    NgxMatDatepickerIntl,
    NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
  ],
})
export class NgxMatDatetimePickerModule {}
