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
import { IconMail, IconPhone, IconMapPin, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
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
                    width: 36,
                    height: 36,
                    backgroundColor: '#B74736',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF',
                    fontWeight: 700,
                    fontSize: 18,
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  {SITE_CONFIG.logoKanji}
                </Box>
                <Title order={4} c="#FFF" style={{ letterSpacing: '-0.2px' }}>
                  {SITE_CONFIG.name}
                </Title>
              </Group>
              <Text size="sm" c="gray.4" style={{ lineHeight: 1.6 }}>
                Specialized recruitment and language consultancy bridging bilingual professionals with Japanese MNCs and global enterprises across India and Japan.
              </Text>
              <Text size="xs" c="gray.5" mt={4}>
                Sample vacancies & corporate profiles are provided for layout and workflow demonstration.
              </Text>
            </Stack>
          </Grid.Col>

          {/* Quick Links */}
          <Grid.Col span={{ base: 6, sm: 4, md: 2 }}>
            <Stack gap="xs">
              <Text fw={700} size="sm" c="#FFF">
                For Job Seekers
              </Text>
              <Link to="/jobs" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Search Jobs</Text>
              </Link>
              <Link to="/career-support" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">JLPT Career Guide</Text>
              </Link>
              <Link to="/career-support" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Japanese CV Tips</Text>
              </Link>
              <Link to="/services" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Candidate Services</Text>
              </Link>
            </Stack>
          </Grid.Col>

          {/* For Employers */}
          <Grid.Col span={{ base: 6, sm: 4, md: 2 }}>
            <Stack gap="xs">
              <Text fw={700} size="sm" c="#FFF">
                For Employers
              </Text>
              <Link to="/employers" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Hire Talent</Text>
              </Link>
              <Link to="/services" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Recruitment Solutions</Text>
              </Link>
              <Link to="/services" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Corporate Training</Text>
              </Link>
              <Link to="/services" style={{ textDecoration: 'none', color: '#BAC8D4' }}>
                <Text size="sm">Interpretation Services</Text>
              </Link>
            </Stack>
          </Grid.Col>

          {/* Contact Details */}
          <Grid.Col span={{ base: 12, sm: 4, md: 4 }}>
            <Stack gap="xs">
              <Text fw={700} size="sm" c="#FFF">
                Office & Contact
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
                  {SITE_CONFIG.contactPhone}
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my={30} color="#35526C" />

        {/* Bottom Bar */}
        <Group justify="space-between" align="center" wrap="wrap">
          <Text size="xs" c="gray.5">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </Text>
          <Group gap="lg">
            <Link to="/about" style={{ textDecoration: 'none', color: '#BAC8D4', fontSize: '12px' }}>
              About Us
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#BAC8D4', fontSize: '12px' }}>
              Contact
            </Link>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
