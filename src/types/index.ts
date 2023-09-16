export type TypeProject = {
  id: number;
  created: Date;
  updated: Date;
  title: string;
  description: string;
  stacks: number[];
  githubUrl?: string;
  websiteUrl?: string;
  teamSize?: number;
};

export type FrontmatterWithDate = TypeProject;
