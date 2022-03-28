import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import { Sticker, Categories, StickerTypes } from 'wa-sticker-formatter'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'telesticker',
            aliases: ['ts', 'tsd'],
            description: 'Telegram Sticker Downloader. ',
            category: 'utils',
            dm: true,
            usage: `${client.config.prefix}telesticker [url]`
        })
    }
    // static count = 0
     run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('Provide the keywords you wanna search, Baka!')
        const texas = joined.trim()
        console.log(texas)
        
        const { data } = await axios.get(`https://zenzapi.xyz/downloader/telesticker?apikey=867fe8d278&url=${texas}`)
        
if ((data as { error: string }).error) return void (await M.reply('Sorry, couldn\'t find'))
        //const i = Math.floor(Math.random() * data.result.length)
const b = `${data.results?.[Math.floor(Math.random() * data.results.length)]?.media[0]?.webp?.url}`

        const sticker: any = await new Sticker(b, {
			pack: "Sticker Pack",
			author: "BY Texαs ✨",
			quality: 90,
			type: "crop",
			categories: ["🎊"],
		});

      await M.reply(
			await sticker.build(),
			MessageType.sticker,
			Mimetype.webp,)
}

}
