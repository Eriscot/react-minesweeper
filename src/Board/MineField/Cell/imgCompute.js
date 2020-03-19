import tile from '../../../assets/t9.png';
import tileClicked from '../../../assets/t0.png';
import tile1 from '../../../assets/t1.png';
import tile2 from '../../../assets/t2.png';
import tile3 from '../../../assets/t3.png';
import tile4 from '../../../assets/t4.png';
import tile5 from '../../../assets/t5.png';
import tile6 from '../../../assets/t6.png';
import tile7 from '../../../assets/t7.png';
import tile8 from '../../../assets/t8.png';

const imgCompute = value => {
    switch(value) {
        case 0:
        case true:
            return tileClicked;
        case false:
            return tile;
        case 1:
            return tile1;
        case 2:
            return tile2;
        case 3:
            return tile3;
        case 4:
            return tile4;
        case 5:
            return tile5;   
        case 6:
            return tile6;
        case 7:
            return tile7;
        case 8:
            return tile8;
        default:
            throw new Error('Wrong input');
    }
}

export default imgCompute;