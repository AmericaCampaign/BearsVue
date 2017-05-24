function Bear(name, color, img){
  this.name = name;
  this.color = color;
  this.img = img;
}

var bear = new Bear('Monty', "Brown", "http://geology.com/stories/13/bear-areas/grizzly-bear.jpg")
var bear2 = new Bear('Yogi', "Black", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjC0pC5gInUAhUH0WMKHVWbDK8QjBwIBA&url=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbear%2Fbear-05.jpg&psig=AFQjCNEIInlXbIIE6gvJTzbXvSV0qwxglA&ust=1495731570562542")
var bear3 = new Bear('BooBoo', "Black And White", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&ved=0ahUKEwjCkcS_gInUAhUN0mMKHTriCSYQjBwIBA&url=http%3A%2F%2Flindelof.nu%2Fwp-content%2Fuploads%2F2015%2F02%2Fbjornbrum-220x150.jpg&psig=AFQjCNGfruABJK_-Nrd1MF0nekgQOI-YOA&ust=1495731584201404")
var bear4 = new Bear('Martha', "Black", "http://www.unilad.co.uk/wp-content/uploads/2015/11/Screen-Shot-2015-11-30-at-19.20.55.png")
var bear5 = new Bear('Bertha', "Brown", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwj78rjbgInUAhVhVWMKHSyDDAcQjBwIBA&url=http%3A%2F%2Frevelstokebearaware.org%2Fwp-content%2Fuploads%2FBlack-bear1.jpg&psig=AFQjCNEsD-fcjWag_44pO9C4EDOjiY27YA&ust=1495731641397930")
var bear6 = new Bear('Fred', "Black", "http://highlighthollywood.com/wp-content/uploads/2016/06/blackbear-whitecub.jpg")
var bear7 = new Bear('Cloonie', "Pink", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwihnOvlgInUAhUJ5GMKHZH_DdwQjBwIBA&url=http%3A%2F%2Fwww.nationalgeographic.com%2Fcontent%2Fdam%2Fanimals%2Fpictures%2Fmammals%2Fa%2Famerican-black-bear%2Famerican-black-bear.JPG&psig=AFQjCNF7XOLfTPWrDqal1BtMqwbPIqmLKg&ust=1495731662092996")
var bear8 = new Bear('Sam', "Purple", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwj5ttDqgInUAhVDw2MKHWorD3EQjBwIBA&url=https%3A%2F%2Fwww.bear.org%2Fwebsite%2Fimages%2Fstories%2Fimages%2Fimages-new%2Fblack_bear_w_5_cubs_nh_june_2007.jpg&psig=AFQjCNF7XOLfTPWrDqal1BtMqwbPIqmLKg&ust=1495731662092996")
var bear9 = new Bear('Charles', "Magent", "https://s-media-cache-ak0.pinimg.com/736x/08/67/e0/0867e0b750921f149f658f2a40808a18.jpg")

var allBears = [bear, bear2, bear3, bear4, bear5, bear6,
                bear7, bear8, bear9];

console.log(allBears[3]);
