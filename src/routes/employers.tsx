import React, { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Container,
  Divider,
  Grid,
  Stack,
  Title,
  Text,
  Badge,
  Card,
  SimpleGrid,
  ThemeIcon,
  TextInput,
  NumberInput,
  Select,
  Textarea,
  Button,
  Box,
  Group,
  Alert,
  Paper,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  IconBuilding,
  IconUsers,
  IconCheck,
  IconShieldCheck,
  IconClock,
  IconLanguage,
  IconAlertCircle,
  IconHeadset,
} from '@tabler/icons-react';
import { useEmployerEnquiry } from '../hooks/useEmployerEnquiry';
import {
  EmployerEnquirySchema,
  EmployerEnquiryValues,
} from '../types/employer.types';
import { SITE_CONFIG } from '../config/site';

export const Route = createFileRoute('/employers')({
  component: EmployersPage,
});

function EmployersPage() {
  const enquiryMutation = useEmployerEnquiry();
  const [submittedData, setSubmittedData] = useState<any | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<EmployerEnquiryValues>({
    resolver: zodResolver(EmployerEnquirySchema),
    defaultValues: {
      companyName: '',
      contactPerson: '',
      workEmail: '',
      phone: '',
      industry: 'Information Technology',
      targetJlptLevel: 'N2',
      jobTitle: '',
      numberOfVacancies: 1,
      location: 'Delhi NCR / Gurugram',
      additionalDetails: '',
    },
  });

  const onSubmit = async (values: EmployerEnquiryValues) => {
    try {
      const response = await enquiryMutation.mutateAsync(values);
      setSubmittedData(response);
      reset();
    } catch (err) {
      // Handled via mutation state
    }
  };

  return (
    <Box py={60}>
      <Container size="xl">
        {/* Hero Section */}
        <Stack align="center" ta="center" gap="sm" mb={60} maw={840} mx="auto">
          <Badge variant="filled" color="japaneseRed" size="md">
            FOR CORPORATE EMPLOYERS
          </Badge>
          <Title order={1} c="deepNavy.8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Recruit High-Caliber Japanese-Speaking Talent
          </Title>
          <Text size="lg" c="gray.7" style={{ lineHeight: 1.6 }}>
            Overcome language barriers and cultural gaps. We connect Japanese MNCs and global enterprises with pre-vetted, JLPT-certified bilingual engineers, interpreters, and coordinators.
          </Text>
        </Stack>

        {/* Talent Verticals Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mb={70}>
          <Card padding="lg" radius="md" withBorder>
            <ThemeIcon size={44} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconLanguage size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              Translators & Interpreters
            </Title>
            <Text size="sm" c="gray.7">
              JLPT N1/N2 certified professionals with engineering, legal, or automotive domain mastery for plant audits and meetings.
            </Text>
          </Card>

          <Card padding="lg" radius="md" withBorder>
            <ThemeIcon size={44} radius="md" color="deepNavy" variant="light" mb="md">
              <IconUsers size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              Bilingual IT Engineers
            </Title>
            <Text size="sm" c="gray.7">
              Full-stack, embedded, and cloud developers with JLPT N3/N2 capability to interface directly with Tokyo architects.
            </Text>
          </Card>

          <Card padding="lg" radius="md" withBorder>
            <ThemeIcon size={44} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconBuilding size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              Project Managers (Bilingual)
            </Title>
            <Text size="sm" c="gray.7">
              Seasoned delivery leads skilled in Japanese milestone tracking, Agile practices, and Hou-Ren-So reporting.
            </Text>
          </Card>

          <Card padding="lg" radius="md" withBorder>
            <ThemeIcon size={44} radius="md" color="deepNavy" variant="light" mb="md">
              <IconClock size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              Sales & Operations Leads
            </Title>
            <Text size="sm" c="gray.7">
              Business coordinators for vendor relations, procurement, and supply chain logistics in Japanese industrial corridors.
            </Text>
          </Card>
        </SimpleGrid>

        {/* Main Grid: Form + Process */}
        <Grid gutter={40} align="flex-start">
          {/* Left Column: Hiring Consultation Form */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Card withBorder padding="xl" radius="md" style={{ borderColor: '#E8E2D9' }}>
              <Title order={2} c="deepNavy.8" mb="xs">
                Request a Hiring Consultation
              </Title>
              <Text size="sm" c="dimmed" mb="lg">
                Submit your talent requirement below. Our corporate recruitment team will review your timeline and provide pre-screened profiles within 24–48 hours.
              </Text>

              {submittedData ? (
                <Paper p="xl" radius="md" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                  <Group gap="xs" mb="sm">
                    <IconShieldCheck size={28} color="#16A34A" />
                    <Title order={3} c="teal.9">
                      Enquiry Received
                    </Title>
                  </Group>
                  <Text size="sm" c="gray.8" mb="md">
                    Reference ID: <strong>{submittedData.enquiryId}</strong>
                  </Text>
                  <Text size="sm" c="gray.7" mb="lg">
                    {submittedData.message}
                  </Text>
                  <Button variant="outline" color="teal" onClick={() => setSubmittedData(null)}>
                    Submit Another Requirement
                  </Button>
                </Paper>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack gap="md">
                    {enquiryMutation.isError && (
                      <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red">
                        Failed to submit enquiry. Please check your inputs.
                      </Alert>
                    )}

                    <Group grow align="flex-start">
                      <TextInput
                        label="Company / Enterprise Name"
                        placeholder="e.g. Nippon Tech India Pvt Ltd"
                        withAsterisk
                        {...register('companyName')}
                        error={errors.companyName?.message}
                      />
                      <TextInput
                        label="Contact Person Name"
                        placeholder="e.g. Kenji Tanaka / Amit Saxena"
                        withAsterisk
                        {...register('contactPerson')}
                        error={errors.contactPerson?.message}
                      />
                    </Group>

                    <Group grow align="flex-start">
                      <TextInput
                        label="Corporate Work Email"
                        placeholder="recruitment@company.co.jp"
                        withAsterisk
                        {...register('workEmail')}
                        error={errors.workEmail?.message}
                      />
                      <TextInput
                        label="Contact Phone Number"
                        placeholder="+91 98111 22334"
                        withAsterisk
                        {...register('phone')}
                        error={errors.phone?.message}
                      />
                    </Group>

                    <Group grow align="flex-start">
                      <Controller
                        name="industry"
                        control={control}
                        render={({ field }) => (
                          <Select
                            label="Industry Domain"
                            withAsterisk
                            data={[
                              { value: 'Information Technology', label: 'IT & Cloud Software' },
                              { value: 'Automotive & Manufacturing', label: 'Automotive & Heavy Engineering' },
                              { value: 'Electronics & Hardware', label: 'Electronics & Semiconductors' },
                              { value: 'Banking & Financial Services', label: 'Banking & FinTech' },
                              { value: 'Supply Chain & Logistics', label: 'Logistics & International Trade' },
                              { value: 'Consulting & Legal', label: 'Consulting & Legal Services' },
                            ]}
                            value={field.value}
                            onChange={(val) => field.onChange(val)}
                            error={errors.industry?.message}
                          />
                        )}
                      />

                      <Controller
                        name="targetJlptLevel"
                        control={control}
                        render={({ field }) => (
                          <Select
                            label="Target JLPT Requirement"
                            withAsterisk
                            data={[
                              { value: 'N1', label: 'JLPT N1 (Native / Fluent Fluency)' },
                              { value: 'N2', label: 'JLPT N2 (Business Professional)' },
                              { value: 'N3', label: 'JLPT N3 (Conversational Bridge)' },
                              { value: 'N4', label: 'JLPT N4 (Basic Communication)' },
                              { value: 'Multiple Levels', label: 'Multiple Levels / Large Batch' },
                            ]}
                            value={field.value}
                            onChange={(val) => field.onChange(val)}
                            error={errors.targetJlptLevel?.message}
                          />
                        )}
                      />
                    </Group>

                    <Group grow align="flex-start">
                      <TextInput
                        label="Role Title / Designation"
                        placeholder="e.g. Bilingual Systems Engineer"
                        withAsterisk
                        {...register('jobTitle')}
                        error={errors.jobTitle?.message}
                      />

                      <Controller
                        name="numberOfVacancies"
                        control={control}
                        render={({ field }) => (
                          <NumberInput
                            label="Number of Vacancies"
                            withAsterisk
                            min={1}
                            max={100}
                            value={field.value}
                            onChange={(val) => field.onChange(Number(val) || 1)}
                            error={errors.numberOfVacancies?.message}
                          />
                        )}
                      />
                    </Group>

                    <TextInput
                      label="Primary Work Location"
                      placeholder="e.g. Gurugram, Bengaluru, Pune, or Tokyo"
                      withAsterisk
                      {...register('location')}
                      error={errors.location?.message}
                    />

                    <Textarea
                      label="Key Responsibilities & Project Context"
                      placeholder="Share details regarding team size, technical stack, reporting structure, or target joining date..."
                      rows={4}
                      {...register('additionalDetails')}
                      error={errors.additionalDetails?.message}
                    />

                    <Button
                      type="submit"
                      size="md"
                      color="japaneseRed"
                      loading={enquiryMutation.isPending}
                    >
                      Submit Corporate Hiring Enquiry
                    </Button>
                  </Stack>
                </form>
              )}
            </Card>
          </Grid.Col>

          {/* Right Column: Corporate Value Proposition */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="lg">
              <Card withBorder padding="lg" radius="md" style={{ backgroundColor: '#202C38', color: '#FFF' }}>
                <Title order={3} c="#FFF" mb="xs">
                  Why Leading MNCs Partner With Us
                </Title>
                <Text size="sm" c="gray.4" mb="md">
                  We specialize exclusively in the Japanese language recruitment ecosystem, ensuring high accuracy and zero irrelevant resumes.
                </Text>

                <Stack gap="md">
                  <Group align="flex-start" gap="xs">
                    <ThemeIcon color="japaneseRed" size={24} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                    <Box style={{ flex: 1 }}>
                      <Text fw={600} size="sm" c="#FFF">
                        Native-Assessed Language Verification
                      </Text>
                      <Text size="xs" c="gray.4">
                        Every shortlisted profile undergoes rigorous oral and written screening before presentation.
                      </Text>
                    </Box>
                  </Group>

                  <Group align="flex-start" gap="xs">
                    <ThemeIcon color="japaneseRed" size={24} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                    <Box style={{ flex: 1 }}>
                      <Text fw={600} size="sm" c="#FFF">
                        Speed to Shortlist
                      </Text>
                      <Text size="xs" c="gray.4">
                        Average time to first batch of qualified candidate profiles is under 48 hours.
                      </Text>
                    </Box>
                  </Group>

                  <Group align="flex-start" gap="xs">
                    <ThemeIcon color="japaneseRed" size={24} radius="xl">
                      <IconCheck size={14} />
                    </ThemeIcon>
                    <Box style={{ flex: 1 }}>
                      <Text fw={600} size="sm" c="#FFF">
                        Cross-Border Relocation & Visa Advisory
                      </Text>
                      <Text size="xs" c="gray.4">
                        Guidance on Certificate of Eligibility (COE) and Japanese work visa processing for engineers.
                      </Text>
                    </Box>
                  </Group>
                </Stack>
              </Card>

              {/* Direct Assistance Card */}
              <Card withBorder padding="lg" radius="md">
                <Group gap="md">
                  <ThemeIcon size={44} radius="md" color="japaneseRed" variant="light">
                    <IconHeadset size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={700} size="sm" c="deepNavy.8">
                      Need Urgent Executive Placement?
                    </Text>
                    <Text size="xs" c="dimmed">
                      Speak directly with our Lead Japanese Practice Director.
                    </Text>
                  </Box>
                </Group>
                <Divider my="sm" color="#F1ECE5" />
                <Text size="sm" fw={600} c="japaneseRed.6">
                  {SITE_CONFIG.contactEmail}
                </Text>
                <Text size="xs" c="dimmed">
                  {SITE_CONFIG.contactPhone}
                </Text>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
