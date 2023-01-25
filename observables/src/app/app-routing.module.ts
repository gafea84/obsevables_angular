import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'home' },
  { path: "home", component: CharacterListComponent },
  { path: "gender/:gender", component: CharacterListComponent },
  { path: "**", redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
