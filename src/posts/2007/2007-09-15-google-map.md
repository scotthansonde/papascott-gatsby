---
layout: post
title: Google Map
date: 2007-09-15 18:55:11.000000000 +02:00
categories:
- work
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _social_aggregation_next_run: '1401625066'
  _social_notify: '1'
  _wpcom_is_markdown: '1'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
# excerpt: !ruby/object:Hpricot::Doc
  # options: {}
---
<p>We've finally got a couple of current entries on the <a href="http://www.mcdonalds-nordheide.de/">home page</a> for the restaurant, so it looks almost weblog-like, and we finally have <a href="http://www.mcdonalds-nordheide.de/restaurant/">a satellite image</a> from Google Maps. The toughest part was figuring out how to customize the icon without it getting squished (hint: the graphic file has to be square, since it gets reduced to 32x32 pixels).</p>
<p><iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;hl=en&amp;geocode=&amp;q=http:%2F%2Fwww.mcdonalds-nordheide.de%2Fdibbersen.kml&amp;ie=UTF8&amp;t=h&amp;om=1&amp;ll=53.363659,9.873147&amp;spn=0.004411,0.006115&amp;output=embed&amp;s=AARTsJqRZMO0jq3pcJpadIZk0lcRnLZw3Q"></iframe></p>
<p><small><a href="http://maps.google.com/maps?f=q&amp;hl=en&amp;geocode=&amp;q=http:%2F%2Fwww.mcdonalds-nordheide.de%2Fdibbersen.kml&amp;ie=UTF8&amp;t=h&amp;om=1&amp;ll=53.363659,9.873147&amp;spn=0.004411,0.006115&amp;source=embed" style="color:#0000FF;text-align:left">View Larger Map</a></small></p>
<p><strong>Update:</strong> I forgot to say that I'm using the relatively new <a href="http://google-latlong.blogspot.com/2007/08/youtube-style-embeddable-maps_21.html">embedded map feature</a> of Google Maps, where similar to YouTube you can generate some HTML directly in Google Maps without having to mess with the API. To use a custom icon you need a load a <a href="http://code.google.com/apis/kml/documentation/">KML file</a> into Google Maps that references an URL for the icon. It seems easiest to use <a href="http://earth.google.com/">Google Earth</a> to create the KML file than to try to create it from scratch.</p>
