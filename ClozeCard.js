function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    var fullText = this.text + "-" + this.cloze + "-";
}

module.exports = ClozeCard;