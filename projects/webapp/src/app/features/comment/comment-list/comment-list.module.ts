import { NgModule } from '@angular/core';
import { CommentListComponent } from './comment-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from '../../../shared/components/layout/layout.module';

@NgModule({
  declarations: [CommentListComponent],
  imports: [TranslateModule, LayoutModule],
  exports: [CommentListComponent]
})
export class CommentListModule {}
