import App from '../App'
//ip管理
const ipContent = r => require.ensure([], () => r(require('../page/ipManage/ipContent')), 'ipContent')
const yiTu = r => require.ensure([], () => r(require('../page/ipManage/children/yiTu')), 'yiTu')
const addYiTu = r => require.ensure([], () => r(require('../page/ipManage/children/children/addYiTu')), 'addYiTu')
const myYiTu = r => require.ensure([], () => r(require('../page/ipManage/children/children/myYiTu')), 'myYiTu')
const userInfo = r => require.ensure([], () => r(require('../page/ipManage/children/userInfo')), 'userInfo')
const userData = r => require.ensure([], () => r(require('../page/ipManage/children/children/userData')), 'userData')
const accountSecurity = r => require.ensure([], () => r(require('../page/ipManage/children/children/accountSecurity')), 'accountSecurity')
//更换手机
const testPhone = r => require.ensure([], () => r(require('../page/ipManage/children/children/changePhone/testPhone')), 'testPhone')
const changeAnotherPhone = r => require.ensure([], () => r(require('../page/ipManage/children/children/changePhone/changeAnotherPhone')), 'changeAnotherPhone')
const completePhone = r => require.ensure([], () => r(require('../page/ipManage/children/children/changePhone/completePhone')), 'completePhone')
//更换手机
const testMail = r => require.ensure([], () => r(require('../page/ipManage/children/children/changeMail/testMail')), 'testMail')
const changeAnotherMail = r => require.ensure([], () => r(require('../page/ipManage/children/children/changeMail/changeAnotherMail')), 'changeAnotherMail')
const completeMail = r => require.ensure([], () => r(require('../page/ipManage/children/children/changeMail/completeMail')), 'completeMail')

//注册
const register = r => require.ensure([], () => r(require('../page/register/register')), 'register')
const registerName = r => require.ensure([], () => r(require('../page/register/children/registerName')), 'registerName')
const fillInfo = r => require.ensure([], () => r(require('../page/register/children/fillInfo')), 'fillInfo')
const completeRegister = r => require.ensure([], () => r(require('../page/register/children/completeRegister')), 'completeRegister')

//内容编辑
const contentEdit = r => require.ensure([], () => r(require('../page/contentEdit/contentEdit')), 'contentEdit')
const homePage = r => require.ensure([], () => r(require('../page/contentEdit/children/homePage')), 'homePage')
const publish = r => require.ensure([], () => r(require('../page/contentEdit/children/publish')), 'publish')
const manageContent = r => require.ensure([], () => r(require('../page/contentEdit/children/manageContent')), 'manageContent')
const userIncrease = r => require.ensure([], () => r(require('../page/contentEdit/children/userIncrease')), 'userIncrease')
const contentAnalysis = r => require.ensure([], () => r(require('../page/contentEdit/children/contentAnalysis')), 'contentAnalysis')
const interestStatistics = r => require.ensure([], () => r(require('../page/contentEdit/children/interestStatistics')), 'interestStatistics')
const setting = r => require.ensure([], () => r(require('../page/contentEdit/children/setting')), 'setting')
//发表下页面子模块
const vedio = r => require.ensure([], () => r(require('../page/contentEdit/children/publishChildren/vedio')), 'vedio')
const Graphic = r => require.ensure([], () => r(require('../page/contentEdit/children/publishChildren/Graphic')), 'Graphic')
const pictures = r => require.ensure([], () => r(require('../page/contentEdit/children/publishChildren/pictures')), 'pictures')
//内容管理下页面子模块
const listAll = r => require.ensure([], () => r(require('../page/contentEdit/children/manageContentChildren/listAll')), 'listAll')
const listGraphic = r => require.ensure([], () => r(require('../page/contentEdit/children/manageContentChildren/listGraphic')), 'listGraphic')
const listVedio = r => require.ensure([], () => r(require('../page/contentEdit/children/manageContentChildren/listVedio')), 'listVedio')
const listPictures = r => require.ensure([], () => r(require('../page/contentEdit/children/manageContentChildren/listPictures')), 'listPictures')
//用户增长下页面子模块
const newAdding = r => require.ensure([], () => r(require('../page/contentEdit/children/userIncreaseChildren/newAdding')), 'newAdding')//新增人数
const cancelCaring = r => require.ensure([], () => r(require('../page/contentEdit/children/userIncreaseChildren/cancelCaring')), 'cancelCaring')//取消关注人数
const addedCount = r => require.ensure([], () => r(require('../page/contentEdit/children/userIncreaseChildren/addedCount')), 'addedCount')//净增人数
const accumulative = r => require.ensure([], () => r(require('../page/contentEdit/children/userIncreaseChildren/accumulative')), 'accumulative')//累计人数

