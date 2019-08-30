import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdService {
  private _id: number;

  get id(): number {
    return this._id--;
  }

  constructor() {
    this._id = Date.now();
  }
}
