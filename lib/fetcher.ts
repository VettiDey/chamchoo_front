import https from 'https'

import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://35.192.203.252:8000/chamchoo/',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false // 이 옵션을 통해 자체 서명된 인증서를 신뢰하도록 설정
  })
})

export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await instance.get<T>(url)

  return res.data
}
