<template>
  <div>
    <h2>常规设置</h2>
    <v-text-field
      label="站点名称"
      value="GitScratch"
      hint="站点的主标题"
      persistent-hint
    />
    <br>
    <v-text-field
      label="站点描述"
      value="Material Design + Fluent Design 风格的 Scratch 社区前端项目，由 GitScratch 社区开发组用 ❤️ 制作。"
      hint="站点描述, 在 Somewhere? 显示"
      persistent-hint
    />
    <br>
    <h2>社区设置</h2>
    <v-switch
      label="允许新用户注册"
    />
    <v-switch
      label="邮件验证"
    />
  </div>
</template>
