// format backend validation message to frontend format

const backendErrors = {
  email: {
    errors: [
      {
        message: 'can\'t be blank',
      },
    ],
  },
  password: {
    errors: [
      {
        message: 'must contain symbold in diff case',
      },
      {
        message: 'must be at least 8 symbols in length',
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: 'must match with password',
      },
    ],
  },
}

//['email: 'cant be blank', 'password: must contain symbols, must be at least 8 symbols',
// 'passwordConfirmation: must match with password']

// Object.entries() for object like array.map for array

function format(backendErrorsObj) {
  // return Object.entries(backendErrorsObj).map(([key, value]) => {
  //   return {
  //     [key]: value.errors.map((error) => error.message).join(', ')}
  // })

  // return backendErrors;
  return Object.entries(backendErrorsObj).map(([key, value]) => {
    const fieldMessages = value.errors.map((error) => error.message).join(', ');
    return `${key}: ${fieldMessages}`
  });
}

console.log(format(backendErrors))