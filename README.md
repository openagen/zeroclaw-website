# ZeroClaw Website

ZeroClaw 官网，采用 Next.js 16 + Tailwind CSS 构建，风格参考 manus.im 的极简设计。

## 项目信息

ZeroClaw 是用 Rust 编写的 AI 助手基础设施，具有以下特点：
- **极速启动**：冷启动时间 < 10ms
- **超轻量级**：二进制文件仅 3.4MB
- **内存安全**：Rust 保证，无数据竞争
- **可插拔架构**：基于 trait 系统
- **多平台支持**：22+ AI 提供商，Telegram/Discord/Slack 等

## 技术栈

- **框架**：Next.js 16
- **样式**：Tailwind CSS
- **语言**：TypeScript

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev
```

访问 http://localhost:3000

## 构建

```bash
# 构建生产版本
pnpm run build

# 启动生产服务器
pnpm run start
```

## 链接

- GitHub: https://github.com/theonlyhennygod/zeroclaw
- License: MIT
