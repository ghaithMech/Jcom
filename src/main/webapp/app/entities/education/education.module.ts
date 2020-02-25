import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JcomSharedModule } from 'app/shared/shared.module';
import { EducationComponent } from './education.component';
import { EducationDetailComponent } from './education-detail.component';
import { EducationUpdateComponent } from './education-update.component';
import { EducationDeleteDialogComponent } from './education-delete-dialog.component';
import { educationRoute } from './education.route';

@NgModule({
  imports: [JcomSharedModule, RouterModule.forChild(educationRoute)],
  declarations: [EducationComponent, EducationDetailComponent, EducationUpdateComponent, EducationDeleteDialogComponent],
  entryComponents: [EducationDeleteDialogComponent]
})
export class JcomEducationModule {}
