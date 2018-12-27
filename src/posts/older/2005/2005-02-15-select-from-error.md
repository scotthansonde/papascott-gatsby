---
layout: post
title: SELECT * FROM error;
date: 2005-02-15 11:29:48.000000000 +01:00
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
<p>I haven't seen this explicitly stated anywhere, but you probably don't want to run <a title="mysqlsnapshot" href="http://jeremy.zawodny.com/mysql/mysqlsnapshot/">mysqlsnapshot</a> on a database that is already an active master, since the script issues a RESET MASTER which will stop replication in its tracks. </p>
<p>Another good hint for mysql is to make sure that the mysql user has write privileges in its data directory. That's such a basic mistake that you don't even think it could go wrong, but it can.</p>
