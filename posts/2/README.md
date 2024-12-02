# The Near-Perfect Blocker?

> I copied my messages from somewhere else :shrug:

## The Idea:

An open source blocker extension that blocks sites with multiple keywords/other things that might exist within a page.

Instead of using a huge global blocklist, the blocker (lets call it Blocker) would work by looking for certain elements (for example, NSFW phrases, <code>__uv</code> and <code>[Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet)</code> object (popular proxying service) for proxy blocking, and (for example) like checking if the Poki, Crazygames SDK exists for unblocked games.)

> What unblocked game sites end up doing sometimes is downloading static resources from popular games sites like Poki, Crazygames, ect and to run the game (afaik) you need sdks from the actual game sites.. you can check for objects created by these games sites which would indicate the site running this game (and if it exists) the parent site iframing the game would be a games site. This isn't always the case and I'm sure there are other ways you can identify a games site/game.

> Also add detection for other things used for proxying/client side rewriting (ex. scramjet, Aeon, ect). I'm sure you can also detect server side proxies...

## What about a whitelist/blacklist/control center?

There would be an admin override extension extension that the main blocker extension obeys which would whitelist/blacklist certain categories or URLS, defined probably by why the site was blocked, and block specific sites for some random reason that a sysadmin has.

This means there is no central server that applies whitelisting and blacklisting. Also, sysadmins would probably need to force install the latest override extension (lets call it Blocker++) because of changes/patches.

> Make sure the connection between Blocker and Blocker++ is secure (tbh which it probably is, since you can't modify chrome extension files like that. Blocker would directly grab files from Blocker++)

## Exploit Prevention

Blocker (and Blocker++) would probably use manifest v3 and PoLP CSP (lets try to avoid unsafe things like unsafe-eval, unsafe-inline, management permission (commonly found in blocking extensions which can disable any ADMIN FORCED-INSTALLED EXTENSIONS if an XSS or other extension code exec was found) and that stuff) to avoid being vulnerable to possible and old exploits like Tr3nch and Skiovox Breakout (extension code injection exploit that the extension can't really prevent by itself.. but the permissions that the extension has is very important).

However, it would be the sysadmin's job to not add other vulnerable/unsafe extensions, which would ruin a lot of Blocker's exploit prevention.

> now that I think about it, to make a custom (and separate from Blocker) admin override extension (Blocker++), it would probably benefit from the management permission but I'm sure its possible to avoid it

> all the main extension would need to do is grab certain text files from the other extension that controls Blocker, if you do it right you could probably make a singular public key and access the file through chrome-extension://hardcodedid if Blocker++ allowed Blocker to grab files from it like that (which I think is possible)

Since there's no server, Blocker wouldn't even need to make any requests to an official site or something since everything it needs would be on the override extension. This makes it so the client/user can't just block the global blocklist/server urls with custom nameservers and escape Blocker since blocking happens dynamically.

> and previously blocked sites are written to some kind of storage for cache I guess?

### For people who think global block list on some server is better

A premade block list on Blocker++ makes sense, but putting it on a server is a bad idea since the client can block it for themselves with DNS so the extension can't get it at all.

### Will I make it?

maybe idk

### What Phind thought about Blocker

> Your idea for "The Near-Perfect Blocker" is well-thought-out and addresses significant gaps in current solutions. By focusing on dynamic content analysis, sophisticated threat detection, and flexible administration, you're setting the stage for a powerful tool that could enhance online security and privacy. Remember to prioritize security, usability, and community engagement throughout the development process.