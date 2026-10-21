import { createTheme, MantineColorsTuple } from '@mantine/core';

// Custom Japanese Red palette based on #B74736
const japaneseRed: MantineColorsTuple = [
  '#FDF2F0',
  '#F9DFDC',
  '#F3BCB5',
  '#EC958A',
  '#E47264',
  '#B74736', // Primary shade 5
  '#9E3728',
  '#842C1E',
  '#6B2217',
  '#531910'
];

// Deep Navy palette based on #202C38
const deepNavy: MantineColorsTuple = [
  '#F0F3F6',
  '#DCE3EA',
  '#BAC8D4',
  '#93AABD',
  '#6C8CA5',
  '#4B6E8C',
  '#35526C',
  '#202C38', // Secondary shade 7
  '#151F28',
  '#0B1218'
];

export const theme = createTheme({
  primaryColor: 'japaneseRed',
  primaryShade: 5,
  colors: {
    japaneseRed,
    deepNavy,
  },
  fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: '700',
  },
  defaultRadius: 'md',
  cursorType: 'pointer',
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
        size: 'sm',
      },
      styles: {
        root: {
          fontWeight: 600,
          transition: 'all 0.2s ease',
        },
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        withBorder: true,
      },
      styles: {
        root: {
          backgroundColor: '#FFFFFF',
          borderColor: '#E8E2D9',
        },
      },
    },
    Badge: {
      defaultProps: {
        radius: 'sm',
      },
    },
    TextInput: {
      styles: {
        input: {
          borderColor: '#E0D9CE',
          '&:focus': {
            borderColor: '#B74736',
          },
        },
      },
    },
    Select: {
      styles: {
        input: {
          borderColor: '#E0D9CE',
          '&:focus': {
            borderColor: '#B74736',
          },
        },
      },
    },
  },
});
