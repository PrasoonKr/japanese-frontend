import React from 'react';
import {
  Container,
  Group,
  Button,
  Box,
  Burger,
  Drawer,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useRouterState } from '@tanstack/react-router';
import { SITE_CONFIG } from '../../config/site';

interface NavLinkItem {
  label: string;
  to: string;
}

// Exactly the 8 required items from user specification:
// 1. Home
// 2. Courses
// 3. JLPT
// 4. Japanese language Jobs
// 5. Study in Japan
// 6. Accommodation
// 7. Gallery
// 8. Contact Us
// (Blog is not required)
const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'JLPT', to: '/jlpt' },
  { label: 'Japanese Language Jobs', to: '/jobs' },
  { label: 'Study in Japan', to: '/study-in-japan' },
  { label: 'Accommodation', to: '/accommodation' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
];

export const Header: React.FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <Box
      component="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #E8E2D9',
      }}
    >
      <Container size="xl" h={74}>
        <Group justify="space-between" h="100%" wrap="nowrap" gap="md">
          {/* Brand Logo: JLJ Institute / Japanese Language Jobs Services */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexShrink: 0 }}>
            <Group gap="xs" wrap="nowrap">
              <Box
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#B74736',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 900,
                  fontSize: 22,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  boxShadow: '0 2px 8px rgba(183, 71, 54, 0.25)',
                }}
              >
                {SITE_CONFIG.logoKanji}
              </Box>
              <Box>
                <Text fw={800} size="md" c="deepNavy.8" style={{ lineHeight: 1.15, letterSpacing: '-0.3px' }}>
                  {SITE_CONFIG.name}
                </Text>
                <Text size="10px" fw={700} c="japaneseRed.6" style={{ letterSpacing: '0.6px', textTransform: 'uppercase' }}>
                  {SITE_CONFIG.badgeSubtitle}
                </Text>
              </Box>
            </Group>
          </Link>

          {/* Desktop Navigation Links (All 8 Items) */}
          <Group gap={4} visibleFrom="xl" wrap="nowrap" style={{ flexShrink: 1 }}>
            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="subtle"
                    size="xs"
                    color={isActive ? 'japaneseRed' : 'deepNavy'}
                    style={{
                      fontWeight: isActive ? 700 : 500,
                      backgroundColor: isActive ? '#FDF2F0' : 'transparent',
                      padding: '0 10px',
                      fontSize: '13px',
                    }}
                  >
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </Group>

          {/* Action CTA */}
          <Group gap="xs" wrap="nowrap" style={{ flexShrink: 0 }}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="filled"
                color="japaneseRed"
                size="xs"
                visibleFrom="sm"
              >
                Enquire Now
              </Button>
            </Link>

            {/* Hamburger for mobile & tablet (below xl) */}
            <Burger opened={opened} onClick={toggle} hiddenFrom="xl" size="sm" />
          </Group>
        </Group>
      </Container>

      {/* Mobile & Tablet Navigation Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="md"
        padding="md"
        title={
          <Group gap="xs">
            <Box
              style={{
                width: 32,
                height: 32,
                backgroundColor: '#B74736',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              {SITE_CONFIG.logoKanji}
            </Box>
            <Box>
              <Text fw={700} size="sm" c="deepNavy.8">
                {SITE_CONFIG.name}
              </Text>
              <Text size="9px" fw={600} c="japaneseRed.6">
                {SITE_CONFIG.badgeSubtitle}
              </Text>
            </Box>
          </Group>
        }
      >
        <Stack gap="xs" mt="sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={close}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="subtle"
                fullWidth
                justify="flex-start"
                color={currentPath === link.to ? 'japaneseRed' : 'deepNavy'}
                style={{
                  fontWeight: currentPath === link.to ? 700 : 500,
                  backgroundColor: currentPath === link.to ? '#FDF2F0' : 'transparent',
                }}
              >
                {link.label}
              </Button>
            </Link>
          ))}

          <Box pt="md" style={{ borderTop: '1px solid #E8E2D9' }}>
            <Stack gap="sm">
              <Link to="/courses" onClick={close} style={{ textDecoration: 'none' }}>
                <Button fullWidth variant="outline" color="deepNavy">
                  Explore Japanese Courses
                </Button>
              </Link>
              <Link to="/jobs" onClick={close} style={{ textDecoration: 'none' }}>
                <Button fullWidth variant="outline" color="japaneseRed">
                  Browse Japanese Language Jobs
                </Button>
              </Link>
              <Link to="/contact" onClick={close} style={{ textDecoration: 'none' }}>
                <Button fullWidth variant="filled" color="japaneseRed">
                  Contact & Admission Enquiry
                </Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Drawer>
    </Box>
  );
};
