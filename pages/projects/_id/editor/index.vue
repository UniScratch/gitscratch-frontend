<template>
  <div style="margin: 10px auto; text-align: center;">
    <div class="text-h5">
      功能未完成, 敬请期待
    </div>
    <br>
    <v-btn
      text
      rounded
      @click="back"
    >
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      返回上一页
    </v-btn>
    <v-btn
      text
      to="/"
      rounded
    >
      <v-icon left>
        mdi-home-outline
      </v-icon>
      返回首页
    </v-btn>
  </div>
</template>
