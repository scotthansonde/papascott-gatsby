---
layout: post
title: Blogroll Timestamps with Perl and Bloglines
date: 2004-12-07 15:50:10.000000000 +01:00
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
<p>A few weeks ago I mentioned that I was retrieving my <a href="https://www.papascott.de/archives/2004/10/23/bloglines-timestamps/" title="PapaScott: Bloglines Timestamps">blogroll with timestamps from Bloglines</a> using their <a href="http://www.bloglines.com/services/api/">web services API</a>, but that both my scripts and their API were still buggy. Both are now mostly fixed, I can now get timestamps for 99.5% of my blogroll with the API. The necessary files are at my <a href="http://cvs.sourceforge.net/viewcvs.py/papascott/bloglines/" title="SourceForge.net CVS Repository - directory - cvs: papascott/bloglines">personal CVS repository</a>: a database schema (<a href="http://cvs.sourceforge.net/viewcvs.py/papascott/bloglines/schema.sql?rev=1.1&amp;view=markup">schema.sql</a>), three Perl scripts that read the blogroll into the database (<a href="http://cvs.sourceforge.net/viewcvs.py/papascott/bloglines/bl.getblogroll.pl?rev=1.1.1.1&amp;view=markup">bl.getblogroll.pl</a>), read the timestamps into the database (<a href="http://cvs.sourceforge.net/viewcvs.py/papascott/bloglines/bl.read.pl?rev=1.2&amp;view=auto">bl.read.pl</a>), and write an <a href="https://www.papascott.de/bl.rss">RSS file</a> from the database (<a href="http://cvs.sourceforge.net/viewcvs.py/papascott/bloglines/bl.write.pl?rev=1.1.1.1&amp;view=auto">bl.write.pl</a>), and finally a PHP script using MagpieRSS that reads the RSS file (<a href="http://cvs.sourceforge.net/viewcvs.py/papascott/bloglines/blogroll-simple.php?rev=1.1&view=auto">blogroll-simple.php</a>). </p>
<p>These scripts are not specific to any weblog software. The Perl scripts require the modules <a href="http://search.cpan.org/~miyagawa/WebService-Bloglines/">WebService::Bloglines</a>, XML::Parser and LWP, among others. I run the Perl scripts every 15 minutes with cron (saving the results of bl.write.pl to a file), and include() the PHP script on my home page. That's all the documentation I'm going to give for now, but if you can understand it, feel free to play with the scripts and send me your improvements.<br />
<!--more--><br />
Well, maybe a few notes are in order.</p>
<p>1. The Bloglines API gets all feeds whether they are marked as public or not. I put my private feeds into separate folders which are ignored by the notifier. My script then only gets those feeds which are in folders that are not ignored.</p>
<p>2. The database field link_alias will override the weblog title in the RSS output, if present. </p>
<p>3. The WebService::Bloglines method getitems() will die if the HTTP status is not 200. However, it is perfectly valid for a feed to return a status of 304 (i.e. no newer entries are available). Therefore I check the status of each feed with LWP first.</p>
<p>4. Similarly, getitems() will also die if the input is not valid XML. This is the 0.5% when the script does not work (namely, for Aaron Swartz... his RSS is valid, but Bloglines appears to have truncated a field for his feed). So a blog is simply skipped if the XML is not valid.</p>
