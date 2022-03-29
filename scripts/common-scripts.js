;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        }).blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        }).keyup(function(){
            $(this).parent().addClass("keystart")
        })
        // Ends input common focus and blur for value.

           
        
        $('#phone-nav').click(function(){
            $(".nav-wrap").slideToggle();
        })
        $(".limit").each(function(){
            $(this).find('input').on('keyup', function(){
               var charCount = $(this).val().length
               $(this).next("div.show-length").find('span').html(charCount)
                if( charCount > 0 ){
                    $(this).next("div.show-length").show()
                }
                else{
                    $(this).next("div.show-length").hide()
                }
            })
            $(this).find('textarea').on('keyup', function(){
               var charCount = $(this).val().length
               $(this).next("div.show-length").find('span').html(charCount)
                if( charCount > 0 ){
                    $(this).next("div.show-length").show()
                }
                else{
                    $(this).next("div.show-length").hide()
                }
            })
        })
        /*$(".limit input, .limit textarea").on('keyup',function(){
           var charCount = $(this).val().length
           $(this).next("div.show-length").find('span').html(charCount)
            if( charCount > 0 ){
                $(this).next("div.show-length").show()
            }
            else{
                $(this).next("div.show-length").hide()
            }
        });*/

        if($('.btn-menu').length){
            $('body').addClass("new-header")

        }
        
        /*$('#tabed > li').eq(1).addClass("active")
        $('.tab-info-item').hide()
        $('.tab-info-item').eq(1).show()

        $('#tabed > li').each(function(i){
            $(this).click(function(){

                if( $(this).hasClass("active") ) return false

                else{
                    $("#tabed > li.active").removeClass("active")
                    $(this).addClass('active')
                     $('.tab-info-item').hide()
                    $('.tab-info-item').eq(i).show()

                }
            })
        })*/
        
        
        $('.phone-nav').on('click', function () {
            $('.header').toggleClass('open');
            $('.main-navigation').slideToggle();
            if ($(this).find('dfn').text() === 'MENU') {
                $(this).find('dfn').text('ClOSE');
            } else {
                $(this).find('dfn').text('MENU')
            }
        });       
        
        
        
        if (window.FileReader) {
          var drop;
          addEventHandler(window, 'load', function() {
            //var status = document.getElementById('status');
            drop = document.getElementById('drop');
            var list = document.getElementById('list');

            function cancel(e) {
              if (e.preventDefault) {
                e.preventDefault();
              }
              return false;
            }

            // Tells the browser that we can drop on this target
            addEventHandler(drop, 'dragover', cancel);
            addEventHandler(drop, 'dragenter', cancel);

            addEventHandler(drop, 'drop', function(e) {
                $('body').addClass("seen");
              e = e || window.event; // get window.event if e argument missing (in IE)   
              if (e.preventDefault) {
                e.preventDefault();
              } // stops the browser from redirecting off to the image.

              var dt = e.dataTransfer;
              var files = dt.files;
              for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();

                //attach event handlers here...

                reader.readAsDataURL(file);
                addEventHandler(reader, 'loadend', function(e, file) {
                  document.getElementById('list').innerHTML="";
                  var bin = this.result;                                
                  var img = document.createElement("img");
                  img.file = file;
                  img.src = bin;
                  list.appendChild(img);

                }.bindToEventHandler(file));
              }
              return false;
            });
            Function.prototype.bindToEventHandler = function bindToEventHandler() {
              var handler = this;
              var boundParameters = Array.prototype.slice.call(arguments);
              //create closure
              return function(e) {
                e = e || window.event; // get window.event if e argument missing (in IE)   
                boundParameters.unshift(e);
                handler.apply(this, boundParameters);
              }
            };
          });
        } 
        function addEventHandler(obj, evt, handler) {
          if (obj.addEventListener) {
            // W3C method
            obj.addEventListener(evt, handler, false);
          } else if (obj.attachEvent) {
            // IE method.
            obj.attachEvent('on' + evt, handler);
          } else {
            // Old school method.
            obj['on' + evt] = handler;
          }
        }
        
        
    }) // End ready function.
    
    $(window).on("load",function(){
        $('body').addClass("loaded")
    })
    
})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function (a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function (a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, d, e) {
        if ((b /= e / 2) < 1) return d / 2 * b * b + c;
        return -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, d, e) {
        if ((b /= e / 2) < 1) return d / 2 * b * b * b + c;
        return d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, d, e) {
        if ((b /= e / 2) < 1) return d / 2 * b * b * b * b + c;
        return -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, d, e) {
        if ((b /= e / 2) < 1) return d / 2 * b * b * b * b * b + c;
        return d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function (a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function (a, b, c, d, e) {
        return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function (a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function (a, b, c, d, e) {
        if (b == 0) return c;
        if (b == e) return c + d;
        if ((b /= e / 2) < 1) return d / 2 * Math.pow(2, 10 * (b - 1)) + c;
        return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function (a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function (a, b, c, d, e) {
        if ((b /= e / 2) < 1) return -d / 2 * (Math.sqrt(1 - b * b) - 1) + c;
        return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, d, e) {
        var f = 1.70158;
        var g = 0;
        var h = d;
        if (b == 0) return c;
        if ((b /= e) == 1) return c + d;
        if (!g) g = e * .3;
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
    },
    easeOutElastic: function (a, b, c, d, e) {
        var f = 1.70158;
        var g = 0;
        var h = d;
        if (b == 0) return c;
        if ((b /= e) == 1) return c + d;
        if (!g) g = e * .3;
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
    },
    easeInOutElastic: function (a, b, c, d, e) {
        var f = 1.70158;
        var g = 0;
        var h = d;
        if (b == 0) return c;
        if ((b /= e / 2) == 2) return c + d;
        if (!g) g = e * .3 * 1.5;
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        if (b < 1) return -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c;
        return h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
    },
    easeInBack: function (a, b, c, d, e, f) {
        if (f == undefined) f = 1.70158;
        return d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function (a, b, c, d, e, f) {
        if (f == undefined) f = 1.70158;
        return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function (a, b, c, d, e, f) {
        if (f == undefined) f = 1.70158;
        if ((b /= e / 2) < 1) return d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c;
        return d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function (a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function (a, b, c, d, e) {
        if ((b /= e) < 1 / 2.75) {
            return d * 7.5625 * b * b + c
        } else if (b < 2 / 2.75) {
            return d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c
        } else if (b < 2.5 / 2.75) {
            return d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c
        } else {
            return d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        }
    },
    easeInOutBounce: function (a, b, c, d, e) {
        if (b < e / 2) return jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c;
        return jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c
    }
})