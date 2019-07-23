import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FooterComponent],
  imports: [TranslateModule],
  exports: [FooterComponent]
})
export class FooterModule {}
