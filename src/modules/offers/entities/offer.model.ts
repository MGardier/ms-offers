import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import { sequelize } from '@src/app/database/sequelize';
import { ContractType, Jobboard, OfferSource, RemoteMode, SalaryPeriod } from './offer.enum';



export class OfferModel extends Model<
  InferAttributes<OfferModel>,
  InferCreationAttributes<OfferModel>
> {
  declare id: CreationOptional<string>;

  declare sourceOfferKey: string;
  declare externalId: CreationOptional<string | null>;

  declare title: string;
  declare companyName: CreationOptional<string | null>;

  declare contractType: CreationOptional<ContractType | null>;
  declare rawContract: CreationOptional<string | null>;

  declare salaryMin: CreationOptional<number | null>;
  declare salaryMax: CreationOptional<number | null>;
  declare salaryPeriod: CreationOptional<SalaryPeriod | null>;
  declare rawSalary: CreationOptional<string | null>;

  declare remoteMode: CreationOptional<RemoteMode | null>;
  declare rawRemote: CreationOptional<string | null>;

  declare minExperienceYears: CreationOptional<number | null>;
  declare rawExperience: CreationOptional<string | null>;

  declare city: CreationOptional<string | null>;
  declare postalCode: CreationOptional<string | null>;

  declare skills: CreationOptional<string[]>;
  declare description: CreationOptional<string | null>;

  declare url: string;

  declare jobboard: Jobboard;
  declare source: OfferSource;

  declare publishedAt: CreationOptional<Date | null>;
  declare lastScrapedAt: CreationOptional<Date | null>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

OfferModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },

    sourceOfferKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    externalId: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    companyName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    contractType: {
      type: DataTypes.ENUM(...Object.values(ContractType)),
      allowNull: true,
    },

    rawContract: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    salaryMin: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    salaryMax: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    salaryPeriod: {
      type: DataTypes.ENUM(...Object.values(SalaryPeriod)),
      allowNull: true,
    },

    rawSalary: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    remoteMode: {
      type: DataTypes.ENUM(...Object.values(RemoteMode)),
      allowNull: true,
    },

    rawRemote: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    minExperienceYears: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    rawExperience: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    postalCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    skills: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    jobboard: {
      type: DataTypes.ENUM(...Object.values(Jobboard)),
      allowNull: false,
    },

    source: {
      type: DataTypes.ENUM(...Object.values(OfferSource)),
      allowNull: false,
    },

    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    lastScrapedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'offers',
    timestamps: true,
    underscored: true,
  },
);