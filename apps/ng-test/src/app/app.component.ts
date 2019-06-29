import { Component } from '@angular/core';
import { TestLibService } from '@ng-test/test-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-test';

  constructor(ts: TestLibService) {
    ts.test();
  }
}
