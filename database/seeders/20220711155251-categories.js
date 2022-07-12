'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

const categories = [...Array(10)].map(() => ({
  title: faker.lorem.words(3),
}));

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Categories', categories, {});
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('News', null, {});
  },
};
