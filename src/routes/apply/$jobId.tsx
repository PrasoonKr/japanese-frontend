import React, { useState } from 'react';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import {
  Container,
  Card,
  Stack,
  Title,
  Text,
  TextInput,
  NumberInput,
  Select,
  Textarea,
  Checkbox,
  Button,
  Group,
  Alert,
  Box,
  Divider,
  Paper,
  FileInput,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  IconCheck,
  IconAlertCircle,
  IconUpload,
  IconArrowLeft,
  IconBriefcase,
  IconShieldCheck,
} from '@tabler/icons-react';
import { useJob } from '../../hooks/useJob';
import { useApplyJob } from '../../hooks/useApplyJob';
import {
  ApplicationFormSchema,
  ApplicationFormValues,
} from '../../types/application.types';

export const Route = createFileRoute('/apply/$jobId')({
  component: ApplyJobPage,
});

function ApplyJobPage() {
  const { jobId } = Route.useParams();
  const navigate = useNavigate();
  const { data: job, isLoading: isJobLoading } = useJob(jobId);
  const applyMutation = useApplyJob(jobId);

  const [submittedResponse, setSubmittedResponse] = useState<any | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(ApplicationFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      currentLocation: '',
      jlptLevel: 'N3',
      yearsOfExperience: 2,
      currentNoticePeriod: '30 Days',
      resumeFileName: '',
      coverLetter: '',
      consentPrivacy: true,
    },
  });

  const onSubmit = async (values: ApplicationFormValues) => {
    try {
      const response = await applyMutation.mutateAsync(values);
      setSubmittedResponse(response);
    } catch (err) {
      // Handled via mutation state
    }
  };

  return (
    <Box py={50}>
      <Container size="md">
        {/* Back Link */}
        <Link
          to="/jobs/$jobId"
          params={{ jobId }}
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: 20 }}
        >
          <IconArrowLeft size={16} color="#B74736" style={{ marginRight: 6 }} />
          <Text size="sm" fw={600} c="japaneseRed.6">
            Back to Job Details
          </Text>
        </Link>

        {/* Job Summary Banner */}
        {job && (
          <Paper withBorder p="md" radius="md" mb="xl" style={{ backgroundColor: '#FDF2F0', borderColor: '#F3BCB5' }}>
            <Group justify="space-between">
              <Stack gap={2}>
                <Text size="xs" fw={700} c="japaneseRed.7" style={{ textTransform: 'uppercase' }}>
                  Applying For
                </Text>
                <Title order={3} c="deepNavy.8">
                  {job.title}
                </Title>
                <Text size="sm" c="gray.7">
                  {job.companyName} • {job.location} • Minimum JLPT {job.jlptRequired}
                </Text>
              </Stack>
            </Group>
          </Paper>
        )}

        {/* Success State */}
        {submittedResponse ? (
          <Card withBorder padding="xl" radius="md" ta="center">
            <Box
              style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: '#E6FCF5',
                color: '#0CA678',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <IconCheck size={36} />
            </Box>

            <Title order={2} c="deepNavy.8" mb="xs">
              Application Submitted Successfully
            </Title>
            <Text c="dimmed" size="sm" mb="md">
              Reference Tracking ID:{' '}
              <strong style={{ color: '#B74736' }}>{submittedResponse.applicationId}</strong>
            </Text>

            <Text c="gray.7" maw={520} mx="auto" size="md" mb="xl">
              {submittedResponse.message}
            </Text>

            <Group justify="center" gap="md">
              <Link to="/jobs" style={{ textDecoration: 'none' }}>
                <Button variant="outline" color="deepNavy">
                  Explore More Jobs
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="filled" color="japaneseRed">
                  Return to Home
                </Button>
              </Link>
            </Group>
          </Card>
        ) : (
          /* Application Form */
          <Card withBorder padding="xl" radius="md" style={{ borderColor: '#E8E2D9' }}>
            <Stack gap="xs" mb="lg">
              <Title order={2} c="deepNavy.8">
                Submit Candidate Profile
              </Title>
              <Text size="sm" c="dimmed">
                Please complete the details below. Our bilingual talent specialists will review your application.
              </Text>
            </Stack>

            {applyMutation.isError && (
              <Alert icon={<IconAlertCircle size={16} />} title="Submission Error" color="red" mb="lg">
                There was an issue processing your application. Please check your inputs and try again.
              </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap="md">
                {/* Personal Information */}
                <Text fw={700} size="sm" c="deepNavy.8">
                  1. Contact Information
                </Text>

                <Group grow align="flex-start">
                  <TextInput
                    label="Full Name"
                    placeholder="e.g. Rahul Sharma"
                    withAsterisk
                    {...register('fullName')}
                    error={errors.fullName?.message}
                  />
                  <TextInput
                    label="Corporate / Personal Email"
                    placeholder="rahul@example.com"
                    withAsterisk
                    {...register('email')}
                    error={errors.email?.message}
                  />
                </Group>

                <Group grow align="flex-start">
                  <TextInput
                    label="Phone Number"
                    placeholder="+91 98765 43210"
                    withAsterisk
                    {...register('phone')}
                    error={errors.phone?.message}
                  />
                  <TextInput
                    label="Current City / Location"
                    placeholder="e.g. Gurugram, Delhi NCR"
                    withAsterisk
                    {...register('currentLocation')}
                    error={errors.currentLocation?.message}
                  />
                </Group>

                <Divider my="sm" color="#F1ECE5" />

                {/* Japanese Proficiency */}
                <Text fw={700} size="sm" c="deepNavy.8">
                  2. Japanese Language Capability
                </Text>

                <Group grow align="flex-start">
                  <Controller
                    name="jlptLevel"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Highest JLPT Level Achieved"
                        withAsterisk
                        data={[
                          { value: 'N1', label: 'JLPT N1 (Fluent / Native-level)' },
                          { value: 'N2', label: 'JLPT N2 (Business Professional)' },
                          { value: 'N3', label: 'JLPT N3 (Conversational Bridge)' },
                          { value: 'N4', label: 'JLPT N4 (Basic Workplace)' },
                          { value: 'N5', label: 'JLPT N5 (Elementary)' },
                          { value: 'Appearing', label: 'Appearing in upcoming exam' },
                          { value: 'None', label: 'Self-taught / No official JLPT' },
                        ]}
                        value={field.value}
                        onChange={(val) => field.onChange(val)}
                        error={errors.jlptLevel?.message}
                      />
                    )}
                  />

                  <TextInput
                    label="Passing Year / Month"
                    placeholder="e.g. December 2024"
                    {...register('jlptPassingYear')}
                    error={errors.jlptPassingYear?.message}
                  />
                </Group>

                <Divider my="sm" color="#F1ECE5" />

                {/* Professional Background */}
                <Text fw={700} size="sm" c="deepNavy.8">
                  3. Experience & Resume Attachment
                </Text>

                <Group grow align="flex-start">
                  <Controller
                    name="yearsOfExperience"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        label="Total Relevant Experience (Years)"
                        withAsterisk
                        min={0}
                        max={40}
                        value={field.value}
                        onChange={(val) => field.onChange(Number(val) || 0)}
                        error={errors.yearsOfExperience?.message}
                      />
                    )}
                  />

                  <Controller
                    name="currentNoticePeriod"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Current Notice Period"
                        withAsterisk
                        data={[
                          { value: 'Immediate', label: 'Immediate Joiner' },
                          { value: '15 Days', label: '15 Days' },
                          { value: '30 Days', label: '30 Days' },
                          { value: '60 Days', label: '60 Days' },
                          { value: '90 Days', label: '90 Days' },
                        ]}
                        value={field.value}
                        onChange={(val) => field.onChange(val)}
                        error={errors.currentNoticePeriod?.message}
                      />
                    )}
                  />
                </Group>

                {/* Resume Upload Dropzone Simulation */}
                <FileInput
                  label="Upload Resume (CV / Rirekisho)"
                  description="Supported formats: PDF, DOCX (Max 5MB)"
                  placeholder="Click to attach your resume file..."
                  leftSection={<IconUpload size={16} />}
                  withAsterisk
                  accept=".pdf,.docx,.doc"
                  onChange={(file) => {
                    setValue('resumeFileName', file ? file.name : '', { shouldValidate: true });
                  }}
                  error={errors.resumeFileName?.message}
                />

                <Textarea
                  label="Short Introduction / Japanese Self-Introduction (Optional)"
                  placeholder="Feel free to write a short self-introduction (Jikoshoukai) or summary in Japanese or English..."
                  rows={3}
                  {...register('coverLetter')}
                  error={errors.coverLetter?.message}
                />

                <Controller
                  name="consentPrivacy"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      mt="sm"
                      label="I consent to the processing of my resume and personal details for recruitment opportunities."
                      checked={field.value}
                      onChange={(e) => field.onChange(e.currentTarget.checked)}
                      error={errors.consentPrivacy?.message}
                    />
                  )}
                />

                <Button
                  type="submit"
                  size="md"
                  color="japaneseRed"
                  mt="md"
                  loading={applyMutation.isPending}
                >
                  Submit Application
                </Button>
              </Stack>
            </form>
          </Card>
        )}
      </Container>
    </Box>
  );
}
