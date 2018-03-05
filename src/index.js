import moment from 'moment'

import { HoursBot } from './hoursbot'

const { token } = process.env
const channel = process.env.env = 'production'
  ? 'general'
  : 'autumn-testing'

const hoursbot = new HoursBot(token, channel)

setInterval(() => {
  const m = moment().utc()

  if(m.format('E kk:mm:ss').match(/[1-5] 01:00:00/))
    hoursbot.publicPost()
}, 1000)

console.log('HoursBot is crouching in the weeds...watching...waiting...')

