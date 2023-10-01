//remove metadata details indicator page
$(document).ready(function () {
   $("#national tr:nth-child(1)").remove();
   $("#national tr:nth-child(2)").remove();
   $("#national tr:nth-child(3)").remove();
   $("#national tr:nth-child(4)").remove();
   $("#national tr:nth-child(4)").remove();
   $("#national tr:nth-child(4)").remove();
   console.log('test');
   console.log($("#national tr:nth-child(4)"));
});

//remove link from dates
$(document).ready(function () {
   let date1 = $("#national tr:nth-last-child(1) a ").text().substring(17, 27);
   let date2 = $("#national tr:nth-last-child(2) a ").text().substring(17, 27);
   $("#national tr:nth-last-child(1) a ").text(date1).removeAttr("href");
   $("#national tr:nth-last-child(2) a ").text(date2).removeAttr("href");
});

//remove sources
$(document).ready(function () {
   $("#sources tr").each(function () {
      $("#sources tr:nth-child(" + 2 + ")").remove();
   });
});

//back to top button
$(document).ready(function () {
   $('#back-to-top').click(function (e) {
      $("html, body").animate({ scrollTop: 0 }, "slow");
   });
});

//pyramid chart alternations
$(document).ready(function () {
   setTimeout(function () {
      var url = window.location.href;
      if (url.search("1-7-8") != -1) {

         //add age-range-pyramid and helper class
         $('.tab-content #chart-canvas').append('<ul class="pyramid-age-range"><li>100-104</li><li>95-99</li><li>90-94</li><li>85-89</li><li>80-84</li><li>75-79</li><li>70-74</li><li>65-69</li><li>60-64</li><li>55-59</li><li>50-54</li><li>45-49</li><li>40-44</li><li>35-39</li><li>30-34</li><li>25-29</li><li>20-24</li><li>15-19</li><li>10-14</li><li>5-9</li><li>0-4</li></ul>');
         $('#chart-heading').addClass('pyramid');
         //show pyramid legend
         $('.pyramid-sex-color').css('display', 'block');
         //hide toolbar
         $('#toolbar').css('display', 'none');
         //rename Unit Measure 
         $('#units h4').css('display', 'none');
         $('.census-pyramid').css('display', 'none');
         //remove year in table pyramid, and chart legend
         $('div#plotLegend').css('display', 'none');
         $('.data-view .nav-item:last-child').css('display', 'none');
      } else if (url.search("2-1-4") != -1) {
         //add age-range-pyramid and helper class
         $('.tab-content #chart-canvas').append('<ul class="pyramid-age-range"><li>100-104</li><li>95-99</li><li>90-94</li><li>85-89</li><li>80-84</li><li>75-79</li><li>70-74</li><li>65-69</li><li>60-64</li><li>55-59</li><li>50-54</li><li>45-49</li><li>40-44</li><li>35-39</li><li>30-34</li><li>25-29</li><li>20-24</li><li>15-19</li><li>10-14</li><li>5-9</li><li>0-4</li></ul>');
         $('#chart-heading').addClass('pyramid');
         //show pyramid legend
         $('.pyramid-sex-color').css('display', 'block');
         //hide toolbar + legend, and rename unit measurement
         $('#toolbar').css('display', 'none');
         $('div#plotLegend').css('display', 'none');
         $('#units h4').css('display', 'none');
         $('.projection-pyramid').css('display', 'none');
         //remove table tab 
         $('.data-view .nav-item:last-child').css('display', 'none');
      } else {
         $('.pyramid-units').css('display', 'none');
      }

   }, 400);

});

//redirect indicators
$(document).ready(function () {

   function replaceLinks(url, oldLink, newLink) {
      if (url.indexOf(oldLink) != -1) {
         url = url.replace(oldLink, newLink);
      }
      return url;
   }

   setTimeout(function () {
      var url = window.location.href;
      if (url.search("/3/") != -1) { //HEALTH
         $('.goal-indicator a').each(function () {
            url = $(this).attr('href');
            url = replaceLinks(url, '3-1-1', '1-3-2');
            url = replaceLinks(url, '3-1-2', '1-3-3');
            url = replaceLinks(url, '3-1-3', '1-3-4');
            url = replaceLinks(url, '3-1-4', '1-3-5');
            url = replaceLinks(url, '3-1-5', '1-3-6');
            url = replaceLinks(url, '3-7-1', '2-4-1');

            $(this).attr('href', url)
         });

      } else if (url.search("/5/") != -1) { //EDUCATION
         $('.goal-indicator a').each(function () {
            url = $(this).attr('href');
            url = replaceLinks(url, '5-7-3', '2-3-1');
            url = replaceLinks(url, '5-7-4', '2-3-2');

            $(this).attr('href', url)
         });

      }else if (url.search("/7/") != -1) { //LABOUR
         $('.goal-indicator a').each(function () {
            url = $(this).attr('href');
            url = replaceLinks(url, '7-1-5', '5-7-2');

            $(this).attr('href', url)
         });

      }

   }, 400);

});


