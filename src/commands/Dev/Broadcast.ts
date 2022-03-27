/** @format */

import { MessageType } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "broadcast",
			description:
				"Will make a broadcast for groups where the bot is in. Can be used to make announcements.",
			aliases: ["bcast", "announcement", "bc"],
			category: "dev",
			dm: true,
			usage: `${client.config.prefix}bc`,
			modsOnly: true,
			baseXp: 0,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`Please provide the Broadcast Message.`));
		const term = joined.trim();
		const images = [
			"https://telegra.ph/file/fb37f93ff7526b155cf5f.jpg",
			"https://telegra.ph/file/d44e2c9504d21ec4868dd.jpg",
			"https://telegra.ph/file/c64084e85526b073dc9d0.jpg",
			"https://telegra.ph/file/b598703136303565f762a.jpg",
			"https://telegra.ph/file/0d83a9b9046303b9a2814.jpg",
			"https://telegra.ph/file/f6a26deb53ac461f6192c.jpg",
		];
		const selected = images[Math.floor(Math.random() * images.length)];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const chats: any = this.client.chats
			.all()
			.filter((v) => !v.read_only && !v.archive)
			.map((v) => v.jid)
			.map((jids) => (jids.includes("g.us") ? jids : null))
			.filter((v) => v);
		for (let i = 0; i < chats.length; i++) {
			const text = `*Texαs Broadcast* ✨\n\n${term}\n\n Regards ~ *${M.sender.username}*`;
			this.client.sendMessage(chats[i], { url: selected }, MessageType.image, {
				caption: `${text}`,
				contextInfo: {
					mentionedJid: M.groupMetadata?.participants.map((user) => user.jid),
				},
			});
		}
		await M.reply(`✅ Broadcast Message sent to *${chats.length} groups*.`);
	};
}
