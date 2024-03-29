import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile.component';
import { GitHubApiService } from './services/github.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent,ProfileComponent],
  providers:    [ GitHubApiService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }