import fetch from "node-fetch";
fetch("https://dummyjson.com/products?limit=50&skip=40&select=images")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
  });

// {

//   name: 'NIGHT SUIT',
//   desc: 'NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.',
//   price: 55,
//   rating: 4.65,
//   image: 'https://dummyjson.com/image/i/products/41/image.webp'
// },
// {

//   name: 'Stiched Kurta plus trouser',
//   desc: 'FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN',
//   price: 80,
//   rating: 4.05,
//   image: 'https://dummyjson.com/image/i/products/42/image.jpg'
// },
// {

//   name: 'frock gold printed',
//   desc: 'Ghazi fabric long frock gold printed ready to wear stitched collection (G992)',
//   price: 600,
//   rating: 4.31,
//   image: 'https://dummyjson.com/image/i/products/43/image.jpg'
// },
// {

//   name: 'Ladies Multicolored Dress',
//   desc: 'This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.',
//   price: 79,
//   rating: 4.03,
//   image: 'https://dummyjson.com/image/i/products/44/image.jpg'
// },
// {

//   name: 'Malai Maxi Dress',
//   desc: 'Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff',
//   price: 50,
//   rating: 4.67,
//   image: 'https://dummyjson.com/image/i/products/45/image.jpg'
// },
// {

//   name: "women's shoes",
//   desc: 'Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber',
//   price: 40,
//   rating: 4.14,
//   image: 'https://dummyjson.com/image/i/products/46/image.jpg'
// },
// {

//   name: 'Sneaker shoes',
//   desc: 'Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women',
//   price: 120,
//   rating: 4.19,
//   image: 'https://dummyjson.com/image/i/products/47/image.jpeg'
// },
// {

//   name: 'Women Strip Heel',
//   desc: 'Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped',
//   price: 40,
//   rating: 4.02,
//   image: 'https://dummyjson.com/image/i/products/48/image.jpg'
// },
// {

//   name: 'Chappals & Shoe Ladies Metallic',
//   desc: 'Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals',
//   price: 23,
//   rating: 4.72,
//   image: 'https://dummyjson.com/image/i/products/49/image.jpg'
// },
// {
//   name: 'Women Shoes',
//   desc: '2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes',
//   price: 36,
//   rating: 4.33,
//   image: 'https://dummyjson.com/image/i/products/50/image.jpg'
// },
// {

//   name: 'half sleeves T shirts',
//   desc: 'Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands',
//   price: 23,
//   rating: 4.26,
//   image: 'https://dummyjson.com/image/i/products/51/image.jpg'
// },
// {

//   name: 'FREE FIRE T Shirt',
//   desc: "quality and professional print - It doesn't just look high quality, it is high quality.",
//   price: 10,
//   rating: 4.52,
//   image: 'https://dummyjson.com/image/i/products/52/image.jpg'
// },
// {

//   name: 'printed high quality T shirts',
//   desc: 'Brand: vintage Apparel ,Export quality',
//   price: 35,
//   rating: 4.89,
//   image: 'https://dummyjson.com/image/i/products/53/image.jpg'
// },
// {

//   name: 'Pubg Printed Graphic T-Shirt',
//   desc: 'Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking',
//   price: 46,
//   rating: 4.62,
//   image: 'https://dummyjson.com/image/i/products/54/image.jpg'
// },
// {

//   name: 'Money Heist Printed Summer T Shirts',
//   desc: 'Fabric Jercy, Size: M & L Wear Stylish Dual Stiched',
//   price: 66,
//   rating: 4.9,
//   image: 'https://dummyjson.com/image/i/products/55/image.jpg'
// },
// {

//   name: 'Sneakers Joggers Shoes',
//   desc: 'Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New',
//   price: 40,
//   rating: 4.38,
//   image: 'https://dummyjson.com/image/i/products/56/image.jpg'
// },
// {

//   name: 'Loafers for men',
//   desc: 'Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.',
//   price: 47,
//   rating: 4.91,
//   image: 'https://dummyjson.com/image/i/products/57/image.jpg'
// },
// {

