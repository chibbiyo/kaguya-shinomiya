/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "lowaifu",
			description:" useless try by dev",
			category: "weeb",
			usage: `${client.config.prefix}lowaifu`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
			"https://cdn.discordapp.com/attachments/688526480069885997/688542864904683599/AmistaAnime.jpg",
                        "https://cdn.discordapp.com/attachments/688526480069885997/688543620005101605/AmistaAnime.jpg",
                        "https://cdn.discordapp.com/attachments/688526480069885997/688546517102886912/AmistaAnime.jpg",
                        "https://cdn.discordapp.com/attachments/688526480069885997/688546519829315623/AmistaAnime.jpg",
                        "https://cdn.discordapp.com/attachments/688526480069885997/688547270437765134/AmistaAnime.jpg",
                        "https://cdn.discordapp.com/attachments/688526480069885997/688554574851735732/AmistaAnime.jpg",
                        "https://cdn.discordapp.com/attachments/688526480069885997/688558096943153261/AmistaAnime.jpg",
                        "https://cdn.discordapp.com/attachments/688526480069885997/688565021038346250/AmistaAnime.jpg",
                        "https://cdn.discordapp.com/attachments/688526480069885997/688566273897922591/AmistaAnime.jpg",
                        "https://cdn.discordapp.com/attachments/688526480069885997/688571436591349780/AmistaAnime.jpg",
];
                const selected = images[Math.floor(Math.random() * images.length)];
		return void this.client.sendMessage(
			M.from,
			{ url: selected },
			MessageType.image,
			{
				
				caption: `Useless feature By Alι_.\n`,
			}
		);
	};
}
