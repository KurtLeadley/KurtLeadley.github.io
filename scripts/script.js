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
            desc:'A website dedicated to my Grandfather',
            link:'https://kurtleadley.github.io/bioSite/',
            image:'images/snowy-mtn-summer.png'
        },
        'thumbnail-2': {
            title:'SJST',
            desc:'San Jose Sharks stats and forum',
            link:'http://sjsharktank.com',
            image:'images/sjst-logo.png'
        },
        'thumbnail-3': {
            title:'Web-330',
            desc:'GitHub for my JavaScript Design Patterns class',
            link:'https://github.com/KurtLeadley/web-330',
            image:'images/dinah-cat.jpg'
        },
        'thumbnail-4': {
            title:'Web-231',
            desc:'GitHub for my JavaScript 231 class',
            link:'https://github.com/KurtLeadley/web-231',
            image:'images/jscode.jpg'
        },
        'thumbnail-5': {
            title:'BioSite Prototype',
            desc:'Prototype for the website dedicated to my grandfather',
            link:'images/bio-site-prototype.jpg',
            image:'images/football-xs-and-os.jpg'
        },
        'thumbnail-6': {
            title:'Portfolio Prototype',
            desc:'Prototype for this portfolio site',
            link:'images/leadley-assignment-2.4-wireframe.pdf',
            image:'images/portfolio-proto.JPG'
        }
    }
    $('#project-grid div').hover(function(e){
        var id = $(this).attr('id');
        var image = thumbObject[id].image;
        var imageLink = "url("+image+")";
        $(this).css("background-image",imageLink);
        $('#'+id).append("<p class='thumb-text'><a href='"+thumbObject[id].link+"'>"+thumbObject[id].title+"</a></p>");
        $('#'+id).append("<p class='thumb-text'><a href='"+thumbObject[id].link+"'>"+thumbObject[id].desc+"</a></p>");
    },
    function () {
        $('#thumbnail-1').html('');
        $('#thumbnail-2').html('');
        $('#thumbnail-3').html('');
        $('#thumbnail-4').html('');
        $('#thumbnail-5').html('');
        $('#thumbnail-6').html('');           
    });
    // $('#right-arrow p').click(function(e){
    //     e.preventDefault();
    //     console.log('clicked');
    //     var leftThumb = $('#project-grid div:nth-of-type(1)').attr('id');
    //     var middleThumb = $('#project-grid div:nth-of-type(2)').attr('id');
    //     var rightThumb = $('#project-grid div:nth-of-type(3)').attr('id');
    //     var parsedLeftThumb = leftThumb.split('-');
    //     var parsedMiddleThumb = middleThumb.split('-');
    //     var parsedRightThumb = rightThumb.split('-');
    //     var newIdLeft = parseInt(parsedLeftThumb[1])+1;
    //     var newIdMiddle = parseInt(parsedMiddleThumb[1])+1;
    //     var newIdRight = parseInt(parsedRightThumb[1])+1;
    //     if (newIdLeft > 6 ) {
    //         newIdLeft = 1;
    //     }
    //     if (newIdMiddle > 6 ) {
    //         newIdMiddle = 1;
    //     }
    //     if (newIdRight > 6 ) {
    //         newIdRight = 1;
    //     }
    //     console.log(newIdLeft)
    //     console.log(newIdMiddle)
    //     console.log(newIdRight)
    //     var newSelectorLeft = parsedLeftThumb[0]+'-'+newIdLeft;
    //     var newSelectorMiddle = parsedMiddleThumb[0]+'-'+newIdMiddle;
    //     var newSelectorRight = parsedRightThumb[0]+'-'+newIdRight;
    //     $('#project-grid div:nth-of-type(1)').attr('id',newSelectorLeft);
    //     $('#project-grid div:nth-of-type(2)').attr('id',newSelectorMiddle);
    //     $('#project-grid div:nth-of-type(3)').attr('id',newSelectorRight);
    //     // changeImageProperties(newSelectorLeft);
    //     // changeImageProperties(newSelectorMiddle);
    //     // changeImageProperties(newSelectorRight);
    // });
    // function changeImageProperties(divId) {
    //     var id = '#'+divId;
    //     console.log(id);
    //     var image = thumbObject[divId].image;
    //     var imageLink = "url("+image+")";
    //     $(id).css("background-image",imageLink);
    //     $(id).append("<p class='thumb-text'><a href='"+thumbObject[divId].link+"'>"+thumbObject[divId].title+"</a></p>");
    //     $(id).append("<p class='thumb-text'><a href='"+thumbObject[divId].link+"'>"+thumbObject[divId].desc+"</a></p>");
    // }
});