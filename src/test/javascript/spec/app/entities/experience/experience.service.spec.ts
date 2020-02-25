import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { ExperienceService } from 'app/entities/experience/experience.service';
import { IExperience, Experience } from 'app/shared/model/experience.model';

describe('Service Tests', () => {
  describe('Experience Service', () => {
    let injector: TestBed;
    let service: ExperienceService;
    let httpMock: HttpTestingController;
    let elemDefault: IExperience;
    let expectedResult: IExperience | IExperience[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ExperienceService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Experience(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', currentDate, currentDate);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            startAt: currentDate.format(DATE_TIME_FORMAT),
            endAt: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Experience', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            startAt: currentDate.format(DATE_TIME_FORMAT),
            endAt: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            startAt: currentDate,
            endAt: currentDate
          },
          returnedFromService
        );

        service.create(new Experience()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Experience', () => {
        const returnedFromService = Object.assign(
          {
            title: 'BBBBBB',
            company: 'BBBBBB',
            location: 'BBBBBB',
            description: 'BBBBBB',
            startAt: currentDate.format(DATE_TIME_FORMAT),
            endAt: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            startAt: currentDate,
            endAt: currentDate
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Experience', () => {
        const returnedFromService = Object.assign(
          {
            title: 'BBBBBB',
            company: 'BBBBBB',
            location: 'BBBBBB',
            description: 'BBBBBB',
            startAt: currentDate.format(DATE_TIME_FORMAT),
            endAt: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            startAt: currentDate,
            endAt: currentDate
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Experience', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
