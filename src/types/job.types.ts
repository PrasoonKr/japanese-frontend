export type JlptLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5' | 'Any';

export type WorkMode = 'On-site' | 'Hybrid' | 'Remote';

export type EmploymentType = 'Full-time' | 'Contract' | 'Part-time' | 'Freelance Project';

export interface Job {
  id: string;
  title: string;
  companyName: string;
  isCompanyVerified: boolean;
  industry: string;
  location: string;
  workMode: WorkMode;
  employmentType: EmploymentType;
  experienceMinYears: number;
  experienceMaxYears?: number;
  jlptRequired: JlptLevel;
  jlptPreferred?: JlptLevel;
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency: string;
  salaryPeriod: 'Annual' | 'Monthly' | 'Hourly';
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferredSkills: string[];
  benefits: string[];
  visaSupportAvailable: boolean;
  isFeatured?: boolean;
  postedDate: string;
  applicationDeadline?: string;
}

export interface JobFilters {
  query?: string;
  jlpt?: JlptLevel;
  location?: string;
  workMode?: WorkMode;
  employmentType?: EmploymentType;
  minExperience?: number;
  sortBy?: 'newest' | 'salaryHigh' | 'experienceLow';
  page?: number;
  pageSize?: number;
}

export interface JobListResponse {
  jobs: Job[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
