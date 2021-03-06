/**
 *
 *  Supplier
 *  服务供应方, 可以是 医生、医院、服务机构等, 可以被经纪人中介的服务提供方
 *  Authors: Jacky.L
 *  Created by Jacky.L on 1/7/15.
 *  Copyright (c) 2014 ZLYCare. All rights reserved.
 */
var
  mongodb = require('../configs/db'),
  Schema = mongodb.mongoose.Schema;

var supplierSchema = new Schema({
  // 基本属性
  type: {type: Number, default: 0},//0-默认医生; 1-医院; 2-体检机构; 3-药店; 4-诊所
  id: String,
  //hospitalId: String, //医生是根据科室来的
  departmentId: String,
  name: {type: String, default: ''},//名称
  fullGrade: String, //职称
  goodVoteCount: String,//
  specialize: String,  //专长
  schedule: String,        //出诊时间描述
  homePageUrl: String,    //个人主页面url
  isCaseOpened: String,
  isPhoneOpened: String,
  isBookingOpened: String,
  logoUrl: String, //头像 TODO 转存到青牛服务器上
  effectIndex: String,
  attitudeIndex: String,
  thankCommentCount: String,
  casePostCount2Week: String,
  hospitalFacultyFullName: String,  //医院科室全称
  caseIntro: String,  //备注
  goodVote: String,
  bookingDisease: String,
  finishPaymentCnt: String,
  finishBookingCnt: String,
  createdAt: {type: Number, default: Date.now},//用户注册时间
  updatedAt: {type: Number, default: Date.now},//用户最近的更新时间
  isDeleted: {type: Boolean, default: false}//该条记录是否被删除
});

var Supplier = mongodb.mongoose.model('Doctor', supplierSchema);

module.exports = Supplier;