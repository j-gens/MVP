const db = require('./index.js');
const schema = require('./schemas.js');
const fs = require('fs');
const csv = require('csv-parser');


let i = 0;

fs.createReadStream('nhl_arenas.csv')
  .pipe(csv())
  .on('data', (row) => {
    let arena = new schema.Arena({
      '_id': i,
      'arenaName': row.Arena,
      'city': row.City,
      'stateProvince': row.State,
      'team': row.Team
    });
    arena.save((err, success) => {
      if (err) {
        console.log(err);
      } else {
        console.log(success)
      }
    });
    i++;
  })
  .on('end', () => {
    console.log('complete!')
  })



