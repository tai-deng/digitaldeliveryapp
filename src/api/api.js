// 接口
import http from './request.js'

/**
 * 公共接口
 */
//根据项目ID获取所有人员信息（id和姓名）
export const GetAllUserList = params => {
  return http.fetchGet('User/GetAllUserList', params)
}
// 根据楼栋楼层专业获取物资名称
export const GetResourceBySpInfo = params => {
  return http.fetchPost('Element/GetResourceBySpInfo', params)
}
// 根据楼栋楼层专业获取任务(进度)名称
export const GetTaskByInfo = params => {
  return http.fetchPost('Element/GetTaskByInfo', params)
}
// 根据楼栋楼层专业获取构件类别
export const GetCategoryTypeByInfo = params => {
  return http.fetchPost('Element/GetCategoryTypeByInfo', params)
}

// //登录接口
export const Login = params => {
  return http.fetchPost('Home/Login', params)
}
//获取当前登录用户详情接口
export const GetLoginUserInfo = params => {
  return http.fetchGet('User/GetLoginUserInfo', params)
}


/**
 * 动态
 */
//建造动态（APP） 卡片列表
export const GetConstruction = params => {
  return http.fetchGet('SchedulePlan/GetConstruction', params)
}
//根据项目id和楼栋名称获取任务列表（APP）
export const GetTaskList = params => {
  return http.fetchGet('SchedulePlan/GetTaskList', params)
}
// 根据项目ID查询发布问题
export const QueryPublishList = params => {
  return http.fetchPost('Risk/QueryPublishList', params)
}

/**
 *
 * @param {沟通管理} params
 */
//获取沟通类型列表
export const GetComTypeList = params => {
  return http.fetchGet('Communicate/GetComTypeList', params)
}
//获取楼栋列表
export const GetBuilding = params => {
  return http.fetchGet('Element/GetBuilding', params)
}

// 获取单位列表 type为单位类型(1:建设单位,2:勘察单位,3:设计单位,4:监理单位,5:施工单位,6:其他单位)
export const GetOrgList = params => {
  return http.fetchGet('Org/GetOrgList', params)
}
// 按公司获取部门数据列表
export const GetDeptList = params => {
  return http.fetchGet('Org/GetDeptList', params)
}
// 根据项目ID和单位ID以及部门ID获取人员列表
export const GetUserListByDept = params => {
  return http.fetchGet('User/GetUserListByDept', params)
}
// 根据参数获取构件名称
export const QueryAllElementNameByInfo = params => {
  return http.fetchPost('ListImport/QueryAllElementNameByInfo', params)
}
// 根据构件参数获取所有ElementID
export const GetElementIDByInfo = params => {
  return http.fetchPost('Element/GetElementIDByInfo', params)
}
// 保存沟通管理数据
export const SaveCommunicate = params => {
  return http.fetchPost('Communicate/SaveCommunicate', params)
}
// 根据项目ID获取沟通管理列表
export const GetCommunicateList = params => {
  return http.fetchGet('Communicate/GetCommunicateList', params)
}
// 获取沟通管理详情
export const GetDetail = params => {
  return http.fetchGet('Communicate/GetDetail', params)
}
/**
 * 首页
 */
// 获取公告列表
export const QueryNoticeList = params => {
  return http.fetchPost('Integrate/QueryNoticeList', params)
}
// 获取工作列表 类型 查询类型 1.待接收 2.进行中 3.已完成
export const QueryWorkList = params => {
  return http.fetchPost('Integrate/QueryWorkList', params)
}

//获取所有人员信息
// export const GetAllUserList = params => {
//   return http.fetchGet('User/GetAllUserList', params)
// }
// //登录接口
// export const Login = params => {
//   return http.fetchPost('Home/Login', params)
// }
// // 根据（质量，安全，进度）动态ID删除动态表及动态照片表记录 ids
// export const DeleteById = params => {
//   return http.fetchPostGet('Dynamic/DeleteById', params)
// }
// //文件上传
// export const UploadFiles = params => {
//   return http.formDataUpLoad('File/UploadAndSaveMyFile', params)
// }

/**
 * 范围管理 and 采购管理
 */
