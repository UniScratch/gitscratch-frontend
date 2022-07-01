<template>
  <h1>Coming s∞n</h1>
  <!-- <client-only>
    <div>
      <v-card>
        <v-card-title class="text-h5">
          Default Project
        </v-card-title>
        <v-card-text>
          <p class="text-h6 text--primary">
            <v-icon>mdi-source-commit</v-icon>
            这里是提交信息 Laboris velit et non amet labore cupidatat.
          </p>
          <v-icon>mdi-calendar-outline</v-icon>
          2022/5/28 14:39:58
          <v-icon>mdi-update</v-icon>
          170ed1c
          <br>
          <v-icon>mdi-check</v-icon>
          Signed-off-by: 作者 (email@foo.bar)
        </v-card-text>
      </v-card>
      <br>
      <v-divider />
      <br>
      <v-card>
        <v-card-title class="text-h5">
          Showing differences with 13 additions and 25 deletions.
        </v-card-title>
        <v-card-text>
          <div class="diff-addition">
            +13
          </div>
          <div class="diff-deletion">
            -25
          </div>
          <div v-html="scblocksSvg" />
        <div>{{ scblocksSvg }}</div>
        </v-card-text>
      </v-card>
    </div>
  </client-only> -->
</template>
<script>
// import { toScratchblocks } from 'parse-sb3-blocks'
// import scratchblocks from 'scratchblocks'

export default {
  data () {
    return {
      // data: {},
      // scblocksSvg: '',
      // diff: {}
    }
  },
  head () {
    return {
      title: 'Diff'
    }
  },
  mounted () {
  //   this.data = require('@/static/project1.json')
  //   const stage = this.data.targets[1]
  //   const whenGreenflag = '{}QYyd[f#Mi3yK3vQ(EH'
  //   const scblocksText = toScratchblocks(whenGreenflag, stage.blocks, 'en', { tab: '  ', variableStyle: 'as-needed' })
  //   const scblocksParse = scratchblocks.parse(scblocksText)
  //   const scblocksOptions = {
  //     style: 'scratch3', // Optional, defaults to 'scratch2'.
  //     languages: ['en'], // Optional, defaults to ['en'].
  //     scale: 1 // Optional, defaults to 1
  //   }
  //   const scblocksRender = scratchblocks.render(scblocksParse, scblocksOptions)
  //   this.scblocksSvg = new XMLSerializer().serializeToString(scblocksRender) // convert SVGElement into svg string
  },
  methods: {
  }
}
</script>
