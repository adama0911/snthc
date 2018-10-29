/*---------------------------- Modules ------------------------------------------ */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Routing} from './app.routing';


/*---------------------------- Service ------------------------------------------ */
import { LoginService } from './Services/login.service';
import { UtileService } from './Services/utile.service';
import { AuthService } from './Services/auth.service';

/*---------------------------- Conponents ------------------------------------------ */
import { AppComponent } from './app.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { AuthComponent } from './Components/auth/auth.component';
import { SaveUserComponent } from './Components/save-user/save-user.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AcceuilPostsComponent } from './Components/acceuil-posts/acceuil-posts.component';
import { AccueilPubsComponent } from './Components/accueil-pubs/accueil-pubs.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AuthComponent,
    SaveUserComponent,
    ProfileComponent,
    AcceuilPostsComponent,
    AccueilPubsComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing,
  ],

  providers: [
    LoginService,
    UtileService,
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
