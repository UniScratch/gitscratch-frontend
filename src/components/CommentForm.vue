<template>
    <v-form style="margin-bottom: 16px;" ref="form" lazy-validation v-model="valid">
        <v-textarea
            label="发表评论"
            counter="1"
            outlined
            style="border-radius: 4px;"
            v-model="comment_content"
            :rules="commentContentRules"
        ></v-textarea>
        <v-btn
            :disabled="!valid"
            color="accent"
            depressed
            @click="comment"
        >
            发布
        </v-btn>
        <transition name="slide-y-reverse-transition">
            <v-btn @click="reset" color="accent" text v-if="comment_content || !valid">重置</v-btn>
        </transition>
    </v-form>
</template>
<script>
export default {
    name: 'CommentForm',

    data: () => ({
        valid: true,
        commentContentRules: [
            v => !!v || '留言内容不能为空',
            v => v && v.length <= 1 || '留言内容不能超过 1 个字符',
        ],
        comment_content: "",
    }),

    methods: {
        comment() {
            this.validate();
        },
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
    },
}
</script>
