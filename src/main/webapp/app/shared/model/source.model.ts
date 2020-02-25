export interface ISource {
  id?: number;
  name?: string;
  logoContentType?: string;
  logo?: any;
}

export class Source implements ISource {
  constructor(public id?: number, public name?: string, public logoContentType?: string, public logo?: any) {}
}
