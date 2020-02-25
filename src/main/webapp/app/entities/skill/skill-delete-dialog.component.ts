import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISkill } from 'app/shared/model/skill.model';
import { SkillService } from './skill.service';

@Component({
  templateUrl: './skill-delete-dialog.component.html'
})
export class SkillDeleteDialogComponent {
  skill?: ISkill;

  constructor(protected skillService: SkillService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.skillService.delete(id).subscribe(() => {
      this.eventManager.broadcast('skillListModification');
      this.activeModal.close();
    });
  }
}
