import { NgModule } from '@angular/core';
import { RemovePeriodsPipe } from './pipes/remove-periods.pipe';
import { KebabPipe } from './pipes/kebab.pipe';

@NgModule({
  imports: [],
  exports: [
    RemovePeriodsPipe,
    KebabPipe
  ],
  declarations: [
    RemovePeriodsPipe,
    KebabPipe
  ],
  providers: []
})
export class SharedModule { }
