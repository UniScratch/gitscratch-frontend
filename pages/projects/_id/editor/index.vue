<template>
  <div>
    <v-row>
      <v-col cols="12" xl="1" md="1" sm="1">
        <v-list
          dense
          nav
          color="transparent"
        >
          <v-list-item-group v-model="model" color="primary" mandatory>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>运动</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>外观</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>声音</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>事件</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>控制</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>侦测</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>运算</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>变量</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>函数</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <!-- <template #append> -->
        <!-- <div class="pa-2"> -->
        <v-btn block>
          添加拓展
        </v-btn>
        <!-- </div> -->
        <!-- </template> -->
      </v-col>
      <v-col cols="12" xl="7" md="7" sm="7">
        editor
      </v-col>
      <v-col cols="12" xl="4" md="4" sm="4">
        stage
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  layout: 'editor'
}
</script>
