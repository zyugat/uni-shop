import {
	myRequest
} from '@/network/request.js'

export function showCart(token) {
	return new Promise((resolve, reject) => {
		myRequest({
			url: '/uniShop/showCart',
			method: 'get',
			data: {
				token
			}
		}).then(res => {
			resolve(res.data)
		})
	})
}

export function addCart(token, pid) {
	return new Promise((resolve, reject) => {
		myRequest({
			url: '/uniShop/addCart',
			method: 'post',
			data: {
				token,
				pid
			}
		}).then(res => {
			resolve(res.data)
		})
	})
}

export function updateCart(token, cid, count) {
	return new Promise((resolve, reject) => {
		myRequest({
			url: '/uniShop/updateCart',
			method: 'post',
			data: {
				token,
				cid,
				count
			}
		}).then(res => {
			resolve(res.data)
		})
	})
}

export function delCart(token, cid) {
	return new Promise((resolve, reject) => {
		myRequest({
			url: '/uniShop/delCart',
			method: 'post',
			data: {
				token,
				cid
			}
		}).then(res => {
			resolve(res.data)
		})
	})
}
