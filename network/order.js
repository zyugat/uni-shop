import {
	myRequest
} from '@/network/request.js'

export function showOrder(token) {
	return new Promise((resolve, reject) => {
		myRequest({
			url: '/uniShop/showOrder',
			method: 'get',
			data: {
				token
			}
		}).then(res => {
			resolve(res.data)
		})
	})
}

export function addOrder(token, plist, address, phone, time, total) {
	return new Promise((resolve, reject) => {
		myRequest({
			url: '/uniShop/addOrder',
			method: 'post',
			data: {
				token,
				plist,
				address,
				phone,
				time,
				total
			}
		}).then(res => {
			resolve(res.data)
		})
	})
}
