/** @format */

import { MessageType } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "lwaifu",
			description:
				"Useless",
			aliases: ["lw", "lf"],
			category: "weeb",
			dm: true,
			usage: `${client.config.prefix}lwaifu`,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
       await M.reply(
			`*Do you mean ${this.client.config.prefix}help?* \n`
     )
		const images = [
			"https://telegra.ph/file/fb37f93ff7526b155cf5f.jpg",
			"https://telegra.ph/file/fb37f93ff7526b155cf5f.jpg",
			"https://telegra.ph/file/fb37f93ff7526b155cf5f.jpg",
			"https://telegra.ph/file/b598703136303565f762a.jpg",
			"https://telegra.ph/file/b598703136303565f762a.jpg",
			"https://telegra.ph/file/b598703136303565f762a.jpg",
		];
};
}
