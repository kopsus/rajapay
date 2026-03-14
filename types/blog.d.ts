export interface IBlog {
  id: string;
  slug?: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
