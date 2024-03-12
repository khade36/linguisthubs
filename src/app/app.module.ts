import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
// import { EnglishComponent } from './userCourses/english/english.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserViewComponent } from './user-view/user-view.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { RussianComponent } from './course/russian/russian.component';
import { HindiComponent } from './course/hindi/hindi.component';
import { JapaneseComponent } from './course/japanese/japanese.component';
import { FrenchComponent } from './course/french/french.component';
import { EnglishMComponent } from './course/english-m/english-m.component';
import { EnglishUComponent } from './userCourses/english-u/english-u.component';
import { HindiUComponent } from './userCourses/hindi-u/hindi-u.component';
import { JapaneseUComponent } from './userCourses/japanese-u/japanese-u.component';
import { FrenchUComponent } from './userCourses/french-u/french-u.component';
import { RussianUComponent } from './userCourses/russian-u/russian-u.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourseAccessGuardGuard } from './course-access-guard.guard';

const routes:Routes=[
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"english",component:EnglishMComponent},
  {path:"russian",component:RussianComponent},
  {path:"french",component:FrenchComponent},
  {path:"japanese",component:JapaneseComponent},
  {path:"hindi",component:HindiComponent},
  {path:"payment-gateway",component:UserViewComponent},
  {path:"english-u",component:EnglishUComponent},
  // {path:"hindi-u",component:HindiUComponent},
  // {path:"french-u",component:FrenchUComponent},
  // {path:"japanese-u",component:JapaneseUComponent},
  {path:"russian-u",component:RussianUComponent,canActivate:[CourseAccessGuardGuard]},
  {path:"checkout",component:CheckoutComponent},
  {path:"dashborad",component:DashboardComponent},
  {path:'**',component:NotfoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    UserViewComponent,
    RussianComponent,
    HindiComponent,
    JapaneseComponent,
    FrenchComponent,
    EnglishMComponent,
    EnglishUComponent,
    HindiUComponent,
    JapaneseUComponent,
    FrenchUComponent,
    RussianUComponent,
    CheckoutComponent,
    DashboardComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    MatSnackBarModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
