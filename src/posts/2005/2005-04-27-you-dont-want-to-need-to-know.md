---
layout: post
title: You Don't Want to Need to Know
date: 2005-04-27 22:30:40.000000000 +02:00
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
# excerpt: !ruby/object:Hpricot::Doc
  # options: {}
---
<p>You don't really want to need to know how to <a href="http://dev.mysql.com/tech-resources/articles/recovering-from-crashes.html" title="Recovering from Crashes">recover from mysql crashes</a>, be they the result of natural or man-made disasters. It's good to know that you can, but it's better to avoid the disasters in the first place. You'd rather not have to find the previous snapshot, convert the subsequent bin logs to SQL, edit a 200 MB file to delete the bad SQL statements, pipe those commands to the mysql client to update the snapshot, re-edit the SQL every time it gets stuck on a temporary table, and hope that everything turns out OK.</p>
<p>The chances are good that everything will turn out OK, but you really don't want to have to find out.</p>
