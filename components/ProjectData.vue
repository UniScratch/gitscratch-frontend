<template>
  <div>
    <v-row>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn text v-bind="attrs" rounded v-on="on">
            <v-icon>
              mdi-star-outline
            </v-icon>
            123
          </v-btn>
        </template>
        <span>星标</span>
      </v-tooltip>
      <v-tooltip v-if="isOpenSource" bottom>
        <template #activator="{ on, attrs }">
          <v-btn text v-bind="attrs" rounded v-on="on">
            <v-icon>
              mdi-source-branch
            </v-icon>
            234
          </v-btn>
        </template>
        <span>改编</span>
      </v-tooltip>
      <!-- <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" rounded v-on="on">
            <v-icon color="red">
              mdi-heart-outline
            </v-icon>
          </v-btn>
        </template>
        <span>赞助</span>
      </v-tooltip> -->
      <v-tooltip v-if="isOpenSource" bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            rounded
            style="margin-left: 10px;"
            :to="'/projects/' + projectId + '/editor'"
            v-on="on"
          >
            <v-icon>
              mdi-file-code-outline
            </v-icon>
          </v-btn>
        </template>
        <span>源码</span>
      </v-tooltip>
      <v-spacer />
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-dots-horizontal
            </v-icon>
          </v-btn>
        </template>
        <v-card class="cardblur">
          <v-list dense min-width="150">
            <v-list-item link>
              <v-list-item-icon style="margin-right: 16px;">
                <v-icon>mdi-share</v-icon>
              </v-list-item-icon>
              <v-list-item-title>分享</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon style="margin-right: 16px;">
                <v-icon>mdi-alert</v-icon>
              </v-list-item-icon>
              <v-list-item-title>举报</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-row>
  </div>
</template>
    </v-row>
  </div>
</template>
<script>
export default {
  components: {
  },
  data: () => ({
    projectId: 1,
    star: 123,
    fork: 234,
    isOpenSource: true
  }),
  methods: {
  }
}
</script>
