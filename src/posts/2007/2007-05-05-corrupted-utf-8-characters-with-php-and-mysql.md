---
layout: post
title: Corrupted UTF-8 characters with PHP and MySQL
date: 2007-05-05 06:58:19.000000000 +02:00
categories:
- papatech
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _social_aggregation_next_run: '1401626792'
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
<p>Someone recently asked me about corrupted characters in a PHP-MySQL project. They had recent stable versions of everything, MySQL 5.0 and PHP 5.1, using UTF-8 for everything, and they were getting corrupted accented characters saved in the database, junk with 'Ã's was coming out. They were asking me if there were perhaps some secret PHP setting they were missing to make things right. Not that I knew of.</p>
<p>I would have thought that in this day and age using UTF-8 with PHP and MySQL would just work. To try this out for myself, I downloaded some simple tutorial code, set up databases and HTML with UTF-8, and started creating records with names like Scött Hänsön and Mäcky Möüße. And sure enough, I got junk.</p>
<p>PHP and MySQL don't just work with UTF-8. In particular, the client connection from PHP to MySQL defaults to latin1. There don't seem to be any PHP settings to change this. On the MySQL side there are 'default-character-set' settings you can put in various sections of the my.cnf, but for me they didn't seem to help.</p>
<p>I found two ways to solve the problem. The first is to issue a <code>mysql_query("SET NAMES 'utf8')</code> immediately after every <code>mysql_connect</code> to manually switch the connection to utf8. That's a huge pain if you have a lot of code (even in my mini 5-file test-case I forgot one instance at first).</p>
<p>The other is to add a <code>init-connect='SET NAMES utf8'</code> setting to the <code>[mysqld]</code> section of my.cnf. <code>init-connect</code> automatically executes SQL commands at the beginning of every client connection. The catch is the commands won't be executed for a user with SUPER privileges, so if you're lazy and using 'root' to connect to your database, it won't work.</p>
<p>By using various combinations of <code>&lt;meta charset="blah"/&gt;</code> in the HTML and <code>SET NAMES</code> for the database connection, you can create interesting errors. The 'Ã' errors seem to occur when correctly sent utf-8 is incorrectly saved over a latin1 connection, then read back out as utf-8. My friend said he was using <code>SET NAMES 'utf8'</code> with all his connects, I'm guessing he forgot it for INSERTs and UPDATEs. That's just a hunch.</p>
<p>I wasn't able to find a clear explanation of this in Google (the closest was in the comments to <a href="http://www.php.net/manual/en/function.mysql-client-encoding.php">mysql&#95;client&#95;encoding()</a> in the PHP documentation), so I thought write this up here. It's clear to me, at least.</p>
