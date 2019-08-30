import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ErrorComponent} from './components/error/error.component';

import { AppComponent } from './components/root/app.component';
import {ErrorIdToInputDescribedbySyncDirective} from './directives/a11y/error-id-to-input-describedby-sync.directive';
import {ErrorProviderDirective} from './directives/a11y/error-provider.directive';
import {InputIdToLabelForSyncDirective} from './directives/a11y/input-id-to-label-for-sync.directive';
import { InputProviderDirective } from './directives/a11y/input-provider.directive';
import {LabelProviderDirective} from './directives/a11y/label-provider.directive';
import {IdDirective} from './directives/id.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    InputProviderDirective,
    ErrorProviderDirective,
    LabelProviderDirective,
    InputIdToLabelForSyncDirective,
    ErrorIdToInputDescribedbySyncDirective,
    IdDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
