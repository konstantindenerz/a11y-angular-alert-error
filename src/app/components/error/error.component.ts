import {Component} from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: 'error.component.html',
  host: {
    '[attr.role]': '"alert"',
  },
})
export class ErrorComponent {

}
