/*

main.js - Mainly to add functionality for the sidebar, 
uses eventlisteners to push the sidebar out from the left hand side of the page.

*/

window.onload=function(){
    //Listen to events for mouse over on the main navigation bar
    var mb = document.getElementById("main-bar");
    mb.addEventListener("mouseover", openSideNav);
    var mk = document.getElementById("main-bar");
    mk.addEventListener("mouseout", closeSideNav);
  
    //Set up style variables
    var navBar = document.getElementById("main-bar").style;
    var navLinksHome = document.getElementById("image-links-home").style; 
    var navLinksStory = document.getElementById("image-links-mystory").style; 
    var navLinksLinks = document.getElementById("image-links-links").style; 
    var navOpenButton = document.getElementById("open-button").style;

    //Opens the main side navigation
    function openSideNav() {
        //Button Animation
        navOpenButton.left ="120px";
        navOpenButton.opacity ="0";

        //Main Bar Width
        navBar.width = "150px";

        //Link Icons Animation
        navLinksHome.opacity = "1";
        navLinksHome.width = "50px";
        navLinksHome.marginTop = "40px";
        navLinksStory.opacity = "1";
        navLinksStory.width = "50px";
        navLinksStory.marginTop = "40px";
        navLinksLinks.opacity = "1";
        navLinksLinks.width = "50px";
        navLinksLinks.marginTop = "40px";

    }
    //Closes the main side navigation
    function closeSideNav() {
        //Button Animation
        navOpenButton.left ="-30px";
        navOpenButton.opacity ="1";

        //Main Bar Width
        navBar.width = "0px";

        //Link Icons Animation
        navLinksHome.width = "0px";
        navLinksHome.opacity = "0";
        navLinksHome.marginTop = "0px";
        navLinksStory.opacity = "0";
        navLinksStory.width = "0px";
        navLinksStory.marginTop = "0px";
        navLinksLinks.opacity = "0";
        navLinksLinks.width = "0px";
        navLinksLinks.marginTop = "0px";
    }
  }