// 获取变更列表数据
export const QueryChangList = params => {
  return http.fetchPost('RangeManage/QueryChangList', params)
}
// 获取变更详情
export const GetChangeInfo = params => {
  return http.fetchGet('RangeManage/GetChangeInfo', params)
}
// 获取采购列表
export const QueryPurchaseList = params => {
  return http.fetchPost('RangeManage/QueryPurchaseList', params)
}
// 获取采购列表详情
export const QueryPurchaseInfoItems = params => {
  return http.fetchPost('RangeManage/QueryPurchaseInfoItems', params)
}
//根据楼栋获取模型的专业
export const GetSpecialtybyBuilding = params => {
  return http.fetchGet('/Element/GetSpecialtybyBuilding', params)
}
//根据楼栋获取模型的楼层
export const GetFloorbyBuilding = params => {
  return http.fetchGet('Element/GetFloorbyBuilding', params)
}
// 获取清单类型 0为未导入 1为施工图清单 2.全费用清单 3.构件生成清单
export const GetCurrentListType = params => {
  return http.fetchGet('ListImport/GetCurrentListType', params)
}
// 采购审核
export const PurcahseApprove = params => {
  return http.fetchPost('RangeManage/PurcahseApprove', params)
}
// 接收变更列表数据
export const ReceiveChange = params => {
  return http.fetchPost('RangeManage/ReceiveChange', params)
}
// 获取采购信息--采购查询
export const QueryPurchaseInfo = params => {
  return http.fetchPost('RangeManage/QueryPurchaseInfo', params)
}
// 保存采购信息
export const SavePurchase = (getpar, postpar) => {
  return http.fetchPostAndGet('RangeManage/SavePurchase', getpar, postpar)
}
// 根据楼栋获取项目名称
export const GetProjectName = params => {
  return http.fetchGet('Element/GetProjectName', params)
}
// 获取采购汇总列表
export const QueryPurchaseSumList = params => {
  return http.fetchPost('RangeManage/QueryPurchaseSumList', params)
}
// 获取采购批次
export const GetPurchaseInfo = params => {
  return http.fetchGet('RangeManage/GetPurchaseInfo', params)
}
// 获取入库需采购信息
export const GetInPurchaseInfo = params => {
  return http.fetchGet('RangeManage/GetInPurchaseInfo', params)
}
// 添加入库信息
export const AddStoreIn = params => {
  return http.fetchPost('RangeManage/AddStoreIn', params)
}
// 添加出库信息
export const AddStoreOut = params => {
  return http.fetchPost('RangeManage/AddStoreOut', params)
}
// 保存变更列表数据
export const SaveChange = params => {
  return http.fetchPost('RangeManage/SaveChange', params)
}
// 根据构件名称获取ID
export const QueryAllElementCateNameByInfo = params => {
  return http.fetchPost('ListImport/QueryAllElementCateNameByInfo', params)
}
// 根据相关信息获取采购年明细
export const QueryResourceSumItemReport = params => {
  return http.fetchPost('RangeManage/QueryResourceSumItemReport', params)
}
// 获取构件清单资源名称
export const GetAllElementResorceName = params => {
  return http.fetchGet('ListImport/GetAllElementResorceName', params)
}


//个人信息
//修改个人信息
export const MdfUser = params => {
  return http.fetchPost('User/MdfUser', params)
}
//GetRoleList 查询所有的角色
export const GetRoleList = params => {
  return http.fetchGet('User/GetRoleList', params)
}
//修改角色UpdateRole
export const UpdateRole = params => {
  return http.fetchPostGet('User/UpdateRole', params)
}
//获取部门岗位配置
export const GetPositionConfig = params => {
  return http.fetchGet('User/GetPositionConfig', params)
}
//获取信息配置信息 GetEngingConfigByTypeId
export const GetEngingConfigByTypeId = params => {
  return http.fetchGet('EngingConfig/GetEngingConfigByTypeId', params)
}
//绑定和取消用户角色
export const SaveUserRole = params => {
  return http.fetchPostGet('User/SaveUserRole', params)
}


// 质量管理
//获取质量进度表数据
export const GetQCSchedulePlan = params => {
  return http.fetchPost('QCManage/QueryQCSchedulePlan', params)
}
//获取质量管理信息
export const GetQCManage = params => {
  return http.fetchGet('QCManage/GetQCManage', params)
}
// 获取AI报表列表
export const GetReportFormList = params => {
  return http.fetchGet('ReportForm/GetReportFormList', params)
}
// 获取内容配置下拉
export const AIReportTypeList = params => {
  return http.fetchGet('ReportForm/AIReportTypeList', params)
}
//获取智能报表标签
export const GetReportLabelList = params => {
  return http.fetchGet('ReportForm/GetReportLabelList', params)
}
// 自定义表格查询
export const GetCustomFormExport = params => {
  return http.fetchGet('ReportForm/GetCustomFormExport', params)
}


/**
 * 数据字典
 */
//获取数据字典列表接口
export const GetDictInfoList = params => {
  return http.fetchGet('Dictionary/GetDictInfoList', params)
}


/**
 * 文件上传
 */
