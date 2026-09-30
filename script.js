/* ========================= EDIT PRODUCTS HERE ========================= */

let PRODUCTS = [];
let ARTICLES = [
  {
    id: 1,
    title: "How to Create a Soft-Luxury Bedroom Without Spending a Fortune",
    slug: "soft-luxury-bedroom-on-a-budget",
    category: "home",
    excerpt: "A few thoughtful changes can make an everyday bedroom feel calmer, warmer and more polished.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    date: "2026-09-30",
    body: "<p>A beautiful bedroom does not have to come from a complete makeover. The easiest way to create a soft-luxury feeling is to focus on texture, balance and a few details that make the room feel intentional.</p><h2>Start with a calm base</h2><p>Keep your main colours simple: warm white, cream, beige, muted blush or soft brown. A calm base makes even small decorative pieces feel more considered.</p><h2>Add texture before adding more colour</h2><p>Try a quilted throw, a soft pillowcase, a woven basket or a textured cushion. Layering different textures creates depth without making the room feel busy.</p><h2>Choose one or two beautiful details</h2><p>A ceramic vase, a warm lamp, a small tray or a framed print can become a focal point. You do not need many decorations; you need a few that work together.</p><h2>Keep the everyday things organised</h2><p>Luxury is also about how a space functions. Use small baskets, trays and simple storage to keep surfaces clear and make the room easier to live in.</p><p><strong>The Pretty Picks rule:</strong> before buying more, make the pieces you already own work better together.</p>"
  },
  {
    id: 2,
    title: "5 Simple Ways to Make Your Everyday Outfits Look More Polished",
    slug: "make-everyday-outfits-look-polished",
    category: "fashion",
    excerpt: "You do not need a huge wardrobe to make simple outfits feel intentional and put-together.",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85",
    date: "2026-09-30",
    body: "<p>Sometimes the difference between an ordinary outfit and a polished one is not another shopping trip. It is the small styling choices made after you get dressed.</p><h2>1. Keep the colour story simple</h2><p>Two or three colours that work together can instantly make an outfit feel more cohesive. Neutrals are especially easy to build around.</p><h2>2. Pay attention to proportions</h2><p>If one piece is loose, try balancing it with something more structured or fitted. Small changes in proportions can make basics look much more intentional.</p><h2>3. Add one finishing detail</h2><p>A watch, simple necklace, structured bag, belt or neat pair of shoes can make a basic outfit feel complete.</p><h2>4. Make sure the basics look cared for</h2><p>Clean shoes, wrinkle-free clothes and a tidy bag often make more difference than an expensive label.</p><h2>5. Repeat what works</h2><p>When you find an outfit combination you genuinely like, save it as a formula. Building a small collection of reliable outfit formulas makes getting dressed much easier.</p>"
  }
];
let activeArticleFilter = "all";
let dataLoadFailed = false;

