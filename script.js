/* =========================================================
   PRETTY PICKS WITH AKSHI
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   ⭐ EDIT PRODUCTS HERE ⭐
   =========================================================

   To add a new product, copy one product object and change:

   name
   category
   description
   price
   image
   affiliateUrl
   buttonText
   badge
   findTags

   Categories:
   fashion
   beauty
   home
   gifts
   lifestyle

   IMPORTANT:
   affiliateUrl can be ANY legitimate affiliate URL.
   It is NOT limited to Amazon.
   ========================================================= */

const PRODUCTS = [

  {
    id: 1,
    name: "Blush Satin Slip Dress",
    category: "fashion",
    description: "A soft and feminine satin dress for an effortless look.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Pretty Pick",
    findTags: ["trending", "popular"]
  },

  {
    id: 2,
    name: "Pearl Mini Shoulder Bag",
    category: "fashion",
    description: "A cute mini shoulder bag that adds a polished touch.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Trending",
    findTags: ["trending", "new"]
  },

  {
    id: 3,
    name: "Gold Layered Necklace",
    category: "fashion",
    description: "A simple layered necklace for everyday outfits.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Popular",
    findTags: ["popular", "affordable"]
  },

  {
    id: 4,
    name: "Cream Button Knit Cardigan",
    category: "fashion",
    description: "A cosy neutral cardigan that works across seasons.",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "New",
    findTags: ["new", "trending"]
  },


  {
    id: 5,
    name: "Dewy Glow Face Serum",
    category: "beauty",
    description: "A lightweight skincare pick for a fresh-looking glow.",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Beauty Pick",
    findTags: ["trending", "popular"]
  },

  {
    id: 6,
    name: "Soft Glam Eyeshadow Palette",
    category: "beauty",
    description: "Neutral shades for easy everyday and soft glam looks.",
    price: "$21.99",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Popular",
    findTags: ["popular", "affordable"]
  },

  {
    id: 7,
    name: "Velvet Matte Lip Tint",
    category: "beauty",
    description: "A smooth lip colour with a soft velvet finish.",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Affordable",
    findTags: ["affordable", "trending"]
  },

  {
    id: 8,
    name: "Rose Quartz Facial Roller",
    category: "beauty",
    description: "A pretty self-care accessory for your skincare routine.",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Self Care",
    findTags: ["affordable", "popular"]
  },


  {
    id: 9,
    name: "Blush Satin Pillowcase Set",
    category: "home",
    description: "Soft satin pillowcases for a prettier bedroom.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Bedroom Pick",
    findTags: ["trending", "popular"]
  },

  {
    id: 10,
    name: "Cloud Waffle Bedding Set",
    category: "home",
    description: "A cosy textured bedding set for a soft aesthetic room.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Cosy Pick",
    findTags: ["new", "popular"]
  },

  {
    id: 11,
    name: "Organic Ceramic Vase Trio",
    category: "home",
    description: "Minimal ceramic vases for shelves, tables and corners.",
    price: "$27.99",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Home Pick",
    findTags: ["new", "trending"]
  },

  {
    id: 12,
    name: "Warm Vanilla Candle Set",
    category: "home",
    description: "Warm scented candles for a cosy evening atmosphere.",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Cosy",
    findTags: ["affordable", "popular"]
  },


  {
    id: 13,
    name: "Self-Care Sunday Gift Box",
    category: "gifts",
    description: "A thoughtful collection of little self-care treats.",
    price: "$32.99",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Gift",
    badge: "Gift Idea",
    findTags: ["popular", "trending"]
  },

  {
    id: 14,
    name: "Birthday Beauty Bundle",
    category: "gifts",
    description: "A pretty beauty-themed gift idea for birthdays.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Gift",
    badge: "Birthday",
    findTags: ["new", "popular"]
  },

  {
    id: 15,
    name: "Aesthetic Journal & Pen Set",
    category: "gifts",
    description: "A lovely journal set for writing, planning and reflection.",
    price: "$17.99",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Gift",
    badge: "Cute Gift",
    findTags: ["affordable", "new"]
  },


  {
    id: 16,
    name: "Daily Ritual Wellness Planner",
    category: "lifestyle",
    description: "A simple planner for routines, goals and daily habits.",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=85",
    affiliateUrl: "https://example.com/your-affiliate-link",
    buttonText: "View Product",
    badge: "Lifestyle",
    findTags: ["new", "trending"]
  }

];