//   name: 'formal offices shoes',
//   desc: 'Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber',
//   price: 57,
//   rating: 4.41,
//   image: 'https://dummyjson.com/image/i/products/58/image.jpg'
// },
// {
//   name: 'Spring and summershoes',
//   desc: 'Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;',
//   price: 20,
//   rating: 4.33,
//   image: 'https://dummyjson.com/image/i/products/59/image.jpg'
// },
// {
//   name: 'Stylish Casual Jeans Shoes',
//   desc: 'High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable',
//   price: 58,
//   rating: 4.55,
//   image: 'https://dummyjson.com/image/i/products/60/image.jpg'
// },
// {
//   name: 'Leather Straps Wristwatch',
//   desc: 'Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar',
//   price: 120,
//   rating: 4.63,
//   image: 'https://dummyjson.com/image/i/products/61/image.jpg'
// },
// {
//   name: 'Waterproof Leather Brand Watch',
//   desc: 'Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours',
//   price: 46,
//   rating: 4.05,
//   image: 'https://dummyjson.com/image/i/products/62/image.jpg'
// },
// {
//   name: 'Royal Blue Premium Watch',
//   desc: 'Men Silver Chain Royal Blue Premium Watch Latest Analog Watch',
//   price: 50,
//   rating: 4.89,
//   image: 'https://dummyjson.com/image/i/products/63/image.webp'
// },
// {
//   name: 'Leather Strap Skeleton Watch',
//   desc: 'Leather Strap Skeleton Watch for Men - Stylish and Latest Design',
//   price: 46,
//   rating: 4.98,
//   image: 'https://dummyjson.com/image/i/products/64/image.jpg'
// },
// {
//   name: 'Stainless Steel Wrist Watch',
//   desc: "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
//   price: 47,
//   rating: 4.79,
//   image: 'https://dummyjson.com/image/i/products/65/image.webp'
// },
// {
//   name: 'Steel Analog Couple Watches',
//   desc: 'Elegant design, Stylish ,Unique & Trendy,Comfortable wear',
//   price: 35,
//   rating: 4.79,
//   image: 'https://dummyjson.com/image/i/products/66/image.jpg'
// },
// {
//   name: 'Fashion Magnetic Wrist Watch',
//   desc: "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
//   price: 60,
//   rating: 4.03,
//   image: 'https://dummyjson.com/image/i/products/67/image.jpg'
// },
// {
//   name: 'Stylish Luxury Digital Watch',
//   desc: 'Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls',
//   price: 57,
//   rating: 4.55,
//   image: 'https://dummyjson.com/image/i/products/68/image.webp'
// },
// {
//   name: 'Golden Watch Pearls Bracelet Watch',
//   desc: 'Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women',
//   price: 47,
//   rating: 4.77,
//   image: 'https://dummyjson.com/image/i/products/69/image.jpg'
// },
// {
//   name: 'Stainless Steel Women',
//   desc: 'Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies',
//   price: 35,
//   rating: 4.08,
//   image: 'https://dummyjson.com/image/i/products/70/image.jpg'
// },
// {
//   name: 'Women Shoulder Bags',
//   desc: 'LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies',
//   price: 46,
//   rating: 4.71,
//   image: 'https://dummyjson.com/image/i/products/71/image.jpg'
// },
// {
//   name: 'Handbag For Girls',
//   desc: 'This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.',
//   price: 23,
//   rating: 4.91,
//   image: 'https://dummyjson.com/image/i/products/72/image.webp'
// },
// {
//   name: 'Fancy hand clutch',
//   desc: 'This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.',
//   price: 44,
//   rating: 4.18,
//   image: 'https://dummyjson.com/image/i/products/73/image.jpg'
// },
// {
//   name: 'Leather Hand Bag',
//   desc: 'It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.',
//   price: 57,
//   rating: 4.01,
//   image: 'https://dummyjson.com/image/i/products/74/image.jpg'
// },
// {
//   name: 'Seven Pocket Women Bag',
//   desc: 'Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag',
//   price: 68,
//   rating: 4.93,
//   image: 'https://dummyjson.com/image/i/products/75/image.jpg'
// },
// {
//   name: 'Silver Ring Set Women',
//   desc: 'Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious',
//   price: 70,
//   rating: 4.61,
//   image: 'https://dummyjson.com/image/i/products/76/image.jpg'
// },
// {
//   name: 'Rose Ring',
//   desc: 'Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable',
//   price: 100,
//   rating: 4.21,
//   image: 'https://dummyjson.com/image/i/products/77/image.jpg'
// },
// {
//   name: 'Rhinestone Korean Style Open Rings',
//   desc: 'Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women',
//   price: 30,
//   rating: 4.69,
//   image: 'https://dummyjson.com/image/i/products/78/image.jpg'
// },
// {
//   name: 'Elegant Female Pearl Earrings',
//   desc: 'Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set',
//   price: 30,
//   rating: 4.74,
//   image: 'https://dummyjson.com/image/i/products/79/image.jpg'
// },
// {
//   name: 'Chain Pin Tassel Earrings',
//   desc: 'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
//   price: 45,
//   rating: 4.59,
//   image: 'https://dummyjson.com/image/i/products/80/image.jpg'
// },
// {
//   name: 'Round Silver Frame Sun Glasses',
//   desc: 'A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,',
//   price: 19,
//   rating: 4.94,
//   image: 'https://dummyjson.com/image/i/products/81/image.jpg'
// },
// {
//   name: 'Kabir Singh Square Sunglass',
//   desc: 'Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass',
//   price: 50,
//   rating: 4.62,
//   image: 'https://dummyjson.com/image/i/products/82/image.jpg'
// },
// {
//   name: 'Wiley X Night Vision Yellow Glasses',
//   desc: 'Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches',
//   price: 30,
//   rating: 4.97,
//   image: 'https://dummyjson.com/image/i/products/83/image.jpg'
// },
// {
//   name: 'Square Sunglasses',
//   desc: 'Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059',
//   price: 28,
//   rating: 4.64,
//   image: 'https://dummyjson.com/image/i/products/84/image.jpg'
// },
// {
//   name: 'LouisWill Men Sunglasses',
//   desc: 'LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers',
//   price: 50,
//   rating: 4.98,
//   image: 'https://dummyjson.com/image/i/products/85/image.jpg'
// },
// {
//   name: 'Bluetooth Aux',
//   desc: 'Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3',
//   price: 25,
//   rating: 4.57,
//   image: 'https://dummyjson.com/image/i/products/86/image.jpg'
// },
// {
//   name: 't Temperature Controller Incubator Controller',
//   desc: 'Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1',
//   price: 40,
//   rating: 4.54,
//   image: 'https://dummyjson.com/image/i/products/87/image.jpg'
// },
// {
//   name: 'TC Reusable Silicone Magic Washing Gloves',
//   desc: 'TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose',
//   price: 29,
//   rating: 4.98,
//   image: 'https://dummyjson.com/image/i/products/88/image.jpg'
// },
// {
//   name: 'Qualcomm original Car Charger',
//   desc: 'best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all',
//   price: 40,
//   rating: 4.2,
//   image: 'https://dummyjson.com/image/i/products/89/image.jpg'
// },
// {

