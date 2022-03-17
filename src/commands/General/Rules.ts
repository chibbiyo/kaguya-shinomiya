/*
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rules',
            description: `Get rules list`,
            aliases: ['rules'],
            category: 'general',
            usage: `${client.config.prefix}rules`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios
        return void M.reply( await request.buffer(`https://telegra.ph/file/1c0170c930d5ab65bbcad.jpg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `_*Rules of Texαs Bot*_ ✨\n\n*DONT ASK FOR THE SCRIPT*🚫\n*➝* Use ${client.config.prefix}support to get the Official group link in your PM (Private Message)\n*➝*  If you want to chat with bot you can use *${client.config.prefix}bot/chat (your text)* both are different ai chat bots\n*--->* If you want to add Star Chan in your group the contact the owner by *!owner/!mods* \n*--->* Dont use wrong command, use the command given in the *help list* \n*--->* Dont spam the bot with commands if the bot is not responding, its means the bot maybe offline or facing internet issue. \n*--->* Dont Dm the bot \n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BAN SOON* 🚫  `,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later.`))
    }
}
*/
