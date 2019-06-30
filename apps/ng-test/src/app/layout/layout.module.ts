import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StandardPageComponent } from './page/standard-page/standard-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, StandardPageComponent],
  imports: [CommonModule, TranslateModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, StandardPageComponent]
})
export class LayoutModule {}
