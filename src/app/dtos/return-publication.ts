import { Publication } from '../models/publication';
import { User } from '../models/user';

export class ReturnPublication {
  publications: (Publication & User)[];
  status: number;

  constructor(publications: (Publication & User)[], status: number) {
    this.publications = publications;
    this.status = status;
  }
}
