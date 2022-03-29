import GUN from 'gun'
import SEA from 'gun/sea'


export default (path, key, maxBytes) => {

}


lex = {'.': {'>': 'alice', '<': 'fred'}, '%': 50000}
// WHERE KEY >= 'alice' AND KEY <= 'fred' LIMIT 50000

lex = {'.': {'<': 'zach', '-': 1}, '%': 50000}
// WHERE KEY <= 'zach' REVERSE LIMIT 50000

/*

'#' - PATH
'.' - KEY
'*' - STARTS WITH
'=' | <no-left> - EXACT
'<' - LE
'>' - GE

*/