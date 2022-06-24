/* eslint-disable vue/require-default-prop */
<template>
  <client-only placeholder="Loading...">
    <div v-html="renderMd()" />
  </client-only>
</template>
<script>
const marked = require('marked')
export default {
  props: {
    content: {
      type: String
    }
  },
  data: () => ({
    theme: null
  }),
  head () {
    return {
      link: [{
        vmid: 'hljs-style',
        rel: 'stylesheet',
        type: 'text/css',
        href: this.$vuetify.theme.dark ? '/highlight.js/styles/github-dark.css' : '/highlight.js/styles/github.css'
      }]
    }
  },
  mounted () {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight (code, lang) {
        const hljs = require('highlight.js')
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: true,
      smartLists: true,
      smartypants: true,
      xhtml: true
    })
  },
  methods: {
    renderMd () {
      return marked.parse("Hello, world\n```js\nconsole.log('Hello, world!')\n```\n")
    }
  }
}
</script>
