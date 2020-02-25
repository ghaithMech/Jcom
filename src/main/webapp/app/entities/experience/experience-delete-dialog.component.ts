import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IExperience } from 'app/shared/model/experience.model';
import { ExperienceService } from './experience.service';

@Component({
  templateUrl: './experience-delete-dialog.component.html'
})
export class ExperienceDeleteDialogComponent {
  experience?: IExperience;

  constructor(
    protected experienceService: ExperienceService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.experienceService.delete(id).subscribe(() => {
      this.eventManager.broadcast('experienceListModification');
      this.activeModal.close();
    });
  }
}
