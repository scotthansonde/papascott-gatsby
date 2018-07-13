---
layout: post
title: How To Cook Quick Links, Bork Bork Bork!
date: 2003-05-10 07:05:17.000000000 +02:00
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
<p>Danger, danger, this post contains PHP code! Also note I've changed my mind a bit and put the quick links below any main posts for the day, rather than above.</p>
<p>Note that the qlinks are saved in a separate blog. I'm not sure if that's the best idea or not... I could have defined a category for quick links. But it's difficult to define different entry formats for categories using MT tags. I find using a separate blog easier, then including the files with quick links in the index of the main blog, so the main blog always has the newest quick links without rebuilding. However, using a separate blog makes finding the links for each day somewhat complicated.  </p>
<p>Each day can be found in /YYYY/MM/DD/qlinks.inc. I could just include this file in the MTDateFooter for each main post... EXCEPT that I would then miss the quick links for the days where I had no main post. So in the MTDateHeader, I need to check all the dates between the current and the previous post.</p>
<p>At the top of the index template (before the MTEntries tag at any rate) we need to define some variables to make it easier to calculate dates:</p>
<pre>&lt;?php 
$offset=0;
define(DAY,60*60*24);
define(NOW,time());
?&gt;</pre>
<p>Since NOW is defined in seconds, we have count back DAYs in seconds as well. The $offset keeps track of which days we've already checked. </p>
<p>The meat of the script is in the MTDateHeader, where we check each day before the date of the current entry for quicklinks, before we output anything for the current day. For each day, we print a header and include the quick links only if a quick links file exists for that day.</p>
<pre>&lt;MTDateHeader>
&lt;?php
  $mt_date='&lt;$MTEntryDate format="%d %B %Y"$>';
  $ql_date=date('d F Y',NOW-$offset*DAY);
  while ($ql_date<>$mt_date) {
    $inc_file=date('./Y/m/d/',NOW-$offset*DAY)
      .'qlinks.inc';
    if (is_readable($inc_file)) {
      echo '&lt;h2>',$ql_date,'&lt;/h2>';
      @include($inc_file);
    }
    $offset++;
    $ql_date=date('d F Y',NOW-$offset*DAY);
  }
?>
&lt;h2><$MTEntryDate format="%d %B %Y"$>&lt;/h2>
&lt;/MTDateHeader></pre>
<p>Then we do all our normal entry stuff. After that, we need an MTDateFooter for the current day's quick links.</p>
<pre>&lt;MTDateFooter>
&lt;?php 
@include('<$MTEntryDate format="./%Y/%m/%d/qlinks.inc"$>');
$offset++;
?&gt;</pre>
<p>The @ before 'include' means there will be no warning message if the file does not exist. </p>
<p>I'm not particularly happy that I have up to 15 separate includes on my index page. A cleaner solution would be to put all the quick links into an RSS file, and loop through that. I'll do that in version 0.02.</p>
<p>Or I may even put the quick links back on the sidebar. Nothing in life is permanent.</p>
