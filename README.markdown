# Font Stack Tester

With the popularity of using embedded fonts on the web, it is now becoming 
more and more important to use font stacks so that web browsers get the best
typographical experience, whatever their capabilities. 

This tool allows you to test what a web site would look like if the user doesn't
have certain fonts installed. It works by scanning all the 'font-family' CSS elements
using JavaScript. For each one it finds a 'remove' button is dynamically generated. 
Clicking this button will remove it from the page, simulating that font being unavailable.                  

Special thanks to Stefan Müssig (http://github.com/schotest) for contributing the bookmarket code.

Any comments and assistance gratefully received.

## How to Install

Copy the contents of bookmarklet.js into your clipboard. Create a new bookmark on your web browser, and paste the clipboard contents into the "location" section.

Now you can visit any web page, and activate Font Stack Tester on it by choosing your newly-created bookmark.
