import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
                        command: "happy_birthday",
                        aliases: ["hbd", "hhp"],
			description: "You can use it for birthday wish",
			category: "fun",
			usage: `${client.config.prefix}happy_birthday`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        }
        let pfp: string
        try {
            pfp = await this.client.getProfilePicture(user)
        } catch (err) {
            M.reply(`Profile Picture not Accessible of ${username}`)
            pfp =
                'https://telegra.ph/file/a77aa2304f340789ce8fb.jpg'
        }
        await M.reply(
            await request.buffer(
                pfp ||
                    'https://telegra.ph/file/a77aa2304f340789ce8fb.jpg'
            ),
            MessageType.image,
            undefined,
            undefined,
            `\t\t ✨ *𝐇𝐚𝐩𝐩𝐲 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲* ✨ \n\n • “ʜᴀᴘᴘʏ ʙɪʀᴛʜᴅᴀʏ! ɪ ʜᴏᴘᴇ ᴀʟʟ ʏᴏᴜʀ ʙɪʀᴛʜᴅᴀʏ ᴡɪsʜᴇs ᴀɴᴅ ᴅʀᴇᴀᴍs ᴄᴏᴍᴇ ᴛʀᴜᴇ.”\n\n • “ᴀ ᴡɪsʜ ғᴏʀ ʏᴏᴜ ᴏɴ ʏᴏᴜʀ ʙɪʀᴛʜᴅᴀʏ, ᴡʜᴀᴛᴇᴠᴇʀ ʏᴏᴜ ᴀsᴋ ᴍᴀʏ ʏᴏᴜ ʀᴇᴄᴇɪᴠᴇ, ᴡʜᴀᴛᴇᴠᴇʀ ʏᴏᴜ sᴇᴇᴋ ᴍᴀʏ ʏᴏᴜ ғɪɴᴅ, ᴡʜᴀᴛᴇᴠᴇʀ ʏᴏᴜ ᴡɪsʜ ᴍᴀʏ ɪᴛ ʙᴇ ғᴜʟғɪʟʟᴇᴅ ᴏɴ ʏᴏᴜʀ ʙɪʀᴛʜᴅᴀʏ ᴀɴᴅ ᴀʟᴡᴀʏs. ʜᴀᴘᴘʏ ʙɪʀᴛʜᴅᴀʏ!”\n\n ᴴᵃᵖᵖʸ ᴮᶦʳᵗʰᵈᵃʸ
*@${user.split('@')[0]}*`
        )
    }
}