async function loadProducts() {
  try {
    const base = document.baseURI || window.location.href;
    const productUrls = [
      "https://raw.githubusercontent.com/akshiladulanjani-maker/Prittypickswithakshiorg/main/data/products.json?v=20260930-10",
      new URL("data/products.json?v=20260930-10", base).href,
      "/Prittypickswithakshiorg/data/products.json?v=20260930-10"
    ];
    const articleUrls = [
      "https://raw.githubusercontent.com/akshiladulanjani-maker/Prittypickswithakshiorg/main/data/articles.json?v=20260930-10",
      new URL("data/articles.json?v=20260930-10", base).href,
      "/Prittypickswithakshiorg/data/articles.json?v=20260930-10"
    ];

    async function loadJson(urls) {
      let lastError;
      for (const url of urls) {
        try {
          const response = await fetch(url, { cache: "no-store" });
          if (response.ok) return await response.json();
          lastError = new Error("HTTP " + response.status + " for " + url);
        } catch (error) {
          lastError = error;
        }
      }
      throw lastError || new Error("Could not load data");
    }

    PRODUCTS = await loadJson(productUrls);
    try {
      ARTICLES = await loadJson(articleUrls);
    } catch (error) {
      console.error("Pretty Picks articles could not be loaded.", error);
      ARTICLES = [];
    }
  } catch (error) {
    console.error("Pretty Picks product data could not be loaded.", error);
    dataLoadFailed = true;
  }

  // Articles must render even if the product section has a problem.
  try { renderArticles(); } catch (error) { console.error("Pretty Picks articles could not be rendered.", error); }
  if (!dataLoadFailed) {
    try { render(); } catch (error) { console.error("Pretty Picks products could not be rendered.", error); }
    try { renderMini("fashion"); } catch (error) { console.error("Pretty Picks mini picks could not be rendered.", error); }
  }
  try { observe(); } catch (error) { console.error("Pretty Picks reveal animation could not be initialized.", error); }
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

/* ========================= ARTICLES ========================= */

function safeArticleHtml(html) {
  return String(html ?? "")
    .replace(/<script[\\s\\S]*?>[\\s\\S]*?<\\/script>/gi, "")
    .replace(/ on[a-z]+\\s*=\\s*("[^"]*"|'[^']*')/gi, "");
}

function articleCard(article) {
  return `
    <article class="article-card">
      <button type="button" class="article-card-button" data-article-slug="${escapeHtml(article.slug)}">
        <div class="article-cover">
          <img loading="lazy" src="${escapeHtml(article.image || "")}" alt="${escapeHtml(article.title)}">
          <span>${escapeHtml(article.category || "lifestyle")}</span>
        </div>
        <div class="article-info">
          <small>${escapeHtml(article.date || "")}</small>
          <h3>${escapeHtml(article.title)}</h3>
          <p>${escapeHtml(article.excerpt)}</p>
          <strong>Read article →</strong>
        </div>
      </button>
    </article>
  `;
}

function renderArticles() {
  const grid = $("#articleGrid");
  const empty = $("#articleEmpty");
  if (!grid) return;

  const list = ARTICLES
    .filter(article => activeArticleFilter === "all" || article.category === activeArticleFilter)
    .sort((a,b) => String(b.date || "").localeCompare(String(a.date || "")));

  grid.innerHTML = list.map(articleCard).join("");
  if (empty) empty.style.display = list.length ? "none" : "block";

  grid.querySelectorAll("[data-article-slug]").forEach(button => {
    button.addEventListener("click", () => openArticle(button.dataset.articleSlug));
  });

  observe();
}

function openArticle(slug) {
  const article = ARTICLES.find(item => item.slug === slug);
  const reader = $("#articleReader");
  const content = $("#articleContent");
  if (!article || !reader || !content) return;

  content.innerHTML = `
    <p class="eyebrow">${escapeHtml(article.category || "Articles")}</p>
    <h1>${escapeHtml(article.title)}</h1>
    <div class="article-date">${escapeHtml(article.date || "")}</div>
    <img class="article-hero-image" src="${escapeHtml(article.image || "")}" alt="${escapeHtml(article.title)}">
    <div class="article-body">${safeArticleHtml(article.body)}</div>
  `;

  reader.hidden = false;
  document.body.classList.add("article-open");
  reader.scrollTop = 0;
  window.location.hash = "article-" + encodeURIComponent(slug);
}

function closeArticle() {
  const reader = $("#articleReader");
  if (reader) reader.hidden = true;
  document.body.classList.remove("article-open");
  if (window.location.hash.startsWith("#article-")) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

$$(".article-filter").forEach(button => {
  button.addEventListener("click", () => {
    activeArticleFilter = button.dataset.articleFilter;
    $$(".article-filter").forEach(item => item.classList.toggle("active", item === button));
    renderArticles();
  });
});

$("#articleClose")?.addEventListener("click", closeArticle);

$("#articleReader")?.addEventListener("click", event => {
  if (event.target.id === "articleReader") closeArticle();
});




/* ========================= START APP ========================= */

loadProducts();
observe();
