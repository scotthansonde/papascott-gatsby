---
layout: post
title: Hello World as an MT::App CGI
date: 2004-08-12 06:08:11.000000000 +02:00
categories:
- papatech
tags: []
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'yes'
  _social_notify: '1'
  _wpcom_is_markdown: '1'
  _edit_last: '3'
  _social_aggregation_next_run: '1401632115'
author:
  login: shanson
  email: papascott-wp@gmail.com
  display_name: PapaScott
  first_name: Scott
  last_name: Hanson
---
<p>I've been waiting for a consumer version of Movable Type 3 before taking a look at it, having been bitten by a couple of bugs in the developer version and the lack of (the <a href="http://www.sixapart.com/log/2004/07/plug_in_to_mova.shtml">now award-winning</a>) <a href="http://www.jayallen.org/comment_spam/">MT-Blacklist</a>. Both will soon be alleviated in the upcoming <a href="http://www.movabletype.org/news/2004/07/movable_type_31_whats_new.shtml" title="Movable Type Publishing Platform: Movable Type 3.1: What's New">Movable Type 3.1</a>, scheduled for August 31, which means it may or may not be already in beta.</p>
<p>Reason enough to look again at MT3 and the plugin architecture. I had an idea for a plugin, and it took all of one hour to write up. (More on that later.) But then I wanted to be able to use a CGI to set a couple of configuration variables. And there I got stuck.<br />
<!--more--><br />
The <a href="http://www.movabletype.org/docs/plugin-tut.html#interface%20guidelines" title="Writing a plugin">plugin tutorial</a> says that "The best way to (build a human interface for your plugin) is to write a subclass of MT::App" without really explaining how to do that. The <a href="http://www.movabletype.org/docs/mtapi_mt_app.html" title="MT::App">docs for MT::App</a> are a bit sparse on the subject as well. There are a number of mature plugins that build interfaces in this way, but looking at them, I felt like I was looking at the blueprints of the Empire State Building, when at first all I want to build is a hut on the beach.</p>
<p>Finally when I was looking at Chad Everett's <a href="http://jayseae.cxliv.org/movable_type/notifier/" title="MT-Notifier" plugin for movable type>MT-Notifier</a> (<a href="http://www.sixapart.com/log/2004/07/plug_in_to_mova.shtml">also award-winning</a>) did the light bulb turn on inside my head and I saw the light. It took me 4 files, each in a different directory, but I was able to write a Hello World CGI plugin for Movable Type 3.</p>
<p>First we need a <code>MT_DIR/plugins/hello.pl</code>. It doesn't do anything except register the plugin so I get a nice link to my CGI on the MT main page.</p>
<pre>package MT::Plugin::Hello;
use strict;
use MT;
use MT::Plugin;
use vars qw($VERSION);
$VERSION = '0.1';
my $about = {
  name => 'MT-Hello',
  config_link => '../mt-hello.cgi',
  description => 'Say hello to the world in a unique way.',
  doc_link => 'http://www.papascott.de/archives/2004/08/12/hello-world-as-an-mtapp-cgi/'
}; 
MT->add_plugin(new MT::Plugin($about));</pre>
<p>Next comes the CGI itself in <code>MT_DIR/mt-hello.cgi</code>, which does nothing but call my subclass of MT::App. Most plugin CGIs look exactly like this.</p>
<pre>#!/usr/bin/perl -w
use strict;
my($MT_DIR);
BEGIN {
  if ($0 =~ m!(.*[/])!) {
    $MT_DIR = $1;
  } else {
    $MT_DIR = './';
  }
  unshift @INC, $MT_DIR . 'lib';
  unshift @INC, $MT_DIR . 'extlib';
}
eval {
  require shanson::hello;
  my $app = shanson::hello->new (
    Config => $MT_DIR . 'mt.cfg',
    Directory => $MT_DIR
  ) or die shanson::hello->errstr;
  local $SIG{__WARN__} = sub { $app->trace ($_[0]) };
  $app->run;
};
if ($@) {
  print "Content-Type: text/htmlnn";
  print "An error occurred: $@";
}</pre>
<p>Now we get to the meat and potatoes in <code>MT_DIR/extlib/shanson/hello.pm</code>, where I say that all I really want my <code>$app</code> to do is print some text. I require a login only so I get a pretty header on the page. <strong>Update:</strong> I've incorporated <a href="http://www.papascott.de/archives/2004/08/12/hello-world-as-an-mtapp-cgi/#comment-1501">Phil Ringalda's suggestions</a>. The sub uri is so the pretty header links back to the proper mt.cgi instead of mt-hello.</p>
<pre>package shanson::hello;
use strict;
use MT::App::CMS;
use vars qw(@ISA $VERSION);
@ISA = qw(MT::App::CMS);
$VERSION = '0.1';
sub uri {
  $_[0]->path . MT::ConfigMgr->instance->AdminScript;
}
sub init {
  my $app = shift;
  $app->SUPER::init (@_) or return;
  $app->add_methods (hello => &hello);
  $app->{default_mode} = 'hello';
  $app->{requires_login} = 1 ;
  $app->{user_class} = 'MT::Author';
  $app->{is_admin} = 1;
  $app;
}
sub hello {
  my $app = shift;
  my %param = (no_breadcrumbs => 1);
  $app->build_page('hello.tmpl', %param);
}</pre>
<p>Finally, I put a template file in <code>MT_DIR/tmpl/cms/hello.tmpl</code>, so my class knows what it is supposed to print.</p>
<pre>&lt;tmpl_include NAME="header.tmpl"&gt;
Hello, world!
&lt;tmpl_include NAME="footer.tmpl"&gt;</pre>
<p>And no description of a web application is complete without a couple of screenshots:</p>
<p>Main screen:<a href="http://www.papascott.de/wordpress/wp-content/uploads/2004/08/hello_main.gif"><img src="http://www.papascott.de/wordpress/wp-content/uploads/2004/08/hello_mainthumb.gif" alt="Main screen" border="0" /></a></p>
<p>CGI screen:<a href="http://www.papascott.de/wordpress/wp-content/uploads/2004/08/hello_cgi.gif"><img src="http://www.papascott.de/wordpress/wp-content/uploads/2004/08/hello_cgithumb.gif" alt="CGI screen" border="0" /></a></p>
<p>Now I just have to write a CGI that actually does something, like, ummm, what did I want to do again? Oh yes, set a couple of configuration variables for my plugin.</p>
<p><strong>Update 28 Oct 2004:</strong> David Jacobs noticed some missing backslashes, which I'm guessing went missing when I reimported all my blog entries into Movable Type. Sorry about that!</p>
<p><strong>18 Mar 2005</strong> MySQL ate my blackslashes again! Crucial backslashes were missing in <code>$app-&gt;add_methods (hello =&gt; &hello);</code> and <code>$app-&gt;build_page('hello.tmpl', %param);</code>. Thanks to the ProNet mailing list for pointing this out in February and to Nathanial Irons for reminding me that I hadn't yet corrected this page.</p>
