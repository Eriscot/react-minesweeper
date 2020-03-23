import d0 from '../../../assets/d0.png';
import d1 from '../../../assets/d1.png';
import d2 from '../../../assets/d2.png';
import d3 from '../../../assets/d3.png';
import d4 from '../../../assets/d4.png';
import d5 from '../../../assets/d5.png';
import d6 from '../../../assets/d6.png';
import d7 from '../../../assets/d7.png';
import d8 from '../../../assets/d8.png';
import d9 from '../../../assets/d9.png';
import _d from '../../../assets/d-.png';

const imgCompute = (value) => {
    switch(value){
        case -1:
            return _d;
        case 0:
            return d0;
        case 1:
            return d1;
        case 2:
            return d2;
        case 3:
            return d3;
        case 4:
            return d4;
        case 5:
            return d5;
        case 6:
            return d6;
        case 7:
            return d7;
        case 8:
            return d8;
        case 9:
            return d9;
        default:
            throw new Error('Wrong value');
        }
}

export default imgCompute;