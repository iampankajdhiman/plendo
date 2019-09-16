import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
