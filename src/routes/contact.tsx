import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import {
  Container,
  Grid,
  Stack,
  Title,
  Text,
  Badge,
  Card,
  TextInput,
  Textarea,
  Button,
  Box,
  Group,
  ThemeIcon,
  Alert,
} from '@mantine/core';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconCheck,
  IconAlertCircle,
} from '@tabler/icons-react';
import { useContactEnquiry } from '../hooks/useEmployerEnquiry';
import { SITE_CONFIG } from '../config/site';

const ContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  const mutation = useContactEnquiry();
  const [successMsg, setSuccessMsg] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await mutation.mutateAsync(values);
      setSuccessMsg(true);
      reset();
    } catch (err) {}
  };

  return (
    <Box py={60}>
      <Container size="xl">
        <Stack align="center" ta="center" gap="xs" mb={50} maw={720} mx="auto">
          <Badge variant="outline" color="japaneseRed" size="sm">
            GET IN TOUCH
          </Badge>
          <Title order={1} c="deepNavy.8">
            Contact & Consultation
          </Title>
          <Text size="lg" c="gray.7">
            Have questions about candidate placements, corporate hiring, or Japanese language training? Reach out to our specialized advisory team.
          </Text>
        </Stack>

        <Grid gutter={40}>
          {/* Form */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Card withBorder padding="xl" radius="md" style={{ borderColor: '#E8E2D9' }}>
              <Title order={3} c="deepNavy.8" mb="sm">
                Send a Message
              </Title>

              {successMsg ? (
                <Alert icon={<IconCheck size={18} />} title="Message Sent" color="teal">
                  Thank you! Your message has been received. Our team will get back to you shortly.
                </Alert>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack gap="md">
                    {mutation.isError && (
                      <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red">
                        Could not send message. Please try again.
                      </Alert>
                    )}

                    <Group grow align="flex-start">
                      <TextInput
                        label="Your Name"
                        placeholder="e.g. Priyanshu Roy"
                        withAsterisk
                        {...register('name')}
                        error={errors.name?.message}
                      />
                      <TextInput
                        label="Email Address"
                        placeholder="name@example.com"
                        withAsterisk
                        {...register('email')}
                        error={errors.email?.message}
                      />
                    </Group>

                    <TextInput
                      label="Subject"
                      placeholder="e.g. Enquiry about JLPT N2 Recruitment"
                      withAsterisk
                      {...register('subject')}
                      error={errors.subject?.message}
                    />

                    <Textarea
                      label="Message Details"
                      placeholder="How can we assist your career or business?"
                      rows={5}
                      withAsterisk
                      {...register('message')}
                      error={errors.message?.message}
                    />

                    <Button type="submit" size="md" color="japaneseRed" loading={mutation.isPending}>
                      Send Message
                    </Button>
                  </Stack>
                </form>
              )}
            </Card>
          </Grid.Col>

          {/* Contact Details */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="lg">
              {SITE_CONFIG.locations.map((loc, idx) => (
                <Card key={idx} withBorder padding="lg" radius="md">
                  <Group gap="xs" mb="xs">
                    <ThemeIcon color="japaneseRed" size={28} radius="md">
                      <IconMapPin size={16} />
                    </ThemeIcon>
                    <Text fw={700} size="sm" c="deepNavy.8">
                      {loc.city} ({loc.country})
                    </Text>
                  </Group>
                  <Text size="xs" c="gray.7">
                    {loc.address}
                  </Text>
                </Card>
              ))}

              <Card withBorder padding="lg" radius="md">
                <Stack gap="xs">
                  <Group gap="xs">
                    <ThemeIcon color="deepNavy" size={28} radius="md">
                      <IconMail size={16} />
                    </ThemeIcon>
                    <Text size="sm" fw={600} c="deepNavy.8">
                      {SITE_CONFIG.contactEmail}
                    </Text>
                  </Group>
                  <Group gap="xs">
                    <ThemeIcon color="deepNavy" size={28} radius="md">
                      <IconPhone size={16} />
                    </ThemeIcon>
                    <Text size="sm" fw={600} c="deepNavy.8">
                      {SITE_CONFIG.contactPhone}
                    </Text>
                  </Group>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
