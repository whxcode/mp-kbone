/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */
const path = require('path') // 定义path tabBar那边用

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        home: [
            '/(home|index)?',
            '/index.html',
            '/test/(home|index)',
        ],
        other: [
            '/test/list/:id',
            '/test/detail/:id',
        ],
        user: ['/user'],
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
    },
    generate: {
        autoBuildNpm: 'npm',
        tabBar: { // 配置tabBar
            color: '#cdcdcd', // 字体颜色 十六进制
            selectedColor: '#39cffc', // 选中字体颜色 十六进制
            backgroundColor: '#FFFFFF', // 背景色 十六进制
            borderStyle: 'black', // 上边框颜色 black/ white
            list:[{ // 列表 2-5
                pageName: 'home', // 页面路径 相当于官方得 pagePath
                text: '首页', // 按钮文字
                iconPath: path.resolve(__dirname, '../src/static/icon/index.png'), // 图片路径
                selectedIconPath: path.resolve(__dirname, '../src/static/icon/index1.png'), // 选中时图片路径
            },{
                pageName: 'user', // 页面路径 相当于官方得 pagePath
                text: '我的',
                iconPath: path.resolve(__dirname, '../src/static/icon/user.png'), // 图片路径
                selectedIconPath: path.resolve(__dirname, '../src/static/icon/user1.png'), // 选中时图片路径
            },],
            position: 'bottom', // tabBar 位置
            custom: false, // 自定义 tabBar
        },
    },
    app: {
        navigationBarBackgroundColor: "#3FCDEB",
        backgroundTextStyle: 'dark',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: 'mp-kbone',
    },
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
    global: {
        share: true,
        windowScroll: false,
        backgroundColor: '#F7F7F7',
    },
    pages: {},
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
    projectConfig: {
        projectname: 'kbone-template-vue',
        appid: 'wxdb1b3a43a6c03f9a',
    },
}
