$(document).ready(function() {
	$("nav.navbar ul li").click(function(){
		$("nav.navbar ul li").removeClass("active");
		$(this).addClass("active");
	})

  $(".mob-btn").click(function(){
    $(".shadowbottom ul").toggle();
    $("nav.navbar ul li").removeClass("active");
  })

  // progressbar
  var progressbar = $('#progressbar, #progressbar1'), 
  max = progressbar.attr('max'), 
  time = (300/max)*5, 
  value = progressbar.val(); 

  var loading = function() {
    value += 0.5; 
    addValue = progressbar.val(value); 

    $('.progress-value').html(value + '%'); 

    if (value == max) {
      clearInterval(animate); 
    } 
  }; 

  var animate = setInterval(function() {
    loading(); 
  }, time);

  setTimeout(function(){
    var vall = $('.error .progress-value').text();
    var vall = $('.ok .progress-value').text();
    if(vall === '100%'){
      $('.error .progress-value').text('!');
    }
    if(vall === '100%'){
      $('.ok .progress-value').addClass('tick');
    }
  }, 3300);
});


//multipal owlCarousel Scripts
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
});

$('#calendar-demo').dcalendar(); //creates the calendar



var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;

        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius)
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(cx, cy - outerRadius)
        ctx.closePath();
        ctx.lineWidth=100;
        ctx.strokeStyle='#fff';
        ctx.stroke();
    }
    drawStar(125, 125, 20, 30, 25);