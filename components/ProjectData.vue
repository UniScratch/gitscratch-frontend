<template>
  <div>
    <v-row>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon>
              mdi-star-outline
            </v-icon>
            123
          </v-btn>
        </template>
        <span>星标（Star）</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon>
              mdi-source-branch
            </v-icon>
            234
          </v-btn>
        </template>
        <span>复刻（Fork）</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="red">
              mdi-heart-outline
            </v-icon>
          </v-btn>
        </template>
        <span>赞助（Sponsor）</span>
      </v-tooltip>
      <v-spacer />
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-dots-horizontal
            </v-icon>
          </v-btn>
        </template>
        <span>更多</span>
      </v-tooltip>
    </v-row>
  </div>
</template>
