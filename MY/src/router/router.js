import App from '../App'
/**
 * 母婴传说
 * 
 */
//首页
const msite = r => require.ensure([], () => r(require('../page/MY/labelsPage/msite')), 'msite')
//首页4个子页面
const recommend = r => require.ensure([], () => r(require('../page/MY/labelsPage/children/recommend')), 'recommend')
const beforepregnant = r => require.ensure([], () => r(require('../page/MY/labelsPage/children/beforepregnant')), 'beforepregnant')
const pregnanting = r => require.ensure([], () => r(require('../page/MY/labelsPage/children/pregnanting')), 'pregnanting')
const recovery = r => require.ensure([], () => r(require('../page/MY/labelsPage/children/recovery')), 'recovery')
//标签
const diet = r => require.ensure([], () => r(require('../page/MY/labelsPage/children/children/diet')), 'diet')
const Nursing = r => require.ensure([], () => r(require('../page/MY/labelsPage/children/children/Nursing')), 'Nursing')
const baoJian = r => require.ensure([], () => r(require('../page/MY/labelsPage/children/children/baoJian')), 'baoJian')
const education = r => require.ensure([], () => r(require('../page/MY/labelsPage/children/children/education')), 'education')
//个人信息
const personalInfo = r => require.ensure([], () => r(require('../page/MY/personalInfo/personalInfo')), 'personalInfo')
const infoChange = r => require.ensure([], () => r(require('../page/MY/personalInfo/children/infoChange')), 'infoChange')
//收藏
const collection = r => require.ensure([], () => r(require('../page/MY/collection/collection')), 'collection')
//我
const meInfoprofile = r => require.ensure([], () => r(require('../page/MY/profile/meInfoprofile')), 'meInfoprofile')
const lebalChoice = r => require.ensure([], () => r(require('../page/MY/profile/lebalChoice')), 'lebalChoice')
const meInfohaventlogin = r => require.ensure([], () => r(require('../page/MY/profile/meInfohaventlogin')), 'meInfohaventlogin')
const agreement = r => require.ensure([], () => r(require('../page/MY/profile/agreement')), 'agreement')
//账户安全
const accountSecurity = r => require.ensure([], () => r(require('../page/MY/accountSecurity/accountSecurity')), 'accountSecurity')
const changePhone = r => require.ensure([], () => r(require('../page/MY/accountSecurity/children/changePhone')), 'changePhone')
//微信
const changeWeichat = r => require.ensure([], () => r(require('../page/MY/accountSecurity/children/changeWeichat')), 'changeWeichat')
//文章
const paragraph = r => require.ensure([], () => r(require('../page/MY/article/paragraph')), 'paragraph')
//关心
const careEntering = r => require.ensure([], () => r(require('../page/MY/care/careEntering')), 'careEntering')
const addCare = r => require.ensure([], () => r(require('../page/MY/care/children/addCare')), 'addCare')
const careaddFinished = r => require.ensure([], () => r(require('../page/MY/care/careaddFinished')), 'careaddFinished')
const edit = r => require.ensure([], () => r(require('../page/MY/care/edit')), 'edit')

/**
 * 新生儿
 * 
 */
