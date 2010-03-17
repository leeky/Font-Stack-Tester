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