var k = {
    name : 'Kathola FMWK ',
    debug : true,

    scrolldown_props : {
        animation : 'easeInOutCubic',
        time: 1800
    },

    init: function(){

        this.addEventListener()

        if(this.debug)
        console.log(this.name + ' has been loaded...')
    },

    addEventListener: function(){
        $(document).on('click', '.scrolldown', this.scrolldown);
    },

    /*
        Scroll Down
    */
    scrolldown : function(EventObject){
        var event = EventObject

        event.preventDefault()

        var parent = $(this).parents('section').next();
        if(parent !== undefined ){
            var pos = $(parent).offset().top
            var s   = k.scrolldown_props;
            $('html, body').animate({ scrollTop: pos }, s.time, s.animation)
            console.log(pos)
        }
    }

}

k.init();
