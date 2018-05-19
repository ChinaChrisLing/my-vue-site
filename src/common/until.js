import Vue from 'vue'

export const to = (promise) => {
  return promise.then(data => {
    return [null, data]
  }).catch(err => [err])
}

export const bus = new Vue()
