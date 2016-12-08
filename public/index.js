
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

pixelateCLICK(0, '#kiss','images/1.jpg', 'images/a.png', 'audio/sound.mp3' )
pixelateCLICK(1, '#cry','images/2.jpg', 'images/b.png' )
pixelateCLICK(2, '#eat','images/3.jpg', 'images/c.png' )
pixelateCLICK(3, '#cross1','images/4.jpg', 'images/d.png' )
pixelateCLICK(4, '#cross2','images/5.jpg', 'images/e.png' )
pixelateCLICK(5, '#nun','images/6.jpg', 'images/f.png' )
pixelateCLICK(6, '#smoke','images/7.jpg', 'images/g.png' )
pixelateCLICK(7, '#cross3','images/8.jpg', 'images/h.png' )
pixelateCLICK(8, '#cross4','images/9.jpg', 'images/i.png' )
pixelateCLICK(9, '#cross5','images/10.jpg', 'images/j.png' )
pixelateCLICK(10, '#tape','images/11.jpg', 'images/k.png' )
pixelateCLICK(11, '#stupid','images/12.jpg', 'images/l.png' )
pixelateCLICK(12, '#gma','images/13.jpg', 'images/m.png' )
pixelateCLICK(13, '#seat','images/14.jpg', 'images/n.png' )
pixelateCLICK(14, '#skull','images/15.jpg', 'images/o.png' )
pixelateCLICK(15, '#pathetic','images/16.jpg', 'images/p.png' )
pixelateCLICK(16, '#pee','images/17.jpg', 'images/q.png' )
pixelateCLICK(17, '#puppet','images/18.jpg', 'images/r.png' )
pixelateCLICK(18, '#gun','images/19.jpg', 'images/s.png' )
pixelateCLICK(19, '#bitch','images/20.jpg', 'images/t.png' )
pixelateCLICK(20, '#fat','images/21.jpg', 'images/u.png' )
pixelateCLICK(21, '#bomb','images/22.jpg', 'images/v.png' )
pixelateCLICK(22, '#feet','images/23.jpg', 'images/w.png' )
pixelateCLICK(23, '#urinal','images/24.jpg', 'images/x.png' )
pixelateCLICK(24, '#old','images/25.jpg', 'images/y.png' )

pixelateUPDATE(0, '#kiss','images/1.jpg', 'images/a.png', 'audio/sound.mp3' )
pixelateUPDATE(1, '#cry','images/2.jpg', 'images/b.png' )
pixelateUPDATE(2, '#eat','images/3.jpg', 'images/c.png' )
pixelateUPDATE(3, '#cross1','images/4.jpg', 'images/d.png' )
pixelateUPDATE(4, '#cross2','images/5.jpg', 'images/e.png' )
pixelateUPDATE(5, '#nun','images/6.jpg', 'images/f.png' )
pixelateUPDATE(6, '#smoke','images/7.jpg', 'images/g.png' )
pixelateUPDATE(7, '#cross3','images/8.jpg', 'images/h.png' )
pixelateUPDATE(8, '#cross4','images/9.jpg', 'images/i.png' )
pixelateUPDATE(9, '#cross5','images/10.jpg', 'images/j.png' )
pixelateUPDATE(10, '#tape','images/11.jpg', 'images/k.png' )
pixelateUPDATE(11, '#stupid','images/12.jpg', 'images/l.png' )
pixelateUPDATE(12, '#gma','images/13.jpg', 'images/m.png' )
pixelateUPDATE(13, '#seat','images/14.jpg', 'images/n.png' )
pixelateUPDATE(14, '#skull','images/15.jpg', 'images/o.png' )
pixelateUPDATE(15, '#pathetic','images/16.jpg', 'images/p.png' )
pixelateUPDATE(16, '#pee','images/17.jpg', 'images/q.png' )
pixelateUPDATE(17, '#puppet','images/18.jpg', 'images/r.png' )
pixelateUPDATE(18, '#gun','images/19.jpg', 'images/s.png' )
pixelateUPDATE(19, '#bitch','images/20.jpg', 'images/t.png' )
pixelateUPDATE(20, '#fat','images/21.jpg', 'images/u.png' )
pixelateUPDATE(21, '#bomb','images/22.jpg', 'images/v.png' )
pixelateUPDATE(22, '#feet','images/23.jpg', 'images/w.png' )
pixelateUPDATE(23, '#urinal','images/24.jpg', 'images/x.png' )
pixelateUPDATE(24, '#old','images/25.jpg', 'images/y.png' )

