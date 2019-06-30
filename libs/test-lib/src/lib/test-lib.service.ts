import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestLibService {
  constructor() {}

  test(): void {
    console.log('TestLibService! 1001');
  }
}
