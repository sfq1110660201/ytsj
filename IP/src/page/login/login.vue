<template>

	
</template>

<script>
	export default {
		data() {
				return {
					het: 0,
				}
			},
			components: {

			},
			mounted() {
				this.$nextTick(function() {
					this.het = window.screen.availHeight; //屏幕可视区域高
					//console.log( window.screen.availHeight,window.screen.height)

				})
			},
			methods: {

			},
			watch: {

			}
	}
</script>

<style lang="scss" scoped>
	
</style>