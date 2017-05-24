function Bear(name, color, img){
  this.name = name;
  this.color = color;
  this.img = img;
}

var bear = new Bear('Monty', "Brown", "http://images.nationalgeographic.com/wpf/media-live/photos/000/005/cache/grizzly-bear_566_600x450.jpg")
var bear2 = new Bear('Yogi', "Black", "https://nicodemasplusthree.files.wordpress.com/2015/05/grizzly-bear-1.jpg?w=565&h=376")
var bear3 = new Bear('BooBoo', "Black And White", "http://www.montanaoutdoor.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-28-at-7.24.38-PM.png")
var bear4 = new Bear('Martha', "Black", "http://www.unilad.co.uk/wp-content/uploads/2015/11/Screen-Shot-2015-11-30-at-19.20.55.png")
var bear5 = new Bear('Bertha', "Brown", "http://thefederalist.com/wp-content/uploads/2016/06/shutterstock_115473676-998x665.jpg")
var bear6 = new Bear('Fred', "Black", "http://highlighthollywood.com/wp-content/uploads/2016/06/blackbear-whitecub.jpg")
var bear7 = new Bear('Cloonie', "Pink", "http://www.gotscience.org/wp-content/uploads/2015/08/19718748235_cd5c821289_k-e1439850100575.jpg")
var bear8 = new Bear('Sam', "Purple", "https://ichef.bbci.co.uk/news/624/media/images/76762000/jpg/_76762768_grizzlybear76993.jpg")
var bear9 = new Bear('Charles', "Magent", "https://s-media-cache-ak0.pinimg.com/736x/08/67/e0/0867e0b750921f149f658f2a40808a18.jpg")

var allBears = [bear, bear2, bear3, bear4, bear5, bear6,
                bear7, bear8, bear9];

var newBearVue = new Vue({
  el: '#bear',
  data: {
    greeting: "Hello, from Bear Vue",
    oneBear: allBears[0],
    bears: allBears
  }
})