//首页  
const msite = r => require.ensure([], () => r(require('../page/labelsPage/msite')), 'msite')
//首页4个子页面
const recommend = r => require.ensure([], () => r(require('../page/labelsPage/children/recommend')), 'recommend')
const beforepregnant = r => require.ensure([], () => r(require('../page/labelsPage/children/beforepregnant')), 'beforepregnant')
const pregnanting = r => require.ensure([], () => r(require('../page/labelsPage/children/pregnanting')), 'pregnanting')
const recovery = r => require.ensure([], () => r(require('../page/labelsPage/children/recovery')), 'recovery')
//标签
const diet = r => require.ensure([], () => r(require('../page/labelsPage/children/children/diet')), 'diet')
const Nursing = r => require.ensure([], () => r(require('../page/labelsPage/children/children/Nursing')), 'Nursing')
const baoJian = r => require.ensure([], () => r(require('../page/labelsPage/children/children/baoJian')), 'baoJian')
const education = r => require.ensure([], () => r(require('../page/labelsPage/children/children/education')), 'education')

//个人信息
const personalInfo = r => require.ensure([], () => r(require('../page/personalInfo/personalInfo')), 'personalInfo')
const infoChange = r => require.ensure([], () => r(require('../page/personalInfo/children/infoChange')), 'infoChange')

//收藏
const collection = r => require.ensure([], () => r(require('../page/collection/collection')), 'collection')
//我
const meInfoprofile = r => require.ensure([], () => r(require('../page/profile/meInfoprofile')), 'meInfoprofile')
const lebalChoice = r => require.ensure([], () => r(require('../page/profile/lebalChoice')), 'lebalChoice')
const meInfohaventlogin = r => require.ensure([], () => r(require('../page/profile/meInfohaventlogin')), 'meInfohaventlogin')

const agreement = r => require.ensure([], () => r(require('../page/profile/agreement')), 'agreement')
//账户安全
//const accountSecurity = r => require.ensure([], () => r(require('../page/accountSecurity/accountSecurity')), 'accountSecurity')
//const changePhone = r => require.ensure([], () => r(require('../page/accountSecurity/children/changePhone')), 'changePhone')
//微信
//const changeWeichat = r => require.ensure([], () => r(require('../page/accountSecurity/children/changeWeichat')), 'changeWeichat')

//文章
const paragraph = r => require.ensure([], () => r(require('../page/article/paragraph')), 'paragraph')

