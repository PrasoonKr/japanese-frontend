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

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Find Jobs', to: '/jobs' },
  { label: 'Services', to: '/services' },
  { label: 'For Employers', to: '/employers' },
  { label: 'Career Support', to: '/career-support' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
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
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #E8E2D9',
      }}
    >
      <Container size="xl" h={72}>
        <Group justify="space-between" h="100%" wrap="nowrap" gap="md">
          {/* Brand Logo */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexShrink: 0 }}>
            <Group gap="xs" wrap="nowrap">
              <Box
                style={{
                  width: 38,
                  height: 38,
                  backgroundColor: '#B74736',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: 20,
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
                <Text size="10px" fw={600} c="japaneseRed.6" style={{ letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                  {SITE_CONFIG.badgeSubtitle}
                </Text>
              </Box>
            </Group>
          </Link>

          {/* Desktop Navigation Links */}
          <Group gap={6} visibleFrom="lg" wrap="nowrap" style={{ flexShrink: 1 }}>
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
                    size="sm"
                    color={isActive ? 'japaneseRed' : 'deepNavy'}
                    style={{
                      fontWeight: isActive ? 700 : 500,
                      backgroundColor: isActive ? '#FDF2F0' : 'transparent',
                      padding: '0 12px',
                    }}
                  >
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </Group>

          {/* Clean Right Actions - No Overlap */}
          <Group gap="sm" wrap="nowrap" style={{ flexShrink: 0 }}>
            <Link to="/jobs" style={{ textDecoration: 'none' }}>
              <Button
                variant="subtle"
                color="deepNavy"
                size="sm"
                visibleFrom="xl"
              >
                Browse Jobs
              </Button>
            </Link>

            <Link to="/employers" style={{ textDecoration: 'none' }}>
              <Button
                variant="filled"
                color="japaneseRed"
                size="sm"
                visibleFrom="sm"
              >
                Hire Talent
              </Button>
            </Link>

            {/* Mobile / Tablet Hamburger Menu */}
            <Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="sm" />
          </Group>
        </Group>
      </Container>

      {/* Mobile Drawer Navigation */}
      <Drawer
        opened={opened}
        onClose={close}
        size="md"
        padding="md"
        title={
          <Group gap="xs">
            <Box
              style={{
                width: 28,
                height: 28,
                backgroundColor: '#B74736',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {SITE_CONFIG.logoKanji}
            </Box>
            <Text fw={700} size="sm" c="deepNavy.8">
              {SITE_CONFIG.name}
            </Text>
          </Group>
        }
      >
        <Stack gap="xs" mt="sm">
          <Link to="/" onClick={close} style={{ textDecoration: 'none' }}>
            <Button
              variant="subtle"
              fullWidth
              justify="flex-start"
              color={currentPath === '/' ? 'japaneseRed' : 'deepNavy'}
              style={{ fontWeight: currentPath === '/' ? 700 : 500 }}
            >
              Home
            </Button>
          </Link>

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
              <Link to="/jobs" onClick={close} style={{ textDecoration: 'none' }}>
                <Button fullWidth variant="outline" color="deepNavy">
                  Explore Open Jobs
                </Button>
              </Link>
              <Link to="/employers" onClick={close} style={{ textDecoration: 'none' }}>
                <Button fullWidth variant="filled" color="japaneseRed">
                  Hire Bilingual Talent
                </Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Drawer>
    </Box>
  );
};
