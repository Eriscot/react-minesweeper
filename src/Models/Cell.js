class Cell {
    _id;
    _isMine;
    _coordX;
    _coordY;
    _minesNearby;
    _isMarked;

    constructor(coordX, coordY) {
        this._id = '' + coordX + coordY;
        this._isMine = false;
        this._coordX = coordX;
        this._coordY = coordY;
        this._isHidden = true;
        this._isMarked = false;
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

    get isMarked() {
        return this._isMarked;
    }

    set isMine(isMine) {
        this._isMine = isMine;
    }

    toggleMarked() {
        this._isMarked = !this._isMarked;
    }

    set minesNearby(minesNearby) {
        this._minesNearby = minesNearby;
    }
    
    unhide() {
        this._isHidden = false;
    }
}

export default Cell;