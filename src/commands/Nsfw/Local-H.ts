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
			description: "Local H test without any good source",
			category: "nsfw",
			usage: `${client.config.prefix}loh`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
			"https://file2directlink.herokuapp.com/442595682039565070350133788/%5BHC%5D%20%5B03-Euphoria%5D%20%5B720p%5D%20compressed.mkv",
                        "https://file2directlink.herokuapp.com/442595682039565070350133788/%5BHC%5D%20%5B03-Euphoria%5D%20%5B720p%5D%20compressed.mkv",
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
