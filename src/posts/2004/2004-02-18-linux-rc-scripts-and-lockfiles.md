---
layout: post
title: Linux rc scripts and lockfiles
date: 2004-02-18 20:02:30.000000000 +01:00
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
<p>When I powered down one of our Notes servers running Linux last month to replace a bad drive in the RAID, I noticed that Notes was not powered down cleanly, even though we the stop script correctly set up under /etc/rc.d. Our Notes admins have various log rotation and safety commands in their server scripts, so they very much prefer that the server be powered down correctly. I couldn't for the life of me figure out what was wrong. The server started just fine on power up, calling the script on the command line worked just fine, but doing an actual shutdown seem to skip over the stop script completely.<br />
<!--more--><br />
I'm now setting up a new Notes server, and took the chance to figure out what's going wrong before it goes online. After about 20 tries, I finally saw the light. We had copied the start/stop script from a Solaris machine. It simply called "server start", "sever stop", or "server kill". Linux (at least Mandrake and Red Hat), however, keep lock files for their services under /var/lock/subsys. When /etc/rc.d/rc is called for a change in run level, it does not run the stop script if the lockfile does not exist. Therefore, our stop script for Notes was never called.</p>
<p>We never noticed this before since we don't have that many homemade services, and none of them ever complained when they were killed rather than shut down. And Linux servers don't need to be shut down that often. The problem doesn't seem to be that obvious; doing some Googling, I was unable to find any advice that rc scripts under Linux <em>must</em> use lock files in order to be called correctly.</p>
<p>In our case of Notes, the use of lock files is inconvenient at best. Our Notes server processes run as user 'notes' rather than root, and our Notes admins log in as 'notes' to do server maintainance. However 'notes' is unable to write to the lock directory, so the lock directory may correctly reflect the status of the Notes processes. But for now, we're just happy that our Notes log files no longer get blown away by a system reboot.</p>
