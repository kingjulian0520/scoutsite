// Stripe Payment Links.
//
// These are TEST MODE links (buy.stripe.com/test_...) from your Stripe
// sandbox — they only work with Stripe's test cards, not real money. Once
// you've tested the flow end to end, switch to your live account in
// Stripe, recreate these same links there, and swap the URLs below for the
// live ones (buy.stripe.com/... without "test_").

// Charged immediately when someone completes signup.html and clicks
// through on payment.html — the one-time build fee.
const STRIPE_PAYMENT_LINKS = {
  basic: "https://buy.stripe.com/test_6oU3cv0p71RW1h47Mq7N600", // $129.99 one-time
  pro: "https://buy.stripe.com/test_9B68wP0p74046Bo9Uy7N602", // $299 one-time
  elite: "https://buy.stripe.com/test_3cI3cv1tbeEI7Fs2s67N605", // $419.99 one-time
};

// Not wired into any page yet — kept here for when the intake-form email
// (still to be built) offers hosting/updates as a separate opt-in.
const STRIPE_HOSTING_LINKS = {
  basic: "https://buy.stripe.com/test_28E3cv3BjfIM5xk3wa7N601", // $5/mo
  pro: "https://buy.stripe.com/test_8x2eVd6Nv2W0bVIfeS7N603", // $9/mo
  elite: "https://buy.stripe.com/test_cNi6oH3Bj9ko6BogiW7N604", // $15/mo
};
