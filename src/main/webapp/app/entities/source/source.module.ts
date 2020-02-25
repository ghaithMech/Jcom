import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JcomSharedModule } from 'app/shared/shared.module';
import { SourceComponent } from './source.component';
import { SourceDetailComponent } from './source-detail.component';
import { SourceUpdateComponent } from './source-update.component';
import { SourceDeleteDialogComponent } from './source-delete-dialog.component';
import { sourceRoute } from './source.route';

@NgModule({
  imports: [JcomSharedModule, RouterModule.forChild(sourceRoute)],
  declarations: [SourceComponent, SourceDetailComponent, SourceUpdateComponent, SourceDeleteDialogComponent],
  entryComponents: [SourceDeleteDialogComponent]
})
export class JcomSourceModule {}
