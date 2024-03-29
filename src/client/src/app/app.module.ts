import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AuthModule } from '@modules/auth/auth.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    NavComponent,
    FooterComponent,
    //ProfileLayoutComponent,
    //CommentsLayoutComponent,
    //ActivityLayoutComponent,
    //AdminLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    // angular
    BrowserModule,
    HttpClientModule,

    // 3rd party
    AuthModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
