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
  List,
  Group,
} from '@mantine/core';
import {
  IconBriefcase,
  IconSchool,
  IconFileText,
  IconPlaneDeparture,
  IconCheck,
  IconArrowRight,
} from '@tabler/icons-react';

export const Route = createFileRoute('/services')({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Box py={60}>
      <Container size="xl">
        <Stack align="center" ta="center" gap="xs" mb={50} maw={800} mx="auto">
          <Badge variant="outline" color="japaneseRed" size="sm">
            SERVICES & EXPERTISE
          </Badge>
          <Title order={1} c="deepNavy.8">
            Specialized Japanese Language Services
          </Title>
          <Text size="lg" c="gray.7">
            From lateral bilingual recruitment to enterprise language training and high-precision technical interpretation, we support your cross-border objectives.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {/* Service 1 */}
          <Card padding="xl" radius="md" withBorder className="interactive-card">
            <ThemeIcon size={52} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconBriefcase size={28} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8" mb="xs">
              Bilingual Recruitment & Executive Search
            </Title>
            <Text size="sm" c="gray.7" mb="md">
              Targeted sourcing of professionals holding JLPT N5 through N1 certification across engineering, IT, management, and operations.
            </Text>
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon color="japaneseRed" size={18} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
              mb="lg"
            >
              <List.Item>Pre-interview language assessment conducted by native speakers</List.Item>
              <List.Item>Technical and cultural alignment screening</List.Item>
              <List.Item>Executive search for bilingual Directors, VPs, and Plant Managers</List.Item>
            </List>
            <Link to="/employers" style={{ textDecoration: 'none' }}>
              <Button variant="outline" color="deepNavy" size="sm">
                Enquire for Recruitment
              </Button>
            </Link>
          </Card>

          {/* Service 2 */}
          <Card padding="xl" radius="md" withBorder className="interactive-card">
            <ThemeIcon size={52} radius="md" color="deepNavy" variant="light" mb="md">
              <IconSchool size={28} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8" mb="xs">
              Corporate Japanese Training & Cultural Coaching
            </Title>
            <Text size="sm" c="gray.7" mb="md">
              Tailored training programs for corporate engineering teams, IT consultants, and managers preparing for Japanese client engagements.
            </Text>
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon color="deepNavy" size={18} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
              mb="lg"
            >
              <List.Item>Level-based training modules aligned to JLPT N5, N4, and N3</List.Item>
              <List.Item>Workplace Keigo, business email drafting, and telephone manners</List.Item>
              <List.Item>Pre-deputation cultural orientation for engineers traveling to Japan</List.Item>
            </List>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="outline" color="deepNavy" size="sm">
                Request Corporate Syllabus
              </Button>
            </Link>
          </Card>

          {/* Service 3 */}
          <Card padding="xl" radius="md" withBorder className="interactive-card">
            <ThemeIcon size={52} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconFileText size={28} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8" mb="xs">
              Technical Translation & Simultaneous Interpretation
            </Title>
            <Text size="sm" c="gray.7" mb="md">
              High-accuracy document translation and live on-site or remote interpretation for technical, automotive, and board reviews.
            </Text>
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon color="japaneseRed" size={18} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
              mb="lg"
            >
              <List.Item>Engineering manuals, patents, JIS standards, and system specifications</List.Item>
              <List.Item>Simultaneous interpretation for audits, conferences, and board meetings</List.Item>
              <List.Item>Consecutive plant floor interpretation for Japanese engineers</List.Item>
            </List>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="outline" color="deepNavy" size="sm">
                Get Translation Quote
              </Button>
            </Link>
          </Card>

          {/* Service 4 */}
          <Card padding="xl" radius="md" withBorder className="interactive-card">
            <ThemeIcon size={52} radius="md" color="deepNavy" variant="light" mb="md">
              <IconPlaneDeparture size={28} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8" mb="xs">
              Japan Career Mobility & Visa Support
            </Title>
            <Text size="sm" c="gray.7" mb="md">
              Supporting Indian professionals securing direct employment in Japan with documentation and relocation advisory.
            </Text>
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon color="deepNavy" size={18} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
              mb="lg"
            >
              <List.Item>Engineer / Specialist in Humanities / International Services visa guidance</List.Item>
              <List.Item>Rirekisho (履歴書) and Shokumu-keirekisho adaptation</List.Item>
              <List.Item>Tokyo housing, insurance, and municipal registration advice</List.Item>
            </List>
            <Link to="/career-support" style={{ textDecoration: 'none' }}>
              <Button variant="outline" color="deepNavy" size="sm">
                Explore Candidate Hub
              </Button>
            </Link>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
