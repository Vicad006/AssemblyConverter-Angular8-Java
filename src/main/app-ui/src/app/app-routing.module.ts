import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssemblyConverterComponent} from "./assembly-converter/assembly-converter.component";


const routes: Routes = [
  {path: '', component: AssemblyConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
