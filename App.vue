<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	*{
		margin: 0;
		padding: 0;
	}
	
	html,
	body {
		font-family: Sans Francisco, Source Han Sans;
		font-size: 16px;
	}
</style>
