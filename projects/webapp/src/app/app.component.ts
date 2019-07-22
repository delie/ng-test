import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TestService } from '@ng-test/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private ts: TestService, private translate: TranslateService) {
    ts.test();
  }

  ngOnInit(): void {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }
}
