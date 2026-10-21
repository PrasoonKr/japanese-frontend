import React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  SimpleGrid,
  Select,
  Pagination,
  Box,
  Skeleton,
  Badge,
} from '@mantine/core';
import { useJobs } from '../../hooks/useJobs';
import { JobFilterBar } from '../../components/jobs/JobFilterBar';
import { JobCard } from '../../components/jobs/JobCard';
import { EmptyState } from '../../components/common/EmptyState';
import { JobFilters, JlptLevel, WorkMode } from '../../types/job.types';

export const Route = createFileRoute('/jobs/')({
  validateSearch: (search: Record<string, unknown>): JobFilters => {
    return {
      query: typeof search.query === 'string' ? search.query : undefined,
      jlpt: (search.jlpt as JlptLevel) || undefined,
      location: typeof search.location === 'string' ? search.location : undefined,
      workMode: (search.workMode as WorkMode) || undefined,
      minExperience: typeof search.minExperience === 'number' ? search.minExperience : undefined,
      sortBy: (search.sortBy as any) || 'newest',
      page: Number(search.page) || 1,
      pageSize: 6,
    };
  },
  component: JobsListPage,
});

function JobsListPage() {
  const searchParams = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const { data, isLoading, isError } = useJobs(searchParams);

  const handleFilterChange = (updated: Partial<JobFilters>) => {
    navigate({
      search: (prev) => ({
        ...prev,
        ...updated,
        page: updated.page !== undefined ? updated.page : 1,
      }),
    });
  };

  const handleResetFilters = () => {
    navigate({
      search: {
        page: 1,
        pageSize: 6,
        sortBy: 'newest',
      },
    });
  };

  return (
    <Box py={50} style={{ minHeight: '80vh' }}>
      <Container size="xl">
        {/* Header */}
        <Stack gap="xs" mb={35}>
          <Group gap="xs">
            <Badge variant="outline" color="japaneseRed" size="sm">
              CAREER DIRECTORY
            </Badge>
            <Text size="xs" c="dimmed">
              Updated Daily with Verified Positions
            </Text>
          </Group>
          <Title order={1} c="deepNavy.8">
            Japanese Language Jobs & Opportunities
          </Title>
          <Text c="gray.7" size="md">
            Discover roles requiring Japanese language proficiency across technology, manufacturing, interpretation, and global operations.
          </Text>
        </Stack>

        {/* Filter Bar */}
        <JobFilterBar
          filters={searchParams}
          onChange={handleFilterChange}
          onReset={handleResetFilters}
        />

        {/* Result Meta & Sorting */}
        <Group justify="space-between" align="center" mt={30} mb={20}>
          <Text size="sm" c="gray.7">
            {isLoading ? (
              'Searching openings...'
            ) : (
              <>
                Showing <strong style={{ color: '#202C38' }}>{data?.jobs.length || 0}</strong> of{' '}
                <strong style={{ color: '#B74736' }}>{data?.total || 0}</strong> opportunities
              </>
            )}
          </Text>

          <Group gap="xs">
            <Text size="xs" c="dimmed">
              Sort by:
            </Text>
            <Select
              size="xs"
              w={170}
              data={[
                { value: 'newest', label: 'Newest Posted' },
                { value: 'salaryHigh', label: 'Salary: High to Low' },
                { value: 'experienceLow', label: 'Entry Experience' },
              ]}
              value={searchParams.sortBy || 'newest'}
              onChange={(val) => handleFilterChange({ sortBy: val as any, page: 1 })}
            />
          </Group>
        </Group>

        {/* Job Cards Grid or Loading */}
        {isLoading ? (
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Box key={idx} p="md" style={{ border: '1px solid #E8E2D9', borderRadius: 8 }}>
                <Skeleton height={20} width="60%" mb="sm" />
                <Skeleton height={14} width="40%" mb="md" />
                <Skeleton height={12} width="90%" mb="xs" />
                <Skeleton height={12} width="80%" mb="lg" />
                <Skeleton height={32} width="100%" />
              </Box>
            ))}
          </SimpleGrid>
        ) : isError ? (
          <EmptyState
            title="Unable to load job openings"
            description="There was a connection issue loading the vacancy list. Please try again."
            actionLabel="Retry"
            onAction={handleResetFilters}
          />
        ) : data && data.jobs.length > 0 ? (
          <>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              {data.jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </SimpleGrid>

            {/* Pagination */}
            {data.totalPages > 1 && (
              <Group justify="center" mt={50}>
                <Pagination
                  total={data.totalPages}
                  value={data.page}
                  onChange={(page) => handleFilterChange({ page })}
                  color="japaneseRed"
                  radius="md"
                />
              </Group>
            )}
          </>
        ) : (
          <EmptyState onAction={handleResetFilters} />
        )}
      </Container>
    </Box>
  );
}
