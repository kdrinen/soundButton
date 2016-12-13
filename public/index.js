
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

pixelateCLICK(0, '#kiss','#kissaudio','images/1.jpg', 'images/a.png', 'audio/432.mp3' )
pixelateCLICK(1, '#cry','images/2.jpg', 'images/b.png', 'audio/495.mp3' )
pixelateCLICK(2, '#eat','images/3.jpg', 'images/c.png', 'audio/500.mp3' )
pixelateCLICK(3, '#cross1','images/4.jpg', 'images/d.png', 'audio/555.mp3' )
pixelateCLICK(4, '#cross2','images/5.jpg', 'images/e.png', 'audio/680.mp3' )
pixelateCLICK(5, '#nun','images/6.jpg', 'images/f.png', 'audio/740.mp3' )
pixelateCLICK(6, '#smoke','images/7.jpg', 'images/g.png', 'audio/800.mp3' )
pixelateCLICK(7, '#cross3','images/8.jpg', 'images/h.png', 'audio/1000.mp3' )
pixelateCLICK(8, '#cross4','images/9.jpg', 'images/i.png', 'audio/1100.mp3' )
pixelateCLICK(9, '#cross5','images/10.jpg', 'images/j.png', 'audio/1220.mp3' )
pixelateCLICK(10, '#tape','images/11.jpg', 'images/k.png', 'audio/1365.mp3' )
pixelateCLICK(11, '#stupid','images/12.jpg', 'images/l.png', 'audio/1400.mp3' )
pixelateCLICK(12, '#gma','images/13.jpg', 'images/m.png', 'audio/1588.mp3' )
pixelateCLICK(13, '#seat','images/14.jpg', 'images/n.png', 'audio/1623.mp3' )
pixelateCLICK(14, '#skull','images/15.jpg', 'images/o.png', 'audio/1777.mp3' )
pixelateCLICK(15, '#pathetic','images/16.jpg', 'images/p.png', 'audio/1850.mp3' )
pixelateCLICK(16, '#pee','images/17.jpg', 'images/q.png', 'audio/2200.mp3' )
pixelateCLICK(17, '#puppet','images/18.jpg', 'images/r.png', 'audio/525.mp3' )
pixelateCLICK(18, '#gun','images/19.jpg', 'images/s.png', 'audio/1910.mp3' )
pixelateCLICK(19, '#bitch','images/20.jpg', 'images/t.png', 'audio/2323.mp3' )
pixelateCLICK(20, '#fat','images/21.jpg', 'images/u.png', 'audio/1111.mp3' )
pixelateCLICK(21, '#bomb','images/22.jpg', 'images/v.png', 'audio/989.mp3' )
pixelateCLICK(22, '#feet','images/23.jpg', 'images/w.png', 'audio/632.mp3' )
pixelateCLICK(23, '#urinal','images/24.jpg', 'images/x.png', 'audio/2288.mp3' )
pixelateCLICK(24, '#old','images/25.jpg', 'images/y.png', 'audio/1300.mp3' )

