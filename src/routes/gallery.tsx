import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import {
  Container,
  Stack,
  Title,
  Text,
  Badge,
  Card,
  SimpleGrid,
  Group,
  Button,
  Tabs,
  Box,
  Image,
  Modal,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
});

interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'cultural' | 'placements' | 'japan';
  tag: string;
  description: string;
  imgUrl: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'JLPT N5 Interactive Classroom Session',
    category: 'classroom',
    tag: 'Classroom',
    description: 'Students practicing Hiragana and Katakana stroke order and conversation drills.',
    imgUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g2',
    title: 'Japanese Shodo (Calligraphy) Workshop',
    category: 'cultural',
    tag: 'Cultural Event',
    description: 'Students experiencing traditional Japanese brush calligraphy with ink and washi paper.',
    imgUrl: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g3',
    title: 'Yukata & Kimono Cultural Celebration',
    category: 'cultural',
    tag: 'Cultural Event',
    description: 'Annual Japanese cultural day: wearing traditional Yukata and learning festival customs.',
    imgUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g4',
    title: 'Bilingual Engineers Placed at Japanese MNCs',
    category: 'placements',
    tag: 'Placement Success',
    description: 'Congratulating JLJ Institute students on joining automotive and IT Japanese corporations.',
    imgUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g5',
    title: 'Japanese Tea Ceremony (Chado) Workshop',
    category: 'cultural',
    tag: 'Cultural Event',
    description: 'Understanding the aesthetic principles of Wa-Kei-Sei-Jaku and Japanese hospitality.',
    imgUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g6',
    title: 'Send-off Ceremony for Students Departing to Tokyo',
    category: 'japan',
    tag: 'Study in Japan',
    description: 'Warm farewell to our student batch flying to Tokyo language schools on student visas.',
    imgUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g7',
    title: 'JLPT N3 Examination Mock Test Day',
    category: 'classroom',
    tag: 'JLPT Mock Test',
    description: 'Simulated examination hall with listening and reading paper practice.',
    imgUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g8',
    title: 'Origami & Japanese Etiquette Activity',
    category: 'cultural',
    tag: 'Cultural Event',
    description: 'Hands-on origami folding, chopstick manners, and Japanese business card exchange drills.',
    imgUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g9',
    title: 'Campus Life & Cherry Blossom Season in Tokyo',
    category: 'japan',
    tag: 'Japan Life',
    description: 'Our alumni students enjoying spring season at their Japanese language school campus.',
    imgUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  },
];

function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  const filtered = activeTab === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeTab);

  const handleCardClick = (item: GalleryItem) => {
    setSelectedImg(item);
    open();
  };

  return (
    <Box py={50}>
      <Container size="xl">
        <Stack align="center" ta="center" gap="xs" mb={40} maw={840} mx="auto">
          <Badge variant="filled" color="japaneseRed" size="md">
            CAMPUS & CULTURAL LIFE
          </Badge>
          <Title order={1} c="deepNavy.8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Institute Gallery
          </Title>
          <Text size="lg" c="gray.7">
            Catch glimpses of our vibrant classroom sessions, traditional Japanese cultural workshops, JLPT mock exam drives, and student placement celebrations.
          </Text>
        </Stack>

        <Tabs
          value={activeTab}
          onChange={(val) => setActiveTab(val || 'all')}
          color="japaneseRed"
          radius="md"
          mb={40}
        >
          <Tabs.List justify="center">
            <Tabs.Tab value="all">All Photos</Tabs.Tab>
            <Tabs.Tab value="classroom">Classroom Learning</Tabs.Tab>
            <Tabs.Tab value="cultural">Japanese Cultural Workshops</Tabs.Tab>
            <Tabs.Tab value="placements">Placements & Careers</Tabs.Tab>
            <Tabs.Tab value="japan">Study in Japan Life</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {filtered.map((item) => (
            <Card
              key={item.id}
              withBorder
              padding="md"
              radius="md"
              className="interactive-card"
              onClick={() => handleCardClick(item)}
              style={{ cursor: 'pointer', borderColor: '#E8E2D9' }}
            >
              <Card.Section>
                <Image
                  src={item.imgUrl}
                  height={220}
                  alt={item.title}
                  fallbackSrc="https://placehold.co/600x400/202C38/FFFFFF?text=JLJ+Institute"
                />
              </Card.Section>
              <Stack gap={4} mt="md">
                <Badge color="japaneseRed" variant="light" size="xs" w="fit-content">
                  {item.tag}
                </Badge>
                <Title order={4} c="deepNavy.8" lineClamp={1}>
                  {item.title}
                </Title>
                <Text size="xs" c="dimmed" lineClamp={2}>
                  {item.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        <Modal opened={opened} onClose={close} size="lg" centered title={selectedImg?.title}>
          {selectedImg && (
            <Stack gap="sm">
              <Image src={selectedImg.imgUrl} radius="md" />
              <Badge color="japaneseRed" size="sm">{selectedImg.tag}</Badge>
              <Text size="sm" c="gray.8">{selectedImg.description}</Text>
            </Stack>
          )}
        </Modal>
      </Container>
    </Box>
  );
}
