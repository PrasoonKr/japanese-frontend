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
} from '@mantine/core';
import {
  IconSearch,
  IconArrowRight,
  IconLanguage,
  IconBriefcase,
  IconBuildingSkyscraper,
  IconCertificate,
  IconShieldCheck,
  IconUsers,
  IconClock,
  IconFileText,
  IconCheck,
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
          paddingTop: 70,
          paddingBottom: 80,
        }}
      >
        <JapaneseMotif opacity={0.035} pattern="asanoha" />

        <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
          <Stack align="center" ta="center" gap="lg" maw={880} mx="auto">
            {/* Japanese Accent Stamp */}
            <Group gap="xs" justify="center">
              <Badge
                variant="filled"
                color="japaneseRed"
                size="md"
                radius="sm"
                style={{ letterSpacing: '1px', fontWeight: 700 }}
              >
                日印 キャリア架け橋
              </Badge>
              <Text size="xs" fw={700} c="deepNavy.8" style={{ letterSpacing: '0.5px' }}>
                JAPANESE TALENT & RECRUITMENT SOLUTIONS
              </Text>
            </Group>

            {/* Headline */}
            <Title
              order={1}
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 800,
                color: '#202C38',
                lineHeight: 1.15,
                letterSpacing: '-1px',
              }}
            >
              Your Japanese Skills.{' '}
              <span style={{ color: '#B74736', display: 'inline-block' }}>
                Your Global Career.
              </span>
            </Title>

            {/* Subtext */}
            <Text size="lg" c="gray.7" maw={720} style={{ lineHeight: 1.6 }}>
              Connecting JLPT-certified bilingual professionals, technical translators,
              interpreters, and software engineers with leading Japanese multinational
              corporations and cross-border enterprises.
            </Text>

            {/* Hero Quick Search Box */}
            <Paper
              component="form"
              onSubmit={handleHeroSearchSubmit}
              withBorder
              shadow="md"
              radius="lg"
              p="md"
              mt="md"
              w="100%"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E0D9CE',
                boxShadow: '0 20px 35px -10px rgba(32, 44, 56, 0.08)',
              }}
            >
              <Group gap="sm" wrap="nowrap" style={{ width: '100%' }}>
                <TextInput
                  placeholder="Job title, keyword, or skills (e.g. Bilingual PM, Translator)..."
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
                    { value: 'N1', label: 'JLPT N1 (Fluent)' },
                    { value: 'N2', label: 'JLPT N2 (Business)' },
                    { value: 'N3', label: 'JLPT N3 (Conversational)' },
                    { value: 'N4', label: 'JLPT N4 (Basic)' },
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

            {/* Secondary CTA buttons */}
            <Group gap="md" mt="xs">
              <Link to="/jobs" style={{ textDecoration: 'none' }}>
                <Button variant="outline" color="deepNavy" size="sm">
                  View All Openings
                </Button>
              </Link>
              <Link to="/employers" style={{ textDecoration: 'none' }}>
                <Button variant="light" color="japaneseRed" size="sm">
                  Looking to Hire Japanese Talent?
                </Button>
              </Link>
            </Group>
          </Stack>

          {/* Trust Highlights */}
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" mt={60} pt={30} style={{ borderTop: '1px solid #E8E2D9' }}>
            <Box ta="center">
              <Text fw={800} size="xl" c="deepNavy.8">
                N5 to N1
              </Text>
              <Text size="xs" c="dimmed">
                Every Proficiency Level Catered
              </Text>
            </Box>
            <Box ta="center">
              <Text fw={800} size="xl" c="japaneseRed.6">
                India & Japan
              </Text>
              <Text size="xs" c="dimmed">
                Delhi NCR, Bengaluru, Pune & Tokyo
              </Text>
            </Box>
            <Box ta="center">
              <Text fw={800} size="xl" c="deepNavy.8">
                100% Verified
              </Text>
              <Text size="xs" c="dimmed">
                Direct Corporate Requirements
              </Text>
            </Box>
            <Box ta="center">
              <Text fw={800} size="xl" c="japaneseRed.6">
                End-to-End
              </Text>
              <Text size="xs" c="dimmed">
                Screening, Etiquette & Visa Advice
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 2. VALUE PROPOSITIONS */}
      <Box py={80} className="bg-ivory-pattern">
        <Container size="xl">
          <Stack align="center" ta="center" gap="xs" mb={50}>
            <Badge variant="outline" color="japaneseRed" size="sm">
              WHY JAPANESE LANGUAGE TALENT
            </Badge>
            <Title order={2} c="deepNavy.8">
              Strategic Talent Bridge for Global Business
            </Title>
            <Text c="gray.7" maw={640} size="md">
              As Indo-Japanese bilateral trade and technology partnerships expand,
              bilingual professionals with cultural comprehension drive critical competitive advantage.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            <Card padding="lg" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="japaneseRed" variant="light" mb="md">
                <IconLanguage size={26} />
              </ThemeIcon>
              <Title order={4} c="deepNavy.8" mb="xs">
                JLPT-Validated Talent
              </Title>
              <Text size="sm" c="gray.7">
                Pre-screened candidates evaluated on grammar, workplace fluency, and technical translation proficiency.
              </Text>
            </Card>

            <Card padding="lg" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="deepNavy" variant="light" mb="md">
                <IconBuildingSkyscraper size={26} />
              </ThemeIcon>
              <Title order={4} c="deepNavy.8" mb="xs">
                Tier-1 Japanese MNCs
              </Title>
              <Text size="sm" c="gray.7">
                Direct access to automotive, electronics, software, and consulting leaders in Japan and across India.
              </Text>
            </Card>

            <Card padding="lg" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="japaneseRed" variant="light" mb="md">
                <IconCertificate size={26} />
              </ThemeIcon>
              <Title order={4} c="deepNavy.8" mb="xs">
                Cultural Etiquette Coaching
              </Title>
              <Text size="sm" c="gray.7">
                Preparation on Japanese business manners, Hou-Ren-So communication, and professional interview etiquette.
              </Text>
            </Card>

            <Card padding="lg" radius="md" withBorder className="interactive-card">
              <ThemeIcon size={48} radius="md" color="deepNavy" variant="light" mb="md">
                <IconShieldCheck size={26} />
              </ThemeIcon>
              <Title order={4} c="deepNavy.8" mb="xs">
                Transparent Recruitment
              </Title>
              <Text size="sm" c="gray.7">
                Zero candidate placement fees. Direct payroll positions with clear salary benchmarks and benefits.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 3. FEATURED JOBS SECTION */}
      <Box py={80} style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E2D9' }}>
        <Container size="xl">
          <Group justify="space-between" align="flex-end" mb={40}>
            <Stack gap="xs">
              <Badge variant="outline" color="japaneseRed" size="sm">
                CURRENT OPENINGS
              </Badge>
              <Title order={2} c="deepNavy.8">
                Featured Bilingual Opportunities
              </Title>
              <Text c="gray.7" size="sm">
                Explore handpicked roles across Delhi NCR, Bengaluru, Pune, and Tokyo.
              </Text>
            </Stack>
            <Link to="/jobs" style={{ textDecoration: 'none' }}>
              <Button
                variant="outline"
                color="japaneseRed"
                rightSection={<IconArrowRight size={16} />}
              >
                Browse All Jobs
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

      {/* 4. HOW IT WORKS (CANDIDATE & EMPLOYER PATHWAYS) */}
      <Box py={80} className="bg-ivory-pattern" style={{ borderTop: '1px solid #E8E2D9' }}>
        <Container size="xl">
          <Stack align="center" ta="center" gap="xs" mb={40}>
            <Badge variant="outline" color="deepNavy" size="sm">
              SEAMLESS PROCESS
            </Badge>
            <Title order={2} c="deepNavy.8">
              How the Platform Works
            </Title>
            <Text c="gray.7" maw={600} size="md">
              Whether you are an aspiring bilingual candidate or an enterprise hiring manager,
              our process is structured, transparent, and tailored.
            </Text>
          </Stack>

          <Tabs defaultValue="candidates" color="japaneseRed" radius="md">
            <Tabs.List justify="center" mb={40}>
              <Tabs.Tab value="candidates" leftSection={<IconBriefcase size={16} />}>
                For Job Seekers
              </Tabs.Tab>
              <Tabs.Tab value="employers" leftSection={<IconBuildingSkyscraper size={16} />}>
                For Employers & Recruiters
              </Tabs.Tab>
            </Tabs.List>

            {/* Candidate Journey */}
            <Tabs.Panel value="candidates">
              <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
                <Card padding="lg" radius="md" withBorder>
                  <Text fw={800} size="2rem" c="japaneseRed.6" mb="xs">
                    01
                  </Text>
                  <Title order={4} c="deepNavy.8" mb="xs">
                    Explore Opportunities
                  </Title>
                  <Text size="sm" c="gray.7">
                    Filter positions by JLPT requirement (N5–N1), domain, work mode, and target compensation.
                  </Text>
                </Card>

                <Card padding="lg" radius="md" withBorder>
                  <Text fw={800} size="2rem" c="japaneseRed.6" mb="xs">
                    02
                  </Text>
                  <Title order={4} c="deepNavy.8" mb="xs">
                    Submit Profile & CV
                  </Title>
                  <Text size="sm" c="gray.7">
                    Upload your resume and details. Our team screens for both technical capabilities and language fluency.
                  </Text>
                </Card>

                <Card padding="lg" radius="md" withBorder>
                  <Text fw={800} size="2rem" c="japaneseRed.6" mb="xs">
                    03
                  </Text>
                  <Title order={4} c="deepNavy.8" mb="xs">
                    Interview Preparation
                  </Title>
                  <Text size="sm" c="gray.7">
                    Receive 1-on-1 coaching on Japanese corporate culture, mock interview practice, and expectation alignment.
                  </Text>
                </Card>

                <Card padding="lg" radius="md" withBorder>
                  <Text fw={800} size="2rem" c="japaneseRed.6" mb="xs">
                    04
                  </Text>
                  <Title order={4} c="deepNavy.8" mb="xs">
                    Placement & Onboarding
                  </Title>
                  <Text size="sm" c="gray.7">
                    Secure your offer with verified terms, competitive benefits, and relocation or visa assistance where eligible.
                  </Text>
                </Card>
              </SimpleGrid>
            </Tabs.Panel>

            {/* Employer Journey */}
            <Tabs.Panel value="employers">
              <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
                <Card padding="lg" radius="md" withBorder>
                  <Text fw={800} size="2rem" c="deepNavy.7" mb="xs">
                    01
                  </Text>
                  <Title order={4} c="deepNavy.8" mb="xs">
                    Define Requirement
                  </Title>
                  <Text size="sm" c="gray.7">
                    Share your role specification, required JLPT level, domain specialization, and target location.
                  </Text>
                </Card>

                <Card padding="lg" radius="md" withBorder>
                  <Text fw={800} size="2rem" c="deepNavy.7" mb="xs">
                    02
                  </Text>
                  <Title order={4} c="deepNavy.8" mb="xs">
                    Curated Shortlist
                  </Title>
                  <Text size="sm" c="gray.7">
                    Within 48 hours, receive pre-evaluated candidates whose language competence has been verified.
                  </Text>
                </Card>

                <Card padding="lg" radius="md" withBorder>
                  <Text fw={800} size="2rem" c="deepNavy.7" mb="xs">
                    03
                  </Text>
                  <Title order={4} c="deepNavy.8" mb="xs">
                    Interview Coordination
                  </Title>
                  <Text size="sm" c="gray.7">
                    We manage scheduling across Indian and Japanese time zones with full facilitation.
                  </Text>
                </Card>

                <Card padding="lg" radius="md" withBorder>
                  <Text fw={800} size="2rem" c="deepNavy.7" mb="xs">
                    04
                  </Text>
                  <Title order={4} c="deepNavy.8" mb="xs">
                    Smooth Onboarding
                  </Title>
                  <Text size="sm" c="gray.7">
                    Support through notice period tracking, document verification, and cross-cultural onboarding.
                  </Text>
                </Card>
              </SimpleGrid>
            </Tabs.Panel>
          </Tabs>
        </Container>
      </Box>

      {/* 5. CALL TO ACTION BANNER */}
      <Box
        py={70}
        style={{
          backgroundColor: '#202C38',
          color: '#FFF',
          borderTop: '4px solid #B74736',
        }}
      >
        <Container size="lg" ta="center">
          <Title order={2} c="#FFF" mb="sm">
            Ready to Accelerate Your Career with Japanese Skills?
          </Title>
          <Text c="gray.4" size="lg" maw={620} mx="auto" mb="xl">
            Browse active openings across top multinational companies or reach out to our advisory team for personalized guidance.
          </Text>
          <Group justify="center" gap="md">
            <Link to="/jobs" style={{ textDecoration: 'none' }}>
              <Button size="md" color="japaneseRed" rightSection={<IconArrowRight size={16} />}>
                Explore Active Jobs
              </Button>
            </Link>
            <Link to="/employers" style={{ textDecoration: 'none' }}>
              <Button size="md" variant="outline" color="gray.3">
                Employer Hiring Enquiries
              </Button>
            </Link>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
