import './style.css'

// Helper function to get correct image path
const getImagePath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  return base + path.replace(/^\//, '');
};

// Menu data
const menuItems = [
  // PIZZE CLASSICHE
  { id: 1, name: 'Fornarina', description: 'Olio, sale, rosmarino', price: '3.50', category: 'Pizze Classiche', image: '/pizze/fornarina.jpeg' },
  { id: 2, name: 'Marinara', description: 'Pomodoro, olio, aglio, prezzemolo', price: '5.00', category: 'Pizze Classiche', image: '/pizze/marinara.jpeg' },
  { id: 3, name: 'Margherita', description: 'Pomodoro, mozzarella', price: '6.00', category: 'Pizze Classiche', image: '/pizze/margherita.jpeg' },
  { id: 4, name: 'Napoli', description: 'Pomodoro, mozzarella, acciughe', price: '7.00', category: 'Pizze Classiche', image: '/pizze/napoli.jpeg' },
  { id: 5, name: 'Romana', description: 'Pomodoro, mozzarella, acciughe, capperi, origano', price: '7.50', category: 'Pizze Classiche', image: '/pizze/romana.jpeg' },
  { id: 6, name: 'Wurstel', description: 'Pomodoro, mozzarella, wurstel', price: '7.50', category: 'Pizze Classiche', image: '/pizze/wurstel.jpeg' },
  { id: 7, name: 'Cotto', description: 'Pomodoro, mozzarella, prosciutto cotto', price: '7.50', category: 'Pizze Classiche', image: '/pizze/cotto.jpeg' },
  { id: 8, name: 'Speck', description: 'Pomodoro, mozzarella, speck', price: '7.50', category: 'Pizze Classiche', image: '/pizze/speck.jpeg' },
  { id: 9, name: 'Funghi Freschi', description: 'Pomodoro, mozzarella, funghi freschi', price: '8.00', category: 'Pizze Classiche', image: '/pizze/funghi-freschi.jpeg' },
  { id: 9, name: 'Funghi Trifolati', description: 'Pomodoro, mozzarella, funghi trifolati', price: '8.00', category: 'Pizze Classiche', image: '/pizze/funghi-trifolati.jpeg' },
  { id: 10, name: 'Funghi Porcini', description: 'Pomodoro, mozzarella, funghi porcini', price: '9.00', category: 'Pizze Classiche', image: '/pizze/funghi-porcini.jpeg' },
  { id: 11, name: 'Salsiccia e Cipolla', description: 'Pomodoro, mozzarella, salsiccia, cipolla', price: '8.50', category: 'Pizze Classiche', image: '/pizze/salsiccia-cipolla.jpeg' },
  { id: 12, name: 'Stracchino e Rucola', description: 'Mozzarella, stracchino, rucola', price: '8.00', category: 'Pizze Classiche', image: '/pizze/stracchino-rucola.jpeg' },
  { id: 13, name: 'Salame Piccante', description: 'Pomodoro, mozzarella, salame piccante', price: '8.50', category: 'Pizze Classiche', image: '/pizze/salame-piccante.jpeg' },
  { id: 14, name: 'Cotto e Funghi', description: 'Pomodoro, mozzarella, prosciutto cotto, funghi freschi', price: '8.50', category: 'Pizze Classiche', image: '/pizze/cotto-funghi.jpeg' },
  { id: 15, name: 'Bufala', description: 'Pomodoro, mozzarella, bufala', price: '9.00', category: 'Pizze Classiche', image: '/pizze/bufala.jpeg' },
  { id: 16, name: 'Funghi e Salsiccia', description: 'Pomodoro, mozzarella, funghi freschi, salsiccia', price: '8.50', category: 'Pizze Classiche', image: '/pizze/funghi-salsiccia.jpeg' },
  { id: 17, name: 'Prosciutto Crudo', description: 'Pomodoro, mozzarella, prosciutto crudo o bresaola', price: '8.00', category: 'Pizze Classiche', image: '/pizze/prosciutto-crudo.jpeg' },
  { id: 18, name: 'Quattro Formaggi', description: 'Mozzarella, scamorza, gorgonzola, bufala', price: '9.00', category: 'Pizze Classiche', image: '/pizze/quattro-formaggi.jpeg' },
  { id: 19, name: 'Tonno e Cipolla', description: 'Pomodoro, mozzarella, tonno, cipolla', price: '8.50', category: 'Pizze Classiche', image: '/pizze/tonno-cipolla.jpeg' },
  { id: 20, name: 'Capricciosa', description: 'Pomodoro, mozzarella, prosciutto cotto, funghi freschi, carciofi', price: '9.00', category: 'Pizze Classiche', image: '/pizze/capricciosa.jpeg' },
  { id: 21, name: 'Quattro Stagioni', description: 'Pomodoro, mozzarella, prosciutto cotto, funghi freschi, carciofi, olive', price: '9.00', category: 'Pizze Classiche', image: '/pizze/quattro-stagioni.jpeg' },
  { id: 22, name: 'Calzone Nutella', description: 'Nutella', price: '7.00', category: 'Pizze Classiche', image: '/pizze/calzone-nutella.jpg' },
  { id: 23, name: 'Calzone Nutella e Cocco', description: 'Nutella e cocco', price: '7.50', category: 'Pizze Classiche', image: '/pizze/calzone-nutella-cocco.jpeg' },
  
  // PIZZE SPECIALI
  { id: 24, name: 'Americana', description: 'Pomodoro, mozzarella, wurstel, patatine fritte*', price: '10.00', category: 'Pizze Speciali', image: '/pizze/americana.jpeg' },
  { id: 25, name: 'Pizza Patatine', description: 'Pomodoro, mozzarella, patatine fritte', price: '9.00', category: 'Pizze Speciali', image: '/pizze/patatine.jpeg' },
  { id: 26, name: 'Pizza Patate al Forno', description: 'Pomodoro, mozzarella, patate al forno', price: '9.00', category: 'Pizze Speciali', image: '/pizze/patate-forno.jpeg' },
  { id: 27, name: 'Dieghex', description: 'Pomodoro, mozzarella, salsiccia, bufala, origano, olio piccante', price: '10.00', category: 'Pizze Speciali', image: '/pizze/dieghex.jpeg' },
  { id: 27, name: 'Fantasia', description: 'A fantasia del Pizzaiolo', price: '11.00', category: 'Pizze Speciali', image: '/pizze/fantasia.jpeg' },
  { id: 28, name: 'London', description: 'Pomodoro, mozzarella, bacon, patatine fritte*', price: '10.00', category: 'Pizze Speciali', image: '/pizze/london.jpeg' },
  { id: 29, name: 'Lucifero', description: 'Pomodoro, mozzarella, salame piccante, salsiccia, peperoni, salsa piccante', price: '10.50', category: 'Pizze Speciali', image: '/pizze/lucifero.jpeg' },
  { id: 30, name: 'Messicana', description: 'Pomodoro, mozzarella, salsiccia, patatine fritte*', price: '10.00', category: 'Pizze Speciali', image: '/pizze/messicana.png' },
  { id: 31, name: 'Pizza Kebab', description: 'Pomodoro, mozzarella, kebab di tacchino*, insalata, cipolla, pendolini, salsa yogurt', price: '12.00', category: 'Pizze Speciali', image: '/pizze/kebab.jpeg' },
  { id: 32, name: 'Pizza Pazza', description: 'Pomodoro, mozzarella, cotto, wurstel, salame piccante, salsiccia', price: '11.00', category: 'Pizze Speciali', image: '/pizze/pazza.jpeg' },
  { id: 33, name: 'Sportiva', description: 'Pomodoro, mozzarella, prosciutto crudo, rucola, grana', price: '11.00', category: 'Pizze Speciali', image: '/pizze/sportiva.jpeg' },
  { id: 34, name: 'Vegetariana', description: 'Mozzarella, pendolini, melanzane*, zucchine*, funghi freschi', price: '9.00', category: 'Pizze Speciali', image: '/pizze/vegetariana.jpeg' },
  { id: 35, name: 'Verdure Grigliate', description: 'Pomodoro, mozzarella, zucchine*, melanzane*, peperoni*', price: '9.00', category: 'Pizze Speciali', image: '/pizze/verdure-grigliate.jpeg' },
  
  // PANINI
  { id: 36, name: 'Hamburger', description: 'Svizzera 130g, cipolla stufata, pomodoro, insalata, ketchup, maionese', price: '7.50', category: 'Panini', image: '/panini/hamburger.jpeg' },
  { id: 37, name: 'Cheeseburger', description: 'Svizzera 130g, fontina, pomodoro, insalata, ketchup, maionese', price: '8.00', category: 'Panini', image: '/panini/cheeseburger.jpeg' },
  { id: 38, name: 'Bacon Burger', description: 'Svizzera 130g, bacon, cipolla stufata, pomodoro, insalata, ketchup, maionese', price: '8.50', category: 'Panini', image: '/panini/bacon-burger.jpeg' },
  { id: 39, name: 'Bacon Cheeseburger', description: 'Svizzera 130g, bacon, fontina, cipolla stufata, pomodoro, insalata, ketchup, maionese', price: '9.00', category: 'Panini', image: '/panini/bacon-cheeseburger.jpeg' },
  { id: 40, name: 'Chicken Burger', description: 'Cotoletta di pollo, pomodoro, insalata, ketchup, maionese', price: '9.00', category: 'Panini', image: '/panini/chicken-burger.jpeg' },
  { id: 41, name: 'Mas Burger', description: 'Hamburger con doppia carne', price: '10.50', category: 'Panini', image: '/panini/mas-burger.jpeg' },
  { id: 42, name: 'Mas Cheeseburger', description: 'Cheeseburger con doppia carne', price: '11.00', category: 'Panini', image: '/panini/mas-cheeseburger.jpeg' },
  { id: 43, name: 'Mas Bacon Burger', description: 'Bacon burger con doppia carne', price: '11.50', category: 'Panini', image: '/panini/mas-bacon-burger.jpeg' },
  { id: 44, name: 'Mas Bacon Cheeseburger', description: 'Bacon cheeseburger con doppia carne', price: '12.00', category: 'Panini', image: '/panini/mas-bacon-cheeseburger.jpeg' },
  { id: 45, name: 'Hot Dog', description: 'Wurstel, ketchup, maionese, senape', price: '7.00', category: 'Panini', image: '/panini/hot-dog.jpeg' },
  { id: 46, name: 'Cheese Dog', description: 'Wurstel, fontina, ketchup, maionese, senape', price: '7.50', category: 'Panini', image: '/panini/cheese-dog.jpg' },
  { id: 47, name: 'Mas Dog', description: 'Wurstel, bacon, fontina, cipolla stufata, ketchup, maionese, senape', price: '8.00', category: 'Panini', image: '/panini/mas-dog.jpg' },
  
  // INSALATE
  { id: 48, name: 'Insalata Amami', description: 'Insalata verde, radicchio, rucola, mozzarella, pendolini, gamberi*, tonno', price: '9.00', category: 'Insalate', image: '/insalate/amami.jpeg' },
  { id: 49, name: 'Insalata di Pollo', description: 'Insalata verde, rucola, mozzarella, pendolini, straccetti di pollo', price: '9.00', category: 'Insalate', image: '/insalate/pollo.jpeg' },
  
  // FRITTI
  { id: 50, name: 'Patatine Fritte', description: 'Porzione di patatine fritte', price: '4.00', category: 'Fritti', image: '/fritti/patatine.jpeg' },
  { id: 51, name: 'Olive Ascolane (6pz.)', description: 'Olive all\'ascolana fritte', price: '5.00', category: 'Fritti', image: '/fritti/olive-ascolane.jpeg' },
  { id: 52, name: 'Cipolle Fritte (6pz.)', description: 'Anelli di cipolla fritti', price: '4.50', category: 'Fritti', image: '/fritti/cipolle.jpeg' },
  { id: 53, name: 'Mozzarelle Fritte (6pz.)', description: 'Mozzarelle impanate e fritte', price: '5.00', category: 'Fritti', image: '/fritti/mozzarelle.jpeg' },
  { id: 54, name: 'Crocchette di Pollo (5pz.)', description: 'Crocchette di pollo fritte', price: '5.00', category: 'Fritti', image: '/fritti/crocchette-pollo.jpeg' },
  { id: 55, name: 'Jalapenos Cheese (3pz.)', description: 'Jalapenos ripieni di formaggio', price: '4.00', category: 'Fritti', image: '/fritti/jalapenos.jpeg' },
  { id: 56, name: 'Crocchette di Pulled Pork (5pz)', description: 'Crocchette di pulled pork', price: '6.00', category: 'Fritti', image: '/fritti/crocchette-pork.jpeg' },
  { id: 57, name: 'Chicken Mas Nuggets', description: '4pz', price: '5.00', category: 'Fritti', image: '/fritti/chicken-mas-nuggets-4.jpg' },
  { id: 58, name: 'Chicken Mas Nuggets', description: '6pz', price: '6.50', category: 'Fritti', image: '/fritti/chicken-mas-nuggets-6.jpg' },
  { id: 59, name: 'Chicken Mas Nuggets', description: '9pz', price: '9.00', category: 'Fritti', image: '/fritti/chicken-mas-nuggets-9.jpg' },
  { id: 60, name: 'Chicken Mas Nuggets', description: '20pz', price: '17.00', category: 'Fritti', image: '/fritti/chicken-mas-nuggets-20.jpg' },
  
  // BABY MENÙ
  { id: 61, name: 'Margherita Baby + Bibita', description: 'Pomodoro, mozzarella + bibita a scelta', price: '10.00', category: 'Baby Menù', image: '/baby/margherita.jpeg' },
  { id: 62, name: 'Wurstel Baby + Bibita', description: 'Pomodoro, mozzarella, wurstel + bibita a scelta', price: '10.00', category: 'Baby Menù', image: '/baby/wurstel.jpeg' },
  { id: 63, name: 'Baby Burger + Patatine + Bibita', description: 'Carne, ketchup, maionese, 1/2 porzione di patatine + bibita', price: '10.00', category: 'Baby Menù', image: '/baby/burger.jpeg' },
  { id: 64, name: 'Hot Dog + Patatine + Bibita', description: 'Wurstel, ketchup, maionese, 1/2 porzione di patatine + bibita', price: '10.00', category: 'Baby Menù', image: '/baby/hot-dog.jpeg' },
  { id: 65, name: 'Crocchette di Pollo + Patatine + Bibita', description: 'Crocchette di pollo, 1/2 porzione di patatine + bibita', price: '10.00', category: 'Baby Menù', image: '/baby/crocchette.jpeg' },
  
  // BIBITE
  { id: 66, name: 'Coca Cola Lattina 33cl', description: 'Coca Cola', price: '3.00', category: 'Bibite', image: '/bibite/coca-cola-lattina.jpeg' },
  { id: 67, name: 'Coca Zero Lattina 33cl', description: 'Coca Cola Zero', price: '3.00', category: 'Bibite', image: '/bibite/coca-zero-lattina.jpeg' },
  { id: 68, name: 'Coca No Caffeina Lattina 33cl', description: 'Coca Cola senza caffeina', price: '3.00', category: 'Bibite', image: '/bibite/coca-nocaff-lattina.jpeg' },
  { id: 69, name: 'Fanta Lattina 33cl', description: 'Fanta', price: '3.00', category: 'Bibite', image: '/bibite/fanta-lattina.jpeg' },
  { id: 70, name: 'Sprite Lattina 33cl', description: 'Sprite', price: '3.00', category: 'Bibite', image: '/bibite/sprite-lattina.jpeg' },
  { id: 71, name: 'Coca Cola Bottiglia 45cl', description: 'Coca Cola', price: '3.50', category: 'Bibite', image: '/bibite/coca-cola-45.jpeg' },
  { id: 72, name: 'Fanta Bottiglia 45cl', description: 'Fanta', price: '3.50', category: 'Bibite', image: '/bibite/fanta-45.jpeg' },
  { id: 73, name: 'The Limone 50cl', description: 'The al limone', price: '3.50', category: 'Bibite', image: '/bibite/the-limone.jpeg' },
  { id: 74, name: 'The Pesca 50cl', description: 'The alla pesca', price: '3.50', category: 'Bibite', image: '/bibite/the-pesca.jpeg' },
  { id: 75, name: 'Coca Cola Bottiglia 1,5l', description: 'Coca Cola', price: '4.50', category: 'Bibite', image: '/bibite/coca-cola-15.jpeg' },
  { id: 76, name: 'Coca Zero Bottiglia 1,5l', description: 'Coca Cola Zero', price: '4.50', category: 'Bibite', image: '/bibite/coca-zero-15.jpeg' },
  { id: 77, name: 'Fanta Bottiglia 1,5l', description: 'Fanta', price: '4.50', category: 'Bibite', image: '/bibite/fanta-15.jpeg' },
  { id: 78, name: 'Sprite Bottiglia 1,5l', description: 'Sprite', price: '4.50', category: 'Bibite', image: '/bibite/sprite-15.jpeg' },
  { id: 79, name: 'Beck\'s 33cl', description: 'Birra Beck\'s', price: '3.50', category: 'Bibite', image: '/bibite/becks-33.jpeg' },
  { id: 80, name: 'Moretti 33cl', description: 'Birra Moretti', price: '3.50', category: 'Bibite', image: '/bibite/moretti-33.jpeg' },
  { id: 81, name: 'Heineken 33cl', description: 'Birra Heineken', price: '3.50', category: 'Bibite', image: '/bibite/heineken-33.jpeg' },
  { id: 82, name: 'Ichnusa Non Filtrata 33cl', description: 'Ichnusa non filtrata', price: '4.00', category: 'Bibite', image: '/bibite/ichnusa.jpeg' },
  { id: 83, name: 'Beck\'s 66cl', description: 'Birra Beck\'s', price: '4.50', category: 'Bibite', image: '/bibite/becks-66.jpeg' },
  { id: 84, name: 'Moretti 66cl', description: 'Birra Moretti', price: '4.50', category: 'Bibite', image: '/bibite/moretti-66.jpeg' },
  { id: 85, name: 'Heineken 66cl', description: 'Birra Heineken', price: '4.50', category: 'Bibite', image: '/bibite/heineken-66.jpeg' },
  { id: 86, name: 'Blanche de Namur 75cl', description: 'Blanche de Namur', price: '9.00', category: 'Bibite', image: '/bibite/blanche.jpeg' },
  { id: 91, name: 'Vino Bianco', description: 'Ca\' Perdicchi Maestrale', price: '10.00', category: 'Bibite', image: '/bibite/vino-bianco.jpeg' },
  { id: 92, name: 'Vino Rosso', description: 'Ca\' Perdicchi Maestrale', price: '10.00', category: 'Bibite', image: '/bibite/vino-rosso.jpeg' },
  { id: 93, name: 'Vino Bianco Frizzante', description: 'Brusa Rubicone IGT', price: '10.00', category: 'Bibite', image: '/bibite/vino-frizzante.jpeg' },
  { id: 87, name: 'Acqua Naturale 50cl', description: 'Acqua naturale', price: '1.20', category: 'Bibite', image: '/bibite/acqua-naturale-50.jpg' },
  { id: 88, name: 'Acqua Frizzante 50cl', description: 'Acqua frizzante', price: '1.20', category: 'Bibite', image: '/bibite/acqua-frizzante-50.jpg' },
  { id: 89, name: 'Acqua Naturale 1l', description: 'Acqua naturale', price: '2.40', category: 'Bibite', image: '/bibite/acqua-naturale-1l.jpg' },
  { id: 90, name: 'Acqua Frizzante 1l', description: 'Acqua frizzante', price: '2.40', category: 'Bibite', image: '/bibite/acqua-frizzante-1l.jpg' }
];

