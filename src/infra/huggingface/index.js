import fetch from 'node-fetch'
import _keys from '../../../keys/oh-my-grid-12067af1543f.json'

const url = 'https://api-inference.huggingface.co/models/gpt2'
const str =  JSON.stringify
// const q = ""
// const log = console.log
// const _log = (i) => log(i)
// const _str = (i) => {
//   _log(i)
//   return str(i)
// }
// const stringifiedKeys = _str(_keys)

const API_METHOD = 'POST'
const API_TOKEN = _keys.hf
const AUTH_HEADER = `Bearer ${API_TOKEN}`

/**
 * @name inferFrom
 * @usage

        const log = console.log
        const str = JSON.stringify
        inferFrom(q).then((res) => {
          console.log(str(res))
        })
 *
 */

async function inferFrom (data, config) {
  const defaults = {
    headers: {
      Authorization: AUTH_HEADER
    },
    method: API_METHOD,
    body: str(data)
  }
  const response = await fetch(url, config || defaults)
  const result = await response.json()
  // !config.debug && log(result)
  return result
}

module.exports = {
  inferFrom
}

// EOF
