import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchDocComponent } from './search-doc/search-doc.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { DocService } from './services/doc.service';
import { AuthorService } from './services/author.service';
import { EventService } from './services/event.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularMultiSelectModule } from 'angular4-multiselect-dropdown/angular4-multiselect-dropdown';
//import {} from './'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2SearchPipeModule,
    AngularMultiSelectModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: SearchDocComponent,  },
      { path: 'details/:id', component: DocDetailsComponent },
      //{ path: 'home',component:HomeComponent},
      { path: 'events',component:EventComponent},
      { path: '**', redirectTo: 'home' }
    ]),
  ],
  //Components are added here
  declarations: [
  AppComponent,
  SearchDocComponent,
  DocDetailsComponent,
  HomeComponent,
  EventComponent
],
//All the modules are declared as imports

//All the services go here.
providers: [DocService,AuthorService,EventService],
bootstrap: [AppComponent]
})
export class AppModule { }
