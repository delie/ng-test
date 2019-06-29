import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestLibService {
  constructor() {}

  test() {
    console.log('TestLibService! 123456789 000');
  }
}
