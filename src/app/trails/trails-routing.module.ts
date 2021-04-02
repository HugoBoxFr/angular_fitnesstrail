import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveTrailComponent } from './active-trail/active-trail.component';
import { ResultComponent } from './result/result.component';
import { TrailSelectionComponent } from './trail-selection/trail-selection.component';
import { TrailsComponent } from './trails.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: TrailsComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'selection',
        component: TrailSelectionComponent
      },
      {
        path: 'selection/:id',
        component: ActiveTrailComponent
      },
      {
        path: 'result',
        component: ResultComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailsRoutingModule { }
