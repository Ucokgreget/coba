const startId = 564263;
const jumlahLink = 10;

for (let i = 0; i < jumlahLink; i++) {
  const currentId = startId + i * 1;
  const url = `<input type="button" name="btnTranskrip" value="Transkrip Nilai" onclick="javascript:fnCetakTranskrip('${currentId}', 0)" class="btn btn-primary"></input>`;
  window.open(url, '_blank');
}

