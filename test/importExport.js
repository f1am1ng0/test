import {generateld} from './math.js'
import {_id as N} from './math.js'
const run = (N) =>{
N= Math.random().toString(32).slice(2);
while (N.length < size) {
N +=Math.random().toString(32).slice(2);
}
return N.slice (0, size)
}
run();