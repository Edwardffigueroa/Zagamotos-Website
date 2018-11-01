var toog = false;

    var d = new Date();
    var n = d.getFullYear();

document.getElementById("copy").innerHTML = "© "+ n + " Zagamotos. Todos los derechos reservados";




$(document).ready(function(){
    $('.menuRes').click(function(){
        
//        toog = !toog;
        
        $('.topMenu').toggle("slow");
        
//        $('.topMenu').toggleClass('active');
//     if(toog==true){
//       $('.topMenu').show("slow");
//    }else{
//        $('.topMenu').hide("slow");
//    }
             
    })
    
//    var head = $("header").height();
//    console.log(head);
    
    
});


window.sr = ScrollReveal();
sr.reveal('.itemMenudown');
sr.reveal('.menuicons');
sr.reveal('.cardView');
sr.reveal('.motoList');
sr.reveal('.cardviewAc');
sr.reveal('.banner-repuesto');
sr.reveal('.gridicons');
sr.reveal('.gridicons');
//sr.reveal('footer');


//-------------------------MAPA

var nav = document.getElementById('top');
var altura = nav.offsetTop;
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        nav.classList.add('headerfixed');
    }
    else {
        nav.classList.remove('headerfixed');
    }
})



//$(function($) {
//                $(document).ready(function(){
//                    $('a.fancy').fancybox({
//                        type: 'image',
//                        padding: 0,
//                        scrolling: 'no',
//                        helpers : {
//                            overlay: {
//                                css: {'background-color': '#000'},
//                                opacity: 0.9
//                            },
//                            title : { type : 'inside' }
//                        }
//                    });
//                });
//            }(jQuery));
//
//            $(".nav a").on("click", function(){
//                $(".nav").find(".active").removeClass("active");
//                $(this).parent().addClass("active");
//            });
//
//            function initMap() {
//                var latLng = {lat:3.363212, lng:-76.531981};
//
//                var mapDiv = document.getElementById('map');
//
//                var map = new google.maps.Map(mapDiv, { center:{lat:3.363212, lng: -76.531981}, zoom: 15});
//
//                var image ='images/marcador.png';
//                
//                var marker = new google.maps.Marker({position: latLng, map:map, title:'Restaurante Patio Santo', icon:image});
//
//                var colores = [
//                    {
//                        featureType: "all",
//                        elementType: "all",
//                        stylers: [
//                            { saturation: -70 }
//                        ]
//                    }
//                ];
//
//                var estilo = new google.maps.StyledMapType(colores);
//                map.mapTypes.set('mapa', estilo);
//                map.setMapTypeId('mapa');
//
//            }



