// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4000;
let isWeekday = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: false,
  Sunday: false,
};

let hasBoughtProductFromITCategory = {
  has: true,
  not: false,
};

let hasAttendedDiscountEvent = {
  has: true,
  not: false,
};

let isPlatinum = {
  Platinum: true,
  Gold: false,
};

let hasPromotion =
  lastMonthPaidMoreThan4000 < 4001 &&
  isWeekday.Friday &&
  hasBoughtProductFromITCategory.not &&
  hasAttendedDiscountEvent.has &&
  isPlatinum.Gold;

console.log(lastMonthPaidMoreThan4000 < 4001);
