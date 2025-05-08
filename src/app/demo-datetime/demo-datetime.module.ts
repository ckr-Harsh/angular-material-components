import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule, Routes } from "@angular/router";
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
} from "../../../projects/datetime-picker-v2/src/public-api";
import { SharedModule } from "../shared";
import { DemoDatetimeComponent } from "./demo-datetime.component";
import { MatTabsModule } from "@angular/material/tabs";

const routes: Routes = [{ path: "", component: DemoDatetimeComponent }];

@NgModule({
  imports: [
    CommonModule,
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
    SharedModule,
    MatFormFieldModule,
    NgxMatDatetimePickerModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DemoDatetimeComponent],
})
export class DemoDatetimeModule {}
