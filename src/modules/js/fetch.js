import axios from 'axios'

function fecth(url,data) {
	return new Promise((resolve,reject) => {
		axios.post(url,data).then(res => {
			let status = res.data.status
			// if(status === 200) {
			// 	resolve(res)
			// }
			// if(status === 300) {
			// 	location.href = 'login.html'
			// 	resolve(res)
			// }
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}

export default fecth