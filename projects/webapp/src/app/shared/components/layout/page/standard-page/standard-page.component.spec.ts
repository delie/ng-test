import { async } from '@angular/core/testing';
import { Shallow } from 'shallow-render';
import { StandardPageComponent } from './standard-page.component';
import { StandardPageModule } from './standard-page.module';

describe('StandardPageComponent', () => {
  let shallow: Shallow<StandardPageComponent>;
  beforeEach(async(() => {
    shallow = new Shallow(StandardPageComponent, StandardPageModule);
  }));

  it('should create the component', async () => {
    const { element } = await shallow.render();
    expect(element.nativeElement).toMatchSnapshot();
  });
});
