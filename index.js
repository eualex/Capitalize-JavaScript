// old logic
// const capitalize = ( s, count = 0 ) => {

//     if (typeof s !== 'string') return '';

//     if(s.indexOf(" ") > -1 ){
//         let nomes = s.split(' ');
//         if (count < nomes.length){
//             return capitalize(nomes[count]).concat(' ' + capitalize(s, count+1));
//         }
//         return '';
//     } else {
//         if(s!=undefined) return s.charAt(0).toUpperCase().concat(s.slice(1).toLowerCase());
//         return '';
//     }
// }

export function capitalize(text) { 
  if (typeof text !== 'string') return ''

  const splitedText = text.split(' ')

  if (splitedText.length > 1) {
    const newText = splitedText
      .map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      })
      .join(' ')

    return newText
  }

  return (
    splitedText[0].charAt(0).toUpperCase() +
    splitedText[0].slice(1).toLowerCase()
  )
}
