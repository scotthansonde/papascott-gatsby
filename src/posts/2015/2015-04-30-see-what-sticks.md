---
layout: post
status: publish
published: true
title: See What Sticks
author:
  display_name: PapaScott
  login: root
  email: papascott@gmail.com
  url: http://www.papascott.de/
---
So now that I've [changed]({% post_url /older/2015/2015-04-23-transition %}) my blogging platform, I have something to blog about: my new blogging platform!

From the WordPress eXtended RSS file of the contents of my blog I found I had exported 3273 posts. Jekyll re-renders every post every time a change is made... on the default template it takes 3 minutes, but on the Lanyon template it ran over 20 minutes before I cancelled the build. That's why I started with only a few dozen posts.

I then changed my archive strategy, using yearly and monthly archives similar to what I had used with WordPress instead of the pagination used in Lanyon, and lo and behold the build took only 2.5 minutes. The disadvantage is that GitHub won't run the [jekyll-archives](https://github.com/jekyll/jekyll-archives) plugin for me, so I have to render the site locally and push the rendered HTML to GitHub. I can live with that.

The next question was whether Google (and everyone else) could find the old links on the new site. Jekyll is able to use the same `archives/:year/:month/:day/:title/` permalink stucture I was using before. But were all my links the same as before? Do they all still work? Well, that eXtended RSS file contains all the permalinks that WordPress had generated...

     <link>http://papasc.home/archives/1999/12/05/it-worked/</link>
     <link>http://papasc.home/archives/1999/12/06/week-37/</link>
     <link>http://papasc.home/archives/1999/12/07/ready-and-waiting/</link>
     <link>http://papasc.home/archives/1999/12/09/linux-fever/</link>
     ...

(Yes, that's a fake URL. My hoster timed out producing the eXtended RSS file so I had to use a local install.) I then ran the links through a shell script I found on [Stack Exchange](http://stackoverflow.com/questions/25135347/how-to-check-status-of-urls-from-text-file-using-bash-shell-script):

     #!/bin/bash
     while read -ru 4 LINE; do
         read -r REP < <(exec curl -IsS "$LINE" 2>&1)
         echo "$LINE: $REP"
     done 4< "$1"

And, indeed, all the links work. Whether the content still makes sense is another question, but PapaScott is back online in its entirety!
