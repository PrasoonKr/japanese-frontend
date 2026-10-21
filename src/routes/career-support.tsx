import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Container,
  Stack,
  Title,
  Text,
  Badge,
  Table,
  Card,
  SimpleGrid,
  Button,
  Box,
  Accordion,
  Group,
  ThemeIcon,
} from '@mantine/core';
import {
  IconFileText,
  IconCertificate,
  IconArrowRight,
  IconCheck,
  IconBulb,
} from '@tabler/icons-react';

export const Route = createFileRoute('/career-support')({
  component: CareerSupportPage,
});

function CareerSupportPage() {
  return (
    <Box py={60}>
      <Container size="xl">
        <Stack align="center" ta="center" gap="xs" mb={50} maw={840} mx="auto">
          <Badge variant="filled" color="japaneseRed" size="sm">
            CANDIDATE RESOURCE CENTER
          </Badge>
          <Title order={1} c="deepNavy.8">
            JLPT Career Guide & Professional Advisory
          </Title>
          <Text size="lg" c="gray.7">
            Understand how each Japanese Language Proficiency Test (JLPT) level correlates with job roles, compensation expectations, and Japanese workplace success.
          </Text>
        </Stack>

        {/* JLPT Level Matrix Table */}
        <Card withBorder padding="xl" radius="md" mb={60} style={{ borderColor: '#E8E2D9' }}>
          <Title order={3} c="deepNavy.8" mb="xs">
            JLPT Level Competence & Career Mapping
          </Title>
          <Text size="sm" c="dimmed" mb="lg">
            Standard benchmarks observed across Japanese multinational employers in India and Japan.
          </Text>

          <Table.ScrollContainer minWidth={700}>
            <Table striped highlightOnHover verticalSpacing="md">
              <Table.Thead>
                <Table.Tr style={{ backgroundColor: '#202C38', color: '#FFF' }}>
                  <Table.Th style={{ color: '#FFF' }}>Level</Table.Th>
                  <Table.Th style={{ color: '#FFF' }}>Fluency & Language Scope</Table.Th>
                  <Table.Th style={{ color: '#FFF' }}>Typical Career Positions</Table.Th>
                  <Table.Th style={{ color: '#FFF' }}>Expected Package Range</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    <Badge color="dark" size="lg">
                      JLPT N1
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    Near-native comprehension; complex business negotiations, contracts, technical interpretation.
                  </Table.Td>
                  <Table.Td>
                    Simultaneous Interpreter, Bilingual IT Director, Country Sales Lead, Legal Translator.
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    ₹16L – ₹30L+ (India) / ¥6.5M – ¥10M+ (Japan)
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Badge color="japaneseRed" size="lg">
                      JLPT N2
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    Business professional; capable of independent client meetings, specs drafting, email communication.
                  </Table.Td>
                  <Table.Td>
                    Bilingual Project Manager, Senior Software Engineer, Consecutive Interpreter, Trainer.
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    ₹10L – ₹20L (India) / ¥5M – ¥7.5M (Japan)
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Badge color="indigo" size="lg">
                      JLPT N3
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    Conversational bridge; understands everyday workplace conversations and technical documentation.
                  </Table.Td>
                  <Table.Td>
                    Software Developer, Technical Support Specialist, Supply Chain Coordinator.
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    ₹6.5L – ₹12L (India) / ¥4M – ¥5.5M (Japan)
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Badge color="teal" size="lg">
                      JLPT N4
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    Basic daily communication; understands simple instructions, greetings, and basic phrases.
                  </Table.Td>
                  <Table.Td>
                    Associate Support Engineer, Junior Coordinator, Trainee Translator.
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    ₹4.5L – ₹7L (India)
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Badge color="gray" size="lg">
                      JLPT N5
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    Elementary foundation; Hiragana, Katakana, ~100 Kanji, and fundamental phrases.
                  </Table.Td>
                  <Table.Td>
                    Entry-level technical roles with language enhancement track, Language Intern.
                  </Table.Td>
                  <Table.Td fw={700} c="teal.8">
                    ₹3.5L – ₹5.5L (India)
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Card>

        {/* Japanese Resume & Etiquette Guides */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb={60}>
          <Card withBorder padding="xl" radius="md">
            <Group gap="xs" mb="sm">
              <ThemeIcon color="japaneseRed" size={32} radius="md">
                <IconFileText size={18} />
              </ThemeIcon>
              <Title order={3} c="deepNavy.8">
                Rirekisho vs. Western Resume
              </Title>
            </Group>
            <Text size="sm" c="gray.7" mb="md">
              Japanese companies place significant emphasis on standardized chronological records:
            </Text>
            <Stack gap="xs">
              <Text size="sm">
                • <strong>Rirekisho (履歴書):</strong> Standard format capturing precise educational dates, certifications, personal photo, and motivation.
              </Text>
              <Text size="sm">
                • <strong>Shokumu-keirekisho (職務経歴書):</strong> Detailed career summary highlighting project contributions, technologies, and achievements.
              </Text>
              <Text size="sm">
                • <strong>Precision:</strong> Ensure consistency in date formatting (Western year or Japanese era Reiwa).
              </Text>
            </Stack>
          </Card>

          <Card withBorder padding="xl" radius="md">
            <Group gap="xs" mb="sm">
              <ThemeIcon color="deepNavy" size={32} radius="md">
                <IconBulb size={18} />
              </ThemeIcon>
              <Title order={3} c="deepNavy.8">
                Japanese Interview Etiquette
              </Title>
            </Group>
            <Text size="sm" c="gray.7" mb="md">
              Master the foundational Japanese corporate cultural practices:
            </Text>
            <Stack gap="xs">
              <Text size="sm">
                • <strong>Hou-Ren-So (報・連・相):</strong> Proactive reporting (Hokoku), communicating (Renraku), and consulting (Sodan).
              </Text>
              <Text size="sm">
                • <strong>Punctuality:</strong> Arrive 5–10 minutes early. Lateness without prior notice is heavily penalized.
              </Text>
              <Text size="sm">
                • <strong>Polite Language:</strong> Use appropriate Desu/Masu and humble/honorific terms during self-introduction.
              </Text>
            </Stack>
          </Card>
        </SimpleGrid>

        {/* CTA to Jobs */}
        <Box ta="center" py={40}>
          <Link to="/jobs" style={{ textDecoration: 'none' }}>
            <Button size="lg" color="japaneseRed" rightSection={<IconArrowRight size={18} />}>
              Browse Jobs Matching Your JLPT Level
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
