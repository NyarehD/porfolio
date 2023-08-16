export interface Project {
  id: number
  name: string;
  description: string;
  language: string[];
  libraryFramework: string[];
  link?: string;
  github: string;
  photos: string[];
}