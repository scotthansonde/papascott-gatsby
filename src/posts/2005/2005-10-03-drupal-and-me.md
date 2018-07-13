---
layout: post
title: Drupal and me
date: 2005-10-03 21:18:34.000000000 +02:00
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
<p>This weekend I've been working with the <a href="http://drupal.org/" title="drupal open-source content management platform">Drupal CMS platform</a> for the <a href="http://naturheilzentrumdrochtersen.de/" title="Naturheilzentrum Drochtersen - Kirsten Kruse und Roland Petersen">Naturheilzentrum Drochtersen</a> website that I set up for my brother- and sister-in-law. </p>
<p>I looked at a number of packages. I've been away from Movable Type too long to be able to shoehorn it into a traditional CMS. The page feature in <a href="http://www.wordpress.org/">WordPress</a> was not sophisticated enough for the 4 layers of menus and approx. 50 pages. <a href="http://www.joomla.org/">Mambo/Joomla</a> seemed too inflexible for the given layout and menu struction. With Drupal the first hurdle is the documentation; I was unable to find a simple howto to get started.</p>
<p>Once I got into it, I found that Drupal could do 90% of what I needed, which is as good as anyone could hope for. I'm going to have to fiddle with the menu code get the highlighting right, but the functions are <a href="http://drupaldocs.org/api/4.6/group/themeable">'themeable'</a> and there's a well-documented (although somewhat convoluted) <a href="http://drupaldocs.org/" title="API reference | drupaldocs.org">API</a>. </p>
<p>One stumbling block is that the layout for the website and the admin interface are the same, so I had to do a lot a CSS fiddling to import an existing layout without breaking the admin interface. A nice feature is the wide choice of theme engines; simple tags were not enough for me, however with <a href="http://drupal.org/project/phptemplate">PHPTemplate</a> I was able to implement what I needed in PHP.</p>
<p>The <a href="http://naturheilzentrumdrochtersen.de/" title="Naturheilzentrum Drochtersen - Kirsten Kruse und Roland Petersen">live site</a> still contains static pages from City Desk, but once the menus are tamed I'll be able to put the Drupal site online.</p>
