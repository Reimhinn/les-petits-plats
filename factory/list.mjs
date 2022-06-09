let ingredientArray = []
let deviceArray = []
let ustensilsArray = []

export function listFactory (data) {
  const {
    appliance,
    description,
    ingredients,
    name,
    servings,
    time,
    ustensils
  } = data

  function getIngredientListDOM () {
    let ingredientList = document.querySelector('.ingredient-list')

    ingredients.forEach(ingredientObject => {
      if (!ingredientArray.includes(ingredientObject.ingredient)) {
        ingredientArray.push(ingredientObject.ingredient)
        let ingredientListElement = document.createElement('li')
        ingredientListElement.textContent += ingredientObject.ingredient
        ingredientList.appendChild(ingredientListElement)
      }
    })

    return ingredientList
  }

  function getDeviceListDOM () {
    let deviceList = document.querySelector('.device-list')

    if (!deviceArray.includes(appliance)) {
      deviceArray.push(appliance)
      let deviceListElement = document.createElement('li')
      deviceListElement.textContent = appliance
      deviceList.appendChild(deviceListElement)
    }


    return deviceList
  }

  function getUstensilsListDOM () {
    let ustensilsList = document.querySelector('.ustensils-list')

    ustensils.forEach(ustensil => {
      if (!ustensilsArray.includes(ustensil)) {
        ustensilsArray.push(ustensil)
        let ustensilListElement = document.createElement('li')
        ustensilListElement.textContent += ustensil.charAt(0).toUpperCase() + ustensil.slice(1)
        ustensilsList.appendChild(ustensilListElement)
      }

    })

    return ustensilsList
  }

  return {
    ...data,
    getIngredientListDOM,
    getDeviceListDOM,
    getUstensilsListDOM
  }
}
