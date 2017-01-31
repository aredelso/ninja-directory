import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { APP_ROUTES } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
