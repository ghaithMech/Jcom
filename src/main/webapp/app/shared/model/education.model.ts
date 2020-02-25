import { IProfile } from 'app/shared/model/profile.model';

export interface IEducation {
  id?: number;
  diplome?: string;
  school?: string;
  year?: number;
  profile?: IProfile;
}

export class Education implements IEducation {
  constructor(public id?: number, public diplome?: string, public school?: string, public year?: number, public profile?: IProfile) {}
}
