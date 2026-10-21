import React from 'react';
import { Card, Group, Stack, Title, Text, Badge, Button, Box } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import {
  IconMapPin,
  IconBriefcase,
  IconClock,
  IconBuilding,
  IconCurrencyDollar,
  IconArrowRight,
} from '@tabler/icons-react';
import { Job } from '../../types/job.types';
import { BadgeJlpt } from '../common/BadgeJlpt';
import { formatSalary } from '../../lib/formatters';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card
      withBorder
      padding="lg"
      radius="md"
      className="interactive-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        borderColor: '#E8E2D9',
      }}
    >
      <Stack gap="sm">
        {/* Top Badges & Meta */}
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <BadgeJlpt level={job.jlptRequired} />
            <Badge variant="subtle" color="gray" size="xs">
              {job.workMode}
            </Badge>
            {job.visaSupportAvailable && (
              <Badge variant="outline" color="teal" size="xs">
                Visa Support
              </Badge>
            )}
          </Group>
          <Text size="xs" c="dimmed">
            {job.postedDate}
          </Text>
        </Group>

        {/* Title */}
        <Box>
          <Link
            to="/jobs/$jobId"
            params={{ jobId: job.id }}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Title
              order={4}
              c="deepNavy.8"
              style={{
                lineHeight: 1.35,
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#B74736')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '')}
            >
              {job.title}
            </Title>
          </Link>
          <Group gap="xs" mt={4}>
            <IconBuilding size={14} color="#842C1E" />
            <Text size="xs" fw={600} c="japaneseRed.6">
              {job.companyName}
            </Text>
          </Group>
        </Box>

        {/* Meta details */}
        <Group gap="md" mt={4}>
          <Group gap={4}>
            <IconMapPin size={14} color="#5A6470" />
            <Text size="xs" c="dimmed">
              {job.location}
            </Text>
          </Group>
          <Group gap={4}>
            <IconBriefcase size={14} color="#5A6470" />
            <Text size="xs" c="dimmed">
              {job.experienceMinYears}+ Yrs Exp
            </Text>
          </Group>
          <Group gap={4}>
            <IconClock size={14} color="#5A6470" />
            <Text size="xs" c="dimmed">
              {job.employmentType}
            </Text>
          </Group>
        </Group>

        {/* Salary */}
        <Group gap={4} mt={2}>
          <IconCurrencyDollar size={15} color="#2B8A3E" />
          <Text size="xs" fw={700} c="teal.8">
            {formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency, job.salaryPeriod)}
          </Text>
        </Group>

        {/* Short excerpt */}
        <Text size="sm" c="gray.7" lineClamp={2} mt={2}>
          {job.description}
        </Text>
      </Stack>

      {/* Action Footer */}
      <Group justify="space-between" mt="md" pt="sm" style={{ borderTop: '1px solid #F1ECE5' }}>
        <Link to="/jobs/$jobId" params={{ jobId: job.id }} style={{ textDecoration: 'none' }}>
          <Button variant="subtle" color="deepNavy" size="xs">
            View Details
          </Button>
        </Link>
        <Link to="/apply/$jobId" params={{ jobId: job.id }} style={{ textDecoration: 'none' }}>
          <Button
            variant="filled"
            color="japaneseRed"
            size="xs"
            rightSection={<IconArrowRight size={14} />}
          >
            Apply Now
          </Button>
        </Link>
      </Group>
    </Card>
  );
};
