<!-- eslint-disable vue/no-v-html -->
<template>
  <client-only>
    <div v-html="renderMd(content)" />
  </client-only>
</template>
<script>
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import hljs from 'highlight.js/lib/core'
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
        hljs.registerLanguage(language, require('highlight.js/lib/languages/' + language))
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
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['del', 'input', 'img', 'details', 'summary']),
        allowedClasses: {
          // code: ['language-*', 'lang-*'],
          // span: ['hljs-*', 'hljs']
          '*': ['*']
        },
        allowedAttributes: false
      })
    }
  }
}
</script>
