---
layout: post
title: Export from WordPress
date: 2004-09-01 04:09:03.000000000 +02:00
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
<p><strong>Update 5 May 2005</strong>: A lot of people seem to be using this script. Since I'm not using WordPress right now, I haven't really been maintaining it. A better alternative might be the <a href="http://epierce.blog.usf.edu/?p=15" title="Eric Pierce: WPexport 0.2">WPexport</a> plugin by Eric Pierce, since, unlike me, he regularly exports WordPress blogs (for students at the University of South Florida).</p>
<p>To <a href="http://www.intertwingly.net/blog/2004/06/15/Archive-Restore">paraphrase Sam Ruby</a>, a weblog software is only as good as its export function. So <a href="http://weblog.burningbird.net/archives/2004/08/26/exit-door/">inspired</a> <a href="http://weblog.burningbird.net/archives/2004/08/22/mt-and-wp-there-and-back-again/">by</a> Shelley, starting from a <a href="http://www.billgrady.com/mt/archives/000064.php">b2 export script by Bill Grady</a>, and to <a href="http://www.sixapart.com/log/2004/08/launched_movabl.shtml">celebrate the release of Movable Type 3.1</a>, I've just made WordPress a hell of a lot better. I humbly present Version 0.1 of an <a href="/examples/export_wp.phps">export script for WordPress</a> for the Movable Type import format.</p>
<p>A few caveats, apart from the usual it-works-for-me, your-mileage-may-vary and backup-your-data-first. </p>
<p>1. It does not deal (yet) with entries with multiple categories. I don't use multiple categories, so I don't need this, but it could be done by adding yet another JOIN statement to the SQL and some fiddling with the output logic.<br />
2. There are a few settings that I've chosen not to read from WordPress, but instead to set explicitly in the script. If you look in the print_post function, you'll see<br />
<code>echo ("STATUS: Publish&#47;n");<br />
echo ("ALLOW COMMENTS: 2&#47;n");<br />
echo ("CONVERT BREAKS: markdown&#47;n");<br />
echo ("ALLOW PINGS: 0&#47;n");</code><br />
    I.e., all posts are published, all comments are closed, all pings are allowed, and all posts are filtered with <a href="http://daringfireball.net/projects/markdown/">markdown</a>. You may want to change these or comment them out to suit your needs.</p>
<p>3. The post slug from WordPress is copied into the key words field. To keep your existing URLs, you'll want to use a solution like <a href="http://diveintomark.org/archives/2003/08/15/slugs">Mark Pilgrim's cruft-free URLs</a>. Note also that Movable Type uses underscores in their URLs; to have MT produce dashes automatically you'll need a plugin of some sort. Stay tuned.</p>
<p>3. When importing, make sure your character set matches whatever you were using with WordPress. Both WordPress and Movable Type now use UTF-8 by default, but if you're using something else, you'll want to adjust MT accordingly.</p>
<p>3. I'm also not yet dealing with extended entries, although that would also be easy enough to do. Everything gets thrown into the main post for now. </p>
<p>4. <strike>If you search the WordPress forums, you'll notice that inquiries about exporting to Movable Type are met with abuse and derision. Be prepared for the same if you actually use this script to export your blog to Movable Type.</strike></p>
<p>I'll be happy to update the script if anyone cares to correct any of these caveats (or anything else that I haven't thought of). For your abuse and derision, you can see the result of the export at <a href="http://mt.papascott.de/">http://mt.papascott.de/</a> (temporary URL, don't go linking to it or anything).</p>
