---
layout: post
title: Creating an MT Import File from HTML
date: 2002-12-23 15:12:52.000000000 +01:00
categories:
- blogging
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
<p><a href="http://www.couchblog.de/couchblog/">Nico</a> recently trashed his Movable Type database. He had a backup, but it was old (from October), so he was missing about 200 entries. Knowing that I had trashed my database once or twice, he asked me for advice. </p>
<p>200 entries is a bit too much to copy and paste, so I came up with a little perl script to create a <a href="http://www.movabletype.org/docs/mtimport.html">MT import file</a> from the HTML files of his individual entries. It's customized for Nico's template, but it might be a useful starting point for others stuck in the same situation.<br />
<!--more--><br />
Nico's template was something like this:<br />
&lt;div>&lt;h3>Title&lt;/h3><br />
Post<br />
&lt;a name="more"><br />
More post<br />
&lt;/div></p>
<p>So I was able to look for the title between the h3 tags, the body of the post between the title and the 'more' anchor, the extended entry between the more anchor and the closing div tag, and so on. The category wasn't included, so I had to skip it. You'll need to adjust this logic to fit your template.</p>
<p>The perl is pretty basic. I'm using 'slurp mode' to read in the entire HTML file into a variable, instead of reading the file line by line.  I'm also in the habit of using | to delimit my regex, so they look like m|...| instead of the typical /.../. And when you return a regex in a list context, you get a list of the matches $1, $2, etc. So instead of '$content =~ m|...|;$author=$1;', I can put this one a single line as '($author) =($content =~ m|...|);'.</p>
<p><code>#!/usr/bin/perl<br />
# parse.pl - parse HTML files to import into Movable Type<br />
# usage: parse.pl *html > output.txt<br />
# Note: you _will_ need to adjust the regex and date conversion<br />
while (&lt;>) { # for each file on the command line<br />
# read in entire file to $content, line feeds and all<br />
# using slurp mode<br />
    { local $/; $content = &lt;>;}<br />
# locate the fields we need using regex<br />
# some matches may include newlines<br />
    ($author) =($content =~ m|&lt;div class="posted">s+(.+?)s+/|s);<br />
    ($title) = ($content =~ m|&lt;h3 class="title">(.+)&lt;/h3>|);<br />
    ($text) =  ($content =~ m|&lt;/h3>s+(.+)s+&lt;a name="more">|s);<br />
    ($more) =  ($content =~ m|&lt;a name="more">s+(.+)s+&lt;/div>|s);<br />
    ($date) =  ($content =~ m|title="updated: (.+)" name="updated"|);<br />
# convert the date to MM/DD/YYYY hh:mm:ss<br />
    $date =~ s|([-d])02|${1}2002|;<br />
    $date =~ tr|-,|/|d;<br />
# printout the fields in the proper format<br />
    print "AUTHOR: $authorn";<br />
    print "TITLE: $titlen";<br />
    print "DATE: $date:00n";<br />
    print "-----n";<br />
    print "BODY:n$textn";<br />
    print "-----n";<br />
    print "EXTENDED BODY:n$moren";<br />
    print "</code></p>
