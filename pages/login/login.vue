<template>
	<view class="login">
		测试账号：123/123
		<view class="login-top">
			<text>密码登录</text>
			<view @click="toResgister">注册</view>
		</view>

		<view class="login-content">
			<view class="input-item" style="margin-top: 80rpx;">
				<view class="title-content">账号</view>
				<input class="input" placeholder="手机号/邮箱" v-model="name" />
			</view>
			<view class="input-item">
				<view class="title-content">密码</view>
				<input class="input" placeholder="请输入密码" v-model="psw" />
			</view>
		</view>
		<view class="button" @click="bLogin">登录</view>
	</view>
</template>

<script>
	import {
		login
	} from '@/network/user.js'
	export default {
		data() {
			return {
				name: '',
				psw: ''
			}
		},
		onLoad() {

		},
		methods: {
			bLogin() {
				if (this.name === '') {
					uni.showToast({
						title: '请填写用户名/邮箱'
					})
				} else if (this.psw === '') {
					uni.showToast({
						title: '请填写密码'
					})
				} else {
					login(this.name, this.psw).then(res => {
						uni.showToast({
							title: res.msg
						})
						if (res.status === true) {
							uni.setStorageSync('token', res.data)
							uni.switchTab({
								url: '/pages/my/my'
							})
						}
					})
				}
			},
			toResgister() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			}
		}
	}
</script>

<style lang="scss">
	.login {
		.login-top {
			display: flex;
			justify-content: space-between;
			margin-top: 40rpx;
			margin-left: 32rpx;
			margin-right: 32rpx;

			text {
				color: #000000;
				font-size: 22px;
				font-weight: bold;
			}
		}

		.login-content {
			.input-item {
				display: flex;
				margin-left: 32rpx;
				margin-right: 32rpx;
				height: 50px;
				align-items: center;
				border-bottom: 1px solid #efeff4;
				margin-bottom: 20rpx;

				.title-content {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					font-size: 18px;
				}

				input {
					margin-left: 40rpx;
				}
			}
		}


		.button {
			height: 50px;
			line-height: 50px;
			margin-top: 60rpx;
			margin-left: 32rpx;
			margin-right: 32rpx;
			border-radius: 50rpx;
			font-size: 20px;
			background-color: #008AFE;
			color: #FFFFFF;
			text-align: center;
		}
	}
</style>
