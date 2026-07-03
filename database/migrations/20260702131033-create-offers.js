'use strict';

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
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        allowNull: true,
      },

      raw_salary: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      remote_mode: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        allowNull: false,
      },

      source: {
        type: Sequelize.STRING,
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

    await queryInterface.addIndex('offers', ['jobboard', 'source_offer_key'], {
      unique: true,
      name: 'offers_source_offer_key_unique',
    });

  },

  async down(queryInterface) {
    await queryInterface.dropTable('offers');
  },
};
