(function () {
    'use strict';

    // ===== Equipment Data =====
    var equipmentItems = [
        // KURSI
        {
            id: 1,
            title: "Kursi Susun",
            category: "kursi",
            image: "img/Futura.png",
            alt: "Kursi Futura",
            description: "Kursi modern dengan desain ergonomis, nyaman untuk acara indoor maupun outdoor, material berkualitas tinggi.",
            price: "Rp5.000/pcs"
        },
        {
            id: 2,
            title: "Kursi Susun + Cover",
            category: "kursi",
            image: "img/product-2.png",
            alt: "Kursi Chitose",
            description: "Kursi elegan dengan bantal tebal, cocok untuk acara formal dan pernikahan, mudah dibersihkan.",
            price: "Rp4.000/pcs"
        },
        {
            id: 3,
            title: "Kursi Susun + Cover + Pita",
            category: "kursi",
            image: "img/product-3.png",
            alt: "Kursi Banquet",
            description: "Kursi banquet premium dengan frame besi, desain klasik yang cocok untuk semua jenis acara.",
            price: "Rp6.000/pcs"
        },
        {
            id: 4,
            title: "Kursi Tiffany Putih",
            category: "kursi",
            image: "img/product-4.png",
            alt: "Kursi Tiffany Putih",
            description: "Kursi Tiffany mewah dengan finishing putih, sempurna untuk acara wedding dan acara eksklusif.",
            price: "Rp7.500/pcs"
        },
        {
            id: 5,
            title: "Kursi Tifanny Emas",
            category: "kursi",
            image: "img/product-1.png",
            alt: "Kursi Lipat Putih",
            description: "Kursi lipat praktis dalam warna putih, mudah disimpan dan dipindahkan, ideal untuk outdoor event.",
            price: "Rp3.500/pcs"
        },
        {
            id: 6,
            title: "Kursi Akrilik",
            category: "kursi",
            image: "img/product-2.png",
            alt: "Kursi Akrilik",
            description: "Kursi bar modern dengan sandaran, sempurna untuk lounge area dan cocktail party.",
            price: "Rp8.000/pcs"
        },
{
            id: 7,
            title: "Kursi Sofa Hitam",
            category: "kursi",
            image: "img/product-2.png",
            alt: "Kursi Sofa Hitam",
            description: "Kursi sofa modern dengan bahan berkualitas, sempurna untuk area tamu dan ruang keluarga.",
            price: "Rp12.000/pcs"
        },
        {
            id: 8,
            title: "Kursi Sofa Putih",
            category: "kursi",
            image: "img/product-3.png",
            alt: "Kursi Sofa Putih",
            description: "Kursi sofa elegan dengan warna putih bersih, desain modern dan nyaman untuk berbagai acara spesial.",
            price: "Rp13.000/pcs"
        },
        {
            id: 9,
            title: "Kursi Sofa Puff",
            category: "kursi",
            image: "img/product-4.png",
            alt: "Kursi Sofa Puff",
            description: "Kursi sofa puff dengan desain bulat empuk, sempurna untuk lounge area dan santai yang nyaman.",
            price: "Rp10.000/pcs"
        },
        {
            id: 10,
            title: "Kursi Bar",
            category: "kursi",
            image: "img/product-1.png",
            alt: "Kursi Bar",
            description: "Kursi bar tinggi dengan sandaran kaki, ideal untuk cocktail party dan area bar yang stylish.",
            price: "Rp9.000/pcs"
        },
        {
            id: 11,
            title: "Kursi Dealing",
            category: "kursi",
            image: "img/product-2.png",
            alt: "Kursi Dealing",
            description: "Kursi dealing profesional untuk meeting dan negosiasi, desain ergonomis dengan kenyamanan maksimal.",
            price: "Rp11.000/pcs"
        },
        {
            id: 12,
            title: "Kursi Scrumble",
            category: "kursi",
            image: "img/product-3.png",
            alt: "Kursi Scrumble",
            description: "Kursi scrumble multifungsi dengan desain modern, cocok untuk area kerja dan diskusi informal.",
            price: "Rp8.500/pcs"
        },
        {
            id: 13,
            title: "Kursi Jepara VIP",
            category: "kursi",
            image: "img/product-4.png",
            alt: "Kursi Jepara VIP",
            description: "Kursi VIP buatan Jepara dengan ukiran mewah, kualitas premium untuk acara eksklusif dan formal.",
            price: "Rp15.000/pcs"
        },
        {
            id: 14,
            title: "Bean Bag",
            category: "kursi",
            image: "img/product-1.png",
            alt: "Bean Bag",
            description: "Bean bag empuk dan nyaman, sempurna untuk area santai dan lounge dengan berbagai pilihan warna.",
            price: "Rp7.000/pcs"
        },

        // TENDA
        {
            id: 15,
            title: "Tenda Sarnavile 3x3",
            category: "tenda",
            image: "img/product-3.png",
            alt: "Tenda Sarnavile 3x3",
            description: "Tenda Sarnavile 3x3 dengan rangka kokoh, tahan air dan angin, mudah dipasang dan dibongkar.",
            price: "Rp350.000/hari"
        },
        {
            id: 16,
            title: "Tenda Sarnavile 5x5",
            category: "tenda",
            image: "img/product-4.png",
            alt: "Tenda Sarnavile 5x5",
            description: "Tenda Sarnavile 5x5 untuk acara yang lebih besar, kapasitas hingga 30 orang, material canvas berkualitas.",
            price: "Rp750.000/hari"
        },
        {
            id: 17,
            title: "Tenda Transparan",
            category: "tenda",
            image: "img/product-1.png",
            alt: "Tenda Transparan",
            description: "Tenda transparan dengan rangka aluminium, memberikan kesan elegan dan modern untuk wedding minimalis.",
            price: "Rp900.000/hari"
        },
        {
            id: 18,
            title: "Tenda Piramid",
            category: "tenda",
            image: "img/product-2.png",
            alt: "Tenda Piramid",
            description: "Tenda piramid dengan desain unik, cocok untuk photo booth, reception area, atau standing area informal.",
            price: "Rp500.000/hari"
        },
        {
            id: 19,
            title: "Tenda Frame 8x12",
            category: "tenda",
            image: "img/product-3.png",
            alt: "Tenda Frame 8x12",
            description: "Tenda frame dengan ukuran besar 8x12, sistim ventilasi baik, dengan side wall dan matras lantai.",
            price: "Rp1.200.000/hari"
        },
        {
            id: 20,
            title: "Tenda Dekorasi Putih",
            category: "tenda",
            image: "img/product-4.png",
            alt: "Tenda Dekorasi Putih",
            description: "Tenda dekorasi putih dengan lampu LED ambient, untuk menciptakan suasana estetik dan Instagram-worthy.",
            price: "Rp850.000/hari"
        },

        // PANGGUNG & RIGGING
        {
            id: 21,
            title: "Panggung Portable 4x2m",
            category: "panggung",
            image: "img/product-1.png",
            alt: "Panggung Portable 4x2m",
            description: "Panggung portable modular dengan tinggi dapat disesuaikan, dilengkapi dengan tangga dan pagar pengaman.",
            price: "Rp500.000/hari"
        },
        {
            id: 22,
            title: "Panggung Kayu 6x4m",
            category: "panggung",
            image: "img/product-2.png",
            alt: "Panggung Kayu 6x4m",
            description: "Panggung kayu premium dengan lantai yang kokoh, coating anti slip, ideal untuk pertunjukan dan konser.",
            price: "Rp750.000/hari"
        },
        {
            id: 23,
            title: "Rigging System Profesional",
            category: "panggung",
            image: "img/product-3.png",
            alt: "Rigging System Profesional",
            description: "Sistem rigging dengan truss aluminium, hoist, dan sling, untuk menggantung equipment dan dekorasi dengan aman.",
            price: "Rp2.000.000/set"
        },
        {
            id: 24,
            title: "Backdrop Frame 5x3m",
            category: "panggung",
            image: "img/product-4.png",
            alt: "Backdrop Frame 5x3m",
            description: "Frame backdrop profesional dengan sistem quick connect, mudah dipasang dan dapat dikustomisasi.",
            price: "Rp600.000/hari"
        },
        {
            id: 25,
            title: "Truss Aluminium Modular",
            category: "panggung",
            image: "img/product-1.png",
            alt: "Truss Aluminium Modular",
            description: "Truss aluminium modular dengan berbagai panjang, ringan namun kuat, cocok untuk setup panggung dan lighting.",
            price: "Rp150.000/panjang"
        },

        // LIGHTING
        {
            id: 26,
            title: "LED Par 64 RGBW",
            category: "lighting",
            image: "img/product-2.png",
            alt: "LED Par 64 RGBW",
            description: "LED Par 64 dengan 4 warna (RGBW), mode automatis dan music sync, hemat energi dan tahan lama.",
            price: "Rp75.000/hari"
        },
        {
            id: 27,
            title: "Lampu Moving Head Spot",
            category: "lighting",
            image: "img/product-3.png",
            alt: "Lampu Moving Head Spot",
            description: "Moving head profesional dengan 300W OSRAM lamp, efek beam dan gobo, kontrol DMX yang presisi.",
            price: "Rp400.000/hari"
        },
        {
            id: 28,
            title: "Wash Light LED Ring",
            category: "lighting",
            image: "img/product-4.png",
            alt: "Wash Light LED Ring",
            description: "LED wash light berbentuk ring dengan 360 derajat illumunasi, sempurna untuk uplighting dan ambient lighting.",
            price: "Rp100.000/hari"
        },
        {
            id: 29,
            title: "Projector 3D Hologram",
            category: "lighting",
            image: "img/product-1.png",
            alt: "Projector 3D Hologram",
            description: "Projector 3D dengan teknologi hologram, menciptakan efek visual spektakuler untuk panggung utama.",
            price: "Rp1.500.000/hari"
        },
        {
            id: 30,
            title: "LED Strip Flexible",
            category: "lighting",
            image: "img/product-2.png",
            alt: "LED Strip Flexible",
            description: "LED strip fleksibel RGB dengan panjang 10m, dapat dilem di berbagai permukaan, mudah dikontrol via remote.",
            price: "Rp50.000/roll"
        },

        // SOUND SYSTEM
        {
            id: 31,
            title: "Speaker Active 15 inch",
            category: "sound",
            image: "img/product-3.png",
            alt: "Speaker Active 15 inch",
            description: "Speaker active 15 inch dengan amplifier built-in, suara jernih dan bass dalam, ideal untuk indoor events.",
            price: "Rp150.000/hari"
        },
        {
            id: 32,
            title: "Subwoofer Profesional 18 inch",
            category: "sound",
            image: "img/product-4.png",
            alt: "Subwoofer Profesional 18 inch",
            description: "Subwoofer 18 inch dengan amplifier sendiri, menghasilkan bass yang powerful untuk party dan konser.",
            price: "Rp200.000/hari"
        },
        {
            id: 33,
            title: "Microphone Wireless Profesional",
            category: "sound",
            image: "img/product-1.png",
            alt: "Microphone Wireless Profesional",
            description: "Wireless microphone system dengan 2 handheld unit, jangkauan hingga 100m, signal stabil dan jernih.",
            price: "Rp75.000/set"
        },
        {
            id: 34,
            title: "DJ Mixer Pioneer DJM",
            category: "sound",
            image: "img/product-2.png",
            alt: "DJ Mixer Pioneer DJM",
            description: "Professional DJ mixer dengan efek built-in, 4 channel, ekualisasi presisi, cocok untuk DJ profesional.",
            price: "Rp500.000/hari"
        },
        {
            id: 35,
            title: "Amplifier Power 1000W",
            category: "sound",
            image: "img/product-3.png",
            alt: "Amplifier Power 1000W",
            description: "Power amplifier 1000W stereo, dapat mengedrive multiple speaker, proteksi thermal lengkap.",
            price: "Rp150.000/hari"
        },

        // MEJA
        {
            id: 36,
            title: "Meja Persegi Putih",
            category: "meja",
            image: "img/product-4.png",
            alt: "Meja Persegi Putih",
            description: "Meja persegi dengan permukaan putih, ukuran standar cocktail dan dinner, mudah dibersihkan.",
            price: "Rp40.000/hari"
        },
        {
            id: 37,
            title: "Meja Bundar Mewah",
            category: "meja",
            image: "img/product-1.png",
            alt: "Meja Bundar Mewah",
            description: "Meja bundar dengan diameter 1.2m, dilengkapi dengan alas putih atau hitam, sempurna untuk makan malam.",
            price: "Rp60.000/hari"
        },
        {
            id: 38,
            title: "Meja Cocktail Tinggi",
            category: "meja",
            image: "img/product-2.png",
            alt: "Meja Cocktail Tinggi",
            description: "Meja cocktail dengan tinggi standing, cocok untuk standing reception dan mingling area.",
            price: "Rp35.000/hari"
        },
        {
            id: 39,
            title: "Meja Panjang Buffet",
            category: "meja",
            image: "img/product-3.png",
            alt: "Meja Panjang Buffet",
            description: "Meja panjang untuk buffet setup, ukuran 2.4m x 0.8m, dengan kaki yang stabil dan kokoh.",
            price: "Rp50.000/hari"
        },
        {
            id: 40,
            title: "Meja Persegi Akad",
            category: "meja",
            image: "img/product-4.png",
            alt: "Meja Persegi Akad",
            description: "Meja persegi khusus untuk akad nikah, dengan finishing mewah dan cover premium tersedia.",
            price: "Rp75.000/hari"
        },

        // FLOORING
        {
            id: 41,
            title: "Dance Floor Hitam Glossy",
            category: "flooring",
            image: "img/product-1.png",
            alt: "Dance Floor Hitam Glossy",
            description: "Dance floor modular dengan permukaan glossy hitam, ukuran 2x2m, dapat disusun sesuai kebutuhan.",
            price: "Rp150.000/hari"
        },
        {
            id: 42,
            title: "Flooring Plastik Motif Kayu",
            category: "flooring",
            image: "img/product-2.png",
            alt: "Flooring Plastik Motif Kayu",
            description: "Lantai plastik motif kayu, anti slip dan mudah dibersihkan, cocok untuk indoor events.",
            price: "Rp80.000/hari"
        },
        {
            id: 43,
            title: "Karpet Biru Tebal",
            category: "flooring",
            image: "img/product-3.png",
            alt: "Karpet Biru Tebal",
            description: "Karpet tebal warna biru, nyaman untuk digunakan di area resepsi, melindungi lantai asli.",
            price: "Rp70.000/hari"
        },
        {
            id: 44,
            title: "LED Dance Floor RGB",
            category: "flooring",
            image: "img/product-4.png",
            alt: "LED Dance Floor RGB",
            description: "Dance floor dengan LED RGB terintegrasi, dapat menyala sesuai irama musik, efek visual menakjubkan.",
            price: "Rp500.000/hari"
        },
        {
            id: 45,
            title: "Pallet Kayu Finishing",
            category: "flooring",
            image: "img/product-1.png",
            alt: "Pallet Kayu Finishing",
            description: "Pallet kayu dengan finishing halus, dapat disusun untuk membuat elevated platform area.",
            price: "Rp30.000/pcs"
        },

        // MULTIMEDIA
        {
            id: 46,
            title: "Proyektor 5000 Lumens",
            category: "multimedia",
            image: "img/product-2.png",
            alt: "Proyektor 5000 Lumens",
            description: "Proyektor profesional 5000 lumens, resolusi 1080p, cocok untuk outdoor dan indoor events.",
            price: "Rp400.000/hari"
        },
        {
            id: 47,
            title: "LED Screen 2x3m",
            category: "multimedia",
            image: "img/product-3.png",
            alt: "LED Screen 2x3m",
            description: "LED screen outdoor dengan resolusi tinggi, brightness 5000 nits, sempurna untuk live streaming dan display.",
            price: "Rp2.000.000/hari"
        },
        {
            id: 48,
            title: "Layar Proyeksi Manual",
            category: "multimedia",
            image: "img/product-4.png",
            alt: "Layar Proyeksi Manual",
            description: "Layar proyeksi manual dengan ukuran 2x2m, material anti kusut, mudah dipasang di mana saja.",
            price: "Rp100.000/hari"
        },
        {
            id: 49,
            title: "Video Switcher 4 Channel",
            category: "multimedia",
            image: "img/product-1.png",
            alt: "Video Switcher 4 Channel",
            description: "Video switcher profesional untuk live streaming, 4 input, dengan efek transisi smooth.",
            price: "Rp500.000/hari"
        },
        {
            id: 50,
            title: "Camera Kamera HD",
            category: "multimedia",
            image: "img/product-2.png",
            alt: "Camera HD",
            description: "Kamera HD untuk dokumentasi event, dengan stabilizer built-in, hasil video jernih dan profesional.",
            price: "Rp300.000/hari"
        },

        // GENSET
        {
            id: 51,
            title: "Genset 5000W",
            category: "genset",
            image: "img/product-3.png",
            alt: "Genset 5000W",
            description: "Genset 5000W dengan suara minimal, bahan bakar hemat, cocok untuk event outdoor berukuran sedang.",
            price: "Rp250.000/hari"
        },
        {
            id: 52,
            title: "Genset 10000W",
            category: "genset",
            image: "img/product-4.png",
            alt: "Genset 10000W",
            description: "Genset 10000W berkapasitas besar, dapat mencukupi power untuk equipment sound dan lighting profesional.",
            price: "Rp400.000/hari"
        },
        {
            id: 53,
            title: "Genset Silent 3000W",
            category: "genset",
            image: "img/product-1.png",
            alt: "Genset Silent 3000W",
            description: "Genset silent khusus dengan noise level rendah, ideal untuk event di area residential.",
            price: "Rp180.000/hari"
        },
        {
            id: 54,
            title: "Genset Inverter Portable",
            category: "genset",
            image: "img/product-2.png",
            alt: "Genset Inverter Portable",
            description: "Genset inverter portable ringkas, stabil untuk electronic device, output arus bersih tanpa noise.",
            price: "Rp150.000/hari"
        },
        {
            id: 55,
            title: "Genset 15000W Diesel",
            category: "genset",
            image: "img/product-3.png",
            alt: "Genset 15000W Diesel",
            description: "Genset diesel 15000W untuk event besar, bahan bakar efisien, durabilitas tinggi untuk penggunaan panjang.",
            price: "Rp500.000/hari"
        },

        // TIANG PEMBATAS
        {
            id: 56,
            title: "Stanchion Chrome Premium",
            category: "tiang",
            image: "img/product-4.png",
            alt: "Stanchion Chrome Premium",
            description: "Tiang pembatas chrome premium dengan rope merah ke kuning, untuk merapikan antrian dan demarkasi area.",
            price: "Rp25.000/pcs"
        },
        {
            id: 57,
            title: "Stanchion Black Besi",
            category: "tiang",
            image: "img/product-1.png",
            alt: "Stanchion Black Besi",
            description: "Tiang pembatas besi warna hitam, kokoh dan tahan lama, cocok untuk akses kontrol area.",
            price: "Rp20.000/pcs"
        },
        {
            id: 58,
            title: "Barrier Plastic Kuning Hitam",
            category: "tiang",
            image: "img/product-2.png",
            alt: "Barrier Plastic Kuning Hitam",
            description: "Barrier plastik dengan warna kuning hitam bergaris, mudah dilihat, untuk keamanan dan direktori area.",
            price: "Rp15.000/pcs"
        },
        {
            id: 59,
            title: "Rope Velvet Merah",
            category: "tiang",
            image: "img/product-3.png",
            alt: "Rope Velvet Merah",
            description: "Rope velvet merah premium dengan kait emas, untuk dekorasi dan pemisah area VIP.",
            price: "Rp50.000/meter"
        },
        {
            id: 60,
            title: "Barrier Gate Otomatis",
            category: "tiang",
            image: "img/product-4.png",
            alt: "Barrier Gate Otomatis",
            description: "Barrier gate otomatis untuk akses entry yang teratur, dapat dikontrol manual atau automatis.",
            price: "Rp300.000/hari"
        },

        // STANDING AC
        {
            id: 61,
            title: "AC Standing 2 PK",
            category: "ac",
            image: "img/product-1.png",
            alt: "AC Standing 2 PK",
            description: "AC standing 2 PK dengan pendingin cepat dan hemat energi, cocok untuk area resepsi dan tent.",
            price: "Rp200.000/hari"
        },
        {
            id: 62,
            title: "AC Standing 3 PK",
            category: "ac",
            image: "img/product-2.png",
            alt: "AC Standing 3 PK",
            description: "AC standing 3 PK dengan daya pendingin lebih kuat, untuk area yang lebih luas dan banyak penghuni.",
            price: "Rp300.000/hari"
        },
        {
            id: 63,
            title: "Portable AC Unit",
            category: "ac",
            image: "img/product-3.png",
            alt: "Portable AC Unit",
            description: "Portable AC unit ringkas dengan remote control, mudah dipindahkan ke area mana pun yang membutuhkan.",
            price: "Rp150.000/hari"
        },
        {
            id: 64,
            title: "AC Tent Industrial",
            category: "ac",
            image: "img/product-4.png",
            alt: "AC Tent Industrial",
            description: "AC tent khusus tipe industrial dengan kapasitas besar, menjaga suhu area tent tetap nyaman sepanjang hari.",
            price: "Rp400.000/hari"
        },
        {
            id: 65,
            title: "Cooler Box Pendingin",
            category: "ac",
            image: "img/product-1.png",
            alt: "Cooler Box Pendingin",
            description: "Cooler box besar untuk minuman, dapat menampung hingga 50 botol, mempertahankan suhu dingin maksimal.",
            price: "Rp75.000/hari"
        },

        // FAN
        {
            id: 66,
            title: "Fan Besar Portable",
            category: "fan",
            image: "img/product-2.png",
            alt: "Fan Besar Portable",
            description: "Fan besar dengan diameter 1.2m, portable dan mudah dipasang, untuk sirkulasi udara area outdoor.",
            price: "Rp50.000/hari"
        },
        {
            id: 67,
            title: "Industrial Fan Pedestal",
            category: "fan",
            image: "img/product-3.png",
            alt: "Industrial Fan Pedestal",
            description: "Industrial fan dengan pedestal tinggi, angin kuat dan mencakup area luas, cocok untuk area outdoor besar.",
            price: "Rp80.000/hari"
        },
        {
            id: 68,
            title: "Ceiling Fan Digantung",
            category: "fan",
            image: "img/product-4.png",
            alt: "Ceiling Fan Digantung",
            description: "Ceiling fan dapat digantung di frame tent, memberikan sirkulasi udara merata di seluruh area.",
            price: "Rp60.000/hari"
        },
        {
            id: 69,
            title: "Mini Fan Desk",
            category: "fan",
            image: "img/product-1.png",
            alt: "Mini Fan Desk",
            description: "Mini fan untuk di atas meja atau counter, cocok untuk area registration dan reception desk.",
            price: "Rp20.000/hari"
        },
        {
            id: 70,
            title: "Misting Fan Spray",
            category: "fan",
            image: "img/product-2.png",
            alt: "Misting Fan Spray",
            description: "Misting fan dengan semprotan air, memberikan pendinginan dan kesegaran ekstra di area outdoor panas.",
            price: "Rp100.000/hari"
        },

        // PARTISI R8
        {
            id: 71,
            title: "Partisi R8 Putih",
            category: "partisi",
            image: "img/product-3.png",
            alt: "Partisi R8 Putih",
            description: "Partisi R8 warna putih, tinggi 1.8m, untuk pemisah area dan dekorasi indoor events.",
            price: "Rp40.000/pcs"
        },
        {
            id: 72,
            title: "Partisi R8 Hitam",
            category: "partisi",
            image: "img/product-4.png",
            alt: "Partisi R8 Hitam",
            description: "Partisi R8 warna hitam, elegan untuk backdrop atau pemisah area VIP dengan kesan modern.",
            price: "Rp40.000/pcs"
        },
        {
            id: 73,
            title: "Partisi R8 Cream",
            category: "partisi",
            image: "img/product-1.png",
            alt: "Partisi R8 Cream",
            description: "Partisi R8 warna cream, netral dan cocok dengan berbagai tema dekorasi event.",
            price: "Rp40.000/pcs"
        },
        {
            id: 74,
            title: "Partisi Geser Panel",
            category: "partisi",
            image: "img/product-2.png",
            alt: "Partisi Geser Panel",
            description: "Partisi geser dengan panel bergerak, fleksibel untuk mengatur ukuran area sesuai kebutuhan.",
            price: "Rp60.000/pcs"
        },
        {
            id: 75,
            title: "Partisi Kaca Tempered",
            category: "partisi",
            image: "img/product-3.png",
            alt: "Partisi Kaca Tempered",
            description: "Partisi kaca tempered untuk pemisah area yang transparan, keamanan tinggi dan terlihat modern.",
            price: "Rp100.000/pcs"
        },

        // PODIUM
        {
            id: 76,
            title: "Podium Besi Chrome",
            category: "podium",
            image: "img/product-4.png",
            alt: "Podium Besi Chrome",
            description: "Podium besi dengan finishing chrome, kokoh dan elegan untuk MC atau pembicara utama.",
            price: "Rp250.000/hari"
        },
        {
            id: 77,
            title: "Podium Kayu Mahoni",
            category: "podium",
            image: "img/product-1.png",
            alt: "Podium Kayu Mahoni",
            description: "Podium mewah dari kayu mahoni, cocok untuk acara formal dan upacara penting.",
            price: "Rp400.000/hari"
        },
        {
            id: 78,
            title: "Podium Plastik Putih",
            category: "podium",
            image: "img/product-2.png",
            alt: "Podium Plastik Putih",
            description: "Podium praktis dari plastik warna putih, ringan dan mudah dipindahkan ke area manapun.",
            price: "Rp75.000/hari"
        },
        {
            id: 79,
            title: "Podium dengan Microphone",
            category: "podium",
            image: "img/product-3.png",
            alt: "Podium dengan Microphone",
            description: "Podium dilengkapi dengan mikrophone wireless terintegrasi, siap pakai untuk pembicara.",
            price: "Rp350.000/hari"
        },
        {
            id: 80,
            title: "Lectern Lectern Meja",
            category: "podium",
            image: "img/product-4.png",
            alt: "Lectern Meja",
            description: "Lectern minimalis dengan meja datar, cocok untuk presenter atau pembaca materi event.",
            price: "Rp150.000/hari"
        },

        // PRODUKSI
        {
            id: 81,
            title: "Kamera Kamera Video 4K",
            category: "produksi",
            image: "img/product-1.png",
            alt: "Kamera Video 4K",
            description: "Kamera video 4K profesional dengan optical image stabilization, untuk hasil sinematik berkualitas tinggi.",
            price: "Rp500.000/hari"
        },
        {
            id: 82,
            title: "Audio Recorder Profesional",
            category: "produksi",
            image: "img/product-2.png",
            alt: "Audio Recorder Profesional",
            description: "Portable audio recorder dengan dual channel, pengambilan suara jernih tanpa bising untuk dokumentasi audio.",
            price: "Rp150.000/hari"
        },
        {
            id: 83,
            title: "Drone FPV Video",
            category: "produksi",
            image: "img/product-3.png",
            alt: "Drone FPV Video",
            description: "Drone FPV dengan kamera 4K, untuk pengambilan gambar aerial yang spektakuler dan unik.",
            price: "Rp600.000/hari"
        },
        {
            id: 84,
            title: "Jib Crane Electric",
            category: "produksi",
            image: "img/product-4.png",
            alt: "Jib Crane Electric",
            description: "Jib crane electric untuk gerakan kamera smooth, menciptakan efek sinematik profesional di event.",
            price: "Rp800.000/hari"
        },
        {
            id: 85,
            title: "Monitor Kamera Studio",
            category: "produksi",
            image: "img/product-1.png",
            alt: "Monitor Kamera Studio",
            description: "Monitor studio berukuran besar dengan akurasi warna tinggi, untuk monitoring dan color grading video.",
            price: "Rp300.000/hari"
        },

        // MINIGARDEN
        {
            id: 86,
            title: "Minigarden Artificial Putih",
            category: "minigarden",
            image: "img/product-2.png",
            alt: "Minigarden Artificial Putih",
            description: "Minigarden bunga artificial warna putih, untuk dekorasi backdrop dan area tertentu di event.",
            price: "Rp50.000/pcs"
        },
        {
            id: 87,
            title: "Minigarden Bunga Fresh",
            category: "minigarden",
            image: "img/product-3.png",
            alt: "Minigarden Bunga Fresh",
            description: "Minigarden dengan bunga segar pilihan, untuk dekorasi elegan yang awakening dan wangi alami.",
            price: "Rp75.000/pcs"
        },
        {
            id: 88,
            title: "Minigarden Tanaman Hijau",
            category: "minigarden",
            image: "img/product-4.png",
            alt: "Minigarden Tanaman Hijau",
            description: "Minigarden dengan tanaman hijau asli, menciptakan suasana segar dan natural di area event.",
            price: "Rp60.000/pcs"
        },
        {
            id: 89,
            title: "Minigarden Kombinasi Warna",
            category: "minigarden",
            image: "img/product-1.png",
            alt: "Minigarden Kombinasi Warna",
            description: "Minigarden dengan kombinasi bunga multi warna, eye-catching untuk entry dan focal point area.",
            price: "Rp80.000/pcs"
        },
        {
            id: 90,
            title: "Minigarden Vertical Wall",
            category: "minigarden",
            image: "img/product-2.png",
            alt: "Minigarden Vertical Wall",
            description: "Minigarden bentuk vertical wall dengan rangkaian bunga, menciptakan instalasi dekorasi yang Instagram-worthy.",
            price: "Rp200.000/pcs"
        },

        // TOILET PORTABLE
        {
            id: 91,
            title: "Toilet Portable Premium",
            category: "toilet",
            image: "img/product-3.png",
            alt: "Toilet Portable Premium",
            description: "Toilet portable premium dengan warna putih, sistem flush otomatis, dan ventilasi baik untuk kenyamanan pengguna.",
            price: "Rp150.000/hari"
        },
        {
            id: 92,
            title: "Toilet Portable Standar",
            category: "toilet",
            image: "img/product-4.png",
            alt: "Toilet Portable Standar",
            description: "Toilet portable standar dengan kapasitas volume cukup, hygienic dan standar untuk event outdoor.",
            price: "Rp100.000/hari"
        },
        {
            id: 93,
            title: "Toilet Portable Luxury VIP",
            category: "toilet",
            image: "img/product-1.png",
            alt: "Toilet Portable Luxury VIP",
            description: "Toilet portable luxury untuk area VIP, dengan interior mewah, pencahayaan LED, dan AC portabel terintegrasi.",
            price: "Rp300.000/hari"
        },
        {
            id: 94,
            title: "Tangan Cuci Portable",
            category: "toilet",
            image: "img/product-2.png",
            alt: "Tangan Cuci Portable",
            description: "Hand washing station portable dengan supplies lengkap, untuk menjaga kebersihan dan kesehatan pengguna toilit.",
            price: "Rp50.000/hari"
        },
        {
            id: 95,
            title: "Toilet Container Modular",
            category: "toilet",
            image: "img/product-3.png",
            alt: "Toilet Container Modular",
            description: "Toilet container modular untuk event besar, dapat disusun sesuai kebutuhan, dengan sistem pengolahan limbah modern.",
            price: "Rp500.000/hari"
        },

        // HT (HAND TALKIE)
        {
            id: 96,
            title: "HT Motorola Walkie Talkie",
            category: "ht",
            image: "img/product-4.png",
            alt: "HT Motorola",
            description: "Handie Talkie Motorola profesional, jangkauan hingga 5km, baterai tahan lama untuk komunikasi tim event.",
            price: "Rp35.000/hari"
        },
        {
            id: 97,
            title: "HT Two Way Radio",
            category: "ht",
            image: "img/product-1.png",
            alt: "HT Two Way Radio",
            description: "Two way radio HT compact dengan fitur lengkap, cocok untuk koordinasi tim dalam event besar.",
            price: "Rp30.000/hari"
        },
        {
            id: 98,
            title: "HT dengan Headset",
            category: "ht",
            image: "img/product-2.png",
            alt: "HT dengan Headset",
            description: "HT dilengkapi dengan earpiece dan microphone headset, untuk komunikasi hands-free tim event organizer.",
            price: "Rp50.000/hari"
        },
        {
            id: 99,
            title: "HT UV-5R Dual Band",
            category: "ht",
            image: "img/product-3.png",
            alt: "HT UV-5R Dual Band",
            description: "HT UV-5R dual band FM radio, daya transmit tinggi, baterai besar untuk penggunaan seharian penuh.",
            price: "Rp40.000/hari"
        },
        {
            id: 100,
            title: "HT Set Pack 4 Unit",
            category: "ht",
            image: "img/product-4.png",
            alt: "HT Set Pack 4 Unit",
            description: "Paket HT set 4 unit dengan charging dock lengkap, hemat cost untuk koordinasi tim besar event.",
            price: "Rp120.000/set"
        },

        // LAINNYA
        {
            id: 101,
            title: "Papan Nama Nama Rusak",
            category: "lainnya",
            image: "img/product-1.png",
            alt: "Papan Nama",
            description: "Papan nama untuk entry gate dan direktori area, dapat disesuaikan dengan tema dan branding event.",
            price: "Rp75.000/pcs"
        },
        {
            id: 102,
            title: "Standing Banner Roll Up",
            category: "lainnya",
            image: "img/product-2.png",
            alt: "Standing Banner Roll Up",
            description: "Standing banner roll up dengan desain custom, praktis dibawa dan dipasang untuk branding event.",
            price: "Rp100.000/pcs"
        },
        {
            id: 103,
            title: "Alas Kaki Alas Lantai",
            category: "lainnya",
            image: "img/product-3.png",
            alt: "Alas Lantai",
            description: "Alas lantai khusus untuk melindungi lantai asli dari debu, cairan, dan kerusakan selama event berlangsung.",
            price: "Rp30.000/hari"
        },
        {
            id: 104,
            title: "Box Equipment Penyimpanan",
            category: "lainnya",
            image: "img/product-4.png",
            alt: "Box Equipment",
            description: "Box penyimpanan equipment dengan kunci, untuk keamanan barang-barang penting selama event.",
            price: "Rp50.000/hari"
        },
        {
            id: 105,
            title: "Sapu dan Cleaning Kit",
            category: "lainnya",
            image: "img/product-1.png",
            alt: "Cleaning Kit",
            description: "Complete cleaning kit lengkap dengan sapu, pengki, dan kain lap, untuk menjaga kebersihan area event.",
            price: "Rp25.000/hari"
        }
    ];

    // ===== State =====
    var currentPage = 1;
    var itemsPerPage = 8;
    var selectedFilter = 'all';
    var searchTerm = '';
    var totalPages = Math.ceil(equipmentItems.length / itemsPerPage);

    // ===== Get Filtered Items =====
    function getFilteredItems() {
        var filtered = equipmentItems;

        // Filter by category
        if (selectedFilter !== 'all') {
            filtered = filtered.filter(function (item) {
                return item.category.includes(selectedFilter);
            });
        }

        // Filter by search term
        if (searchTerm.trim() !== '') {
            var term = searchTerm.toLowerCase().trim();
            filtered = filtered.filter(function (item) {
                return item.title.toLowerCase().includes(term) ||
                       item.description.toLowerCase().includes(term) ||
                       item.category.toLowerCase().includes(term);
            });
        }

        return filtered;
    }

    // ===== Render Equipment Items =====
    function renderEquipmentItems(page) {
        var container = document.getElementById('equipment-container');
        if (!container) return;

        var filteredItems = getFilteredItems();
        totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        page = Math.min(Math.max(page, 1), totalPages);
        currentPage = page;

        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = startIndex + itemsPerPage;
        var itemsToShow = filteredItems.slice(startIndex, endIndex);

        var html = '';
        itemsToShow.forEach(function (item) {
            html += '<div class="col-md-3 col-sm-6 equipment-card" data-category="' + item.category + '">';
            html += '  <article class="equipment-item">';
            html += '    <div class="equipment-item-img">';
            html += '      <img src="' + item.image + '" alt="' + item.alt + '">';
            html += '    </div>';
            html += '    <div class="equipment-item-content">';
            html += '      <h3>' + item.title + '</h3>';
            html += '      <p>' + item.description + '</p>';
            html += '      <p class="price">' + item.price + '</p>';
            html += '      <a class="btn" href="contact.html">Rent Now</a>';
            html += '    </div>';
            html += '  </article>';
            html += '</div>';
        });

        container.innerHTML = html;
    }

    // ===== Render Pagination =====
    function renderPagination() {
        var container = document.getElementById('equipment-pagination');
        if (!container) return;

        var filteredItems = getFilteredItems();
        totalPages = Math.ceil(filteredItems.length / itemsPerPage);

        if (totalPages <= 1) {
            container.innerHTML = '';
            return;
        }

        var html = '<ul class="pagination justify-content-center">';

        // Previous
        html += '<li class="page-item ' + (currentPage === 1 ? 'disabled' : '') + '">';
        html += '  <a class="page-link" href="#" aria-label="Previous" ' + (currentPage === 1 ? 'tabindex="-1" aria-disabled="true"' : '') + '>';
        html += '    <span aria-hidden="true">&laquo; Prev</span>';
        html += '  </a>';
        html += '</li>';

        // Page numbers
        for (var i = 1; i <= totalPages; i++) {
            html += '<li class="page-item ' + (i === currentPage ? 'active' : '') + '">';
            html += '  <a class="page-link" href="?page=' + i + '&filter=' + selectedFilter + '">' + i + '</a>';
            html += '</li>';
        }

        // Next
        html += '<li class="page-item ' + (currentPage === totalPages ? 'disabled' : '') + '">';
        html += '  <a class="page-link" href="#" aria-label="Next" ' + (currentPage === totalPages ? 'tabindex="-1" aria-disabled="true"' : '') + '>';
        html += '    <span aria-hidden="true">Next &raquo;</span>';
        html += '  </a>';
        html += '</li>';

        html += '</ul>';
        container.innerHTML = html;

        // Attach click events
        var pageLinks = container.querySelectorAll('.page-link');
        pageLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var parentItem = this.closest('.page-item');

                if (parentItem.classList.contains('disabled') || parentItem.classList.contains('active')) {
                    return;
                }

                var text = this.textContent.trim();
                if (text.includes('Prev')) {
                    if (currentPage > 1) currentPage--;
                } else if (text.includes('Next')) {
                    if (currentPage < totalPages) currentPage++;
                } else {
                    currentPage = parseInt(text);
                }

                updateURL();
                renderEquipmentItems(currentPage);
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // ===== Get Query Parameter =====
    function getQueryParam(param) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // ===== Filter Functionality =====
    function setupFilters() {
        var filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                filterButtons.forEach(function (btn) {
                    btn.classList.remove('active');
                });

                // Add active class to clicked button
                this.classList.add('active');

                // Update selected filter
                selectedFilter = this.getAttribute('data-filter');
                currentPage = 1;

                // Update URL and re-render
                updateURL();
                renderEquipmentItems(currentPage);
                renderPagination();
            });
        });
    }

    // ===== Update URL =====
    function updateURL() {
        var params = new URLSearchParams(window.location.search);

        // Update page parameter
        if (currentPage > 1) {
            params.set('page', currentPage);
        } else {
            params.delete('page');
        }

        // Update filter parameter
        if (selectedFilter !== 'all') {
            params.set('filter', selectedFilter);
        } else {
            params.delete('filter');
        }

        // Update search parameter
        if (searchTerm.trim() !== '') {
            params.set('search', encodeURIComponent(searchTerm.trim()));
        } else {
            params.delete('search');
        }

        // Update URL without reloading
        var newURL = window.location.pathname;
        if (params.toString()) {
            newURL += '?' + params.toString();
        }
        window.history.replaceState({}, '', newURL);
    }
    function setupSearch() {
        var searchInput = document.getElementById('equipment-search');
        var searchBtn = document.getElementById('search-btn');

        if (!searchInput || !searchBtn) return;

        // Search input event listener
        searchInput.addEventListener('input', function () {
            searchTerm = this.value;
            currentPage = 1;
            updateURL();
            renderEquipmentItems(currentPage);
            renderPagination();
        });

        // Search button event listener
        searchBtn.addEventListener('click', function () {
            searchTerm = searchInput.value;
            currentPage = 1;
            updateURL();
            renderEquipmentItems(currentPage);
            renderPagination();
        });

        // Enter key support
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchTerm = this.value;
                currentPage = 1;
                updateURL();
                renderEquipmentItems(currentPage);
                renderPagination();
            }
        });
    }

    // ===== Initialize =====
    var equipmentSection = document.getElementById('equipment');
    if (equipmentSection) {
        // Check for page, filter, and search params
        var pageParam = getQueryParam('page');
        if (pageParam) {
            var pageNum = parseInt(pageParam);
            if (pageNum >= 1) {
                currentPage = pageNum;
            }
        }

        var filterParam = getQueryParam('filter');
        if (filterParam) {
            selectedFilter = filterParam;
            // Update active filter button
            var activeButton = document.querySelector('.filter-btn[data-filter="' + selectedFilter + '"]');
            if (activeButton) {
                document.querySelectorAll('.filter-btn').forEach(function (btn) {
                    btn.classList.remove('active');
                });
                activeButton.classList.add('active');
            }
        }

        var searchParam = getQueryParam('search');
        if (searchParam) {
            searchTerm = decodeURIComponent(searchParam);
            var searchInput = document.getElementById('equipment-search');
            if (searchInput) {
                searchInput.value = searchTerm;
            }
        }

        setupFilters();
        setupSearch();
        renderEquipmentItems(currentPage);
        renderPagination();
    }

})();
