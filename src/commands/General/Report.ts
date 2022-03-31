import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings"; 

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: "report",
            aliases: ["bug"],
            description: "send message mods, report, issue, advice",
            category: "general",
            usage: `${client.config.prefix}report`,
            dm: true,
            baseXp: 10
        })
    }

    run = async (

		M: ISimplifiedMessage,	{ joined }: IParsedArgs
): Promise<void> => {
              if (!joined) return void (await M.reply(`Please provide report Message.`))
             const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        };
        
             const term = joined.trim()
            await this.client.sendMessage(
               // enter your unique gid
`120363024705741799@g.us`,
                `📨 *Report Message!!*\n👤 *User: ${user}*\n🔖 *Message: ${term}*`,
                MessageType.text
            );
            return void M.reply('*Your report message has been sent to the bot admin!*')
        }}
