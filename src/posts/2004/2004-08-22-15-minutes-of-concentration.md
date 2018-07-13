---
layout: post
title: 15 Minutes of Concentration
date: 2004-08-22 17:08:46.000000000 +02:00
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
<p>Whenever I try to get any work done at home while watching Christopher, I have to think of an <a href="http://www.joelonsoftware.com/global/English/Articles/WheredoThesePeopleGetThei.html" title="Joel on Software - Where do These People Get Their (Unoriginal) Ideas?">article by Joel Sponsky</a> where he writes that it takes (at least) 15 minutes for a programmer to start concentrating on solving a problem, and that with every interruption, you have to start that concentration time over from zero. How often does a 4-year-old leave a parent alone for 15 minutes? Yes, my point exactly.</p>
<p>With that in mind, <a href="http://www.papascott.de/archives/2004/08/22/15-minutes-of-concentration/#more-2022">below</a> is the Movable Type 3.x plugin for which I've been trying to write a front-end. It emulates the WordPress function in which you can automatically moderate a comment with several hyperlinks. Save this as <code>MT_DIR/plugins/modhref.pl</code>, and set $maxhref to the maximum number of links you want to allow. </p>
<p>Once I was half-way done, I saw that it would pretty much be a knock-off of Chad Everett's <a href="http://jayseae.cxliv.org/moderate/">Moderate plugin</a>, just using a different critereon for moderation (Moderate checks the age of the posting and the lastest comment for the post, and moderates if either is too old). The criteria could probably be combined into a single plugin to perform simple tests on comments not explicitly banned by <a href="http://www.jayallen.org/projects/mt-blacklist/">MT-Blacklist</a>.<br />
<!--more--></p>
<pre># Modhref: Moderate comments with too many links.
# A Plugin for Movable Type
package MT::Plugin::Modhref;
use vars qw($VERSION);
$VERSION = '0.01';
use strict;
use MT;
use MT::Comment;
use MT::Plugin;
# configuration variables (TODO put into CGI interface)
my $maxhref = 4; # maximum number of links before a comment is moderated
my $reg_ok = 1;  # pre-approve registered commenters?

my $plugin = new MT::Plugin({
  name => 'Modhref',
  description => 'Moderate comments with too many links.',
  doc_link => 'http://www.papascott.de/'
});
MT->add_plugin($plugin);
MT::Comment->add_callback('pre_save', 10, $plugin, &modhref);
sub modhref {
  my ($eh, $obj) = @_;
  my $count = 0;
  unless ($obj->id) { # only check new comments
    # don't check registered comments unless we say so
    return if ($obj->commenter_id && $reg_ok); 
    my $text = $obj->text;
    $count++ while $text =~ /&lt;a [^>]*href[^>]*>/gi;  # count links
    $obj->visible(0) if ($count > $maxhref); # moderate if we find to many
  }
}
1;</pre>
