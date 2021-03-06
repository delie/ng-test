import { async } from '@angular/core/testing';
import { Shallow } from 'shallow-render';
import { CommentListComponent } from './comment-list.component';
import { CommentListModule } from './comment-list.module';

describe('CommentListComponent', () => {
  let shallow: Shallow<CommentListComponent>;
  beforeEach(async(() => {
    shallow = new Shallow(CommentListComponent, CommentListModule);
  }));

  it('should create the component', async () => {
    const { element } = await shallow.render();
    expect(element.nativeElement).toMatchSnapshot();
  });
});
