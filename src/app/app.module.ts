import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import {DataTableModule} from 'angular-6-datatable'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { SingleAnnonceComponent } from './annonces/single-annonce/single-annonce.component';
import { FormAnnonceComponent } from './annonces/form-annonce/form-annonce.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { FormActualiteComponent } from './actualite/form-actualite/form-actualite.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ActualiteService } from './service/actualite.service';
import { AnnoncesService } from './service/annonces.service';
import { AuthentificationService } from './service/authentification.service';
import {Routes, RouterModule} from '@angular/router'
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { UserAnnoncesComponent } from './annonces/user-annonces/user-annonces.component';
import { UserAnnoncesViewComponent } from './annonces/user-annonces/user-annonces-view/user-annonces-view.component';
import { FavorisComponent } from './annonces/favoris/favoris.component';
import { AdminAnnoncesComponent } from './annonces/admin-annonces/admin-annonces.component';
import { MesInfosComponent } from './my-account/mes-infos/mes-infos.component';
import { MesInfosViewComponent } from './my-account/mes-infos-view/mes-infos-view.component';
import { AdminActualiteComponent } from './actualite/admin-actualite/admin-actualite.component';
import { UserComponent } from './admin/user/user.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/app/home', pathMatch: 'full'},
  {path: 'app/home/:id', component: SingleAnnonceComponent},
  {path: 'app/annonce/new', component: FormAnnonceComponent},
  {path: 'app/home', component: HomeComponent},
  {path: 'app/login', component: LoginComponent},
  {path: 'app/register', component: RegisterComponent},
  {path: 'app/myAccount', component: MyAccountComponent, children: [
    {path: '', redirectTo: 'annonces', pathMatch: 'full'},
    {path: 'annonces/:id', component: SingleAnnonceComponent},
    {path: 'favoris/:id', component: SingleAnnonceComponent},
    {path: 'annonces', component: UserAnnoncesComponent},
    {path: 'favoris', component: FavorisComponent},
    {path: 'prive', component: MesInfosComponent},
    {path: 'admin', component: AdminComponent}
  ]},
  {path: 'app/404', component: ErrorComponent},
  {path: '**', redirectTo: 'app/404'},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AnnoncesComponent,
    SingleAnnonceComponent,
    FormAnnonceComponent,
    ActualiteComponent,
    FormActualiteComponent,
    MyAccountComponent,
    ErrorComponent,
    AdminComponent,
    UserAnnoncesComponent,
    UserAnnoncesViewComponent,
    FavorisComponent,
    AdminAnnoncesComponent,
    MesInfosComponent,
    MesInfosViewComponent,
    AdminActualiteComponent,
    UserComponent,

  ],
  imports: [
  BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    DataTableModule
  ],
  providers: [
    ActualiteService,
    AnnoncesService,
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
