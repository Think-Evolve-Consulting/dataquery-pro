import type { TableNameType } from '@/types/TableNameType';

import { axios } from '.';

export const getTablesUpdatedDate = (tables: TableNameType[]) => {
  return tables.map((table) => {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(`/get-report-update-date?table_name=${table}`)
          .then((response) => {
            if (response?.status === 200 && response?.data?.last_update_date) {
              resolve({
                table,
                lastUpdatedAt: response?.data?.last_update_date,
              });
            }
          });
      } catch (error) {
        reject(error);
      }
    });
  });
};
