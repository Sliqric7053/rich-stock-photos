import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatStepperModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule
  ]
})
export class SharedModuleModule {}
