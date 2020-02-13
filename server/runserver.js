import config from 'config';
// import postgres from './db/postgres/postgres.js';
// import redis from './db/redis/redis.js';

import server from './server';

console.info('NODE_ENV', process.env.NODE_ENV);
// const PASSWORD = config.get('db.redis.password');
// const HOST = config.get('server.host');
// const PORT = config.get('server.port');

const instance = server.listen(3000, 'localhost');
//postgres.authenticate().then(() => console.info('Connection to the database has been established successfully.'));

//instance.on('listening', () => console.info('Available on:', `${HOST}:${PORT}`));

instance.on('error', (error) => console.error(error));

export default instance;