//首页
const XSRmsite = r => require.ensure([], () => r(require('../page/XSR/labelsPage/msite')), 'XSRmsite')
const XSRrecommend = r => require.ensure([], () => r(require('../page/XSR/labelsPage/children/recommend')), 'XSRrecommend')
const XSRbeforepregnant = r => require.ensure([], () => r(require('../page/XSR/labelsPage/children/beforepregnant')), 'XSRbeforepregnant')
const XSRpregnanting = r => require.ensure([], () => r(require('../page/XSR/labelsPage/children/pregnanting')), 'XSRpregnanting')
const XSRrecovery = r => require.ensure([], () => r(require('../page/XSR/labelsPage/children/recovery')), 'XSRrecovery')
//标签
const XSRdiet = r => require.ensure([], () => r(require('../page/XSR/labelsPage/children/children/diet')), 'XSRdiet')
const XSRNursing = r => require.ensure([], () => r(require('../page/XSR/labelsPage/children/children/Nursing')), 'XSRNursing')
const XSRbaoJian = r => require.ensure([], () => r(require('../page/XSR/labelsPage/children/children/baoJian')), 'XSRbaoJian')
const XSReducation = r => require.ensure([], () => r(require('../page/XSR/labelsPage/children/children/education')), 'XSReducation')
//个人信息
const XSRpersonalInfo = r => require.ensure([], () => r(require('../page/XSR/personalInfo/personalInfo')), 'XSRpersonalInfo')
const XSRinfoChange = r => require.ensure([], () => r(require('../page/XSR/personalInfo/children/infoChange')), 'XSRinfoChange')
//收藏
const XSRcollection = r => require.ensure([], () => r(require('../page/XSR/collection/collection')), 'XSRcollection')
//我
const XSRmeInfoprofile = r => require.ensure([], () => r(require('../page/XSR/profile/meInfoprofile')), 'XSRmeInfoprofile')
const XSRlebalChoice = r => require.ensure([], () => r(require('../page/XSR/profile/lebalChoice')), 'XSRlebalChoice')
const XSRmeInfohaventlogin = r => require.ensure([], () => r(require('../page/XSR/profile/meInfohaventlogin')), 'XSRmeInfohaventlogin')
const XSRagreement = r => require.ensure([], () => r(require('../page/XSR/profile/agreement')), 'XSRagreement')
//账户安全
const XSRaccountSecurity = r => require.ensure([], () => r(require('../page/XSR/accountSecurity/accountSecurity')), 'XSRaccountSecurity')
const XSRchangePhone = r => require.ensure([], () => r(require('../page/XSR/accountSecurity/children/changePhone')), 'XSRchangePhone')
//微信
const XSRchangeWeichat = r => require.ensure([], () => r(require('../page/XSR/accountSecurity/children/changeWeichat')), 'XSRchangeWeichat')
//文章
const XSRparagraph = r => require.ensure([], () => r(require('../page/XSR/article/paragraph')), 'XSRparagraph')
//关心
const XSRcareEntering = r => require.ensure([], () => r(require('../page/XSR/care/careEntering')), 'XSRcareEntering')
const XSRaddCare = r => require.ensure([], () => r(require('../page/XSR/care/children/addCare')), 'XSRaddCare')
const XSRcareaddFinished = r => require.ensure([], () => r(require('../page/XSR/care/careaddFinished')), 'XSRcareaddFinished')
const XSRedit = r => require.ensure([], () => r(require('../page/XSR/care/edit')), 'XSRedit')

/**
 * 儿童
 * 
 */
