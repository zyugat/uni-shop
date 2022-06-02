import {
	myRequest
} from '@/network/request.js'

export default function checkLogin() {
	return new Promise((resolve, reject) => {
		let token = uni.getStorageSync('token')
		if (!token) {
			uni.showModal({
				title: '请登录',
				showCancel: false,
				success: function(res) {
					if (res.confirm) {
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}
				}
			})
			let res = {
				status: false
			}
			resolve(res)
		} else {
			myRequest({
				url: '/uniShop/login',
				method: 'post',
				data: {
					token: token
				}
			}).then(res => {
				if (res.data.status === false) {
					uni.showToast({
						title: '失败,请重新登录',
						duration: 2000
					})
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					resolve(res.data)
				}
			})
		}
	})

}
