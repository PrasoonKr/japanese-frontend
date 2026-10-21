import { useQuery } from '@tanstack/react-query';
import { fetchJobs, fetchFeaturedJobs } from '../services/jobs.service';
import { JobFilters } from '../types/job.types';

export function useJobs(filters: JobFilters = {}) {
  return useQuery({
    queryKey: ['jobs', filters],
    queryFn: () => fetchJobs(filters),
  });
}

export function useFeaturedJobs() {
  return useQuery({
    queryKey: ['jobs', 'featured'],
    queryFn: fetchFeaturedJobs,
  });
}
