---
layout: post
date: 2021-11-30T10:25:52.588Z
title: "Use Caddy to map HTTPS to PagePark "
---
<i>This isn't about Drummer per se, but would be a possible path for Drummer itself to run under HTPPS</i>

<a href="https://caddyserver.com/">Caddy</a> is a very easy way to implement HTTPS for your PagePage domains. It is a web server that can do <a href="https://caddyserver.com/docs/automatic-https">automatic HTTPS</a>, automatically provisioning TLS certificates (from <a href="https://letsencrypt.org/">Let's Encrypt</a>) for a domain and keep them renewed. It can even obtain TLS certificates on demand for your PagePark domains, without out having to configure the domains in Caddy. 

## How to

Here is an example of setting up Caddy on an existing PagePark installation on a Digital Ocean server running Ubuntu (assuming you have domains in your domains folder and have <a href="https://github.com/scripting/pagePark#mapping-port-80-to-1339">mapped port 80 to PagePark</a> using iptables as in the instructions).

1. Install the official Caddy package für Ubuntu <a href="https://caddyserver.com/docs/install#debian-ubuntu-raspbian">per their instructions</a>.  This automatically starts and runs Caddy as a systemd service.

1. Open the Caddy configuration file in the nano editor with `sudo nano /etc/caddy/Caddyfile`

1. Replace the entire contents with: 

   ```
   {
     on_demand_tls {
       ask http://localhost:1339/isdomainvalid
       interval 2m
       burst    5
     }
   }
   https:// {
     tls {
       on_demand
     }
     reverse_proxy localhost:1339
   }
   ```

1. Restart the Caddy service with `sudo service caddy restart`

1. Test https for one of your domains in the terminal with curl: e.g. `curl https://www.example.com`. This first time it will take several seconds for Caddy to request and obtain a certificate. It may even fail the first time, but then try again. The content of the index page of your domain should be printed to the terminal. That means it works!

This configuration means that both HTTP (over iptables) and HTTPS (over Caddy) will work for your domains!

## Further cases and questions

### Running Caddy without iptables mapping

If you have not mapped port 80 to PagePark, the configuration above will also listen to port 80 and redirect HTTP requests to HTTPS. 



If you'd rather not redirect port 80, you can add a section for HTTP and disable redirects like this:

   ```
   {
     auto_https disable_redirects
     on_demand_tls {
       ask http://localhost:1339/isdomainvalid
       interval 2m
       burst    5
     }
   }
   http:// {
     reverse_proxy localhost:1339
   }
   https:// {
     tls {
       on_demand
     }
     reverse_proxy localhost:1339
   }
   ```

### Removing iptables mapping so Caddy can handle HTTP

To delete an iptables rule you have to know the rule number. You can list the nat rules with

`sudo iptables -t nat -v -L -n --line-number`

The output will look something like this:

![](https://res.cloudinary.com/papascott/image/upload/v1637840426/TujSanB1nu0Bdelbge96Lr4UlGgFO7jV6D5Jc9VX.jpg)

The number in front of the rule is the rule number. To delete these two rules, we need two commands  

```
sudo iptables -t nat -D PREROUTING 1
sudo iptables -t nat -D OUTPUT 1
```

(changing the 1 at the end if your rule number is different).

### What are the 'ask', 'interval' and 'burst' in the configuration?

They are for security purposes. They limit certificate requests to only domains configured in PagePage, and limits the rate of those requests. Otherwise an attacker can bombard your server with certificate requests for domains you don't even serve. 

### What about default domains?

Domains that are not explicitly in the domains directory will not be served automatic certificates. You can check the <a href="https://caddyserver.com/docs/">Caddy documentation</a> for adding domains explicitly to the Caddy configuration.
