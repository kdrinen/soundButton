
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
          $('#cryaudio').get(1).pause()
          $('#eataudio').get(2).pause()
          $('#cross1audio').get(3).pause()
          $('#nunaudio').get(4).pause()
          $('#smokeaudio').get(5).pause()
          $('#cross3audio').get(6).pause()
          $('#tapeaudio').get(7).pause()
          $('#stupidaudio').get(8).pause()
          $('#cross2audio').get(9).pause()
          $('#gmaaudio').get(10).pause()
          $('#seataudio').get(11).pause()
          $('#skullaudio').get(12).pause()
          $('#cross4audio').get(13).pause()
          $('#patheticaudio').get(14).pause()
          $('#peeaudio').get(15).pause()
          $('#puppetaudio').get(16).pause()
          $('#gunaudio').get(17).pause()
          $('#cross5audio').get(18).pause()
          $('#bitchaudio').get(19).pause()
          $('#fataudio').get(20).pause()
          $('#bombaudio').get(21).pause()
          $('#feetaudio').get(22).pause()
          $('#urinalaudio').get(23).pause()
          $('#oldaudio').get(24).pause()

        }else if( myStatus.status === false){//is status false? If not, stop here
          socket.emit('updateMyStatus', {id:id, status:true})//If it is false, update to true
          $(selector).attr('src', pixelated)//Switch image back to false and show pixelated image
          $('#kissaudio').get(0).play()
          $('#cryaudio').get(1).play()
          $('#eataudio').get(2).play()
          $('#cross1audio').get(3).play()
          $('#nunaudio').get(4).play()
          $('#smokeaudio').get(5).play()
          $('#cross3audio').get(6).play()
          $('#tapeaudio').get(7).play()
          $('#stupidaudio').get(8).play()
          $('#cross2audio').get(9).play()
          $('#gmaaudio').get(10).play()
          $('#seataudio').get(11).play()
          $('#skullaudio').get(12).play()
          $('#cross4audio').get(13).play()
          $('#patheticaudio').get(14).play()
          $('#peeaudio').get(15).play()
          $('#puppetaudio').get(16).play()
          $('#gunaudio').get(17).play()
          $('#cross5audio').get(18).play()
          $('#bitchaudio').get(19).play()
          $('#fataudio').get(20).play()
          $('#bombaudio').get(21).play()
          $('#feetaudio').get(22).play()
          $('#urinalaudio').get(23).play()
          $('#oldaudio').get(24).play()
        }
      }
    })


  })
}


  })
}

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
