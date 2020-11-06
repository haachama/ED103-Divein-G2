

import $ from 'jquery';
import {TweenMax,TimelineMax} from 'gsap';

var btn = document.getElementsByClassName('courseBttn');
        var bg_black = document.getElementById('pu_black');
        var cart_jump = document.getElementById('cart_jump');
        var bclose = document.getElementById('bclose');

        btn[0].onclick = function notice() {
            bg_black.style.display = "block";
            cart_jump.style.display = "block";
        }
        bclose.onclick = function bclose() {
            bg_black.style.display = "none";
            cart_jump.style.display = "none";
        }

        

$(function(){
    // bubbluBtn
    $('.button--bubble').each(function () {
      var $circlesTopLeft = $(this).parent().find('.circle.top-left');
      var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');
  
      var tl = new TimelineMax();
      var tl2 = new TimelineMax();
  
      var btTl = new TimelineMax({
          paused: true
      });
  
      tl.to($circlesTopLeft, 1.2, {
          x: -25,
          y: -25,
          scaleY: 2,
          ease: SlowMo.ease.config(0.1, 0.7, false)
      });
      tl.to($circlesTopLeft.eq(0), 0.1, {
          scale: 0.2,
          x: '+=6',
          y: '-=2'
      });
      tl.to($circlesTopLeft.eq(1), 0.1, {
          scaleX: 1,
          scaleY: 0.8,
          x: '-=10',
          y: '-=7'
      }, '-=0.1');
      tl.to($circlesTopLeft.eq(2), 0.1, {
          scale: 0.2,
          x: '-=15',
          y: '+=6'
      }, '-=0.1');
      tl.to($circlesTopLeft.eq(0), 1, {
          scale: 0,
          x: '-=5',
          y: '-=15',
          opacity: 0
      });
      tl.to($circlesTopLeft.eq(1), 1, {
          scaleX: 0.4,
          scaleY: 0.4,
          x: '-=10',
          y: '-=10',
          opacity: 0
      }, '-=1');
      tl.to($circlesTopLeft.eq(2), 1, {
          scale: 0,
          x: '-=15',
          y: '+=5',
          opacity: 0
      }, '-=1');
  
      var tlBt1 = new TimelineMax();
      var tlBt2 = new TimelineMax();
  
      tlBt1.set($circlesTopLeft, {
          x: 0,
          y: 0,
          rotation: -45
      });
      tlBt1.add(tl);
  
      tl2.set($circlesBottomRight, {
          x: 0,
          y: 0
      });
      tl2.to($circlesBottomRight, 1.1, {
          x: 30,
          y: 30,
          ease: SlowMo.ease.config(0.1, 0.7, false)
      });
      tl2.to($circlesBottomRight.eq(0), 0.1, {
          scale: 0.2,
          x: '-=6',
          y: '+=3'
      });
      tl2.to($circlesBottomRight.eq(1), 0.1, {
          scale: 0.8,
          x: '+=7',
          y: '+=3'
      }, '-=0.1');
      tl2.to($circlesBottomRight.eq(2), 0.1, {
          scale: 0.2,
          x: '+=15',
          y: '-=6'
      }, '-=0.2');
      tl2.to($circlesBottomRight.eq(0), 1, {
          scale: 0,
          x: '+=5',
          y: '+=15',
          opacity: 0
      });
      tl2.to($circlesBottomRight.eq(1), 1, {
          scale: 0.4,
          x: '+=7',
          y: '+=7',
          opacity: 0
      }, '-=1');
      tl2.to($circlesBottomRight.eq(2), 1, {
          scale: 0,
          x: '+=15',
          y: '-=5',
          opacity: 0
      }, '-=1');
  
      tlBt2.set($circlesBottomRight, {
          x: 0,
          y: 0,
          rotation: 45
      });
      tlBt2.add(tl2);
  
      btTl.add(tlBt1);
      btTl.to($(this).parent().find('.button.effect-button'), 0.8, {
          scaleY: 1.1
      }, 0.1);
      btTl.add(tlBt2, 0.2);
      btTl.to($(this).parent().find('.button.effect-button'), 1.8, {
          scale: 1,
          ease: Elastic.easeOut.config(1.2, 0.4)
      }, 1.2);
  
      btTl.timeScale(2.6);
  
      $(this).on('mouseover', function () {
          btTl.restart();
      });
  });



//   // ripple

//     $('body').ripples({
//         resolution: 1280,
//         dropRadius: 20,
//         perturbance: 0.01,
//     });

//     $('canvas').css({
//         position: "fixed",
//     })
//
    $(".courseInfo02_00").on("click", function () {
        $(this).toggleClass("courseAw01");
    });
});