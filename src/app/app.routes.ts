import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewDiaperComponent } from './new-diaper/new-diaper.component';
import { EditCareComponent } from './edit-care/edit-care.component';
import { EditCareResolver } from './edit-care/edit-care.resolver';
import { NewFeedComponent } from './new-feed/new-feed.component';
import { NewSleepComponent } from './new-sleep/new-sleep.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: 'home', component: HomeComponent },
  { path: 'new-diaper', component: NewDiaperComponent },
  { path: 'new-sleep', component: NewSleepComponent },
  { path: 'new-feed', component: NewFeedComponent },
  { path: 'edit-care/:id', component: EditCareComponent, resolve:{data : EditCareResolver} },
];
