import { async } from '@angular/core/testing';
import { Shallow } from 'shallow-render';
import { FooterComponent } from './footer.component';
import { FooterModule } from './footer.module';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

describe('FooterComponent', () => {
  let shallow: Shallow<FooterComponent>;
  beforeEach(async(() => {
    shallow = new Shallow(FooterComponent, FooterModule)
      .mock(TranslateService, {
        setDefaultLang: () => {},
        use: (): any => {}
      })
      .replaceModule(TranslateModule, TranslateModule.forRoot());
  }));

  it('should create the component', async () => {
    const { element } = await shallow.render();
    expect(element.nativeElement).toMatchSnapshot();
  });
});
