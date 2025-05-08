import { A11yModule } from "@angular/cdk/a11y";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { CdkScrollableModule } from "@angular/cdk/scrolling";
import { MatButtonModule } from "@angular/material/button";
import { NgxMatCalendar, NgxMatCalendarHeader } from "./calendar";
import { NgxMatCalendarBody } from "./calendar-body";
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
import { NgxMatMonthView } from "./month-view";
import { NgxMatMultiYearView } from "./multi-year-view";
import { NgxMatYearView } from "./year-view";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxMatTimepickerComponent } from "./timepicker.component";

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
    NgxMatTimepickerComponent,
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
    NgxMatDatepickerApply,
  ],
  providers: [
    NgxMatDatepickerIntl,
    NGX_MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
  ],
})
export class NgxMatDatetimePickerModule {}
