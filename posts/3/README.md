#  Avoid Data Usage when hosting, using Xfinity hotspots

tl;dr: there are xfinity hotspots around the places where it serves wifi, I list certain reasons why you'd want to use it.

> <small>**disclaimer if I end up needing it**: I do *not* encourge illegal use of any of Xfinity's services, whatsoever. This information within this blog post is for educational and informational purposes. I encourage legal usage of this bkig post that obliges Comcast's/Xfinity's Terms of Service regarding the Xfinity public hotspots. I am not responsible for what you do with this post.</small> I doubt I need this tbh

## How

If you ever need to download illegal content (pirated shit) but don't want to use a 3rd party vpn  (bad idea, just use Windscribe or something), want to host services that could eat up data usage, or something else

1. Get an old tablet or somethng, make it use the local xfinity hotspot in your area ([this](https://www.reddit.com/r/Comcast_Xfinity/comments/ccj7z7/how_to_connect_to_the_xfinity_wifi_network_for/) might be useful if you can use the `Xfinity Mobile` hotspot or something with your phone, just do it but with a tablet I guess or use xfinitywifi hotspots)

2. From there, use Tailscale to make the tablet an exit node (practically a private VPN that only devices within the group the tablet is an exit node in can use). You should root your tablet for multiple reasons.

3. Set up Tailscale on whatever device is hosting the service (like say a publicly available proxy) and use the tablet or whatever device is the exit node as the server's exit node

4. To host things, use Cloudflare Tunnels (no port forwarding necessary at all, but I'm pretty sure you need a domain on cloudflare if you want a permanent tunnel) and I'm pretty sure that upnpc stuff wouldn't work with the public hotspots but maybe idk you should try I guess

I don't know much abt this stuff but it was a random idea I had and I wanted it written down (like most other post[s?])

---

You need to be an Xfinity user, obviously. Also you need to be in decent range of a public xfinity hotspot (duh)

It's probably good for avoiding data usage issues when hosting a public proxy for unblocking content, but I do kinda doubt that doing illegal/hosting illegal content on purpose is a good idea since it might be possible to link that back to you because of how your comcast creds are used when connecting to the public hotspot. Just don't be retarded ig

Also this came to me but this would also be extremely useful for hosting a public file upload service cus GODDAMN shit must take up a lot of egress (and ingress idk) but if you've already got a service like that set up and everything (a large/multiple large drives) you probably already have the network stuff figured out

If these users of this hypothetical web proxy search up something illegal, it will be on the hotspot and you probably won't get in trouble unless its some truly diabolical shit 💀💀

> shit speeds: 🗿
> IMO, worth it tho because I would would rather serve slower stuff and completely avoid data things and having searches on my wifi

I would be suprised if this didn't occur to you yet, the idea of using a public hotspot, if you're hosting something public and you will get bad speeds but I mean me personally I'd rather avoid data usage type shit