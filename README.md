# 🌌 星系风格个人介绍主页

<p align="center">
  <strong>基于 Astro 6 + Three.js 打造的高颜值、沉浸式暗黑星空个人主页 & 作品集</strong>
</p>

<p align="center">
  搭载 GPU 加速的 5,000+ 动态交互圆形光晕粒子星空，内置 4 套实验性暗黑调色板与 360° 流水转圈流光按钮。
</p>

<p align="center">
  <a href="https://astro.build/"><img src="https://img.shields.io/badge/Astro-6.x-883AEA?style=for-the-badge&logo=astro&logoColor=white" alt="Astro 6"></a>
  <a href="https://threejs.org/"><img src="https://img.shields.io/badge/Three.js-v0.184-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-GPL--3.0-blue?style=for-the-badge" alt="License"></a>
</p>

<p align="center">
  <a href="https://ai-work-team-demo.pages.dev"><strong>🌐 在线演示 DEMO (Live Demo)</strong></a> ·
  <a href="#-3-分钟极速部署指南"><strong>🚀 3 分钟部署指南</strong></a> ·
  <a href="#2️⃣-第二步：替换为自己的内容"><strong>✍️ 修改个人内容</strong></a>
</p>

---

## ✨ 亮点特色

- 🌌 **3D 粒子梦幻星空**：基于 Three.js 动态生成的羽化圆形发光粒子，随鼠标平滑交互。
- 🧪 **4 套实验性暗黑主题**：顶部右侧 Labs 图标一键切换【幽蓝】、【赛博翡翠】、【极光紫粉】与【宇宙琥珀金】，3D 粒子色彩无缝联动。
- 💫 **360° 流水转圈按钮**：核心按钮自带顺时针激光流光边框，搭配文字白色透明荧光笔划过动画。
- 📱 **单屏与自适应响应式**：首页锁定单屏极简展示，About 页面提供卡片化丰富履历。

---

## 🚀 3 分钟极速部署指南

只需简单的 3 个步骤，即可拥有属于您自己的星系风格个人主页：

### 1️⃣ 第一步：Fork / 克隆仓库

点击本仓库右上角的 **Fork** 按钮复制到您自己的 GitHub 账号下，或在本地克隆：

```bash
git clone https://github.com/FrankWkd-Plus/My-Personal-Introduction.git
cd My-Personal-Introduction
npm install
```

---

### 2️⃣ 第二步：替换为自己的内容

您只需要修改以下 **3 个文件** 即可完成个人主页定制：

#### 🔹 1. 首页文字与按钮 (`src/components/Hero.astro`)
- 修改 `HELLO, I'M` 与 `Outwardly Verse` 大标题文字。
- 修改 `About Me` 跳转链接与 `Read Blog` 外部博客链接。

#### 🔹 2. 顶部导航与 GitHub 图标 (`src/components/Navigation.astro`)
- 修改 Logo 名字 `Outwardly Verse`。
- 将左上角与抽屉菜单中的 `https://github.com/FrankWkd-Plus` 替换为您自己的 GitHub 主页地址。

#### 🔹 3. 个人简历与技能卡片 (`src/pages/about.astro`)
- 修改工作室名称、Slogan 与提示框。
- 在 `.skills-matrix` 中修改或替换您擅长技术的 Shields.io 徽章。
- 在 `.projects-grid` 与 `.contacts-grid` 中填入您的个人项目及联系方式（Email、小红书、Telegram 等）。

---

### 3️⃣ 第三步：免费部署到 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，进入 **Workers & Pages** -> **Create application** -> **Pages**。
2. 选择 **Connect to Git** 并关联您刚才 Fork 的 GitHub 仓库。
3. 在构建设置中填入以下参数（仅需 3 个配置）：

| 配置项 (Setting) | 填写内容 (Value) |
| :--- | :--- |
| **Framework preset (框架预设)** | `Astro` |
| **Build command (构建命令)** | `npm run build` |
| **Build output directory (输出目录)** | `dist` |
| **Root directory (根目录)** | 留空（或填 `/`） |

4. 点击 **Save and Deploy**，等待 30 秒构建完成，即可获得全球 CDN 加速的免费个人主页！🎉

---

## 🛠️ 本地开发与指令

```bash
# 启动本地开发服务器
npm run dev

# 构建生产环境代码
npm run build

# 本地预览打包产物
npm run preview
```

---

## 📄 开源许可证

本项目采用 [GNU General Public License v3.0 (GPL-3.0)](LICENSE) 开源许可协议。

---

<p align="center">
  Crafted with ❤️ by <a href="https://github.com/FrankWkd-Plus">FrankWkd</a>
</p>
