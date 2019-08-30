import {Directive, ElementRef, OnInit, Optional} from '@angular/core';
import {ErrorIdToInputDescribedbySyncDirective} from './error-id-to-input-describedby-sync.directive';
import {InputIdToLabelForSyncDirective} from './input-id-to-label-for-sync.directive';

export const ID_ATTRIBUTE = 'id';
export const DESCRIBEDBY = 'aria-describedby';

@Directive({
  selector: 'input',
})
export class InputProviderDirective implements OnInit {
  set describedBy(value: string) {
    this.elementRef.nativeElement.setAttribute(DESCRIBEDBY, value);
  }

  get id(): string {
    return this.elementRef.nativeElement.getAttribute(ID_ATTRIBUTE);
  }

  constructor(readonly elementRef: ElementRef,
              @Optional() private readonly idSync: InputIdToLabelForSyncDirective,
              @Optional() private readonly describedBySync: ErrorIdToInputDescribedbySyncDirective) {
  }

  public ngOnInit(): void {
    if (this.idSync) {
      this.idSync.input.next(this);
    }
    if (this.describedBySync) {
      this.describedBySync.input.next(this);
    }
  }
}
