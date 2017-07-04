<template>
    <div style="padding-bottom: 300px">
        <div id="editorElem" style="text-align:left;height: 500px"></div>
        <button v-on:click="getContent">查看内容</button>
    </div>
</template>

<script>
//  import E from 'wangeditor'
//
//  export default {
//    name: 'editor',
//    data () {
//      return {
//        editorContent: ''
//      }
//    },
//    methods: {
//      getContent: function () {
//          console.log(this.editorContent)
//      }
//    },
//    mounted() {
//      var editor = new E('#editorElem')
//      editor.customConfig.onchange = (html) => {
//        this.editorContent = html
//      }
//      editor.create()
//    }
//  }
</script>

<style scoped>
</style>