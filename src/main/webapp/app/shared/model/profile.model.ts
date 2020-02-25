import { Moment } from 'moment';
import { IContact } from 'app/shared/model/contact.model';
import { IEducation } from 'app/shared/model/education.model';
import { IExperience } from 'app/shared/model/experience.model';

export interface IProfile {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  birthday?: Moment;
  residance?: string;
  hireDate?: Moment;
  salary?: number;
  status?: string;
  totalXp?: number;
  desiredPosition?: string;
  photoContentType?: string;
  photo?: any;
  mobility?: string;
  driver?: boolean;
  seen?: boolean;
  summary?: string;
  external?: boolean;
  contacts?: IContact[];
  educations?: IEducation[];
  experiences?: IExperience[];
}

export class Profile implements IProfile {
  constructor(
    public id?: number,
    public firstname?: string,
    public lastname?: string,
    public email?: string,
    public phone?: string,
    public birthday?: Moment,
    public residance?: string,
    public hireDate?: Moment,
    public salary?: number,
    public status?: string,
    public totalXp?: number,
    public desiredPosition?: string,
    public photoContentType?: string,
    public photo?: any,
    public mobility?: string,
    public driver?: boolean,
    public seen?: boolean,
    public summary?: string,
    public external?: boolean,
    public contacts?: IContact[],
    public educations?: IEducation[],
    public experiences?: IExperience[]
  ) {
    this.driver = this.driver || false;
    this.seen = this.seen || false;
    this.external = this.external || false;
  }
}
