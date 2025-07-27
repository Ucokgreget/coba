const startId = 23041450067;
const jumlahLink = 10;

for (let i = 0; i < jumlahLink; i++) {
  const currentId = startId + i * 1;

  // panggil fungsi seperti di tombol
  fnCetakTranskrip(String(currentId), 0);
}
