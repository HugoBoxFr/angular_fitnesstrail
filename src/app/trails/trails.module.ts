import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrailsRoutingModule } from './trails-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserFormComponent } from './welcome/user-form/user-form.component';
import { ActiveTrailComponent } from './active-trail/active-trail.component';
import { StepComponent } from './active-trail/step/step.component';
import { ChronoComponent } from './active-trail/chrono/chrono.component';
import { MapComponent } from './active-trail/map/map.component';
import { ResultComponent } from './result/result.component';
import { TrailsComponent } from './trails.component';
import { TrailSelectionComponent } from './trail-selection/trail-selection.component';
import { TrailComponent } from './trail-selection/trail/trail.component';
import { TrailPreviewComponent } from './trail-selection/trail-preview/trail-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    TrailsComponent, 
    WelcomeComponent, 
    UserFormComponent, 
    ActiveTrailComponent, 
    StepComponent, 
    ChronoComponent, 
    MapComponent, 
    ResultComponent, 
    TrailSelectionComponent, 
    TrailComponent, 
    TrailPreviewComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrailsRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
  ],
  exports: [
    TrailsComponent
  ]
})
export class TrailsModule { }
