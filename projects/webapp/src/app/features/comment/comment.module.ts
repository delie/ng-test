import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../shared/components/layout/layout.module';
import { CommentListModule } from './comment-list/comment-list.module';

const routes: Route[] = [
  {
    path: '',
    component: CommentListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule, SharedModule, CommentListModule],
  exports: []
})
export class CommentModule {}
