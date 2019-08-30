import {Directive, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, ReplaySubject, Subscription} from 'rxjs';
import {InputProviderDirective} from './input-provider.directive';
import {LabelProviderDirective} from './label-provider.directive';

@Directive({
  selector: 'form-field,[formField]',
})
export class InputIdToLabelForSyncDirective implements OnInit, OnDestroy {

  public label = new ReplaySubject<LabelProviderDirective>(1);
  public input = new ReplaySubject<InputProviderDirective>(1);
  private subscription = Subscription.EMPTY;

  public ngOnInit(): void {
    this.subscription = combineLatest(this.input, this.label).subscribe(([input, label]) => label.for = input.id);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
