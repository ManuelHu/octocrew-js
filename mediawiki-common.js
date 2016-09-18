if ( mw.config.get( 'wgPageName' ) === 'Crew' ) {
  var url = "https://raw.githubusercontent.com/OctoAwesome/octoawesome/develop/OctoAwesome/OctoAwesome.Client/Assets/OctoAwesome.Client/Crew/crew.xml";
  $.ajax({
    url: url
  }).done(function (d) {
    var xml = $.parseXML(d);
    var $xml = $( xml );
    $xml.find('CrewMember').each(function() {
      var username    = $(this).find('Username').text();
      var alias       = $(this).find('Alias').text();
      var description = $(this).find('Description').text();
      var achievements = [];
      $(this).find('Achievements').each(function() {
        achievements.push($(this).text());
      });
      var links = [];
      $(this).find('Link').each(function() {
        links.push('<a rel="nofollow" class="external text" href="'+$(this).attr('Url')+'">'+$(this).attr('Title')+'</a>');
      });
      
      var content = '<h2><span class="mw-headline" id="'+username+'">'+username+'</span></h2><p>'+description+'</p><p><b>Weiterführende Links:</b> '+links.join(' | ')+'<br /><b>Achievements:</b> '+achievements.join(' | ')+'</p>';
      $('#mw-content-text').append($(content));
    });
  });
}
