// Stripe Payment Links.
//
// These are now LIVE — real cards, real money, deposited to your linked
// bank account on Stripe's payout schedule.

// Charged immediately when someone completes signup.html and clicks
// through on payment.html — the one-time build fee.
const STRIPE_PAYMENT_LINKS = {
  basic: "https://buy.stripe.com/28E5kD0zacXM8JR6ISffy00", // $129.99 one-time
  pro: "https://buy.stripe.com/6oUdR95Tuf5Ue4bgjsffy02", // $299 one-time
  elite: "https://buy.stripe.com/00waEXgy85vkbW3ebkffy05", // $419.99 one-time
};

// Not wired into any page yet — kept here for when the intake-form email
// (still to be built) offers hosting/updates as a separate opt-in.
// Still test-mode placeholders — send the live hosting links when you have
// them and I'll swap these too.
const STRIPE_HOSTING_LINKS = {
  basic: "https://buy.stripe.com/test_28E3cv3BjfIM5xk3wa7N601", // $5/mo
  pro: "https://buy.stripe.com/test_8x2eVd6Nv2W0bVIfeS7N603", // $9/mo
  elite: "https://buy.stripe.com/test_cNi6oH3Bj9ko6BogiW7N604", // $15/mo
};
