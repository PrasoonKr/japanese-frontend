import { useMutation } from '@tanstack/react-query';
import { submitApplication } from '../services/applications.service';
import { ApplicationFormValues } from '../types/application.types';

export function useApplyJob(jobId: string) {
  return useMutation({
    mutationFn: (data: ApplicationFormValues) => submitApplication(jobId, data),
  });
}
