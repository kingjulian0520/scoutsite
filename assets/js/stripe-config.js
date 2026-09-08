// Stripe Payment Links.
//
// These are now LIVE — real cards, real money, deposited to your linked
// bank account on Stripe's payout schedule.

// Charged immediately when someone completes signup.html and clicks
// through on payment.html — the one-time build fee.
const STRIPE_PAYMENT_LINKS = {
  basic: "https://buy.stripe.com/8x28wP4PqbTIgcjgjsffy09", // $105.99 one-time
  pro: "https://buy.stripe.com/bJeaEX95G8Hw6BJgjsffy07", // $249.99 one-time
  elite: "https://buy.stripe.com/28EfZh1De5vk8JRgjsffy08", // $364.99 one-time
};

// Not wired into any page yet — kept here for when the intake-form email
// (still to be built) offers hosting/updates as a separate opt-in.
const STRIPE_HOSTING_LINKS = {
  basic: "https://buy.stripe.com/14A8wPa9K9LA6BJebkffy06", // $5/mo
  pro: "https://buy.stripe.com/28EaEXdlW3nc9NVc3cffy01", // $9/mo
  elite: "https://buy.stripe.com/cNibJ13Lm0b0e4bd7gffy03", // $15/mo
};
