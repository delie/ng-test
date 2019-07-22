import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: CommentListComponent
  }
];

@NgModule({
  declarations: [CommentListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule, SharedModule],
  exports: [CommentListComponent]
})
export class CommentModule {}
