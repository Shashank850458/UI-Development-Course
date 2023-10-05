
console.log("Switch Case");

let pageurl="enquiry.html";

switch (pageurl)
{
   case "home.html":
      console.log("Display home.html");
      break;

   case "login.html":
      console.log("Display login.html");
      break;

   case "contact.html":
   case "enquiry.html":
       console.log("Display contact.html");
       break;

   default:
       console.log("Display 404.html"); 
}