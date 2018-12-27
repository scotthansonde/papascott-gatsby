---
layout: post
title: No Complaints
date: 2003-09-02 04:09:14.000000000 +02:00
categories:
- work
tags: []
status: publish
type: post
published: true
meta: {}
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
---
<p>The relaunch of my work site has now been up over a week, with no negative comments. And almost no positive comments either. I did work out how to get the navigation bar to work at small screen sizes, using some dynamic positioning in JavaScript. You can try it if you like. The red dot is supposed to stay at the bottom of the screen, or get pushed down if the menus are too long (i.e. if the top of the dot is higher than the bottom of the menus, the position of the dot is changed from absolute to static). It doesn't work yet in Konqueror (the dot is always statically positioned, even if there's plenty of room), and I'm guessing it doesn't work yet in Safari either.</p>
<p>The menus are dynamically generated from a simple XML file (originating from an Excel table saved as CSV text) with the buttons created from Type 1 fonts with GD and t1lib (first time I've used GD in production, I was always unhappy with quality before), cached, of course (the filenames are md5sums of the arguments passed to the GD script). If you use Netscape 4 you get a static table, otherwise you see script-less CSS rollovers (using :hover, images soon to be preloaded).  </p>
<p>Yes, I know that frames are pass&#233; in the 21st century, but Marketing wants all the elements to stay fixed, and postition:fixed doesn't work in Internet Explorer. A non-framed version is coming. Since I'm paid to be a sys admin, not a web coder, improvements to the site will be slow, but hopefully steady. None of this would have been possible without reading <a title="Eric Meyer on CSS: Home" href="http://www.ericmeyeroncss.com/">Eric Meyer</a>, <a title="O'Reilly Network: Cooking with JavaScript & DHTML, Part 6" href="http://www.oreillynet.com/lpt/a/3770">Danny Goodman</a>, and <a title="Jeffrey Zeldman Presents: The Daily Report" href="http://www.zeldman.com/">Jeffrey Zeldman</a>. And, of course, I'm only posting about my work site at all because I'm hoping for constructive criticism.</p>
