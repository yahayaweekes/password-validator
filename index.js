function isLowerCase(password, index) {
  return password.charCodeAt(index) >= 97 && password.charCodeAt(index) <= 122
}

function isUpperCase(password, index) {
  return password.charCodeAt(index) >= 65 && password.charCodeAt(index) <= 90
}

function isANumber(password, index) {
  return !isNaN(password[index])
}

function validatePassword(password) {
  if (password.length < 8)
    return false

  let lower = 0
  let Upper = 0
  let numeric = 0
  let special = 0

  for (let i = 0; i < password.length; i++) {

    if (isLowerCase(password, i)) {
      lower++
    } else if (isUpperCase(password, i)) {
      Upper++
    } else if (isANumber(password, i)) {
      numeric++
    } else {
      special++
    }

  }

  return lower > 0 && Upper > 0 && numeric > 0 && special > 0
}

module.exports = validatePassword