/**
 * BetterDiscord Message Object
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
*/

const Channel = require('./channel');
const User = require('./user');


class Message {
    constructor(data) {
        let { message, channel } = data;
        let { author } = message;
        this.id = message.id;
        this.content = message.content;
        this.mentioned = message.mentioned;
        this.mentions = [];
        this.pinned = message.pinned;
        this.embeds = [];
        this.tts = message.tts;
        this.mentionEveryone = message.mentionEveryone;
        this.attachments = [];
        this.blocked = message.blocked;
        this.nick = message.nick;
        this.author = new User(author);
        this.channel = new Channel(channel);
    }
}

module.exports = Message;