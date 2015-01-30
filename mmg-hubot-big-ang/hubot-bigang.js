/**
 * Description:
 *   Big Ang always knows what to say.
 *
 * Dependencies:
 *   None
 * 
 * Configuration:
 *   None
 * 
 * Commands:
 *   Hubot listens for key words, and replies with relevant "Big Ang" animated GIFs.
 *
 * Author:
 *   andrewmarconi
 * 
 **/

var i, ix, 
	brain = [
		{ rx: /best time/i, url: 'http://25.media.tumblr.com/tumblr_m6c3j3v1Ho1ql5yr7o1_400.gif'},
		{ rx: /goodbye/i, url: 'http://24.media.tumblr.com/tumblr_m4dv4y3Cre1ql5yr7o1_400.gif'},
		{ rx: /disaster/i, url: 'http://25.media.tumblr.com/tumblr_m1iehwwuEl1ql5yr7o1_r1_400.gif'},
		{ rx: /don't work/i, url: 'http://24.media.tumblr.com/tumblr_m1vpaw4xbt1ql5yr7o1_r1_400.gif'},
		{ rx: /doesn't work/i, url: 'http://24.media.tumblr.com/tumblr_m1vpaw4xbt1ql5yr7o1_r1_400.gif'},
		{ rx: /don't think so/i, url: 'http://25.media.tumblr.com/tumblr_m6x2c1kPNX1ql5yr7o1_400.gif'},
		{ rx: /drama/i, url: 'http://25.media.tumblr.com/tumblr_m2l5nimoCz1ql5yr7o1_400.gif'},
		{ rx: /dunno/i, url: 'http://24.media.tumblr.com/tumblr_m7mup4L5qS1ql5yr7o1_400.gif'},
		{ rx: /excited/i, url: 'http://24.media.tumblr.com/tumblr_m6uwy1E0zO1ql5yr7o1_400.gif'},
		{ rx: /uh excuse me/i, url: 'http://25.media.tumblr.com/tumblr_m79yxwpTeS1ql5yr7o1_400.gif'},
		{ rx: /excuse me/i, url: 'http://25.media.tumblr.com/tumblr_m6x37hZnGz1ql5yr7o1_400.gif'},
		{ rx: /god/i, url: 'http://25.media.tumblr.com/tumblr_m7mtqu437p1ql5yr7o1_400.gif'},
		{ rx: /hello/i, url: 'http://25.media.tumblr.com/tumblr_m3aolqt9dh1ql5yr7o1_400.gif'},
		{ rx: /hi there/i, url: 'http://25.media.tumblr.com/tumblr_m7mraw5j5L1ql5yr7o1_400.gif'},
		{ rx: /that's horrible/i, url: 'http://25.media.tumblr.com/tumblr_m51wnovRvI1ql5yr7o1_400.gif'},
		{ rx: /it's horrible/i, url: 'http://24.media.tumblr.com/tumblr_lxil3oGPXV1ql5yr7o1_400.gif'},
		{ rx: /love it/i, url: 'http://25.media.tumblr.com/tumblr_m3rsz0Iwyw1ql5yr7o1_400.gif'},
		{ rx: /pissed off/i, url: 'http://24.media.tumblr.com/tumblr_m2y370cmQ21ql5yr7o1_400.gif'},
		{ rx: /say no/i, url: 'http://25.media.tumblr.com/tumblr_m7mtrcNPVf1ql5yr7o1_400.gif'},
		{ rx: /this is hard/i, url: 'http://25.media.tumblr.com/tumblr_m79wjdQXwA1ql5yr7o1_400.gif'},
		{ rx: /too old/i, url: 'http://25.media.tumblr.com/tumblr_lzc5gxPicO1ql5yr7o1_400.gif'},
		{ rx: /I want/i, url: 'http://25.media.tumblr.com/tumblr_m79vtuCkeo1ql5yr7o1_400.gif'},
		{ rx: /weirdo/i, url: 'http://24.media.tumblr.com/tumblr_lzq1mfHTaa1ql5yr7o1_400.gif'},
		{ rx: /what is that/i, url: 'http://24.media.tumblr.com/tumblr_m79ywsN0b21ql5yr7o1_400.gif'},
		{ rx: /puppy/i, url: 'http://25.media.tumblr.com/tumblr_lz30c5iWVv1ql5yr7o1_400.gif'},
		{ rx: /come here/i, url: 'http://24.media.tumblr.com/tumblr_m6x2mdg0ZP1ql5yr7o1_400.gif'},
		{ rx: /cute/i, url: 'http://24.media.tumblr.com/tumblr_m3o6qplBU71ql5yr7o1_r1_400.gif'},
		{ rx: /why not/i, url: 'http://25.media.tumblr.com/tumblr_m0h0c1mQeY1ql5yr7o1_400.gif'},
		{ rx: /yay/i, url: 'http://25.media.tumblr.com/tumblr_m485wpVHsD1ql5yr7o1_400.gif'},
		{ rx: / nice/i, url: 'http://25.media.tumblr.com/tumblr_lzc1mxc0cH1ql5yr7o1_400.gif'}
	];

module.exports = function(robot) {
	for (i=0, ix=brain.length; i<ix; i+=1) {
		!function outer(i){
			robot.hear(brain[i].rx, function(msg) {
				console.log(i);
				msg.send(brain[i].url);
			});
		}(i);
		console.log("Listening for: " + brain[i].rx);
	}
};
