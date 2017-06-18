import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { CodeTextareaDirective }         from '../../directives/codeTextarea/codeTextarea.directive';
import {ToggleClassDirective} from '../../directives/toggleClass/toggleClass.directive';
import {CodeHighLightComponent} from '../../components/code-high-light/code-high-light.component';
import {DatePickerDirective} from '../../directives/datePicker/datePicker.directive';
import {CheckboxComponent} from '../../components/checkbox/checkbox.component';
import {RadioComponent} from '../../components/radio/radio.component';
import {ToggleComponent} from '../../components/toggle/toggle.component';
@NgModule({
  imports:[CommonModule,FormsModule],
  declarations: [
    CodeTextareaDirective,
    ToggleClassDirective,
    CodeHighLightComponent,
    DatePickerDirective,
    CheckboxComponent,
    RadioComponent,
    ToggleComponent
  ],
  exports:      [
    FormsModule,
    CommonModule,
    CodeTextareaDirective,
    ToggleClassDirective,
    CodeHighLightComponent,
    DatePickerDirective,
    CheckboxComponent,
    RadioComponent,
    ToggleComponent
  ]
})
export class SharedModule { }
