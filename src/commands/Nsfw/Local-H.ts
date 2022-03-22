/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "loh",
			description: "Local H test without Api",
			category: "nsfw",
			usage: `${client.config.prefix}loh`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
			"https://mega.nz/file/TB90HCaS#kOYhj9q-XTCv5RDfCkSOtKsCG9i2OFconWZ-zrN_D8U",
                        "https://mega.nz/file/TB90HCaS#kOYhj9q-XTCv5RDfCkSOtKsCG9i2OFconWZ-zrN_D8U",
];
                const selected = images[Math.floor(Math.random() * images.length)];
		return void this.client.sendMessage(
			M.from,
			{ url: selected },
			MessageType.video,
			{
				
				caption: `✨ Here you go`,
			}
		);
	};
}
