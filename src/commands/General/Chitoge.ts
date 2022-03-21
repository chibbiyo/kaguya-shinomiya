/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "texas",
			description: "Get some info about bot",
			category: "general",
			usage: `${client.config.prefix}texas`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://telegra.ph/file/1c0170c930d5ab65bbcad.jpg";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.image,
			{
				
				caption: `*I'm Texαs* ❤ \n\n*Description:*\nA WhatsApp bot with a lot anime features! Use ${client.config.prefix}help to get help menu of the bot. \nUse ${client.config.prefix}info to check my info! \nUse ${client.config.prefix}support to join our WhatsApp Support Group.\nUse ${client.config.prefix}chat to chat with bot.\n This bot is created with ❤️ by *Alι_Aryαɴ*\n`,
			}
		);
	};
}
