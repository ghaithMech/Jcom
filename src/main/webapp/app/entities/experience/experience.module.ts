import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JcomSharedModule } from 'app/shared/shared.module';
import { ExperienceComponent } from './experience.component';
import { ExperienceDetailComponent } from './experience-detail.component';
import { ExperienceUpdateComponent } from './experience-update.component';
import { ExperienceDeleteDialogComponent } from './experience-delete-dialog.component';
import { experienceRoute } from './experience.route';

@NgModule({
  imports: [JcomSharedModule, RouterModule.forChild(experienceRoute)],
  declarations: [ExperienceComponent, ExperienceDetailComponent, ExperienceUpdateComponent, ExperienceDeleteDialogComponent],
  entryComponents: [ExperienceDeleteDialogComponent]
})
export class JcomExperienceModule {}