// Render menu items
function renderMenu(filterCategory = 'all') {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = '';
  
  const filteredItems = filterCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filterCategory);
  
  filteredItems.forEach(item => {
    const menuCard = document.createElement('div');
    menuCard.className = 'menu-item bg-white rounded-2xl overflow-hidden transform transition-all hover:scale-105 border-2 border-transparent hover:border-brand-dark cursor-pointer';
    menuCard.setAttribute('data-category', item.category);
    menuCard.setAttribute('data-id', item.id);
    menuCard.style.transition = 'transform 0.3s';
    
    menuCard.innerHTML = `
      <div class="relative overflow-hidden bg-gray-200 aspect-square">
        <img 
          src="${getImagePath(item.image)}" 
          alt="${item.name}" 
          class="w-full h-full object-cover"
          onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f3f4f6%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23dd2b1c%22 font-family=%22Arial%22 font-size=%2220%22 font-weight=%22bold%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${item.name}%3C/text%3E%3C/svg%3E'"
        >
        <div class="absolute top-0 right-0 bg-brand-red text-white px-3 py-1.5 text-sm lg:text-base font-bold shadow-lg rounded-full">
          ${item.price}
        </div>
        <div class="absolute bottom-0 left-0 bg-brand-dark text-white px-4 py-1.5 text-sm font-semibold rounded-full">
          <span class="lg:hidden">${item.name}</span>
          <span class="hidden lg:inline">${item.category}</span>
        </div>
        <button class="order-btn hidden lg:flex items-center justify-center bg-brand-red text-white px-6 py-3 rounded-full font-semibold shadow-2xl transition-all duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none">
          Ordina in App
        </button>
      </div>
      <div class="p-5 bg-white relative">
        <h3 class="hidden lg:block text-base lg:text-xl font-bold text-brand-dark mb-2 leading-tight">${item.name}</h3>
        <p class="menu-description hidden lg:block text-gray-600 text-sm leading-relaxed transition-all duration-300">${item.description}</p>
      </div>
    `;
    
    // Toggle description and button on mobile/desktop
    let fadeOutTimer;
    menuCard.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        // Mobile: toggle description only
        const description = menuCard.querySelector('.menu-description');
        description.classList.toggle('hidden');
      } else {
        // Desktop: show button with fade effect, then auto-hide after 2 seconds
        const orderBtn = menuCard.querySelector('.order-btn');
        
        // Clear any existing timer
        if (fadeOutTimer) {
          clearTimeout(fadeOutTimer);
        }
        
        // Show button
        orderBtn.classList.remove('opacity-0', 'pointer-events-none');
        orderBtn.classList.add('opacity-100');
        
        // Auto-hide after 2 seconds
        fadeOutTimer = setTimeout(() => {
          orderBtn.classList.remove('opacity-100');
          orderBtn.classList.add('opacity-0', 'pointer-events-none');
        }, 2000);
      }
    });
    
    // Redirect to app section when button is clicked
    const orderBtn = menuCard.querySelector('.order-btn');
    if (orderBtn) {
      orderBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card click event
        window.location.hash = '#download';
      });
    }

    // Price/description icons are decorative — no added behavior

    menuContainer.appendChild(menuCard);
  });
}

