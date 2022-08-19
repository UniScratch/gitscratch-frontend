<!-- eslint-disable vue/no-v-html -->
<template>
  <client-only>
    <div class="markdown" v-html="renderMd(content)" />
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
    const renderer = new marked.Renderer()
    renderer.image = (href, title, text) => {
      // href = marked.cleanUrl(this.options.sanitize, this.options.baseUrl, href)
      if (href === null) {
        return text
      }
      // console.log(href)
      href = this.$utils.getAssetUrl(href)
      let out = `<img src="${href}" alt="${text}"`
      if (title) {
        out += ` title="${title}"`
      }
      out += '/>'
      return out
    }
    marked.setOptions({
      renderer,
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
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['del', 'input', 'img', 'details', 'summary', 'font']),
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
<style>
.markdown img {
    text-align: center;
    display: block;
    max-width: 100%;
}

.markdown img:after {
    content: "\F0338"" 无法加载此图像" attr(alt);
    font-family: "Material Design Icons";
    background-color: #272727;
    border: 2px dotted #c8c8c8;
    border-radius: 15px;
    width: 100%;
    display: block;
    text-align: center;
    padding: 6px;
}

.theme--dark .markdown img:after {
    background-color: #272727;
}

.theme--light .markdown  img:after {
    background-color: #f5f5f5;
}
</style>
