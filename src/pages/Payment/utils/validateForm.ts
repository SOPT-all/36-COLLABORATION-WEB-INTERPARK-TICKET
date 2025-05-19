export function validateForm(
  name: string,
  birthdate: string,
  phone: string
): boolean {
  return (
    name.trim() !== '' &&
    birthdate.trim() !== '' &&
    phone.trim() !== '' &&
    phone.length >= 12
  );
}
