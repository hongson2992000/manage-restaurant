import http from '@/lib/http'
import { AccountResType } from '@/schemaValidations/account.schema'

const accountApiRequest = {
  getAccountProfile: () => http.get<AccountResType>('accounts/me')
}

export default accountApiRequest
