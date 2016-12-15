
//drop down tab
$(function() {
    $('.tab').click(function() {
        $(this).find('div').slideToggle();
    });
});

$(function(){

  // var socket = io.connect('http://150.253.89.109:3100')
    var socket = io.connect()

  socket.on('connect', function(data){
  console.log("connected to the server" + socket.id);
  })


//FadeIn/Out Effects

$(".Title").delay(3500).fadeOut(2500);
$(".content").delay(3500).fadeIn(2500);
$(".tab").delay(3500).fadeIn(2500);

pixelateCLICK(0, '#kiss','images/1.jpg', 'images/a.png')
pixelateCLICK(1, '#cry','images/2.jpg', 'images/b.png')
pixelateCLICK(2, '#eat','images/3.jpg', 'images/c.png')
pixelateCLICK(3, '#cross1','images/4.jpg', 'images/d.png')
pixelateCLICK(4, '#cross2','images/5.jpg', 'images/e.png')
pixelateCLICK(5, '#nun','images/6.jpg', 'images/f.png')
pixelateCLICK(6, '#smoke','images/7.jpg', 'images/g.png')
pixelateCLICK(7, '#cross3','images/8.jpg', 'images/h.png')
pixelateCLICK(8, '#cross4','images/9.jpg', 'images/i.png')
pixelateCLICK(9, '#cross5','images/10.jpg', 'images/j.png')
pixelateCLICK(10, '#tape','images/11.jpg', 'images/k.png')
pixelateCLICK(11, '#stupid','images/12.jpg', 'images/l.png')
pixelateCLICK(12, '#gma','images/13.jpg', 'images/m.png')
pixelateCLICK(13, '#seat','images/14.jpg', 'images/n.png')
pixelateCLICK(14, '#skull','images/15.jpg', 'images/o.png')
pixelateCLICK(15, '#pathetic','images/16.jpg', 'images/p.png')
pixelateCLICK(16, '#pee','images/17.jpg', 'images/q.png')
pixelateCLICK(17, '#puppet','images/18.jpg', 'images/r.png')
pixelateCLICK(18, '#gun','images/19.jpg', 'images/s.png')
pixelateCLICK(19, '#bitch','images/20.jpg', 'images/t.png')
pixelateCLICK(20, '#fat','images/21.jpg', 'images/u.png')
pixelateCLICK(21, '#bomb','images/22.jpg', 'images/v.png')
pixelateCLICK(22, '#feet','images/23.jpg', 'images/w.png')
pixelateCLICK(23, '#urinal','images/24.jpg', 'images/x.png')
pixelateCLICK(24, '#old','images/25.jpg', 'images/y.png')

// audioCLICK(0, '#kissaudio', 'audio/432.mp3')
// audioCLICK(1, '#cryaudio', 'audio/495.mp3')
// audioCLICK(2, '#eataudio', 'audio/500.mp3')
// audioCLICK(3, '#cross1audio','audio/555.mp3')
// audioCLICK(4, '#cross2audio','audio/680.mp3')
// audioCLICK(5, '#nunaudio','audio/740.mp3')
// audioCLICK(6, '#smokeaudio','audio/800.mp3')
// audioCLICK(7, '#cross3audio','audio/1000.mp3')
// audioCLICK(8, '#cross4audio','audio/1100.mp3')
// audioCLICK(9, '#cross5audio','audio/1220.mp3')
// audioCLICK(10, '#tapeaudio','audio/1365.mp3')
// audioCLICK(11, '#stupidaudio','audio/1400.mp3')
// audioCLICK(12, '#gmaaudio','audio/1588.mp3')
// audioCLICK(13, '#seataudio','audio/1623.mp3')
// audioCLICK(14, '#skullaudio','audio/1777.mp3')
// audioCLICK(15, '#patheticaudio','audio/1850.mp3')
// audioCLICK(16, '#peeaudio','audio/2200.mp3')
// audioCLICK(17, '#puppetaudio','audio/525.mp3')
// audioCLICK(18, '#gunaudio','audio/1910.mp3')
// audioCLICK(19, '#bitchaudio','audio/432.mp3')
// audioCLICK(20, '#fataudio','audio/1111.mp3')
// audioCLICK(21, '#bombaudio','audio/989.mp3')
// audioCLICK(22, '#feetaudio','audio/632.mp3')
// audioCLICK(23, '#urinalaudio','audio/2288.mp3')
// audioCLICK(24, '#oldaudio','audio/1300.mp3')

pixelateUPDATE(0, '#kiss','images/1.jpg', 'images/a.png')
pixelateUPDATE(1, '#cry','images/2.jpg', 'images/b.png')
pixelateUPDATE(2, '#eat','images/3.jpg', 'images/c.png')
pixelateUPDATE(3, '#cross1','images/4.jpg', 'images/d.png')
pixelateUPDATE(4, '#cross2','images/5.jpg', 'images/e.png')
pixelateUPDATE(5, '#nun','images/6.jpg', 'images/f.png')
pixelateUPDATE(6, '#smoke','images/7.jpg', 'images/g.png')
pixelateUPDATE(7, '#cross3','images/8.jpg', 'images/h.png')
pixelateUPDATE(8, '#cross4','images/9.jpg', 'images/i.png')
pixelateUPDATE(9, '#cross5','images/10.jpg', 'images/j.png')
pixelateUPDATE(10, '#tape','images/11.jpg', 'images/k.png')
pixelateUPDATE(11, '#stupid','images/12.jpg', 'images/l.png')
pixelateUPDATE(12, '#gma','images/13.jpg', 'images/m.png')
pixelateUPDATE(13, '#seat','images/14.jpg', 'images/n.png')
pixelateUPDATE(14, '#skull','images/15.jpg', 'images/o.png')
pixelateUPDATE(15, '#pathetic','images/16.jpg', 'images/p.png')
pixelateUPDATE(16, '#pee','images/17.jpg', 'images/q.png')
pixelateUPDATE(17, '#puppet','images/18.jpg', 'images/r.png')
pixelateUPDATE(18, '#gun','images/19.jpg', 'images/s.png')
pixelateUPDATE(19, '#bitch','images/20.jpg', 'images/t.png')
pixelateUPDATE(20, '#fat','images/21.jpg', 'images/u.png')
pixelateUPDATE(21, '#bomb','images/22.jpg', 'images/v.png')
pixelateUPDATE(22, '#feet','images/23.jpg', 'images/w.png')
pixelateUPDATE(23, '#urinal','images/24.jpg', 'images/x.png')
pixelateUPDATE(24, '#old','images/25.jpg', 'images/y.png' )


function pixelateCLICK(id, selector, source, pixelated){

  $(selector).click(function(){ //click ONLY effects click function and not updates for every user
    socket.emit('getPosition',id)//find initial position
    socket.on('GPmyStatus',function(myStatus){
      if(myStatus.id === id){//Look for id of image to determine pixelated vs. unpixelated
        if(myStatus.status === true  ){//is status true? If not, stop here
          socket.emit('updateMyStatus', {id:id, status:false})//If it is true, update to false
          $(selector).attr('src', source)//Switch image back to true and show unpixelated image
          $('#kissaudio').get(0).pause()
        }else if( myStatus.status === false){//is status false? If not, stop here
          socket.emit('updateMyStatus', {id:id, status:true})//If it is false, update to true
          $(selector).attr('src', pixelated)//Switch image back to false and show pixelated image
          $('#kissaudio').get(0).play()
        }
      }
    })


  })
}
//
// function audioCLICK(id, selector, source, play){
//
//   $(selector).click(function(){ //click ONLY effects click function and not updates for every user
//     socket.emit('getPosition',id)//find initial position
//     socket.on('GPmyStatus',function(myStatus){
//       if(myStatus.id === id){//Look for id of image to determine pixelated vs. unpixelated
//         if(myStatus.status === true  ){//is status true? If not, stop here
//           socket.emit('updateMyStatus', {id:id, status:false})//If it is true, update to false
//           $(selector).get(0).play()
//           // $('#cryaudio').get(0).play()
//           // $('#eat audio').get(0).play()
//           // $('#cross 1audio').get(0).play()
//           // $('#nunaudio').get(0).play()
//           // $('#smokeaudio').get(0).play()
//           // $('#cross3audio').get(0).play()
//           // $('#tapeaudio').get(0).play()
//           // $('#stupidaudio').get(0).play()
//           // $('#cross2audio').get(0).play()
//           // $('#gmaaudio').get(0).play()
//           // $('#seataudio').get(0).play()
//           // $('#skullaudio').get(0).play()
//           // $('#cross4audio').get(0).play()
//           // $('#patheticaudio').get(0).play()
//           // $('#peeaudio').get(0).play()
//           // $('#puppetaudio').get(0).play()
//           // $('#gunaudio').get(0).play()
//           // $('#cross5audio').get(0).play()
//           // $('#bitchaudio').get(0).play()
//           // $('#fataudio').get(0).play()
//           // $('#bombaudio').get(0).play()
//           // $('#feetaudio').get(0).play()
//           // $('#urinalaudio').get(0).play()
//           // $('#oldaudio').get(0).play()
//
//         }else if( myStatus.status === false){//is status false? If not, stop here
//           socket.emit('updateMyStatus', {id:id, status:true})//If it is false, update to true
//           $(selector).get(0).pause()
//           // $('#cryaudio').get(0).pause()
//           // $('#eat audio').get(0).pause()
//           // $('#cross1audio').get(0).pause()
//           // $('#nunaudio').get(0).pause()
//           // $('#smokeaudio').get(0).pause()
//           // $('#cross3audio').get(0).pause()
//           // $('#tapeaudio').get(0).pause()
//           // $('#stupidaudio').get(0).pause()
//           // $('#cross2audio').get(0).pause()
//           // $('#gmaaudio').get(0).pause()
//           // $('#seataudio').get(0).pause()
//           // $('#skullaudio').get(0).pause()
//           // $('#cross4audio').get(0).pause()
//           // $('#patheticaudio').get(0).pause()
//           // $('#peeaudio').get(0).pause()
//           // $('#puppetaudio').get(0).pause()
//           // $('#gunaudio').get(0).pause()
//           // $('#cross5audio').get(0).pause()
//           // $('#bitchaudio').get(0).pause()
//           // $('#fataudio').get(0).pause()
//           // $('#bombaudio').get(0).pause()
//           // $('#feetaudio').get(0).pause()
//           // $('#urinalaudio').get(0).pause()
//           // $('#oldaudio').get(0).pause()
//         }
//       }
//     })
//
//
//   })
// }




function pixelateUPDATE(id, selector, source, pixelated){//Effects what is pushed out to every user...both in real time and on initial page load

    socket.on('UDmyStatus',function(myStatus){
      if(myStatus.id === id){//Look for id of image to determine pixelated vs. unpixelated
        if(myStatus.status === true  ){//If image's status is true...
          $(selector).attr('src', source)//Push unpixelated image to all users
        }else if( myStatus.status === false){//If image's status is false...
          $(selector).attr('src', pixelated)//Push pixelated image to all users
        }
      }
    })
}
});
