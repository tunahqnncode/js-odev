// 1

let batteryLevel = 15;
let isCharging = false;

if (batteryLevel < 20 && isCharging === false) {
    console.log("Düşük pil! Lütfen şarja takın.");
} else {
    console.log("Pil durumu normal.");
}

// 2

let dividend = 45;
let divisor = 0;

if (divisor === 0) {
    console.log("Bölme işlemi tanımsızdır");
} else if (dividend % divisor === 0) {
    console.log("Tam bölünüyor.");
} else {
    console.log("Kalanlı bölme.");
}

// 3

let maxWeight = 400;
let personCount = 5;
let averageWeight = 80;

if (personCount * averageWeight > maxWeight) {
    console.log("Kapasite aşıldı! Asansör hareket edemez.");
} else {
    console.log("İyi yolculuklar.");
}

// 4

const username = "tunahanbalci";

if (username.length < 4 || username.length > 12) {
    console.log("Geçersiz kullanıcı adı uzunluğu.");
} else {
    console.log("Kullanıcı adı kabul edildi.");
}

// 5 

let num = 28;

if (num % 2 === 0 && num % 10 !== 0) {
    console.log("Aranan sayı bulundu!");
} else {
    console.log("Kurala uymuyor.");
}

// 6 

let hour = 22;

if (hour >= 20 || hour < 6) {
    console.log("Gece modu aktif.");
} else {
    console.log("Gündüz modu aktif.");
}

// 7 

let waterTemp = 105;

if (waterTemp === 0 || waterTemp === 100) {
    console.log("Hal değişim noktası!");
}

if (waterTemp <= 0) {
    console.log("Katı (Buz)");
} else if (waterTemp < 100) {
    console.log("Sıvı (Su)");
} else {
    console.log("Gaz (Buhar)");
}

// 8

let speed = 115;
let speedLimit = 90;
let difference = speed - speedLimit;

if (difference <= 0) {
    console.log("İyi sürüşler.");
} else if (difference <= 20) {
    console.log("Uyarı: Hız sınırını aştınız.");
} else if (difference <= 40) {
    console.log("1000 TL Ceza.");
} else {
    console.log("Ehliyete el konuldu.");
}

// 9

const coffeeType = "Latte";
const hasMilk = false;
const hasWater = true;

if (hasWater === false) {
    console.log("Su bitti!");
} else if (
    (coffeeType === "Latte" || coffeeType === "Cappuccino") &&
    hasMilk === false
) {
    console.log("Süt bitti, bu kahve yapılamaz.");
} else {
    console.log("Kahveniz hazırlanıyor...");
}

// 10

let a = 1;
let b = -4;
let c = 4;

let delta = (b * b) - (4 * a * c);

if (delta > 0) {
    console.log("İki farklı gerçek kök var.");
} else if (delta === 0) {
    console.log("Çakışık (tek) gerçek kök var.");
} else {
    console.log("Gerçek kök yok.");
}

// 11

let currentPlan = "Standart";
let storageUsed = 95;
let maxStorage = 100;

if (storageUsed > maxStorage) {
    console.log("Alan doldu! Acil yükseltme gerekli.");
} else if (storageUsed >= maxStorage * 0.9) {
    console.log("Alan neredeyse doldu.");
} else {
    console.log("Yeterli depolama alanınız var.");
}

// 12


let x = -4;
let y = 7;

if (x === 0 && y === 0) {
    console.log("Orijin (Başlangıç noktası)");
} else if (x === 0 || y === 0) {
    console.log("Eksen üzerinde");
} else if (x > 0 && y > 0) {
    console.log("1. Bölge");
} else if (x < 0 && y > 0) {
    console.log("2. Bölge");
} else if (x < 0 && y < 0) {
    console.log("3. Bölge");
} else if (x > 0 && y < 0) {
    console.log("4. Bölge");
}

// 13

let consumption = 320;
let bill;

if (consumption <= 150) {
    bill = consumption * 2;
} else {
    bill = (150 * 2) + ((consumption - 150) * 3);
}

console.log("Toplam fatura: " + bill + " TL");

// 14 


let hours = 5;
let isDisabled = false;
let fee;

if (isDisabled === true) {
    fee = 0;
} else if (hours <= 1) {
    fee = 50;
} else if (hours <= 4) {
    fee = 50 + ((hours - 1) * 30);
} else {
    fee = 200;
}

console.log("Ödenecek tutar: " + fee + " TL");

// 15

let income = 35000;
let creditScore = 1350;
let hasDebt = true;

if (creditScore < 1100) {
    console.log("Kredi reddedildi (Düşük puan).");
} else if (creditScore < 1500) {
    if (income >= 30000 && hasDebt === false) {
        console.log("Onaylandı");
    } else {
        console.log("Gelir yetersiz veya mevcut borç var.");
    }
} else {
    console.log("Koşulsuz onaylandı!");
}

// 16 


let handLuggage = 9;
let cabinLuggage = 23;
let isBusinessClass = false;

let handLimit;
let cabinLimit;

if (isBusinessClass === true) {
    handLimit = 12;
    cabinLimit = 30;
} else {
    handLimit = 8;
    cabinLimit = 20;
}

let handExcess = 0;
let cabinExcess = 0;

if (handLuggage > handLimit) {
    handExcess = handLuggage - handLimit;
}

if (cabinLuggage > cabinLimit) {
    cabinExcess = cabinLuggage - cabinLimit;
}

let totalFee = (handExcess + cabinExcess) * 100;

console.log("Toplam ekstra ücret: " + totalFee + " TL");

// 17

let currentTemp = 19; 
let targetTemp = 22; 
let isWindowOpen = false; 
let isSomeoneHome = true;

if (isWindowOpen === true || isSomeoneHome === false) {
    if (isWindowOpen === true) {
        console.log("Pencere açık, kombi kapatıldı.");
    } else if (isSomeoneHome === false) {
        console.log("Evde kimse yok, kombi kapatıldı.");
    }
} else if (currentTemp < targetTemp) {
    console.log("Kombi çalışıyor.");
} else {
    console.log("Hedef sıcaklığa ulaşıldı, kombi beklemede.");
}

// 18

let cartAmount = 600;
let couponCode = "SUPER100";
let isFirstOrder = true;

let discount = 0;

if (couponCode === "HOSGELDIN" && isFirstOrder === true) {
    discount = 150;
} else if (couponCode === "SUPER100" && cartAmount >= 500) {
    discount = 100;
}

if (discount > 0) {
    console.log(`İndirim uygulandı. İndirim: ${discount} TL`);
    console.log(`Ödenecek tutar: ${cartAmount - discount} TL`);
} else {
    console.log("Kupon kullanılamadı.");
    console.log(`Ödenecek tutar: ${cartAmount} TL`);
}