//首页
const ETmsite = r => require.ensure([], () => r(require('../page/ET/labelsPage/msite')), 'ETmsite')
//首页4个子页面
const ETrecommend = r => require.ensure([], () => r(require('../page/ET/labelsPage/children/recommend')), 'ETrecommend')
const ETbeforepregnant = r => require.ensure([], () => r(require('../page/ET/labelsPage/children/beforepregnant')), 'ETbeforepregnant')
const ETpregnanting = r => require.ensure([], () => r(require('../page/ET/labelsPage/children/pregnanting')), 'ETpregnanting')
const ETrecovery = r => require.ensure([], () => r(require('../page/ET/labelsPage/children/recovery')), 'ETrecovery')
//标签
const ETdiet = r => require.ensure([], () => r(require('../page/ET/labelsPage/children/children/diet')), 'ETdiet')
const ETNursing = r => require.ensure([], () => r(require('../page/ET/labelsPage/children/children/Nursing')), 'ETNursing')
const ETbaoJian = r => require.ensure([], () => r(require('../page/ET/labelsPage/children/children/baoJian')), 'ETbaoJian')
const ETeducation = r => require.ensure([], () => r(require('../page/ET/labelsPage/children/children/education')), 'ETeducation')
//个人信息
const ETpersonalInfo = r => require.ensure([], () => r(require('../page/ET/personalInfo/personalInfo')), 'ETpersonalInfo')
const ETinfoChange = r => require.ensure([], () => r(require('../page/ET/personalInfo/children/infoChange')), 'ETinfoChange')
//收藏
const ETcollection = r => require.ensure([], () => r(require('../page/ET/collection/collection')), 'ETcollection')
//我
const ETmeInfoprofile = r => require.ensure([], () => r(require('../page/ET/profile/meInfoprofile')), 'ETmeInfoprofile')
const ETlebalChoice = r => require.ensure([], () => r(require('../page/ET/profile/lebalChoice')), 'ETlebalChoice')
const ETmeInfohaventlogin = r => require.ensure([], () => r(require('../page/ET/profile/meInfohaventlogin')), 'ETmeInfohaventlogin')
const ETagreement = r => require.ensure([], () => r(require('../page/ET/profile/agreement')), 'ETagreement')
//账户安全
const ETaccountSecurity = r => require.ensure([], () => r(require('../page/ET/accountSecurity/accountSecurity')), 'ETaccountSecurity')
const ETchangePhone = r => require.ensure([], () => r(require('../page/ET/accountSecurity/children/changePhone')), 'ETchangePhone')
//微信
const ETchangeWeichat = r => require.ensure([], () => r(require('../page/ET/accountSecurity/children/changeWeichat')), 'ETchangeWeichat')
//文章
const ETparagraph = r => require.ensure([], () => r(require('../page/ET/article/paragraph')), 'ETparagraph')
//关心
const ETcareEntering = r => require.ensure([], () => r(require('../page/ET/care/careEntering')), 'ETcareEntering')
const ETaddCare = r => require.ensure([], () => r(require('../page/ET/care/children/addCare')), 'ETaddCare')
const ETcareaddFinished = r => require.ensure([], () => r(require('../page/ET/care/careaddFinished')), 'ETcareaddFinished')
const ETedit = r => require.ensure([], () => r(require('../page/ET/care/edit')), 'ETedit')

/**
 * 健康传说
 * 
 */
