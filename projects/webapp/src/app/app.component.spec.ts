import { async } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { Shallow } from 'shallow-render';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;
  beforeEach(async(() => {
    shallow = new Shallow(AppComponent, AppModule)
      .mock(TranslateService, {
        setDefaultLang: () => {},
        use: (): any => {}
      })
      .dontMock(NoopAnimationsModule);
  }));

  it('should create the app', async () => {
    const { element } = await shallow.render();
    expect(element.nativeElement).toMatchSnapshot();
  });
});
