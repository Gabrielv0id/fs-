import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  debts: g.relation(() => Debt).list().optional(),
  revenues: g.relation(() => Revenue).list().optional(),
})

const Debt = g.model('Debt', {
  title: g.string(),
  description: g.string(),
  value: g.float(),
  date: g.datetime(),
  type: g.string(),
  owner: g.string(),
})

const Revenue = g.model('Revenue', {
  title: g.string(),
  description: g.string(),
  value: g.float(),
  date: g.datetime(),
  debtor: g.string(),
})

export default config({
  schema: g
})
