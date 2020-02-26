// 数据库模型类
// 一个表对应一个文件
// 可参考https://demopark.github.io/sequelize-docs-Zh-CN/
'use strict';
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  // 模型类，承载数据模型的查询
  class Drama extends Sequelize.Model {

    
    /**
     * 根据该剧情的索引，查询相关的选项
     *
     * @static
     * @param {*} index 剧情索引
     * @memberof Drama
     */
    static async getDrama(index) {
      let thisDrama = await this.findOne({
        where: {
          index: index
        }
      })
      return thisDrama.options
    }
  }

  // 数据模型的定义，在此定义表中每一列的结构
  Drama.init({
    index: DataTypes.INTEGER,  // 该剧情的索引
    dramaContent: DataTypes.STRING,  // 该剧情的文本
    options: DataTypes.STRING  // 该剧情对应的选项，JSON格式，包含每项的文本属性text以及下一步的索引index
  }, {
    sequelize,
    modelName:'Drama',
    tableName: 'dramas',
    timestamps: false
  })
  return Drama
}