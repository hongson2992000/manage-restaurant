import accountApiRequest from '@/apiRequests/account'
import { useQuery } from '@tanstack/react-query'

export const useGetAccountProfile = () => {
  return useQuery({
    queryKey: ['accountProfile'],
    queryFn: accountApiRequest.getAccountProfile
  })
}
