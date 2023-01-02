<template>
  <client-only>
    <iframe
      id="iframe1"
      src="/scratch/index.html"
      seamless
      height="100%"
      width="100%"
      frameborder="0"
    />
  </client-only>
</template>
<script>
export default {
  layout: 'editor',
  data () {
    return {
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   const iframe = document.getElementById('iframe1')
    //   // const iframeHeight = iframe.contentWindow.document.body.scrollHeight
    //   // console.log(document.getElementById('iframe1').contentDocument.body.scrollHeight)
    //   iframe.height = (document.getElementById('iframe1').contentDocument.body.scrollWidth) / 4 * 3 + 44
    // })
  },
  methods: {
    // getPlayerHeight () {
    //   // console.log(this.$refs.iframe1.document.body.scrollHeight)
    //   // return document.getElementById('iframe1').contentDocument.body.scrollHeight
    // }
  }
}
</script>
