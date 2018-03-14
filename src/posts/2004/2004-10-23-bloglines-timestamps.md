---
layout: post
title: Bloglines Timestamps
date: 2004-10-23 08:39:30.000000000 +02:00
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
<p>I finally my blogoll working with timestamps from <a href="http://www.bloglines.com/services/" title="Bloglines | Bloglines Services">Bloglines</a>, using their API. It would be nice if Bloglines had a lastItem function, where you could get the latest n items for any feed. But you can only get the unread items or all items after a certain date/time. You also cannot be sure that the timestamps are consistent. And you are not assured of getting correct XML.  And the WebServices::BlogLines perl modules barfs if no items are returned. But once you work around all that, it's pretty easy. I'll post perl code once I get it cleaned up.</p>
<p><strong>Update:</strong> It seems the timestamps from Bloglines are buggy, they use a 12-hour close but don't include AM/PM. So all timestamps get interpreted as being before noon GMT.</p>
