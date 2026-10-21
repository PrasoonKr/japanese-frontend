import React from 'react';
import { Badge, Tooltip } from '@mantine/core';
import { JlptLevel } from '../../types/job.types';

interface BadgeJlptProps {
  level: JlptLevel;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'light' | 'outline';
}

export const BadgeJlpt: React.FC<BadgeJlptProps> = ({
  level,
  size = 'sm',
  variant = 'light',
}) => {
  const getMeta = () => {
    switch (level) {
      case 'N1':
        return { label: 'JLPT N1', color: 'dark', tip: 'Advanced / Native-level business fluency' };
      case 'N2':
        return { label: 'JLPT N2', color: 'japaneseRed', tip: 'Business professional Japanese' };
      case 'N3':
        return { label: 'JLPT N3', color: 'indigo', tip: 'Intermediate conversational Japanese' };
      case 'N4':
        return { label: 'JLPT N4', color: 'teal', tip: 'Basic daily & workplace communication' };
      case 'N5':
        return { label: 'JLPT N5', color: 'gray', tip: 'Beginner foundation Japanese' };
      default:
        return { label: 'JLPT Open', color: 'blue', tip: 'Open to all Japanese levels' };
    }
  };

  const meta = getMeta();

  return (
    <Tooltip label={meta.tip} withArrow position="top">
      <Badge
        color={meta.color}
        variant={variant}
        size={size}
        style={{ fontWeight: 700, letterSpacing: '0.5px' }}
      >
        {meta.label}
      </Badge>
    </Tooltip>
  );
};
