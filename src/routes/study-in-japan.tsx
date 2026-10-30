import React, { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Container,
  Stack,
  Title,
  Text,
  Badge,
  Card,
  SimpleGrid,
  Group,
  Button,
  ThemeIcon,
  Timeline,
  TextInput,
  Select,
  Textarea,
  Box,
  Alert,
} from '@mantine/core';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  IconSchool,
  IconPlaneDeparture,
  IconFileText,
  IconCheck,
  IconCurrencyDollar,
  IconShieldCheck,
  IconBriefcase,
  IconHeartHandshake,
} from '@tabler/icons-react';
import { SITE_CONFIG } from '../config/site';

export const Route = createFileRoute('/study-in-japan')({
  component: StudyInJapanPage,
});

const StudyEnquirySchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(8, 'Phone number required'),
  highestEducation: z.string().min(1, 'Select qualification'),
  currentJapaneseLevel: z.string().min(1, 'Select Japanese level'),
  targetIntake: z.string().min(1, 'Select target intake'),
  preferredCity: z.string().optional(),
  message: z.string().optional(),
});

type StudyEnquiryValues = z.infer<typeof StudyEnquirySchema>;

function StudyInJapanPage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<StudyEnquiryValues>({
    resolver: zodResolver(StudyEnquirySchema),
    defaultValues: {
      highestEducation: 'Graduation / Bachelor',
      currentJapaneseLevel: 'N5 (Passed or Studying)',
      targetIntake: 'April Intake',
    }
  });

  const onSubmit = (values: StudyEnquiryValues) => {
    setSubmitted(true);
  };

  return (
    <Box py={50}>
      <Container size="xl">
        {/* Header */}
        <Stack align="center" ta="center" gap="xs" mb={45} maw={860} mx="auto">
          <Badge variant="filled" color="japaneseRed" size="md">
            STUDY & LIVE IN JAPAN
          </Badge>
          <Title order={1} c="deepNavy.8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Study in Japan Support & Visa Guidance
          </Title>
          <Text size="lg" c="gray.7">
            Turn your dream of studying in Tokyo, Osaka, Kyoto, or Fukuoka into reality. JLJ Institute guides you through school selection, document preparation, Certificate of Eligibility (COE), and Japanese student visa processing.
          </Text>
        </Stack>

        {/* Benefits Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mb={50}>
          <Card padding="lg" radius="md" withBorder className="interactive-card">
            <ThemeIcon size={44} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconCurrencyDollar size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              Part-Time Work Permitted
            </Title>
            <Text size="sm" c="gray.7">
              Students in Japan can work up to <strong>28 hours per week</strong> during semesters and 40 hours during vacations to cover living expenses.
            </Text>
          </Card>

          <Card padding="lg" radius="md" withBorder className="interactive-card">
            <ThemeIcon size={44} radius="md" color="deepNavy" variant="light" mb="md">
              <IconSchool size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              World-Class Education
            </Title>
            <Text size="sm" c="gray.7">
              Top global rankings, advanced robotics, engineering, design, and high safety standards in clean, modern cities.
            </Text>
          </Card>

          <Card padding="lg" radius="md" withBorder className="interactive-card">
            <ThemeIcon size={44} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconBriefcase size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              Direct Post-Study Jobs
            </Title>
            <Text size="sm" c="gray.7">
              Huge talent demand in Japan. Convert your student visa directly into a full-time Japanese Engineer or Specialist work visa upon course completion.
            </Text>
          </Card>

          <Card padding="lg" radius="md" withBorder className="interactive-card">
            <ThemeIcon size={44} radius="md" color="deepNavy" variant="light" mb="md">
              <IconShieldCheck size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              99% COE Visa Success
            </Title>
            <Text size="sm" c="gray.7">
              Thorough documentation, bank statement guidance, and sponsor verification according to Tokyo Immigration standards.
            </Text>
          </Card>
        </SimpleGrid>

        {/* Step-by-Step Visa Process */}
        <Card withBorder padding="xl" radius="md" mb={50} style={{ borderColor: '#E8E2D9' }}>
          <Title order={2} c="deepNavy.8" mb="xs">
            5-Step Journey: From India to Japan
          </Title>
          <Text size="sm" c="dimmed" mb="xl">
            Japanese language school intakes happen four times a year: <strong>April (2 years), July (1.9 years), October (1.5 years), and January (1.3 years)</strong>.
          </Text>

          <Timeline active={4} bulletSize={28} lineWidth={2} color="japaneseRed">
            <Timeline.Item title={<Text fw={700} size="sm">Step 1: Consultation & School Selection (5-6 months before intake)</Text>}>
              <Text size="sm" c="gray.7">
                Assess your academic background, target city (Tokyo, Osaka, Nagoya, Fukuoka), tuition budget, and complete initial application forms.
              </Text>
            </Timeline.Item>

            <Timeline.Item title={<Text fw={700} size="sm">Step 2: Document Compilation & Verification (4 months before intake)</Text>}>
              <Text size="sm" c="gray.7">
                Gather 10th/12th/Graduation transcripts, 150 hours Japanese language certificate or JLPT N5/N4 mark sheet, sponsor income proof, and bank balance certificate.
              </Text>
            </Timeline.Item>

            <Timeline.Item title={<Text fw={700} size="sm">Step 3: COE (Certificate of Eligibility) Processing (2-3 months before intake)</Text>}>
              <Text size="sm" c="gray.7">
                The Japanese language school submits your complete file to the Japanese Regional Immigration Bureau for legal eligibility clearance.
              </Text>
            </Timeline.Item>

            <Timeline.Item title={<Text fw={700} size="sm">Step 4: COE Approval & Embassy Visa Stamping (1 month before intake)</Text>}>
              <Text size="sm" c="gray.7">
                Immigration issues your COE. You remit the official school tuition fee, submit your passport to the Japanese Embassy/VFS, and receive your Student Visa stamp.
              </Text>
            </Timeline.Item>

            <Timeline.Item title={<Text fw={700} size="sm">Step 5: Pre-Departure Orientation, Accommodation & Departure</Text>}>
              <Text size="sm" c="gray.7">
                JLJ Institute arranges your student dorm/sharehouse booking, flight ticket advice, Tokyo airport pickup, and briefing on Japanese laws & etiquette.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>

        {/* Study in Japan Consultation Form */}
        <Card withBorder padding="xl" radius="md" style={{ borderColor: '#E8E2D9' }}>
          <Title order={2} c="deepNavy.8" mb="xs">
            Apply for Free Study in Japan Consultation
          </Title>
          <Text size="sm" c="dimmed" mb="lg">
            Speak directly with our senior Japan study advisor. We will review your profile and explain upcoming intake deadlines.
          </Text>

          {submitted ? (
            <Alert icon={<IconCheck size={20} />} title="Consultation Request Received" color="teal">
              Thank you! Our Japan admissions counselor will reach out to you within 24 hours with partner school brochures, cost estimations, and intake timelines.
            </Alert>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                <TextInput
                  label="Full Name"
                  placeholder="e.g. Aman Verma"
                  withAsterisk
                  {...register('fullName')}
                  error={errors.fullName?.message}
                />
                <TextInput
                  label="Email Address"
                  placeholder="aman@example.com"
                  withAsterisk
                  {...register('email')}
                  error={errors.email?.message}
                />
                <TextInput
                  label="Phone Number / WhatsApp"
                  placeholder="+91 98765 43210"
                  withAsterisk
                  {...register('phone')}
                  error={errors.phone?.message}
                />
                <Select
                  label="Highest Completed Qualification"
                  data={[
                    { value: '12th Standard / High School', label: '12th Standard / Senior Secondary' },
                    { value: 'Graduation / Bachelor', label: 'Graduation (B.Tech / BCA / BA / B.Sc / B.Com)' },
                    { value: 'Post Graduation / Master', label: 'Post Graduation (MCA / M.Tech / MBA / MA)' },
                    { value: 'Diploma (Polytechnic / ITI)', label: 'Diploma / Technical Certificate' },
                  ]}
                  defaultValue="Graduation / Bachelor"
                  onChange={(val) => setValue('highestEducation', val || 'Graduation / Bachelor')}
                />
                <Select
                  label="Current Japanese Knowledge"
                  data={[
                    { value: 'Beginner / Zero Knowledge', label: 'Complete Beginner (Starting Now)' },
                    { value: 'JLPT N5 Passed / Studying', label: 'JLPT N5 Passed / Currently Studying' },
                    { value: 'JLPT N4 Passed / Studying', label: 'JLPT N4 Passed / Currently Studying' },
                    { value: 'JLPT N3 or Higher', label: 'JLPT N3 or Higher' },
                  ]}
                  defaultValue="JLPT N5 Passed / Studying"
                  onChange={(val) => setValue('currentJapaneseLevel', val || 'JLPT N5 Passed / Studying')}
                />
                <Select
                  label="Preferred Japan Intake"
                  data={[
                    { value: 'April Intake (Major Intake)', label: 'April Intake (2 Years Course)' },
                    { value: 'July Intake', label: 'July Intake (1 Year 9 Months)' },
                    { value: 'October Intake (Autumn)', label: 'October Intake (1.5 Years Course)' },
                    { value: 'January Intake', label: 'January Intake (1.3 Years Course)' },
                  ]}
                  defaultValue="April Intake (Major Intake)"
                  onChange={(val) => setValue('targetIntake', val || 'April Intake (Major Intake)')}
                />
              </SimpleGrid>

              <Textarea
                label="Target City or Goals in Japan (Optional)"
                placeholder="e.g. Interested in Tokyo or Osaka language schools, want to find IT jobs after course..."
                rows={3}
                mt="md"
                {...register('message')}
              />

              <Button type="submit" color="japaneseRed" size="md" mt="lg">
                Submit Japan Study Application
              </Button>
            </form>
          )}
        </Card>
      </Container>
    </Box>
  );
}
