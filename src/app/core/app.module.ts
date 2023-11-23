import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from '../modules/about/about.module';
import { HeroModule } from '../modules/hero/hero.module';
import { ProjectsModule } from '../modules/projects/projects.module';
import { FooterModule } from '../modules/footer/footer.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    AboutModule,
    ProjectsModule,
    FooterModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
