const express = require("express");
const app = express();

app.listen(3000, () => {
	console.log("running...");
})

app.get("/", (req, res) => {
	res.send("starting server.. \n\nbooting BinaryStateAI..");
})

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

require('http').createServer((_, res) => res.end("server is up.. \n\nBinaryStateAI running..")).listen(8080)

const quotes = [
	"The only way to do great work is to love what you do. - Steve Jobs",
	"The same boiling water that makes an egg turn hard will make a potato soft. - M. Robbins",
	"If I had more time, I would have written a shorter letter. — Pascal",
	"The trouble with programmers is that you can never tell what a programmer is doing until it is too late. - Seymour Cray",
	"You might not think programmers are artists, but programming is an extremely creative profession. Its logic-based creativity. – J.Romero",
	"An expert is a person who has made all the mistakes that can be made in a very narrow field. – N. Bohr",
	"Idiots admire complexity, a genius admires simplicity. - Terry Davis",
	"One of my most productive day's was throwing away 1000 lines of code. — Ken Thompson",
	"The city's central computer told you? R2D2, you know better than to trust a strange computer! - C3PO",
	"It works on my machine. - Unknown",
	"Programming isn't a zero-sum game. Teaching something to a fellow programmer doesn’t take it away from you. - John Carmack",
	"No amount of experimentation prove me right; a single experiment can prove me wrong. - A. Einstein",
	"Facts stands never on the side of authority. Where power have right, right have no power. - Aa. Aavaath",
	"Nothing puzzles me more than time and space and yet nothing troubles me less. - Charles Lamb",
	"Object-oriented programming is an exceptionally bad idea which could only have originated in state of California. - E. Dijkstra",
	"The more unintelligent a man is, the less mysterious our existence seems to him. - A. Schopenhauer",
	"The creation of a thousand forests is in one acorn. - R. W. Emerson",
	"Paradox of innovation is that it's accepted as innovation when it has become imitation. ― P. Scaruffi",
	"Scientific thought & its creation is the common and shared heritage of mankind. - Abdus Salam",
	"Without culture, and the relative freedom it implies, society, even when perfect, is but a jungle. This is why any authentic creation is a gift to the future. - Camus",
	"One cannot predict or forestall all the clever misinterpretations that others might put on one's words. The most that can be done is to alert honest people to the problem. - Thomas Sowell",
	"It's fine if you don't know, but you're fired if you can't even google it. - Unknown",
	"I was put on Earth to face the blank page. - Quentin Tarantino",
	"I have not failed, I've just found 10000 ways that wont work. - Edison",
	"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - C. Thompson",
	"A stupid man's report of what a clever man says is never accurate since he unconsciously translates what he hears into something he can understand. - B. Russell",
	"Any organisation that designs a system will produce a design whose structure is a copy of the organisations communication structure. Rob C. Martin",
	"Low-level programming is good for the soul. - John Carmack",
	"Programming isn't about what you know, it's about what you can figure out. - Chris Pine",
	"There are two major products that come from Berkeley: LSD and UNIX. We don’t believe this to be a coincidence. - J. S. Anderson",
	"Simple things should be simple while complex things should be possible. - Alan Kay",
	"A personal computer isn't personal because it's small and portable, it's because you pour yourself into it. - Audrey Watters",
	"Some of the best programming is done on paper, really. Putting it into the computer is just a minor detail. - Max Kanat-Alexander",
	"Programming is about managing the complexity of the problem, laid upon complexity of the machine. Because of this most of our programming fails. - Eckel",
	"AI is the transformer of civilization. - Toba B.",
	"Developers, developers, developers. - Steve Ballmer",
	"The problem with object-oriented languages is they've got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong",
	"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding",
	"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. – Antoine de Saint",
	"Great ideas often receive violent opposition from mediocre minds. - Albert Einstein",
	"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. - R. Cook",
	"Be alone, that is the secret of invention; be alone, that is when ideas are born. – Nikola Tesla",
	"Confusion is part of programming. - Felienne Hermans",
	"Coding like poetry should be short and concise. - Santosh Kalwar",
	// Add more quotes here
];

client.on("message", message => {

	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
	const day = currentDate.getDate().toString().padStart(2, '0');
	const hour = currentDate.getHours().toString().padStart(2, '0');
	const minute = currentDate.getMinutes().toString().padStart(2, '0');
	const second = currentDate.getSeconds().toString().padStart(2, '0');

	if (message.content === "!ping") {
		message.channel.send("!pong, the AI-server is up!")
	}

	if (message.content === "!test") {
		message.channel.send("i'm here!")
	}

	if (message.content === "!binary") {
		message.channel.send("!state")
	}

	if (message.content === "!time") {
		// Getting current AI-server time
		const aiServerTime = `${year}, ${hour}:${minute}:${second}`;
		message.channel.send(`${aiServerTime} ( AI-server time )`);
	}

	// !quote command
	if (message.content === "!quote") {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		const selectedQuote = quotes[randomIndex];
		message.channel.send(selectedQuote);
	}

})

setInterval(() => {
	const channel = client.channels.cache.find(channel => channel.name === 'upstate');
	if (channel) {
		channel.send("!pong, the AI-server is up!");
	} else {
		console.error("not found!");
	}
}, 137 * 60 * 1000); // Send message every 137th minute

client.login(process.env.token);