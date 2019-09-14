const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'opentable' });

const query = 'SELECT name, email FROM users WHERE key = ?';
client.execute(query, [ 'someone' ])
  .then(result => console.log('User with email %s', result.rows[0].email));


