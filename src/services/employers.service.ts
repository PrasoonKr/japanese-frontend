import { EmployerEnquiryValues, EmployerEnquiryResponse } from '../types/employer.types';

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export async function submitEmployerEnquiry(
  data: EmployerEnquiryValues
): Promise<EmployerEnquiryResponse> {
  await delay(750);

  const enquiryId = 'EMP-' + Math.floor(100000 + Math.random() * 900000);

  return {
    success: true,
    enquiryId,
    companyName: data.companyName,
    message: 'Thank you for contacting our corporate recruitment division. A dedicated account manager will connect with ' + data.contactPerson + ' within 24 business hours to discuss your hiring timeline.',
    receivedAt: new Date().toISOString(),
  };
}

export async function submitContactEnquiry(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; id: string; message: string }> {
  await delay(600);
  const id = 'CNT-' + Math.floor(100000 + Math.random() * 900000);
  return {
    success: true,
    id,
    message: 'Your message has been sent successfully. Our team will review your enquiry and respond promptly.',
  };
}
