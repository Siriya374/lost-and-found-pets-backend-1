import express from 'express';
import cors from 'cors';

import config from './config.js';
import user from './routes/users.routes.js'
import login from './routes/login.routes.js'
import types from './routes/type.routes.js'
import port from './routes/posts.routes.js'
import pets from './routes/pets.routes.js'

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('', login);
app.use('/api/user', user);
app.use('/api/type', types);
app.use('/api/posts', port);
app.use('/api/pets', pets);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);