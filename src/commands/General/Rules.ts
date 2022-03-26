/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "r",
			description: "Gp",
			category: "general",
			usage: `${client.config.prefix}r`,
                        dm: true,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		
		return void this.client.sendMessage(
			
			MessageType.extendedText,
			{
				
				caption: `*I'm Texas*\n\nAn WhatsApp group management bot. \nI have much features send the command *${this.client.config.prefix}help* to know them.\nThis bot created with ❤ By Alι_.\n`,
			}
		);
	};
}
