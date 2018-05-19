import axios from 'axios'
import originJsonp from 'jsonp'

export function getData (url, params = {
  __flag: true,
  _ac: 'ManagementCenter',
  _smp: 'ManagementCenter.Applicationauth'
}) {
  return axios
    .get(url, {params})
    .then(res => {
      return [null, res.data]
    })
    .catch(e => [e])
}

export function postData (url, data = {__flag: true}) {
  return new Promise((resolve, reject) => {
    return axios({
      url: url,
      method: 'post',
      data: data,
      transformRequest: [
        function (data) {
          let ret = ''
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}

export function jsonp (url, param = 'jsopcallback') {
  return new Promise((resolve, reject) => {
    originJsonp(url, {param}, (err, res) => {
      if (!err) {
        resolve(res)
      }
      reject(err)
    })
  })
}
