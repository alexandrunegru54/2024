export class Cell {
  constructor(gridElement, x, y) {
    const cell = document.createElement("div");

    cell.classList.add("cell");
    gridElement.append(cell);
    this.x = x;
    this.y = y;
  }

  linkTile(tile) {
    tile.setPosition(this.x, this.y);
    this.linkedTile = tile;
  }

  unlinkTile() {
    this.linkedTile = null;
  }

  linkTileForMerge(tile) {
    tile.setPosition(this.x, this.y);
    this.linkedTileForMerge = tile;
  }

  hasTileForMerge() {
    return !!this.linkedTileForMerge;
  }

  unlinkTileForMerge() {
    this.linkedTileForMerge = null;
  }

  isEmty() {
    return !this.linkedTile;
  }

  canAccept(newTile) {
    return (
      this.isEmty() ||
      (!this.hasTileForMerge() && this.linkedTile.value === newTile.value)
    );
  }

  mergeTiles() {
    const newValue = this.linkedTile.value + this.linkedTileForMerge.value;
    this.linkedTile.setValue(newValue);
    this.linkedTileForMerge.removeFromDOM();
    this.unlinkTileForMerge();

    return newValue;
  }
}
