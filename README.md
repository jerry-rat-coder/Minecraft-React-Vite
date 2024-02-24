# Minecraft by React

![Minecraft](https://res.cloudinary.com/dtzi3qstg/image/upload/v1708775733/mydjspl9dofyvuqdpw7s.png)

使用react + ts + vite + threejs构建的Minecraft clone，主要使用react-three/cannon react-three/drei react-three/fiber提供的物理引擎/模型的hook实现。

目前它有 6种类型的方块：草、木材、原木、玻璃、泥土和自定义方块。您可以通过键盘上的数字 1-6 切换区块。您可以使用鼠标和 WASD 浏览世界。您可以单击添加块，然后按 Alt+单击删除块。您的世界可以通过Save存储在您的浏览器本地存储中。并包含Reset重置世界, Upload上传方块功能。

- 内置中心光标
- 通过Three.js和React Three Fiber集成的三维动画和效果，提升游戏交互体验。
- 使用Zustand库进行游戏状态的全局管理。
- 集成React Three Cannon物理引擎，实现重力和碰撞效果。
- 支持键盘输入，实现玩家的移动、跳跃和飞行等操作。
- 提供第一人称视角，增强游戏沉浸感。
- 允许玩家添加和移除方块，以及选择方块类型。
- 支持通过Cloudinary CDN上传自定义纹理，增加游戏的个性化。
- 游戏世界的本地存储功能，方便玩家保存和加载进度。
- 方块光标悬停状态的可视化效果，提升操作的直观性。
- 玩家可以自由建造房屋等结构，增加游戏的创造性。
- 提供飞行模式。
- 帮助模态窗口指导玩家如何操作游戏。
- 界面设计包括重置游戏世界、保存游戏、上传自定义纹理和游戏帮助等功能按钮。

### Install packages

```
npm i
```

### Start the app

```
npm run dev
```

