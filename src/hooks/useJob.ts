import { useQuery } from '@tanstack/react-query';
import { fetchJobById, fetchRelatedJobs } from '../services/jobs.service';

export function useJob(jobId: string) {
  return useQuery({
    queryKey: ['job', jobId],
    queryFn: () => fetchJobById(jobId),
    enabled: Boolean(jobId),
  });
}

export function useRelatedJobs(jobId: string, jlpt?: string) {
  return useQuery({
    queryKey: ['jobs', 'related', jobId, jlpt],
    queryFn: () => fetchRelatedJobs(jobId, jlpt),
    enabled: Boolean(jobId),
  });
}
