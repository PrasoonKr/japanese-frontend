import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Container,
  Stack,
  Title,
  Text,
  Badge,
  SimpleGrid,
  Card,
  ThemeIcon,
  Button,
  Box,
  Group,
  Divider,
} from '@mantine/core';
import {
  IconTarget,
  IconCompass,
  IconShieldCheck,
  IconHeartHandshake,
  IconArrowRight,
} from '@tabler/icons-react';
import { SITE_CONFIG } from '../config/site';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <Box py={60}>
      <Container size="xl">
        <Stack align="center" ta="center" gap="xs" mb={50} maw={800} mx="auto">
          <Badge variant="outline" color="japaneseRed" size="sm">
            ABOUT US
          </Badge>
          <Title order={1} c="deepNavy.8">
            Building the Indo-Japanese Talent Corridor
          </Title>
          <Text size="lg" c="gray.7">
            We are a dedicated recruitment and language consultancy committed to empowering Japanese-speaking professionals and assisting enterprises in securing dependable talent.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb={60}>
          <Card withBorder padding="xl" radius="md">
            <ThemeIcon size={44} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconTarget size={24} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8" mb="xs">
              Our Mission
            </Title>
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.7 }}>
              To bridge the linguistic and cultural divide between India and Japan. We aim to ensure every passionate Japanese language learner finds rewarding career pathways, while providing Japanese multinational corporations with culturally fluent, technically proficient leaders.
            </Text>
          </Card>

          <Card withBorder padding="xl" radius="md">
            <ThemeIcon size={44} radius="md" color="deepNavy" variant="light" mb="md">
              <IconCompass size={24} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8" mb="xs">
              Our Vision
            </Title>
            <Text size="sm" c="gray.7" style={{ lineHeight: 1.7 }}>
              To be the premier benchmark for cross-border talent solutions connecting South Asia and Japan, recognized for transparency, uncompromising ethical recruitment standards, and lasting candidate success.
            </Text>
          </Card>
        </SimpleGrid>

        {/* Ethical Standards */}
        <Card withBorder padding="xl" radius="md" mb={60} style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E2D9' }}>
          <Title order={3} c="deepNavy.8" mb="sm">
            Our Recruitment Commitments
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mt="md">
            <Box>
              <Text fw={700} size="sm" c="japaneseRed.6" mb={4}>
                Zero Candidate Fees
              </Text>
              <Text size="xs" c="gray.7">
                We never charge applicants registration, interview, or placement fees. All opportunities are direct corporate placements.
              </Text>
            </Box>
            <Box>
              <Text fw={700} size="sm" c="deepNavy.8" mb={4}>
                Authentic Verification
              </Text>
              <Text size="xs" c="gray.7">
                Job descriptions, salary brackets, and work conditions are validated directly with hiring organizations.
              </Text>
            </Box>
            <Box>
              <Text fw={700} size="sm" c="japaneseRed.6" mb={4}>
                Data Privacy & Respect
              </Text>
              <Text size="xs" c="gray.7">
                Resumes and confidential candidate information are never circulated without explicit candidate consent.
              </Text>
            </Box>
          </SimpleGrid>
        </Card>

        {/* Call to Action */}
        <Box ta="center">
          <Group justify="center" gap="md">
            <Link to="/jobs" style={{ textDecoration: 'none' }}>
              <Button size="md" color="japaneseRed">
                Explore Career Opportunities
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button size="md" variant="outline" color="deepNavy">
                Contact Our Advisory Team
              </Button>
            </Link>
          </Group>
        </Box>
      </Container>
    </Box>
  );
}
