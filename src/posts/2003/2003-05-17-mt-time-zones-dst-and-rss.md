---
layout: post
title: MT, Time Zones, DST, and RSS
date: 2003-05-17 14:05:10.000000000 +02:00
categories:
- blogging
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
# excerpt: !ruby/object:Hpricot::Doc
  # options: {}
---
<p>I'm planning to archive my quick links as RSS files and use the Magpie or Onyx PHP libraries to add them to my montly archives. While preparing the files, I was reminded that Movable Type has no concept of daylight savings time. The date and time of the entry is saved in local time, without any indication of time zone or daylight savings time. </p>
<p>You can set a time zone for a blog, but it's just a number between -12 and 12, and is a global preference. It seems only to set the MTBlogTimezone variable, which gets tacked onto the dc:date field in the RSS template. If you go onto daylight savings time, the dc:dates will be off by an hour until you adjust your timezone. And in the fall you have to set it back.</p>
<p>This may not really make any difference when generating web pages, when I want to display local time anyway, but it does make a difference to me when I archive entries to RSS files. There I'd just as soon save the dc:time as UTC, which never springs ahead or falls back. Then when I display the file, I can convert to whatever time zone I want.</p>
<p>So I installed <a title="Brad Choate: PerlScript Plugin" href="http://www.bradchoate.com/past/mtperlscript.php">Brad Choate's PerlScript Plugin</a>. Then I can use a couple of lines of perl to convert MT date and time to UTC and print it out as a ISO 8601 string fit for the dc:date field. I could probably make this into a plugin for MT as well. But this is a lot more trouble than it needs to be. MT should be able to keep track of time zones and daylight saving time on its own. </p>
<p><code>&lt;dc:date>&lt;MTPerlScript><br />
use Time::Local;<br />
my $mytime = timelocal(<$MTEntryDate format=<br />
   "('%S', '%M', '%H', '%e', '%m'-1,  '%Y'-1900)"$>);<br />
my ($sec,$min,$hour,$mday,$mon,$year,<br />
   $wday,$yday,$isdst)=gmtime($mytime);<br />
printf('%d-%02d-%02dT%02d:%02d:%02dZ',<br />
   $year+1900,$mon+1,$mday,$hour,$min,$sec);<br />
&lt;/MTPerlScript>&lt;/dc:date></code></p>
