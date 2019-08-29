$(function() {
    console.log( "ready!" );
    // show hide and highlight work experience sections
    $('#work-experience-list ul li').click(function(e){
        e.preventDefault();
        var id = $(this).attr('id');
        for (var i = 1; i < 6 ; i++) {
            if (i == id) {
                $('#work-experience-'+i).show();
                $('#work-experience-list ul li').removeClass('orange-text');
                $(this).addClass('orange-text');
            } else {
                $('#work-experience-'+i).hide();
            }
            // this prevents the page from moving when hiding and showing divs
            e.preventDefault();
        }
    });
    // we'll make this object global, just so it isn't re-instantiated 
    // on every hover event
    var thumbObject = {
        'thumbnail-1': {
            title:'BioSite',
            desc:'A website dedicated to my Grandfather'
        },
        'thumbnail-2': {
            title:'SJST',
            desc:'San Jose Sharks stats and forum'
        },
        'thumbnail-3': {
            title:'Web 330',
            desc:'GitHub for my JavaScript Design Patterns class'
        },
    }
    $('#project-grid div').hover(function(e){
        var id = $(this).attr('id');
        $('#'+id).append("<p class='thumb-text'>"+thumbObject[id].title+"</p>");
        $('#'+id).append("<p class='thumb-text'>"+thumbObject[id].desc+"</p>");
    },
    function () {
        $('#thumbnail-1').html('');
        $('#thumbnail-2').html('');
        $('#thumbnail-3').html('');       
    });
});