var Words;
(function (Words) {
    let subjects = [
        "Der Bundeskanzler",
        "Olaf",
        "Donald Trump",
        "Helene Fischer",
        "Dein Vater"
    ];
    let verbs = [
        "spricht",
        "singt",
        "brüllt",
        "flüstert",
        "schreibt"
    ];
    let objects = [
        "Redewendungen",
        "WhatsApp-Chats",
        "BILD-Überschriften",
        "die Nationalhymne",
        "Trinksprüche"
    ];
    for (let index = subjects.length; index > 0; index--) {
        console.log(getVerse(subjects, verbs, objects));
    }
    function getVerse(_subjects, _verbs, _objects) {
        let _verse = "";
        let _randomNumber;
        _randomNumber = Math.floor(Math.random() * _subjects.length);
        let _randomSubjects = _subjects.splice(_randomNumber, 1);
        _randomNumber = Math.floor(Math.random() * _verbs.length);
        let _randomVerbs = _verbs.splice(_randomNumber, 1);
        _randomNumber = Math.floor(Math.random() * _objects.length);
        let _randomObjects = _objects.splice(_randomNumber, 1);
        _verse = _randomSubjects + " " + _randomVerbs + " " + _randomObjects;
        return _verse;
    }
})(Words || (Words = {}));
//# sourceMappingURL=RandomPoemMaker.js.map