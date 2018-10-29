import { RouterModule, Routes} from '@angular/router' ;

import { AuthComponent } from './Components/auth/auth.component';
import { AccueilComponent } from './Components/accueil/accueil.component';


const appRoutes: Routes = [

  { path: '', component: AuthComponent},
  { path: 'accueil', component: AccueilComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
