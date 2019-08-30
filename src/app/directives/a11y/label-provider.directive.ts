import {Directive, ElementRef, Optional} from '@angular/core';
import {InputIdToLabelForSyncDirective} from './input-id-to-label-for-sync.directive';

export const FOR_ATTRIBUTE = 'for';

@Directive({
  selector: 'label',
})
export class LabelProviderDirective {
  public set for(value: string) {
    this.elementRef.nativeElement.setAttribute(FOR_ATTRIBUTE, value);
  }

  constructor(readonly elementRef: ElementRef,
              @Optional() readonly formField: InputIdToLabelForSyncDirective) {
    if (formField) {
      formField.label.next(this);
    }
  }
}
