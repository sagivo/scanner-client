var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var RenderController = famous.views.RenderController;
var ContainerSurface = famous.surfaces.ContainerSurface;
var ImageSurface = famous.surfaces.ImageSurface;

var mainContext = Engine.createContext();

var renderer = new ContainerSurface({});
var renderController = new RenderController({});

var homeButton = new Surface({
    content: "Upload Photo",
    size: [true, true],
    properties: {
        textAlign: 'center',
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        padding: '10px'
    }
});
homeButton.on('click',function(e){
    showPhotoUploadDialog();
});

mainContext.add(renderer);
renderer.add(renderController);

var wrapper = new ContainerSurface({});
wrapper.add(new Modifier({
    align: [0.5, 0.5],
    origin: [0.5, 0.5]
})).add(homeButton);
renderController.show(wrapper);

var showPhotoUploadDialog = function() {
    var dialog = new ContainerSurface({
        properties: {
            textAlign: 'center'
        }
    });
    var btnCamera = new Surface({
        content: 'Camera',
        size: [true, true],
        properties: {
            padding: '10px',
            backgroundColor: '#0000FF'
        }
    });
    btnCamera.on('click',function(e){
        capturePhoto(dialog, 1);
    });
    var btnGallery = new Surface({
        content: 'Gallery',
        size: [true, true],
        properties: {
            padding: '10px',
            backgroundColor: '#0000FF'
        }
    });
    btnGallery.on('click',function(e){
        capturePhoto(dialog, 0);
    });
    dialog.add(btnCamera)
    dialog.add(new Modifier({
        transform: Transform.translate(0, 30)
    })).add(btnGallery);
    mainContext.add(new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5]
    })).add(dialog);
    
    var wrapper = new ContainerSurface({});
    wrapper.add(new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5]
    })).add(dialog);
    renderController.show(wrapper);
};

var capturePhoto = function(dialog, src) {
    navigator.camera.getPicture(function(imgData){
        console.log(imgData);
        var img = new ImageSurface({
            size: [300, 300]
        });
        img.setContent("data:image/jpeg;base64,"+imgData);
        dialog.add(img);
    },function(message){
        alert('error');
    },{
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: src,      // 0:Photo Library, 1=Camera, 2=Saved Album
        encodingType: 0     // 0=JPG 1=PNG
    });
};
