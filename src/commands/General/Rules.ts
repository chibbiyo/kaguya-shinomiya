/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "ra",
			description: "Gp",
			category: "general",
			usage: `${client.config.prefix}ra`,
                        dm: true,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		
		await M.reply(
			`*━━❰Texαs❱━━*`
		);
	};
}
