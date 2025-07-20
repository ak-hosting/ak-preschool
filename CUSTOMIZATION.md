# AK Kindergarten - Özelleştirme Rehberi

Bu rehber, Rize Anaokulu web şablonunu kendi ihtiyaçlarınıza göre özelleştirmenize yardımcı olur.

## 🎨 Renk Teması Değiştirme

### Ana Renkler
`assets/css/style.css` dosyasında CSS değişkenlerini düzenleyin:

```css
:root {
    --kindergarten-green: #4CAF50;   /* Ana yeşil renk */
    --kindergarten-yellow: #FFC107;  /* Sarı aksan */
    --kindergarten-blue: #2196F3;    /* Mavi renk */
    --kindergarten-orange: #FF9800;  /* Turuncu renk */
    --light-bg: #F9F7F0;             /* Açık arka plan */
    --dark-green: #2E7D32;           /* Koyu yeşil */
    --text-dark: #333;                /* Koyu metin */
    --text-light: #666;               /* Açık metin */
}
```

### Önerilen Renk Paletleri

#### Doğa Teması (Yeşil)
```css
:root {
    --kindergarten-green: #2E7D32;
    --kindergarten-yellow: #8BC34A;
    --kindergarten-blue: #4CAF50;
    --kindergarten-orange: #66BB6A;
}
```

#### Okyanus Teması (Mavi)
```css
:root {
    --kindergarten-green: #1976D2;
    --kindergarten-yellow: #42A5F5;
    --kindergarten-blue: #2196F3;
    --kindergarten-orange: #64B5F6;
}
```

#### Güneş Teması (Sarı/Turuncu)
```css
:root {
    --kindergarten-green: #FF9800;
    --kindergarten-yellow: #FFC107;
    --kindergarten-blue: #FFB74D;
    --kindergarten-orange: #FF8F00;
}
```

## 📝 İçerik Değiştirme

### Ana Sayfa Metinleri
`index.html` dosyasında aşağıdaki bölümleri düzenleyin:

#### Başlık ve Alt Başlık
```html
<h1 class="display-4 fw-bold">Çocuklarınızın Keşif Dünyası</h1>
<p class="lead">Rize'nin en sevilen anaokulunda güvenli ve eğlenceli eğitim</p>
```

#### Hakkımızda Bölümü
```html
<h2 class="mb-4">Rize Anaokulu'na Hoş Geldiniz</h2>
<p>2010 yılından beri Rize'de okul öncesi eğitimde öncü kurum olarak hizmet veriyoruz.</p>
```

### İletişim Bilgileri
```html
<address class="contact-info">
    <p><i class="fas fa-map-marker-alt me-2"></i> Çay Mah. Çocuk Sok. No:15, Rize</p>
    <p><i class="fas fa-phone-alt me-2"></i> (0464) 123 45 67</p>
    <p><i class="fas fa-envelope me-2"></i> ak@ak-pro.com</p>
</address>
```

## 🎯 Program Kartları Ekleme

### Yeni Program Kartı
```html
<div class="col-md-4 mb-4">
    <div class="program-card shadow" data-age="5-6">
        <div class="bg-success text-white p-3 text-center">
            <i class="fas fa-graduation-cap fa-3x"></i>
            <h3 class="mt-2">5-6 Yaş</h3>
        </div>
        <div class="p-3">
            <ul class="list-unstyled">
                <li><i class="fas fa-check text-success me-2"></i>Okuma yazmaya hazırlık</li>
                <li><i class="fas fa-check text-success me-2"></i>Matematik becerileri</li>
                <li><i class="fas fa-check text-success me-2"></i>İngilizce eğitimi</li>
                <li><i class="fas fa-check text-success me-2"></i>Bilim deneyleri</li>
            </ul>
        </div>
    </div>
</div>
```

### Program Kartı Renkleri
- `bg-success` - Yeşil (2-3 yaş)
- `bg-warning` - Sarı (3-4 yaş)
- `bg-info` - Mavi (4-5 yaş)
- `bg-primary` - Koyu mavi (5-6 yaş)
- `bg-secondary` - Gri (özel programlar)

## 👨‍🏫 Eğitmen Kartları

### Yeni Eğitmen Ekleme
```html
<div class="col-md-4 mb-4">
    <div class="teacher-card shadow">
        <div class="teacher-image">
            <i class="fas fa-user-graduate fa-5x text-primary"></i>
        </div>
        <div class="p-3">
            <h4>Öğretmen Adı</h4>
            <p class="text-muted">Uzmanlık Alanı</p>
            <p><i class="fas fa-star text-warning"></i> X yıllık deneyim</p>
            <p><i class="fas fa-graduation-cap text-info"></i> Eğitim Bilgisi</p>
        </div>
    </div>
</div>
```

### Eğitmen İkonları
- `fas fa-user-graduate` - Genel öğretmen
- `fas fa-music` - Müzik öğretmeni
- `fas fa-paint-brush` - Sanat öğretmeni
- `fas fa-running` - Spor öğretmeni
- `fas fa-language` - Dil öğretmeni

## 📅 Etkinlik Takvimi Özelleştirme

### Yeni Etkinlik Ekleme
`assets/js/calendar.js` dosyasında:

```javascript
getDefaultActivities() {
    return {
        '2024-09-02': { 
            title: 'Oryantasyon', 
            type: 'orientation', 
            icon: 'fas fa-users' 
        },
        '2024-09-05': { 
            title: 'Yeni Etkinlik', 
            type: 'workshop', 
            icon: 'fas fa-star' 
        },
        // Diğer etkinlikler...
    };
}
```

