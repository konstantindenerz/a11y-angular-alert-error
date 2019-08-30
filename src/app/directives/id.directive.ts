import {Directive, ElementRef} from '@angular/core';
import {IdService} from '../services/id.service';

export const ID_ATTRIBUTE = 'id';

@Directive({ selector: 'input, error' })
export class IdDirective {
  constructor({ nativeElement }: ElementRef, idService: IdService) {
    nativeElement.setAttribute(ID_ATTRIBUTE, idService.id);
  }
}
