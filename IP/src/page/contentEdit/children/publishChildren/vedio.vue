<template>
	<div>
		<div id="editor-trigger" style="height: 600px;width: 900px;"></div>
	</div>
</template>

<script>
	//import 'src/plugins/wangEditor.js'
	//import 'src/style/wangEditor.css'

    export default {
      name: 'editor-trigger',
      data () {
        return {
          editorContent: ''
        }
      },
      methods: {
        getContent: function () {
            console.log(this.editorContent)
        }
      },
      mounted() {
        
      }
    }
</script>

<style>
	
</style>