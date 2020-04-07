import tileHidden from '../../../assets/t9.png';
import tileClicked from '../../../assets/t0.png';
import tile1 from '../../../assets/t1.png';
import tile2 from '../../../assets/t2.png';
import tile3 from '../../../assets/t3.png';
import tile4 from '../../../assets/t4.png';
import tile5 from '../../../assets/t5.png';
import tile6 from '../../../assets/t6.png';
import tile7 from '../../../assets/t7.png';
import tile8 from '../../../assets/t8.png';
import tileMine from '../../../assets/t-1.png';
import tileMarked from '../../../assets/tm.png';

export const C = {
    tile1,
    tile2,
    tile3,
    tile4,
    tile5,
    tile6,
    tile7,
    tile8,
    tileMine,
    tileHidden,
    tileMarked,
    tileClicked
}

const imgCompute = value => {
    return C[value];
}

export default imgCompute;