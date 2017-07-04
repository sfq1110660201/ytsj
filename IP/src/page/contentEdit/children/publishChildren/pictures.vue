<template>
	<div>
		<vue-editor v-model="content"></vue-editor>
	</div>
</template>

<script>
	import { VueEditor } from 'vue2-editor'

	export default {
		name: 'editor',
		data() {
			return {
				content: '<h1>Some initial content</h1>'  
			}
		},
		components: {
      		VueEditor
   		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>

<style scoped>

</style>