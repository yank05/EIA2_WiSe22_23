namespace Words {

    type WordArrays = string;

    let subjects: WordArrays[] = [
        "Der Bundeskanzler",
        "Olaf",
        "Donald Trump",
        "Helene Fischer",
        "Dein Vater"
    ]; 

    let verbs: WordArrays[] = [
        "spricht",
        "singt",
        "brüllt",
        "flüstert",
        "schreibt"
    ]; 

    let objects: WordArrays[] = [
        "Redewendungen",
        "WhatsApp-Chats",
        "BILD-Überschriften",
        "die Nationalhymne",
        "Trinksprüche"
    ]; 

    for (let index: number = subjects.length; index > 0; index--) {
       console.log(getVerse(subjects, verbs, objects));
    }
    function getVerse (_subjects: string[], _verbs: string[], _objects: string[]): string {
        let _verse: string = ""; 
        let _randomNumber: number; 
        
        _randomNumber = Math.floor(Math.random() * _subjects.length);  
        let _randomSubjects: string[] = _subjects.splice(_randomNumber, 1); 

        _randomNumber = Math.floor(Math.random() * _verbs.length);  
        let _randomVerbs: string[] = _verbs.splice(_randomNumber, 1); 

        _randomNumber = Math.floor(Math.random() * _objects.length);  
        let _randomObjects: string[] = _objects.splice(_randomNumber, 1); 

        _verse = _randomSubjects + " " + _randomVerbs + " " + _randomObjects; 
        return _verse; 
    }
} 
