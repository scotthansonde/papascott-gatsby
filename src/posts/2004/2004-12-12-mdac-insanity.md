---
layout: post
title: MDAC Insanity
date: 2004-12-12 20:00:44.000000000 +01:00
categories:
- papatech
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
<p>How do people get serious work done with Windows? I have no idea...</p>
<p>My wife wanted to update the route planning software (i.e. how many km from A to B, so she can fill out her mileage log) on her Windows XP notebook. Her company sells an atlas with software included, but she couldn't get the program to run. "Not enough licenses, try again later."</p>
<p>Smart husband decides to save time and spend 20 to get her a <a title="G DATA Software: PowerRoute 2004" href="http://www.gdata.de/trade/productview/388/4/">real routing program</a>. Mistake. It's the same program with a different name. "Not enough licenses, try again later." The problem is mentioned in the Install FAQ: Make sure you are running as Administrator. Of course I was already running as Administrator, so that's no help.</p>
<p>If this had been my notebook, at this point I would have installed Service Pack 2 and made sure everything was up to date. However, it's not my notebook, it's only got SP1, and the last thing I want to do is break anything; access to her company WAN is essential to her work. The setup program seems unable to detect that  <abbr title="Microsoft Data Access Components">MDAC</abbr> (included with Windows) is installed, so I make sure I have the latest version and patches, and for the Jet Database Engine as well. The updates install successfully, but no luck. "Not enough licenses, try again later."</p>
<p>Finally, after a couple hours of Googling, I find a <a title="Frequently asked questions about MDAC 2.6 Setup" href="http://support.microsoft.com/?kbid=842193">FAQ at Microsoft</a> that covers rolling back MDAC to the original version installed with Windows ("dasetup.exe /u"). Never mind that it doesn't cover XP or the version of MDAC that we have. I'm desperate, and I try it. </p>
<p>It works. Both setup programs no longer complain that MDAC is missing, and both programs are now installed and run flawlessly. I'm an experienced Sys Admin, and it only took me 6 hours to track down and correct a corrupted MDAC installation. I have no idea a normal Windows user is supposed fix something like this. Maybe <a href="http://radio.weblogs.com/0001011/">Scoble</a> can tell me. I know he follows linkbacks.... <a href="http://radio.weblogs.com/0001011/">Scoble?</a></p>
