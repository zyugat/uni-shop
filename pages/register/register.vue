<template>
	<view class="login">
		<view class="login-top">
			<text>注册</text>
		</view>
		<view class="login-content">
			<view class="input-item" style="margin-top: 80rpx;">
				<view class="title-content">账号</view>
				<input class="input" placeholder="请输入账号" v-model="name" />
			</view>
			<view class="input-item">
				<view class="title-content">邮箱</view>
				<input class="input" placeholder="请输入邮箱" v-model="email" />
			</view>
			<view class="input-item">
				<view class="title-content">密码</view>
				<input class="input" placeholder="请输入密码" v-model="psw" />
			</view>
		</view>
		<view class="button" @click="bRegister">注册</view>
	</view>
</template>

<script>
	import {
		register,login
	} from '@/network/user.js'
	export default {
		data() {
			return {
				name: '',
				email:'',
				psw: ''
			}
		},
		methods: {
			bRegister() {
				console.log();
				if (this.name === '') {
					uni.showToast({
						title: '请填写用户名'
					})
				}else if (this.email === ''  || !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.email)) {
					uni.showToast({
						title: '请填写正确的邮箱'
					})
				} else if (this.psw === '') {
					uni.showToast({
						title: '请填写密码'
					})
				} else {
					register(this.name,this.email, this.psw).then(res => {
						uni.showToast({
							title: res.msg
						})
						if(res.status===true){
							login(this.name, this.psw).then(res => {
								if(res.status===true){
									uni.setStorageSync('token',res.data)
									uni.switchTab({
										url: '/pages/my/my'
									})
								}
							})
						}
					})
				}
			},
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
