import { JlptLevel } from '../types/job.types';

export function formatSalary(min?: number, max?: number, currency = 'INR', period = 'Annual'): string {
  if (!min && !max) return 'Salary Undisclosed / Competitive';
  
  const formatNum = (num: number) => {
    if (currency === 'INR') {
      if (num >= 100000) {
        return `₹${(num / 100000).toFixed(1)} Lakh`;
      }
      return `₹${num.toLocaleString('en-IN')}`;
    }
    if (currency === 'JPY') {
      return `¥${(num / 10000).toFixed(0)}万`;
    }
    return `${currency} ${num.toLocaleString()}`;
  };

  if (min && max) {
    return `${formatNum(min)} - ${formatNum(max)} / ${period === 'Annual' ? 'yr' : 'mo'}`;
  }
  if (min) {
    return `From ${formatNum(min)} / ${period === 'Annual' ? 'yr' : 'mo'}`;
  }
  return `Up to ${formatNum(max!)} / ${period === 'Annual' ? 'yr' : 'mo'}`;
}

export function getJlptBadgeColor(level: JlptLevel): string {
  switch (level) {
    case 'N1':
      return 'dark'; // Deep dark for top level
    case 'N2':
      return 'japaneseRed'; // Primary brand red
    case 'N3':
      return 'indigo';
    case 'N4':
      return 'teal';
    case 'N5':
      return 'gray';
    default:
      return 'blue';
  }
}