// pixelateAUDIO(0, '#kiss','images/1.jpg', 'images/a.png', 'audio/sound.mp3' )
// pixelateAUDIO(1, '#cry','images/2.jpg', 'images/b.png', 'audio/sound.mp3' )
// pixelateAUDIO(2, '#eat','images/3.jpg', 'images/c.png' )
// pixelateAUDIO(3, '#cross1','images/4.jpg', 'images/d.png' )
// pixelateAUDIO(4, '#cross2','images/5.jpg', 'images/e.png' )
// pixelateAUDIO(5, '#nun','images/6.jpg', 'images/f.png' )
// pixelateAUDIO(6, '#smoke','images/7.jpg', 'images/g.png' )
// pixelateAUDIO(7, '#cross3','images/8.jpg', 'images/h.png' )
// pixelateAUDIO(8, '#cross4','images/9.jpg', 'images/i.png' )
// pixelateAUDIO(9, '#cross5','images/10.jpg', 'images/j.png' )
// pixelateAUDIO(10, '#tape','images/11.jpg', 'images/k.png' )
// pixelateAUDIO(11, '#stupid','images/12.jpg', 'images/l.png' )
// pixelateAUDIO(12, '#gma','images/13.jpg', 'images/m.png' )
// pixelateAUDIO(13, '#seat','images/14.jpg', 'images/n.png' )
// pixelateAUDIO(14, '#skull','images/15.jpg', 'images/o.png' )
// pixelateAUDIO(15, '#pathetic','images/16.jpg', 'images/p.png' )
// pixelateAUDIO(16, '#pee','images/17.jpg', 'images/q.png' )
// pixelateAUDIO(17, '#puppet','images/18.jpg', 'images/r.png' )
// pixelateAUDIO(18, '#gun','images/19.jpg', 'images/s.png' )
// pixelateAUDIO(19, '#bitch','images/20.jpg', 'images/t.png' )
// pixelateAUDIO(20, '#fat','images/21.jpg', 'images/u.png' )
// pixelateAUDIO(21, '#bomb','images/22.jpg', 'images/v.png' )
// pixelateAUDIO(22, '#feet','images/23.jpg', 'images/w.png' )
// pixelateAUDIO(23, '#urinal','images/24.jpg', 'images/x.png' )
// pixelateAUDIO(24, '#old','images/25.jpg', 'images/y.png' )


function pixelateCLICK(id, selector, source, pixelated, audio){

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
            $(selector).attr('src', audio)
        }
      }
    })


  })
}

function pixelateUPDATE(id, selector, source, pixelated, audio){//Effects what is pushed out to every user...both in real time and on initial page load

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




//
// //Operation Pixelate
// var image_tracker = 'false';
// function change(){
//   var image = document.getElementById('kiss');
//   if (image_tracker=='false'){
//     image.src ='images/a.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/1.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change2(){
//   var image = document.getElementById('cry');
//   if (image_tracker=='false'){
//     image.src ='images/b.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/2.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change3(){
//   var image = document.getElementById('eat');
//   if (image_tracker=='false'){
//     image.src ='images/c.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/3.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change4(){
//   var image = document.getElementById('cross1');
//   if (image_tracker=='false'){
//     image.src ='images/d.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/4.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change5(){
//   var image = document.getElementById('cross2');
//   if (image_tracker=='false'){
//     image.src ='images/e.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/5.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change6(){
//   var image = document.getElementById('nun');
//   if (image_tracker=='false'){
//     image.src ='images/f.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/6.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change7(){
//   var image = document.getElementById('smoke');
//   if (image_tracker=='false'){
//     image.src ='images/g.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/7.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change8(){
//   var image = document.getElementById('cross3');
//   if (image_tracker=='false'){
//     image.src ='images/h.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/8.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change9(){
//   var image = document.getElementById('cross4');
//   if (image_tracker=='false'){
//     image.src ='images/i.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/9.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change10(){
//   var image = document.getElementById('cross5');
//   if (image_tracker=='false'){
//     image.src ='images/j.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/10.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change11(){
//   var image = document.getElementById('tape');
//   if (image_tracker=='false'){
//     image.src ='images/k.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/11.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change12(){
//   var image = document.getElementById('stupid');
//   if (image_tracker=='false'){
//     image.src ='images/l.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/12.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change13(){
//   var image = document.getElementById('gma');
//   if (image_tracker=='false'){
//     image.src ='images/m.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/13.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change14(){
//   var image = document.getElementById('seat');
//   if (image_tracker=='false'){
//     image.src ='images/n.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/14.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change15(){
//   var image = document.getElementById('skull');
//   if (image_tracker=='false'){
//     image.src ='images/o.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/15.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change16(){
//   var image = document.getElementById('pathetic');
//   if (image_tracker=='false'){
//     image.src ='images/p.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/16.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change17(){
//   var image = document.getElementById('pee');
//   if (image_tracker=='false'){
//     image.src ='images/q.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/17.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change18(){
//   var image = document.getElementById('puppet');
//   if (image_tracker=='false'){
//     image.src ='images/r.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/18.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change19(){
//   var image = document.getElementById('gun');
//   if (image_tracker=='false'){
//     image.src ='images/s.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/19.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change20(){
//   var image = document.getElementById('bitch');
//   if (image_tracker=='false'){
//     image.src ='images/t.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/20.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change21(){
//   var image = document.getElementById('fat');
//   if (image_tracker=='false'){
//     image.src ='images/u.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/21.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change22(){
//   var image = document.getElementById('bomb');
//   if (image_tracker=='false'){
//     image.src ='images/v.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/22.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change23(){
//   var image = document.getElementById('feet');
//   if (image_tracker=='false'){
//     image.src ='images/w.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/23.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change24(){
//   var image = document.getElementById('urinal');
//   if (image_tracker=='false'){
//     image.src ='images/x.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/24.jpg'
//     image_tracker = 'false';
//   }
// }
//
// var image_tracker = 'false';
// function change25(){
//   var image = document.getElementById('old');
//   if (image_tracker=='false'){
//     image.src ='images/y.jpg'
//     image_tracker = 'true';
//   }else{
//     image.src ='images/25.jpg'
//     image_tracker = 'false';
//   }
// }
