import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { PdfTestComponent } from './pdf-test/pdf-test.component';
import { ViewInjectComponent } from './view-inject/view-inject.component';

const routes: Routes = [
  { path: 'pdf-test', component: PdfTestComponent },
  { path: 'modals', component: ViewInjectComponent },
  { path: 'notifications', component: NotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
