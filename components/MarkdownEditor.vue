<template>
  <div>
    <div v-if="!disabled">
      <!-- <v-card> -->
      <v-card-title class="textarea_title">
        <div>
          <v-tabs v-model="tab">
            <v-tab>撰写</v-tab>
            <v-tab>预览</v-tab>
          </v-tabs>
        </div>
        <v-spacer />
        <div v-show="tab === 0">
          <v-btn icon plain small @click="header()">
            <v-icon>mdi-format-header-pound</v-icon>
          </v-btn>
          <v-btn icon plain small @click="bold()">
            <v-icon>mdi-format-bold</v-icon>
          </v-btn>
          <v-btn icon plain small @click="italic()">
            <v-icon>mdi-format-italic</v-icon>
          </v-btn>
          <v-btn icon plain small @click="image()">
            <v-icon>mdi-image-outline</v-icon>
          </v-btn>
          <v-btn icon plain small @click="quote()">
            <v-icon>mdi-format-quote-open</v-icon>
          </v-btn>
          <v-btn icon plain small @click="code()">
            <v-icon>mdi-code-tags</v-icon>
          </v-btn>
          <v-btn icon plain small @click="link()">
            <v-icon>mdi-link-variant</v-icon>
          </v-btn>
          <v-btn icon plain small @click="unorderedList()">
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-btn>
          <v-btn icon plain small @click="orderedList()">
            <v-icon>mdi-format-list-numbered</v-icon>
          </v-btn>
          <v-btn icon plain small @click="checkbox()">
            <v-icon>mdi-checkbox-marked-outline</v-icon>
          </v-btn>
          <v-btn icon plain small @click="at()">
            <v-icon>mdi-at</v-icon>
          </v-btn>
        </div>
      </v-card-title>

      <v-card-text v-show="tab === 0" style="padding-bottom: 0px;">
        <v-banner :value="isReply" single-line rounded outlined>
          <div v-if="isReply">
            <span class="grey-text">
              回复
            </span>
            <span>
              {{ reply.user.name }}
            </span>
            <span class="grey-text">
              :
            </span>
          </div>
          <template #actions>
            <v-btn text>
              查看原文
            </v-btn>
            <v-btn icon @click="clearReply()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-banner>
        <v-textarea
          :id="randomId"
          v-model="markdown"
          outlined
          :label="textareaLabel"
          auto-grow
          :placeholder="textareaPlaceholder"

          rows="3"
        />
      </v-card-text>
      <div v-if="tab === 1" style="padding:0 16px;">
        <MarkdownRender :content="markdown" />
      </div>
      <v-card-actions style="padding-top: 0px;">
        <v-btn
          text
          icon
        >
          <v-icon>mdi-language-markdown-outline</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn
          :width="actionIcon ? '120px' : 'auto'"
          rounded
          depressed
          color="primary"
          @click="$emit('submit', markdown)"
        >
          <v-icon v-if="actionIcon" left>
            {{ actionIcon }}
          </v-icon>
          {{ actionText }}
        </v-btn>
      </v-card-actions>
    <!-- </v-card> -->
    </div>
    <div v-else>
      <v-alert
        color="primary"
        border="left"
        colored-border
        type="info"
      >
        {{ disableText }}
      </v-alert>
    </div>
    <v-dialog v-model="fileUploadModal" overlay-opacity="0.3" max-width="500">
      <v-card class="cardblur">
        <v-card-title class="text-h5">
          上传
        </v-card-title>

        <v-card-text>
          <v-file-input
            v-model="fileUpload"
            show-size
            truncate-length="36"
            accept="image/*"
            placeholder="上传"
            @change="fileUpdate()"
          />
          <v-img
            v-if="fileBase64"
            :src="fileBase64"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            rounded
            @click="fileUploadModal = false"
          >
            取消
          </v-btn>
          <v-btn
            color="primary"
            text
            rounded
            :loading="fileUploading"
            @click="upload()"
          >
            上传
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    textareaLabel: {
      type: String,
      default: ''
    },
    textareaPlaceholder: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    isReply: {
      type: Boolean,
      default: false
    },
    reply: {
      type: Object,
      default: () => ({})
    },
    actionIcon: {
      type: String,
      default: ''
    },
    actionText: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disableText: {
      type: String,
      default: '请先登录'
    }
  },

  data: () => ({
    tab: 0,
    markdown: '',
    randomId: 0,
    fileUploadModal: false,
    fileUpload: null,
    fileUploading: false,
    fileBase64: '',
    fileUrl: ''
  }),
  watch: {
    markdown () {
      // console.log(this.markdown)
      this.$emit('change', this.markdown)
    }
  },
  beforeMount () {
    this.markdown = this.content
    this.randomId = 'markdownInput' + Date.now() // 防止id重复
  },
  mounted () {
  },
  methods: {
    fileUpdate () {
      if (this.fileUpload) {
        console.log(this.fileUpload)
        const reader = new FileReader()
        reader.onload = (e) => {
          this.fileBase64 = e.target.result
        }
        reader.readAsDataURL(this.fileUpload)
      } else {
        this.fileBase64 = ''
      }
    },
    upload () {
      this.fileUploading = true
      this.fileUrl = ''
      const formData = new FormData()
      formData.append('file', this.fileUpload)
      this.$axios.$post('/assets/upload', formData)
        .then((res) => {
          this.fileUploading = false
          this.fileUploadModal = false
          this.fileUrl = res.data.filename
          this.imageInsert(res.data.filename)
          // this.data.avatar = res.data.filename
          // this.save()
        })
    },
    clearReply () {
      this.$emit('clearReply')
    },
    getFocusPosition () {
      const textarea = document.getElementById(this.randomId)
      return ([textarea.selectionStart, textarea.selectionEnd])
    },
    focus (position) {
      // console.log(position[0], position[1])
      const textarea = document.getElementById(this.randomId)
      this.$nextTick(() => {
        textarea.focus()
        textarea.setSelectionRange(position[0], position[1])
      })
    },
    header () {
      const pos = this.getFocusPosition()
      const lineStart = this.markdown.lastIndexOf('\n', pos[1] - 1) + 1
      const line = this.markdown.substring(lineStart, pos[1])
      if (line.match(/^#+ /)) {
        this.markdown = this.markdown.substring(0, lineStart) + line.replace(/^#+ /, '') + this.markdown.substring(pos[1])
      } else {
        this.markdown = this.markdown.substring(0, lineStart) + '### ' + this.markdown.substring(lineStart)
      }
    },
    bold () {
      const pos = this.getFocusPosition()
      if (pos[0] === pos[1]) {
        this.markdown = this.markdown.slice(0, pos[0]) + '****' + this.markdown.slice(pos[0], this.markdown.length)
        this.focus([pos[0] + 2, pos[1] + 2])
      } else if ((this.markdown.slice(pos[0] - 2, pos[0]) === '**' && this.markdown.slice(pos[1], pos[1] + 2) === '**') || (this.markdown.slice(pos[0] - 2, pos[0]) === '__' && this.markdown.slice(pos[1], pos[1] + 2) === '__')) {
        this.markdown = this.markdown.slice(0, pos[0] - 2) + this.markdown.slice(pos[0], pos[1]) + this.markdown.slice(pos[1] + 2)
        this.focus([pos[0] - 2, pos[1] - 2])
      } else {
        this.markdown = this.markdown.slice(0, pos[0]) + '**' + this.markdown.slice(pos[0], pos[1]) + '**' + this.markdown.slice(pos[1])
        this.focus([pos[0] + 2, pos[1] + 2])
      }
    },
    italic () {
      const pos = this.getFocusPosition()
      if (pos[0] === pos[1]) {
        this.markdown = this.markdown.slice(0, pos[0]) + '**' + this.markdown.slice(pos[0], this.markdown.length)
        this.focus([pos[0] + 1, pos[1] + 1])
      } else if ((this.markdown.slice(pos[0] - 1, pos[0]) === '*' && this.markdown.slice(pos[1], pos[1] + 1) === '*') || (this.markdown.slice(pos[0] - 1, pos[0]) === '_' && this.markdown.slice(pos[1], pos[1] + 1) === '_')) {
        this.markdown = this.markdown.slice(0, pos[0] - 1) + this.markdown.slice(pos[0], pos[1]) + this.markdown.slice(pos[1] + 1)
        this.focus([pos[0] - 1, pos[1] - 1])
      } else {
        this.markdown = this.markdown.slice(0, pos[0]) + '*' + this.markdown.slice(pos[0], pos[1]) + '*' + this.markdown.slice(pos[1])
        this.focus([pos[0] + 1, pos[1] + 1])
      }
    },
    image () {
      this.fileUploadModal = true
      // const pos = this.getFocusPosition()
      // console.log(pos)
      // if (pos[0] === pos[1]) {
      //   this.markdown = this.markdown.slice(0, pos[0]) + '![](url)' + this.markdown.slice(pos[0], this.markdown.length)
      //   this.focus([pos[0] + 8, pos[1] + 8])
      // } else if (this.markdown.slice(pos[0], pos[0]).match(/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/)) {
      //   this.markdown = this.markdown.slice(0, pos[0]) + '![](' + this.markdown.slice(pos[0], pos[1]) + ')' + this.markdown.slice(pos[1])
      //   this.focus([pos[0] + 4, pos[1] + 4])
      // } else {
      //   this.markdown = this.markdown.slice(0, pos[0]) + '![' + this.markdown.slice(pos[0], pos[1]) + '](url)' + this.markdown.slice(pos[1])
      //   this.focus([pos[0] + 2, pos[1] + 2])
      // }
    },
    imageInsert (url) {
      const pos = this.getFocusPosition()
      this.markdown = this.markdown.slice(0, pos[0]) + '![](' + url + ')' + this.markdown.slice(pos[1])
      this.focus([pos[0] + 4, pos[1] + 4])
    },
    quote () {
      const pos = this.getFocusPosition()
      const lineStart = this.markdown.lastIndexOf('\n', pos[0] - 1) + 1
      const line = this.markdown.substring(lineStart, pos[1] + 1)
      if (line.match(/^(> .*\s*)+$/)) {
        this.markdown = this.markdown.substring(0, lineStart) + line.replace(/> /g, '') + this.markdown.substring(pos[1] + 1)
        this.focus([pos[0] - 2, pos[0] - 2])
        // this.focus([pos[0] - line.length + line.replace(/> /g, '').length, pos[1] - line.length + line.replace(/> /g, '').length])
      } else {
        this.markdown = this.markdown.substring(0, lineStart) + '> ' + line.replace(/\n/g, '\n> ') + this.markdown.substring(pos[1] + 1)
        this.focus([pos[0] + 2, pos[0] + 2])
        // this.focus([pos[0] + line.length + line.replace(/\n/g, '\n> ').length, pos[1] + line.length + line.replace(/\n/g, '\n> ').length])
      }
    },
    code () {
      const pos = this.getFocusPosition()
      if (pos[0] === pos[1]) {
        this.markdown = this.markdown.slice(0, pos[0]) + '\n```\n\n```\n' + this.markdown.slice(pos[0], this.markdown.length)
        this.focus([pos[0] + 5, pos[1] + 5])
      } else {
        this.markdown = this.markdown.slice(0, pos[0]) + '\n```\n' + this.markdown.slice(pos[0], pos[1]) + '\n```\n' + this.markdown.slice(pos[1])
        this.focus([pos[0] + 5, pos[1] + 5])
      }
    },
    link () {
      const pos = this.getFocusPosition()
      if (pos[0] === pos[1]) {
        this.markdown = this.markdown.slice(0, pos[0]) + '[text](url)' + this.markdown.slice(pos[0], this.markdown.length)
        this.focus([pos[0], pos[1] + 11])
      } else if (this.markdown.slice(pos[0], pos[1]).match(/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/)) {
        this.markdown = this.markdown.slice(0, pos[0]) + '[text](' + this.markdown.slice(pos[0], pos[1]) + ')' + this.markdown.slice(pos[1])
        this.focus([pos[0] + 7, pos[1] + 7])
      } else {
        this.markdown = this.markdown.slice(0, pos[0]) + '[' + this.markdown.slice(pos[0], pos[1]) + '](url)' + this.markdown.slice(pos[1])
        this.focus([pos[0] + 1, pos[1] + 1])
      }
    },
    unorderedList () {
      const pos = this.getFocusPosition()
      const lineStart = this.markdown.lastIndexOf('\n', pos[0] - 1) + 1
      const line = this.markdown.substring(lineStart, pos[1] + 1)
      // console.log(line)
      if (line.match(/^(- .*\s*)+$/)) {
        this.markdown = this.markdown.substring(0, lineStart) + line.replace(/- /g, '') + this.markdown.substring(pos[1] + 1)
        this.focus([pos[0] - 2, pos[0] - 2])
      } else {
        this.markdown = this.markdown.substring(0, lineStart) + '- ' + line.replace(/\n/g, '\n- ') + this.markdown.substring(pos[1] + 1)
        this.focus([pos[0] + 2, pos[0] + 2])
      }
    },
    orderedList () {
      const pos = this.getFocusPosition()
      const lineStart = this.markdown.lastIndexOf('\n', pos[0] - 1) + 1
      const line = this.markdown.substring(lineStart, pos[1] + 1)
      // console.log(line)
      if (line.match(/^(\d\. .*\s*)+$/)) {
        this.markdown = this.markdown.substring(0, lineStart) + line.replace(/\d\. /g, '') + this.markdown.substring(pos[1] + 1)
        this.focus([pos[0] - 2, pos[0] - 2])
      } else {
        const lines = line.split('\n')
        const newLines = []
        for (let i = 0; i < lines.length; i++) {
          newLines.push((i + 1) + '. ' + lines[i])
        }
        this.markdown = this.markdown.substring(0, lineStart) + newLines.join('\n') + this.markdown.substring(pos[1] + 1)
        this.focus([pos[0] + 2, pos[0] + 2])
      }
    },
    checkbox () {
      const pos = this.getFocusPosition()
      const lineStart = this.markdown.lastIndexOf('\n', pos[0] - 1) + 1
      const line = this.markdown.substring(lineStart, pos[1] + 1)
      // console.log(line)
      if (line.match(/^(- \[ \] .*\s*)+$/)) {
        this.markdown = this.markdown.substring(0, lineStart) + line.replace(/- \[ \] /g, '') + this.markdown.substring(pos[1] + 1)
        this.focus([pos[0] - 5, pos[0] - 5])
      } else {
        this.markdown = this.markdown.substring(0, lineStart) + '- [ ] ' + line.replace(/\n/g, '\n- [ ] ') + this.markdown.substring(pos[1] + 1)
        this.focus([pos[0] + 5, pos[0] + 5])
      }
    },
    at () {
      const pos = this.getFocusPosition()
      if (pos[0] === pos[1]) {
        this.markdown = this.markdown.slice(0, pos[0]) + '@email ' + this.markdown.slice(pos[0], this.markdown.length)
        this.focus([pos[0] + 1, pos[1] + 7])
      } else if (this.markdown.slice(pos[0] - 1, pos[0]) === '@') {
        this.markdown = this.markdown.slice(0, pos[0] - 1) + this.markdown.slice(pos[0], pos[1]) + this.markdown.slice(pos[1])
        this.focus([pos[0] - 1, pos[1] - 1])
      } else {
        this.markdown = this.markdown.slice(0, pos[0]) + '@' + this.markdown.slice(pos[0], pos[1]) + ' ' + this.markdown.slice(pos[1])
        this.focus([pos[0] + 1, pos[1] + 2])
      }
    }
  }
}
</script>
<style>
textarea {
  margin-right: 6px !important;
  margin-bottom: 6px;
}
.textarea_title {
  padding-top: 4px;
}
</style>
