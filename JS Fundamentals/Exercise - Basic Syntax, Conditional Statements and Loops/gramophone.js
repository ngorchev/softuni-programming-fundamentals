function gramophone(band, album, song){

    let oneRotation = Number(2.5);
    let songDurationInSec = (album.length * band.length * song.length / 2)

    let rotations = songDurationInSec / oneRotation;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);

}
gramophone('Rammstein', 'Sehnsucht',

'Engel')