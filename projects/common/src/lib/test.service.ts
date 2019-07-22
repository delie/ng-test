import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() {}

  public test(): void {
    console.log('TestService!');
  }
}
