/* HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" on these events.

An HTML event can be something the browser does, or something a user does.
Here are some examples of HTML events:
1. An HTML web page has finished loading
2. An HTML input field was changed
3. An HTML button was clicked
*/

/* 
An example of HTML onclick() event:
<html>
   <head>   
      <script type = "text/javascript">
         <!--
            function sayHello() {
               alert("Hello World")
            }
         //-->
      </script>      
   </head>
   
   <body>
      <p>Click the following button and see result</p>      
      <form>
         <input type = "button" onclick = "sayHello()" value = "Say Hello" />
      </form>      
   </body>
</html>

*/

/**
 On submit Events

 <html>
   <head>   
      <script type = "text/javascript">
         <!--
            function validation() {
               all validation goes here
               .........
               return either true or false
            }
         //-->
      </script>      
   </head>
   
   <body>   
      <form method = "POST" action = "t.cgi" onsubmit = "return validate()">
         .......
         <input type = "submit" value = "Submit" />
      </form>      
   </body>
</html>

 */