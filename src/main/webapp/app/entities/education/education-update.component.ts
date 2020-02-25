import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IEducation, Education } from 'app/shared/model/education.model';
import { EducationService } from './education.service';
import { IProfile } from 'app/shared/model/profile.model';
import { ProfileService } from 'app/entities/profile/profile.service';

@Component({
  selector: 'jhi-education-update',
  templateUrl: './education-update.component.html'
})
export class EducationUpdateComponent implements OnInit {
  isSaving = false;
  profiles: IProfile[] = [];

  editForm = this.fb.group({
    id: [],
    diplome: [],
    school: [],
    year: [],
    profile: []
  });

  constructor(
    protected educationService: EducationService,
    protected profileService: ProfileService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ education }) => {
      this.updateForm(education);

      this.profileService.query().subscribe((res: HttpResponse<IProfile[]>) => (this.profiles = res.body || []));
    });
  }

  updateForm(education: IEducation): void {
    this.editForm.patchValue({
      id: education.id,
      diplome: education.diplome,
      school: education.school,
      year: education.year,
      profile: education.profile
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const education = this.createFromForm();
    if (education.id !== undefined) {
      this.subscribeToSaveResponse(this.educationService.update(education));
    } else {
      this.subscribeToSaveResponse(this.educationService.create(education));
    }
  }

  private createFromForm(): IEducation {
    return {
      ...new Education(),
      id: this.editForm.get(['id'])!.value,
      diplome: this.editForm.get(['diplome'])!.value,
      school: this.editForm.get(['school'])!.value,
      year: this.editForm.get(['year'])!.value,
      profile: this.editForm.get(['profile'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEducation>>): void {
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
