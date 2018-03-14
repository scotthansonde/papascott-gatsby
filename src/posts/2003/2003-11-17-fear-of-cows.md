---
layout: post
title: Fear of Cows
date: 2003-11-17 23:11:52.000000000 +01:00
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
<p>Up til now, my WiFi setup has been pretty simple... no access point, just ad-hoc mode with an Elsa 11 MBit card in my notebook and a matching card in my floppy ISDN router. No authentication, no encryption... the cows in the pasture out back could steal all the bandwidth they waned. But I was never able to MamaMaus' notebook to connect. And she kept taking my notebook to check her Ebay auctions. There may also be a new notebook in my future, so it was time to upgrade to a real access point. </p>
<p>I got the <a title="vowe's choice: Linksys WRT54G" href="http://vowe.net/whatiuse/archives/003672.php">Linksys WRT54G</a>, because it was cheap and supports 54 MBit (which is in Mama's new Centrino notebook). It's designed for DSL, but works fine with ISDN. So Mama can now surf from the couch, I can work on my ThinkPad , and WEP is enabled so the cows can't snoop our packets anymore.</p>
<p>One thing it lacks is static DHCP tables... if DHCP is enabled, there's no way to assigned a fixed IP address to a certain MAC address, which makes it impossible to maintain an internal domain. So now I'm letting the floppy router do DHCP, like it did before. The Linksys is no longer in gateway mode, so it's not really a router anymore, just a switch with ears.</p>
