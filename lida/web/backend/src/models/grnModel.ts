import { DataTypes, Model } from 'sequelize';
import { sequelize } from '.';

export interface GrmServiceAttributes {
  id?: string;
  companyId: string;
  groupId: string;
  memberId: string;
  memberName: string;
  memberEmail: string;
}

// export const GrnModel = sequelize.define(
//   `GrmService`,
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       allowNull: false,
//       primaryKey: true,
//     },
//     companyId: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     groupId: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     memberId: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     memberName: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     memberEmail: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//   },
//   { underscored: true, tableName: 'group_member' }
// );

export const GRNModel = sequelize.define(
  'GRNModel',
  {
    'SL No': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Plant: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'Storage Location': {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'Movement Type': {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'Material Code': {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'Material Description': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Batch: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    'Material Document': {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'Document Date': {
      type: DataTypes.STRING, // consider using DATE for actual dates
      allowNull: false,
    },
    UOM: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    QTY: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    'Posting Date': {
      type: DataTypes.STRING, // consider using DATE for actual dates
      allowNull: false,
    },
    'Amount in LC': {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    'Purchase Order': {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    'WBS Element': {
      type: DataTypes.STRING,
      allowNull: true,
    },
    'Financial Year': {
      type: DataTypes.STRING,
      allowNull: true,
    },
    'Catalog Number': {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'grn1', // specify your table name here
    timestamps: false, // set to true if you want createdAt and updatedAt fields
  }
);

export class CreateGrmServiceDTO {
  companyId: string;
  groupId: string;
  memberId: string;
  memberName: string;
  memberEmail: string;
  constructor(data: any) {
    this.companyId = data.companyId;
    this.groupId = data.groupId;
    this.memberId = data.memberId;
    this.memberName = data.memberName;
    this.memberEmail = data.memberEmail;
  }
}

// export class EditGrmServiceDTO {
//   groupName: string;

//   constructor(data: any) {
//     this.groupName = data.groupName;
//   }
// }
