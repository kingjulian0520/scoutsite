// Shared tier data for signup.html and payment.html.
const TIERS = {
  basic: { name: "Basic", price: 129.99, hosting: 5, days: "4-6" },
  pro: { name: "Pro", price: 299, hosting: 9, days: "3-5" },
  elite: { name: "Elite", price: 419.99, hosting: 15, days: "2-4" },
};

function getTier() {
  const key = new URLSearchParams(location.search).get("tier");
  return TIERS[key] ? { key, ...TIERS[key] } : { key: "basic", ...TIERS.basic };
}

function formatPrice(n) {
  return n % 1 === 0 ? `$${n}` : `$${n.toFixed(2)}`;
}

// Labor Day sale — 20% off through 11:59:59 PM on Sept 7, 2026 (viewer's
// local time). Auto-reverts on its own once the deadline passes; nothing
// to manually undo on the site side. The matching discount also has to be
// added on the Stripe Payment Links themselves for checkout to actually
// charge this price — see assets/js/stripe-config.js.
const SALE = {
  label: "Labor Day Sale — 20% off",
  percentOff: 20,
  endsAt: new Date(2026, 8, 7, 23, 59, 59),
};

function saleIsLive() {
  return new Date() <= SALE.endsAt;
}

function discountedPrice(price) {
  return Math.round(price * (1 - SALE.percentOff / 100) * 100) / 100;
}

function effectivePrice(price) {
  return saleIsLive() ? discountedPrice(price) : price;
}
