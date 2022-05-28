<template>
  <div>
    <v-card>
      <v-card-text>
        <p class="text-h4 text--primary">
          Default Project
        </p>
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
      <v-card-text>
        <p class="text-h6 text--primary">
          Showing differences with 13 additions and 25 deletions.
        </p>
        <pre class="blocks">{{ scblocks }}</pre>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { toScratchblocks } from 'parse-sb3-blocks'
// import scratchblocks from 'scratchblocks'

export default {
  data () {
    return {
      data: {},
      scblocks: '',
      diff: {}
    }
  },
  mounted () {
    const scratchblocks = require('scratchblocks')
    this.data = require('@/static/project1.json')
    const stage = this.data.targets[1]
    const whenGreenflag = '{}QYyd[f#Mi3yK3vQ(EH'
    this.scblocks = toScratchblocks(whenGreenflag, stage.blocks, 'en', { tab: '  ', variableStyle: 'as-needed' })
    console.log(this.scblocks)
    const doc = scratchblocks.renderSVGString(this.scblocks)
    console.log(doc)
    // scratchblocks.renderMatching('pre.blocks', {
    //   style: 'scratch3', // Optional, defaults to 'scratch2'.
    //   languages: ['en'], // Optional, defaults to ['en'].
    //   scale: 1 // Optional, defaults to 1
    // })
  },
  methods: {
  }
}
</script>
