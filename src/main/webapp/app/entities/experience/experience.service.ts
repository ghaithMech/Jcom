import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption, SearchWithPagination } from 'app/shared/util/request-util';
import { IExperience } from 'app/shared/model/experience.model';

type EntityResponseType = HttpResponse<IExperience>;
type EntityArrayResponseType = HttpResponse<IExperience[]>;

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  public resourceUrl = SERVER_API_URL + 'api/experiences';
  public resourceSearchUrl = SERVER_API_URL + 'api/_search/experiences';

  constructor(protected http: HttpClient) {}

  create(experience: IExperience): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(experience);
    return this.http
      .post<IExperience>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(experience: IExperience): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(experience);
    return this.http
      .put<IExperience>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IExperience>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IExperience[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req: SearchWithPagination): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IExperience[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  protected convertDateFromClient(experience: IExperience): IExperience {
    const copy: IExperience = Object.assign({}, experience, {
      startAt: experience.startAt && experience.startAt.isValid() ? experience.startAt.toJSON() : undefined,
      endAt: experience.endAt && experience.endAt.isValid() ? experience.endAt.toJSON() : undefined
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.startAt = res.body.startAt ? moment(res.body.startAt) : undefined;
      res.body.endAt = res.body.endAt ? moment(res.body.endAt) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((experience: IExperience) => {
        experience.startAt = experience.startAt ? moment(experience.startAt) : undefined;
        experience.endAt = experience.endAt ? moment(experience.endAt) : undefined;
      });
    }
    return res;
  }
}
