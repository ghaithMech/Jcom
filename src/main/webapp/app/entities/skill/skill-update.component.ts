import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ISkill, Skill } from 'app/shared/model/skill.model';
import { SkillService } from './skill.service';
import { IExperience } from 'app/shared/model/experience.model';
import { ExperienceService } from 'app/entities/experience/experience.service';

@Component({
  selector: 'jhi-skill-update',
  templateUrl: './skill-update.component.html'
})
export class SkillUpdateComponent implements OnInit {
  isSaving = false;
  experiences: IExperience[] = [];

  editForm = this.fb.group({
    id: [],
    family: [],
    domain: [],
    nature: [],
    name: [],
    searchWord: [],
    experiences: []
  });

  constructor(
    protected skillService: SkillService,
    protected experienceService: ExperienceService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ skill }) => {
      this.updateForm(skill);

      this.experienceService.query().subscribe((res: HttpResponse<IExperience[]>) => (this.experiences = res.body || []));
    });
  }

  updateForm(skill: ISkill): void {
    this.editForm.patchValue({
      id: skill.id,
      family: skill.family,
      domain: skill.domain,
      nature: skill.nature,
      name: skill.name,
      searchWord: skill.searchWord,
      experiences: skill.experiences
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const skill = this.createFromForm();
    if (skill.id !== undefined) {
      this.subscribeToSaveResponse(this.skillService.update(skill));
    } else {
      this.subscribeToSaveResponse(this.skillService.create(skill));
    }
  }

  private createFromForm(): ISkill {
    return {
      ...new Skill(),
      id: this.editForm.get(['id'])!.value,
      family: this.editForm.get(['family'])!.value,
      domain: this.editForm.get(['domain'])!.value,
      nature: this.editForm.get(['nature'])!.value,
      name: this.editForm.get(['name'])!.value,
      searchWord: this.editForm.get(['searchWord'])!.value,
      experiences: this.editForm.get(['experiences'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISkill>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IExperience): any {
    return item.id;
  }

  getSelected(selectedVals: IExperience[], option: IExperience): IExperience {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }
}