### Etkinlik Türleri
- `orientation` - Oryantasyon
- `field-trip` - Gezi
- `workshop` - Atölye
- `art` - Sanat
- `science` - Bilim
- `sports` - Spor
- `language` - Dil
- `nature` - Doğa
- `family` - Aile Katılımı

## 🖼️ Görsel Değiştirme

### Logo Değiştirme
```html
<a class="navbar-brand" href="#">
    <img src="assets/images/logo.png" alt="Logo" height="40">
    Rize Anaokulu
</a>
```

### Arka Plan Görselleri
```css
.header {
    background: linear-gradient(135deg, var(--kindergarten-green) 0%, var(--dark-green) 100%),
                url('assets/images/background.jpg') center/cover;
}
```

### Eğitmen Fotoğrafları
```html
<div class="teacher-image">
    <img src="assets/images/teachers/teacher1.jpg" alt="Öğretmen" class="img-fluid rounded-circle">
</div>
```

## 📱 Mobil Uyumluluk

### Responsive Breakpoints
- **Extra Large**: 1400px ve üzeri
- **Large**: 992px - 1199px
- **Medium**: 768px - 991px
- **Small**: 576px - 767px
- **Extra Small**: 575px ve altı

### Mobil Optimizasyonu
```css
@media (max-width: 767px) {
    .display-4 {
        font-size: 2rem;
    }
    
    .program-card {
        margin-bottom: 1.5rem;
    }
}
```

## 🔧 Teknik Özelleştirmeler

### SEO Meta Etiketleri
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rize Anaokulu - Çocukların Keşif Dünyası</title>
    <meta name="description" content="Rize'nin en sevilen anaokulunda güvenli ve eğlenceli eğitim">
    <meta name="keywords" content="Rize anaokulu, okul öncesi eğitim Rize">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Rize Anaokulu">
    <meta property="og:description" content="Çocuklarınızın keşif dünyası">
    <meta property="og:image" content="assets/images/og-image.jpg">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Rize Anaokulu">
</head>
```

### Google Analytics Ekleme
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel Ekleme
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🚀 Performans Optimizasyonu

### Görsel Optimizasyonu
```html
<!-- WebP formatında görseller -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Açıklama" loading="lazy">
</picture>
```

### CSS/JS Minifikasyonu
```bash
# CSS minifikasyonu
cleancss assets/css/style.css -o assets/css/style.min.css

# JS minifikasyonu
uglifyjs assets/js/main.js -o assets/js/main.min.js
```

### Browser Caching
```html
<!-- Cache headers -->
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

## 📞 İletişim Formu Özelleştirme

### Form Alanları Ekleme
```html
<div class="mb-3">
    <label class="form-label">Yeni Alan</label>
    <input type="text" class="form-control" name="newField" required>
</div>
```

### Form Validasyonu
```javascript
// Yeni validasyon kuralı
const emailInput = this.querySelector('input[type="email"]');
if (emailInput && emailInput.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        isValid = false;
        showFieldError(emailInput, 'Geçerli bir e-posta adresi giriniz');
    }
}
```

## 🎨 Özel CSS Ekleme

### Yeni Stil Sınıfları
```css
/* Özel buton stili */
.custom-btn {
    background: linear-gradient(45deg, var(--kindergarten-green), var(--kindergarten-blue));
    border: none;
    border-radius: 25px;
    padding: 12px 30px;
    color: white;
    font-weight: bold;
    transition: all 0.3s ease;
}

.custom-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* Özel kart stili */
.custom-card {
    background: white;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.custom-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}
```

## 🔍 SEO Optimizasyonu

### Anahtar Kelimeler
- "Rize anaokulu"
- "okul öncesi eğitim Rize"
- "çocuk kreşi Rize"
- "anaokulu tavsiye Rize"
- "Rize kreş fiyatları"

### Yerel SEO
```html
<!-- Schema.org markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Preschool",
  "name": "Rize Anaokulu",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Çay Mah. Çocuk Sok. No:15",
    "addressLocality": "Rize",
    "addressCountry": "TR"
  },
  "telephone": "(0464) 123 45 67",
  "email": "ak@ak-pro.com"
}
</script>
```

## 📋 Kontrol Listesi

### Temel Özelleştirmeler
- [ ] Renk teması değiştirildi
- [ ] Logo eklendi
- [ ] İletişim bilgileri güncellendi
- [ ] Program kartları düzenlendi
- [ ] Eğitmen bilgileri eklendi
- [ ] Etkinlik takvimi güncellendi

### Teknik Optimizasyonlar
- [ ] SEO meta etiketleri eklendi
- [ ] Google Analytics kuruldu
- [ ] Görseller optimize edildi
- [ ] CSS/JS minifikasyonu yapıldı
- [ ] Browser caching ayarlandı

### Test Edilmesi Gerekenler
- [ ] Mobil uyumluluk test edildi
- [ ] Form validasyonu çalışıyor
- [ ] Tüm linkler çalışıyor
- [ ] Sayfa yükleme hızı kabul edilebilir
- [ ] SEO testleri geçildi

---

**İhtiyacınız olan başka bir özelleştirme var mı?** ak@ak-pro.com adresinden iletişime geçebilirsiniz. 