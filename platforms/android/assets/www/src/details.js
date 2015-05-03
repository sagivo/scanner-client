var template = document.querySelector('template[is=auto-binding]'); 
template.data = [
	{ name: 'Adam', url: 'http://www.rockdesign.com/prod_images/black-duplex-business-cards2_4240.jpg' }, 
	{ name: 'Alex', url: 'http://www.creative82.co.uk/perch/resources/businesscardsnew-.jpg'}, 
	{ name: 'Bob', url: 'http://asset.zcache.com/assets/graphics/z4/hubSubsites/Create_Section/Wide/Business_Cards_Various.jpg' }, 
	{ name: 'Chack', url: 'http://businesscardjournal.com/wp-content/uploads/Modern-Tricolor-Business-Card-Template-For-Corporate-Professional-0014.jpg' }
];

template.filter = function(d, filter){
	return (d.indexOf(filter) > -1);
}