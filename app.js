// app.js
'use etrict';
const Hapi = require('hapi');
const config = require('./config');
const routesHello = require('./routes/hello');
require('env2')('./.env')

const server = new Hapi.Server({
  port: config.port,
  host: config.host,
});
// 配置服务器启动 host 与端口
// server.connection();node

const init = async () => {
  server.route(
    // 创建一个简单的 hello hapi 接口
    routesHello);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);

  process.on('unhandledRejection',(err) =>{
    console.log(err);
    process.exit(1);
  })
};

init();
