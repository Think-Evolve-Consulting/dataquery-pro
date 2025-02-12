import type { NextApiRequest, NextApiResponse } from 'next';

import type { AppConfigrationType } from '@/types/AppConfigrationType';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const data: AppConfigrationType = {
    API_ENDPOINT: process?.env?.API_ENDPOINT || '',
    DASHBOARD_URL: process?.env?.DASHBOARD_URL || '',
    YOUTUBE_CLM_VIDEO: process?.env?.YOUTUBE_CLM_VIDEO || '',
    YOUTUBE_GET_INSIGHTS_VIDEO: process?.env?.YOUTUBE_GET_INSIGHTS_VIDEO || '',
    YOUTUBE_GET_TECO_VIDEO: process?.env?.YOUTUBE_GET_TECO_VIDEO || '',
    YOUTUBE_GET_CATCODE_VIDEO: process?.env?.YOUTUBE_GET_CATCODE_VIDEO || '',
    YOUTUBE_GET_STOCK_UPLOAD: process?.env?.YOUTUBE_GET_STOCK_UPLOAD || '',
    YOUTUBE_GET_MATDESC_VIDEO: process?.env?.YOUTUBE_GET_MATDESC_VIDEO || '',
    YOUTUBE_GET_PURCHASE_VIDEO: process?.env?.YOUTUBE_GET_PURCHASE_VIDEO || '',
    YOUTUBE_GET_MATCODE_VIDEO: process?.env?.YOUTUBE_GET_MATCODE_VIDEO || '',
  };

  res.status(200).json(data);
}
