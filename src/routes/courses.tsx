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
  Tabs,
  ThemeIcon,
  List,
  Modal,
  TextInput,
  Select,
  Textarea,
  Box,
  Divider,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  IconBook,
  IconClock,
  IconCalendar,
  IconDeviceLaptop,
  IconCheck,
  IconCertificate,
  IconArrowRight,
  IconLanguage,
  IconBuilding,
} from '@tabler/icons-react';
import { JapaneseMotif } from '../components/common/JapaneseMotif';
import { SITE_CONFIG } from '../config/site';

export const Route = createFileRoute('/courses')({
  component: CoursesPage,
});

interface CourseItem {
  id: string;
  level: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  category: 'beginner' | 'intermediate' | 'advance' | 'conversation';
  duration: string;
  hours: string;
  schedule: string;
  mode: string;
  description: string;
  highlights: string[];
  careerScope: string;
}

const COURSES_DATA: CourseItem[] = [
  {
    id: 'n5',
    level: 'JLPT N5',
    badgeColor: 'gray',
    title: 'Japanese Language Course N5 (Beginner Level)',
    subtitle: 'Foundation course for complete beginners starting Japanese from scratch',
    category: 'beginner',
    duration: '3 to 4 Months',
    hours: '120+ Hours',
    schedule: 'Weekday & Weekend Batches Available',
    mode: 'Classroom (Delhi NCR) & Live Online',
    description: 'Learn Hiragana, Katakana, basic 100+ Kanji, fundamental vocabulary, sentence structures, daily greetings, and essential conversational Japanese.',
    highlights: [
      'Master Hiragana & Katakana writing & reading',
      'Learn 100+ Kanji & 800+ essential vocabulary words',
      'Basic grammar particles, tenses, and polite forms (Desu/Masu)',
      'Everyday conversation drills, listening exercises & JLPT N5 mock tests'
    ],
    careerScope: 'Eligible for student visa to Japan language schools & entry-level administrative bilingual roles.'
  },
  {
    id: 'n4',
    level: 'JLPT N4',
    badgeColor: 'teal',
    title: 'Japanese Language Course N4 (Elementary Level)',
    subtitle: 'Build on your N5 foundation and master daily workplace communication',
    category: 'beginner',
    duration: '3 to 4 Months',
    hours: '140+ Hours',
    schedule: 'Weekday & Weekend Batches Available',
    mode: 'Classroom (Delhi NCR) & Live Online',
    description: 'Advance beyond the basics to comprehend passages on familiar daily topics, complex verbs conjugations, 300+ Kanji, and practical workplace interactions.',
    highlights: [
      '300+ Kanji and 1,500+ vocabulary expansion',
      'Complex verb conjugations (Te-form, Potential, Conditional, Passive)',
      'Workplace and conversational listening audio drills',
      'Comprehensive JLPT N4 exam preparation with previous years papers'
    ],
    careerScope: 'Meets the mandatory language threshold for TITP / SSW worker visas in Japan and associate coordinator jobs.'
  },
  {
    id: 'n3',
    level: 'JLPT N3',
    badgeColor: 'indigo',
    title: 'Japanese Language Course N3 (Intermediate Bridge Level)',
    subtitle: 'The critical gateway level for corporate Japanese jobs and engineering roles',
    category: 'intermediate',
    duration: '4 to 5 Months',
    hours: '180+ Hours',
    schedule: 'Morning, Evening & Weekend Batches',
    mode: 'Classroom (Delhi NCR) & Live Online',
    description: 'Bridge the gap between everyday Japanese and business proficiency. Comprehend newspapers, technical manuals, and engage in natural conversations at near-normal speed.',
    highlights: [
      '650+ Kanji and 3,500+ vocabulary terms',
      'Intermediate grammar nuances, business polite Keigo introduction',
      'Reading comprehension of business articles and technical specifications',
      'Interactive speech, group discussions, and JLPT N3 simulated exams'
    ],
    careerScope: 'Direct eligibility for bilingual software engineers, supply chain coordinators, and corporate technical support.'
  },
  {
    id: 'n2',
    level: 'JLPT N2',
    badgeColor: 'japaneseRed',
    title: 'Japanese Language Course N2 (Advanced Business Level)',
    subtitle: 'High-level business fluency for MNCs, project management, and translation',
    category: 'advance',
    duration: '5 to 6 Months',
    hours: '220+ Hours',
    schedule: 'Flexible Batches for Working Professionals',
    mode: 'Classroom (Delhi NCR) & Live Online',
    description: 'Achieve corporate fluency. Understand complex newspaper editorials, corporate business reports, conference discussions, and sophisticated business communication.',
    highlights: [
      '1,000+ Kanji and 6,000+ advanced business terms',
      'Mastery of Business Keigo (Sonkeigo, Kenjougo, Teineigo)',
      'Technical and business document translation practice',
      'Intensive JLPT N2 mock testing and live interview coaching'
    ],
    careerScope: 'High-paying career positions: Bilingual IT Project Manager, Technical Translator, Interpreter, and Corporate Lead.'
  },
  {
    id: 'n1',
    level: 'JLPT N1',
    badgeColor: 'dark',
    title: 'Japanese Language Course N1 (Expert / Master Level)',
    subtitle: 'Near-native mastery for simultaneous interpreters and executive leaders',
    category: 'advance',
    duration: '6 Months',
    hours: '250+ Hours',
    schedule: 'Specialized Weekend & Evening Modules',
    mode: 'Live Online & Hybrid Interactive',
    description: 'Mastery of nuanced expressions, abstract philosophical and legal texts, technical symposiums, and simultaneous corporate interpretation.',
    highlights: [
      '2,000+ Kanji and 10,000+ high-level vocabulary',
      'Simultaneous & consecutive interpretation techniques',
      'Legal contracts, patents, and JIS manufacturing standards translation',
      'Executive-level negotiation and presentation skills'
    ],
    careerScope: 'Top tier roles: Simultaneous Conference Interpreter, Senior Director of Japanese Operations, Principal Consultant.'
  },
  {
    id: 'kaiwa',
    level: 'Kaiwa / Speaking',
    badgeColor: 'blue',
    title: 'Japanese Business Conversation & Kaiwa Classes',
    subtitle: 'Practical oral fluency, phone etiquette, and interview simulation',
    category: 'conversation',
    duration: '2 Months',
    hours: '60 Hours',
    schedule: 'Interactive Small Group Batches',
    mode: 'Classroom & Live Online',
    description: 'Tailored for candidates who already have grammar knowledge (N4/N3) but lack spoken confidence. Focuses on accent, natural phrasing, client meeting manners, and interview role plays.',
    highlights: [
      '100% spoken interaction in Japanese during class',
      'Business phone call drills, client greeting and Meishi exchange manners',
      'Mock interview simulations with native/experienced Japanese evaluators',
      'Hou-Ren-So (Reporting, Communicating, Consulting) workplace practice'
    ],
    careerScope: 'Drastically improves interview clearance rates for Japanese MNCs and Tokyo visa sponsors.'
  }
];

const EnquirySchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(8, 'Phone number required'),
  courseLevel: z.string().min(1, 'Select a course'),
  preferredMode: z.string().min(1, 'Select class mode'),
  message: z.string().optional(),
});

type EnquiryValues = z.infer<typeof EnquirySchema>;

function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openedModal, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [selectedCourseForEnquiry, setSelectedCourseForEnquiry] = useState<CourseItem | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<EnquiryValues>({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      courseLevel: 'JLPT N5',
      preferredMode: 'Classroom (Delhi NCR)',
    }
  });

  const handleEnquireClick = (course: CourseItem) => {
    setSelectedCourseForEnquiry(course);
    setValue('courseLevel', course.level);
    setIsSubmitted(false);
    openModal();
  };

  const onEnquirySubmit = (values: EnquiryValues) => {
    setIsSubmitted(true);
    setTimeout(() => {
      reset();
    }, 2000);
  };

  const filteredCourses = selectedCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === selectedCategory);

  return (
    <Box py={50}>
      <Container size="xl">
        {/* Page Header */}
        <Stack align="center" ta="center" gap="xs" mb={40} maw={840} mx="auto">
          <Badge variant="filled" color="japaneseRed" size="md">
            STRUCTURED JAPANESE CURRICULUM
          </Badge>
          <Title order={1} c="deepNavy.8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Japanese Language Courses
          </Title>
          <Text size="lg" c="gray.7">
            From absolute beginner (N5) to advanced business fluency (N1), our certified Japanese courses combine language proficiency, cultural etiquette, and direct career placement assistance.
          </Text>
        </Stack>

        {/* Category Tabs */}
        <Tabs
          value={selectedCategory}
          onChange={(val) => setSelectedCategory(val || 'all')}
          color="japaneseRed"
          radius="md"
          mb={40}
        >
          <Tabs.List justify="center">
            <Tabs.Tab value="all">All Courses</Tabs.Tab>
            <Tabs.Tab value="beginner">Beginner (N5 & N4)</Tabs.Tab>
            <Tabs.Tab value="intermediate">Intermediate (N3)</Tabs.Tab>
            <Tabs.Tab value="advance">Advanced (N2 & N1)</Tabs.Tab>
            <Tabs.Tab value="conversation">Business Kaiwa / Spoken</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        {/* Course Cards Grid */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              withBorder
              padding="xl"
              radius="md"
              className="interactive-card"
              style={{
                borderColor: '#E8E2D9',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack gap="sm">
                <Group justify="space-between" align="center">
                  <Badge color={course.badgeColor} size="lg" radius="sm">
                    {course.level}
                  </Badge>
                  <Group gap="xs">
                    <IconClock size={16} color="#616B77" />
                    <Text size="xs" fw={600} c="dimmed">
                      {course.duration} ({course.hours})
                    </Text>
                  </Group>
                </Group>

                <Title order={3} c="deepNavy.8" mt="xs">
                  {course.title}
                </Title>
                <Text size="sm" fw={500} c="japaneseRed.6">
                  {course.subtitle}
                </Text>

                <Text size="sm" c="gray.7" mt="xs">
                  {course.description}
                </Text>

                <Divider my="xs" color="#F1ECE5" />

                <Text fw={700} size="xs" c="deepNavy.8" style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  What You Will Learn:
                </Text>
                <List
                  spacing="xs"
                  size="sm"
                  icon={
                    <ThemeIcon color="japaneseRed" size={18} radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  {course.highlights.map((point, idx) => (
                    <List.Item key={idx} c="gray.8">
                      {point}
                    </List.Item>
                  ))}
                </List>

                <Box p="xs" style={{ backgroundColor: '#F8F2EB', borderRadius: 6 }} mt="sm">
                  <Text size="xs" fw={700} c="deepNavy.8">
                    Career & Visa Scope:
                  </Text>
                  <Text size="xs" c="gray.7">
                    {course.careerScope}
                  </Text>
                </Box>
              </Stack>

              <Group justify="space-between" align="center" mt="xl" pt="md" style={{ borderTop: '1px solid #E8E2D9' }}>
                <Box>
                  <Text size="xs" c="dimmed">Mode:</Text>
                  <Text size="xs" fw={600} c="deepNavy.8">{course.mode}</Text>
                </Box>
                <Button
                  color="japaneseRed"
                  size="sm"
                  onClick={() => handleEnquireClick(course)}
                >
                  Enquire for Next Batch
                </Button>
              </Group>
            </Card>
          ))}
        </SimpleGrid>

        {/* Why Learn with JLJ Institute */}
        <Card withBorder padding="xl" radius="md" mt={60} style={{ backgroundColor: '#202C38', color: '#FFF' }}>
          <Title order={3} c="#FFF" ta="center" mb="lg">
            Why Choose JLJ Institute for Japanese Language?
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            <Box ta="center">
              <ThemeIcon size={48} radius="md" color="japaneseRed" variant="filled" mx="auto" mb="sm">
                <IconCertificate size={26} />
              </ThemeIcon>
              <Text fw={700} size="sm" c="#FFF">
                Certified Expert Trainers
              </Text>
              <Text size="xs" c="gray.4" mt={4}>
                Learn with JLPT N1/N2 certified instructors and native Japanese mentors.
              </Text>
            </Box>

            <Box ta="center">
              <ThemeIcon size={48} radius="md" color="japaneseRed" variant="filled" mx="auto" mb="sm">
                <IconDeviceLaptop size={26} />
              </ThemeIcon>
              <Text fw={700} size="sm" c="#FFF">
                Classroom & Live Online
              </Text>
              <Text size="xs" c="gray.4" mt={4}>
                Interactive live batches with lesson recordings, digital notes, and study material.
              </Text>
            </Box>

            <Box ta="center">
              <ThemeIcon size={48} radius="md" color="japaneseRed" variant="filled" mx="auto" mb="sm">
                <IconBook size={26} />
              </ThemeIcon>
              <Text fw={700} size="sm" c="#FFF">
                JLPT Mock Test Series
              </Text>
              <Text size="xs" c="gray.4" mt={4}>
                Regular sectional tests, kanji quizzes, and full-length exam simulations.
              </Text>
            </Box>

            <Box ta="center">
              <ThemeIcon size={48} radius="md" color="japaneseRed" variant="filled" mx="auto" mb="sm">
                <IconBuilding size={26} />
              </ThemeIcon>
              <Text fw={700} size="sm" c="#FFF">
                100% Placement Support
              </Text>
              <Text size="xs" c="gray.4" mt={4}>
                Direct hiring connections with Japanese MNCs in India and language schools in Tokyo.
              </Text>
            </Box>
          </SimpleGrid>
        </Card>
      </Container>

      {/* Enquiry Modal */}
      <Modal
        opened={openedModal}
        onClose={closeModal}
        title={<Text fw={700} size="md" c="deepNavy.8">Course Admission Enquiry</Text>}
        centered
        radius="md"
      >
        {isSubmitted ? (
          <Stack align="center" ta="center" py="xl">
            <ThemeIcon color="teal" size={54} radius="xl">
              <IconCheck size={32} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8">
              Enquiry Received!
            </Title>
            <Text size="sm" c="gray.7">
              Our course counselor will contact you within 24 hours with syllabus details and batch timings for <strong>{selectedCourseForEnquiry?.level}</strong>.
            </Text>
            <Button color="japaneseRed" onClick={closeModal} mt="sm">
              Close
            </Button>
          </Stack>
        ) : (
          <form onSubmit={handleSubmit(onEnquirySubmit)}>
            <Stack gap="sm">
              <TextInput
                label="Full Name"
                placeholder="Your Name"
                withAsterisk
                {...register('fullName')}
                error={errors.fullName?.message}
              />
              <TextInput
                label="Email Address"
                placeholder="name@example.com"
                withAsterisk
                {...register('email')}
                error={errors.email?.message}
              />
              <TextInput
                label="Phone / WhatsApp Number"
                placeholder="+91 98765 43210"
                withAsterisk
                {...register('phone')}
                error={errors.phone?.message}
              />
              <TextInput
                label="Selected Course"
                value={selectedCourseForEnquiry?.title || 'Japanese Language Course'}
                readOnly
              />
              <Select
                label="Preferred Learning Mode"
                data={[
                  { value: 'Classroom (Delhi NCR)', label: 'Classroom Batches (Delhi NCR)' },
                  { value: 'Online Live Classes', label: 'Online Live Interactive Classes' },
                  { value: 'Weekend Batch Only', label: 'Weekend Batch (Working Professionals)' },
                ]}
                defaultValue="Classroom (Delhi NCR)"
                onChange={(val) => setValue('preferredMode', val || 'Classroom (Delhi NCR)')}
              />
              <Textarea
                label="Any Questions or Prior Japanese Experience?"
                placeholder="Tell us if you have studied Hiragana or have any target JLPT date..."
                rows={3}
                {...register('message')}
              />
              <Button type="submit" color="japaneseRed" fullWidth mt="md">
                Submit Course Enquiry
              </Button>
            </Stack>
          </form>
        )}
      </Modal>
    </Box>
  );
}
