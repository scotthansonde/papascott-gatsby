---
layout: post
title: Phish Me Not
date: 2004-08-10 06:08:57.000000000 +02:00
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
<p>Seeing Alwin report <a href="http://ahawkins.org/index.php?p=1012" title="code: theWebSocket; ? Another wave of malware in the pipe">a plump phishing attempt</a> to obtain online banking passwords got me wondering. Why haven't I heard of anyone phishing for German banking passwords? There are, after all, a few million online banking customers in Germany. Probably because a password alone wouldn't get you very far. Ever since the days of 300 baud and Bildschirmtext, German banks have required both a PIN (general password) and a TAN (one-time transaction code) to conduct any business. It's inconvenient, and not 100% safe (nothing is), but better than relying on a password alone.</p>
<p>The modern version of the TAN is the mobile TAN. Your register your cell phone number with the bank. When you make a transaction, the screen gives you a number to call within 90 seconds. You call in with your cell phone, the incoming number is recognized, and the transaction is approved. They are no less safe than normal TANs, and easier to use on the road.</p>
<p>I mention the mobile TANs also because they are something my employer developed for the German Postbank. The project manager thought it would be cute to integrate mobile TANs into our bugtracker, the open source <a href="http://www.mantisbt.org">Mantis</a> (want a patch? get an mTAN!), so the past few days I've been playing with a web service client under PHP. Cute, as I said, but not particularly useful.</p>
