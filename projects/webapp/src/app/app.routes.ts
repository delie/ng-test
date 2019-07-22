import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./features/comment/comment.module').then(m => m.CommentModule)
  }
];
