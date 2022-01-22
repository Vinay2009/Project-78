var images_src = ["https://www.reliancedigital.in/medias/Apple-iPhone-13-Mini-Smartphones-491997727-i-5-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzI5MzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDVkL2hkMi85NjM3MzUxOTgxMDg2LmpwZ3w4ZTYxNjVhYjdmMjllY2UyNTA1MGJiYzVkMDIwYTE3YWIyZGFkMTRjN2JkMTQyODRkY2JlYzlkZWRjYTkzMDBi" , "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629907844000" , "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-wifi-space-gray-202109_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1629840708000" , "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202009_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1599672435000" , "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg";
var names = ["iPhone 13 Mini","iPhone 13", "iPad Mini 6" , "iPad Air 4", "iPad M1 Pro"];
var i = 0;
function update()
{
    i++;
    var numbers_of_tech_gadgets_in_array = 5
    if(i > numbers_of_tech_gadgets_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [gadgets] ;
 
    document.getElementById("tech_gadget_image").src = updatedImage;
    document.getElementById("tech_gadget_name").innerHTML = updatedName;
}