//上传Base64String 图片
export const UploadBase64Img = params => {
  return http.fetchPost('File/UploadBase64Img', params)
}
//图片上传
export const UploadImages = params => {
  return http.formDataUpLoad('File/UploadImages', params)
}
//文件上传，只上传文件到服务器，未保存到我的文档
export const UploadFiles = params => {
  return http.formDataUpLoad('File/UploadFiles', params)
}

/**
 * 整改认证
 */
//根据楼栋获取施工图的构件名称 GetConstructElementNamebyBuildingSp
export const GetConstructElementNamebyBuildingSp = params => {
  return http.fetchGet('Element/GetConstructElementNamebyBuildingSp', params)
}
//QueryWorkBusiList 获取标题的列表 Integrate/QueryWorkBusiList
export const QueryWorkBusiList = params => {
  return http.fetchPost('Integrate/QueryWorkBusiList', params)
}

/**
 * @name 风险管理部分
 */
//根据项目ID获取本月新增问题数
export default params => {
  return http.fetchGet('Risk/GetThisMonthCount', params);
};
//根据项目ID和状态获取风险管理问题列表
export const GetRiskList = params => {
  return http.fetchGet('Risk/GetRiskList', params)
}
//风险管理问题发布
export const PublishRisk = params => {
  return http.fetchPost('Risk/PublishRisk', params)
}
//获取风险管理问题类型
export const GetRiskTypeList = params => {
  return http.fetchGet('Risk/GetRiskTypeList', params)
}
//根据风险问题ID获取详情信息（含照片）
export const GetRiskInfoByID = params => {
  return http.fetchGet('Risk/GetRiskInfoByID', params)
}
//风险管理问题提交工作流操作
export const DoRiskWork = params => {
  return http.fetchPost('Risk/DoWork', params)
}
//根据项目ID和状态获取风险管理问题列表信息
export const GetRiskTotal = params => {
  return http.fetchGet('Risk/GetRiskTotal', params)

}
//问题类型分析（APP）
export const GetTypeAnalysis = params => {
  return http.fetchPost('Risk/GetTypeAnalysis', params)
}

/**
 * @name 成本管理
 */
// 获取成本管理列表数据
export const QueryCostData = params => {
  return http.fetchPost('CostManage/QueryCostData', params)
}
// 获取成本管理详情
export const QueryCostItem = params => {
  return http.fetchPost('CostManage/QueryCostItem', params)
}

/**
 * 时间管理
 */

// 获取认证任务列表
export const GetACSchedulePlanListAPP = params => {
  return http.fetchGet('Authentication/GetACSchedulePlanListAPP', params)
}
// 根据楼栋筛选认证任务下拉（APP）
export const GetACSchedulePlanCbxAPP = params => {
  return http.fetchGet('Authentication/GetACSchedulePlanCbxAPP', params)
}
// 新增认证
export const AddModelAuthentication = params => {
  return http.fetchPost('Authentication/AddModelAuthentication', params)
}
// 查看认证详情
export const GetAuthenticationInfoByTaskId = params => {
  return http.fetchGet('Authentication/GetAuthenticationInfoByTaskId', params)
}
/**
 * 人员考勤
 */
//获取当前系统时间
export const QueryCurrentSysTime = params => http.fetchPost('ClassGroup/QueryCurrentSysTime', params)
//添加打卡
export const AddClock = params => http.fetchPost('ClassGroup/AddClock', params)
//获取人员当前打卡时间信息
export const QueryMemberCurrentClockStatus = params => http.fetchPost('ClassGroup/QueryMemberCurrentClockStatus', params)
//获取班组当天上班打卡记录
export const QueryGroupMemberClock = params => http.fetchPost('ClassGroup/QueryGroupMemberClock', params)

/**
 * 人力资源
 */
//根据项目ID和是否黑名单获取全部班组列表以及各班组下总人数
export const GetGroupListWithPersonCount = params => http.fetchGet('ClassGroup/GetGroupListWithPersonCount', params)
//根据项目ID和班组ID获取班组人员分页列表
export const GetMemberList = params => http.fetchGet('ClassGroup/GetMemberList', params)
//获取班组人员详情
export const GetMemberInfo = params => http.fetchGet('ClassGroup/GetMemberInfo', params)
//根据项目ID获班组下拉列表 ClassGroup/GetClassGroupToCbx
export const GetClassGroupToCbx = params => http.fetchGet('ClassGroup/GetClassGroupToCbx', params)
// 获取省市区下拉列表
export const GetAllProCityAreaList = params => http.fetchGet('EngingConfig/GetAllProCityAreaList', params)
//添加班组成员----为添加
export const AddClassMember = params => http.fetchPost('ClassGroup/AddClassMember', params)