// Splash screen
window.addEventListener('load', () => {
  setTimeout(() => {
    const splashScreen = document.getElementById('splash-screen');
    const splashLogo = splashScreen ? splashScreen.querySelector('img') : null;

    // start fade (we'll animate logo by shrinking it into the hero logo)
    // Note: do NOT fade the whole overlay immediately to avoid showing page white background —
    // we will fade the overlay smoothly AFTER the logo transition completes.
    if (splashLogo) {
      // Prefer reduced-motion users: skip animation
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (splashScreen) splashScreen.style.display = 'none';
      } else {
        const heroLogo = document.getElementById('hero-logo');
        if (heroLogo) {
          // compute scale and translation to move splash logo to hero logo
          const splashRect = splashLogo.getBoundingClientRect();
          const heroRect = heroLogo.getBoundingClientRect();

          const scale = (heroRect.width / splashRect.width);
          const splashCenterX = splashRect.left + splashRect.width / 2;
          const splashCenterY = splashRect.top + splashRect.height / 2;
          const heroCenterX = heroRect.left + heroRect.width / 2;
          const heroCenterY = heroRect.top + heroRect.height / 2;

          const translateX = heroCenterX - splashCenterX;
          const translateY = heroCenterY - splashCenterY;

          // prepare: make overlay transparent so page can be painted underneath
          if (splashScreen) splashScreen.style.background = 'transparent';

          // hide the hero logo until the splash logo reaches it to make the transition seamless
          heroLogo.style.animation = 'none';
          heroLogo.style.transition = 'none';
          heroLogo.style.opacity = '0';
          heroLogo.style.visibility = 'hidden';
          heroLogo.style.transform = 'none';

          // mobile/desktop tuned timings and GPU-friendly transforms
          const isMobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
          const animationDuration = isMobile ? 600 : 800; // ms
          const earlyRevealMs = isMobile ? 120 : 0; // small early reveal on mobile to avoid paint lag
          const revealDelay = Math.max(0, animationDuration - earlyRevealMs);

          // If hero logo is off-screen on mobile, bring it into view quickly (no smooth scroll to avoid delays)
          if (isMobile) {
            const r = heroLogo.getBoundingClientRect();
            if (r.top > window.innerHeight || r.bottom < 0) {
              heroLogo.scrollIntoView({ behavior: 'auto', block: 'center' });
            }
          }

          // set up transition and trigger it (use translate3d for GPU acceleration)
          splashLogo.style.willChange = 'transform';
          splashLogo.style.transition = `transform ${animationDuration}ms cubic-bezier(.2,.8,.2,1)`;

          // ensure styles applied before the transform
          void splashLogo.offsetWidth;

          // apply transform: move and scale toward hero (keep splash opaque for seamless effect)
          splashLogo.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
          splashLogo.style.opacity = '1';

          // reveal hero a bit earlier on mobile to mitigate paint lag; desktop reveal at the end
          let revealTimeout = setTimeout(() => {
            if (heroLogo) {
              heroLogo.style.visibility = 'visible';
              heroLogo.style.opacity = '1';
              // force paint/layout so the logo is rasterized before we hide the overlay
              void heroLogo.offsetWidth;
              heroLogo.style.willChange = 'transform, opacity';
            }
          }, revealDelay);


          const onTransitionEnd = () => {
            // reveal hero and hide splash IMMEDIATELY WITHOUT TRANSITION to avoid any final fade
            if (heroLogo) {
              heroLogo.style.visibility = 'visible';
              heroLogo.style.opacity = '1';
              heroLogo.style.willChange = 'transform, opacity';
            }
            if (splashScreen) {
              // hide via visibility to avoid layout repaint flashes, then remove from flow shortly after
              splashScreen.style.visibility = 'hidden';
              setTimeout(() => {
                if (splashScreen) splashScreen.style.display = 'none';
              }, 20);
            }
            splashLogo.removeEventListener('transitionend', onTransitionEnd);
          };
          splashLogo.addEventListener('transitionend', onTransitionEnd);

          // fallback: ensure splash is removed after a maximum (animationDuration + buffer)
          const fallbackTimeoutMs = animationDuration + 1000;
          const fallbackTimeout = setTimeout(() => {
            clearTimeout(revealTimeout);
            if (heroLogo) {
              heroLogo.style.visibility = 'visible';
              heroLogo.style.opacity = '1';
            }
            if (splashScreen && splashScreen.style.display !== 'none') {
              splashScreen.style.visibility = 'hidden';
              setTimeout(() => { if (splashScreen) splashScreen.style.display = 'none'; }, 20);
            }
            splashLogo.removeEventListener('transitionend', onTransitionEnd);
            clearTimeout(fallbackTimeout);
          }, fallbackTimeoutMs);
        } else {
          // no hero logo found — hide splash after short delay
          setTimeout(() => {
            if (splashScreen) splashScreen.style.display = 'none';
          }, 600);
        }
      }
    } else {
      // fallback if no logo element
      setTimeout(() => {
        if (splashScreen) splashScreen.style.display = 'none';
      }, 1200);
    }
  }, 2000);
});

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});

