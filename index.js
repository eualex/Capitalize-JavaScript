const capitalize = ( s, count = 0 ) => {

    if (typeof s !== 'string') return '';

    if(s.indexOf(" ") > -1 ){
        let nomes = s.split(' ');
        if (count < nomes.length){
            return capitalize(nomes[count]).concat(' ' + capitalize(s, count+1));
        }
        return '';
    } else {
        if(s!=undefined) return s.charAt(0).toUpperCase().concat(s.slice(1).toLowerCase());

        return '';
    }
}



