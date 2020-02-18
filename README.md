# 后端程序

演示用的后端程序，基于Express.js作为web引擎，并提供ajax的接口。使用Sequelize.js作为数据库ORM引擎

## 安装依赖

步骤参见前端程序说明中的相同章节

## Express.js

Express.js是一个基于Node.js的典型Web应用框架，相关的内容请参考其[官网](http://expressjs.com/zh-cn/)

## Sequelize.js

Sequelize.js是一个基于Node.js的数据库ORM框架，可以实现类似类操作的数据库查询，相关内容可以参考其[中文操作说明](https://demopark.github.io/sequelize-docs-Zh-CN/)

## 目录结构

### bin

Express.js启动前置程序，不需要修改，不用关注

### config

database.json文件为Sequelize.js的数据库配置，更改对应的记录以适应本机数据库配置

### public

前端静态文件夹，由前端程序生成

### routes

路由文件夹，为了简化结构，在后端程序中去除了控制器，所有的数据查询、组织都可以写在api.js文件中
