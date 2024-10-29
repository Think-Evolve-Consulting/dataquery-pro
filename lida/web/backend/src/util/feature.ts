const MASTER_COMPANY_NAME = 'dev';

export const isMasterCompany = (companyName?: string) =>
  companyName && companyName.toLowerCase() == MASTER_COMPANY_NAME.toLowerCase();
