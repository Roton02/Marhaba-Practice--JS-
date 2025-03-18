//!problem --1
{
  const isInvited = true
  const money = 1001
  if (!isInvited) {
    console.log('cikc out my frnd list')
  } else if (isInvited && money > 1000) {
    console.log('jabo and gift niyei jabo')
  }
}

//!problem --2
{
  const tea = false
  const biscuit = true
  if (tea) {
    console.log('i will drink tea')
    if (biscuit) {
      console.log('i will also eat biscuit')
    }
  } else {
    console.log(' bose bose star jalsa dekhun ')
  }
}
//!problem - 3
{
  const isActive = false
  const subscription = true
  if (isActive) {
    if (subscription) {
      console.log('see content')
    } else {
      console.log('subscription required')
    }
  } else {
    console.log('login kor beta ')
  }
}

//!problem - 4
{
  const isFood = true
  const foodie = true
  if (isFood) {
    console.log('khawar gorom kore kkheye pel ')
  } else {
    if (foodie) {
      console.log('order diye kha ')
    } else {
      console.log('na kheye gumaba ')
    }
  }
}

//!problem - 5
{
  const guest = 100
  const isGift = false
  if (guest >= 100) {
    if (isGift) {
      console.log('lets perty all nigth')
    } else {
      console.log('i will party with myself')
    }
  }
}
