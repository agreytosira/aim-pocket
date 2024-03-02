export function getFormattedTime() {
  const date = new Date();

  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const namaHari = hari[date.getDay()];
  const tanggal = date.getDate();
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ][date.getMonth()];
  const tahun = date.getFullYear();
  const jam = date.getHours().toString().padStart(2, "0");
  const menit = date.getMinutes().toString().padStart(2, "0");

  return `${namaHari}, ${tanggal} ${bulan} ${tahun} - ${jam}:${menit}`;
}

export function formatNumber(number) {
  return number.toLocaleString("id-ID");
}
