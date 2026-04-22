export type MenuCategory = "Meat" | "Chicken & Poultry" | "Vegetarian & Sides" | "Seafood" | "Pasta" | "Desserts";

export interface MenuItem {
  id: number;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: string;
  image: string;
  orderImage: string;
  category: MenuCategory;
}

export const menuData: MenuItem[] = [
{
    id: 1,
    name: { 
      en: "Beef Kofta", 
      ar: "كفتة لحمة" 
    },
    description: { 
      en: "Traditional grilled beef kofta seasoned with herbs and spices — price per pound", 
      ar: "كفتة لحم مشوية متبلة بالأعشاب والبهارات التقليدية — السعر للباوند" 
    },
    price: "$25",
    image: "/menu/1.webp",
    orderImage: "/order/1.webp",
    category: "Meat",
  },

{
    id: 2,
    name: { 
      en: "Beef Sausage (Mombar)", 
      ar: "ممبار" 
    },
    description: { 
      en: "Traditional Egyptian beef sausage stuffed with seasoned rice, herbs, and tomato sauce — price per pound", 
      ar: "ممبار بلدي محشي بخلطة الأرز المصرية والأعشاب والبهارات — السعر للباوند" 
    },
    price: "$20",
    image: "/menu/2.webp",
    orderImage: "/order/2.webp",
    category: "Meat",
  },
 {
    id: 3,
    name: { 
      en: "Egyptian Fattah with Beef", 
      ar: "فتة مصرية باللحمة" 
    },
    description: { 
      en: "Layers of toasted bread and rice, topped with tender beef and a garlicky tomato sauce", 
      ar: "طبقات من الخبز المحمص والأرز، مغطاة بقطع اللحم وصلصة الطماطم بالخل والثوم" 
    },
    price: "$75",
    image: "/menu/3.webp",
    orderImage: "/order/3.webp",
    category: "Meat",
  },
{
    id: 4,
    name: { 
      en: "Grilled Lamb Chops", 
      ar: "ريش ضأني مشوية" 
    },
    description: { 
      en: "Tender grilled lamb chops seasoned with a special herb blend — price per pound", 
      ar: "ريش ضأني طرية مشوية متبلة بخلطة الأعشاب الخاصة — السعر للباوند" 
    },
    price: "$30",
    image: "/menu/4.webp",
    orderImage: "/order/4.webp",
    category: "Meat",
  },
{
    id: 5,
    name: { 
      en: "Beef Steak (Pan-Fried)", 
      ar: "بفتيك لحمة" 
    },
    description: { 
      en: "Thinly sliced, tenderized beef, breaded and pan-fried to golden perfection — price per pound", 
      ar: "شرائح لحم بقري رقيقة ومتبلة، مغطاة بالبقسماط ومقلية حتى اللون الذهبي — السعر للباوند" 
    },
    price: "$25",
    image: "/menu/5.webp",
    orderImage: "/order/5.webp",
    category: "Meat",
  },
 {
    id: 6,
    name: { 
      en: "Egyptian Falafel (Taameya)", 
      ar: "طعمية" 
    },
    description: { 
      en: "Authentic Egyptian falafel made from crushed fava beans and fresh herbs — price per pound", 
      ar: "طعمية مصرية أصيلة مصنوعة من الفول المدشوش والأعشاب الطازجة — السعر للباوند" 
    },
    price: "$7",
    image: "/menu/6.webp",
    orderImage: "/order/6.webp",
    category: "Vegetarian & Sides",
  },
 {
    id: 7,
    name: { 
      en: "Egyptian Stuffed Grape Leaves", 
      ar: "محشي ورق عنب" 
    },
    description: { 
      en: "Grape leaves stuffed with a savory mixture of rice, fresh herbs, and spices — price per pound", 
      ar: "ورق عنب محشي بخلطة الأرز والأعشاب الطازجة والبهارات — السعر للباوند" 
    },
    price: "$20",
    image: "/menu/7.webp",
    orderImage: "/order/7.webp",
    category: "Vegetarian & Sides",
  },
  {
    id: 8,
    name: { 
      en: "Meat Goulash", 
      ar: "جلاش باللحمة" 
    },
    description: { 
      en: "Crispy layers of phyllo dough stuffed with seasoned minced meat", 
      ar: "طبقات هشة من رقائق الجلاش محشوة باللحم المفروم المتبل" 
    },
    price: "$40",
    image: "/menu/8.webp",
    orderImage: "/order/8.webp",
    category: "Meat",
  },
  {
    id: 9,
    name: { 
      en: "Basterma and Cheese Goulash", 
      ar: "جلاش بسطرمة وجبنة" 
    },
    description: { 
      en: "Phyllo pastry filled with a savory mix of Egyptian basterma and premium melted cheese", 
      ar: "جلاش محشو بمزيج من البسطرمة المصرية والجبنة الغنية" 
    },
    price: "$45",
    image: "/menu/9.webp",
    orderImage: "/order/9.webp",
    category: "Meat",
  },
  {
    id: 10,
    name: { 
      en: "Mixed Cheese Goulash", 
      ar: "جلاش مكس جبن" 
    },
    description: { 
      en: "Phyllo dough layers stuffed with a rich variety of melted cheeses", 
      ar: "رقائق الجلاش محشوة بمجموعة متنوعة غنية من الأجبان الذائبة" 
    },
    price: "$40",
    image: "/menu/10.webp",
    orderImage: "/order/10.webp",
    category: "Vegetarian & Sides",
  },
{
    id: 11,
    name: { 
      en: "Stuffed Cabbage", 
      ar: "محشي كرنب" 
    },
    description: { 
      en: "Tender cabbage leaves stuffed with a seasoned rice and herb mixture — price per pound", 
      ar: "أوراق الكرنب الطرية المحشوة بخلطة الأرز والأعشاب المتبلة — السعر للباوند" 
    },
    price: "$20",
    image: "/menu/11.webp",
    orderImage: "/order/11.webp",
    category: "Vegetarian & Sides",
  },
  {
    id: 12,
    name: { 
      en: "Shish Tawook", 
      ar: "شيش طاووق" 
    },
    description: { 
      en: "Skewers of marinated chicken breast grilled with a blend of garlic and Middle Eastern spices — price per pound", 
      ar: "قطع صدور دجاج متبلة بالثوم والبهارات الشرقية ومشوية على الأسياخ — السعر للباوند" 
    },
    price: "$20",
    image: "/menu/12.webp",
    orderImage: "/order/12.webp",
    category: "Chicken & Poultry",
  },

{
    id: 13,
    name: { 
      en: "Breaded Chicken (Chicken Pane)", 
      ar: "فراخ بانيه" 
    },
    description: { 
      en: "Crispy, breaded chicken breasts seasoned with a savory herb blend — price per pound", 
      ar: "صدور دجاج متبلة ومغطاة بالبقسماط المقرمش والبهارات — السعر للباوند" 
    },
    price: "$20",
    image: "/menu/13.webp",
    orderImage: "/order/13.webp",
    category: "Chicken & Poultry",
  },

  {
    id: 14,
    name: { 
      en: "Meat Sambousek", 
      ar: "سمبوسة لحمة" 
    },
    description: { 
      en: "Crispy pastry pockets filled with seasoned minced meat — price per piece", 
      ar: "عجينة سمبوسة مقرمشة محشوة باللحم المفروم المتبل — السعر للقطعة" 
    },
    price: "$1.75",
    image: "/menu/14.webp",
    orderImage: "/order/14.webp",
    category: "Meat",
  },
  {
    id: 15,
    name: { 
      en: "Cheese Sambousek", 
      ar: "سمبوسة جبنة" 
    },
    description: { 
      en: "Golden fried pastry filled with a blend of premium melted cheeses — price per piece", 
      ar: "عجينة سمبوسة مقلية محشوة بمزيج من الأجبان الفاخرة — السعر للقطعة" 
    },
    price: "$1.50",
    image: "/menu/15.webp",
    orderImage: "/order/15.webp",
    category: "Vegetarian & Sides",
  },
 {
    id: 16,
    name: { 
      en: "Macarona Bechamel", 
      ar: "مكرونة بشاميل" 
    },
    description: { 
      en: "Classic Egyptian pasta layers with seasoned minced meat and creamy bechamel sauce", 
      ar: "مكرونة فرن كلاسيكية بطبقات اللحم المفروم المتبل وصلصة البشاميل الغنية" 
    },
    price: "S:$20 | M:$50 | L:$100",
    image: "/menu/16.webp",
    orderImage: "/order/16.webp",
    category: "Pasta",
  },

{
    id: 17,
    name: { 
      en: "Peas with Carrots and Meat", 
      ar: "بسلة بالجزر واللحمة" 
    },
    description: { 
      en: "Sweet peas and diced carrots simmered with tender beef in a rich tomato sauce", 
      ar: "بسلة خضراء مع قطع الجزر واللحم البقري المطهو في صلصة الطماطم الغنية" 
    },
    price: "$45",
    image: "/menu/17.webp",
    orderImage: "/order/17.webp",
    category: "Meat",
  },

{
    id: 18,
    name: { 
      en: "Basbousa", 
      ar: "بسبوسة" 
    },
    description: { 
      en: "Sweet semolina cake soaked in simple syrup and topped with nuts", 
      ar: "بسبوسة سميد حلوة مسقية بالشربات ومزينة بالمكسرات" 
    },
    price: "$30",
    image: "/menu/18.webp",
    orderImage: "/order/18.webp",
    category: "Desserts",
  },
{
    id: 19,
    name: { 
      en: "Fried Fish with Rice & Tahini", 
      ar: "سمك مقلي مع أرز وطحينة" 
    },
    description: { 
      en: "Crispy fried fish served with aromatic Egyptian rice and creamy tahini sauce", 
      ar: "سمك مقلي مقرمش يقدم مع الأرز المصري المبهر وسلطة الطحينة الغنية" 
    },
    price: "$20",
    image: "/menu/19.webp",
    orderImage: "/order/19.webp",
    category: "Seafood",
  },
{
    id: 20,
    name: { 
      en: "Kawaree (Cow Trotters)", 
      ar: "كوارع" 
    },
    description: { 
      en: "Slow-cooked, tender cow trotters in a rich, flavorful broth — a traditional Egyptian delicacy", 
      ar: "كوارع مطهوة ببطء حتى تمام النضج في شوربة غنية بالنكهات المصرية الأصيلة" 
    },
    price: "$50",
    image: "/menu/20.webp",
    orderImage: "/order/20.webp",
    category: "Meat",
  },
{
    id: 21,
    name: { 
      en: "Molokhia", 
      ar: "ملوخية" 
    },
    description: { 
      en: "Traditional Egyptian jute mallow soup prepared with garlic and coriander (Tasha)", 
      ar: "شوربة الملوخية المصرية التقليدية المحضرة بـ (الطشة) من الثوم والكزبرة" 
    },
    price: "$10",
    image: "/menu/21.webp",
    orderImage: "/order/21.webp",
    category: "Vegetarian & Sides",
  },
{
    id: 22,
    name: { 
      en: "Qatayef with Nuts", 
      ar: "قطايف بالمكسرات" 
    },
    description: { 
      en: "Sweet Middle Eastern pancakes folded and stuffed with a mix of crunchy nuts and syrup", 
      ar: "عجينة القطايف الهشة محشوة بمزيج من المكسرات المقرمشة والقطر (الشربات)" 
    },
    price: "$25",
    image: "/menu/22.webp",
    orderImage: "/order/22.webp",
    category: "Desserts",
  },
 {
    id: 23,
    name: { 
      en: "Kofta", 
      ar: "كفتة" 
    },
    description: { 
      en: "Juicy grilled minced meat seasoned with traditional Egyptian spices", 
      ar: "كفتة مشوية محضرة من اللحم المفروم المتبل بالبهارات المصرية التقليدية" 
    },
    price: "$25",
    image: "/menu/23.webp",
    orderImage: "/order/23.webp",
    category: "Meat",
  },
{
    id: 24,
    name: { 
      en: "Falafel Dough (Taameya Paste)", 
      ar: "عجينة طعمية" 
    },
    description: { 
      en: "Freshly prepared Egyptian falafel paste made from crushed fava beans and herbs, ready for frying", 
      ar: "عجينة طعمية طازجة محضرة من الفول المدشوش والأعشاب، جاهزة للقلي" 
    },
    price: "$5",
    image: "/menu/24.webp",
    orderImage: "/order/24.webp",
    category: "Vegetarian & Sides",
  },
  {
    id: 25,
    name: { 
      en: "Okra with Meat (Bamya)", 
      ar: "بامية باللحمة" 
    },
    description: { 
      en: "Baby okra cooked in a rich tomato sauce with tender pieces of beef and aromatic garlic", 
      ar: "بامية صغيرة مطهوة في صلصة الطماطم الغنية مع قطع اللحم البقري والثوم" 
    },
    price: "$50",
    image: "/menu/25.webp",
    orderImage: "/order/25.webp",
    category: "Meat",
  },
  {
    id: 26,
    name: { 
      en: "Feteer Meshaltet", 
      ar: "فطير مشلتت" 
    },
    description: { 
      en: "Traditional Egyptian layered flaky pastry, baked with rich ghee", 
      ar: "فطير شرقي طبقات هشة ومقرمشة مخبوزة بالسمن البلدي" 
    },
    price: "$30",
    image: "/menu/26.webp",
    orderImage: "/order/26.webp",
    category: "Vegetarian & Sides",
  },
  {
    id: 27,
    name: { 
      en: "Stuffed Feteer", 
      ar: "فطيرة محشية" 
    },
    description: { 
      en: "Savory Egyptian pastry stuffed with your choice of seasoned fillings", 
      ar: "فطيرة شرقية محشوة باختيارك من الحشوات المتبلة والغنية" 
    },
    price: "$30",
    image: "/menu/27.webp",
    orderImage: "/order/27.webp",
    category: "Vegetarian & Sides",
  },
  {
    id: 28,
    name: { 
      en: "Mixed Feteer", 
      ar: "فطيرة مشكلة" 
    },
    description: { 
      en: "Delicious Egyptian pastry with a mix of various savory toppings and cheeses", 
      ar: "فطيرة شرقية غنية بمزيج من الحشوات المتنوعة والأجبان" 
    },
    price: "$30",
    image: "/menu/28.webp",
    orderImage: "/order/28.webp",
    category: "Vegetarian & Sides",
  },

{
    id: 29,
    name: { 
      en: "Grilled Chicken", 
      ar: "فرخة مشوية" 
    },
    description: { 
      en: "Whole chicken marinated in a special blend of herbs and spices, grilled to perfection", 
      ar: "دجاجة كاملة متبلة بخلطة الأعشاب والبهارات الخاصة ومشوية بعناية" 
    },
    price: "$25",
    image: "/menu/29.webp",
    orderImage: "/order/29.webp",
    category: "Chicken & Poultry",
  },
{
    id: 30,
    name: { 
      en: "Stuffed Pigeon (Hamam Mahshi)", 
      ar: "حمام محشي" 
    },
    description: { 
      en: "Traditional Egyptian pigeon stuffed with seasoned rice or grits (Freek) and aromatic herbs", 
      ar: "حمام مصري تقليدي محشو بخلطة الأرز أو الفريك المتبلة بالأعشاب العطرية" 
    },
    price: "$60",
    image: "/menu/30.webp",
    orderImage: "/order/30.webp",
    category: "Chicken & Poultry",
  },
  {
    id: 31,
    name: { 
      en: "Stuffed Chicken", 
      ar: "فرخة محشية" 
    },
    description: { 
      en: "Whole chicken stuffed with seasoned rice or grits (Freek) and roasted to golden perfection", 
      ar: "دجاجة كاملة محشوة بخلطة الأرز أو الفريك المتبلة ومحمرة لتكتسب اللون الذهبي" 
    },
    price: "$30",
    image: "/menu/31.webp",
    orderImage: "/order/31.webp",
    category: "Chicken & Poultry",
  },

  {
    id: 32,
    name: { 
      en: "Stuffed Duck", 
      ar: "بط محشي" 
    },
    description: { 
      en: "Whole roasted duck stuffed with seasoned rice or grits (Freek) and flavored with Middle Eastern spices", 
      ar: "بطة كاملة محمرة محشوة بخلطة الأرز أو الفريك المتبلة بالبهارات الشرقية" 
    },
    price: "$60",
    image: "/menu/32.webp",
    orderImage: "/order/32.webp",
    category: "Chicken & Poultry",
  },
  {
    id: 33,
    name: { 
      en: "Egyptian Rice", 
      ar: "أرز مصري" 
    },
    description: { 
      en: "Traditional white rice cooked with vermicelli or plain, seasoned to perfection", 
      ar: "أرز مصري أبيض تقليدي مطهو بالشعيرية أو سادة متبل بعناية" 
    },
    price: "$10",
    image: "/menu/33.webp",
    orderImage: "/order/33.webp",
    category: "Vegetarian & Sides",
  },
  {
    id: 34,
    name: { 
      en: "Moussaka", 
      ar: "مسقعة" 
    },
    description: { 
      en: "Traditional Egyptian dish made with fried eggplant, bell peppers, and a savory tomato garlic sauce", 
      ar: "طبق مصري تقليدي مكون من الباذنجان المقلي والفلفل الرومي في صلصة الطماطم المتبلة بالثوم" 
    },
    price: "$25",
    image: "/menu/34.webp",
    orderImage: "/order/34.webp",
    category: "Vegetarian & Sides",
  },
  {
    id: 35,
    name: { 
      en: "Meat Tagine", 
      ar: "طاجن باللحمة" 
    },
    description: { 
      en: "A slow-cooked traditional Egyptian clay pot of tender meat pieces in a rich, aromatic sauce", 
      ar: "طاجن فخار مصري تقليدي من قطع اللحم المطهوة ببطء في صلصة غنية وشهية" 
    },
    price: "$30",
    image: "/menu/35.webp",
    orderImage: "/order/35.webp",
    category: "Meat",
  },

  {
    id: 36,
    name: { 
      en: "Shrimp", 
      ar: "جمبري" 
    },
    description: { 
      en: "Fresh shrimp prepared to your choice, grilled or fried with special Egyptian seafood spices", 
      ar: "جمبري طازج محضر حسب اختيارك، مشوي أو مقلي بتتبيلة بهارات السمك المصرية الخاصة" 
    },
    price: "$35",
    image: "/menu/36.webp",
    orderImage: "/order/36.webp",
    category: "Seafood",
  },
  {
    id: 37,
    name: { 
      en: "Hawawshi", 
      ar: "حواوشي" 
    },
    description: { 
      en: "Traditional Egyptian pita bread stuffed with seasoned minced meat and baked until crispy", 
      ar: "خبز بلدي محشو باللحم المفروم المتبل ومشوي حتى القرمشة" 
    },
    price: "$15",
    image: "/menu/37.webp",
    orderImage: "/order/37.webp",
    category: "Meat",
  },
];


