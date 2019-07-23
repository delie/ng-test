import { NgModule } from '@angular/core';
import { StandardPageComponent } from './standard-page.component';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';

@NgModule({
  declarations: [StandardPageComponent],
  imports: [HeaderModule, FooterModule],
  exports: [StandardPageComponent]
})
export class StandardPageModule {}
