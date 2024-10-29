// import { Transaction } from 'sequelize';
// import { Quotations, sequelize } from '../models';
// import {
//   ContractAttributes,
//   Contracts,
//   CreateContractDTO,
//   EditContractDTO,
//   InvoiceStatus,
//   SearchContractDTO,
// } from '../models/grnModel';

// export default class GrmService {
//   public getContractByQuotationID = async (quotationId: string) => {
//     // return await Contracts.findOne({ where: { quotationId } });
//   };

//   public getContract = async (searchContractDTO: SearchContractDTO) => {
//     let query = `SELECT c.id as id, c.group_id as groupId, c.customer_id as customerId, c.company_id as companyId, c.sender as sender, c.recipient as recipient, c.contract_status  as contractStatus, c.invoice_status as invoiceStatus, c.money_status as moneyStatus, c.invoice_extraction_date as invoiceExtractionDate, c.get_money_date as getMoneyDate, c.file_url as fileUrl, c.file_name as fileName, c.supply_amount as supplyAmount, c.vat_amount as vatAmount, c.total_amount as totalAmount, c.created_at as createdAt, c.updated_at as updatedAt, cu.management_number as managementNumber, cu.company_name as companyName  from contract c LEFT JOIN customer cu on cu.id=c.customer_id where c.company_id='${searchContractDTO.companyId}' and c.group_id='${searchContractDTO.groupId}'`;
//     if (searchContractDTO?.startDate && searchContractDTO?.endDate) {
//       query += ` and DATE(c.created_at) >= '${searchContractDTO.startDate}' and DATE(c.created_at) <='${searchContractDTO.endDate}'`;
//     }
//     if (searchContractDTO.companyName) {
//       query += ` and cu.company_name LIKE '%${searchContractDTO.companyName}%' `;
//     }

//     if (searchContractDTO.moneyStatus) {
//       query += ` and c.money_status='${searchContractDTO.moneyStatus}'`;
//     }

//     if (searchContractDTO.invoiceStatus) {
//       query += ` and c.invoice_status='${searchContractDTO.invoiceStatus}'`;
//     }
//     query += ` order by c.created_at desc`;

//     const [results] = await sequelize.query(query);

//     return results;
//   };

//   public createContract = async (contractData: CreateContractDTO) => {
//     return await Contracts.create(contractData).then(async (result) => {
//       return { id: result.id };
//     });
//   };

//   public findContractById = async (contractId: string) => {
//     return await Contracts.findOne({ where: { id: contractId } });
//   };

//   public editContract = async (
//     contractId: string,
//     contractData: EditContractDTO
//   ) => {
//     return await Contracts.update(contractData, { where: { id: contractId } });
//   };

//   public deleteContract = async (contractId: string) => {
//     const oldData = await this.findContractById(contractId);
//     return await Contracts.destroy({ where: { id: contractId } }).then(
//       async () => {
//         if (oldData && oldData.fileUrl && oldData.fileUrl != '') {
//           // await Quotations.update({ contractStatus: false }, { where: { id: oldData.quotationId } });
//           const fileKey = `contract/${
//             oldData.fileUrl.split('/')[oldData.fileUrl.split('/').length - 1]
//           }`;
//           // await deleteFromS3(fileKey);
//         }
//         return { message: 'Contract Deleted Successfully' };
//       }
//     );
//   };

//   public deleteContractByQuotationID = async (quotationId: string) => {
//     // await this.getContractByQuotationID(quotationId).then(async (result) => {
//     //   if (result?.id && result.id != null) {
//     //     await this.deleteContract(result.id);
//     //   }
//     // });
//   };

//   public bulkContractUpdate = async (
//     companyId: string,
//     groupId: string,
//     contractId: string[]
//   ) => {
//     const promises: any[] = [];

//     const updateContract = (id: string) => {
//       return new Promise((resolve) => {
//         const updateContractData = new EditContractDTO({
//           invoiceStatus: 'EXTRACTION_COMPLETE' as InvoiceStatus,
//           invoiceExtractionDate: new Date(),
//         });
//         Contracts.update(updateContractData, {
//           where: { id: id, companyId, groupId },
//         }).then(async (res) => {
//           resolve(res);
//         });
//       });
//     };

//     contractId?.forEach(async (id) => {
//       promises.push(updateContract(id));
//     });

//     return Promise.all(promises);
//   };
// }
