import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption, SearchWithPagination } from 'app/shared/util/request-util';
import { ISkill } from 'app/shared/model/skill.model';

type EntityResponseType = HttpResponse<ISkill>;
type EntityArrayResponseType = HttpResponse<ISkill[]>;

@Injectable({ providedIn: 'root' })
export class SkillService {
  public resourceUrl = SERVER_API_URL + 'api/skills';
  public resourceSearchUrl = SERVER_API_URL + 'api/_search/skills';

  constructor(protected http: HttpClient) {}

  create(skill: ISkill): Observable<EntityResponseType> {
    return this.http.post<ISkill>(this.resourceUrl, skill, { observe: 'response' });
  }

  update(skill: ISkill): Observable<EntityResponseType> {
    return this.http.put<ISkill>(this.resourceUrl, skill, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISkill>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISkill[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req: SearchWithPagination): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISkill[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
  }
}
