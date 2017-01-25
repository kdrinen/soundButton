
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

buttonCLICK(0, '#kiss','images/1.jpg', 'images/a.png')
buttonCLICK(1, '#cry','images/2.jpg', 'images/b.png')
buttonCLICK(2, '#eat','images/3.jpg', 'images/c.png')
buttonCLICK(3, '#cross1','images/4.jpg', 'images/d.png')
buttonCLICK(4, '#cross2','images/5.jpg', 'images/e.png')
buttonCLICK(5, '#nun','images/6.jpg', 'images/f.png')
buttonCLICK(6, '#smoke','images/7.jpg', 'images/g.png')
buttonCLICK(7, '#cross3','images/8.jpg', 'images/h.png')
buttonCLICK(8, '#cross4','images/9.jpg', 'images/i.png')
buttonCLICK(9, '#cross5','images/10.jpg', 'images/j.png')
buttonCLICK(10, '#tape','images/11.jpg', 'images/k.png')
buttonCLICK(11, '#stupid','images/12.jpg', 'images/l.png')
buttonCLICK(12, '#gma','images/13.jpg', 'images/m.png')
buttonCLICK(13, '#seat','images/14.jpg', 'images/n.png')
buttonCLICK(14, '#skull','images/15.jpg', 'images/o.png')
buttonCLICK(15, '#pathetic','images/16.jpg', 'images/p.png')
buttonCLICK(16, '#pee','images/17.jpg', 'images/q.png')
buttonCLICK(17, '#puppet','images/18.jpg', 'images/r.png')
buttonCLICK(18, '#gun','images/19.jpg', 'images/s.png')
buttonCLICK(19, '#bitch','images/20.jpg', 'images/t.png')
buttonCLICK(20, '#fat','images/21.jpg', 'images/u.png')
buttonCLICK(21, '#bomb','images/22.jpg', 'images/v.png')
buttonCLICK(22, '#feet','images/23.jpg', 'images/w.png')
buttonCLICK(23, '#urinal','images/24.jpg', 'images/x.png')
buttonCLICK(24, '#old','images/25.jpg', 'images/y.png')

buttonUPDATE(0, '#kiss','images/1.jpg', 'images/a.png')
buttonUPDATE(1, '#cry','images/2.jpg', 'images/b.png')
buttonUPDATE(2, '#eat','images/3.jpg', 'images/c.png')
buttonUPDATE(3, '#cross1','images/4.jpg', 'images/d.png')
buttonUPDATE(4, '#cross2','images/5.jpg', 'images/e.png')
buttonUPDATE(5, '#nun','images/6.jpg', 'images/f.png')
buttonUPDATE(6, '#smoke','images/7.jpg', 'images/g.png')
buttonUPDATE(7, '#cross3','images/8.jpg', 'images/h.png')
buttonUPDATE(8, '#cross4','images/9.jpg', 'images/i.png')
buttonUPDATE(9, '#cross5','images/10.jpg', 'images/j.png')
buttonUPDATE(10, '#tape','images/11.jpg', 'images/k.png')
buttonUPDATE(11, '#stupid','images/12.jpg', 'images/l.png')
buttonUPDATE(12, '#gma','images/13.jpg', 'images/m.png')
buttonUPDATE(13, '#seat','images/14.jpg', 'images/n.png')
buttonUPDATE(14, '#skull','images/15.jpg', 'images/o.png')
buttonUPDATE(15, '#pathetic','images/16.jpg', 'images/p.png')
buttonUPDATE(16, '#pee','images/17.jpg', 'images/q.png')
buttonUPDATE(17, '#puppet','images/18.jpg', 'images/r.png')
buttonUPDATE(18, '#gun','images/19.jpg', 'images/s.png')
buttonUPDATE(19, '#bitch','images/20.jpg', 'images/t.png')
buttonUPDATE(20, '#fat','images/21.jpg', 'images/u.png')
buttonUPDATE(21, '#bomb','images/22.jpg', 'images/v.png')
buttonUPDATE(22, '#feet','images/23.jpg', 'images/w.png')
buttonUPDATE(23, '#urinal','images/24.jpg', 'images/x.png')
buttonUPDATE(24, '#old','images/25.jpg', 'images/y.png' )


function buttonCLICK(id, selector, source, paused){

  $(selector).click(function(){ //click ONLY effects click function and not updates for every user
    socket.emit('getPosition',id)//find initial position
    socket.on('GPmyStatus',function(myStatus){
      if(myStatus.id === id){//Look for id of image to determine pause vs. play button
        if(myStatus.status === true  ){//is status true? If not, stop here
          socket.emit('updateMyStatus', {id:id, status:false})//If it is true, update to false
          $(selector).attr('src', source)//Switch image back to true and show unpixelated image
          $('#kissAudio').get(0).play()
        }else if( myStatus.status === false){//is status false? If not, stop here
          socket.emit('updateMyStatus', {id:id, status:true})//If it is false, update to true
          $(selector).attr('src', paused)//Switch image back to false and show paused image
            $('#kissAudio').get(0).pause()
        }
      }
    })


  })
}

function buttonUPDATE(id, selector, source, paused){//Effects what is pushed out to every user...both in real time and on initial page load

    socket.on('UDmyStatus',function(myStatus){
      if(myStatus.id === id){//Look for id of image to determine pixelated vs. unpixelated
        if(myStatus.status === true  ){//If image's status is true...
          $(selector).attr('src', source)//Push unpixelated image to all users
        }else if( myStatus.status === false){//If image's status is false...
          $(selector).attr('src', paused)//Push paused image to all users
        }
      }
    })
  }



});
