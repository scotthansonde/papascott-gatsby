---
layout: post
title: An Axe for the Toolbox
date: 2003-01-28 18:01:43.000000000 +01:00
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
<p>I'm unlucky enough to have to maintain internal web servers on a few outdated Linux boxes, with various versions of Red Hat, Suse, and Mandrake. Trying to keep Apache and PHP current on them is a nightmare, since current RPM packages are not available for old distributions. (MSSQL admins learned over the weekend how important it is to <a href="http://www.theregister.co.uk/content/56/29027.html">keep your servers  current</a>.) And I simply do not like the way Mandrake packages Apache (with separate servers with and without mod_perl).</p>
<p>Building my own RPMs would be silly, since I only have one of each box, so I would still have to compile 5 different Apaches. I have been using <a title="ApacheToolbox" href="http://www.apachetoolbox.com/">ApacheToolbox</a> to try to keep things somewhat organized. But compiling a current PHP on an older box with ApacheToolbox is still a nightmare, since 1) it installs PHP as a static module, so updating PHP means updating everything, and 2) PHP gets confused about which libs (system or ApacheToolbox) to link. Given that my boxes are busy with other tasks, trial and error with PHP/Apache compiles takes literally hours.</p>
<p>Today I happened upon a solution. Compile ApacheToolbox <em>without</em> PHP, then compile PHP as a dynamic module with apxs. ApacheToolbox without PHP compiled and installed cleanly on all boxes, and since PHP only looked for system libraries, it was easy to sort them out. I was able to update all my boxes with various PHP extensions before noon.</p>
<p>Doing this under FreeBSD is much easier, thanks to the <a href="http://www.freshports.org/">ports</a>.</p>
