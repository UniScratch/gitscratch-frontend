<template>
  <div>
    <h1>帮助</h1>
    <p>
      您可以在<router-link to="/about">
        “关于”页面
      </router-link>查看 GitScratch 相关信息。
    </p>
    <p>
      <router-link to="/help/terms-of-service">
        服务条款
      </router-link><br>
      <router-link to="/help/privacy">
        隐私政策
      </router-link><br>
      <router-link to="/help/dmca">
        DMCA
      </router-link><br>
      <router-link to="/help/rules">
        社区守则
      </router-link><br>
      <router-link to="/help/contact-us">
        联系我们
      </router-link><br>
      <router-link to="/status">
        服务状态
      </router-link><br>
      <router-link to="/api">
        API
      </router-link>
    </p>
    <h2>常见问题</h2>
    <v-expansion-panels focusable multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>
          怎么访问 GitScratch？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          打开（在 Windows 上使用鼠标双击一个快捷方式，或使用鼠标点击左下角“开始”按钮，使用键盘输入要打开的浏览器名称，等待要打开的浏览器出现在搜索结果顶部，按下键盘上的 Enter 键，它一般位于键盘右侧，或小键盘右下角）浏览器（例如 Chrome、Firefox、Opera、Safari、Edge、Android Browser），在地址栏（一般位于浏览器顶部）使用键盘输入“https://git.sc.cn”，然后按下 Enter 键（一般位于键盘右侧，或小键盘右下角）即可访问。
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          这是一个问题，听我说谢谢你，因为有你，温暖了四季。
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          这是问题的答案，谢谢你，感谢有你，世界更美丽。
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          这是一个问题，听我说谢谢你，因为有你，温暖了四季。
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          这是问题的答案，谢谢你，感谢有你，世界更美丽。
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
