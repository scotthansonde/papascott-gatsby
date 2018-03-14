---
layout: post
title: "The Future Part 2"
date: "2017-02-26 10:03:24 +0100"
image: "rgallery/rdz-win-fb.jpg"
images:
  - image_path: /assets/gallery/rdz-win3.jpg
    title: Kiosks
  - image_path: /assets/gallery/rdz-win1.jpg
    title: Front Counter and McCafé
  - image_path: /assets/gallery/rdz-win2.jpg
    title: McCafé Lounge with 'Broken' Logo
  - image_path: /assets/gallery/rdz-win4.jpg
    title: Front Counter
---
<ul class="photo-gallery">
  {% for image in page.images%}
    <li>
      <a href="{{ image.image_path }}" data-lightbox="1" title="{{ image.title }}">
        <img src="{{ image.image_path }}" alt="{{ image.title }}">
      </a>
    </li>
  {% endfor %}
</ul>

Last fall we converted our restaurant in Dibbersen into a [Restaurant of the Future]({% post_url 2016-11-06-the-future-is-now %}). Now we've remodeled our Hamburg, Winsener Straße restaurant so now we have doubled the future!

The lobby here has a more urban theme that fits our gritty part of Hamburg. I was worried it would be too dark, but the spots of color make it look brighter live than it appears in the photos.

It of course has all the innovations in Dibbersen, plus we now serve "Barista Quality" coffee at the front counter, meaning that the espresso drinks are made with the [portafilter machine](http://www.wmf-espresso.de/index_en.php#coffee-machine-section) in McCafé.

With all this future we need to take time to catch our breaths. Our 3rd drive-thru restaurant on the Autobahn A1 at Rade will join the future in early 2018.
