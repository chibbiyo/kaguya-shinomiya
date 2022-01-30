/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "everyone",
			description: "Tags all users in group chat",
			aliases: ["all", "tagall", "ping"],
			category: "moderation",
			usage: `${client.config.prefix}everyone`,
			adminOnly: true,
			baseXp: 20,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		const stickers = [
			"https://telegra.ph/file/b598703136303565f762a.jpg",
                        "https://telegra.ph/file/e14a8f7ccef8f702c386f.jpg",
			"https://telegra.ph/file/71562ca01ba6f2572aaab.jpg",
                        "https://telegra.ph/file/1c0170c930d5ab65bbcad.jpg",
		];
		const random = stickers[Math.floor(Math.random() * stickers.length)];
		const term = joined.trim().split(" ");
		if (term[0] === "--s" || term[0] === "--sticker") {
			const sticker: any = await new Sticker(random, {
				pack: "Attention Everyone!",
				author: "Texαs ✨",
				quality: 90,
				type: "default",
				categories: ["🎊"],
			});
			return void (await M.reply(
				await sticker.build(),
				MessageType.sticker,
				Mimetype.webp,
				M.groupMetadata?.participants.map((user) => user.jid)
			));
		} else
			return void (await M.reply(
				`${
					M.groupMetadata?.subject || "*EVERYONE*"
				}\n*READ QUOTED MESSAGE*\n*[TAGGED MAGICALLY]*`,
				undefined,
				undefined,
				M.groupMetadata?.participants.map((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
	};
}