//首页
const JKCSmsite = r => require.ensure([], () => r(require('../page/JKCS/labelsPage/msite')), 'JKCSmsite')
//首页4个子页面
const JKCSrecommend = r => require.ensure([], () => r(require('../page/JKCS/labelsPage/children/recommend')), 'JKCSrecommend')
const JKCSbeforepregnant = r => require.ensure([], () => r(require('../page/JKCS/labelsPage/children/beforepregnant')), 'JKCSbeforepregnant')
const JKCSpregnanting = r => require.ensure([], () => r(require('../page/JKCS/labelsPage/children/pregnanting')), 'JKCSpregnanting')
const JKCSrecovery = r => require.ensure([], () => r(require('../page/JKCS/labelsPage/children/recovery')), 'JKCSrecovery')
//标签
const JKCSdiet = r => require.ensure([], () => r(require('../page/JKCS/labelsPage/children/children/diet')), 'JKCSdiet')
const JKCSNursing = r => require.ensure([], () => r(require('../page/JKCS/labelsPage/children/children/Nursing')), 'JKCSNursing')
const JKCSbaoJian = r => require.ensure([], () => r(require('../page/JKCS/labelsPage/children/children/baoJian')), 'JKCSbaoJian')
const JKCSeducation = r => require.ensure([], () => r(require('../page/JKCS/labelsPage/children/children/education')), 'JKCSeducation')
//个人信息
const JKCSpersonalInfo = r => require.ensure([], () => r(require('../page/JKCS/personalInfo/personalInfo')), 'JKCSpersonalInfo')
const JKCSinfoChange = r => require.ensure([], () => r(require('../page/JKCS/personalInfo/children/infoChange')), 'JKCSinfoChange')
//收藏
const JKCScollection = r => require.ensure([], () => r(require('../page/JKCS/collection/collection')), 'JKCScollection')
//我
const JKCSmeInfoprofile = r => require.ensure([], () => r(require('../page/JKCS/profile/meInfoprofile')), 'JKCSmeInfoprofile')
const JKCSlebalChoice = r => require.ensure([], () => r(require('../page/JKCS/profile/lebalChoice')), 'JKCSlebalChoice')
const JKCSmeInfohaventlogin = r => require.ensure([], () => r(require('../page/JKCS/profile/meInfohaventlogin')), 'JKCSmeInfohaventlogin')
const JKCSagreement = r => require.ensure([], () => r(require('../page/JKCS/profile/agreement')), 'JKCSagreement')
//账户安全
const JKCSaccountSecurity = r => require.ensure([], () => r(require('../page/JKCS/accountSecurity/accountSecurity')), 'JKCSaccountSecurity')
const JKCSchangePhone = r => require.ensure([], () => r(require('../page/JKCS/accountSecurity/children/changePhone')), 'JKCSchangePhone')
//微信
const JKCSchangeWeichat = r => require.ensure([], () => r(require('../page/JKCS/accountSecurity/children/changeWeichat')), 'JKCSchangeWeichat')
//文章
const JKCSparagraph = r => require.ensure([], () => r(require('../page/JKCS/article/paragraph')), 'JKCSparagraph')
//关心
const JKCScareEntering = r => require.ensure([], () => r(require('../page/JKCS/care/careEntering')), 'JKCScareEntering')
const JKCSaddCare = r => require.ensure([], () => r(require('../page/JKCS/care/children/addCare')), 'JKCSaddCare')
const JKCScareaddFinished = r => require.ensure([], () => r(require('../page/JKCS/care/careaddFinished')), 'JKCScareaddFinished')
const JKCSedit = r => require.ensure([], () => r(require('../page/JKCS/care/edit')), 'JKCSedit')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {
            path: '',
            redirect: '/msite/recommend'
        },
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////母婴
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
        {//用户登录
        	path: '/meInfohaventlogin',
            component: meInfohaventlogin
        },
        {//协议页面
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
        //账号安全
        {
            path: '/accountSecurity',
            component: accountSecurity,
            children: [{
                path: 'changePhone', //更换绑定手机
                component: changePhone
            },{
                path: 'changeWeichat', //更换绑定微信
                component: changeWeichat
            }]
        },
        {//关心进入页
            path: '/careEntering',
            component: careEntering,
        },
        {//关心添加完成页
            path: '/careaddFinished',
            component: careaddFinished,
        },
        {//编辑
            path: '/edit',
            component: edit,
        },
        {//关心进入页
            path: '/addCare',
            component: addCare,
        },
        {//文章页
            path: '/paragraph/:deviceId',
            component: paragraph,
        },
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////新生儿
        {
            path: '/XSRmsite',
            component: XSRmsite,
            children: [{
                path: 'XSRrecommend', //推荐
                component: XSRrecommend,
            }, {
                path: 'XSRbeforepregnant', //孕前
                component: XSRbeforepregnant,
                children: [{
	                path: 'XSRdiet', //饮食
	                component: XSRdiet,
	            }, {
	                path: 'XSRNursing', //护理
	                component: XSRNursing,
	            }, {
	                path: 'XSRbaoJian', //保健
	                component: XSRbaoJian,
	            }, {
	                path: 'XSReducation', //教育
	                component: XSReducation,
	            }]
            }, {
                path: 'XSRpregnanting', //孕中
                component: XSRpregnanting,
                children: [{
	                path: 'XSRdiet', //饮食
	                component: XSRdiet,
	            }, {
	                path: 'XSRNursing', //护理
	                component: XSRNursing,
	            }, {
	                path: 'XSRbaoJian', //保健
	                component: XSRbaoJian,
	            }, {
	                path: 'XSReducation', //教育
	                component: XSReducation,
	            }]
            }, {
                path: 'XSRrecovery', //恢复
                component: XSRrecovery,
                children: [{
	                path: 'XSRdiet', //饮食
	                component: XSRdiet,
	            }, {
	                path: 'XSRNursing', //护理
	                component: XSRNursing,
	            }, {
	                path: 'XSRbaoJian', //保健
	                component: XSRbaoJian,
	            }, {
	                path: 'XSReducation', //教育
	                component: XSReducation,
	            }]
            }]
        },
        {
            path: '/XSRpersonalInfo',
            component: XSRpersonalInfo
        },
        {
            path: '/XSRinfoChange',
            component: XSRinfoChange
        },
        {
        	path: '/XSRcollection',
            component: XSRcollection
        },
        {//用户登录
        	path: '/XSRmeInfohaventlogin',
            component: XSRmeInfohaventlogin
        },
        {//协议页面
            path: '/XSRagreement',
            component: XSRagreement
        },
        //个人信息页
        {
            path: '/XSRmeInfoprofile',
            component: XSRmeInfoprofile,
        },
        //登录跳转标签选择页
        {
            path: '/XSRlebalChoice',
            component: XSRlebalChoice,
        },
        //账号安全
        {
            path: '/XSRaccountSecurity',
            component: XSRaccountSecurity,
            children: [{
                path: 'XSRchangePhone', //更换绑定手机
                component: XSRchangePhone
            },{
                path: 'XSRchangeWeichat', //更换绑定微信
                component: XSRchangeWeichat
            }]
        },
        {//关心进入页
            path: '/XSRcareEntering',
            component: XSRcareEntering,
        },
        {//关心添加完成页
            path: '/XSRcareaddFinished',
            component: XSRcareaddFinished,
        },
        {//编辑
            path: '/XSRedit',
            component: XSRedit,
        },
        {//关心进入页
            path: '/XSRaddCare',
            component: XSRaddCare,
        },
        {//文章页
            path: '/XSRparagraph/:deviceId',
            component: XSRparagraph,
        },
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////儿童
        {
            path: '/ETmsite',
            component: ETmsite,
            children: [{
                path: 'ETrecommend', //推荐
                component: ETrecommend,
            }, {
                path: 'ETbeforepregnant', //孕前
                component: ETbeforepregnant,
                children: [{
	                path: 'ETdiet', //饮食
	                component: ETdiet,
	            }, {
	                path: 'ETNursing', //护理
	                component: ETNursing,
	            }, {
	                path: 'ETbaoJian', //保健
	                component: ETbaoJian,
	            }, {
	                path: 'ETeducation', //教育
	                component: ETeducation,
	            }]
            }, {
                path: 'ETpregnanting', //孕中
                component: ETpregnanting,
                children: [{
	                path: 'ETdiet', //饮食
	                component: ETdiet,
	            }, {
	                path: 'ETNursing', //护理
	                component: ETNursing,
	            }, {
	                path: 'ETbaoJian', //保健
	                component: ETbaoJian,
	            }, {
	                path: 'ETeducation', //教育
	                component: ETeducation,
	            }]
            }, {
                path: 'ETrecovery', //恢复
                component: ETrecovery,
                children: [{
	                path: 'ETdiet', //饮食
	                component: ETdiet,
	            }, {
	                path: 'ETNursing', //护理
	                component: ETNursing,
	            }, {
	                path: 'ETbaoJian', //保健
	                component: ETbaoJian,
	            }, {
	                path: 'ETeducation', //教育
	                component: ETeducation,
	            }]
            }]
        },
        {
            path: '/ETpersonalInfo',
            component: ETpersonalInfo
        },
        {
            path: '/ETinfoChange',
            component: ETinfoChange
        },
        {
        	path: '/ETcollection',
            component: ETcollection
        },
        {//用户登录
        	path: '/ETmeInfohaventlogin',
            component: ETmeInfohaventlogin
        },
        {//协议页面
            path: '/ETagreement',
            component: ETagreement
        },
        //个人信息页
        {
            path: '/ETmeInfoprofile',
            component: ETmeInfoprofile,
        },
        //登录跳转标签选择页
        {
            path: '/ETlebalChoice',
            component: ETlebalChoice,
        },
        //账号安全
        {
            path: '/ETaccountSecurity',
            component: ETaccountSecurity,
            children: [{
                path: 'ETchangePhone', //更换绑定手机
                component: ETchangePhone
            },{
                path: 'ETchangeWeichat', //更换绑定微信
                component: ETchangeWeichat
            }]
        },
        {//关心进入页
            path: '/ETcareEntering',
            component: ETcareEntering,
        },
        {//关心添加完成页
            path: '/ETcareaddFinished',
            component: ETcareaddFinished,
        },
        {//编辑
            path: '/ETedit',
            component: ETedit,
        },
        {//关心进入页
            path: '/ETaddCare',
            component: ETaddCare,
        },
        {//文章页
            path: '/ETparagraph/:deviceId',
            component: ETparagraph,
        },
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////健康传说
        {
            path: '/JKCSmsite',
            component: JKCSmsite,
            children: [{
                path: 'JKCSrecommend', //推荐
                component: JKCSrecommend,
            }, {
                path: 'JKCSbeforepregnant', //孕前
                component: JKCSbeforepregnant,
                children: [{
	                path: 'JKCSdiet', //饮食
	                component: JKCSdiet,
	            }, {
	                path: 'JKCSNursing', //护理
	                component: JKCSNursing,
	            }, {
	                path: 'JKCSbaoJian', //保健
	                component: JKCSbaoJian,
	            }, {
	                path: 'JKCSeducation', //教育
	                component: JKCSeducation,
	            }]
            }, {
                path: 'JKCSpregnanting', //孕中
                component: JKCSpregnanting,
                children: [{
	                path: 'JKCSdiet', //饮食
	                component: JKCSdiet,
	            }, {
	                path: 'JKCSNursing', //护理
	                component: JKCSNursing,
	            }, {
	                path: 'JKCSbaoJian', //保健
	                component: JKCSbaoJian,
	            }, {
	                path: 'JKCSeducation', //教育
	                component: JKCSeducation,
	            }]
            }, {
                path: 'JKCSrecovery', //恢复
                component: JKCSrecovery,
                children: [{
	                path: 'JKCSdiet', //饮食
	                component: JKCSdiet,
	            }, {
	                path: 'JKCSNursing', //护理
	                component: JKCSNursing,
	            }, {
	                path: 'JKCSbaoJian', //保健
	                component: JKCSbaoJian,
	            }, {
	                path: 'JKCSeducation', //教育
	                component: JKCSeducation,
	            }]
            }]
        },
        {
            path: '/JKCSpersonalInfo',
            component: JKCSpersonalInfo
        },
        {
            path: '/JKCSinfoChange',
            component: JKCSinfoChange
        },
        {
        	path: '/JKCScollection',
            component: JKCScollection
        },
        {//用户登录
        	path: '/JKCSmeInfohaventlogin',
            component: JKCSmeInfohaventlogin
        },
        {//协议页面
            path: '/JKCSagreement',
            component: JKCSagreement
        },
        //个人信息页
        {
            path: '/JKCSmeInfoprofile',
            component: JKCSmeInfoprofile,
        },
        //登录跳转标签选择页
        {
            path: '/JKCSlebalChoice',
            component: JKCSlebalChoice,
        },
        //账号安全
        {
            path: '/JKCSaccountSecurity',
            component: JKCSaccountSecurity,
            children: [{
                path: 'JKCSchangePhone', //更换绑定手机
                component: JKCSchangePhone
            },{
                path: 'JKCSchangeWeichat', //更换绑定微信
                component: JKCSchangeWeichat
            }]
        },
        {//关心进入页
            path: '/JKCScareEntering',
            component: JKCScareEntering,
        },
        {//关心添加完成页
            path: '/JKCScareaddFinished',
            component: JKCScareaddFinished,
        },
        {//编辑
            path: '/JKCSedit',
            component: JKCSedit,
        },
        {//关心进入页
            path: '/JKCSaddCare',
            component: JKCSaddCare,
        },
        {//文章页
            path: '/JKCSparagraph/:deviceId',
            component: JKCSparagraph,
        },
    ]
}]