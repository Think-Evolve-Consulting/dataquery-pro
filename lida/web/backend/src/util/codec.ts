export const encodeBase64 = (decoded: string) => Buffer.from(decoded, 'utf8').toString('base64');
export const decodeBase64 = (encoded: string) => Buffer.from(encoded, 'base64').toString('utf8');
