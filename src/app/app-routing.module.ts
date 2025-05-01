import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MergepdfComponent } from './mergepdf/mergepdf.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'merge-pdf', component: MergepdfComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}