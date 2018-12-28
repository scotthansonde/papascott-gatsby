---
layout: post
title: (Most Of ) The Gritty Details
date: 2002-03-31 21:03:48.000000000 +02:00
categories:
- papatech
tags: []
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'yes'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
---
<p>In case anyone is wondering, here are the details of how I moved my Manila website to Moveable Type<br />
<!--more--><br />
The main step, as I mentioned a few days ago, was to get XML files for my Manila site. There's a TheXmlFiles tool for Radio 7 that can produce these, but it does not work for Radio 8. I downloaded Radio 7 from the same directory where Radio 8 is located (there's no link for it on the Radio website, as far as I can tell), and installed it in a separate directory from Radio 8. It produced a directory full of XML files, as described in the documentation for TheXmlFiles, which I zipped and copied over to my BSD machine.</p>
<p>I wanted to process these files with Perl, but my perl tools complained about the special characters in the XML files, since I used German umlauts in several of my posts. The standard character set for XML is Unicode, but the umlauts were saved as Latin1, so I converted the XML files to Unicode with 'recode latin1..utf8'.</p>
<p>Manila produces a discussion group message for each post, comment and image on the site. For now, I only wanted to import the main posts into my new site. The file homePageCalendar.xml lists the message number of the main post for each day. With the script <a href="/wordpress/wp-content/uploads/2002/03/xmlexport.txt">xmlexport.pl</a>. for each of these posts, I extracted the post date, title, and body into the text format used by MoveableType.</p>
<p>In Manila, you can put image or link names in quotes to expand to a so-called glosary entry. The message files have these names in quotes, and they need to be expanded to the full image or link. I did this by running <a href="/wordpress/wp-content/uploads/2002/03/xmlglossary.txt">xmlglossary.pl</a> on the output from above. The image references now all refer to the Manila site. I uploaded all images to a directory on my new site, and search-and-replaced all references to refer to the new directory.</p>
<p>There were a couple of problems I had to correct by hand. One day's entry had no text, so I simply deleted it from the homePageCalendar.xml file. One of the message xml files has a ctrl-S character that brought the scripts to a halt. I deleted it by hand, and everything ran smoothly.</p>
<p><b>Postscript 2002-04-13</b> Chris Kelly notes that my scripts work if your content are all 'stories'. If you use Manila's news option, the content is stored differently and you'll need to adjust the script.</p>
