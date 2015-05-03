var template = document.querySelector('template[is=auto-binding]'); 
template.data = [
	{ text: 'hello, my name is all i love', url: 'http://www.rockdesign.com/prod_images/black-duplex-business-cards2_4240.jpg' }, 
	{ text: 'lorem ipsum delom', url: 'http://www.creative82.co.uk/perch/resources/businesscardsnew-.jpg'}, 
	{ text: 'because i got heigh', url: 'http://asset.zcache.com/assets/graphics/z4/hubSubsites/Create_Section/Wide/Business_Cards_Various.jpg' }, 
	{ text: 'Roller because i got hi.', url: 'http://businesscardjournal.com/wp-content/uploads/Modern-Tricolor-Business-Card-Template-For-Corporate-Professional-0014.jpg' }
];

template.filter = function(d, filter){
	return d.filter(function(el){
		return (el.text.indexOf(filter) > -1);
	});
}