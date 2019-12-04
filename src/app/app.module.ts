import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SharedModule } from 'src/shared/shared.module';

const ROUTES = [
  { path: 'setup', component: SetupComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  { path: '**', redirectTo: '/setup', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
