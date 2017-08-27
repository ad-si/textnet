# Textnet - The Internet of Text

Textnet is a subnetwork of the Internet where only plaintext files are allowed.


## FAQ

Why would I want this?
: - Fastest page load time
  - No annoying ads
  - Focus on content
  - Consistent look & feel
  - Consumable on **every** device
  - Fast & easy creation of content
    (no programming skills necessary)

Can you give me more examples?
: - http://wttr.in
  - http://moon.in

How should the text be formatted?
: Best practice is to write it in markdown,
just like the page you're currently reading is.
It is easily readable
and has become the de facto standard for plaintext content.
It also means the site can be rendered with a more sophisticated design
(e.g. with [pandoc](http://pandoc.org)) if one likes to do so.

Other good formats are [yaml](yaml.org) for pure data,
[asciidoc](asciidoc.org) for more sophisticated tables,
or asciiart for graphical content.

What file extension should be used?
: The files should have no extension!
If you want to convey the content type
use the optional http header field "mime-type" for it.

How am I supposed to consume this?
: - With any browser
  - On your command line with curl: `curl textnet.org`
  - With a browser extension which can beautify markdown (e.g. http://TODO.com)

How can I publish something?
: Either host the file on a static site hoster of your choice
(e.g. surge.sh, netlify.com, ...) or there are even several providers
which allow easy creation of online content like neocitiec and TODO

What are good programs to create a Textnet site?
: The page you're reading was created with apple notes
(however, this is not considered a good program.
It just shows the convenience of Textnet content creation).
Good programs are macOS' default TextEdit and Microsoft's default notepad,
but also more sophisticated programs like atom.io, vscode and online TODO.


## Index

This is a small subset of the Textnet.
If you want your page to be featured,
please submit a link on https://github.com/adius/textnet.

- TODO
- TODO


## About

This website was created by [Adrian Sieber](adriansieber.com/TODO),
who got fed up by shitty websites which take forever to load and look awful
although they contain minimal useable content
(e.g. the weather forecast for tomorrow).

This work is also sponsored by [feram.io](https://feram.io).
A service which automatically finds & fixes bugs in code.
