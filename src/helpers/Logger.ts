import pino from 'pino';

const logger = pino({
  level: 'info',
  time: 1646588777952,
  pid: 19777,
  hostname: 'fboeller',
  req: {
    id: 1,
    method: 'GET',
    url: '/todos',
  },
  some: 'data',
  msg: 'My custom log line',
});
export default logger;
