/**
 * Description:
 * Helps you to decide where to have lunch.
 *
 * Dependencies:
 * None
 * 
 * Configuration:
 * Edit the po variable below ("Potential Options") to indicate the name of restaurants in your immediate area and a relative weight.
 * A higher weight will have a higher probability of being selected.
 * 
 * Commands:
 * Simply mention the word "lunch." No need to address your Hubot directly.
 *
 * Author:
 * andrewmarconi / http://andrewmarconi.com
 * 
 **/

var i, j, ix, jx, 
	pa = [],
	po = [
		{ weight: 6, name: "Uncle Moe's" },
		{ weight: 6, name: "Rainbow Falafel" },
		{ weight: 5, name: "Sophie's Cuban" },
		{ weight: 4, name: "Cafe Medina" },
		{ weight: 3, name: "Chipolte" },
		{ weight: 1, name: "Indian buffet" }
	],
	re = [
		"I'd give {1} a try.",
		"Go to {1}.",
		"I'm craving {1}.",
		"Must. Eat. At. {1}.",
		"Let's go to {1}.",
		"{1} sounds good to me.",
		"Me gusta {1}.",
		"Meh. I'm not hungry.",
		"What about ordering takeout from {1}?",
		"Is there a food cart nearby?"
	];

for(i=0, ix=po.length; i<ix; i+=1) {
	for (j=0, jx=po[i].weight; j<jx; j+=1) {
		pa.push(po[i].name);
	}
}

po = i = j = ix = jx = null;

module.exports = function(robot) {
  robot.hear(/lunch/i, function(msg) {
	msg.send(msg.random(re).replace("{1}",msg.random(pa)));
  });
};