import { z } from 'zod';

export const EmployerEnquirySchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  workEmail: z.string().email('Please enter a valid corporate email'),
  phone: z.string().min(8, 'Please enter a valid contact number'),
  industry: z.string().min(2, 'Please select or enter your industry'),
  targetJlptLevel: z.enum(['N1', 'N2', 'N3', 'N4', 'N5', 'Multiple Levels']),
  jobTitle: z.string().min(2, 'Job title or role required is required'),
  numberOfVacancies: z.number().min(1, 'At least 1 vacancy must be specified'),
  location: z.string().min(2, 'Work location is required'),
  additionalDetails: z.string().max(3000).optional(),
});

export type EmployerEnquiryValues = z.infer<typeof EmployerEnquirySchema>;

export interface EmployerEnquiryResponse {
  success: boolean;
  enquiryId: string;
  companyName: string;
  message: string;
  receivedAt: string;
}
