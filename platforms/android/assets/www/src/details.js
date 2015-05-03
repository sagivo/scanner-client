var template = document.querySelector('template[is=auto-binding]'); 
template.data = [
	{ text: 'Atalantic.net - 5/3/15 @TC Disrupt) Fast SSd Cloud Hosting Ready in 30 Seconds $25 Free Credit When you use code TECHCRUNCH25 No Contract RESTFUL API Pay as you go Windows, Linux, FreeBSD One-Click Apps Global Data Center', url: 'http://i.imgur.com/3iDgfLD.jpg' }, 
	{ text: 'Mark V. Bohneri DDS SOUTHEAST 317-359-0000 6020 Southeastern Ave. Indianapolis, IN 46203 www.SouIheusIFami.yDent0.com]', url: 'http://www.creative82.co.uk/perch/resources/businesscardsnew-.jpg'}, 
	{ text: 'The Thai Place Order today from all the aroma and taste you like, in half of the price. Call now +1453512234', url: 'http://i.imgur.com/3vmHqd7.jpg' },
	{ text: 'Roller because i got hi.', url: 'http://businesscardjournal.com/wp-content/uploads/Modern-Tricolor-Business-Card-Template-For-Corporate-Professional-0014.jpg' },
	{ text: 'because i got heigh', url: 'http://asset.zcache.com/assets/graphics/z4/hubSubsites/Create_Section/Wide/Business_Cards_Various.jpg' }, 
];

template.filter = function(d, filter){
	return d.filter(function(el){
		return (el.text.toLowerCase().indexOf(filter.toLowerCase()) > -1);
	});
}