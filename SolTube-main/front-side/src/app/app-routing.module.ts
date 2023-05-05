import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { VideoPageComponent } from "./video-page/video-page.component";
import { ProfileComponent } from "./profile/profile.component";
import { ChanelComponent } from "./chanel/chanel.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { VideoUploadComponent } from "./video-upload/video-upload.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'watch', component: VideoPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chanel', component: ChanelComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'video-upload', component: VideoUploadComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
