/* eslint-disable vue/require-default-prop */
<template>
  <client-only placeholder="Loading...">
    <div v-html="renderMd()" />
  </client-only>
</template>
<script>
import 'highlight.js/styles/github.css'
const marked = require('marked')
export default {
  name: 'Markdown',
  props: {
    content: {
      type: String
    }
  },
  data: () => ({
  }),
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
