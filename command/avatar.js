

module.exports.run = async (Discord, client, message, args) => {

	let avuser = message.author;
	let user = message.mentions.users.first();
	let search = args.join(' ');
	let tags = client.users.find(u => u.username === search);
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	var author; // mention to get avatar, or type username
	
		if(user){
			var author = user;

			let embed = new Discord.RichEmbed()
			.setColor(randomColor)
			.setDescription(`[${user.tag}'s avatar](${user.avatarURL})`)
			.setImage(`${user.avatarURL}`)
			return message.channel.send(embed).then(() => console.log(`${avuser.tag} used avatar on ${author.tag}`))

		} if (tags) {
			var author = tags;

			let embed = new Discord.RichEmbed()
			.setColor(randomColor)
			.setDescription(`[${tags.tag}'s avatar](${tags.avatarURL})`)
			.setImage(`${tags.avatarURL}`)
			return message.channel.send(embed).then(() => console.log(`${avuser.tag} used avatar on ${author.tag}`))
		} else {
			var author = message.author;
			let embed = new Discord.RichEmbed()
			.setColor(randomColor)
			.setDescription('[Your avatar]('+message.author.avatarURL+')')
			.setImage(`${author.displayAvatarURL}`)
			return message.channel.send(embed).then(() => console.log(`${message.author.tag} used avatar`))
		
		} 
		
		

}
