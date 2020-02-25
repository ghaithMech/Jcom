import { Moment } from 'moment';
import { IProfile } from 'app/shared/model/profile.model';
import { ISkill } from 'app/shared/model/skill.model';

export interface IExperience {
  id?: number;
  title?: string;
  company?: string;
  location?: string;
  description?: string;
  startAt?: Moment;
  endAt?: Moment;
  profile?: IProfile;
  skills?: ISkill[];
}

export class Experience implements IExperience {
  constructor(
    public id?: number,
    public title?: string,
    public company?: string,
    public location?: string,
    public description?: string,
    public startAt?: Moment,
    public endAt?: Moment,
    public profile?: IProfile,
    public skills?: ISkill[]
  ) {}
}
