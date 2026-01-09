
export const WHATSAPP_RESERVATION_NUMBER = '+91 8790200321';

export const signatureDishes = [
  {
    name: 'Saffron Risotto',
    description: 'Creamy Arborio rice infused with saffron, topped with gold leaf.',
    imageId: 'dish-1',
  },
  {
    name: 'Pan-Seared Scallops',
    description: 'Served with a citrus beurre blanc and asparagus spears.',
    imageId: 'dish-2',
  },
  {
    name: 'Deconstructed Tiramisu',
    description: 'An artistic take on the classic, with espresso foam and mascarpone quenelle.',
    imageId: 'dish-3',
  },
];

export const menu = {
  appetizers: [
    {
      name: 'Truffle Arancini',
      description: 'Fried risotto balls with a molten mozzarella core and truffle aioli.',
      price: '18',
      isSpecial: true,
      imageId: 'menu-appetizer-1',
    },
    {
      name: 'Burrata Caprese',
      description: 'Fresh burrata, heirloom tomatoes, basil pesto, and balsamic glaze.',
      price: '16',
      isSpecial: false,
      imageId: 'dish-1'
    },
  ],
  mainCourses: [
    {
      name: 'Filet Mignon',
      description: '8oz center-cut tenderloin with potato gratin and red wine reduction.',
      price: '55',
      isSpecial: false,
      imageId: 'menu-main-1',
    },
    {
      name: 'Lobster Thermidor',
      description: 'A classic preparation with a creamy mustard sauce, broiled to perfection.',
      price: '75',
      isSpecial: true,
      imageId: 'menu-special-1',
    },
     {
      name: 'Wild Mushroom Gnocchi',
      description: 'Handmade potato gnocchi with a medley of wild mushrooms in a parmesan cream sauce.',
      price: '34',
      isSpecial: false,
      imageId: 'dish-2',
    },
  ],
  desserts: [
    {
      name: 'Golden Chocolate Sphere',
      description: 'A chocolate sphere melted tableside with hot caramel to reveal a passion fruit mousse.',
      price: '22',
      isSpecial: true,
      imageId: 'menu-dessert-1',
    },
    {
      name: 'Classic Crème Brûlée',
      description: 'Rich custard base with a contrasting layer of hard caramel.',
      price: '14',
      isSpecial: false,
      imageId: 'dish-3',
    },
  ],
};

export const testimonials = [
  {
    name: 'Eleanor Vance',
    quote: 'An absolutely transcendent dining experience. Every dish was a masterpiece, and the atmosphere was simply enchanting. A night to remember!',
    imageId: 'testimonial-avatar-1',
  },
  {
    name: 'Marcus Thorne',
    quote: 'The attention to detail at Anandobrahma is second to none. From the impeccable service to the sublime flavors, it redefines fine dining.',
    imageId: 'testimonial-avatar-2',
  },
];
