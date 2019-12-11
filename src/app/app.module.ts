import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        ContactComponent,
        SubscribeComponent,
        ProjectsComponent,
        AboutComponent,
        HeaderComponent
  ],
  imports: [
      BrowserModule,
      AngularFontAwesomeModule,      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