//关心
const careEntering = r => require.ensure([], () => r(require('../page/care/careEntering')), 'careEntering')
const addCare = r => require.ensure([], () => r(require('../page/care/children/addCare')), 'addCare')
const careaddFinished = r => require.ensure([], () => r(require('../page/care/careaddFinished')), 'careaddFinished')
const edit = r => require.ensure([], () => r(require('../page/care/edit')), 'edit')


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {
            path: '',
            redirect: '/ipContent/yiTu/myYiTu'
        },
        {
        	path: '/ipContent',
            component: ipContent,
            children:[{
            	path:"yiTu",
            	component:yiTu,
            	children:[{
            		path:"addYiTu",
            		component:addYiTu,
            	},{
            		path:"myYiTu",
            		component:myYiTu,
            	}]
            },{
            	path:"userInfo",
            	component:userInfo,
            	children:[{
            		path:"userData",
            		component:userData,
            	},{
              		path:"accountSecurity",
              		component:accountSecurity,
              		children: [{
		                path: 'testPhone', //手机验证
		                component: testPhone,
		            }, {
		                path: 'changeAnotherPhone', //新手机注册
		                component: changeAnotherPhone,
		            }, {
		                path: 'completePhone', //注册完成
		                component: completePhone,
		            }, {
		                path: 'testMail', //
		                component: testMail,
		            }, {
		                path: 'changeAnotherMail', //
		                component: changeAnotherMail,
		            }, {
		                path: 'completeMail', //
		                component: completeMail,
		            }]
            	}]
            }]
        },
        //注册
        {
            path: '/register',
            component: register,
            children: [{
                path: 'registerName', //注册账号
                component: registerName,
            }, {
                path: 'fillInfo', //填写信息
                component: fillInfo,
            }, {
                path: 'completeRegister', //完成注册
                component: completeRegister,
            }]
        },
        //内容管理
        {
            path: '/contentEdit',
            component: contentEdit,
            children: [{
                path: 'homePage', //主页
                component: homePage,
            }, {
                path: 'publish', //发表
                component: publish,
                children: [{
	                path: 'vedio', //视频
	                component: vedio,
	            }, {
	                path: 'Graphic', //图文
	                component: Graphic,
	            }, {
	                path: 'pictures', //图集
	                component: pictures,
	            }]
            }, {
                path: 'manageContent', //
                component: manageContent,
                children: [{
	                path: 'listAll', //全部
	                component: listAll,
	            }, {
	                path: 'listGraphic', //图文
	                component: listGraphic,
	            }, {
	                path: 'listVedio', //视频
	                component: listVedio,
	            }, {
	                path: 'listPictures', //图集
	                component: listPictures,
	            }]
            }, {
                path: 'userIncrease', //用户增长//newAdding，cancelCaring，addedCount,accumulative
                component: userIncrease,
                 children: [{
	                path: 'newAdding', //新增
	                component: newAdding,
	            }, {
	                path: 'cancelCaring', //取关
	                component: cancelCaring,
	            }, {
	                path: 'addedCount', //净增
	                component: addedCount,
	            }, {
	                path: 'accumulative', //累计
	                component: accumulative,
	            }]
            }, {
                path: 'contentAnalysis', //内容分析
                component: contentAnalysis,
            }, {
                path: 'interestStatistics', //兴趣分析
                component: interestStatistics,
            }, {
                path: 'setting', //设置
                component: setting,
            }]
        },
        {
            path: '/msite',
            component: msite,
            children: [{
	                path: 'recommend', //推荐
	                component: recommend,
	           }, {
                path: 'beforepregnant', //孕前
                component: beforepregnant,
                children: [{
	                path: 'diet', //饮食
	                component: diet,
	            }, {
	                path: 'Nursing', //护理
	                component: Nursing,
	            }, {
	                path: 'baoJian', //保健
	                component: baoJian,
	            }, {
	                path: 'education', //教育
	                component: education,
	            }]
            }, {
                path: 'pregnanting', //孕中
                component: pregnanting,
                children: [{
	                path: 'diet', //饮食
	                component: diet,
	            }, {
	                path: 'Nursing', //护理
	                component: Nursing,
	            }, {
	                path: 'baoJian', //保健
	                component: baoJian,
	            }, {
	                path: 'education', //教育
	                component: education,
	            }]
            }, {
                path: 'recovery', //恢复
                component: recovery,
                children: [{
	                path: 'diet', //饮食
	                component: diet,
	            }, {
	                path: 'Nursing', //护理
	                component: Nursing,
	            }, {
	                path: 'baoJian', //保健
	                component: baoJian,
	            }, {
	                path: 'education', //教育
	                component: education,
	            }]
            }]
        },
        {
            path: '/personalInfo',
            component: personalInfo
        },
        {
            path: '/infoChange',
            component: infoChange
        },
        {
        	path: '/collection',
            component: collection
        },
        {////////////////////////////////////////用户登录
        	path: '/meInfohaventlogin',
            component: meInfohaventlogin
        },
        {////////////////////////////////////////协议页面
            path: '/agreement',
            component: agreement
        },
        //个人信息页
        {
            path: '/meInfoprofile',
            component: meInfoprofile,
        },
        //登录跳转标签选择页
        {
            path: '/lebalChoice',
            component: lebalChoice,
        },
        ///////////////////////////////////////////////////////////////////////////////账号安全
//      {
//          path: '/accountSecurity',
//          component: accountSecurity,
//          children: [{
//              path: 'changePhone', //更换绑定手机
//              component: changePhone
//          },{
//              path: 'changeWeichat', //更换绑定微信
//              component: changeWeichat
//          }]
//      },
        {/////////////////////////////////////////////关心进入页
            path: '/careEntering',
            component: careEntering,
        },
        {/////////////////////////////////////////////关心添加完成页
            path: '/careaddFinished',
            component: careaddFinished,
        },
        {/////////////////////////////////////////////编辑
            path: '/edit',
            component: edit,
        },
        {/////////////////////////////////////////////关心进入页
            path: '/addCare',
            component: addCare,
        },
        {/////////////////////////////////////////////文章页
            path: '/paragraph/:deviceId',
            component: paragraph,
        },
    ]
}]