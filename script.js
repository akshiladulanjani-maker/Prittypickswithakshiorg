/* ========================= EDIT PRODUCTS HERE ========================= */

let PRODUCTS = [];

async function loadProducts() {
  try {
    const response = await fetch("data/products.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load products");
    PRODUCTS = await response.json();
  } catch (error) {
    console.error("Pretty Picks product data could not be loaded.", error);
    PRODUCTS = [];
  }

  render();
  renderMini("fashion");
  observe();
}

const isDemoLink = url => !url || url.includes("example.com");

function getAffiliateLinks(product) {
  const links = Array.isArray(product.affiliateLinks)
    ? product.affiliateLinks.filter(link => link && link.url && !isDemoLink(link.url)).slice(0, 4)
    : [];

  if (links.length) return links;

  if (product.affiliateUrl && !isDemoLink(product.affiliateUrl)) {
    return [{ label: product.buttonText || "Shop find", url: product.affiliateUrl }];
  }

  return [];
}

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

  const affiliateLinks = getAffiliateLinks(product);
  const primaryUrl = affiliateLinks[0]?.url || "#";
  const demo = affiliateLinks.length === 0;

  const linksHtml = affiliateLinks.length
    ? affiliateLinks.map(link => `
        <a
          class="shop-link"
          href="${escapeHtml(link.url)}"
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
        >
          ${escapeHtml(link.label || "Shop now")} →
        </a>
      `).join("")
    : `
        <a class="shop-link" href="#" aria-disabled="true" data-demo-link="true">
          Add affiliate link
        </a>
      `;

  return `
    <article class="product-card reveal">
      <a
        href="${escapeHtml(primaryUrl)}"
        ${demo ? 'aria-disabled="true" data-demo-link="true"' : 'target="_blank" rel="noopener noreferrer sponsored nofollow"'}
      >
        <div class="product-image">
          <img loading="lazy" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">
          <span class="badge">${escapeHtml(product.badge || "Pretty pick")}</span>
        </div>
      </a>

      <div class="product-info">
        <span class="product-category">${escapeHtml(product.category)}</span>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description)}</p>

        <div class="product-meta">
          <span class="price">${escapeHtml(product.price)}</span>
        </div>

        <div class="affiliate-links">${linksHtml}</div>
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
  bindDemoLinks();

}

function bindDemoLinks() {
  $('#productGrid')?.querySelectorAll('[data-demo-link="true"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      window.alert("This product link is being prepared. The real affiliate link will be added soon.");
    });
  });
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
    .map(product => {
      const affiliateLinks = getAffiliateLinks(product);
      const demo = affiliateLinks.length === 0;
      const destination = affiliateLinks[0]?.url || "#";

      return `
        <a
          class="mini-card"
          href="${escapeHtml(destination)}"
          ${demo ? 'aria-disabled="true" data-demo-link="true"' : 'target="_blank" rel="noopener noreferrer sponsored nofollow"'}
        >
          <img loading="lazy" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">
          <div>
            <strong>${escapeHtml(product.name)}</strong>
            <small>${escapeHtml(product.price)}</small>
          </div>
        </a>
      `;
    })
    .join("");

  bindDemoLinks();
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

loadProducts();

observe();