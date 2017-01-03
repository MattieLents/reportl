exports.seed = (knex, Promise) => {
  const tableName = 'gradeable_objects_types';
  const data = [
    {
      id: 1,
      name: 'exam',
    },
    {
      id: 2,
      name: 'quiz',
    },
    {
      id: 3,
      name: 'homework',
    },
    {
      id: 4,
      name: 'essay',
    },
    {
      id: 5,
      name: 'presentation',
    },
  ];

  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => knex(tableName).del())
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))))
    .finally(() => knex.raw('SET foreign_key_checks = 1;'));
};