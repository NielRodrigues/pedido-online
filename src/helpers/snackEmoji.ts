export function snackEmoji(name: string){
  switch(name.toLocaleLowerCase()){
    case 'burger':
      return '🍔'
    case 'combos':
      return '🍔🍟🥤'
    case 'vegetarian':
      return '🥪'
    case 'drinks':
      return '🥤'
    case 'deserts':
      return '🍨'
    default:
      return '👨‍🍳🍳'
  }
}
