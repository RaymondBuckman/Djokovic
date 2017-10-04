const css = require('./app.scss');
import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
import ReactTooltip from 'react-tooltip'; 

import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro/Intro';
import Titles from './components/titles/Titles';
import Movement from './components/movement/Movement';
import Backhand from './components/backhand/Backhand';
import Return from './components/return/Return';
import Forehand from './components/forehand/Forehand';
import Serve from './components/serve/Serve';
import Grit from './components/grit/Grit';

import hamburger from './img/menu.png';
import djokovicLogo from './img/logo-white.png';

import $ from "jquery";

ReactDOM.render(
    <div className="App" id="app">
        <a href="#top-of-page"><img id="hamburger" src={hamburger} height="40px" width="40px"></img></a>
        <a href="#top-of-page"><img id="djokovic-logo" src={djokovicLogo} height="70px" width="70px"></img></a>
        <Intro />
        <Titles />
        <Movement />
        <Backhand />
        <Return />  
        <Forehand />
        <Serve />
        <Grit />
    </div>,
    document.getElementById('root')
);


$(document).ready(function(){ 
    var controller = new ScrollMagic.Controller();    
    
    var intro1ParallaxTween = TweenMax.to(".Intro-1", 1, {
        backgroundPositionX: "-=60%",
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var intro1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Intro-1", 
        triggerHook: 0,
        duration: "150%"
    })
    .setTween(intro1ParallaxTween)
    .addIndicators()
    .addTo(controller);
    
    var movement1ParallaxTween = TweenMax.from(".Movement-1", 1, {
        backgroundPositionX: "-=50%",        
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var movement1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Movement-1", 
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(movement1ParallaxTween)
    
    .addIndicators({
        name: 'movement',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })
    .addTo(controller);
    
    var backhand1ParallaxTween = TweenMax.from(".Backhand-1", 1, {
        backgroundSize: "+=100px +=66.6666667px",
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var backhand1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Backhand-1", 
        triggerHook: 1,
        duration: "250%"
    })
    .setTween(backhand1ParallaxTween)
    //.addIndicators()
    .addTo(controller);
    
    var return1ParallaxTween = TweenMax.from(".Return-1", 1, {
        backgroundPositionY: "-=50%",        
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var return1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Return-1", 
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(return1ParallaxTween)
    
    .addIndicators({
        name: 'movement',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })
    .addTo(controller);
    
    var forehand1ParallaxTween = TweenMax.from(".Forehand-1", 1, {
        backgroundPositionX: "+=120%",        
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var forehand1ParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Forehand-1", 
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(forehand1ParallaxTween)
    /*
    .addIndicators({
        name: 'movement',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    /*Video fade-in animations*/
    var movementVideoTween = TweenMax.from("#movement-video", 1, {
        position: "900px",
        autoRound:false, 
        ease:Power1.ease0ut
    });

    var movementVideoScene = new ScrollMagic.Scene({
        triggerElement: "#movement-video", 
        triggerHook: 1,
        duration: "80%"
    })
    .setTween(movementVideoTween)
    .addIndicators({
        name: 'movement video',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })
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
        
        {/*
        var tilt1 = document.getElementById("one-container");
        var tilt2 = document.getElementById("belgrade-serbia");
        var tilt3 = document.getElementById("the-origin-of-a-champion");
        var tilt4 = document.getElementById("about-novak");
        var tilt5 = document.getElementById("titles");
        var tilt6 = document.getElementById("ao-titles");
        var tilt7 = document.getElementById("fo-titles");
        var tilt8 = document.getElementById("w-titles");
        var tilt9 = document.getElementById("uso-titles");
        var tilt10 = document.getElementById("other-titles-list");
        var tilt11 = document.getElementById("movement-video");
        var tilt12 = document.getElementById("movement-main-header");
        var tilt13 = document.getElementById("movement-secondary-header");
        var tilt14 = document.getElementById("you-shall-not-pass");
        var tilt15 = document.getElementById("movement-paragraph");
        var tilt16 = document.getElementById("backhand-video");
        var tilt17 = document.getElementById("backhand-main-header");
        var tilt18 = document.getElementById("backhand-secondary-header");
        var tilt19 = document.getElementById("power-accuracy");
        var tilt20 = document.getElementById("backhand-paragraph");
        var tilt21 = document.getElementById("return-video");
        var tilt22 = document.getElementById("return-main-header");
        var tilt23 = document.getElementById("return-secondary-header");
        var tilt24 = document.getElementById("return-to-sender");
        var tilt25 = document.getElementById("return-paragraph");
        var tilt21 = document.getElementById("forehand-video");
        var tilt22 = document.getElementById("forehand-main-header");
        var tilt23 = document.getElementById("forehand-secondary-header");
        var tilt24 = document.getElementById("forehand-to-sender");
        var tilt25 = document.getElementById("forehand-paragraph");
        
        
        
        
        tilt1.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt2.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt3.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt4.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt5.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt6.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt7.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt8.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt9.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt10.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt11.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt12.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt13.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt14.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt15.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt16.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt17.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt18.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt19.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt20.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt21.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt22.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt23.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt24.style.transform = "perspective(1000px) rotateY(" + xval + "deg)";
        tilt25.style.transform = "perspective(1000px) rotateY(" + xval + "deg)"; */}
    }

    document.addEventListener("mousemove", function (event)
    {
        rotate (event)
    }, false);
    
})