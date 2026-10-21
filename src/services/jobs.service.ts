import { Job, JobFilters, JobListResponse } from '../types/job.types';
import { SAMPLE_JOBS } from './mockData';

// Simulated delay helper
const delay = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchJobs(filters: JobFilters = {}): Promise<JobListResponse> {
  await delay(300);

  let result = [...SAMPLE_JOBS];

  // 1. Text search
  if (filters.query && filters.query.trim()) {
    const q = filters.query.toLowerCase().trim();
    result = result.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q) ||
        job.industry.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.requirements.some((r) => r.toLowerCase().includes(q))
    );
  }

  // 2. JLPT level filter
  if (filters.jlpt && filters.jlpt !== 'Any') {
    result = result.filter((job) => job.jlptRequired === filters.jlpt);
  }

  // 3. Location filter
  if (filters.location && filters.location !== 'All') {
    result = result.filter((job) =>
      job.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  // 4. Work mode
  if (filters.workMode) {
    result = result.filter((job) => job.workMode === filters.workMode);
  }

  // 5. Employment type
  if (filters.employmentType) {
    result = result.filter((job) => job.employmentType === filters.employmentType);
  }

  // 6. Experience filter
  if (typeof filters.minExperience === 'number' && filters.minExperience > 0) {
    result = result.filter((job) => job.experienceMinYears <= filters.minExperience!);
  }

  // 7. Sorting
  if (filters.sortBy === 'salaryHigh') {
    result.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
  } else if (filters.sortBy === 'experienceLow') {
    result.sort((a, b) => a.experienceMinYears - b.experienceMinYears);
  } else {
    // Newest first
    result.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
  }

  // 8. Pagination
  const page = filters.page && filters.page > 0 ? filters.page : 1;
  const pageSize = filters.pageSize || 6;
  const total = result.length;
  const totalPages = Math.ceil(total / pageSize) || 1;
  const start = (page - 1) * pageSize;
  const paginatedJobs = result.slice(start, start + pageSize);

  return {
    jobs: paginatedJobs,
    total,
    page,
    pageSize,
    totalPages,
  };
}

export async function fetchJobById(id: string): Promise<Job | null> {
  await delay(250);
  const found = SAMPLE_JOBS.find((j) => j.id === id);
  return found || null;
}

export async function fetchFeaturedJobs(): Promise<Job[]> {
  await delay(200);
  return SAMPLE_JOBS.filter((j) => j.isFeatured).slice(0, 4);
}

export async function fetchRelatedJobs(currentJobId: string, jlpt?: string): Promise<Job[]> {
  await delay(150);
  return SAMPLE_JOBS.filter((j) => j.id !== currentJobId && (jlpt ? j.jlptRequired === jlpt : true)).slice(0, 3);
}
