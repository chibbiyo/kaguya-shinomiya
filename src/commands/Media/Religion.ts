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
            command: 'religion',
            aliases: ['re', 'muslim'],
            description: 'Search surah & ayat',
            category: 'media',
            usage: `${client.config.prefix}religion 1`
            baseXp: 30,
        })
    }
     run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`Give me a term to search, Baka!`));
		const chitoge: any = joined.trim().split("|");
		const term: number = chitoge[0];
		const amount: number = chitoge[1];
		if (!amount)
			return void M.reply(
				`Give me the number , Baka!\n\nExample: *${this.client.config.prefix}religion 1|1*`
			);
     const { data } = await axios.get(`https://api-xcoders.xyz/api/religion/quran?surah=${term}&ayat=${amount}&apikey=tFnG6PJvrg`)
        M.reply(await audio.getBuffer(), MessageType.audio).catch((reason: Error) =>
            M.reply(`✖ An error occurred, Reason: ${reason}`)
    }
