<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-html="renderMd(content)" />
</template>
<script>
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import hljs from 'highlight.js'
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    theme: null
  }),
  mounted () {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      },
      gfm: true,
      breaks: true,
      smartLists: true,
      smartypants: true
    })
  },
  methods: {
    renderMd (content) {
      return sanitizeHtml(marked.parse(content), {
        disallowedTagsMode: 'escape',
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['del', 'input']),
        allowedClasses: {
          code: ['language-*', 'lang-*'],
          span: ['hljs-*', 'hljs']
        },
        allowedAttributes: false
      })
    }
  }
}
</script>
