const initialState = {
  donutOrderList: [
    {
      id: 1,
      name: 'Brianna',
      flavor: 'Everything Bagel Doughnut'
    },
    {
      id: 2,
      name: "Alex",
      flavor: 'Blackberry Hibiscus'
    },
    {
      id: 3,
      name: 'Dan',
      flavor: 'The biggest coffee roll ever'
    }
  ],
  name: '',
  flavor: ''
}

const HANDLE_NAME_CHANGE = 'HANDLE_NAME_CHANGE'
const handleNameChange = event => {
  const newName = event.target.value
  return {
    type: HANDLE_NAME_CHANGE,
    newName
  }
}

const HANDLE_FLAVOR_CHANGE = 'HANDLE_FLAVOR_CHANGE'
const handleFlavorChange = event => {
  const newFlavor = event.target.value
  return {
    type: HANDLE_FLAVOR_CHANGE,
    newFlavor
  }
}

const ADD_NEW_DONUT = 'ADD_NEW_DONUT'
const addNewDonut = newDonut => {
  return {
    type: ADD_NEW_DONUT,
    newDonut
  }
}

const CLEAR_FORM = 'CLEAR_FORM'
const clearForm = clearForm => {
  return {
    type: CLEAR_FORM,
  }
}

const donuts = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_DONUT:
      const newDonuts = state.donutOrderList.concat(action.newDonut)
      return { ...state, donutOrderList: newDonuts }
    case HANDLE_NAME_CHANGE:
      return { ...state, name: action.newName }
    case HANDLE_FLAVOR_CHANGE:
      return { ...state, flavor: action.newFlavor }
    case CLEAR_FORM:
      return { ...state, name: '', flavor: '' }
    default:
      return state
  }
};

// Export statement goes here

export {
  donuts,
  handleNameChange,
  handleFlavorChange,
  addNewDonut,
  clearForm
};
