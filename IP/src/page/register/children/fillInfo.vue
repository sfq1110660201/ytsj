<template>
	<div>
		<section class="stepRegister">
			<div class="firstStep">
				<div class="step activeBake">1</div>
				<div class="littleWord activeColor">注册账号</div>
			</div>
			<span class="line1 lineLight"></span>
			<div class="secStep">
				<div class="step activeBake">2</div>
				<div class="littleWord activeColor">填写资料</div>
			</div>
			<span class="line2 "></span>
			<div class="thirdStep">
				<div class="step ">3</div>
				<div class="littleWord">注册完成</div>
			</div>
		</section>
		<section class="mainregiste addingRepair">
			<div class="mainStep">
				<span class="stepTitle">主题信息登记</span>
				<span class="lineGray"></span>
			</div>
			<form class="form-horizontal" role="form">
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>企业名称</label>
					<div class="col-sm-8 col-xs-8">
						<input type="text" class="form-control" placeholder="" v-model.trim="companyName" />
						<p class="form-control-static explain">请与营业执照名称保持一致，审核通过后不可修过</p>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{companyNameTip}}</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>所在地</label>
					<div class="col-sm-2 col-xs-2">
						<select class="form-control" v-model="pro" @change="getPro()">
							<option :value="item.name+item.proId" :id="item.proId" v-for="item in pros">{{item.name}}</option>
						</select>
					</div>
					<div class="col-sm-2 col-xs-2">
						<select class="form-control" v-model="city" @change="getCity()">
							<option :value="item.name+item.cityId"  v-for="item in citys">{{item.name}}</option>
						</select>
					</div>
					<div class="col-sm-2 col-xs-2">
						<select class="form-control" v-model="district" >
							<option :value="item.name"  v-for="item in districts">{{item.name}}</option>
						</select>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{areasTip}}</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"> </label>
					<div class="col-sm-8 col-xs-8">
						<input type="text" class="form-control" placeholder="详细地址" v-model.trim="address"/>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{addressTip}}</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>营业执照注册号</label>
					<div class="col-sm-8 col-xs-8">
						<input type="text" class="form-control" placeholder="" v-model.trim="license" />
						<p class="form-control-static explain">输入15营业执照注册号或18位统一社会信用代码</p>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{licenseTip}}</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>营业执照扫描件</label>
					<div class="col-sm-10 col-xs-10 uploadImgContent">
						<img class="ipLogo" :src="imgOneSrc" />
						<div class="upLoadImg">
							<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、gif;图片不可大于2M</p>
							<a href="javascript:void(0);" class="uploadA btn btn-default">
								<span>选择图片</span>
								<form id="formOne">
									<input class="uploadIpt" type="file" name="Filedata" v-on:change="iptOneChange" />
								</form>
							</a>
							<p class="form-control-static warned">{{imgOneTip}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>企业LOGO</label>
					<div class="col-sm-10 col-xs-10 uploadImgContent">
						<img class="ipLogo" :src="imgTwoSrc" />
						<div class="upLoadImg">
							<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、gif;图片不可大于2M</p>
							<a href="javascript:void(0);" class="uploadA btn btn-default">
								<span>选择图片</span>
								<form id="formTwo">
									<input class="uploadIpt" type="file" name="Filedata" v-on:change="iptTwoChange" />
								</form>
							</a>
							<p class="form-control-static warned">{{imgTwoTip}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>经营范围</label>
					<div class="col-sm-8 col-xs-8">
						<input type="text" class="form-control" placeholder="" v-model.trim="business" />
						<p class="form-control-static explain">请与营业执照名称保持一致，审核通过后不可修过</p>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{businessTip}}</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>行业领域</label>
					<div class="col-sm-3 col-xs-3">
						<select class="form-control" v-model="industry">
							<option>医疗单位</option>
							<option>IT|通信|电子|互联网</option>
							<option>房地产|建筑业</option>
							<option>商业服务业</option>
							<option>贸易|批发|零售|租赁业</option>
							<option>文体教育|公艺美术</option>
							<option>交通|运输|物流|仓储</option>
							<option>健康产业</option>
							<option>食品加工和流通行业</option>
							<option>保险|旅游|养老</option>
						</select>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{industryTip}}</p>
					</div>
				</div>
			</form>
		</section>
		<section class="mainregiste">
			<div class="mainStep">
				<span class="stepTitle">运营者信息登记</span>
				<span class="lineGray2"></span>
			</div>
			<form class="form-horizontal" role="form">
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>身份证姓名</label>
					<div class="col-sm-8 col-xs-8">
						<input type="text" class="form-control" placeholder="" v-model.trim="personName" />
						<p class="form-control-static explain">请与营业执照名称保持一致，审核通过后不可修过</p>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{nameTip}}</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>身份证件号码</label>
					<div class="col-sm-8 col-xs-8">
						<input type="text" class="form-control" placeholder="" v-model.trim="certificates" />
						<p class="form-control-static explain"></p>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{certificatesTip}}</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>证件照片</label>
					<div class="col-sm-10 col-xs-10 uploadImgContent">
						<img class="ipLogo" :src="imgThreeSrc" />
						<div class="upLoadImg">
							<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、gif;图片不可大于2M</p>
							<a href="javascript:void(0);" class="uploadA btn btn-default">
								<span>选择图片</span>
								<form id="formThree">
									<input class="uploadIpt" type="file" name="Filedata" v-on:change="iptThreeChange" />
								</form>
							</a>
							<p class="form-control-static warned">{{imgThreeTip}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>手机号码</label>
					<div class="col-sm-8 col-xs-8">
						<input type="text" class="form-control" placeholder="" v-model.trim="phone" />
						<p class="form-control-static explain"></p>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{phoneTip}}</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label"><span class="roundLight">●&nbsp;</span>联系邮箱</label>
					<div class="col-sm-8 col-xs-8">
						<input type="text" class="form-control" placeholder="" v-model.trim="mail" />
						<p class="form-control-static agreement">
							<input type="checkbox" name="" v-model="ischecked" />
							<router-link to="" class="toAgreeMent" @click.native="agreeShow">&nbsp;&nbsp;同意《医图视界链健康数据链AI平台》</router-link>
							<span class="form-control-static warned">{{checkTip}}</span>
						</p>
					</div>
					<div class="col-sm-2 col-xs-2">
						<p class="form-control-static warned">{{mailTip}}</p>
					</div>
				</div>
				<p class="next">
					<router-link to="" tag='li' class="tagli" @click.native="goCheck">提交审核</router-link>
				</p>
			</form>
		</section>
		<!--跳转模态窗-->
		<section class="registerSucceed" :style="{width: modelWid+'px', height: modelHet +'px'}" v-if="isModelShow">
			<div class="goPageWindow box-shadow">
				<div class="lineOne">
					<img class="checkRight" src="/static/IP/img/636574c6e136a799b7309a525894222.png" /> 注册成功
				</div>
				<p>您已经成功注册了医图数据管理平台</p>
				<p class="explain">系统将在<span class="explain">{{backtime}}</span>秒后自动转跳至用户中心，如果没有请点击
					<router-link :to="({ path: '/ipContent/yiTu/myYiTu', query: { enterpriseId: enterpriseId } })">手动跳转</router-link>
				</p>
			</div>
		</section>
		<!--协议模态窗-->
		<section class="registerSucceed" :style="{width: modelWid+'px', height: modelHet +'px'}" v-if="isAgreeShow">
			<div class="agreeContainer ">
				<div class="agreeHeader">
					<span class="left">医图视界—医图号用户注册协议</span>
					<span class="right" @click="closeAgreement">X</span>
				</div>
				<section class="agreementList">
					<p>欢迎您使用健康数据链分发系统—医图号平台！</p>
					<p>为了更好地为您提供服务，请您仔细阅读这份协议，理解认同后再进行注册。本协议是您与陕西医图视界信息科技有限公司（以下简称“医图视界公司”）就您注册、登录健康数据链分发系统医图号平台及使用等所涉及的全部行为所订立的权利义务规范。您在注册过程中点击“同意”等按钮、及注册后登录和使用时，均表明您已完全充分理解、同意并接受本协议，愿意遵守本协议及医图号平台公示的各项规则、规范的全部内容，若不同意则可停止注册、登录或使用医图号平台。</p>
					<p>一、名词定义</p>
					<p>1.1 您：指提交有效申请并注册后，在健康数据链分发系统医图号平台登录、上传、发布、提供链接等以各种形式传播内容（包括文字、图片、音频、视频、图表、漫画等）的自然人、法人或其他组织。</p>
					<p>1.2 健康数据链分发系统：是医图视界公司出品的一款资讯类应用，是基于数据挖掘的个性化推荐引擎。</p>
					<p>1.3 医图号平台：是医图视界公司借助移动互联网产品——健康数据链分发系统对自然人、法人或其他组织包括但不限于媒体及内容合作伙伴所开放的内容分发渠道。您注册医图号平台后可以通过医图号平台上传发布内容，向用户传播信息、与用户交流互动等。医图视界公司是提供网络信息存储空间的网络服务提供者。</p>
					<p>1.4 用户：指所有直接或间接使用健康数据链分发系统提供的相关服务的用户。</p>
					<p>二、帐户注册和使用</p>
					<p>2.1 在注册、使用和管理平台帐户时，请您使用真实、准确、合法、有效的相关身份证明材料及必要信息（包括您的姓名及电子邮件地址、联系电话、联系地址等），以便医图视界公司在必要时与您联系，并注意及时更新。为使您更好地使用医图号平台的各项服务，请您按照相关法律规定及医图号平台要求完成实名认证。您应当对您提供的帐号资料的真实性、合法性、准确性和有效性独立承担责任。如因此给医图视界公司或第三方造成损害的，您应当依法予以赔偿。</p>
					<p>2.2 为保障用户和公司利益，医图视界公司有权核查您提交的相关材料（如自然人身份证复印件、企业法人营业执照副本复印件、事业单位法人证书复印件、公司官方声明/说明等）后再决定是否核准您的注册申请。若您提交的材料或填写的信息不完整或不准确，则您可能无法使用本服务或在使用过程中受到限制。</p>
					<p>2.3 您所设置的帐户名不得违反国家法律法规及医图视界公司平台规则关于帐户名的管理规定，否则医图视界公司可对您的帐户名进行暂停使用或注销等处理，并向主管机关报告。</p>
					<p>2.4 您理解并承诺，您的帐户名称、头像和简介等注册信息中不得出现违法和不良信息，没有冒用、关联机构或社会名人，您在帐户注册过程中需遵守法律法规、社会主义制度、国家利益、公民合法权益、公共秩序、社会道德风尚和信息真实性等内容。</p>
					<p>2.5 您同意并授权，为了更好的为您提供服务以及确保您的帐户安全，医图视界公司可以根据您提供的手机号码、身份证号码等信息，向全国公民身份号码查询服务中心、电信运营商、金融服务机构等可靠单位发起用户身份真实性、用户征信记录、用户手机号码有效性状态等情况的查询。</p>
					<p>2.6 医图号平台帐号的所有权归医图视界公司所有，您注册申请通过后，您将拥有健康数据链分发系统医图号平台帐号的使用权，可以登录并在医图号平台上制作、复制、发布、传播内容。平台帐号的所有权归医图视界公司所有，公司有权因经营需要收回帐号。同时，禁止任何赠与、借用、租用、转让或售卖帐号等的行为。如您违反本协议内容，医图视界公司有权对该帐户进行暂停使用、注销或停止提供服务等处理，且不承担任何法律责任，由此导致的包括并不限于您通讯中断、资料和内容等清空等损失由您自行承担。</p>
					<p>三、用户个人信息保护</p>
					<p>3.1 为了更好地为您提供服务和帮助、保护您的合法权益，请您保证申请服务时所提供的信息是真实、准确、合法、有效的，并注意及时更新，以免在使用过程中受到限制或无法使用。</p>
					<p>3.2 医图视界公司将保护用户个人信息作为公司发展的最基本原则之一，未经您的同意，不会向其他任何公司、组织或个人披露您的个人信息，法律法规另有规定的除外。</p>
					<p>3.3 医图视界公司邀请您和医图视界公司共同努力，保护上亿用户的切身利益。请您在使用健康数据链分发系统医图号平台的过程中，不要以搜集、复制、存储、传播等任何方式使用其他用户的个人信息，否则，由此产生的后果需您自行承担。</p>
					<p>四、您的权利和义务</p>
					<p>4.1 您需要对注册和使用时提交的信息及材料真实性、准确性、合法性、有效性负责，如因此引起的问题，由您承担全部法律责任。</p>
					<p>4.2 请您妥善保管您的帐户信息，并对此帐户下发生的一切活动承担全部法律责任。不向任何第三方透露帐户或密码信息，如出现或怀疑帐号和密码遭到他人使用，请尽快通知医图视界公司，以免您的利益受到损失。</p>
					<p>4.3 请您保证对在健康数据链分发系统医图号平台制作、复制、上传、发布、传播的任何内容享有合法权益，若您发布的内容发生权利纠纷或侵犯了任何第三方的合法权益，需您承担全部法律责任。</p>
					<p>4.4 请您遵守本协议的各项条款，并正确、适当地使用、运营、管理此平台账号，如您违反本协议中的任何条款，医图视界公司有权在任何时候依据本协议中止或终止对您提供服务。</p>
					<p>4.5 如您注册医图号帐号后连续三个月不登录该帐号，为避免资源浪费，医图视界公司有权收回该帐号，因此带来的损失将由您自行承担。</p>
					<p>4.6 您的言行应遵守《计算机信息网络国际联网安全保护管理办法》、《互联网信息服务管理办法》、《互联网电子公告服务管理规定》、《维护互联网安全的决定》、《互联网新闻信息服务管理规定》等相关法律规定，您使用健康数据链分发系统医图号平台过程中所制作、复制、上传、发布、传播的任何内容，包括但不限于帐户头像、名称、用户说明、注册信息及其他资料，或文字、语音、图片、视频、图文、图表、漫画等发送、回复消息、评论和相关链接页面，以及其他使用健康数据链分发系统帐户或健康数据链分发系统医图号平台服务所产生的内容，不得包含如下法律、法规和政策禁止的内容：</p>
					<p>(1) 反对宪法所确定的基本原则的；</p>
					<p>(2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p>
					<p>(3) 损害国家荣誉和利益的；</p>
					<p>(4) 煽动民族仇恨、民族歧视，破坏民族团结的；</p>
					<p>(5) 破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
					<p>(6) 散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
					<p>(7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
					<p>(8) 侮辱或者诽谤他人，侵害他人合法权益的；</p>
					<p>(9) 含有法律、法规和政策禁止的其他内容的信息。</p>
					<p>4.7 为保证健康数据链分发系统的正常运营及用户的良好体验，请您不要利用健康数据链分发系统医图号平台制作、复制、上传、发布、传播如下内容： </p>
					<p>(1) 含有任何性或性暗示以及任何其他低俗类信息；</p>
					<p>(2) 骚扰、垃圾广告；</p>
					<p>(3) 涉及他人隐私、个人信息或资料的任何信息；</p>
					<p>(4) 侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的任何信息；</p>
					<p>(5) 含有其他干扰健康数据链分发系统正常运营、侵犯其他用户或其他第三方合法权益内容的信息。</p>
					<p>4.8 为确保医图视界公司和用户的利益，您请在使用本平台时，不要进行如下行为（该行为是指使用健康数据链分发系统帐户和健康数据链分发系统医图号平台所进行的任何行为，包括但不限于注册登录、帐号运营、管理及推广以及其他行为）：</p>
					<p>(1) 提交、发布虚假信息，或冒充、利用他人名义进行相关活动；</p>
					<p>(2) 强制、诱导其他用户关注、点击链接页面或分享信息；</p>
					<p>(3) 虚构事实、隐瞒真相以误导、欺骗他人；</p>
					<p>(4) 侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利；v</p>
					<p>(5) 未经医图视界公司书面许可使用插件、外挂或其他第三方工具、服务接入本服务和相关系统；</p>
					<p>(6) 利用健康数据链分发系统医图号平台及帐户从事违法犯罪活动；</p>
					<p>(7) 制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播；</p>
					<p>(8) 其他违反法律法规规定、侵犯其他用户合法权益、干扰产品正常运营或未经医图视界公司明示授权的行为。</p>
					<p>4.9 请您在任何情况下都不要私自使用医图视界公司的包括但不限于“医图视界”、“健康数据链分发系统”、“头条”、“医图号”和“toutiao.com”在内的任何商标、服务标记、商号、域名、网站名称或其他显著品牌特征等。未经医图视界公司事先书面同意，您不得将本平台标识以任何方式展示、使用或申请注册商标、进行域名注册等，也不得实施向他人明示或暗示有权展示、使用、或其他有权处理本平台标识的行为。您由于非法使用本平台标识给本平台或他人造成损失的，由您承担相关法律责任。</p>
					<p>4.10 若您需对健康数据链分发系统医图号平台内容创作衍生品或投放商业广告，请您另外提交书面授权申请，在符合条件且得到医图视界公司同意下，您方可通过该平台进行广告或推广等商业活动。</p>
					<p>五、医图视界公司的权利和义务</p>
					<p>5.1 为保障用户和公司的利益，医图视界公司有权对您注册时提交的材料和信息进行审查，并有权要求您改正或补充相关材料，请您理解。如果您拒绝改正或补充相关材料，您可能无法使用本服务。医图视界公司的审查不代表对您提交的材料和信息的真实性、准确性、真实性、合法性负责。您应当对该材料和信息独立承担责任，如因此给医图视界公司或第三方造成损害的，您应当承担法律责任并予以赔偿。</p>
					<p>5.2 医图视界公司为健康数据链分发系统平台及医图号平台的开发、运营提供技术支持，并对该平台的开发和运营等过程中产生的所有数据和信息等享有全部权利。</p>
					<p>5.3 如果您停止使用本服务或服务被终止或取消，医图视界公司有权自主决定是否从服务器上永久地删除您的数据且无需向您返还任何数据。</p>
					<p>5.4 医图视界公司保留随时变更、暂停、限制、终止或撤销健康数据链分发系统医图号平台服务的权利。公司可通过网页公告、电子邮件、电话或信件传送等方式向您发出通知，通知在发送时即视为已送达收件人，届时公司无需向您承担任何责任。</p>
					<p>5.5 您充分理解并同意：本服务中可能包括医图视界公司针对个人或企业推出的信息发布或品牌推广服务，您同意医图视界公司有权在健康数据链分发系统医图号平台显示平台和/或第三方供应商、合作伙伴的商业广告或商业信息。</p>
					<p>六、知识产权</p>
					<p>6.1 在本服务中，由您通过健康数据链分发系统医图号平台上传、发布的任何内容的知识产权归属您或原始著作权人所有，以上内容您授权医图视界公司使用并授权医图视界公司有权以医图视界公司自己的名义或委托专业第三方对侵犯以上内容著作权的行为进行维权，维权形式包括但不限于：监测侵权行为、发送维权函、提起诉讼或仲裁、调解、和解等任何方式，甲方可对维权事宜做出决策并独立实施。医图视界公司在本服务中提供的内容（包括但不限于网页、文字、图片、音频、视频、图表等）的知识产权属于医图视界公司所有。医图视界公司提供本服务时所依托的软件的著作权、专利权及其他知识产权均归医图视界公司所有。</p>
					<p>6.2 您应当是在注册资料中提交的网站的合法权利人。您充分的理解并同意，为提高您的网站内容曝光率，本协议的合作范围是您提交的网站的全部内容。除非您另有明确表示，您在注册时点击同意，即表明您同意授权医图视界公司收录、链接您网站中的已有及将来的全部内容，并通过系统以您的注册帐户自动发布。如您对授权范围另有需求可以书面方式通知医图视界公司并另行签订授权协议。</p>
					<p>6.3 您理解并且同意，为持续改善医图视界为您提供的各项服务，您授予医图视界公司及其关联方、合作方对您上传发布的任何内容具有全世界范围内的、永久的、不可撤销的、免费的、非独家的使用权。</p>
					<p>6.4 本服务所包含的内容的知识产权均受到法律保护，未经医图视界公司、用户或相关权利人书面许可，任何人不得以任何形式进行使用或创造相关衍生作品。</p>
					<p>七、隐私政策</p>
					<p>7.1 您知悉并同意：个人隐私信息是指能够对您进行个人辨识或涉及个人通信的信息，包括您的真实姓名、身份证号、手机号码、银行账户、IP地址等。非个人隐私信息是指您对本服务的操作状态以及使用习惯等一些明确且客观反映在本平台服务器端的基本记录信息和其他一切个人隐私信息范围外的普通信息，以及您同意公开的上述隐私信息。</p>
					<p>7.2 因您使用平台不同服务内容时，为保证功能服务的完整体验，产品可能会收集到您的地理位置、读取您的通讯录、开启您使用工具的摄像头、话筒，如您不希望开启相关功能，可停止使用对应服务，医图视界公司不会开启与您使用的服务无关的功能。</p>
					<p>7.3 本平台不对外公开或向第三方提供您的注册资料及用户在使用网络服务时存储在本网站的非公开内容，但下列情况除外：</p>
					<p>（1）事先获得您的明确授权；</p>
					<p>（2）根据有关的法律法规要求；</p>
					<p>（3）按照相关政府主管部门的要求；</p>
					<p>（4）该第三方同意承担与本平台同等的保护隐私的责任。</p>
					<p>7.4 在不透露您隐私资料的前提下，本平台有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。</p>
					<p>7.5 为了运营和改善健康数据链分发系统医图号平台的技术和服务，便于本平台向您及用户提供更好的体验和提高服务质量，医图视界公司将可能会自行收集使用或向第三方提供您的非个人隐私信息。</p>
					<p>八、法律责任</p>
					<p>8.1 若您提交的注册信息和材料不真实、不完整、不合法或无效，那么导致或产生的一切法律责任由您承担。医图视界公司有权随时封禁或删除您的平台帐号，以及中止或终止为您提供健康数据链分发系统医图号平台的相关服务。</p>
					<p>8.2 您理解并认可，健康数据链分发系统医图号平台为提供信息分享、传播及获取的平台，您在使用健康数据链分发系统医图号平台时，请您自行对内容加以判断，并承担因使用内容而引起的所有风险。您须为自己注册帐户下的一切行为负责，包括您所发表内容的真实性、合法性、准确性、有效性，以及承担因账号使用、运营、管理行为产生的结果。您应对健康数据链分发系统医图号平台中的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容真实性、合法性、准确性、有效性的依赖而产生的风险。医图视界公司无法且不会对因您的行为而导致的损失或损害承担责任。 如果您发现任何人违反本协议规定或以其他不当的方式使用健康数据链分发系统医图号平台服务，请立即举报或投诉，医图视界公司将依法进行处理。</p>
					<p>8.3 对违反有关法律法规或本协议规定的行为，医图视界公司将依法律规定及上述规则等加以合理判断进行处理，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息并向有关部门报告等。</p>
					<p>8.4 若您上传、发布的内容或其他在医图号平台上从事的行为侵害他人利益并引发第三方的任何索赔、要求或赔偿的，需由您承担全部法律责任。若因此给医图视界公司或第三方造成任何损失，您应负责赔偿并使之免受损害，损失包括但不限于诉讼费用、律师费用、和解费用、罚款或生效法律文书中规定的损害赔偿金额及其他直接或间接支出费用。</p>
					<p>8.5 若医图视界公司发现您不当使用本平台帐号或因您的帐号被他人举报投诉时，医图视界公司有权不经通知随时删除相关内容，并视行为情节对违规帐号进行处理，处理方式包括但不限于警告、删除部分或全部订阅用户、限制或禁止使用全部或部分功能、帐号封禁甚至注销，并有权视具体情况而公告处理结果。</p>
					<p>8.6 因技术故障等不可抗事件影响到服务的正常运行的，本平台及其合作单位承诺在第一时间内与相关单位配合，及时处理进行修复，但您因第三方如电信部门的通讯线路故障、技术问题、网络、电脑故障、系统不稳定性及其他各种不可抗力原因而遭受的一切损失，本平台及其合作单位不承担责任。</p>
					<p>九、其他约定</p>
					<p>9.1 您使用本服务即视为您已阅读并同意受本协议的约束。</p>
					<p>9.2 必要时医图视界公司会对本协议的部分内容进行修改。修改后，将在页面显著位置提示协议有更新，您应及时查看更新后的协议。如果您同意接受修改后的协议，您可以继续使用健康数据链分发系统医图号平台；如果您不接受则应停止使用健康数据链分发系统医图号平台服务。</p>
					<p>9.3 您和医图视界公司均是独立的主体，在任何情况下本协议不构成双方之间的代理、合伙、合营或雇佣关系。</p>
					<p>9.4 本协议的成立、生效、履行、解释及纠纷解决，都适用于中华人民共和国的法律。本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。</p>
					<p>9.5 如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决。协商不成时，任何一方均应向医图视界公司所在地有管辖权的人民法院提起诉讼。</p>
					<p>9.6 本协议签订地为中华人民共和国西安市碑林区。</p>
				</section>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isModelShow: false,
				isAgreeShow: false,
				modelWid: 0,
				modelHet: 0,
				companyName: "",
				companyNameTip: "",

				pro: "",
				city: "",
				district: "",
				areasTip: "",
				
				address:"",
				addressTip:"",

				license: "",
				licenseTip: "",

				imgOneSrc: "",
				imgOneTip: "",

				imgTwoSrc: "",
				imgTwoTip: "",

				imgThreeSrc: "",
				imgThreeTip: "",

				business: "",
				businessTip: "",

				industry: "",
				industryTip: "",

				personName: "",
				nameTip: "",

				certificates: "",
				certificatesTip: "",

				phone: sessionStorage.getItem("phoneNumber"),
				phoneTip: "",

				mail: sessionStorage.getItem("mailName"),
				mailTip: "",

				ischecked: false,
				checkTip: "",
				
				backtime:5,
				enterpriseId:"",
				
				//地域选择三级联动
				pros:[],
				citys:[],
				districts:[]

			}
		},
		mounted() {
			this.$nextTick(function() {
				this.modelWid = window.screen.availWidth;
				this.modelHet = window.screen.availHeight;
				this.getAreas();
			})
		},
		components: {

		},
		methods: {
			getAreas(){
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/basicdic/chineseregions?type=p", {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						var areasData=res.data.data;
						for(var i=0;i<areasData.length;i++){
							this.pros.push({
								name:areasData[i].a,
								proId:areasData[i].i
							})
						}
						
					},
					function() {
						console.log("获取TOKEN失败")
					}
				)
			},
			goCheck() {
				if(this.companyName!=""){
					this.companyNameTip="";
					if(this.pro!="" && this.city!=""){
						this.areasTip="";
						if(this.address!=""){
							this.addressTip=""
							if(this.license!=""){
								this.licenseTip=""
								if(this.imgOneSrc!=""){
									this.imgOneTip=""
									if(this.imgTwoSrc!=""){
										this.imgTwoTip=""
										if(this.business!=""){
											this.businessTip=""
											if(this.industry!=""){
												this.industryTip=""
												if(this.personName!=""){
													this.nameTip=""
													if(this.certificates!="" && this.certificates.length>=15 && this.certificates.length<19){
														this.certificatesTip=""
														if(this.imgThreeSrc!=""){
															this.imgThreeTip=""
															if(this.phone!=""){
																if(/^1(3|4|5|7|8)\d{9}$/.test(this.phone)){
																	this.phoneTip=""
																	if(this.mail!=""){
																		var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
																		if(myreg.test(this.mail)) {
																			this.mailTip=""
																			if(this.ischecked==true){
																				this.checkTip=""
																				this.sendInfo();
																			}else{
																				this.checkTip="请阅览并勾选协议"
																			}
																		}else{
																			this.mailTip="邮箱不符合规范"
																		}
																	}else{
																		this.mailTip="请输入注册邮箱"
																	}
																}else{
																	this.phoneTip="输入手机不符合规范"
																}
															}else{
																this.phoneTip="请输入手机号码"
															}
														}else{
															this.imgThreeTip="请选择运营者身份证图片"
														}
													}else{
														this.certificatesTip="请输入运营者份证号"
													}
												}else{
													this.nameTip="请输入运营者姓名"
												}
											}else{
												this.industryTip="请选择行业领域"
											}
										}else{
											this.businessTip="请输入经营范围"
										}
									}else{
										this.imgTwoTip="请选择企业logo图片"
									}
								}else{
									this.imgOneTip="请选择营业执照扫描件图片"
								}
							}else{
								this.licenseTip="请输入执照注册号"
							}
						}else{
							this.addressTip="请输入详细地址"
						}
					}else{
						this.areasTip="请选择所在地域";
					}
				}else{
					this.companyNameTip="请输入企业名称";
				}
			},
			sendInfo(){
				var TOKEN = localStorage.getItem("TOKEN")
				var registerId=sessionStorage.getItem("registerId")
				var proEnd=this.pro.length-6
				var pro=this.pro.slice(0,proEnd)
				var cityEnd=this.city.length-6;
				var city=this.city.slice(0,cityEnd)
				var data = {
					"companyname" : this.companyName,
					"provinces" : pro,
					"cities" : city,
					"area" : this.district,
					"address" : this.address,
					"organizationcode" : this.license,
					"businesslicensephoto" : this.imgOneSrc,
					"businessscope" : this.business,
					"logopic" : this.imgTwoSrc,
					"industry" : this.industry,
					"actualname" : this.personName,
					"idtype" : "身份证",
					"idnumber" : this.certificates,
					"idphoto" : this.imgThreeSrc,
					"linkphone" : this.phone,
					"linkemail" : this.mail
				}
				this.$http.post("https://api.lotusdata.com/ip/v1/reg/detailregister/"+registerId, data, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						console.log(res)
						if(res.data.code==0){
							this.testNameAndPssword();
//							
							
						}
					},
					function() {
						console.log("数据传输失败")
					}
				)
			},
			testNameAndPssword() { //匹配用户名和密码
				this.$http.get("https://api.lotusdata.com/v1/buser/token", {
					params: {
						username: sessionStorage.getItem("mailName"),
						password: sessionStorage.getItem("password"),
						refreshtoken: 0
					}
				}).then(
					function(res) {
						if(res.data.code == 0 && res.data.data != "") {
							console.log(res.data)
							var TOKEN = res.data.token;
							this.enterpriseId = res.data.data.Enterpriseid;
							localStorage.setItem("TOKEN", 'JWT ' + TOKEN)
							localStorage.setItem("enterpriseId",this.enterpriseId)
							localStorage.setItem("emailName",res.data.data.Email)
							localStorage.setItem("phoneNum",res.data.data.Phone)
							var that=this
							that.isModelShow=true;
							var times=setInterval(function(){
								that.backtime--;
								if(that.backtime==0){
									clearInterval(times)
									that.$router.push({ path: "/ipContent/yiTu/myYiTu", query: { enterpriseId: that.enterpriseId } })
									that.isModelShow=false;
								}
							},1000)
						} else {
							console.log("参数错误")
						}
					},
					function() {
						console.log("获取TOKEN失败")
					}
				)
			},
			agreeShow() {
				this.isAgreeShow = true;
			},
			closeAgreement() {
				this.isAgreeShow = false;
			},
			iptOneChange: function(e) { //判断并加载营业执照扫描件
				e.preventDefault();
				var files = e.target.files;
				var data = new FormData();
				data.append('avatar', files[0]);
				var imgFile = files[0];
				var imgType = imgFile.name.substring(imgFile.name.indexOf(".") + 1, imgFile.name.length); //获取图片格式
				var imgSize = imgFile.size; //获取图片大小
				//console.log(imgFile)
				if(imgType == "png" || imgType == "jpg" || imgType == "gif" || imgType == "jpeg") {
					//console.log(imgType)
					if(imgSize < 2 * 1024 * 1024) {
						this.imgOneTip = " ";
						this.sendimgOne();
					} else {
						this.imgOneTip = "*图片大小超出2M"
					}
				} else {
					this.imgOneTip = "*图片不符合要求"
				}
			},
			sendimgOne() {
				var TOKEN = localStorage.getItem("TOKEN") //获取token
				var form = document.getElementById('formOne');
				var Filedata = new FormData(formOne);
				this.$http.post("https://api.lotusdata.com/v1/file/standardupload", Filedata, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						var newSrc = res.data.data
						this.imgOneSrc = newSrc;
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			iptTwoChange: function(e) { //判断并加载企业LOGO
				e.preventDefault();
				var files = e.target.files;
				var data = new FormData();
				data.append('avatar', files[0]);
				var imgFile = files[0];
				var imgType = imgFile.name.substring(imgFile.name.indexOf(".") + 1, imgFile.name.length); //获取图片格式
				var imgSize = imgFile.size; //获取图片大小
				if(imgType == "png" || imgType == "jpg" || imgType == "gif" || imgType == "jpeg") {
					if(imgSize < 2 * 1024 * 1024) {
						this.imgTwoTip = " ";
						this.sendimgTwo();
					} else {
						this.imgTwoTip = "*图片大小超出2M"
					}
				} else {
					this.imgTwoTip = "*图片不符合要求"
				}
			},
			sendimgTwo() {
				var TOKEN = localStorage.getItem("TOKEN") //获取token
				var form = document.getElementById('formTwo');
				var Filedata = new FormData(formTwo);
				this.$http.post("https://api.lotusdata.com/v1/file/standardupload", Filedata, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						var newSrc = res.data.data
						this.imgTwoSrc = newSrc;
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			iptThreeChange: function(e) { //判断并加载证件照
				e.preventDefault();
				var files = e.target.files;
				var data = new FormData();
				data.append('avatar', files[0]);
				var imgFile = files[0];
				//console.log(imgFile)
				var imgType = imgFile.name.substring(imgFile.name.indexOf(".") + 1, imgFile.name.length); //获取图片格式
				var imgSize = imgFile.size; //获取图片大小
				if(imgType == "png" || imgType == "jpg" || imgType == "gif" || imgType == "jpeg") {
					if(imgSize < 2 * 1024 * 1024) {
						this.imgThreeTip = " ";
						this.sendimgThree();
					} else {
						this.imgThreeTip = "*图片大小超出2M"
					}
				} else {
					this.imgThreeTip = "*图片不符合要求"
				}
			},
			sendimgThree() {
				var TOKEN = localStorage.getItem("TOKEN") //获取token
				var form = document.getElementById('formThree');
				var Filedata = new FormData(formThree);
				this.$http.post("https://api.lotusdata.com/v1/file/standardupload", Filedata, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						var newSrc = res.data.data
						this.imgThreeSrc = newSrc;
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			getPro(e){
				//debugger
				this.city="";
				this.citys=[];
				var e=event;
				var start=this.pro.length-6
				var end=this.pro.length
				var proID=this.pro.slice(start,end)
				this.getCitys(proID)
			},
			getCitys(proID){
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/basicdic/chineseregions", {
					params: {
						type: "c",
						id: proID,
					},
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res)
						var areasData=res.data.data;
						for(var i=0;i<areasData.length;i++){
							this.citys.push({
								name:areasData[i].a,
								cityId:areasData[i].i
							})
						}
						
					},
					function() {
						console.log("获取TOKEN失败")
					}
				)
			},
			getCity(){
				this.district="";
				this.districts=[];
				var e=event;
				e.stopPropagation();
				var start=this.city.length-6
				var end=this.city.length
				var districtID=this.city.slice(start,end)
				//console.log(districtID)
				//console.log(e.target.value)
				this.getDistricts(districtID)
			},
			getDistricts(districtID){
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/basicdic/chineseregions", {
					params: {
						type: "a",
						id: districtID,
					},
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res)
						var areasData=res.data.data;
						for(var i=0;i<areasData.length;i++){
							this.districts.push({
								name:areasData[i].a,
								cityId:areasData[i].i
							})
						}
						
					},
					function() {
						console.log("获取TOKEN失败")
					}
				)
			}
		}

	}
