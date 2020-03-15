export class Cell {
    _id;
    _isMine;
    _coordX;
    _coordY;
    _minesNearby;

    constructor(coordX, coordY) {
        this._id = '' + coordX + coordY;
        this._isMine = Math.random() < 0.15 ? true : false;
        this._coordX = coordX;
        this._coordY = coordY;
        this._isHidden = true;
        this._minesNearby = 0;
    }

    get id() {
        return this._id;
    }

    get isMine() {
        return this._isMine;
    }

    get coordX() {
        return this._coordX;
    }

    get coordY() {
        return this._coordY;
    }

    get isHidden() {
        return this._isHidden;
    }

    get minesNearby() {
        return this._minesNearby;
    }

    set minesNearby(minesNearby) {
        this._minesNearby = minesNearby;
    }
    
    unhide() {
        this._isHidden = false;
    }
}