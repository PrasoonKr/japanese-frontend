import React from 'react';
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
  Table,
  Button,
  Box,
  ThemeIcon,
  List,
  Divider,
} from '@mantine/core';
import {
  IconCertificate,
  IconCalendar,
  IconFileText,
  IconCheck,
  IconArrowRight,
  IconSchool,
  IconMapPin,
  IconBriefcase,
} from '@tabler/icons-react';
import { JapaneseMotif } from '../components/common/JapaneseMotif';

export const Route = createFileRoute('/jlpt')({
  component: JlptPage,
});

function JlptPage() {
  return (
    <Box py={50}>
      <Container size="xl">
        {/* Header */}
        <Stack align="center" ta="center" gap="xs" mb={40} maw={840} mx="auto">
          <Badge variant="filled" color="japaneseRed" size="md">
            OFFICIAL PROFICIENCY EXAMINATION
          </Badge>
          <Title order={1} c="deepNavy.8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            JLPT Examination & Preparation Guide
          </Title>
          <Text size="lg" c="gray.7">
            The Japanese-Language Proficiency Test (JLPT) is the worldwide recognized standard for evaluating Japanese proficiency for non-native speakers. Master each level with JLJ Institute.
          </Text>
        </Stack>

        {/* JLPT Overview Card */}
        <Card withBorder padding="xl" radius="md" mb={40} style={{ borderColor: '#E8E2D9' }}>
          <Group justify="space-between" align="flex-start" wrap="wrap">
            <Stack gap="xs" maw={680}>
              <Title order={2} c="deepNavy.8">
                What is the JLPT?
              </Title>
              <Text size="sm" c="gray.7" style={{ lineHeight: 1.7 }}>
                Administered globally by the <strong>Japan Foundation</strong> and <strong>Japan Educational Exchanges and Services (JEES)</strong>, the JLPT certification is mandatory for admission to Japanese universities, government scholarship evaluations, technical visa approvals, and corporate job appointments at Japanese multinational firms worldwide.
              </Text>
              <Group gap="lg" mt="xs">
                <Group gap={6}>
                  <IconCalendar size={18} color="#B74736" />
                  <Text size="sm" fw={600} c="deepNavy.8">
                    Exam Held: July & December (Twice Annually)
                  </Text>
                </Group>
                <Group gap={6}>
                  <IconCertificate size={18} color="#B74736" />
                  <Text size="sm" fw={600} c="deepNavy.8">
                    Lifetime Validity Certificate
                  </Text>
                </Group>
              </Group>
            </Stack>

            <Link to="/courses" style={{ textDecoration: 'none' }}>
              <Button color="japaneseRed" size="md" rightSection={<IconArrowRight size={16} />}>
                Join JLPT Prep Batches
              </Button>
            </Link>
          </Group>
        </Card>

        {/* JLPT Levels Table */}
        <Card withBorder padding="xl" radius="md" mb={50} style={{ borderColor: '#E8E2D9' }}>
          <Title order={3} c="deepNavy.8" mb="xs">
            JLPT Level Comparison & Test Requirements (N5 to N1)
          </Title>
          <Text size="sm" c="dimmed" mb="lg">
            Understand the required Kanji, vocabulary count, test sections, and corporate recognition for each level.
          </Text>

          <Table.ScrollContainer minWidth={750}>
            <Table striped highlightOnHover verticalSpacing="md">
              <Table.Thead>
                <Table.Tr style={{ backgroundColor: '#202C38', color: '#FFF' }}>
                  <Table.Th style={{ color: '#FFF' }}>Level</Table.Th>
                  <Table.Th style={{ color: '#FFF' }}>Kanji & Vocabulary</Table.Th>
                  <Table.Th style={{ color: '#FFF' }}>Test Sections & Time</Table.Th>
                  <Table.Th style={{ color: '#FFF' }}>Total Points / Pass Mark</Table.Th>
                  <Table.Th style={{ color: '#FFF' }}>Career & Visa Recognition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    <Badge color="dark" size="lg">JLPT N1</Badge>
                  </Table.Td>
                  <Table.Td>
                    <strong>2,000+ Kanji</strong><br />10,000+ Words
                  </Table.Td>
                  <Table.Td>
                    Language Knowledge & Reading (110 min)<br />Listening (60 min)
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    100 / 180 Marks<br />(Section min: 19/60)
                  </Table.Td>
                  <Table.Td>
                    Near-native mastery. Conference interpretation, VP / Country Head, 15 points on Japan Highly Skilled Visa.
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Badge color="japaneseRed" size="lg">JLPT N2</Badge>
                  </Table.Td>
                  <Table.Td>
                    <strong>1,000+ Kanji</strong><br />6,000+ Words
                  </Table.Td>
                  <Table.Td>
                    Language Knowledge & Reading (105 min)<br />Listening (50 min)
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    90 / 180 Marks<br />(Section min: 19/60)
                  </Table.Td>
                  <Table.Td>
                    Business standard for MNCs. IT engineers, translators, project leads. 10 points for Japan Skilled Visa.
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Badge color="indigo" size="lg">JLPT N3</Badge>
                  </Table.Td>
                  <Table.Td>
                    <strong>650+ Kanji</strong><br />3,500+ Words
                  </Table.Td>
                  <Table.Td>
                    Vocabulary (30m), Grammar/Reading (70m), Listening (40m)
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    95 / 180 Marks<br />(Section min: 19/60)
                  </Table.Td>
                  <Table.Td>
                    Workplace conversational threshold. Software engineers, technical support, operations coordinators.
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Badge color="teal" size="lg">JLPT N4</Badge>
                  </Table.Td>
                  <Table.Td>
                    <strong>300+ Kanji</strong><br />1,500+ Words
                  </Table.Td>
                  <Table.Td>
                    Vocabulary (25m), Grammar/Reading (55m), Listening (35m)
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    90 / 180 Marks<br />(Section min: 38/120 & 19/60)
                  </Table.Td>
                  <Table.Td>
                    Mandatory minimum requirement for Specified Skilled Worker (SSW) and Technical Intern Training in Japan.
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Badge color="gray" size="lg">JLPT N5</Badge>
                  </Table.Td>
                  <Table.Td>
                    <strong>100+ Kanji</strong><br />800+ Words
                  </Table.Td>
                  <Table.Td>
                    Vocabulary (20m), Grammar/Reading (40m), Listening (30m)
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    80 / 180 Marks<br />(Section min: 38/120 & 19/60)
                  </Table.Td>
                  <Table.Td>
                    Foundation level. Mandatory requirement for Student Visa application to Japanese language schools.
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Card>

        {/* JLPT Preparation at JLJ Institute */}
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mb={50}>
          <Card withBorder padding="lg" radius="md">
            <ThemeIcon size={44} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconFileText size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              Past Papers & Mock Exams
            </Title>
            <Text size="sm" c="gray.7">
              Take full-length mock examinations under real exam timing conditions with automated OMR evaluation and score analysis.
            </Text>
          </Card>

          <Card withBorder padding="lg" radius="md">
            <ThemeIcon size={44} radius="md" color="deepNavy" variant="light" mb="md">
              <IconSchool size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              Choukai (Listening) Audio Drills
            </Title>
            <Text size="sm" c="gray.7">
              Dedicated listening comprehension practice with natural conversational speeds, quick response drills, and contextual deduction tips.
            </Text>
          </Card>

          <Card withBorder padding="lg" radius="md">
            <ThemeIcon size={44} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconMapPin size={24} />
            </ThemeIcon>
            <Title order={4} c="deepNavy.8" mb="xs">
              Exam Registration Guidance
            </Title>
            <Text size="sm" c="gray.7">
              Step-by-step assistance in online registration for test centers across Delhi, Pune, Bengaluru, Chennai, Kolkata, and Mumbai.
            </Text>
          </Card>
        </SimpleGrid>

        {/* Call to Action Banner */}
        <Card withBorder padding="xl" radius="md" ta="center" style={{ backgroundColor: '#FDF2F0', borderColor: '#F3BCB5' }}>
          <Title order={3} c="deepNavy.8" mb="xs">
            Preparing for the Upcoming JLPT Exam?
          </Title>
          <Text size="sm" c="gray.7" maw={600} mx="auto" mb="md">
            Join our intensive fast-track JLPT revision batches or take a diagnostic mock test at JLJ Institute to evaluate your current score readiness.
          </Text>
          <Group justify="center" gap="md">
            <Link to="/courses" style={{ textDecoration: 'none' }}>
              <Button color="japaneseRed" size="md">
                View JLPT Batches
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="outline" color="deepNavy" size="md">
                Request Free Mock Test
              </Button>
            </Link>
          </Group>
        </Card>
      </Container>
    </Box>
  );
}
