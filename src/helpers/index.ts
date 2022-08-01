import slugify from 'slugify';

export const pluralize = (
  singular: string,
  plural: string,
  count: number,
): string => (count === 1 ? singular : plural);

export const strToSlug = (str: string): string =>
  slugify(str, {
    remove: /[^0-9a-zA-Z\s]/gim,
    lower: true,
    trim: false,
  });

export const formatThousand = (value: number): string =>
  value >= 1000 ? `${Math.floor(value / 1000)}k` : String(value);

export const formatDate = (value: string, locale = 'pt-BR'): string =>
  new Date(value).toLocaleString(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

export const truncateString = (text: string, maxSize = 25): string =>
  text.length > maxSize ? `${text.substring(0, maxSize)}...` : text;

export const safeBranchName = (branchName: string): string =>
  branchName.replaceAll('/', '~');

export const parseBranchName = (branchName: string): string =>
  branchName.replaceAll('~', '/');
