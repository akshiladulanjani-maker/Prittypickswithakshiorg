/* ========================= EDIT PRODUCTS HERE ========================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Blush Satin Slip Dress",
    category: "fashion",
    price: "$39.00",
    description: "An elegant satin piece with a soft, feminine finish.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-1",
    buttonText: "Shop find",
    badge: "Editor's pick",
    tags: ["dress", "fashion", "satin"]
  },

  {
    id: 2,
    name: "Pearl Mini Shoulder Bag",
    category: "fashion",
    price: "$29.00",
    description: "A pretty little bag for polished everyday looks.",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-2",
    buttonText: "View find",
    badge: "Trending",
    tags: ["bag", "accessories"]
  },

  {
    id: 3,
    name: "Gold Layered Necklace",
    category: "fashion",
    price: "$18.00",
    description: "A simple layered detail that instantly elevates an outfit.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-3",
    buttonText: "Shop find",
    badge: "Popular",
    tags: ["jewelry", "gold"]
  },

  {
    id: 4,
    name: "Cream Knit Cardigan",
    category: "fashion",
    price: "$42.00",
    description: "A soft neutral layer made for effortless styling.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-4",
    buttonText: "View find",
    badge: "New",
    tags: ["cardigan", "knit"]
  },

  {
    id: 5,
    name: "Dewy Glow Face Serum",
    category: "beauty",
    price: "$24.00",
    description: "A lightweight skincare pick for a fresh-looking glow.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-5",
    buttonText: "Shop beauty",
    badge: "Glow pick",
    tags: ["skincare", "serum"]
  },

  {
    id: 6,
    name: "Soft Glam Eyeshadow Palette",
    category: "beauty",
    price: "$32.00",
    description: "Easy neutral shades for soft everyday makeup looks.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-6",
    buttonText: "View beauty",
    badge: "Bestseller",
    tags: ["makeup", "eyes"]
  },

  {
    id: 7,
    name: "Velvet Matte Lip Tint",
    category: "beauty",
    price: "$16.00",
    description: "A comfortable lip colour with a soft matte finish.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-7",
    buttonText: "Shop beauty",
    badge: "Pretty pick",
    tags: ["lip", "makeup"]
  },

  {
    id: 8,
    name: "Rose Quartz Facial Roller",
    category: "beauty",
    price: "$19.00",
    description: "A beautiful little self-care addition to your routine.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-8",
    buttonText: "View beauty",
    badge: "Self-care",
    tags: ["skincare", "wellness"]
  },

  {
    id: 9,
    name: "Blush Satin Pillowcase Set",
    category: "home",
    price: "$25.00",
    description: "Soft, elegant pillowcases for a prettier bedroom.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-9",
    buttonText: "Shop home",
    badge: "Bedroom edit",
    tags: ["bedroom", "pillowcase"]
  },

  {
    id: 10,
    name: "Cloud Waffle Bedding Set",
    category: "home",
    price: "$58.00",
    description: "Textured neutral bedding for a calm, cozy space.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-10",
    buttonText: "View home",
    badge: "Cozy pick",
    tags: ["bedding", "bedroom"]
  },

  {
    id: 11,
    name: "Organic Ceramic Vase Trio",
    category: "home",
    price: "$34.00",
    description: "Minimal ceramic shapes that add warmth to a shelf or table.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-11",
    buttonText: "Shop home",
    badge: "Decor pick",
    tags: ["decor", "vase"]
  },

  {
    id: 12,
    name: "Warm Vanilla Candle Set",
    category: "home",
    price: "$28.00",
    description: "A cozy fragrance set for slow evenings at home.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-12",
    buttonText: "View home",
    badge: "Cozy",
    tags: ["candle", "decor"]
  },

  {
    id: 13,
    name: "Self-Care Sunday Gift Box",
    category: "gifts",
    price: "$45.00",
    description: "A thoughtful little collection for a relaxing reset.",
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-13",
    buttonText: "Shop gift",
    badge: "Gift idea",
    tags: ["gift", "self-care"]
  },

  {
    id: 14,
    name: "Birthday Beauty Bundle",
    category: "gifts",
    price: "$39.00",
    description: "A pretty beauty-themed gift for birthdays and celebrations.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-14",
    buttonText: "View gift",
    badge: "For her",
    tags: ["birthday", "beauty"]
  },

  {
    id: 15,
    name: "Aesthetic Journal & Pen Set",
    category: "lifestyle",
    price: "$22.00",
    description: "A lovely desk companion for notes, plans and ideas.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-15",
    buttonText: "Shop lifestyle",
    badge: "Desk pick",
    tags: ["journal", "stationery"]
  },

  {
    id: 16,
    name: "Daily Ritual Wellness Planner",
    category: "lifestyle",
    price: "$27.00",
    description: "A simple planning companion for calmer, more intentional days.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link-16",
    buttonText: "View lifestyle",
    badge: "New",
    tags: ["planner", "wellness"]
  }
];

/* ======================= END EDIT PRODUCTS ============================ */