//   name: 'Cycle Bike Glow',
//   desc: 'Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w',
//   price: 35,
//   rating: 4.1,
//   image: 'https://dummyjson.com/image/i/products/90/image.jpg'
// }

// products = [
//   {
//     name: "iPhone 9",
//     desc: "An apple mobile which is nothing like apple",
//     price: 549,
//     rating: 4.69,
//     image: "https://dummyjson.com/image/i/products/1/image.jpg",
//   },
//   {
//     name: "iPhone X",
//     desc: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//     price: 899,
//     rating: 4.44,

//     image: "https://dummyjson.com/image/i/products/2/image.jpg",
//   },
//   {
//     name: "Samsung Universe 9",
//     desc: "Samsung's new variant which goes beyond Galaxy to the Universe",
//     price: 1249,
//     rating: 4.09,

//     image: "https://dummyjson.com/image/i/products/3/image.jpg",
//   },
//   {
//     name: "OPPOF19",
//     desc: "OPPO F19 is officially announced on April 2021.",
//     price: 280,
//     rating: 4.3,

//     image: "https://dummyjson.com/image/i/products/4/image.jpg",
//   },
//   {
//     name: "Huawei P30",
//     desc: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//     price: 499,
//     rating: 4.09,

//     image: "https://dummyjson.com/image/i/products/5/image.jpg",
//   },
//   {
//     name: "MacBook Pro",
//     desc: "MacBook Pro 2021 with mini-LED display may launch between September, November",
//     price: 1749,
//     rating: 4.57,

//     image: "https://dummyjson.com/image/i/products/6/image.jpg",
//   },
//   {
//     name: "Samsung Galaxy Book",
//     desc: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
//     price: 1499,
//     rating: 4.25,

//     image: "https://dummyjson.com/image/i/products/7/image.jpg",
//   },
//   {
//     name: "Microsoft Surface Laptop 4",
//     desc: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
//     price: 1499,
//     rating: 4.43,

//     image: "https://dummyjson.com/image/i/products/8/image.jpg",
//   },
//   {
//     name: "Infinix INBOOK",
//     desc: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
//     price: 1099,
//     rating: 4.54,

