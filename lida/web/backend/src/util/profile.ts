export const env = process.env.NODE_ENV || 'local';

export const isLocal = () => env === 'local';