/* =========================================================
   CATEGORY LABELS
   ========================================================= */

const categoryLabels = {
  all: "All",
  fashion: "Fashion",
  beauty: "Beauty",
  home: "Home & Bedroom",
  gifts: "Gift Ideas",
  lifestyle: "Lifestyle"
};


/* =========================================================
   STATE
   ========================================================= */

const state = {
  category: "all",
  search: "",
  findsTab: "trending"
};


/* =========================================================
   ELEMENTS
   ========================================================= */

const productGrid = document.getElementById("productGrid");
const findsGrid = document.getElementById("findsGrid");
const resultSummary = document.getElementById("resultSummary");
const emptyResults = document.getElementById("emptyResults");

const productSearch = document.getElementById("productSearch");
const clearProductSearch = document.getElementById("clearProductSearch");

const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");

const headerSearchForm = document.getElementById("headerSearchForm");
const headerSearchInput = document.getElementById("headerSearchInput");
const clearHeaderSearch = document.getElementById("clearHeaderSearch");

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

const siteHeader = document.getElementById("siteHeader");
const backToTop = document.getElementById("backToTop");

const currentYear = document.getElementById("currentYear");


/* =========================================================
   HELPERS
   ========================================================= */

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .trim();
}


function escapeHTML(value) {

  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product) {

  return `
    <article class="product-card">

      <div class="product-image">

        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        >

        ${
          product.badge
            ? `<span class="product-badge">${escapeHTML(product.badge)}</span>`
            : ""
        }

      </div>


      <div class="product-body">

        <div class="product-category">
          ${escapeHTML(categoryLabels[product.category])}
        </div>

        <h3 class="product-name">
          ${escapeHTML(product.name)}
        </h3>

        <p class="product-description">
          ${escapeHTML(product.description)}
        </p>


        <div class="product-footer">

          <span class="product-price">
            ${escapeHTML(product.price)}
          </span>


          <a
            class="btn btn-primary btn-small"
            href="${escapeHTML(product.affiliateUrl)}"
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            aria-label="${escapeHTML(product.buttonText || "View Product")} - ${escapeHTML(product.name)}"
          >
            ${escapeHTML(product.buttonText || "View Product")}
          </a>

        </div>

      </div>

    </article>
  `;

}


/* =========================================================
   PRODUCT SEARCH
   ========================================================= */

function productMatchesSearch(product) {

  if (!state.search) {
    return true;
  }

  const searchableText = [
    product.name,
    product.category,
    product.description,
    product.price,
    ...(product.findTags || [])
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalize(state.search));

}


/* =========================================================
   FILTER PRODUCTS
   ========================================================= */

function getFilteredProducts() {

  return PRODUCTS.filter(product => {

    const categoryMatches =
      state.category === "all" ||
      product.category === state.category;

    const searchMatches =
      productMatchesSearch(product);

    return categoryMatches && searchMatches;

  });

}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {

  const filteredProducts = getFilteredProducts();

  productGrid.innerHTML = filteredProducts
    .map(createProductCard)
    .join("");

  resultSummary.textContent =
    `${filteredProducts.length} ${
      filteredProducts.length === 1
        ? "pretty find"
        : "pretty finds"
    }`;

  if (filteredProducts.length === 0) {

    productGrid.style.display = "none";
    emptyResults.style.display = "block";

  } else {

    productGrid.style.display = "grid";
    emptyResults.style.display = "none";

  }

}


/* =========================================================
   RENDER TODAY'S FINDS
   ========================================================= */

function renderFinds() {

  const taggedProducts = PRODUCTS.filter(product => {

    return Array.isArray(product.findTags) &&
      product.findTags.includes(state.findsTab);

  });


  const productsToShow = taggedProducts.slice(0, 4);

  findsGrid.innerHTML = productsToShow
    .map(product => {

      return `
        <article class="find-card">

          <div class="find-card-image">

            <img
              src="${escapeHTML(product.image)}"
              alt="${escapeHTML(product.name)}"
              loading="lazy"
            >

          </div>


          <div class="find-card-body">

            <h3>
              ${escapeHTML(product.name)}
            </h3>

            <p>
              ${escapeHTML(product.description)}
            </p>

          </div>

        </article>
      `;

    })
    .join("");

}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function setActiveFilter(category) {

  state.category = category;

  document
    .querySelectorAll(".filter-button")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.category === category
      );

    });

  renderProducts();

}


