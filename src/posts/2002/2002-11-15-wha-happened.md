---
layout: post
title: Wha Happened?
date: 2002-11-15 06:11:42.000000000 +01:00
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
<p>A <a href="http://andrea.editthispage.com/2002/11/14">couple</a> <a href="http://www.dangerousmeta.com/posts/02/20021114">people</a> <a href="http://www.couchblog.de/nico/archives/000870.php#000870">missed</a> me at the usual address. That's nice. </p>
<p>For German .de domains there is no evil Network Solutions/Verisign monopoly. There is a  central registrar <a href="http://www.denic.de/">DENIC</a>, but as an end-user you deal with your provider or hoster. I moved papascott.de to a <a href="http://www.cornerhost.com">hoster</a> in the US, and they are obviously not a DENIC member, so I had to find a domain-only provider. I've used <a href="http://www.nrw.net/">one</a> in the past, without any problems, but I thought I'd try <a href="http://www.united-domains.de/">someone new</a> that was a bit less expensive and with online domain administration and a free basic DNS (only one A record, but that's all I need). </p>
<p>Apparently they recycled my paperwork, and after having set up my domain on Saturday, they set it up again on Wednesday, erasing my previous settings (and my A record). papascott.de then resolved to their <a href="http://62.146.28.82/">redirect server</a>. I was able to correct the A record immediately when I saw the error, but their DNS has a TTL of 24 hours, meaning that everyone who had received the bad address wouldn't get the correct address for 24 hours. In the meantime I set up a series of redirects that send the bad address to the temporary domain.</p>
<p>All of this would have been catastrophic if I would actually post anything of value here. As it was, the damage was minimal. And I could have avoided all this by using a <a href="http://www.easydns.com/">real DNS hoster</a>, even though they cost extra.</p>
