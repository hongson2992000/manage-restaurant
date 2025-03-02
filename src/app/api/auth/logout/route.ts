import authRequest from '@/apiRequests/auth'
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = cookies()
  const accessToken = (await cookieStore).get('accessToken')?.value
  const refreshToken = (await cookieStore).get('refreshToken')?.value
  ;(await cookieStore).delete('accessToken')
  ;(await cookieStore).delete('refreshToken')
  if (!accessToken || !refreshToken) {
    return Response.json(
      {
        message: 'Not exsit accessToken or refreshToken'
      },
      {
        status: 200
      }
    )
  }
  try {
    const result = await authRequest.sLogout({ accessToken, refreshToken })
    return Response.json(result.payload)
  } catch (error) {
    console.log(error)
    return Response.json(
      {
        message: 'Internal Server Error'
      },
      {
        status: 200
      }
    )
  }
}
