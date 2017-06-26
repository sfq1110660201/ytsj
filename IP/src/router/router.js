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
const recoverKeywords = r => require.ensure([], () => r(require('../page/register/children/recoverKeywords')), 'recoverKeywords')
const resetKeywords = r => require.ensure([], () => r(require('../page/register/children/resetKeywords')), 'resetKeywords')

//内容编辑
const contentEdit = r => require.ensure([], () => r(require('../page/contentEdit/contentEdit')), 'contentEdit')
const homePage = r => require.ensure([], () => r(require('../page/contentEdit/children/homePage')), 'homePage')
const publish = r => require.ensure([], () => r(require('../page/contentEdit/children/publish')), 'publish')
const manageContent = r => require.ensure([], () => r(require('../page/contentEdit/children/manageContent')), 'manageContent')
const userIncrease = r => require.ensure([], () => r(require('../page/contentEdit/children/userIncrease')), 'userIncrease')
const contentAnalysis = r => require.ensure([], () => r(require('../page/contentEdit/children/contentAnalysis')), 'contentAnalysis')
const interestStatistics = r => require.ensure([], () => r(require('../page/contentEdit/children/interestStatistics')), 'interestStatistics')
const userClass = r => require.ensure([], () => r(require('../page/contentEdit/children/userClass')), 'userClass')
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
            }, {
                path: 'recoverKeywords', //找回密码
                component: recoverKeywords,
            }, {
                path: 'resetKeywords', //重置密码
                component: resetKeywords,
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
                path: 'userIncrease',
                //用户增长//newAdding，cancelCaring，addedCount,accumulative
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
                path: 'userClass', //用户属性
                component: userClass,
            }, {
                path: 'setting', //设置
                component: setting,
            }]
        },
        
    ]
}]