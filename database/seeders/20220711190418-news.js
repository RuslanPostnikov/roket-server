'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

const news = [...Array(400)].map(() => ({
  image: faker.image.imageUrl(),
  title: faker.lorem.words(3),
  date: faker.date.past(),
  shortDescription: faker.lorem.sentences(3),
  likesQuantity: Number(faker.random.numeric(3)),
  categoryId: Math.floor(Math.random() * 10 + 1),
}));

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('News', news, {});
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('News', null, {});
  },
};
