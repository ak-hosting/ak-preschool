# AK Kindergarten - Rize Anaokulu Web Sitesi Şablonu

![Rize Anaokulu](https://img.shields.io/badge/Version-1.0.0-green) ![License](https://img.shields.io/badge/License-MIT-blue) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple)

Rize'deki anaokulları için ücretsiz, renkli ve eğitici web şablonu. Bootstrap 5 ile geliştirildi.

**[Canlı Demo](https://ak-hosting.github.io/ak-kindergarten/)** | **[Özelleştirme Talebi](mailto:ak@ak-pro.com)**

## 🎨 Temel Özellikler

- **Çocuk Dostu Tasarım**: Pastel renkler ve yuvarlak köşeler
- **Program Tanıtımı**: Yaş gruplarına özel eğitim programları
- **Sanal Tur**: 360° sınıf gezisi (demo)
- **Etkinlik Takvimi**: Aylık aktivite planı
- **Ön Kayıt Formu**: Veliler için kolay başvuru
- **SEO Optimize**: "Rize anaokulu" anahtar kelimeleri
- **%100 Responsive**: Tüm cihazlarda mükemmel görünüm

## 🛠️ Kurulum

### Docker ile (Önerilen)
```bash
# Projeyi klonlayın
git clone https://github.com/ak-hosting/ak-kindergarten.git
cd ak-kindergarten

# Docker container'ı başlatın
docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine

# Tarayıcıda açın
open http://localhost:8080
```

### Manuel Kurulum
```bash
# Projeyi klonlayın
git clone https://github.com/ak-hosting/ak-kindergarten.git
cd ak-kindergarten

# Python HTTP server başlatın
python3 -m http.server 8000

# Tarayıcıda açın
open http://localhost:8000
```

### Node.js ile
```bash
# Projeyi klonlayın
git clone https://github.com/ak-hosting/ak-kindergarten.git
cd ak-kindergarten

# npx serve ile başlatın
npx serve .

# Tarayıcıda açın
open http://localhost:3000
```

## 📁 Proje Yapısı

```
ak-kindergarten/
├── index.html              # Ana sayfa
├── assets/
│   ├── css/
│   │   ├── style.css       # Ana stil dosyası
│   │   └── responsive.css  # Responsive tasarım
│   ├── js/
│   │   ├── main.js         # Genel fonksiyonlar
│   │   └── calendar.js     # Etkinlik takvimi
│   └── images/             # Görseller (gelecekte eklenecek)
├── README.md               # Bu dosya
├── CUSTOMIZATION.md        # Özelleştirme rehberi
└── LICENSE                 # MIT lisansı
```

## ✏️ Özelleştirme

### Renk Teması Değiştirme
`assets/css/style.css` dosyasında CSS değişkenlerini düzenleyin:

```css
:root {
  --kindergarten-green: #4CAF50;   /* Ana yeşil renk */
  --kindergarten-yellow: #FFC107;  /* Sarı aksan */
  --kindergarten-blue: #2196F3;    /* Mavi renk */
  --kindergarten-orange: #FF9800;  /* Turuncu renk */
}
```

### Program Ekleme
`index.html` dosyasında yeni program kartı ekleyin:

```html
<div class="col-md-4 mb-4">
  <div class="program-card shadow" data-age="4-5">
    <div class="bg-info text-white p-3 text-center">
      <i class="fas fa-music fa-3x"></i>
      <h3 class="mt-2">Müzik Atölyesi</h3>
    </div>
    <div class="p-3">
      <ul class="list-unstyled">
        <li><i class="fas fa-check text-success me-2"></i>Ritm çalışmaları</li>
        <li><i class="fas fa-check text-success me-2"></i>Enstrüman tanıma</li>
        <li><i class="fas fa-check text-success me-2"></i>Grup müziği</li>
      </ul>
    </div>
  </div>
</div>
```

### Eğitmen Ekleme
Yeni eğitmen kartı ekleyin:

```html
<div class="col-md-4 mb-4">
  <div class="teacher-card shadow">
    <div class="teacher-image">
      <i class="fas fa-user-graduate fa-5x text-warning"></i>
    </div>
    <div class="p-3">
      <h4>Yeni Öğretmen</h4>
      <p class="text-muted">Uzmanlık Alanı</p>
      <p><i class="fas fa-star text-warning"></i> X yıllık deneyim</p>
    </div>
  </div>
</div>
```

### Etkinlik Takvimi Özelleştirme
`assets/js/calendar.js` dosyasında etkinlikleri düzenleyin:

```javascript
getDefaultActivities() {
    return {
        '2024-09-02': { 
            title: 'Yeni Etkinlik', 
            type: 'workshop', 
            icon: 'fas fa-star' 
        },
        // Diğer etkinlikler...
    };
}
```

## 📊 Rize'de Anaokulu Pazarı

### Demografik Yapı
- **Rize nüfusu**: 350,000+
- **0-6 yaş nüfus oranı**: %8.2
- **Yıllık doğum sayısı**: 3,500+

### Tasarım İhtiyaçları
- Ebeveynlerin güvenini kazanan profesyonel arayüz
- Çocuk gelişimi vurgulu içerik
- Şeffaf iletişim kanalları

### Rekabet Avantajları
- "Rize'nin doğasıyla iç içe eğitim"
- "Çay kültürü atölyeleri"
- "Deneyimli eğitmen kadrosu"

### SEO Stratejisi
- "rize anaokulu tavsiye"
- "okul öncesi eğitim rize"
- "çocuk kreşi fiyatları rize"

## 🚀 Performans Optimizasyonu

### Görsel Optimizasyonu
- WebP formatında görseller
- Lazy loading implementasyonu
- Responsive image sizing

### CSS/JS Minifikasyonu
```bash
# CSS minifikasyonu için
npm install -g clean-css-cli
cleancss assets/css/style.css -o assets/css/style.min.css

# JS minifikasyonu için
npm install -g uglify-js
uglifyjs assets/js/main.js -o assets/js/main.min.js
```

### Browser Caching
```html
<!-- Cache headers for static assets -->
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

## 📱 Mobil Uyumluluk

- Bootstrap 5 Grid sistemi
- Touch-friendly butonlar
- Responsive typography
- Mobile-first approach

## 🔧 Teknik Özellikler

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid & Flexbox
- **JavaScript ES6+**: Modern JavaScript features
- **Bootstrap 5**: Latest Bootstrap framework
- **Font Awesome 6**: Icon library
- **Google Fonts**: Custom typography

## 📞 Ücretli Özelleştirmeler

### Premium Özellikler
- **Veli Giriş Paneli**: Ödev takibi, yemek menüsü
- **Online Ödeme Sistemi**: Aylık ücret ödemeleri
- **Mobil Uygulama Entegrasyonu**
- **Canlı Kamera Sistemi** (demo)
- **Gelişmiş SEO Optimizasyonu**
- **Çoklu Dil Desteği**

### İletişim
- **E-posta**: ak@ak-pro.com
- **GitHub**: https://github.com/ak-hosting
- **Web**: https://ak-pro.com

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 🙏 Teşekkürler

- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Typography
- [Rize Belediyesi](https://rize.bel.tr/) - Yerel işbirliği

## 📈 İstatistikler

![GitHub stars](https://img.shields.io/github/stars/ak-hosting/ak-kindergarten)
![GitHub forks](https://img.shields.io/github/forks/ak-hosting/ak-kindergarten)
![GitHub issues](https://img.shields.io/github/issues/ak-hosting/ak-kindergarten)

---

**Geliştirici**: a.koc - [GitHub](https://github.com/ak-hosting)

*Rize'nin anaokulları için modern ve eğitici web çözümleri* 