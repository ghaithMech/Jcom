import { ISource } from 'app/shared/model/source.model';
import { IProfile } from 'app/shared/model/profile.model';

export interface IContact {
  id?: number;
  link?: string;
  source?: ISource;
  profile?: IProfile;
}

export class Contact implements IContact {
  constructor(public id?: number, public link?: string, public source?: ISource, public profile?: IProfile) {}
}
