import {
	myRequest
} from '@/network/request.js'

export function login(name, psw) {
	return new Promise((resolve, reject) => {
		if (name.indexOf('@') !== -1) {
			myRequest({
				url: '/uniShop/login',
				method: 'post',
				data: {
					email: name,
					psw
				}
			}).then(res => {
				resolve(res.data)
			})
		} else {
			myRequest({
				url: '/uniShop/login',
				method: 'post',
				data: {
					name,
					psw
				}
			}).then(res => {
				resolve(res.data)
			})
		}
	})
}

export function register(name, email, psw) {
	return new Promise((resolve, reject) => {
		myRequest({
			url: '/uniShop/register',
			method: 'post',
			data: {
				name,
				email,
				psw
			}
		}).then(res => {
			resolve(res.data)
		})
	})
}
