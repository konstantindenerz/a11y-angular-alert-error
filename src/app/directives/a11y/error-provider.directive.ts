import {Directive, ElementRef, OnInit, Optional} from '@angular/core';
import {ErrorIdToInputDescribedbySyncDirective} from './error-id-to-input-describedby-sync.directive';
import {ID_ATTRIBUTE} from './input-provider.directive';

@Directive({
  selector: 'error',
})
export class ErrorProviderDirective implements OnInit {
  get id(): string {
    return this.elementRef.nativeElement.getAttribute(ID_ATTRIBUTE);
  }

  constructor(readonly elementRef: ElementRef,
              @Optional() private readonly idSync: ErrorIdToInputDescribedbySyncDirective) {

  }

  public ngOnInit(): void {
    if (this.idSync) {
      this.idSync.error.next(this);
    }
  }
}
