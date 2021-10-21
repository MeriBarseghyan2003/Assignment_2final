let rectangle_height = 5
let rectangle_length = 6
let rectangle_area = (rectangle_height * rectangle_length);

let triangle_base = 3
let triangle_height = 7
let triangle_area = (triangle_height * triangle_base)/2;

 if (rectangle_area > triangle_area) {

    console.log('The rectangle has a bigger area');

 }
  
if (triangle_area > rectangle_area) {
    console.log('The triangle has a bigger area');
}
if (rectangle_area === triangle_area) {
    console.log('Areas are equal!');
}

