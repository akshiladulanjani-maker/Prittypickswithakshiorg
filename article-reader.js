/* Pretty Picks Article Reader — standalone script */
(() => {
  const articles = [
    {
      slug: "soft-luxury-bedroom-on-a-budget",
      title: "How to Create a Soft-Luxury Bedroom Without Spending a Fortune",
      category: "home",
      date: "2026-09-30",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
      body: "<p>A few thoughtful changes can make an everyday bedroom feel calmer, warmer and more polished.</p><h2>Start with the bed</h2><p>Layer neutral bedding with one textured throw and a few cushions. Keep the palette simple so the room feels intentional rather than crowded.</p><h2>Add warm lighting</h2><p>Swap harsh overhead lighting for a bedside lamp or warm-toned bulb. Small pools of light instantly make a bedroom feel more relaxed.</p><h2>Choose one focal detail</h2><p>A mirror, artwork, vase or soft rug can give the room a finished feeling without requiring a full makeover.</p><h2>Keep surfaces edited</h2><p>Leave some breathing room on bedside tables and dressers. A small tray, candle or book is often enough.</p>"
    },
    {
      slug: "make-everyday-outfits-look-polished",
      title: "5 Simple Ways to Make Your Everyday Outfits Look More Polished",
      category: "fashion",
      date: "2026-09-30",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
      body: "<p>You do not need a huge wardrobe to make simple outfits feel intentional and put-together.</p><h2>1. Keep the palette simple</h2><p>Two or three coordinated colours can make even basic pieces look more considered.</p><h2>2. Add one structured piece</h2><p>A blazer, neat cardigan or structured bag can give a relaxed outfit a cleaner shape.</p><h2>3. Pay attention to fit</h2><p>Small fit adjustments often make a bigger difference than buying something new.</p><h2>4. Finish with simple accessories</h2><p>Choose one or two understated accessories rather than adding everything at once.</p><h2>5. Keep shoes and bags clean</h2><p>Well-kept finishing pieces can make a very simple outfit feel much more polished.</p>"
    }
  ];
  const $ = (s) => document.querySelector(s);
  const escape = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const reader = $("#articleReader");
  const content = $("#articleContent");
  if (!reader || !content) return;
  function openArticle(article) {
    content.innerHTML = '<p class="eyebrow">'+escape(article.category)+'</p><h1>'+escape(article.title)+'</h1><div class="article-date">'+escape(article.date)+'</div><img class="article-hero-image" src="'+escape(article.image)+'" alt="'+escape(article.title)+'"><div class="article-body">'+article.body+'</div>';
    reader.hidden = false;
    document.body.classList.add("article-open");
    reader.scrollTop = 0;
  }
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-article-slug]");
    if (button) {
      event.preventDefault();
      const article = articles.find(a => a.slug === button.dataset.articleSlug);
      if (article) openArticle(article);
    }
    if (event.target.closest("#articleClose")) {
      reader.hidden = true;
      document.body.classList.remove("article-open");
    }
  });
})();
