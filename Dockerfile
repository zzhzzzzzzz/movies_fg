# 使用官方的 Node.js 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制整个项目到工作目录
COPY . .

# 构建 React 应用
RUN npm run build

# 暴露容器的端口（根据实际情况替换端口号）
EXPOSE 3000

# 定义容器启动时运行的命令，启动 React 应用
CMD ["npm", "start"]


# docker build -t react-app .
# docker run -p 3000:3000 -d react-app  [运行 React 项目的 Docker 容器]
