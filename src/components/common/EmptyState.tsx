import React from 'react';
import { Stack, Title, Text, Button, Center, ThemeIcon } from '@mantine/core';
import { IconSearchOff } from '@tabler/icons-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No openings matched your filters',
  description = 'Try broadening your search keywords, adjusting the JLPT level, or clearing location filters.',
  actionLabel = 'Reset All Filters',
  onAction,
}) => {
  return (
    <Center py={60}>
      <Stack align="center" gap="md" maw={440} ta="center">
        <ThemeIcon size={64} radius="xl" color="japaneseRed" variant="light">
          <IconSearchOff size={32} stroke={1.5} />
        </ThemeIcon>
        <Title order={3} c="deepNavy.8">
          {title}
        </Title>
        <Text c="dimmed" size="sm">
          {description}
        </Text>
        {onAction && (
          <Button variant="outline" color="japaneseRed" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </Stack>
    </Center>
  );
};
