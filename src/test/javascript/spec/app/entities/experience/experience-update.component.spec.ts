import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { JcomTestModule } from '../../../test.module';
import { ExperienceUpdateComponent } from 'app/entities/experience/experience-update.component';
import { ExperienceService } from 'app/entities/experience/experience.service';
import { Experience } from 'app/shared/model/experience.model';

describe('Component Tests', () => {
  describe('Experience Management Update Component', () => {
    let comp: ExperienceUpdateComponent;
    let fixture: ComponentFixture<ExperienceUpdateComponent>;
    let service: ExperienceService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JcomTestModule],
        declarations: [ExperienceUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(ExperienceUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ExperienceUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ExperienceService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Experience(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new Experience();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