/* =========================================================
   SEARCH SYNC
   ========================================================= */

function syncSearchInputs(value) {

  const searchValue = value || "";

  state.search = searchValue;

  productSearch.value = searchValue;
  headerSearchInput.value = searchValue;

  clearProductSearch.style.display =
    searchValue ? "block" : "none";

  clearHeaderSearch.style.display =
    searchValue ? "flex" : "none";

}


/* =========================================================
   PRODUCT FILTER BUTTONS
   ========================================================= */

document
  .querySelectorAll(".filter-button")
  .forEach(button => {

    button.addEventListener("click", () => {

      const category =
        button.dataset.category || "all";

      setActiveFilter(category);

    });

  });


/* =========================================================
   PRODUCT SEARCH
   ========================================================= */

productSearch.addEventListener("input", event => {

  syncSearchInputs(event.target.value);

  renderProducts();

});


clearProductSearch.addEventListener("click", () => {

  syncSearchInputs("");

  renderProducts();

  productSearch.focus();

});


/* =========================================================
   HEADER SEARCH
   ========================================================= */

searchToggle.addEventListener("click", () => {

  searchPanel.classList.toggle("open");

  if (searchPanel.classList.contains("open")) {
    headerSearchInput.focus();
  }

});


headerSearchInput.addEventListener("input", event => {

  syncSearchInputs(event.target.value);

  renderProducts();

});


clearHeaderSearch.addEventListener("click", () => {

  syncSearchInputs("");

  renderProducts();

  headerSearchInput.focus();

});


headerSearchForm.addEventListener("submit", event => {

  event.preventDefault();

  syncSearchInputs(headerSearchInput.value);

  renderProducts();

  document
    .getElementById("shopping-finds")
    .scrollIntoView({
      behavior: "smooth"
    });

});


/* =========================================================
   CATEGORY LINKS
   ========================================================= */

document
  .querySelectorAll("[data-category-target]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const category =
        button.dataset.categoryTarget;

      setActiveFilter(category);

      document
        .getElementById("shopping-finds")
        .scrollIntoView({
          behavior: "smooth"
        });

    });

  });


/* =========================================================
   TODAY'S FINDS TABS
   ========================================================= */

document
  .querySelectorAll(".finds-tab")
  .forEach(tab => {

    tab.addEventListener("click", () => {

      state.findsTab =
        tab.dataset.findsTab;

      document
        .querySelectorAll(".finds-tab")
        .forEach(item => {

          item.classList.toggle(
            "active",
            item === tab
          );

        });

      renderFinds();

    });

  });


/* =========================================================
   MOBILE MENU
   ========================================================= */

menuToggle.addEventListener("click", () => {

  mobileNav.classList.toggle("open");

});


document
  .querySelectorAll(".mobile-nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      mobileNav.classList.remove("open");

    });

  });


/* =========================================================
   STICKY HEADER
   ========================================================= */

function handleScroll() {

  if (window.scrollY > 30) {

    siteHeader.classList.add("scrolled");

  } else {

    siteHeader.classList.remove("scrolled");

  }


  if (window.scrollY > 500) {

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

}


window.addEventListener("scroll", handleScroll);


/* =========================================================
   BACK TO TOP
   ========================================================= */

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll(
  "main section[id]"
);

const navLinks = document.querySelectorAll(
  ".desktop-nav .nav-link"
);


function updateActiveNav() {

  const scrollPosition =
    window.scrollY + 150;

  let currentSection = "home";


  sections.forEach(section => {

    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition <
        section.offsetTop + section.offsetHeight
    ) {

      currentSection = section.id;

    }

  });


  navLinks.forEach(link => {

    const href =
      link.getAttribute("href");

    const linkTarget =
      href ? href.substring(1) : "";

    link.classList.toggle(
      "active",
      linkTarget === currentSection
    );

  });

}


window.addEventListener(
  "scroll",
  updateActiveNav
);


/* =========================================================
   YEAR
   ========================================================= */

currentYear.textContent =
  new Date().getFullYear();


/* =========================================================
   INITIAL LOAD
   ========================================================= */

renderProducts();
renderFinds();
handleScroll();
updateActiveNav();