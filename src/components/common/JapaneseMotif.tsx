import React from 'react';
import { Box, BoxProps } from '@mantine/core';

interface JapaneseMotifProps extends BoxProps {
  opacity?: number;
  pattern?: 'asanoha' | 'shippo' | 'wave';
}

export const JapaneseMotif: React.FC<JapaneseMotifProps> = ({
  opacity = 0.035,
  pattern = 'asanoha',
  style,
  ...props
}) => {
  return (
    <Box
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        opacity,
        overflow: 'hidden',
        backgroundImage:
          pattern === 'asanoha'
            ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30zM30 15L15 30l15 15 15-15z' fill='%23B74736' fill-opacity='1' fill-rule='evenodd' stroke='%23B74736' stroke-width='1'/%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='18' stroke='%23202C38' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        ...style,
      }}
      {...props}
    />
  );
};
