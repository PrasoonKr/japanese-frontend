import React from 'react';
import { Card, Grid, TextInput, Select, Button, Group } from '@mantine/core';
import { IconSearch, IconFilterOff } from '@tabler/icons-react';
import { JobFilters, JlptLevel, WorkMode, EmploymentType } from '../../types/job.types';

interface JobFilterBarProps {
  filters: JobFilters;
  onChange: (updated: Partial<JobFilters>) => void;
  onReset: () => void;
}

export const JobFilterBar: React.FC<JobFilterBarProps> = ({
  filters,
  onChange,
  onReset,
}) => {
  return (
    <Card withBorder padding="md" radius="md" style={{ borderColor: '#E8E2D9' }}>
      <Grid gutter="sm" align="flex-end">
        {/* Search Input */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            placeholder="Search title, skills, or keywords..."
            leftSection={<IconSearch size={16} />}
            value={filters.query || ''}
            onChange={(e) => onChange({ query: e.currentTarget.value, page: 1 })}
          />
        </Grid.Col>

        {/* JLPT Level */}
        <Grid.Col span={{ base: 6, sm: 3, md: 2 }}>
          <Select
            placeholder="JLPT Level"
            data={[
              { value: 'Any', label: 'All Levels' },
              { value: 'N1', label: 'JLPT N1' },
              { value: 'N2', label: 'JLPT N2' },
              { value: 'N3', label: 'JLPT N3' },
              { value: 'N4', label: 'JLPT N4' },
              { value: 'N5', label: 'JLPT N5' },
            ]}
            value={filters.jlpt || 'Any'}
            onChange={(val) => onChange({ jlpt: (val || 'Any') as JlptLevel, page: 1 })}
            clearable={false}
          />
        </Grid.Col>

        {/* Work Mode */}
        <Grid.Col span={{ base: 6, sm: 3, md: 2 }}>
          <Select
            placeholder="Work Mode"
            data={[
              { value: '', label: 'All Modes' },
              { value: 'On-site', label: 'On-site' },
              { value: 'Hybrid', label: 'Hybrid' },
              { value: 'Remote', label: 'Remote' },
            ]}
            value={filters.workMode || ''}
            onChange={(val) => onChange({ workMode: (val || undefined) as WorkMode, page: 1 })}
          />
        </Grid.Col>

        {/* Location */}
        <Grid.Col span={{ base: 6, sm: 3, md: 2 }}>
          <Select
            placeholder="Location"
            data={[
              { value: '', label: 'All Locations' },
              { value: 'Gurugram', label: 'Delhi NCR / Gurugram' },
              { value: 'Bengaluru', label: 'Bengaluru' },
              { value: 'Pune', label: 'Pune' },
              { value: 'Tokyo', label: 'Tokyo (Japan)' },
              { value: 'Remote', label: 'Remote' },
            ]}
            value={filters.location || ''}
            onChange={(val) => onChange({ location: val || undefined, page: 1 })}
          />
        </Grid.Col>

        {/* Reset Action */}
        <Grid.Col span={{ base: 6, sm: 3, md: 2 }}>
          <Button
            variant="light"
            color="gray"
            fullWidth
            leftSection={<IconFilterOff size={16} />}
            onClick={onReset}
          >
            Clear Filters
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
