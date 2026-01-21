import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "小林的小破站",
	subtitle: "BLOG",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // 👇👇👇 在这里添加这一段 👇👇👇
    {
      name: '友链',
      url: '/friends',     // 对应 src/pages/friends.astro
      external: false,     // false 表示是站内链接
    },
    // 👆👆👆 添加结束 👆👆👆
  ],
}

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "小林&小破站",
	bio: "一个正在焦虑的大三学生....",
	links: [
    // 1. QQ (用 fa6-brands:qq 图标)
    {
      name: 'QQ',
      icon: 'fa6-brands:qq',       // 👈 QQ 图标 ID
      url: 'https://wpa.qq.com/msgrd?v=3&uin=482607843&site=qq&menu=yes', // 点击直接跳转QQ聊天
    },
    // 2. 微信 (用 fa6-brands:weixin 图标)
    {
      name: 'WeChat',
      icon: 'fa6-brands:weixin',   // 👈 微信 图标 ID
      // 微信通常不能直接跳转，你可以填你的微信号，或者填一张二维码图片的链接
      url: 'https://img.cdn1.vip/i/6970bd71706f4_1768996209.webp', 
    },
    // 3. 邮箱 (用 material-symbols:mail 图标)
    {
      name: 'Mail',
      icon: 'material-symbols:mail', // 👈 邮箱 图标 ID
      url: 'mailto:482607843@qq.com',
    },
	],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'All Rights Reserved',  // 👈 改成这个
  url: '',                      // 👈 把链接删掉，或者留空
}

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
}
export const commentConfig: CommentConfig = {
  disqus: {
    shortname: '',
  },
  giscus: {
    repo: 'XxiaoShen/my-blog',
    repoId: 'R_kgDOQ8GNWw',
    category: 'General',
    categoryId: 'DIC_kwDOQ8GNW84C1PDz',
    mapping: 'pathname',       // 对应你刚才选的映射方式
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme',
    lang: 'zh-CN',
	crossorigin="anonymous"
  },
}
