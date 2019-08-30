import {Directive, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, ReplaySubject, Subscription} from 'rxjs';
import {ErrorProviderDirective} from './error-provider.directive';
import {InputProviderDirective} from './input-provider.directive';

@Directive({
  selector: 'form-field,[formField]',
})
export class ErrorIdToInputDescribedbySyncDirective implements OnInit, OnDestroy {

  public error = new ReplaySubject<ErrorProviderDirective>(1);
  public input = new ReplaySubject<InputProviderDirective>(1);
  private subscription = Subscription.EMPTY;

  public ngOnInit(): void {
    this.subscription = combineLatest(this.error, this.input).subscribe(([error, input]) => input.describedBy = error.id);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
