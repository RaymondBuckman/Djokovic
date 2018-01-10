const css = require('./app.scss');
require('./img/favicon.ico');
import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
import ReactTooltip from 'react-tooltip'; 

import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar/Sidebar';
import Intro from './components/intro/Intro';
import Titles from './components/titles/Titles';
import Movement from './components/movement/Movement';
import Backhand from './components/backhand/Backhand';
import Return from './components/return/Return';
import Forehand from './components/forehand/Forehand';
import Serve from './components/serve/Serve';
import Grit from './components/grit/Grit';
import Coach from './components/coach/Coach';
import Gear from './components/gear/Gear';
import End from './components/end/End';

import hamburger from './img/menu.png';
import djokovicLogo from './img/logo-white.png';

import $ from "jquery";

ReactDOM.render(
    <div className="App" id="app">
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <Sidebar />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 offset-3">
                        <h1 id="back-to-content" className="mx-auto">Click to return to content</h1>
                    </div>
                </div>
            </div>
            <img id="hamburger" src={hamburger} height="40px" width="40px" tabIndex="0" alt="opens sidebar navigation"></img>
            <div id="main-content-wrapper">                
                <a href="#top-of-page"><img id="djokovic-logo" src={djokovicLogo} height="70px" width="70px" tabIndex="0" alt="goes to the top of the page"></img></a>
                <Intro />
                <Titles />
                <Movement />
                <Backhand />
                <Return />  
                <Forehand />
                <Serve />
                <Grit />
                <Coach />
                <Gear />
                <End />
            </div>
        </div>
    </div>,
    document.getElementById('root')
);


