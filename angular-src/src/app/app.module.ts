import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddListComponent, FilterPipe } from './add-list/add-list.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { AboutComponent } from './about/about.component';
import { ListService } from './services/list.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import {} from './'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'search', component: AddListComponent,  },
      { path: 'details/:id', component: DocDetailsComponent },
      { path: 'home',component:AboutComponent},
      { path: '**', redirectTo: 'home' }
    ]),
  ],
  //Components are added here
  declarations: [
  AppComponent,
  AddListComponent,
  FilterPipe,
  DocDetailsComponent,
  AboutComponent
],
//All the modules are declared as imports

//All the services go here.
providers: [ListService],
bootstrap: [AppComponent]
})
export class AppModule { }
