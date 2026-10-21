import { ApplicationFormValues, ApplicationSubmissionResponse } from '../types/application.types';

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export async function submitApplication(
  jobId: string,
  data: ApplicationFormValues
): Promise<ApplicationSubmissionResponse> {
  await delay(700);

  // Simple client-side simulation
  const generatedId = 'APP-' + Math.floor(100000 + Math.random() * 900000);

  return {
    success: true,
    applicationId: generatedId,
    candidateName: data.fullName,
    jobTitle: 'Selected Position (Ref: ' + jobId + ')',
    message: 'Your application and profile have been received. Our recruitment team will review your qualifications against client requirements and contact you within 2 business days.',
    submittedAt: new Date().toISOString(),
  };
}