const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const escapeHtml = value =>
  String(value ?? "").replace(/[&<>'"]/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[char]));

let activeFilter = "all";
let search = "";


/* ========================= PRODUCT CARD ========================= */

function card(product) {

  return `
    <article class="product-card reveal">

      <a
        href="${escapeHtml(product.affiliateUrl)}"
        target="_blank"
        rel="noopener noreferrer sponsored nofollow"
      >

        <div class="product-image">

          <img
            loading="lazy"
            src="${escapeHtml(product.image)}"
            alt="${escapeHtml(product.name)}"
          >

          <span class="badge">
            ${escapeHtml(product.badge || "Pretty pick")}
          </span>

        </div>

      </a>


      <div class="product-info">

        <span class="product-category">
          ${escapeHtml(product.category)}
        </span>

        <h3>
          ${escapeHtml(product.name)}
        </h3>

        <p>
          ${escapeHtml(product.description)}
        </p>


        <div class="product-meta">

          <span class="price">
            ${escapeHtml(product.price)}
          </span>

          <a
            class="shop-link"
            href="${escapeHtml(product.affiliateUrl)}"
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
          >
            ${escapeHtml(product.buttonText || "Shop find")} →
          </a>

        </div>

      </div>

    </article>
  `;
}


/* ========================= FILTER PRODUCTS ========================= */

function filtered() {

  return PRODUCTS.filter(product => {

    const categoryMatch =
      activeFilter === "all" ||
      product.category === activeFilter;

    const searchableText =
      (
        product.name +
        " " +
        product.description +
        " " +
        product.category +
        " " +
        (product.tags || []).join(" ")
      ).toLowerCase();

    const searchMatch =
      searchableText.includes(search.toLowerCase());

    return categoryMatch && searchMatch;

  });

}


/* ========================= RENDER PRODUCTS ========================= */

function render() {

  const list = filtered();

  const productGrid = $("#productGrid");
  const empty = $("#empty");

  if (!productGrid) return;

  productGrid.innerHTML =
    list.map(card).join("");

  if (empty) {
    empty.style.display =
      list.length ? "none" : "block";
  }

  observe();

}


/* ========================= SCROLL REVEAL ========================= */

function observe() {

  document
    .querySelectorAll(".reveal:not(.visible)")
    .forEach(element => {

      observer.observe(element);

    });

}


/* ========================= CATEGORY FILTER ========================= */

function setFilter(category) {

  activeFilter = category;

  $$(".filter").forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.filter === category
    );

  });

  render();

  const finds = $("#finds");

  if (finds) {

    finds.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


/* ========================= FILTER BUTTONS ========================= */

$$(".filter").forEach(button => {

  button.addEventListener("click", () => {

    setFilter(button.dataset.filter);

  });

});


/* ========================= CATEGORY CARDS ========================= */

$$(".category-card").forEach(cardElement => {

  cardElement.addEventListener("click", () => {

    setFilter(cardElement.dataset.cat);

  });

});


/* ========================= PRODUCT SEARCH ========================= */

const productSearch = $("#productSearch");

if (productSearch) {

  productSearch.addEventListener("input", event => {

    search = event.target.value;

    render();

  });

}


/* ========================= RESET ========================= */

const resetButton = $("#reset");

if (resetButton) {

  resetButton.addEventListener("click", () => {

    search = "";
    activeFilter = "all";

    if (productSearch) {
      productSearch.value = "";
    }

    setFilter("all");

  });

}


/* ========================= HEADER SEARCH ========================= */

const openSearch = $("#openSearch");
const closeSearch = $("#closeSearch");
const searchPanel = $("#searchPanel");
const headerSearch = $("#headerSearch");

if (openSearch) {

  openSearch.addEventListener("click", () => {

    searchPanel.classList.toggle("open");

    if (searchPanel.classList.contains("open")) {

      headerSearch.focus();

    }

  });

}


if (closeSearch) {

  closeSearch.addEventListener("click", () => {

    searchPanel.classList.remove("open");

  });

}


if (headerSearch) {

  headerSearch.addEventListener("input", event => {

    search = event.target.value;

    if (productSearch) {
      productSearch.value = search;
    }

    setFilter("all");

  });

}


/* ========================= MOBILE MENU ========================= */

const menuButton = $("#menuBtn");

if (menuButton) {

  menuButton.addEventListener("click", () => {

    $("nav").classList.toggle("mobile-open");

  });

}


$$("nav a").forEach(link => {

  link.addEventListener("click", () => {

    $("nav").classList.remove("mobile-open");

  });

});


/* ========================= MINI CATEGORY TABS ========================= */

$$(".mini-tab").forEach(button => {

  button.addEventListener("click", () => {

    $$(".mini-tab").forEach(tab => {

      tab.classList.remove("active");

    });

    button.classList.add("active");

    renderMini(button.dataset.mini);

  });

});


/* ========================= MINI PRODUCTS ========================= */

function renderMini(category) {

  const miniGrid = $("#miniGrid");

  if (!miniGrid) return;

  miniGrid.innerHTML = PRODUCTS
    .filter(product => product.category === category)
    .slice(0, 4)
    .map(product => `

      <a
        class="mini-card"
        href="${escapeHtml(product.affiliateUrl)}"
        target="_blank"
        rel="noopener noreferrer sponsored nofollow"
      >

        <img
          loading="lazy"
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(product.name)}"
        >

        <div>

          <strong>
            ${escapeHtml(product.name)}
          </strong>

          <small>
            ${escapeHtml(product.price)}
          </small>

        </div>

      </a>

    `)
    .join("");

}


/* ========================= SCROLL ANIMATION ========================= */

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.08
  }

);


/* ========================= BACK TO TOP ========================= */

const backTop = $("#backTop");

if (backTop) {

  window.addEventListener("scroll", () => {

    backTop.classList.toggle(
      "show",
      window.scrollY > 600
    );

  });


  backTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* ========================= INITIAL LOAD ========================= */

const year = $("#year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}

render();

renderMini("fashion");

observe();