// 封装get请求
const baseUrl = "https://api.zyugat.cn/study"
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url,
			method: options.method || 'get',
			data: options.data || {},
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
