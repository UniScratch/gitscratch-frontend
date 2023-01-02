<template>
  <div>
    <p class="text-h4">
      上传作品
    </p>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="d-flex align-center"
    >
      <v-file-input
        truncate-length="32"
        label="作品"
        show-size
        accept=".sb3"
        prepend-icon="mdi-file"
        :rules="fileRules"
        required
      />
      <v-btn color="primary" rounded depressed :disabled="!valid" @click="upload">
        上传
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    fileRules: [
      value => !/\.sb3$/.test(value) || '需要上传 .sb3 文件',
      value => !!value || '未上传文件'
    ],
    valid: true
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    upload () {
      this.validate()
      if (this.valid) {
        //
      }
    }
  }
}
</script>
