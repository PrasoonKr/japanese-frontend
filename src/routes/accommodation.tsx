import React, { useState } from 'react';
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
  Button,
  ThemeIcon,
  List,
  TextInput,
  Select,
  Textarea,
  Box,
  Alert,
} from '@mantine/core';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  IconHome,
  IconBuildingCommunity,
  IconKey,
  IconCheck,
  IconShieldCheck,
  IconWifi,
  IconBed,
  IconBus,
} from '@tabler/icons-react';

export const Route = createFileRoute('/accommodation')({
  component: AccommodationPage,
});

const HousingSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(8, 'Phone number required'),
  housingLocation: z.string().min(1, 'Select location'),
  accommodationType: z.string().min(1, 'Select accommodation type'),
  expectedMoveIn: z.string().min(1, 'Move in date is required'),
  details: z.string().optional(),
});

type HousingValues = z.infer<typeof HousingSchema>;

function AccommodationPage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<HousingValues>({
    resolver: zodResolver(HousingSchema),
    defaultValues: {
      housingLocation: 'Tokyo / Greater Tokyo Area',
      accommodationType: 'Student Dormitory (Gakusei Kaikan)',
    }
  });

  const onSubmit = (values: HousingValues) => {
    setSubmitted(true);
  };

  return (
    <Box py={50}>
      <Container size="xl">
        {/* Header */}
        <Stack align="center" ta="center" gap="xs" mb={45} maw={840} mx="auto">
          <Badge variant="filled" color="japaneseRed" size="md">
            LIVING SUPPORT & HOUSING
          </Badge>
          <Title order={1} c="deepNavy.8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Accommodation & Living Assistance
          </Title>
          <Text size="lg" c="gray.7">
            Finding safe, affordable, and furnished accommodation in Japan or near our Indian training center is simple with JLJ Institute. We handle reservations, guarantor requirements, and lease coordination before you depart.
          </Text>
        </Stack>

        {/* Accommodation Options in Japan */}
        <Title order={2} c="deepNavy.8" mb="lg">
          Housing Options in Japan (Tokyo, Osaka, Kyoto & Nagoya)
        </Title>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mb={50}>
          {/* Option 1: Dorms */}
          <Card withBorder padding="xl" radius="md" className="interactive-card">
            <ThemeIcon size={48} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconBed size={26} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8" mb="xs">
              Student Dormitories (寮)
            </Title>
            <Text size="sm" c="gray.7" mb="md">
              Affordable, fully furnished student residences affiliated with language schools and universities. Ideal for first-time arrivals in Japan.
            </Text>
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon color="japaneseRed" size={18} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
              mb="md"
            >
              <List.Item>Bed, study desk, AC/heater & high-speed Wi-Fi included</List.Item>
              <List.Item>Option for breakfast & dinner meal plans</List.Item>
              <List.Item>Safe warden on-site & 24/7 security</List.Item>
              <List.Item>Cost: Approx. ¥40,000 – ¥65,000 / month</List.Item>
            </List>
          </Card>

          {/* Option 2: Share Houses */}
          <Card withBorder padding="xl" radius="md" className="interactive-card">
            <ThemeIcon size={48} radius="md" color="deepNavy" variant="light" mb="md">
              <IconBuildingCommunity size={26} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8" mb="xs">
              Multicultural Share Houses
            </Title>
            <Text size="sm" c="gray.7" mb="md">
              Private lockable bedroom with modern shared lounge, kitchen, and laundry. Live alongside Japanese locals and international students.
            </Text>
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon color="deepNavy" size={18} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
              mb="md"
            >
              <List.Item>Private room with shared kitchen & shower</List.Item>
              <List.Item>All utility bills (water, gas, electricity, internet) bundled</List.Item>
              <List.Item>No traditional Japanese guarantor required</List.Item>
              <List.Item>Cost: Approx. ¥45,000 – ¥75,000 / month</List.Item>
            </List>
          </Card>

          {/* Option 3: Private Rental */}
          <Card withBorder padding="xl" radius="md" className="interactive-card">
            <ThemeIcon size={48} radius="md" color="japaneseRed" variant="light" mb="md">
              <IconKey size={26} />
            </ThemeIcon>
            <Title order={3} c="deepNavy.8" mb="xs">
              Private Apartments (アパート)
            </Title>
            <Text size="sm" c="gray.7" mb="md">
              Independent living for working professionals, engineers, and families moving to Japan with long-term employment contracts.
            </Text>
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon color="japaneseRed" size={18} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
              mb="md"
            >
              <List.Item>Complete privacy with personal kitchen & bath</List.Item>
              <List.Item>Foreigner-friendly rental contracts with zero gift money (Reikin)</List.Item>
              <List.Item>Institutional guarantor company coordination</List.Item>
              <List.Item>Cost: Approx. ¥60,000 – ¥110,000+ / month</List.Item>
            </List>
          </Card>
        </SimpleGrid>

        {/* What JLJ Institute Provides */}
        <Card withBorder padding="xl" radius="md" mb={50} style={{ backgroundColor: '#202C38', color: '#FFF' }}>
          <Title order={3} c="#FFF" ta="center" mb="lg">
            Complete Settlement & Relocation Assistance
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            <Box ta="center">
              <ThemeIcon size={46} radius="md" color="japaneseRed" variant="filled" mx="auto" mb="sm">
                <IconHome size={24} />
              </ThemeIcon>
              <Text fw={700} size="sm" c="#FFF">
                Pre-Arrival Booking
              </Text>
              <Text size="xs" c="gray.4" mt={4}>
                Your room is reserved and confirmed before you board your flight from India.
              </Text>
            </Box>

            <Box ta="center">
              <ThemeIcon size={46} radius="md" color="japaneseRed" variant="filled" mx="auto" mb="sm">
                <IconBus size={24} />
              </ThemeIcon>
              <Text fw={700} size="sm" c="#FFF">
                Airport Pickup Service
              </Text>
              <Text size="xs" c="gray.4" mt={4}>
                Airport transfer reception at Narita / Haneda directly to your accommodation.
              </Text>
            </Box>

            <Box ta="center">
              <ThemeIcon size={46} radius="md" color="japaneseRed" variant="filled" mx="auto" mb="sm">
                <IconShieldCheck size={24} />
              </ThemeIcon>
              <Text fw={700} size="sm" c="#FFF">
                City Ward Registration
              </Text>
              <Text size="xs" c="gray.4" mt={4}>
                Assistance with Resident Registration (Juminhyo) and National Health Insurance.
              </Text>
            </Box>

            <Box ta="center">
              <ThemeIcon size={46} radius="md" color="japaneseRed" variant="filled" mx="auto" mb="sm">
                <IconWifi size={24} />
              </ThemeIcon>
              <Text fw={700} size="sm" c="#FFF">
                Bank & SIM Card Setup
              </Text>
              <Text size="xs" c="gray.4" mt={4}>
                Opening Yucho Bank account and Japanese mobile voice/data connection.
              </Text>
            </Box>
          </SimpleGrid>
        </Card>

        {/* Domestic Hostel / PG in India */}
        <Card withBorder padding="lg" radius="md" mb={50} style={{ borderColor: '#E8E2D9' }}>
          <Group justify="space-between" align="center" wrap="wrap">
            <Stack gap={4} maw={700}>
              <Title order={3} c="deepNavy.8">
                Outstation Students in India? PG Support in Delhi NCR
              </Title>
              <Text size="sm" c="gray.7">
                Coming from outside Delhi NCR to study full-time Japanese at our Gurugram / Faridabad centers? We have verified partnerships with paying guest (PG) hostels within walking distance of the metro.
              </Text>
            </Stack>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button color="deepNavy" size="sm">
                Enquire for NCR Hostels
              </Button>
            </Link>
          </Group>
        </Card>

        {/* Housing Request Form */}
        <Card withBorder padding="xl" radius="md" style={{ borderColor: '#E8E2D9' }}>
          <Title order={2} c="deepNavy.8" mb="xs">
            Accommodation Assistance Form
          </Title>
          <Text size="sm" c="dimmed" mb="lg">
            Let us know your destination and preferred accommodation type. Our liaison officer will assist you with pricing and reservations.
          </Text>

          {submitted ? (
            <Alert icon={<IconCheck size={20} />} title="Housing Request Logged" color="teal">
              Thank you! Our housing coordinator will connect with you via WhatsApp/Email with available room options and pictures.
            </Alert>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                <TextInput
                  label="Full Name"
                  placeholder="Your Name"
                  withAsterisk
                  {...register('fullName')}
                  error={errors.fullName?.message}
                />
                <TextInput
                  label="Email Address"
                  placeholder="name@example.com"
                  withAsterisk
                  {...register('email')}
                  error={errors.email?.message}
                />
                <TextInput
                  label="Phone / WhatsApp Number"
                  placeholder="+91 98765 43210"
                  withAsterisk
                  {...register('phone')}
                  error={errors.phone?.message}
                />
                <Select
                  label="Target City"
                  data={[
                    { value: 'Tokyo / Greater Tokyo Area', label: 'Tokyo / Greater Tokyo Area (Japan)' },
                    { value: 'Osaka / Kyoto / Kobe', label: 'Osaka / Kyoto / Kobe (Japan)' },
                    { value: 'Nagoya / Aichi', label: 'Nagoya / Aichi (Japan)' },
                    { value: 'Fukuoka / Kyushu', label: 'Fukuoka / Kyushu (Japan)' },
                    { value: 'Delhi NCR (Near JLJ Institute)', label: 'Delhi NCR (Near JLJ Institute Center)' },
                  ]}
                  defaultValue="Tokyo / Greater Tokyo Area"
                  onChange={(val) => setValue('housingLocation', val || 'Tokyo / Greater Tokyo Area')}
                />
                <Select
                  label="Preferred Accommodation Type"
                  data={[
                    { value: 'Student Dormitory (Gakusei Kaikan)', label: 'Student Dormitory (Gakusei Kaikan)' },
                    { value: 'Share House (Private Room)', label: 'Share House (Private Room with shared kitchen)' },
                    { value: 'Private 1K / 1DK Apartment', label: 'Private Apartment (1K / 1DK)' },
                    { value: 'Student PG Hostel in Delhi NCR', label: 'Student PG Hostel in Delhi NCR' },
                  ]}
                  defaultValue="Student Dormitory (Gakusei Kaikan)"
                  onChange={(val) => setValue('accommodationType', val || 'Student Dormitory (Gakusei Kaikan)')}
                />
                <TextInput
                  label="Expected Move-in Month / Year"
                  placeholder="e.g. March 2027 or October 2026"
                  withAsterisk
                  {...register('expectedMoveIn')}
                  error={errors.expectedMoveIn?.message}
                />
              </SimpleGrid>

              <Textarea
                label="Special Preferences (Budget, Near Metro, Meal Requirement, etc.)"
                placeholder="Mention budget per month or school/office location in Japan..."
                rows={3}
                mt="md"
                {...register('details')}
              />

              <Button type="submit" color="japaneseRed" size="md" mt="lg">
                Submit Housing Request
              </Button>
            </form>
          )}
        </Card>
      </Container>
    </Box>
  );
}
