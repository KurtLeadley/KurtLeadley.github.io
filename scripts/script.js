/***********************************
; Title:  KurtLeadley Portfolio
; Author: Kurt Leadley
; Date:   09 September 2019
; Description: JS file for personal Portfolio
***************************************************************/
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
    // these objects are each of my portfolio projects with title, description, link and image values
    var thumbObject = {
        'thumbnail-1': {
            title:'BCRS',
            desc:'MEAN Stack Bellevue University GROUP Project',
            link:'https://bcrs-group-4.herokuapp.com/#/',
            image:'images/bcrs.png'
        },
        'thumbnail-2': {
            title:'NodeBucket',
            desc:'MEAN Stack Bellevue University Individual Project',
            link:'http://leadley-nodebucket.us-east-1.elasticbeanstalk.com/',
            image:'images/nodebucket.png'
        },
        'thumbnail-3': {
            title:'SJST',
            desc:'Hockey Stats done with LAMP stack',
            link:'http://sjsharktank.com',
            image:'images/sjst-logo.png'
        },
        'thumbnail-4': {
            title:'BioSite',
            desc:'A website dedicated to my Grandfather',
            link:'https://kurtleadley.github.io/bioSite/',
            image:'images/snowy-mtn-summer.png'
        },
        'thumbnail-5': {
            title:'Github',
            desc:'GitHub for all Bellevue Projects',
            link:'https://github.com/KurtLeadley/',
            image:'images/dinah-cat.jpg'
        },
        // 'thumbnail-6': {
        //     title:'Web-231',
        //     desc:'GitHub for my JavaScript 231 class',
        //     link:'https://github.com/KurtLeadley/web-231',
        //     image:'images/jscode.jpg'
        // },
        // 'thumbnail-7': {
        //     title:'BioSite Prototype',
        //     desc:'Prototype for the website dedicated to my grandfather',
        //     link:'images/bio-site-prototype.jpg',
        //     image:'images/football-xs-and-os.jpg'
        // },
        // 'thumbnail-8': {
        //     title:'Portfolio Prototype',
        //     desc:'Prototype for this portfolio site',
        //     link:'images/leadley-assignment-2.4-wireframe.pdf',
        //     image:'images/portfolio-proto.JPG'
        // }
    }
    // on hover, show the text for the project, include a clickable link
    $('#project-grid > div').hover(function(){
        var id = $(this).children('div').attr('id');
        var image = thumbObject[id].image;
        console.log(image);
        var imageLink = "url("+image+")";
        $('#'+id).append("<p class='thumb-text'><a href='"+thumbObject[id].link+"'>"+thumbObject[id].title+"</a></p>");
        $('#'+id).append("<p class='thumb-text'><a href='"+thumbObject[id].link+"'>"+thumbObject[id].desc+"</a></p>");
    },
    // clear thumbnail html 
    function () {
        $('#thumbnail-1').html('');
        $('#thumbnail-2').html('');
        $('#thumbnail-3').html('');
        $('#thumbnail-4').html('');
        $('#thumbnail-5').html('');
        // $('#thumbnail-6').html(''); 
        // $('#thumbnail-7').html('');  
        // $('#thumbnail-8').html('');            
    });

    // when clicking the left arrow, change the thumb ids to scroll the thumbs left
    $('#left-arrow').click(function(){
        var leftThumb = $('#project-grid div:nth-of-type(1) div').attr('id');
        var middleThumb = $('#project-grid div:nth-of-type(2) div').attr('id');
        var rightThumb = $('#project-grid div:nth-of-type(3) div').attr('id');
        // determine new thumb id for the left div
        if (leftThumb) {
            var parsedLeftThumb = leftThumb.split('-');
            var newIdLeft = parseInt(parsedLeftThumb[1])-1;
            if (newIdLeft == 0 ) {
                newIdLeft = 5;
            }
        }
        // determine new thumb id for the middle div
        if (middleThumb) {
            var parsedMiddleThumb = middleThumb.split('-');
            var newIdMiddle = parseInt(parsedMiddleThumb[1])-1;
            if (newIdMiddle == 0 ) {
                newIdMiddle = 5;
            }
        }
        // determine new thumb id for the right div
        if (rightThumb) {
            var parsedRightThumb = rightThumb.split('-');
            var newIdRight = parseInt(parsedRightThumb[1])-1;
            if (newIdRight == 0 ) {
                newIdRight = 5;
            }
        }
        // create our selector id and apply to left middle and right divs
        var newSelectorLeft = parsedLeftThumb[0]+'-'+newIdLeft;
        var newSelectorMiddle = parsedMiddleThumb[0]+'-'+newIdMiddle;
        var newSelectorRight = parsedRightThumb[0]+'-'+newIdRight;
        $('#project-grid div:nth-of-type(1) div').attr('id',newSelectorLeft);
        $('#project-grid div:nth-of-type(2) div').attr('id',newSelectorMiddle);
        $('#project-grid div:nth-of-type(3) div').attr('id',newSelectorRight);
    });
    // repeat same logic for the right button as the right, but the ids go in the other direction (add instead of subtract)
    $('#right-arrow').click(function(){
        var leftThumb = $('#project-grid div:nth-of-type(1) div').attr('id');
        var middleThumb = $('#project-grid div:nth-of-type(2) div').attr('id');
        var rightThumb = $('#project-grid div:nth-of-type(3) div').attr('id');
        var parsedLeftThumb = leftThumb.split('-');
        var parsedMiddleThumb = middleThumb.split('-');
        var parsedRightThumb = rightThumb.split('-');
        var newIdLeft = parseInt(parsedLeftThumb[1])+1;
        var newIdMiddle = parseInt(parsedMiddleThumb[1])+1;
        var newIdRight = parseInt(parsedRightThumb[1])+1;
        if (newIdLeft == 6 ) {
            newIdLeft = 1;
        }
        if (newIdMiddle == 6 ) {
            newIdMiddle = 1;
        }
        if (newIdRight == 6 ) {
            newIdRight = 1;
        }
        var newSelectorLeft = parsedLeftThumb[0]+'-'+newIdLeft;
        var newSelectorMiddle = parsedMiddleThumb[0]+'-'+newIdMiddle;
        var newSelectorRight = parsedRightThumb[0]+'-'+newIdRight;
        $('#project-grid div:nth-of-type(1) div').attr('id',newSelectorLeft);
        $('#project-grid div:nth-of-type(2) div').attr('id',newSelectorMiddle);
        $('#project-grid div:nth-of-type(3) div').attr('id',newSelectorRight);
    });
});
//Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// mobile nav taken from
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}