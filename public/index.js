
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

pixelateCLICK(0, '#kiss','images/1.jpg', 'images/a.png' )
pixelateCLICK(1, '#cry','images/2.jpg', 'images/b.png' )
pixelateCLICK(2, '#eat','images/3.jpg', 'images/c.png' )
pixelateCLICK(3, '#cross1','images/4.jpg', 'images/d.png' )
pixelateCLICK(4, '#cross2','images/5.jpg', 'images/e.png' )
pixelateCLICK(5, '#nun','images/6.jpg', 'images/f.jpg' )
pixelateCLICK(6, '#smoke','images/7.jpg', 'images/g.jpg' )
pixelateCLICK(7, '#cross3','images/8.jpg', 'images/h.jpg' )
pixelateCLICK(8, '#cross4','images/9.jpg', 'images/i.jpg' )
pixelateCLICK(9, '#cross5','images/10.jpg', 'images/j.jpg' )
pixelateCLICK(10, '#tape','images/11.jpg', 'images/k.jpg' )
pixelateCLICK(11, '#stupid','images/12.jpg', 'images/l.jpg' )
pixelateCLICK(12, '#gma','images/13.jpg', 'images/m.jpg' )
pixelateCLICK(13, '#seat','images/14.jpg', 'images/n.jpg' )
pixelateCLICK(14, '#skull','images/15.jpg', 'images/o.jpg' )
pixelateCLICK(15, '#pathetic','images/16.jpg', 'images/p.jpg' )
pixelateCLICK(16, '#pee','images/17.jpg', 'images/q.jpg' )
pixelateCLICK(17, '#puppet','images/18.jpg', 'images/r.jpg' )
pixelateCLICK(18, '#gun','images/19.jpg', 'images/s.jpg' )
pixelateCLICK(19, '#bitch','images/20.jpg', 'images/t.jpg' )
pixelateCLICK(20, '#fat','images/21.jpg', 'images/u.jpg' )
pixelateCLICK(21, '#bomb','images/22.jpg', 'images/v.jpg' )
pixelateCLICK(22, '#feet','images/23.jpg', 'images/w.jpg' )
pixelateCLICK(23, '#urinal','images/24.jpg', 'images/x.jpg' )
pixelateCLICK(24, '#old','images/25.jpg', 'images/y.jpg' )

pixelateUPDATE(0, '#kiss','images/1.jpg', 'images/a.png' )
pixelateUPDATE(1, '#cry','images/2.jpg', 'images/b.png' )
pixelateUPDATE(2, '#eat','images/3.jpg', 'images/c.png' )
pixelateUPDATE(3, '#cross1','images/4.jpg', 'images/d.png' )
pixelateUPDATE(4, '#cross2','images/5.jpg', 'images/e.png' )
pixelateUPDATE(5, '#nun','images/6.jpg', 'images/f.jpg' )
pixelateUPDATE(6, '#smoke','images/7.jpg', 'images/g.jpg' )
pixelateUPDATE(7, '#cross3','images/8.jpg', 'images/h.jpg' )
pixelateUPDATE(8, '#cross4','images/9.jpg', 'images/i.jpg' )
pixelateUPDATE(9, '#cross5','images/10.jpg', 'images/j.jpg' )
pixelateUPDATE(10, '#tape','images/11.jpg', 'images/k.jpg' )
pixelateUPDATE(11, '#stupid','images/12.jpg', 'images/l.jpg' )
pixelateUPDATE(12, '#gma','images/13.jpg', 'images/m.jpg' )
pixelateUPDATE(13, '#seat','images/14.jpg', 'images/n.jpg' )
pixelateUPDATE(14, '#skull','images/15.jpg', 'images/o.jpg' )
pixelateUPDATE(15, '#pathetic','images/16.jpg', 'images/p.jpg' )
pixelateUPDATE(16, '#pee','images/17.jpg', 'images/q.jpg' )
pixelateUPDATE(17, '#puppet','images/18.jpg', 'images/r.jpg' )
pixelateUPDATE(18, '#gun','images/19.jpg', 'images/s.jpg' )
pixelateUPDATE(19, '#bitch','images/20.jpg', 'images/t.jpg' )
pixelateUPDATE(20, '#fat','images/21.jpg', 'images/u.jpg' )
pixelateUPDATE(21, '#bomb','images/22.jpg', 'images/v.jpg' )
pixelateUPDATE(22, '#feet','images/23.jpg', 'images/w.jpg' )
pixelateUPDATE(23, '#urinal','images/24.jpg', 'images/x.jpg' )
pixelateUPDATE(24, '#old','images/25.jpg', 'images/y.jpg' )


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
