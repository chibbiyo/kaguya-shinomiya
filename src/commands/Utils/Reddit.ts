import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { MessageType } from '@adiwajshing/baileys'
import { readFile } from 'fs-extra'
import { join } from 'path'
import { IReply } from '../Typings'
import Utils from '../Utils'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'reddit',
            description: `Will send you image.`,
            aliases: ['redi'],
            category: 'utils',
            usage: `${client.config.prefix}reddit `,
            baseXp: 50
        })
    }

export const reddit = async (subreddit: string, safe: boolean): Promise<IReply> => {
    if (!subreddit) return { body: responses['wrong-format'] }
    try {
        const post = await Utils.fetch(`https://meme-api.herokuapp.com/gimme/${encodeURI(subreddit.trim())}`, {})
        if (post.nsfw && safe)
            return {
                body: await readFile(join(__dirname, '..', '..', 'assets', 'images', '18+.jpg')),
                caption: responses.mod['no-nsfw'],
                type: MessageType.image
            }
        return {
            body: await Utils.download(post.url),
            caption: `📗 *Title:* ${post.title}\n📘 *Author:* ${post.author}\n📙 *Post:* ${post.postLink}`,
            type: MessageType.image
        }
    } catch (err) {
        return {
            body: `🎯 *The given subreddit possibly is Invalid or this subreddit does not have any posts containing images*`
        }
    }
}
