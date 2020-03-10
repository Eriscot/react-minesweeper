export class Cell {
    _id;
    _isMine;
    _coordX;
    _coordY;
    _minesNearby;
    _isHidden;

    constructor(coordX, coordY) {
        this._id = Math.random() * 1000000000;
        this._isMine = Math.random() < 0.15 ? true : false;
        this._coordX = coordX;
        this._coordY = coordY;
        this._minesNearby = 0;
        this._isHidden = true;
    }

    get getId() {
        return this._id;
    }

    get getMinesNearby() {
        return this._minesNearby;
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

    unhide() {
        this._isHidden = false;
    }

    set setMinesNearby(amount) {
        this._minesNearby = amount;
    }

    toggleHidden() {
        this._isHidden = !this._isHidden;
    }
}