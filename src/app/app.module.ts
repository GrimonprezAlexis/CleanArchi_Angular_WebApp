import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../presentation/features/home/home.component';
import { AuthGuard } from './@core/auth/auth.guard';
import { LogoutComponent } from '@/presentation/features/logout/logout.component';
import { LogoutModule } from '@/presentation/features/logout/logout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LogoutModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
