import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IExperience, Experience } from 'app/shared/model/experience.model';
import { ExperienceService } from './experience.service';
import { IProfile } from 'app/shared/model/profile.model';
import { ProfileService } from 'app/entities/profile/profile.service';

@Component({
  selector: 'jhi-experience-update',
  templateUrl: './experience-update.component.html'
})
export class ExperienceUpdateComponent implements OnInit {
  isSaving = false;
  profiles: IProfile[] = [];

  editForm = this.fb.group({
    id: [],
    title: [],
    company: [],
    location: [],
    description: [],
    startAt: [],
    endAt: [],
    profile: []
  });

  constructor(
    protected experienceService: ExperienceService,
    protected profileService: ProfileService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ experience }) => {
      if (!experience.id) {
        const today = moment().startOf('day');
        experience.startAt = today;
        experience.endAt = today;
      }

      this.updateForm(experience);

      this.profileService.query().subscribe((res: HttpResponse<IProfile[]>) => (this.profiles = res.body || []));
    });
  }

  updateForm(experience: IExperience): void {
    this.editForm.patchValue({
      id: experience.id,
      title: experience.title,
      company: experience.company,
      location: experience.location,
      description: experience.description,
      startAt: experience.startAt ? experience.startAt.format(DATE_TIME_FORMAT) : null,
      endAt: experience.endAt ? experience.endAt.format(DATE_TIME_FORMAT) : null,
      profile: experience.profile
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const experience = this.createFromForm();
    if (experience.id !== undefined) {
      this.subscribeToSaveResponse(this.experienceService.update(experience));
    } else {
      this.subscribeToSaveResponse(this.experienceService.create(experience));
    }
  }

  private createFromForm(): IExperience {
    return {
      ...new Experience(),
      id: this.editForm.get(['id'])!.value,
      title: this.editForm.get(['title'])!.value,
      company: this.editForm.get(['company'])!.value,
      location: this.editForm.get(['location'])!.value,
      description: this.editForm.get(['description'])!.value,
      startAt: this.editForm.get(['startAt'])!.value ? moment(this.editForm.get(['startAt'])!.value, DATE_TIME_FORMAT) : undefined,
      endAt: this.editForm.get(['endAt'])!.value ? moment(this.editForm.get(['endAt'])!.value, DATE_TIME_FORMAT) : undefined,
      profile: this.editForm.get(['profile'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IExperience>>): void {
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

  trackById(index: number, item: IProfile): any {
    return item.id;
  }
}
