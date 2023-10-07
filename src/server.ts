import app from './app';
import connectDB from './helpers/ConnectDatabase';
import logger from './helpers/Logger';

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
};

startServer()
  .then(() => {
    console.log('Served');
    logger.info('Server started successfully');
  })
  .catch((err: any) => {
    console.error(err);
  });
