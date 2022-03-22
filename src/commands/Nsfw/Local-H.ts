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
			"https://telegra.ph/file/bca7367cb8496d5cef1a5.mp4",
                        "https://telegra.ph/file/bca7367cb8496d5cef1a5.mp4",
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
