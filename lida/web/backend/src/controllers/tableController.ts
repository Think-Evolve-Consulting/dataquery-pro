import { Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import { GRNModel } from '../models/grnModel';

import XLSX from 'xlsx';
import { sequelize } from '../models';

function convertExcelDate(excelDate: number) {
  if (excelDate) {
    const date = new Date((excelDate - 25569) * 86400 * 1000);
    return date;
  }
}

export class TableController {
  public getLastUpdateAtByTableName = {
    controller: async (req: Request, res: Response) => {
      try {
        const tableName = req.params?.tableName;

        const query = `Select date(update_time) as Last_update_date from information_schema.tables where table_schema = 'bpd' and table_name = '${tableName}';`;

        const response: any = await sequelize.query(query);

        const lastUpdateAt = response?.[0]?.[0]?.Last_update_date;

        if (!lastUpdateAt) {
          return res.send({
            status: 'FAILED',
            message: 'Something went wrong',
          });
        }

        return res.send({
          status: 'SUCCESS',
          lastUpdateAt,
        });

        // const file: UploadedFile = files?.file;

        // if (file) {
        //   // Determine file type based on extension
        //   const fileType = file?.name?.split('.')?.pop()?.toLowerCase();

        //   if (fileType === 'xlsx' || fileType === 'xls' || fileType === 'csv') {
        //     let jsonData: {
        //       'SL No': number;
        //       Plant: number;
        //       'Storage Location': number;
        //       'Movement Type': number;
        //       'Material Code': number;
        //       'Material Description': string;
        //       Batch: string;
        //       'Material Document': number;
        //       'Document Date'?: string | Date;
        //       UOM: string;
        //       QTY: number;
        //       'Posting Date'?: string | Date;
        //       'Amount in LC': number;
        //       'Purchase Order': number;
        //       'WBS Element': string;
        //       'Financial Year': string;
        //       'Catalog Number': string;
        //     }[] = [];

        //     // Read Excel file
        //     const workbook = XLSX.read(file.data);
        //     const sheetName = workbook.SheetNames[0];
        //     jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        //     jsonData = jsonData.map((row) => {
        //       // Assuming 'Document Date', 'Posting Date', etc. are the date columns
        //       if (
        //         row['Document Date'] &&
        //         typeof row['Document Date'] === 'number'
        //       ) {
        //         row['Document Date'] = convertExcelDate(row['Document Date']);
        //       }
        //       if (
        //         row['Posting Date'] &&
        //         typeof row['Posting Date'] === 'number'
        //       ) {
        //         row['Posting Date'] = convertExcelDate(row['Posting Date']);
        //       }
        //       // Add additional date columns here as needed
        //       return row;
        //     });

        //     if (jsonData?.length) {
        //       await GRNModel.bulkCreate(jsonData);

        //       res.send({
        //         count: jsonData?.length,
        //         message: 'Data upload successfully',
        //         status: 'SUCCESS',
        //       });
        //     } else {
        //       return res.status(400).send('Data not found');
        //     }
        //   } else {
        //     return res
        //       .status(400)
        //       .send('Invalid file type: Only CSV and Excel files are allowed.');
        //   }
        // }
      } catch (error: any) {
        console.error('Error in file upload:', error.message);
        res.status(500).send('An error occurred while processing the file.');
      }
    },
  };

  public uploadGrmFile = {
    controller: async (req: Request, res: Response) => {
      try {
        // Check if files are present
        if (!req.files || !req.files.file) {
          return res.status(400).send('No files were uploaded.');
        }

        const files: any = req.files;

        const file: UploadedFile = files?.file;

        if (file) {
          // Determine file type based on extension
          const fileType = file?.name?.split('.')?.pop()?.toLowerCase();

          if (fileType === 'xlsx' || fileType === 'xls' || fileType === 'csv') {
            let jsonData: {
              'SL No': number;
              Plant: number;
              'Storage Location': number;
              'Movement Type': number;
              'Material Code': number;
              'Material Description': string;
              Batch: string;
              'Material Document': number;
              'Document Date'?: string | Date;
              UOM: string;
              QTY: number;
              'Posting Date'?: string | Date;
              'Amount in LC': number;
              'Purchase Order': number;
              'WBS Element': string;
              'Financial Year': string;
              'Catalog Number': string;
            }[] = [];

            // Read Excel file
            const workbook = XLSX.read(file.data);
            const sheetName = workbook.SheetNames[0];
            jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

            jsonData = jsonData.map((row) => {
              // Assuming 'Document Date', 'Posting Date', etc. are the date columns
              if (
                row['Document Date'] &&
                typeof row['Document Date'] === 'number'
              ) {
                row['Document Date'] = convertExcelDate(row['Document Date']);
              }
              if (
                row['Posting Date'] &&
                typeof row['Posting Date'] === 'number'
              ) {
                row['Posting Date'] = convertExcelDate(row['Posting Date']);
              }
              // Add additional date columns here as needed
              return row;
            });

            if (jsonData?.length) {
              await GRNModel.bulkCreate(jsonData);

              res.send({
                count: jsonData?.length,
                message: 'Data upload successfully',
                status: 'SUCCESS',
              });
            } else {
              return res.status(400).send('Data not found');
            }
          } else {
            return res
              .status(400)
              .send('Invalid file type: Only CSV and Excel files are allowed.');
          }
        }
      } catch (error: any) {
        console.error('Error in file upload:', error.message);
        res.status(500).send('An error occurred while processing the file.');
      }
    },
  };
}