pixelateUPDATE(0, '#kiss','images/1.jpg', 'images/a.png', 'audio/432.mp3' )
pixelateUPDATE(1, '#cry','images/2.jpg', 'images/b.png', 'audio/495.mp3' )
pixelateUPDATE(2, '#eat','images/3.jpg', 'images/c.png', 'audio/500.mp3' )
pixelateUPDATE(3, '#cross1','images/4.jpg', 'images/d.png', 'audio/555.mp3' )
pixelateUPDATE(4, '#cross2','images/5.jpg', 'images/e.png', 'audio/680.mp3' )
pixelateUPDATE(5, '#nun','images/6.jpg', 'images/f.png', 'audio/740.mp3' )
pixelateUPDATE(6, '#smoke','images/7.jpg', 'images/g.png', 'audio/800.mp3' )
pixelateUPDATE(7, '#cross3','images/8.jpg', 'images/h.png', 'audio/1000.mp3' )
pixelateUPDATE(8, '#cross4','images/9.jpg', 'images/i.png', 'audio/1100.mp3' )
pixelateUPDATE(9, '#cross5','images/10.jpg', 'images/j.png', 'audio/1220.mp3' )
pixelateUPDATE(10, '#tape','images/11.jpg', 'images/k.png', 'audio/1365.mp3' )
pixelateUPDATE(11, '#stupid','images/12.jpg', 'images/l.png', 'audio/1400.mp3' )
pixelateUPDATE(12, '#gma','images/13.jpg', 'images/m.png', 'audio/1588.mp3' )
pixelateUPDATE(13, '#seat','images/14.jpg', 'images/n.png', 'audio/1623.mp3' )
pixelateUPDATE(14, '#skull','images/15.jpg', 'images/o.png', 'audio/1777.mp3' )
pixelateUPDATE(15, '#pathetic','images/16.jpg', 'images/p.png', 'audio/1850.mp3' )
pixelateUPDATE(16, '#pee','images/17.jpg', 'images/q.png', 'audio/2200.mp3' )
pixelateUPDATE(17, '#puppet','images/18.jpg', 'images/r.png', 'audio/525.mp3' )
pixelateUPDATE(18, '#gun','images/19.jpg', 'images/s.png', 'audio/1910.mp3' )
pixelateUPDATE(19, '#bitch','images/20.jpg', 'images/t.png', 'audio/2323.mp3' )
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
        }else if( myStatus.status === false){//is status false? If not, stop here
          socket.emit('updateMyStatus', {id:id, status:true})//If it is false, update to true
          $(selector).attr('src', pixelated)//Switch image back to false and show pixelated image

        }
      }
    })


  })
}

function pixelateUPDATE(id, selector, source, pixelated, audioSelector){//Effects what is pushed out to every user...both in real time and on initial page load

    socket.on('UDmyStatus',function(myStatus){
      if(myStatus.id === id){//Look for id of image to determine pixelated vs. unpixelated
        if(myStatus.status === true  ){//If image's status is true...
          $(selector).attr('src', source)//Push unpixelated image to all users
          $(audioSelector).get(0).pause()
        }else if( myStatus.status === false){//If image's status is false...
          $(selector).attr('src', pixelated)//Push pixelated image to all users
          $(audioSelector).get(0).play()
        }
      }
    })
}
});





toneCLICK(0, '#kiss','images/1.jpg', 'audio/432.mp3' )
toneCLICK(1, '#cryaudio','images/2.jpg', 'audio/495.mp3' )
toneCLICK(2, '#eataudio', 'audio/500.mp3' )
toneCLICK(3, '#cross1', 'audio/555.mp3' )
toneCLICK(4, '#cross2','images/e.png', 'audio/680.mp3' )
toneCLICK(5, '#nunaudio','images/f.png', 'audio/740.mp3' )
toneCLICK(6, '#smoke','images/7.jpg', 'images/g.png', 'audio/800.mp3' )
toneCLICK(7, '#cross3','images/8.jpg', 'images/h.png', 'audio/1000.mp3' )
toneCLICK(8, '#cross4','images/9.jpg', 'images/i.png', 'audio/1100.mp3' )
toneCLICK(9, '#cross5','images/10.jpg', 'images/j.png', 'audio/1220.mp3' )
toneCLICK(10, '#tape','images/11.jpg', 'images/k.png', 'audio/1365.mp3' )
toneCLICK(11, '#stupid','images/12.jpg', 'images/l.png', 'audio/1400.mp3' )
toneCLICK(12, '#gma','images/13.jpg', 'images/m.png', 'audio/1588.mp3' )
toneCLICK(13, '#seat','images/14.jpg', 'images/n.png', 'audio/1623.mp3' )
toneCLICK(14, '#skull','images/15.jpg', 'images/o.png', 'audio/1777.mp3' )
toneCLICK(15, '#pathetic','images/16.jpg', 'images/p.png', 'audio/1850.mp3' )
toneCLICK(17, '#puppet','images/18.jpg', 'images/r.png', 'audio/525.mp3' )
toneCLICK(18, '#gun','images/19.jpg', 'images/s.png', 'audio/1910.mp3' )
toneCLICK(19, '#bitch','images/20.jpg', 'images/t.png', 'audio/2323.mp3' )
toneCLICK(20, '#fat','images/21.jpg', 'images/u.png', 'audio/1111.mp3' )
toneCLICK(21, '#bomb','images/22.jpg', 'images/v.png', 'audio/989.mp3' )
toneCLICK(22, '#feet','images/23.jpg', 'images/w.png', 'audio/632.mp3' )
toneCLICK(23, '#urinal','images/24.jpg', 'images/x.png', 'audio/2288.mp3' )
toneCLICK(24, '#old','images/25.jpg', 'images/y.png', 'audio/1300.mp3' )

