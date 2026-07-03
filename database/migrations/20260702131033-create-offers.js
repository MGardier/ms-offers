'use strict';

const OFFER_SOURCES = ['FT_API', 'INTERNAL_DB'];

const JOBBOARDS = [
  'FRANCE_TRAVAIL',
  'LINKEDIN',
  'WTTJ',
  'APEC',
  'HELLOWORK',
  'INDEED',
  'OTHER',
];

const CONTRACT_TYPES = [
  'CDI',
  'CDD',
  'INTERNSHIP',
  'APPRENTICESHIP',
  'FREELANCE',
  'TEMPORARY',
  'OTHER',
  'UNKNOWN',
];

const REMOTE_MODES = ['FULL_REMOTE', 'HYBRID', 'ON_SITE', 'UNKNOWN'];

const SALARY_PERIODS = ['HOUR', 'DAY', 'MONTH', 'YEAR'];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "pgcrypto";',
    );

    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        primaryKey: true,
        allowNull: false,
      },

      source_offer_key: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      external_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      company_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      contract_type: {
        type: Sequelize.ENUM(...CONTRACT_TYPES),
        allowNull: true,
      },

      raw_contract: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      salary_min: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      salary_max: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      salary_period: {
        type: Sequelize.ENUM(...SALARY_PERIODS),
        allowNull: true,
      },

      raw_salary: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      remote_mode: {
        type: Sequelize.ENUM(...REMOTE_MODES),
        allowNull: true,
      },

      raw_remote: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      min_experience_years: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      raw_experience: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      postal_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      skills: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        defaultValue: [],
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      url: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      jobboard: {
        type: Sequelize.ENUM(...JOBBOARDS),
        allowNull: false,
      },

      source: {
        type: Sequelize.ENUM(...OFFER_SOURCES),
        allowNull: false,
      },

      published_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      last_scraped_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });

      },

  async down(queryInterface) {
    await queryInterface.dropTable('offers');

    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_offers_contract_type";',
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_offers_salary_period";',
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_offers_remote_mode";',
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_offers_jobboard";',
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_offers_source";',
    );
  },
};