//! problem ----1
{
  const price = 4500
  if (price >= 6000) {
    const discount = (price / 100) * 15
    const totalPrice = price - discount
    console.log(
      `if you buy 6000 up money then you have to discount 15 % of price - pay ${totalPrice} `
    )
  } else if (price >= 3000) {
    const discount = (price / 100) * 5
    const totalPrice = price - discount
    console.log(`for 3000 up discount 5 % of price - pay ${totalPrice}`)
  } else {
    console.log(`you have no discount pay ${price}`)
  }
}

//! problem 2
{
  const age = 60
  if (age <= 18) {
    console.log('you are eligible to for free ')
  } else if (age >= 60) {
    console.log('you are eligible to pay 50 % of ticket price ')
  } else {
    console.log(' pay full money ')
  }
}

//! problem 3
{
  const bankAmount = 1000
  if (bankAmount >= 1000) {
    console.log('diposite koro baby ')
  } else if (bankAmount <= 5000) {
    console.log('bindas life enjoy koro baby')
  } else {
    console.log('tui to boroloks mama')
  }
}

//! problem 4
{
  const marks = 84
  if (marks <= 50) {
    console.log('fail')
  } else if (marks >= 50 && marks <= 80) {
    console.log('you are passed')
  } else {
    console.log('A+')
  }
}
//!problem -- 5
{
  const bookPage = 500
  if (bookPage <= 100) {
    console.log('small size book')
  } else if (bookPage <= 500) {
    console.log('mid size book')
  } else {
    console.log('heart attack size book')
  }
}
//! problem 6
{
  const temperature = 20
  if (temperature <= 0) {
    console.log('coold ')
  } else if (temperature <= 20) {
    console.log('cool cool')
  } else {
    console.log('hot hot')
  }
}
//!problem - 7

{
  const level = 10
  if (level < 10) {
    console.log('novice')
  } else if (level <= 50) {
    console.log('mid')
  } else {
    console.log('pro gramer')
  }
}