// Show/hide mobile call button on scroll
const mobileCallBtn = document.getElementById('mobile-call-btn');
const appSection = document.getElementById('download');

window.addEventListener('scroll', () => {
  const appSectionTop = appSection.offsetTop;
  const appSectionBottom = appSectionTop + appSection.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  
  // Show button if scrolled past 100px AND not in the app section
  if (window.scrollY > 100 && (scrollPosition < appSectionTop || scrollPosition > appSectionBottom)) {
    mobileCallBtn.classList.remove('opacity-0', 'scale-0', 'pointer-events-none');
    mobileCallBtn.classList.add('opacity-100', 'scale-100');
  } else {
    mobileCallBtn.classList.remove('opacity-100', 'scale-100');
    mobileCallBtn.classList.add('opacity-0', 'scale-0', 'pointer-events-none');
  }
});

// Category filter functionality
document.querySelectorAll('.category-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active state
    document.querySelectorAll('.category-filter-btn').forEach(b => {
      b.classList.remove('active', 'bg-brand-red', 'text-white');
      b.classList.add('bg-gray-100', 'text-brand-dark');
    });
    
    btn.classList.add('active', 'bg-brand-red', 'text-white');
    btn.classList.remove('bg-gray-100', 'text-brand-dark');
    
    // Filter menu items
    const category = btn.getAttribute('data-category');
    renderMenu(category);
  });
});

