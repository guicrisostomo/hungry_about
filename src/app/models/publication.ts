import { PublicationAttachment } from "./publication-attachment";
import { User } from "./user";

export class Publication {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  created_at: Date;
  user: User;
  media?: PublicationAttachment[];

  constructor(
    id: string,
    title: string,
    description?: string,
    tags?: string[],
    created_at: Date = new Date(),
    user: User = new User(0, '', ''),
    media?: PublicationAttachment[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.created_at = created_at;
    this.user = user;
    this.media = media;
  }
}
