//read csv from file
//insert title contents in the title layer and text in the corresponding layer

function main(){
    //use open document
    var doc = activeDocument,
      layers = doc.artLayers,
      titleLayer = layers.add();  // Array of layer ID's

    //adding a title layer
    titleLayer.name = "Title";
    titleLayer.kind = LayerKind.TEXT;

    //add a text item
    var textItem = titleLayer.textItem;

    //create an rgb colour
    var myColour = new SolidColor(), rgbPart = myColour.rgb;
    rgbPart.red = 30;
    rgbPart.green = 120;
    rgbPart.blue = 255;

    //random font
    var fonts = app.fonts;
    var randomFont = fonts[Math.floor(Math.random() * fonts.length)];

    // // adjust text appearance
    // textItem.contents = "My textttttt";
    // textItem.color = myColour;
    // textItem.font = randomFont.postScriptName;
    // textItem.size = 96;
    // textItem.justification = Justification.CENTER;
    // textItem.position = [newDocument.width*.5, 300];
    // //newLayer.translate(newDocument.width*.5, 0);

}

