function parseCookie(cookie) {
  const cookieObj = {};
  cookie.split(';').forEach((item) => {
    const parts = item.split('=');
    const key = parts[0].trim();
    const value = decodeURIComponent(parts[1]);
    cookieObj[key] = value;
  });
  return cookieObj;
}

if (cookie) {
  const cookieObj = parseCookie(cookie);
  const chestValue = cookieObj.chest; // Mendapatkan nilai dari properti "chest"

  if (chestValue) {
    // Gunakan chestValue sesuai kebutuhan
    console.log(`Nilai properti "chest" dalam cookie: ${chestValue}`);
  } else {
    console.log('Properti "chest" tidak ditemukan dalam cookie.');
  }
} else {
  console.log('Cookie tidak ditemukan dalam permintaan.');
}