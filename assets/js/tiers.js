// Shared tier data for signup.html and payment.html.
const TIERS = {
  basic: { name: "Basic", price: 129.99, hosting: 5, days: 5 },
  pro: { name: "Pro", price: 299, hosting: 9, days: 4 },
  elite: { name: "Elite", price: 419.99, hosting: 15, days: 2 },
};

function getTier() {
  const key = new URLSearchParams(location.search).get("tier");
  return TIERS[key] ? { key, ...TIERS[key] } : { key: "basic", ...TIERS.basic };
}

function formatPrice(n) {
  return n % 1 === 0 ? `$${n}` : `$${n.toFixed(2)}`;
}
