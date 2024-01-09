export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const result = Array.from(set)
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');

  return result;
}
