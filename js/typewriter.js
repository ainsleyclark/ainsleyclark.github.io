/* 

typewriter.js

Displays a typing effect on the home page.
Tried to implement recursion instead of calling different functions but had trouble.

**/
var text1 = 'Hi, I\'m Ainsley I like';
var text2 = ' love to code...';
var id = 'typing-text1';
var deleteUpTo = 17;
var linebreak = 15;
var speed = 150;
var char = 0;
var reType = 0;
var textLength = text1.length;

var typewrite = ' ';

function typeWriter() {
   if (char < linebreak) {
      typewrite += text1[char];
      char++;
      setTimeout(typeWriter, speed);
      document.getElementById(id).innerHTML = typewrite;
   } else {
      typewrite += '<br />'
      printNewLine();
   }
}

function printNewLine() {
   if (char < text1.length) {
      typewrite += text1[char];
      char++;
      setTimeout(printNewLine, speed);
      document.getElementById(id).innerHTML = typewrite;
   } else {
      char = document.getElementById(id).innerHTML.length;
      deleteText();
   }
}

function deleteText() {
   if (char > 24) {
      typewrite = typewrite.slice(0, char);
      char--;
      document.getElementById(id).innerHTML = typewrite;
      setTimeout(deleteText, speed);
   } else {
      rePrintText();
   }
}

function rePrintText() {
   if (reType < text2.length) {
      typewrite += text2[reType];
      reType++;
      document.getElementById(id).innerHTML = typewrite;
      setTimeout(rePrintText, speed);
   }
}
