import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared.module';
import { StandardPageComponent } from './standard-page.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { APP_BASE_HREF } from '@angular/common';

describe('StandardPageComponent', () => {
  let component: StandardPageComponent;
  let fixture: ComponentFixture<StandardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StandardPageComponent, HeaderComponent, FooterComponent],
      imports: [SharedModule, RouterModule.forRoot([]), TranslateModule.forRoot()],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
