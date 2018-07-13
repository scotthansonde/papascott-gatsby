---
layout: post
title: 'BackupPC: Performance Problems Solved?'
date: 2004-02-02 21:02:05.000000000 +01:00
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
<p>I haven't been keeping up my <a title="Backup PC - PapaScottWiki" href="https://www.papascott.de/tavi/index.php?page=BackupPC">wiki</a> like I promised. The performance problems with <a title="BackupPC: Open Source Backup to disk" href="http://backuppc.sourceforge.net/">BackupPC</a> I mentioned there have been getting progressively worse. A full backup was taking 48 hours, and the incremental would take 16 hours on the slowest machine on a bad day. </p>
<p>My problem seems to have been using an ext3 file system... the millions of inodes are too much for ext3 to handle. I found a post on the <a href="http://sourceforge.net/mailarchive/forum.php?forum=backuppc-users">backuppc-users mailing list at SourceForge</a> (the list is borked at the moment, I can't like to the entry) suggested using reiserfs or xfs instead.</p>
<p>Since I have no experience with xfs, I choose reiser. Over the weekend, I reformatted (taking a PartImage first, 80GB takes 8 hours), and the full backup was done in 15 hours. This evening the incremental was done in 3 hours. If this keeps up even after we have a month of backups on the partition, I'll be very happy. </p>
<p>One thing still bothers me, though. I was able to see that things were slow. The load was high, all of the BackupPC processes were waiting for something. But we couldn't see what. I assumed they were waiting on the network, that the clients were slow (they all had high iowait), but it turned out they were waiting on the file system on the server. Shouldn't I have seen that in the system statistics? Where should I have looked?</p>
