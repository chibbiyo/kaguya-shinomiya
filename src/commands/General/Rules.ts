/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "rules",
			description: "This Command with display the bot rules.",
			category: "general",
			usage: `${client.config.prefix}rules`,
                        dm: true,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		
		await M.reply(
			`🤖 *ᴛᴇxᴀs ʙᴏᴛ ʀᴜʟᴇs*\n
📍 _Do not call bot, if you do then you'll get automatically blocked by bot._\n
📍 _Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end._\n
📍 _Do not abuse/disrespect bot and its owner._\n
📍 _If you see any bug/error in bot then report it to owner with the command ${this.client.config.prefix}bug/report <problem>._\n
📍 _If you want this bot in your group then contact owner in support group by typing ${this.client.config.prefix}support or use ${this.client.config.prefix}report command as request with group join link._\n
📍 _Enjoy the bot and have fun._\n`
		);
	};
}
