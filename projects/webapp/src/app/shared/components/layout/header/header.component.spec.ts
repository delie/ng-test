import { async } from '@angular/core/testing';
import { Shallow } from 'shallow-render';
import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';

describe('HeaderComponent', () => {
  let shallow: Shallow<HeaderComponent>;
  beforeEach(async(() => {
    shallow = new Shallow(HeaderComponent, HeaderModule);
  }));

  it('should create the component', async () => {
    const { element } = await shallow.render();
    expect(element.nativeElement).toMatchSnapshot();
  });
});
