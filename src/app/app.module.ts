import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './pages/layout/sidebar/sidebar.component';
import { ContentComponent } from './pages/layout/content/content.component';
import { TopbarComponent } from './pages/layout/topbar/topbar.component';
import { LayoutComponent } from './pages/layout/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ContentComponent,
    TopbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }
