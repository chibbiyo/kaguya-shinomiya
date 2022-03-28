import { MessageType } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'instagram',
            aliases: ['insta', 'igdl'],
            description: 'Download the image or video from Instagram',
            category: 'media',
            dm: true,
            usage: `${client.config.prefix}instagram [link]`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('Provide the keywords you wanna search, Baka!')
        const chitoge = joined.trim()
        console.log(chitoge)
        const { data } = await axios.get(`https://hanzz-web.herokuapp.com/api/igdl?url=${chitoge}`)
        if (!data) return void M.reply( await request.buffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIJBLGeoanLhbUyzTNXLXXRPUDjUuDKIS8g&usqp=CAU`),
        MessageType.image,
                    undefined,
                    undefined,
                    `*Sorry, couldn\'t find or got some errors*`,
                    undefined
                )
switch (data.result.type) {
  case 'image':
    M.reply( await request.buffer(data.result.url),
        MessageType.image,
                    undefined,
                    undefined,
                    `✨ *Username*: ${data.result.username}\n👍 *Likes*: ${data.result.like_count}\n🗯💬 *Comments Count*: ${data.result.comment_count}\n🔍 *Cpation*: ${data.result.caption} `,
                    undefined
                )
    break
  case 'video':
    M.reply( await request.buffer(data.result.url),
       MessageType.video,
                    undefined,
                    undefined,
                    `✨ *Username*: ${data.result.username}\n⏳ *Duration*: ${data.result.duration}\n👍 *Likes*: ${data.result.like_count}\n💬 *Comments Count*: ${data.result.comment_count}\n🔍 *Cpation*: ${data.result.caption} `,
                    undefined
                )
    break
  default:
    M.reply( await request.buffer(data.result.result_url[0].url),
        MessageType.image,
                    undefined,
                    undefined,
                    `✨ *Username*: ${data.result.username}\n👍 *Likes*: ${data.result.like_count}\n💬 *Comments Count*: ${data.result.comment_count}\n🔍 *Cpation*: ${data.result.caption} `,
                    undefined
                )
}
    }
}