$(document).ready(function(){
    $("#down-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $(".intro-div-2").offset().top
        }, 1200);
    });
    
     $('#main-content-wrapper').click(function(){
        $('#wrapper').removeClass('menuDisplayed');
        $('#main-content-wrapper *').removeClass('disabled');
        $('#back-to-content').removeClass('visible');
     });

     $('#hamburger').click(function(){
        $('#wrapper').addClass('menuDisplayed');
        $('#main-content-wrapper *').addClass('disabled');
        $('#back-to-content').addClass('visible');
    });
      
    var controller = new ScrollMagic.Controller();
    
    $('.scrollMagicH1').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .92,
            reverse: false
        })
        .setClassToggle(this, 'collapse-header')
        /*
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })
    
    $('.scrollMagicH2').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .99,
            reverse: false
        })
        .setClassToggle(this, 'push-up-and-flip')
        /*
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })
    
    var heightOfIntro1 = $('.intro-div-2').offset().top - $('.intro-div-1').offset().top;
    var heightOfMovement1 = ($('.intro-div-2').offset().top - $('.intro-div-1').offset().top) * 2;
    var heightOfBackhand1 = ($('.backhand-div-2').offset().top - $('.backhand-div-1').offset().top) * 2;
    var heightOfReturn1 = ($('.return-div-2').offset().top - $('.return-div-1').offset().top) * 2;
    var heightOfForehand1 = ( $('.forehand-div-2').offset().top - $('.forehand-div-1').offset().top ) * 2;
    var heightOfServe1 = ( $('.serve-div-2').offset().top - $('.serve-div-1').offset().top ) * 2;
    var heightOfGrit1 = ( $('.grit-div-2').offset().top - $('.grit-div-1').offset().top ) * 2;
    var heightOfCoach1 = ( $('.coach-div-2').offset().top - $('.coach-div-1').offset().top ) * 2;
    
    var intro1ParallaxTween = TweenMax.to(".intro-div-1", 1, {
        backgroundPositionX: "-=65%",
        ease:Power0.ease0ut
    });

    var intro1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".intro-div-1", 
        triggerHook: 0,
        duration: heightOfIntro1
    })
    .setTween(intro1ParallaxTween)
    .addTo(controller);
    
    var movement1ParallaxTween = TweenMax.from(".movement-div-1", 1, {
        backgroundPositionX: "-=50%",        
        ease:Power0.ease0ut
    });

    var movement1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".movement-div-1", 
        triggerHook: 1,
        duration: heightOfMovement1
    })
    .setTween(movement1ParallaxTween)
    .addTo(controller);
    
    var backhand1ParallaxTween = TweenMax.from(".backhand-div-1", 1, {
        backgroundSize: "+=100px +=66.6666667px",
        autoRound:false, 
        ease:Power0.easeIn
    });

    var backhand1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".backhand-div-1", 
        triggerHook: 1,
        duration: heightOfBackhand1
    })
    .setTween(backhand1ParallaxTween)
    .addTo(controller);
    
    var return1ParallaxTween = TweenMax.from(".return-div-1", 1, {
        backgroundPositionY: "-=50%",        
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var return1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".return-div-1", 
        triggerHook: 1,
        duration: heightOfReturn1
    })
    .setTween(return1ParallaxTween)
    .addTo(controller);
    
    var forehand1ParallaxTween = TweenMax.from(".forehand-div-1", 1, {
        backgroundPositionX: "+=120%",        
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var forehand1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".forehand-div-1", 
        triggerHook: 1,
        duration: heightOfForehand1
    })
    .setTween(forehand1ParallaxTween)
    .addTo(controller);
    
    var serve1ParallaxTween = TweenMax.from(".serve-div-1", 1, {
        backgroundPositionY: "-=30%",        
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var serve1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".serve-div-1", 
        triggerHook: 1,
        duration: heightOfServe1
    })
    .setTween(serve1ParallaxTween)
    .addTo(controller);
    
    var grit1ParallaxTween = TweenMax.to(".grit-div-1", 1, {
        backgroundSize: "+=100px +=66.66659px",
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var grit1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".grit-div-1", 
        triggerHook: 1,
        duration: heightOfGrit1
    })
    .setTween(grit1ParallaxTween)
    .addTo(controller);
    
    var coach1ParallaxTween = TweenMax.from(".coach-div-1", 1, {
        backgroundPositionX: "+=130%",        
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var coach1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".coach-div-1", 
        triggerHook: 1,
        duration: heightOfCoach1
    })
    .setTween(coach1ParallaxTween)
    .addTo(controller);
    
    var end1ParallaxTween = TweenMax.from(".end-div-1", 1, {
        backgroundSize: "+=200px +=130.0002px",
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var end1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".end-div-1", 
        triggerHook: 1,
        duration: "250%"
    })
    .setTween(end1ParallaxTween)
    .addTo(controller);
    
    /*Handles content tilting based on mouse position*/
    function rotate (event) 
    {
        var x = event.clientX;
        var wwidth = window.innerWidth;
        var horizmidpoint = wwidth / 2;
        var xpos = x - horizmidpoint;
        var xval = (xpos / horizmidpoint) * 10;
        
        var y = event.clientY;
        var wheight = window.innerHeight;
        var vertmidpoint = wheight / 2;
        var ypos = y - vertmidpoint;
        var yval = (ypos / vertmidpoint) * 10;
        
        var tilt0 = document.getElementById("intro-main-header");
        var tilt1 = document.getElementById("intro-secondary-header");
        var tilt2 = document.getElementById("belgrade-serbia");
        var tilt3 = document.getElementById("the-origin-of-a-champion");
        var tilt4 = document.getElementById("origin-paragraph");
        var tilt5 = document.getElementById("titles");
        var tilt6 = document.getElementById("ao-header");
        var tilt7 = document.getElementById("fo-header");
        var tilt8 = document.getElementById("w-header");
        var tilt9 = document.getElementById("uso-header");
        var tilt10 = document.getElementById("atp-1000-header");
        var tilt11 = document.getElementById("atp-500-header");
        var tilt12 = document.getElementById("atp-250-header");
        var tilt13 = document.getElementById("money-header");
        var tilt14 = document.getElementById("movement-video");
        var tilt15 = document.getElementById("movement-main-header");
        var tilt16 = document.getElementById("movement-secondary-header");
        var tilt17 = document.getElementById("you-shall-not-pass");
        var tilt18 = document.getElementById("movement-paragraph");
        var tilt19 = document.getElementById("backhand-video");
        var tilt20 = document.getElementById("backhand-main-header");
        var tilt21 = document.getElementById("backhand-secondary-header");
        var tilt22 = document.getElementById("power-accuracy");
        var tilt23 = document.getElementById("backhand-paragraph");
        var tilt24 = document.getElementById("return-video");
        var tilt25 = document.getElementById("return-main-header");
        var tilt26 = document.getElementById("return-secondary-header");
        var tilt27 = document.getElementById("return-to-sender");
        var tilt28 = document.getElementById("return-paragraph");
        var tilt29 = document.getElementById("forehand-video");
        var tilt30 = document.getElementById("forehand-main-header");
        var tilt31 = document.getElementById("forehand-secondary-header");
        var tilt32 = document.getElementById("attack-his-what");
        var tilt33 = document.getElementById("forehand-paragraph");
        var tilt34 = document.getElementById("serve-video");
        var tilt35 = document.getElementById("serve-main-header");
        var tilt36 = document.getElementById("serve-secondary-header");
        var tilt37 = document.getElementById("the-straw");
        var tilt38 = document.getElementById("serve-paragraph");
        var tilt39 = document.getElementById("grit-video");
        var tilt40 = document.getElementById("grit-main-header");
        var tilt41 = document.getElementById("grit-secondary-header");
        var tilt42 = document.getElementById("down-but-not-out");
        var tilt43 = document.getElementById("grit-paragraph");
        var tilt44 = document.getElementById("coach-main-header");
        var tilt45 = document.getElementById("coach-secondary-header");
        var tilt46 = document.getElementById("support-network");
        var tilt47 = document.getElementById("coach-paragraph");
        var tilt48 = document.getElementById("gear");
        var tilt49 = document.getElementById("head-header");
        var tilt50 = document.getElementById("uniqlo-header");
        var tilt51 = document.getElementById("adidas-header");
        var tilt52 = document.getElementById("lacoste-header");
        var tilt53 = document.getElementById("peugeot-header");
        var tilt54 = document.getElementById("seiko-header");
        var tilt55 = document.getElementById("jacob-header");
        var tilt56 = document.getElementById("anz-header"); 
        var tilt57 = document.getElementById("end-main-header");
        var tilt58 = document.getElementById("end-secondary-header");
        var tilt59 = document.getElementById("back-to-content");        
        
        tilt0.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt1.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt2.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt3.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt4.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt5.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt6.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt7.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt8.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt9.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt10.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt11.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt12.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt13.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt14.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt15.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt16.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt17.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt18.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt19.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt20.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt21.style.transform = "perspective(1000px) rotateY(" + xval + "deg)"; 
        tilt22.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt23.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt24.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt25.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt26.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt27.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt28.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt29.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt30.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt31.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt32.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt33.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt34.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt35.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt36.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt37.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt38.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt39.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt40.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt41.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt42.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt43.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt44.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt45.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt46.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt47.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt48.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt49.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt50.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt51.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt52.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt53.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt54.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt55.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt56.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt57.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        //tilt58.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt59.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        
        
    }

    document.addEventListener("mousemove", function (event)
    {
        rotate (event)
    }, false);
    
})
