import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  debts: g.relation(() => Debt).list().optional(),
})

const Debt = g.model('Finance', {
  title: g.string(),
  description: g.string(),
  value: g.float(),
  type: g.string(),
  owner: g.string(),
})

export default config({
  schema: g
})
