- 搭建环境
- 基本安装 npx create-react-app project
- 安装路由 npm i -S react-router react-router-dom
- 配置支持 less

  - 安装 npm i -S less less-loader
  - 或者 npm install less less-loader
  - 运行 npm run eject, 暴露配置文件 (选择这种形式)
    - 出现 script 和 config 文件夹，说明成功了
    - 打开 config/webpack.config.js，搜索 sass
    - 复制
      const sassRegex = /\.(scss|sass)$/;
      const sassModuleRegex = /\.module\.(scss|sass)$/;
      把 sass 都改成 less
    - 再复制 sassRegex 和 sassModuleRegex, 把 sass 修改成 less （5 个）
  - 配置 craco 库，craco-less

- redux: npm i -S redux react-redux
- 轮播图组件：
  https://react-swipeable-views.com/demos/demos/
  npm install --save react-swipeable-views
- 自己搭建后台：
- 安装 npm i -S express
- 解决跨域： 安装中间件 http-proxy-middleware
  npm i -S http-proxy-middleware
- 后台文件发生改变时能自动重启后台的一个模块 nodemon
  - npm install -g nodemon (Install it globally in C drive)
- 一次可以运行多条 npm Scripts 命令的模块 -- concurrently
  - npm i -S nodemon concurrently
- 下载字体图标 iconfont
  - 个人/定位/下拉箭头/搜索放大镜/购物车/首页/商城/服务/我的/星星/返回键

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
