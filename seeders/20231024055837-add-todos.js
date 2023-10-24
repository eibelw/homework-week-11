"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "todos",
      [
        {
          title: "Makan",
          status: "Sudah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Minum",
          status: "Sudah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Coding",
          status: "Sudah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("todos", null, {});
  },
};