toneUPDATE(0, '#kiss', 'audio/432.mp3' )
toneUPDATE(1, '#cry', 'audio/495.mp3' )
toneUPDATE(2, '#eat', 'audio/500.mp3' )
toneUPDATE(3, '#cross1audio','images/4.jpg', 'images/d.png', 'audio/555.mp3' )
toneUPDATE(4, '#cross2','images/5.jpg', 'images/e.png', 'audio/680.mp3' )
toneUPDATE(5, '#nun','images/6.jpg', 'images/f.png', 'audio/740.mp3' )
toneUPDATE(6, '#smoke','images/7.jpg', 'images/g.png', 'audio/800.mp3' )
toneUPDATE(7, '#cross3','images/8.jpg', 'images/h.png', 'audio/1000.mp3' )
toneUPDATE(8, '#cross4','images/9.jpg', 'images/i.png', 'audio/1100.mp3' )
toneUPDATE(9, '#cross5','images/10.jpg', 'images/j.png', 'audio/1220.mp3' )
toneUPDATE(10, '#tape','images/11.jpg', 'images/k.png', 'audio/1365.mp3' )
toneUPDATE(11, '#stupid','images/12.jpg', 'images/l.png', 'audio/1400.mp3' )
toneUPDATE(12, '#gma','images/13.jpg', 'images/m.png', 'audio/1588.mp3' )
toneUPDATE(13, '#seat','images/14.jpg', 'images/n.png', 'audio/1623.mp3' )
toneUPDATE(14, '#skull','images/15.jpg', 'images/o.png', 'audio/1777.mp3' )
toneUPDATE(15, '#pathetic','images/16.jpg', 'images/p.png', 'audio/1850.mp3' )
toneUPDATE(16, '#pee','images/17.jpg', 'images/q.png', 'audio/2200.mp3' )
toneUPDATE(17, '#puppet','images/18.jpg', 'images/r.png', 'audio/525.mp3' )
toneUPDATE(18, '#gun','images/19.jpg', 'images/s.png', 'audio/1910.mp3' )
toneUPDATE(19, '#bitch','images/20.jpg', 'images/t.png', 'audio/2323.mp3' )
toneUPDATE(20, '#fat','images/21.jpg', 'images/u.png', 'audio/1111.mp3' )
toneUPDATE(21, '#bomb','images/22.jpg', 'images/v.png', 'audio/989.mp3' )
toneUPDATE(22, '#feet','images/23.jpg', 'images/w.png', 'audio/632.mp3' )
toneUPDATE(23, '#urinal','images/24.jpg', 'images/x.png', 'audio/2288.mp3' )
toneUPDATE(24, '#old','images/25.jpg', 'images/y.png', 'audio/1300.mp3' )


function toneCLICK(id, audioSelector, source, pixelated){

  $(selector).click(function(){ //click ONLY effects click function and not updates for every user
    socket.emit('getPosition',id)//find initial position
    socket.on('GPmyStatus',function(myStatus){
      if(myStatus.id === id){//Look for id of image to determine pixelated vs. unpixelated
        if(myStatus.status === true  ){//is status true? If not, stop here
          socket.emit('updateMyStatus', {id:id, status:false})//If it is true, update to false
          $(audioSelector).get(0).pause()
        }else if( myStatus.status === false){//is status false? If not, stop here
          socket.emit('updateMyStatus', {id:id, status:true})//If it is false, update to true
          $(audioSelector).get(0).play()//Switch image back to false and show pixelated image

        }
      }
    })


  })
}

function toneUPDATE(id, audioSelector, source){//Effects what is pushed out to every user...both in real time and on initial page load

    socket.on('UDmyStatus',function(myStatus){
      if(myStatus.id === id){//Look for id of image to determine pixelated vs. unpixelated
        if(myStatus.status === true  ){//If image's status is true...
          $(audioSelector).get(0).pause()
        }else if( myStatus.status === false){//If image's status is false...
          $(audioSelector).get(0).play()
        }
      }
    })
}
});
