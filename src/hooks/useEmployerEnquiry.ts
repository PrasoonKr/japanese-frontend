import { useMutation } from '@tanstack/react-query';
import { submitEmployerEnquiry, submitContactEnquiry } from '../services/employers.service';
import { EmployerEnquiryValues } from '../types/employer.types';

export function useEmployerEnquiry() {
  return useMutation({
    mutationFn: (data: EmployerEnquiryValues) => submitEmployerEnquiry(data),
  });
}

export function useContactEnquiry() {
  return useMutation({
    mutationFn: submitContactEnquiry,
  });
}
