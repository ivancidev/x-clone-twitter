import { format, formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  const timeAgo = formatDistanceToNow(parsedDate, {
    addSuffix: true,
    locale: enUS,
  });
  const fullDate = format(parsedDate, 'd MMM yyyy', { locale: enUS });
  return { timeAgo, fullDate };
};
