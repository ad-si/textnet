# Textnet - The Internet of Text

Textnet is a subnet of the internet
consisting only of human-readable plain text content.


## FAQ

### Why would I want this?

- Fastest page load time
- No annoying ads
- Focus on content
- Consistent look & feel
- Consumable on **every** device
- No insecure code execution
- Fast & easy creation of content


### Can you give me some examples?

- <http://icanhazip.com>
- <https://tools.ietf.org/rfc/rfc20.txt>

Check out the full list at the "Index" section down below.


### How am I supposed to consume this?

- As plain text with any browser
- As plain text on your command line: `curl -L http://textnet.io`
- With a browser extension which can render markdown
  (e.g. <https://github.com/simov/markdown-viewer>,
  or <https://goo.gl/unXkFA> which can even render LaTeX math equations)
  For extensions which only trigger on `.md` URLs you can open the original
  file for this page at <http://textnet.io/readme.md>.
- As a EPUB by converting it with pandoc:
  `pandoc --from markdown --output textnet.epub http://textnet.io`
- As a PDF by converting it with pandoc:
  `pandoc -f markdown -o textnet.pdf --latex-engine=xelatex http://textnet.io`


### How can I publish something?

Either host the file on a static site hoster of your choice.
For example:

- <https://surge.sh/#html>
- <https://netlify.com/#html>
- <https://neocities.org/#html>
- <https://aws.amazon.com/s3/#html> - That's where textnet.io is hosted.

Or get your own (virtual) server on e.g.

- <https://aws.amazon.com/ec2/#html>
- <https://linode.com/#html>
- <https://digitalocean.com/#html>

and use server software like <https://nginx.org/#html> or
<http://apache.org/#html> to deliver the pages.


### What are good programs to create a Textnet site?

The page you're reading was mainly created with apple notes.
This, however, is not considered a good program.
It just shows the convenience of Textnet content creation.

Good programs are macOS' default TextEdit and Window's default Notepad,
but also more sophisticated programs like <https://atom.io/#html>,
<https://code.visualstudio.com/#html>.

There are also several online editors like <http://dillinger.io/#html>
and <https://gist.github.com/#html>


### How should the text be formatted?

Best practice is to write it in markdown,
just like the page you're currently reading.
It is easily readable and has become the de facto standard
for plain text content.
It also means the site can be rendered with a more sophisticated design
if one likes to do so (e.g. with <http://pandoc.org/#html>) .
Check out <http://commonmark.org/#html> for in depth documentation.

Other good formats are <http://yaml.org/#html> for pure data,
<http://asciidoc.org/#html> for more sophisticated tables
and ASCII- / ANSI-art for graphical content. E.g.

```
        _______
       // ||  \\
   ___//__||___\\_____
  /    _          _  (
  |___/ \________/ \_|
______\_/________\_/____
```

<http://json.org/#html> is only considered human readable
for really small files and when pretty printed.
<https://www.w3.org/XML/#html> ist definitely not human readable!

If your text contains links which link to HTML (normal) websites
please make sure that the URL indicates this, either by linking
directly to a HTML file (e.g. <http://example.com/index.html>) or
adding a HTML hash (e.g. <http://example.com/#html>)

Math should be written in LaTeX and to enable rendering for markdown viewers
enclose them in `$` delimiters. For example:

$E = \frac{mc^2}{\sqrt{1 - \frac{v^2}{c^2}}}$

And by the way: It can also include emojis 😁🎉!


### What file extension should be used?

The files (or rather the URLs) should have no extension!
If you want to convey the content type
use the optional http header field "Content-Type" for it.


## Index

This is just a small subset of the Textnet.
If you want your page to be featured,
please submit a link on <https://github.com/adius/textnet>.


### Weather

- <http://wttr.in> or <http://wttr.in/Berlin> - Weather forecast.
- <http://wttr.in/moon> - Current moonphase.


### Tools

- <http://qrenco.de> - Create QR code of a string


### IP Address Services

Your IP address:

- <http://canihazip.com/s>
- <http://ipinfo.io/ip> - JSON response with additional data.
- <http://icanhazip.com>
- <http://curlmyip.net>
- <http://ipecho.net/plain>
- <http://ifcfg.me>

Custom IP address:

- <http://ipinfo.io/8.8.8.8>
- <http://ipinfo.io/8.8.8.8/loc>


### Text Sharing (Pastebin)

- <http://ix.io> -
  E.g. `echo Hello world | curl -F 'f:1=<-' ix.io` returns link
  to uploaded resource: <http://ix.io/fpW>
- <http://sprunge.us>
- <http://ptpb.pw>


### Manuals / Documentation

- <http://cheat.sh> - UNIX / Linux command cheat sheets.
- All RFC documents are accessible in plain text.
  (e.g. the HTTP specification: <https://tools.ietf.org/rfc/rfc2616.txt>)


### Dictionaries & Translators

- <dict://dict.org/d:translatable> - Get word definitions.


### Generators

- <http://whatthecommit.com/index.txt> — Really bad commit messages.


### Registries

- <http://textfiles.com/#html> - Large collection of plain text files.
- <http://tldp.org/HOWTO/text/#html> - Plain text how tos for Linux
  (e.g. How to make coffee 😂: <http://tldp.org/HOWTO/text/Coffee>).


## About

This website was created by [Adrian Sieber](https://adriansieber.com#html),
who got fed up by shitty websites which take forever to load and look awful,
although they contain minimal content (e.g. weather forecast for tomorrow).

This work is also sponsored by <https://feram.io#html>.
A service which automatically finds & fixes bugs in code.
