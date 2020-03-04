export class Cell {
    _isMine;
    _coordX;
    _coordY;
    _isHidden;
    _minesNearby;

    constructor(coordX, coordY) {
        this._isMine = Math.random() < 0.15 ? true : false;
        this._coordX = coordX;
        this._coordY = coordY;
        this._isHidden = true;
        this._minesNearby = 0;
    }

    get getIsMine() {
        return this._isMine;
    }

    get getCoordX() {
        return this._coordX;
    }

    get getCoordY() {
        return this._coordY;
    }

    get getIsHidden() {
        return this._isHidden;
    }

    get getMinesNearby() {
        return this._minesNearby;
    }

    set isHidden(isHidden) {
        this._isHidden = isHidden;
    }
}