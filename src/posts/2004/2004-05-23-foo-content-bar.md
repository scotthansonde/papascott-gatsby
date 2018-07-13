---
layout: post
title: Foo Content Bar
date: 2004-05-23 05:05:15.000000000 +02:00
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
<p><a title="WordPress" href="http://wordpress.org/">WordPress</a> (which has now released 1.2) with its filtering capability makes it real easy to solve one of my formatting quirks, namely that I want my titles and permalinks inline with the content of each post, i.e. within the p-tags that are automatically inserted around the post. With MT I had to install a regex plugin to force in my strings. With WordPress, I define a simple filter, and by setting a priority, that filter is applied _before_ any tags are added.</p>
<p>It's really as simple as this:<br />
<code>function foo_content_bar($text) {<br />
  return 'foo'.$text.'bar';<br />
}<br />
add_filter('the_content','foo_content_bar',1);</code></p>
<p>(That last parameter to add_filter is the priority.)</p>
