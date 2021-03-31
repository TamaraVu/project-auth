import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const ROUTES: Routes = [
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