// Navbar scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.classList.remove('shadow-lg');
    header.classList.add('shadow-md');
  } else {
    header.classList.remove('shadow-md');
    header.classList.add('shadow-lg');
  }
  
  lastScroll = currentScroll;
});

// Initialize
renderMenu();

// Fix anchor offset so the fixed header doesn't cover section titles (dynamic sizing)
function updateScrollMargin() {
  const header = document.querySelector('header');
  const menu = document.getElementById('menu');
  if (header && menu) {
    const offset = header.offsetHeight + 8; // small extra gap
    menu.style.scrollMarginTop = `${offset}px`;
  }
}
window.addEventListener('load', updateScrollMargin);
window.addEventListener('resize', updateScrollMargin);
updateScrollMargin();

// Emoji idle animation removed per user request


// Click handler for food emojis
foodEmojis.forEach(emoji => {
  emoji.addEventListener('click', function(e) {
    const itemId = this.dataset.itemId;
    const category = this.dataset.category;
    
    // Fade out emoji
    this.style.opacity = '0';
    
    setTimeout(() => {
      // Filter by category
      const categoryBtn = Array.from(document.querySelectorAll('.category-btn')).find(
        btn => btn.dataset.category === category
      );
      if (categoryBtn) {
        categoryBtn.click();
      }
      
      // Scroll to specific card
      setTimeout(() => {
        const card = document.querySelector(`[data-id="${itemId}"]`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Highlight effect
          card.style.transform = 'scale(1.05)';
          setTimeout(() => {
            card.style.transform = 'scale(1)';
          }, 300);
        }
      }, 300);
      
      // Fade emoji back in
      setTimeout(() => {
        this.style.opacity = '1';
      }, 2000);
    }, 500);
  });
});
