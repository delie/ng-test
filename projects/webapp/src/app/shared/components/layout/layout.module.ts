import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StandardPageComponent } from './page/standard-page/standard-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { StandardPageModule } from './page/standard-page/standard-page.module';

@NgModule({
  imports: [CommonModule, TranslateModule, RouterModule, FooterModule, HeaderModule, StandardPageModule],
  exports: [FooterModule, HeaderModule, StandardPageModule]
})
export class LayoutModule {}
