import { IExperience } from 'app/shared/model/experience.model';

export interface ISkill {
  id?: number;
  family?: string;
  domain?: string;
  nature?: string;
  name?: string;
  searchWord?: string;
  experiences?: IExperience[];
}

export class Skill implements ISkill {
  constructor(
    public id?: number,
    public family?: string,
    public domain?: string,
    public nature?: string,
    public name?: string,
    public searchWord?: string,
    public experiences?: IExperience[]
  ) {}
}
