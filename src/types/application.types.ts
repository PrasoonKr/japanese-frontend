import { z } from 'zod';

export const ApplicationFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number with country code'),
  currentLocation: z.string().min(2, 'Please specify your current city/location'),
  jlptLevel: z.enum(['N1', 'N2', 'N3', 'N4', 'N5', 'None', 'Appearing']),
  jlptPassingYear: z.string().optional(),
  yearsOfExperience: z.number().min(0, 'Experience must be 0 or more years'),
  currentNoticePeriod: z.string().min(1, 'Please specify notice period'),
  resumeFileName: z.string().min(1, 'Resume upload is required (PDF or DOCX)'),
  coverLetter: z.string().max(2000, 'Cover letter maximum 2000 characters').optional(),
  consentPrivacy: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the privacy policy to proceed' }),
  }),
});

export type ApplicationFormValues = z.infer<typeof ApplicationFormSchema>;

export interface ApplicationSubmissionResponse {
  success: boolean;
  applicationId: string;
  candidateName: string;
  jobTitle: string;
  message: string;
  submittedAt: string;
}
