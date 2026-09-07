// Shared tier data for signup.html and payment.html.
const TIERS = {
  basic: { name: "Basic", price: 105.99, hosting: 5, days: "4-6" },
  pro: { name: "Pro", price: 249.99, hosting: 9, days: "3-5" },
  elite: { name: "Elite", price: 364.99, hosting: 15, days: "2-4" },
};

function getTier() {
  const key = new URLSearchParams(location.search).get("tier");
  return TIERS[key] ? { key, ...TIERS[key] } : { key: "basic", ...TIERS.basic };
}

function formatPrice(n) {
  return n % 1 === 0 ? `$${n}` : `$${n.toFixed(2)}`;
}
