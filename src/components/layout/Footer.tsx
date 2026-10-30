import React from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  Title,
  Text,
  Group,
  Divider,
} from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { SITE_CONFIG } from '../../config/site';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: '#202C38',
        color: '#DCE3EA',
        paddingTop: 60,
        paddingBottom: 30,
        borderTop: '3px solid #B74736',
      }}
    >
      <Container size="xl">
        <Grid gutter={40}>
          {/* Brand Info */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="sm">
              <Group gap="xs">
                <Box
                  style={{
                    width: 38,
                    height: 38,
                    backgroundColor: '#B74736',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF',
                    fontWeight: 800,
                    fontSize: 20,
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  {SITE_CONFIG.logoKanji}
                </Box>
                <Box>
                  <Title order={4} c="#FFF" style={{ letterSpacing: '-0.2px' }}>
                    {SITE_CONFIG.name}
                  </Title>
                  <Text size="11px" fw={700} c="japaneseRed.4" style={{ textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                    {SITE_CONFIG.badgeSubtitle}
                  </Text>
                </Box>
              </Group>
              <Text size="sm" c="gray.4" style={{ lineHeight: 1.6 }}>
                Premier Japanese language institute offering certified JLPT training (N5–N1), study visa assistance, student accommodation, and bilingual recruitment connecting talent with Japanese multinational corporations.
              </Text>
            </Stack>
          </Grid.Col>

          {/* Training & JLPT */}
          <Grid.Col span={{ base: 6, sm: 4, md: 2 }}>
            <Stack gap="xs">
              <Text fw={700} size="sm" c="#FFF">
                Language & JLPT
              </Text>
              <Link to="/courses" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">All Courses</Text>
              </Link>
              <Link to="/courses" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">N5 Beginner Course</Text>
              </Link>
              <Link to="/courses" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">N4 & N3 Courses</Text>
              </Link>
              <Link to="/courses" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Business Kaiwa</Text>
              </Link>
              <Link to="/jlpt" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">JLPT Exam Guide</Text>
              </Link>
            </Stack>
          </Grid.Col>

          {/* Japan Pathways */}
          <Grid.Col span={{ base: 6, sm: 4, md: 2 }}>
            <Stack gap="xs">
              <Text fw={700} size="sm" c="#FFF">
                Japan Pathways
              </Text>
              <Link to="/jobs" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Japanese Language Jobs</Text>
              </Link>
              <Link to="/study-in-japan" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Study in Japan</Text>
              </Link>
              <Link to="/accommodation" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Accommodation Support</Text>
              </Link>
              <Link to="/gallery" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Institute Gallery</Text>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Contact Us</Text>
              </Link>
            </Stack>
          </Grid.Col>

          {/* Contact Details */}
          <Grid.Col span={{ base: 12, sm: 4, md: 4 }}>
            <Stack gap="xs">
              <Text fw={700} size="sm" c="#FFF">
                Centres & Contact
              </Text>
              <Group gap="xs" align="flex-start">
                <IconMapPin size={16} color="#B74736" style={{ marginTop: 3, flexShrink: 0 }} />
                <Text size="sm" c="gray.4">
                  {SITE_CONFIG.locations[0].city}: {SITE_CONFIG.locations[0].address}
                </Text>
              </Group>
              <Group gap="xs">
                <IconMail size={16} color="#B74736" style={{ flexShrink: 0 }} />
                <Text size="sm" c="gray.4">
                  {SITE_CONFIG.contactEmail}
                </Text>
              </Group>
              <Group gap="xs">
                <IconPhone size={16} color="#B74736" style={{ flexShrink: 0 }} />
                <Text size="sm" c="gray.4">
                  {SITE_CONFIG.contactPhone} / {SITE_CONFIG.alternatePhone}
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my={30} color="#35526C" />

        {/* Bottom Bar */}
        <Group justify="space-between" align="center" wrap="wrap">
          <Text size="xs" c="gray.5">
            © {new Date().getFullYear()} {SITE_CONFIG.name} ({SITE_CONFIG.badgeSubtitle}). All rights reserved.
          </Text>
          <Group gap="lg">
            <Link to="/courses" style={{ textDecoration: 'none', color: '#BAC8D4', fontSize: '12px' }}>
              Courses
            </Link>
            <Link to="/jlpt" style={{ textDecoration: 'none', color: '#BAC8D4', fontSize: '12px' }}>
              JLPT
            </Link>
            <Link to="/jobs" style={{ textDecoration: 'none', color: '#BAC8D4', fontSize: '12px' }}>
              Jobs
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#BAC8D4', fontSize: '12px' }}>
              Contact Us
            </Link>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