</script>

<style lang="scss" scoped>
	.stepRegister {
		position: relative;
		left: 167px;
		.firstStep {
			position: absolute;
			left: 0;
		}
		.line1 {
			position: absolute;
			left: 59px;
			display: block;
			width: 282px;
			height: 20px;
			border-bottom: 2px solid #C7C7C7;
		}
		.secStep {
			position: absolute;
			left: 320px;
		}
		.line2 {
			position: absolute;
			left: 380px;
			display: block;
			width: 282px;
			height: 20px;
			border-bottom: 2px solid #C7C7C7;
		}
		.thirdStep {
			position: absolute;
			left: 640px;
		}
	}
	
	#mainregiste {
		overflow-y: scroll;
		top: 120px;
		width: 915px;
		margin: 0 auto;
	}
	
	.addingRepair {
		padding-top: 120px;
	}
	
	.mainregiste {
		/*position: relative;*/
		top: 120px;
		/*background: #fff;*/
		width: 915px;
		/*height: 300px;*/
		/*border: 1px solid #C7C7C7;*/
		/*background: #fff;*/
		margin: 0 auto;
		.mainStep {
			overflow: hidden;
			margin-bottom: 40px;
			span {
				float: left;
			}
		}
		.stepTitle {
			border-bottom: 2px solid #4781ea;
			padding-bottom: 10px;
			font-size: 20px;
		}
		.lineGray {
			border-bottom: 2px solid #C7C7C7;
			height: 40px;
			width: 792px;
		}
		.lineGray2 {
			border-bottom: 2px solid #C7C7C7;
			height: 40px;
			width: 772px;
		}
	}
	
	.registerSucceed {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 666;
		background: rgba(255, 255, 255, .8);
		.goPageWindow {
			width: 550px;
			height: 435px;
			background: #fff;
			position: absolute;
			left: 50%;
			top: 40%;
			margin-left: -275px;
			margin-top: -200px;
			border-radius: 5px;
			padding: 25px;
			p {
				text-align: center;
				margin-top: 20px;
			}
			.lineOne {
				color: #1e67ea;
				font-size: 25px;
				text-align: center;
				margin-top: 150px;
				.checkRight {
					width: 30px;
					vertical-align: middle;
				}
			}
		}
		.agreeContainer {
			width: 700px;
			height: 400px;
			background: #fff;
			position: absolute;
			left: 50%;
			top: 40%;
			margin-left: -330px;
			margin-top: -180px;
			border: 5px solid #646464;
			overflow: hidden;
			.agreeHeader {
				overflow: hidden;
				padding: 5px 10px;
				background: #fbfbfb;
				border: 1px solid #eee;
				.right {
					cursor: pointer;
				}
			}
			.agreementList {
				padding: 10px 10px;
				overflow: hidden;
				overflow-y: scroll;
				height: 360px;
				p {
					font-size: 13px;
				}
			}
		}
		.box-shadow {
			-webkit-box-shadow: 0 0 20px #767879;
			-moz-box-shadow: 0 0 20px #767879;
			box-shadow: 0 0 20px #767879;
		}
	}
	
	.lineLight {
		border-bottom: 2px solid #4781ea!important;
	}
	
	.activeBake {
		color: #4781ea!important;
		border: 2px solid #4781ea!important;
	}
	
	.activeColor {
		color: #4781ea!important;
	}
	
	.roundLight {
		color: #4781ea!important;
		/*font-size: 25px;*/
	}
	
	.step {
		font-size: 20px;
		color: #C7C7C7;
		background: #fff;
		margin-left: 20px;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 36px;
		border-radius: 100%;
		border: 2px solid #C7C7C7;
	}
	
	.littleWord {
		font-size: 20px;
		margin-top: 10px;
		padding-left: 5px;
	}
	
	input::-webkit-input-placeholder {
		color: #C7C7C7
	}
	
	input:-moz-placeholder {
		color: #C7C7C7
	}
	
	input::-moz-placeholder {
		color: #C7C7C7
	}
	
	input:-ms-input-placeholder {
		color: #C7C7C7
	}
	
	.form-group {
		margin-bottom: 30px;
		.control-label {
			text-align: left;
		}
	}
	
	.warned {
		color: #f8534c;
		font-size: 13px;
	}
	
	.explain {
		color: #C7C7C7;
	}
	
	.agreement {
		margin-top: 30px;
		.toAgreeMent {
			color: #4781ea;
		}
	}
	
	.uploadImgContent {
		overflow: hidden;
	}
	
	.ipLogo {
		float: left;
		width: 133px;
		height: 133px;
		background: #f5f5f5;
	}
	
	.upLoadImg {
		float: left;
		margin-left: 15px;
	}
	
	.upLoadImgDescription {
		margin-bottom: 77px;
		color: #C7C7C7;
	}
	
	.next {
		/*position: relative;*/
		/*top: 165px;*/
		height: 50px;
		width: 400px;
		text-align: center;
		line-height: 50px;
		border: 2px solid #4781ea;
		margin: 50px auto 100px;
		/*margin-bottom: 100px;*/
		.tagli {
			font-size: 25px;
			color: #4781ea;
		}
	}
	/*图片上传控件*/
	
	.uploadA {
		width: 100px;
		height: 30px;
		overflow: hidden;
		position: relative;
		#formOne .uploadIpt,
		#formTwo .uploadIpt,
		#formThree .uploadIpt {
			/*display: inline-block;*/
			width: 100%;
			height: 100%;
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 999;
		}
		span {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 3px;
			left: 0;
			z-index: 2;
		}
	}
</style>