import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Container,
  SimpleGrid,
  Grid,
  Stack,
  Title,
  Text,
  Badge,
  Button,
  Card,
  Group,
  List,
  ThemeIcon,
  Box,
  Divider,
  Breadcrumbs,
  Anchor,
  Skeleton,
} from '@mantine/core';
import {
  IconCheck,
  IconMapPin,
  IconBriefcase,
  IconClock,
  IconCalendar,
  IconBuilding,
  IconCurrencyDollar,
  IconArrowLeft,
  IconShare,
  IconShieldCheck,
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useJob, useRelatedJobs } from '../../hooks/useJob';
import { BadgeJlpt } from '../../components/common/BadgeJlpt';
import { JobCard } from '../../components/jobs/JobCard';
import { formatSalary } from '../../lib/formatters';

export const Route = createFileRoute('/jobs/$jobId')({
  component: JobDetailPage,
});

function JobDetailPage() {
  const { jobId } = Route.useParams();
  const { data: job, isLoading, isError } = useJob(jobId);
  const { data: relatedJobs = [] } = useRelatedJobs(jobId, job?.jlptRequired);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      notifications.show({
        title: 'Link Copied',
        message: 'Job opening URL copied to your clipboard.',
        color: 'teal',
      });
    }
  };

  if (isLoading) {
    return (
      <Container size="xl" py={60}>
        <Skeleton height={30} width="40%" mb="md" />
        <Skeleton height={20} width="60%" mb="xl" />
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Skeleton height={250} mb="md" />
            <Skeleton height={150} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Skeleton height={300} />
          </Grid.Col>
        </Grid>
      </Container>
    );
  }

  if (isError || !job) {
    return (
      <Container size="md" py={80} ta="center">
        <Title order={2} c="deepNavy.8" mb="sm">
          Position Not Found
        </Title>
        <Text c="dimmed" mb="lg">
          The requested job opening ID ({jobId}) could not be located or may have been archived.
        </Text>
        <Link to="/jobs" style={{ textDecoration: 'none' }}>
          <Button variant="outline" color="japaneseRed" leftSection={<IconArrowLeft size={16} />}>
            Back to All Jobs
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Box py={40}>
      <Container size="xl">
        {/* Breadcrumb */}
        <Breadcrumbs mb="lg" separator="→">
          <Link to="/" style={{ textDecoration: 'none', color: '#616B77', fontSize: '13px' }}>
            Home
          </Link>
          <Link to="/jobs" style={{ textDecoration: 'none', color: '#616B77', fontSize: '13px' }}>
            Jobs
          </Link>
          <Text size="xs" fw={600} c="japaneseRed.6">
            {job.title}
          </Text>
        </Breadcrumbs>

        {/* Job Header Card */}
        <Card withBorder padding="xl" radius="md" mb={30} style={{ borderColor: '#E8E2D9' }}>
          <Group justify="space-between" align="flex-start" wrap="wrap">
            <Stack gap="xs" style={{ flex: 1, minWidth: 280 }}>
              <Group gap="xs">
                <BadgeJlpt level={job.jlptRequired} size="md" />
                <Badge variant="subtle" color="gray" size="sm">
                  {job.workMode}
                </Badge>
                {job.visaSupportAvailable && (
                  <Badge variant="light" color="teal" size="sm">
                    Visa Sponsorship Available
                  </Badge>
                )}
              </Group>

              <Title order={1} c="deepNavy.8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                {job.title}
              </Title>

              <Group gap="md">
                <Group gap={4}>
                  <IconBuilding size={16} color="#842C1E" />
                  <Text fw={600} size="sm" c="japaneseRed.7">
                    {job.companyName}
                  </Text>
                </Group>
                <Group gap={4}>
                  <IconMapPin size={16} color="#616B77" />
                  <Text size="sm" c="dimmed">
                    {job.location}
                  </Text>
                </Group>
                <Group gap={4}>
                  <IconBriefcase size={16} color="#616B77" />
                  <Text size="sm" c="dimmed">
                    {job.experienceMinYears}+ Years Experience
                  </Text>
                </Group>
              </Group>
            </Stack>

            <Group gap="sm" mt={{ base: 'md', sm: 0 }}>
              <Button
                variant="default"
                size="sm"
                leftSection={<IconShare size={16} />}
                onClick={handleShare}
              >
                Share
              </Button>
              <Link to="/apply/$jobId" params={{ jobId: job.id }} style={{ textDecoration: 'none' }}>
                <Button size="md" color="japaneseRed">
                  Apply for this Role
                </Button>
              </Link>
            </Group>
          </Group>
        </Card>

        {/* Content Layout */}
        <Grid gutter={30}>
          {/* Main Description Column */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="xl">
              {/* Role Overview */}
              <Card withBorder padding="lg" radius="md">
                <Title order={3} c="deepNavy.8" mb="sm">
                  Role Overview
                </Title>
                <Text size="md" c="gray.8" style={{ lineHeight: 1.7 }}>
                  {job.description}
                </Text>
              </Card>

              {/* Responsibilities */}
              <Card withBorder padding="lg" radius="md">
                <Title order={3} c="deepNavy.8" mb="md">
                  Key Responsibilities
                </Title>
                <List
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon color="japaneseRed" size={20} radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  {job.responsibilities.map((resp, i) => (
                    <List.Item key={i} c="gray.8">
                      {resp}
                    </List.Item>
                  ))}
                </List>
              </Card>

              {/* Requirements */}
              <Card withBorder padding="lg" radius="md">
                <Title order={3} c="deepNavy.8" mb="md">
                  Qualifications & Japanese Proficiency
                </Title>
                <List
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon color="deepNavy" size={20} radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  {job.requirements.map((req, i) => (
                    <List.Item key={i} c="gray.8">
                      {req}
                    </List.Item>
                  ))}
                </List>
              </Card>

              {/* Preferred Skills */}
              {job.preferredSkills && job.preferredSkills.length > 0 && (
                <Card withBorder padding="lg" radius="md">
                  <Title order={3} c="deepNavy.8" mb="md">
                    Preferred & Value-Add Skills
                  </Title>
                  <List spacing="sm" size="sm">
                    {job.preferredSkills.map((pref, i) => (
                      <List.Item key={i} c="gray.8">
                        {pref}
                      </List.Item>
                    ))}
                  </List>
                </Card>
              )}

              {/* Benefits */}
              {job.benefits && job.benefits.length > 0 && (
                <Card withBorder padding="lg" radius="md">
                  <Title order={3} c="deepNavy.8" mb="md">
                    Compensation & Employee Benefits
                  </Title>
                  <List
                    spacing="sm"
                    size="sm"
                    icon={
                      <ThemeIcon color="teal" size={20} radius="xl">
                        <IconCheck size={12} />
                      </ThemeIcon>
                    }
                  >
                    {job.benefits.map((ben, i) => (
                      <List.Item key={i} c="gray.8">
                        {ben}
                      </List.Item>
                    ))}
                  </List>
                </Card>
              )}
            </Stack>
          </Grid.Col>

          {/* Sidebar Summary Card */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Box style={{ position: 'sticky', top: 90 }}>
              <Card withBorder padding="lg" radius="md" style={{ borderColor: '#E8E2D9' }}>
                <Title order={4} c="deepNavy.8" mb="md">
                  Job Snapshot
                </Title>

                <Stack gap="sm">
                  <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                      Salary Indicator:
                    </Text>
                    <Text size="sm" fw={700} c="teal.8">
                      {formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency, job.salaryPeriod)}
                    </Text>
                  </Group>
                  <Divider color="#F1ECE5" />

                  <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                      Required JLPT:
                    </Text>
                    <BadgeJlpt level={job.jlptRequired} />
                  </Group>
                  <Divider color="#F1ECE5" />

                  <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                      Employment Type:
                    </Text>
                    <Text size="sm" fw={600} c="deepNavy.8">
                      {job.employmentType}
                    </Text>
                  </Group>
                  <Divider color="#F1ECE5" />

                  <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                      Work Mode:
                    </Text>
                    <Text size="sm" fw={600} c="deepNavy.8">
                      {job.workMode}
                    </Text>
                  </Group>
                  <Divider color="#F1ECE5" />

                  <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                      Location:
                    </Text>
                    <Text size="sm" fw={600} c="deepNavy.8">
                      {job.location}
                    </Text>
                  </Group>
                  <Divider color="#F1ECE5" />

                  <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                      Posted Date:
                    </Text>
                    <Text size="xs" c="gray.7">
                      {job.postedDate}
                    </Text>
                  </Group>

                  {job.applicationDeadline && (
                    <>
                      <Divider color="#F1ECE5" />
                      <Group justify="space-between">
                        <Text size="xs" c="dimmed">
                          Application Deadline:
                        </Text>
                        <Text size="xs" fw={600} c="japaneseRed.6">
                          {job.applicationDeadline}
                        </Text>
                      </Group>
                    </>
                  )}
                </Stack>

                <Link
                  to="/apply/$jobId"
                  params={{ jobId: job.id }}
                  style={{ textDecoration: 'none', marginTop: 24, display: 'block' }}
                >
                  <Button fullWidth size="md" color="japaneseRed">
                    Apply Now
                  </Button>
                </Link>

                <Group gap="xs" mt="md" justify="center">
                  <IconShieldCheck size={16} color="#2B8A3E" />
                  <Text size="11px" c="dimmed">
                    Verified position with direct corporate payroll
                  </Text>
                </Group>
              </Card>
            </Box>
          </Grid.Col>
        </Grid>

        {/* Related Opportunities */}
        {relatedJobs.length > 0 && (
          <Box mt={70} pt={40} style={{ borderTop: '1px solid #E8E2D9' }}>
            <Title order={3} c="deepNavy.8" mb="lg">
              Similar Japanese Language Openings
            </Title>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {relatedJobs.map((relJob) => (
                <JobCard key={relJob.id} job={relJob} />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Container>
    </Box>
  );
}
