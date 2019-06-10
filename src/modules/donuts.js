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
  name: ''
}

const HANDLE_NAME_CHANGE = 'HANDLE_NAME_CHANGE'
const handleNameChange = event => {
  const newName = event.target.value
  return {
    type: HANDLE_NAME_CHANGE,
    newName
  }
}

const donuts = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_NAME_CHANGE:
      return { ...state, name: action.newName }
    default:
      return state
  }
};

// Export statement goes here

export {
  donuts,
  handleNameChange
};
