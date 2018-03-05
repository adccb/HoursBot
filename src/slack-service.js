import { WebClient } from '@slack/client'

const messages = [
  'Once more unto the breach, dear friends, once more; it\'s time again to mark our hours in Harvest.',
  'Friends, Romans, countryfolk, lend me your ears...and mark your hours in Harvest!',
  'Good {morning, afternoon, evening}, wherever you are. Remember to log your hours in Harvest before you sign off!',
  'Friendly reminder to mark your hours in Harvest for the day. Thanks!',
  'Thanks for all your hard work! Please remember to log your hours in Harvest.',
]

export class SlackService {
  constructor(token, channel) {
    this.slack = new WebClient(token)    
    this.channel = channel
  }

  importUsers() {
    return this.slack.users.list().then(res => {
      this.users = res.members.reduce((obj, user) => {
        obj[user.name] = user.id
        return obj
      }, {})
    })
  }

  sendDM(user) {
    this.importUsers().then(() => {
      this.slack.chat.postMessage(this.users['autumn'], 'hello')
    })
  }

  publicPost() {
    const message = messages[Math.floor(Math.random() * messages.length)]
    this.slack.channel.postMessage(this.channel, message)
  }
}

