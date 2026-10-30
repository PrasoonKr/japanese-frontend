import React, { useState } from 'react';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  SimpleGrid,
  Card,
  ThemeIcon,
  Badge,
  Box,
  TextInput,
  Select,
  Paper,
  Tabs,
  List,
} from '@mantine/core';
import {
  IconSearch,
  IconArrowRight,
  IconLanguage,
  IconBriefcase,
  IconCertificate,
  IconShieldCheck,
  IconSchool,
  IconPlaneDeparture,
  IconHome,
  IconPhoto,
  IconCheck,
  IconClock,
  IconMapPin,
} from '@tabler/icons-react';
import { useFeaturedJobs } from '../hooks/useJobs';
import { JobCard } from '../components/jobs/JobCard';
import { JapaneseMotif } from '../components/common/JapaneseMotif';
import { SITE_CONFIG } from '../config/site';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const [heroSearch, setHeroSearch] = useState('');
  const [heroJlpt, setHeroJlpt] = useState<string>('Any');
  const { data: featuredJobs = [], isLoading } = useFeaturedJobs();

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({
      to: '/jobs',
      search: {
        query: heroSearch || undefined,
        jlpt: heroJlpt !== 'Any' ? (heroJlpt as any) : undefined,
      },
    });
  };

  return (
    <Box>
      {/* 1. HERO SECTION */}
      <Box
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E8E2D9',
          paddingTop: 65,
          paddingBottom: 75,
        }}
      >
        <JapaneseMotif opacity={0.035} pattern="asanoha" />

        <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
          <Stack align="center" ta="center" gap="lg" maw={920} mx="auto">
            {/* Stamp Badge */}
            <Group gap="xs" justify="center">
              <Badge
                variant="filled"
                color="japaneseRed"
                size="md"
                radius="sm"
                style={{ letterSpacing: '1px', fontWeight: 800 }}
              >
                JLJ INSTITUTE • 日本語・就職
              </Badge>
              <Text size="xs" fw={700} c="deepNavy.8" style={{ letterSpacing: '0.5px' }}>
                JAPANESE LANGUAGE JOBS SERVICES
              </Text>
            </Group>

            {/* Headline */}
            <Title
              order={1}
              style={{
                fontSize: 'clamp(2.1rem, 4.8vw, 3.7rem)',
                fontWeight: 800,
                color: '#202C38',
                lineHeight: 1.18,
                letterSpacing: '-1px',
              }}
            >
              Master Japanese Language.{' '}
              <span style={{ color: '#B74736', display: 'inline-block' }}>
                Build Your Global Career.
              </span>
            </Title>

            {/* Subtext */}
            <Text size="lg" c="gray.7" maw={760} style={{ lineHeight: 1.6 }}>
              Comprehensive Japanese language training from <strong>JLPT N5 to N1</strong>, Study in Japan visa guidance, student accommodation assistance, and direct bilingual placements in Japanese MNCs.
            </Text>

            {/* Quick Search for Jobs / Courses */}
            <Paper
              component="form"
              onSubmit={handleHeroSearchSubmit}
              withBorder
              shadow="md"
              radius="lg"
              p="md"
              mt="xs"
              w="100%"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E0D9CE',
                boxShadow: '0 20px 35px -10px rgba(32, 44, 56, 0.08)',
              }}
            >
              <Group gap="sm" wrap="nowrap" style={{ width: '100%' }}>
                <TextInput
                  placeholder="Search jobs, translation roles, or skills (e.g. Bilingual Engineer, Translator)..."
                  leftSection={<IconSearch size={18} color="#B74736" />}
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.currentTarget.value)}
                  style={{ flex: 1 }}
                  size="md"
                />
                <Select
                  placeholder="JLPT Level"
                  data={[
                    { value: 'Any', label: 'All Levels' },
                    { value: 'N1', label: 'JLPT N1 (Native Fluency)' },
                    { value: 'N2', label: 'JLPT N2 (Business)' },
                    { value: 'N3', label: 'JLPT N3 (Conversational)' },
                    { value: 'N4', label: 'JLPT N4 (Basic Workplace)' },
                    { value: 'N5', label: 'JLPT N5 (Beginner)' },
                  ]}
                  value={heroJlpt}
                  onChange={(val) => setHeroJlpt(val || 'Any')}
                  size="md"
                  w={190}
                  visibleFrom="sm"
                />
                <Button
                  type="submit"
                  size="md"
                  color="japaneseRed"
                  rightSection={<IconArrowRight size={16} />}
                >
                  Search Jobs
                </Button>
              </Group>
            </Paper>

            {/* Core Action Links */}
            <Group gap="md" mt="xs" wrap="wrap" justify="center">
              <Link to="/courses" style={{ textDecoration: 'none' }}>
                <Button variant="filled" color="deepNavy" size="sm">
                  Explore Courses (N5–N1)
                </Button>
              </Link>
              <Link to="/jobs" style={{ textDecoration: 'none' }}>
                <Button variant="outline" color="japaneseRed" size="sm">
                  Find Japanese Language Jobs
                </Button>
              </Link>
              <Link to="/study-in-japan" style={{ textDecoration: 'none' }}>
                <Button variant="light" color="japaneseRed" size="sm">
                  Study in Japan Support
                </Button>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="subtle" color="deepNavy" size="sm">
                  Admission Enquiry
                </Button>
              </Link>
            </Group>
          </Stack>

          {/* Key Metric Highlights */}
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" mt={55} pt={28} style={{ borderTop: '1px solid #E8E2D9' }}>
            <Box ta="center">
              <Text fw={800} size="xl" c="deepNavy.8">
                N5 to N1
              </Text>
              <Text size="xs" c="dimmed">
                Complete Level-Based Batches
              </Text>
            </Box>
            <Box ta="center">
              <Text fw={800} size="xl" c="japaneseRed.6">
                Online & NCR
              </Text>
              <Text size="xs" c="dimmed">
                Classroom & Live Zoom Batches
              </Text>
            </Box>
            <Box ta="center">
              <Text fw={800} size="xl" c="deepNavy.8">
                Study in Japan
              </Text>
              <Text size="xs" c="dimmed">
                Language Schools & Visa (COE)
              </Text>
            </Box>
            <Box ta="center">
              <Text fw={800} size="xl" c="japaneseRed.6">
                100% Placement
              </Text>
              <Text size="xs" c="dimmed">
                Direct Japanese Corporate Hiring
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 2. CORE SERVICES PILLARS (Courses, JLPT, Jobs, Study in Japan, Accommodation, Gallery) */}
      <Box py={75} className="bg-ivory-pattern">
        <Container size="xl">
          <Stack align="center" ta="center" gap="xs" mb={45}>
            <Badge variant="outline" color="japaneseRed" size="sm">
              COMPLETE JAPANESE ECOSYSTEM
            </Badge>
            <Title order={2} c="deepNavy.8">
              Everything You Need for a Career in Japan & Japanese MNCs
            </Title>
            <Text c="gray.7" maw={680} size="md">
              From classroom language lessons to JLPT certification, visa documentation, student housing, and high-paying jobs.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {/* Pillar 1: Courses */}
            <Card padding="xl" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="japaneseRed" variant="light" mb="md">
                <IconSchool size={26} />
              </ThemeIcon>
              <Title order={3} c="deepNavy.8" mb="xs">
                Japanese Language Courses
              </Title>
              <Text size="sm" c="gray.7" mb="md">
                Structured level-based training (N5, N4, N3, N2, N1) with weekday and weekend batches, native speakers, and audio drills.
              </Text>
              <Link to="/courses" style={{ textDecoration: 'none' }}>
                <Button variant="subtle" color="japaneseRed" size="xs" rightSection={<IconArrowRight size={14} />}>
                  View All Batches & Syllabus
                </Button>
              </Link>
            </Card>

            {/* Pillar 2: JLPT */}
            <Card padding="xl" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="deepNavy" variant="light" mb="md">
                <IconCertificate size={26} />
              </ThemeIcon>
              <Title order={3} c="deepNavy.8" mb="xs">
                JLPT Preparation & Mock Tests
              </Title>
              <Text size="sm" c="gray.7" mb="md">
                Prepare for the July and December exam cycles with simulated mock tests, past paper workshops, and listening drills.
              </Text>
              <Link to="/jlpt" style={{ textDecoration: 'none' }}>
                <Button variant="subtle" color="deepNavy" size="xs" rightSection={<IconArrowRight size={14} />}>
                  JLPT Exam Guide
                </Button>
              </Link>
            </Card>

            {/* Pillar 3: Jobs */}
            <Card padding="xl" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="japaneseRed" variant="light" mb="md">
                <IconBriefcase size={26} />
              </ThemeIcon>
              <Title order={3} c="deepNavy.8" mb="xs">
                Japanese Language Jobs
              </Title>
              <Text size="sm" c="gray.7" mb="md">
                Direct vacancies for bilingual software engineers, translators, interpreters, project managers, and coordinators in India & Tokyo.
              </Text>
              <Link to="/jobs" style={{ textDecoration: 'none' }}>
                <Button variant="subtle" color="japaneseRed" size="xs" rightSection={<IconArrowRight size={14} />}>
                  Browse Job Openings
                </Button>
              </Link>
            </Card>

            {/* Pillar 4: Study in Japan */}
            <Card padding="xl" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="deepNavy" variant="light" mb="md">
                <IconPlaneDeparture size={26} />
              </ThemeIcon>
              <Title order={3} c="deepNavy.8" mb="xs">
                Study in Japan & Student Visas
              </Title>
              <Text size="sm" c="gray.7" mb="md">
                End-to-end guidance for Japanese language schools in Tokyo, Osaka, and Kyoto. Complete COE filing, interviews, and visa stamping.
              </Text>
              <Link to="/study-in-japan" style={{ textDecoration: 'none' }}>
                <Button variant="subtle" color="deepNavy" size="xs" rightSection={<IconArrowRight size={14} />}>
                  Study in Japan Pathway
                </Button>
              </Link>
            </Card>

            {/* Pillar 5: Accommodation */}
            <Card padding="xl" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="japaneseRed" variant="light" mb="md">
                <IconHome size={26} />
              </ThemeIcon>
              <Title order={3} c="deepNavy.8" mb="xs">
                Accommodation Support
              </Title>
              <Text size="sm" c="gray.7" mb="md">
                Pre-arrival housing reservation: student dormitories, share houses, and apartments in Japan, plus PG hostel guidance in Delhi NCR.
              </Text>
              <Link to="/accommodation" style={{ textDecoration: 'none' }}>
                <Button variant="subtle" color="japaneseRed" size="xs" rightSection={<IconArrowRight size={14} />}>
                  Living Support Details
                </Button>
              </Link>
            </Card>

            {/* Pillar 6: Gallery */}
            <Card padding="xl" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="deepNavy" variant="light" mb="md">
                <IconPhoto size={26} />
              </ThemeIcon>
              <Title order={3} c="deepNavy.8" mb="xs">
                Institute Life & Cultural Gallery
              </Title>
              <Text size="sm" c="gray.7" mb="md">
                Explore photos of our classroom interactions, Yukata & origami workshops, calligraphy practice, and placement celebrations.
              </Text>
              <Link to="/gallery" style={{ textDecoration: 'none' }}>
                <Button variant="subtle" color="deepNavy" size="xs" rightSection={<IconArrowRight size={14} />}>
                  View Institute Gallery
                </Button>
              </Link>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 3. FEATURED JOB VACANCIES SECTION */}
      <Box py={75} style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E2D9' }}>
        <Container size="xl">
          <Group justify="space-between" align="flex-end" mb={35}>
            <Stack gap="xs">
              <Badge variant="outline" color="japaneseRed" size="sm">
                CURRENT OPPORTUNITIES
              </Badge>
              <Title order={2} c="deepNavy.8">
                Featured Japanese Language Jobs
              </Title>
              <Text c="gray.7" size="sm">
                Explore handpicked bilingual vacancies across Delhi NCR, Bengaluru, Pune, and Tokyo.
              </Text>
            </Stack>
            <Link to="/jobs" style={{ textDecoration: 'none' }}>
              <Button
                variant="outline"
                color="japaneseRed"
                rightSection={<IconArrowRight size={16} />}
              >
                View All Jobs
              </Button>
            </Link>
          </Group>

          {isLoading ? (
            <Text c="dimmed">Loading featured jobs...</Text>
          ) : (
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </SimpleGrid>
          )}
        </Container>
      </Box>

      {/* 4. CALL TO ACTION BANNER */}
      <Box
        py={65}
        style={{
          backgroundColor: '#202C38',
          color: '#FFF',
          borderTop: '4px solid #B74736',
        }}
      >
        <Container size="lg" ta="center">
          <Badge color="japaneseRed" size="md" mb="sm">
            ADMISSIONS OPEN FOR NEXT INTAKE
          </Badge>
          <Title order={2} c="#FFF" mb="sm">
            Ready to Start Your Japanese Journey?
          </Title>
          <Text c="gray.4" size="lg" maw={640} mx="auto" mb="xl">
            Whether you want to learn Japanese for career opportunities, prepare for the JLPT, study in Japan, or find a bilingual job, JLJ Institute is here to guide you.
          </Text>
          <Group justify="center" gap="md">
            <Link to="/courses" style={{ textDecoration: 'none' }}>
              <Button size="md" color="japaneseRed" rightSection={<IconArrowRight size={16} />}>
                Explore Courses
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button size="md" variant="outline" color="gray.3">
                Book a Free Consultation
              </Button>
            </Link>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
