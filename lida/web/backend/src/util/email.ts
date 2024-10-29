const EMAIL_DELIMITER = '@';
export const getCompanyDomain = (email?: string): string => {
  return email?.split(EMAIL_DELIMITER)[1] ?? '';
};
