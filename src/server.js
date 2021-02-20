import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

export const app = express();

app.disable('x-powered-by');

const router = express.Router();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.post('/signup', signup);
// app.post('/signin', signin);
//
// app.use('/api', protect);
// app.use('/api/user', userRouter);
// app.use('/api/item', itemRouter);
// app.use('/api/list', listRouter);

router.get('/me', (req, res) => {
  res.send({ me: 'hello' });
});

const routes = [
  'get /cat',
  'get /cat/:id',
  'post /cat',
  'put /cat/:id',
  'delete /cat/:id'
];

router
  .route('/cat')
  .get()
  .post();

router
  .route('/cat/:id')
  .get()
  .put()
  .delete();

app.use('/api', router);

const log = (req, res, next) => {
  console.log('logging');

  req.mydata = 'hello';

  next();
};

app.use(log);

app.get('/data', [log, log], (req, res, next) => {
  // res.send({ data: 1 });
  next();
});

app.get('/data', [log, log], (req, res) => {
  res.send({ data: 2 });
});

app.post('/user/:id', (req, res) => {
  res.send({ ok: true });
});

export const start = () => {
  app.listen(3000, () => {
    console.log('Server is on 3000');
  });
};

// app.get('/', (req, res) => {
//   res.send({ message: 'hello' });
// });
//
// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send({ message: 'ok' });
// });

// export const start = async () => {
//   try {
//     await connect();
//     app.listen(config.port, () => {
//       console.log(`REST API on http://localhost:${config.port}/api`);
//     });
//   } catch (e) {
//     console.error(e);
//   }
// };
