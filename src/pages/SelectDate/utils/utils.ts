export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? '오후' : '오전';
  const hour12 = hours % 12 || 12;
  return `${period} ${hour12}:${minutes.toString().padStart(2, '0')}`;
}
