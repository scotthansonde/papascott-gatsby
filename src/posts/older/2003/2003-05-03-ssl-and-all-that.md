---
layout: post
title: SSL and all that
date: 2003-05-03 18:05:37.000000000 +02:00
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
<p>One cool thing about my new server setup is that his has SSL built in. You can even see an <a title="PapaScott: the SSL edition" href="https://www.papascott.de/">SSL version of PapaScott</a>, but it's pretty meaningless to encrypt a public, static page, and I doubt that my entries will make any more sense encrypted than they do plain. But you can click on the little padlock to see my certificate.</p>
<p>If you follow that link, you'll notice that your browser doesn't trust my certificate. Your browser should be suspicious, since I created the certificate myself, and any Joe Blow can generate a certificate that claims to be from PapaScott. But since I'm using SSL only for myself and not to sell anything, I'm not going to pay money for a real certificate (i.e. of the functions provided by SSL, I need only encryption, not authentication).</p>
<p>SSL can be useful for for a my blog by encrypting connections that require a password, like phpMyAdmin or the mt.cgi in Movable Type. I'm forcing those pages to use SSL so no one can go sniffing my passwords and then pretend to be me. I'm not sure why anyone would want to pretend to be me, but any page worth a password is worth encrypting. It's a shame that most hosters offer SSL only as an expensive add-on.</p>
<p>Generating a certificate with <a href="http://www.openssl.org">OpenSSL</a> is <a title="mod_ssl: F.A.Q." href="http%3A//www.modssl.org/docs/2.8/ssl_faq.html%23ToC27">pretty easy (although tedious)</a>, and creating your own CA has been covered by a <a title="ONLamp.com: Creating Your Own CA Feb. 06 2003" href="http%3A//www.onlamp.com/pub/a/onlamp/2003/02/06/linuxhacks.html">couple</a> of <a title="ONLamp.com: Distributing Your CA to Client Browsers Feb 020 2003" href="http%3A//www.onlamp.com/pub/a/onlamp/2003/02/20/linuxhacks.html">articles</a> at O'Reilly Network. Or you can just read the <a title="oreilly.com -- Online Catalog: Linux Server Hacks" href="http%3A//www.oreilly.com/catalog/linuxsvrhack/index.html%3FCMP%3DIL7015">book</a> (which despite the title, applies mostly to BSD and OS X as well.</p>
