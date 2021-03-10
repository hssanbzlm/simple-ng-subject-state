import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  name = new Subject<string>();
  constructor() {}

  save(value) {
    this.name.next(value);
  }
}