//     image: "https://dummyjson.com/image/i/products/9/image.jpg",
//   },
//   {
//     name: "HP Pavilion 15-DK1056WM",
//     desc: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
//     price: 1099,
//     rating: 4.43,

//     image: "https://dummyjson.com/image/i/products/10/image.jpg",
//   },
//   {
//     name: "perfume Oil",
//     desc: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
//     price: 13,
//     rating: 4.26,

//     image: "https://dummyjson.com/image/i/products/11/image.jpg",
//   },
//   {
//     name: "Brown Perfume",
//     desc: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
//     price: 40,
//     rating: 4,

//     image: "https://dummyjson.com/image/i/products/12/image.jpg",
//   },
//   {
//     name: "Fog Scent Xpressio Perfume",
//     desc: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
//     price: 13,
//     rating: 4.59,

//     image: "https://dummyjson.com/image/i/products/13/image.jpg",
//   },
//   {
//     name: "Non-Alcoholic Concentrated Perfume Oil",
//     desc: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
//     price: 120,
//     rating: 4.21,

//     image: "https://dummyjson.com/image/i/products/14/image.jpg",
//   },
//   {
//     name: "Eau De Perfume Spray",
//     desc: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
//     price: 30,
//     rating: 4.7,

//     image: "https://dummyjson.com/image/i/products/15/image.jpg",
//   },
//   {
//     name: "Hyaluronic Acid Serum",
//     desc: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
//     price: 19,
//     rating: 4.83,

//     image: "https://dummyjson.com/image/i/products/16/image.jpg",
//   },
//   {
//     name: "Tree Oil 30ml",
//     desc: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
//     price: 12,
//     rating: 4.52,

//     image: "https://dummyjson.com/image/i/products/17/image.jpg",
//   },
//   {
//     name: "Oil Free Moisturizer 100ml",
//     desc: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
//     price: 40,
//     rating: 4.56,

//     image: "https://dummyjson.com/image/i/products/18/image.jpg",
//   },
//   {
//     name: "Skin Beauty Serum.",
//     desc: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
//     price: 46,
//     rating: 4.42,

//     image: "https://dummyjson.com/image/i/products/19/image.jpg",
//   },
//   {
//     name: "Freckle Treatment Cream- 15gm",
//     desc: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
//     price: 70,
//     rating: 4.06,

//     image: "https://dummyjson.com/image/i/products/20/image.jpg",
//   },
//   {
//     name: "- Daal Masoor 500 grams",
//     desc: "Fine quality Branded Product Keep in a cool and dry place",
//     price: 20,
//     rating: 4.44,

//     image: "https://dummyjson.com/image/i/products/21/image.jpg",
//   },
//   {
//     name: "Elbow Macaroni - 400 gm",
//     desc: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
//     price: 14,
//     rating: 4.57,

//     image: "https://dummyjson.com/image/i/products/22/image.jpg",
//   },
//   {
//     name: "Orange Essence Food Flavou",
//     desc: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
//     price: 14,
//     rating: 4.85,

//     image: "https://dummyjson.com/image/i/products/23/image.jpg",
//   },
//   {
//     name: "cereals muesli fruit nuts",
//     desc: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
//     price: 46,
//     rating: 4.94,

//     image: "https://dummyjson.com/image/i/products/24/image.jpg",
//   },
//   {
//     name: "Gulab Powder 50 Gram",
//     desc: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
//     price: 70,
//     rating: 4.87,

//     image: "https://dummyjson.com/image/i/products/25/image.jpg",
//   },
//   {
//     name: "Plant Hanger For Home",
//     desc: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
//     price: 41,
//     rating: 4.08,

//     image: "https://dummyjson.com/image/i/products/26/image.jpg",
//   },
//   {
//     name: "Flying Wooden Bird",
//     desc: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
//     price: 51,
//     rating: 4.41,

//     image: "https://dummyjson.com/image/i/products/27/image.jpg",
//   },
//   {
//     name: "3D Embellishment Art Lamp",
//     desc: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
//     price: 20,
//     rating: 4.82,

//     image: "https://dummyjson.com/image/i/products/28/image.jpg",
//   },
//   {
//     name: "Handcraft Chinese style",
//     desc: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
//     price: 60,
//     rating: 4.44,

//     image: "https://dummyjson.com/image/i/products/29/image.jpg",
//   },
//   {
//     name: "Key Holder",
//     desc: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
//     price: 30,
//     rating: 4.92,

//     image: "https://dummyjson.com/image/i/products/30/image.jpg",
//   },
// ];
