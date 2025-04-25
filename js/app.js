// div animation 
const animation = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
animation.reveal('.banner-container, .products, .product-flex,.product-title,.big-shop,.categories, .category-container ,.testimonials,.section-header,.underline2 , .heading2 , .container3, .boton', {delay: 200, origin: 'top'});
animation.reveal(' .shop-flex ', {delay: 200, origin: 'right'});
animation.reveal('.best-selling-content', {delay: 200, origin: 'left'});
animation.reveal('footer , .container6', {delay: 200, origin: 'bottom'});
