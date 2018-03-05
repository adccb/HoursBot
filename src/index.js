import moment from 'moment'

import { SlackService } from './slack-service'

const { token } = process.env
const channel = process.env.env = 'production'
  ? 'general'
  : 'autumn-testing'

const slack = new SlackService(token, channel)

setInterval(() => {
  const m = moment().utc()

  if(m.format('E kk:mm:ss').match(/[1-5] 01:00:00/))
    slack.publicPost()
}, 1000)

