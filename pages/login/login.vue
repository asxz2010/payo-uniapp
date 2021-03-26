<template>
	<view class="login-container" :style="{height: html_height + 'px'}">
		<view class="wrap">
			<image src="../../static/images/logo.png" mode="widthFix"></image>
			<view class="ul">
				<view class="li">
					<input type="text" class="uni-input" disabled placeholder-class="phstyle" placeholder="所在地区" @click="areaClick">
					<u-picker v-model="show" mode="region" :params="params"></u-picker>
				</view>
				<view class="li">
					<input type="text" class="uni-input" placeholder-class="phstyle" placeholder="个人编号">
				</view>
				<view class="li">
					<radio-group @change="radioChange" class="radiogroup">
						<label class="label" v-for="(sex, index) in sexItems" :key="sex.value">
							<view>
								<radio :value="sex.value" :checked="index===current"></radio>
							</view>
							<view>{{ sex.name }}</view>
						</label>
					</radio-group>
				</view>
				<view class="li">
					<input type="text" class="uni-input" placeholder-class="phstyle" placeholder="邮箱 (请认真填写,方便找回)">
				</view>
			</view>
			<view class="footer">
				<image src="../../static/images/startdate.png" mode="widthFix"></image>
				<view class="fvi">
					<view></view>
					<view>获取PAYO编号</view>
					<view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				html_height: 0,
				current: 1,
				show: false, // 显示地区弹出层
				sexItems: [{
						value: '1',
						name: '男'
					},
					{
						value: '2',
						name: '女'
					}
				],
				params: {
					province: true,
					city: true,
					area: false
				}
			}
		},
		methods: {
			/**
			 * 性别选择
			 * @param {Object} e
			 */
			radioChange(e) {
				for (let i = 0; i <= this.sexItems.length - 1; i++) {
					if (this.sexItems[i].value === e.target.value) {
						this.current = i
						break;
					}
				}
			},

			areaClick() {
				console.log('---------地区选择开始---------')
				this.show = !this.show
				console.log('---------地区选择结束---------')
			}
		},
		onLoad() {
			this.html_height = this.$html_height
		}
	}
</script>

<style lang="scss">
	.login-container {
		display: flex;
		justify-content: center;
		align-items: center;
		background: url('@/static/images/login.png') no-repeat;
		background-size: cover;

		.wrap {
			width: 75%;

			image {
				width: 95%;
				margin: auto;
				display: block;
			}

			.ul {
				width: 100%;
				margin: 80rpx 0 60rpx;
				color: #fff;

				.li {
					width: 100%;
					margin: 30rpx 0;
					border-bottom: 1rpx solid #999;

					.radiogroup {
						font-size: 34rpx;
						height: 100rpx;
						display: flex;
						align-items: center;

						.label {
							display: flex;
							margin-right: 30rpx;

							radio {
								color: $theme-color;
								transform: scale(.7);
							}
						}
					}

					input {
						height: 100rpx;
					}

					.phstyle {
						color: #fff;
						font-size: 34rpx;
						letter-spacing: 4rpx;
					}
				}
			}

			.footer {
				image {
					width: 100%;
				}

				.fvi {
					height: 60rpx;
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					justify-content: space-around;

					view:nth-child(1),
					view:nth-child(3) {
						width: 20%;
						height: 1rpx;
						background: $theme-color;
					}

					view:nth-child(2) {
						font-size: 28rpx;
						color: $theme-color;
					}
				}
			}
		}

	}
</style>
