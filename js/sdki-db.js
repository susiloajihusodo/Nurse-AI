const SDKI_DB = {
    actual: [
        {
            id: "ACT-001",
            code: "D.0076",
            label: "Mual",
            domain: "Nyeri dan Kenyamanan",
            etiology: "Terhubung dengan peningkatan sekresi lambung, efek samping obat, gastritis, atau stres",
            characteristics: {
                subjective: ["mual", "sakit kepala", "tidak nafsu makan", "penguraian", "berat badan turun"],
                objective: ["pallor", "hipersalivasi", "perut kembung", "tegangan otot", "tampak mual"]
            },
            relatedFactors: ["efek samping obat", "peningkatan sekresi lambung", "gastritis", "stres", "kehamilan trimester pertama"],
            keywords: ["mual", "sakit kepala", "tidak nafsu makan", "muntah", "perut kembung", "hipersalivasi", "pallor", "penguraian", "berat badan turun", "tegangan otot", "muntah", "pusing"],
            interventions: ["monitor frekuensi dan karakteristik mual", "berikan obat antiemetik sesuai dokter", "ajarkan teknik pernapasan dalam", "berikan makanan kecil dan sering", "hindari bau yang memicu mual", "monitor hidrasi dan elektrolit", "jaga kebersihan mulut setelah muntah", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-002",
            code: "D.0077",
            label: "Nyeri Akut",
            domain: "Nyeri dan Kenyamanan",
            etiology: "Terhubung dengan kerusakan jaringan, peradangan, trauma, atau post operasi",
            characteristics: {
                subjective: ["nyeri", "sakit", "tidak nyaman", "tegang", "fokus pada nyeri"],
                objective: ["tampak nyeri", "gerak terbatas", "vital sign berubah", "mengeluh", "menggantung", "pupil membesar"]
            },
            relatedFactors: ["kerusakan jaringan", "peradangan", "trauma", "post operasi", "infeksi", "gangguan vaskular"],
            keywords: ["nyeri", "sakit", "tidak nyaman", "tegang", "gerak terbatas", "vital sign berubah", "mengeluh", "menggantung", "pupil membesar", "muka terkejut"],
            interventions: ["assess nyeri menggunakan skala nyeri", "berikan analgesik sesuai jadwal", "ajarkan teknik relaksasi", "berikan kompres hangat/dingin sesuai indikasi", "jaga lingkungan yang tenang", "ajarkan teknik distraksi", "monitor efek samping obat nyeri", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-003",
            code: "D.0078",
            label: "Nyeri Kronis",
            domain: "Nyeri dan Kenyamanan",
            etiology: "Terhubung dengan kerusakan jaringan persisten, kondisi degeneratif, atau sindrom nyeri kronis",
            characteristics: {
                subjective: ["nyeri berkelanjutan", "nyeri lebih dari 3 bulan", "gangguan tidur", "kecemasan", "depresi", "fungsional menurun"],
                objective: ["tampak lesu", "postur tidak nyaman", "penggunaan obat penghilang nyeri", "gerak terbatas"]
            },
            relatedFactors: ["kerusakan jaringan persisten", "kondisi degeneratif", "sindrom nyeri kronis", "radang sendi", "fibromyalgia"],
            keywords: ["nyeri kronis", "nyeri berkelanjutan", "lebih dari 3 bulan", "gangguan tidur", "kecemasan", "depresi", "fungsional menurun", "tidak bisa tidur"],
            interventions: ["assess nyeri kronis dan dampaknya pada aktivitas", "berikan analgesik sesuai jadwal", "ajarkan teknik coping", "libatkan keluarga dalam perawatan", "berikan terapi non farmakologis", "monitor psikologis depresi/kecemasan", "ajarkan manajemen nyeri mandiri", "dokumentasi perubahan nyeri"]
        },
        {
            id: "ACT-004",
            code: "D.0054",
            label: "Gangguan Mobilitas Fisik",
            domain: "Aktivitas dan Istirahat",
            etiology: "Terhubung dengan kerusakan neuromuscular, fraktur, atau post operasi",
            characteristics: {
                subjective: ["tidak bisa bergerak", "kesulitan bergerak", "takut jatuh", "tidak mandiri"],
                objective: ["gerak terbatas", "keleluhan", "postur abnormal", "ketidakseimbangan", "menggunakan alat bantu"]
            },
            relatedFactors: ["kerusakan neuromuscular", "fraktur", "post operasi", "stroke", "radang sendi", "kelemahan otot"],
            keywords: ["tidak bisa bergerak", "kesulitan bergerak", "takut jatuh", "tidak mandiri", "gerak terbatas", "keleluhan", "postur abnormal", "ketidakseimbangan", "kelemahan otot", "lemes"],
            interventions: ["assess kemampuan motorik", "libatkan fisioterapi", "berikan alat bantu gerak", "ajarkan latihan range of motion", "monitor risiko jatuh", "jaga kebersihan dan kenyamanan", "ajarkan teknik aman bergerak", "dokumentasi peningkatan mobilitas"]
        },
        {
            id: "ACT-005",
            code: "D.0049",
            label: "Konstipasi",
            domain: "Eliminasi",
            etiology: "Terhubung dengan kurang serat, kurang cairan, kurang aktivitas, atau efek samping obat",
            characteristics: {
                subjective: ["sulit BAB", "perut terasa penuh", "nyeri perut", "berat badan naik", "rasa tidak nyaman"],
                objective: ["perut kembung", "BAB kurang dari 3x/minggu", "feses keras", "tekanan perut", "auskultasi usus berkurang"]
            },
            relatedFactors: ["kurang serat", "kurang cairan", "kurang aktivitas", "efek samping obat", "gangguan metabolisme", "penyakit neurologis"],
            keywords: ["sulit BAB", "perut penuh", "nyeri perut", "berat badan naik", "perut kembung", "BAB kurang", "feses keras", "tekanan perut", "sembelit"],
            interventions: ["monitor frekuensi dan karakteristik BAB", "berikan makanan tinggi serat", "ajarkan pola makan dan aktivitas", "berikan obat pencahar sesuai dokter", "monitor intake dan output cairan", "ajarkan teknik defekasi", "monitor bunyi usus", "dokumentasi perubahan BAB"]
        },
        {
            id: "ACT-006",
            code: "D.0020",
            label: "Diare",
            domain: "Eliminasi",
            etiology: "Terhubung dengan infeksi, intoleransi makanan, stres, atau efek samping obat",
            characteristics: {
                subjective: ["BU lebih dari 3x/hari", "feses lembek", "kram perut", "mual", "tidak nyaman"],
                objective: ["feses cair", "auskultasi usus hiperaktif", "dehidrasi", "hipotensi", "turgor kulit menurun"]
            },
            relatedFactors: ["infeksi", "intoleransi makanan", "stres", "efek samping obat", "keracunan", "gangguan absorbsi"],
            keywords: ["BU lebih dari 3x", "feses lembek", "kram perut", "mual", "feses cair", "auskultasi hiperaktif", "dehidrasi", "hipotensi", "turgor kulit menurun", "diare"],
            interventions: ["monitor frekuensi dan karakteristik BAB", "monitor tanda dehidrasi", "berikan terapi rehidrasi oral", "monitor elektrolit", "berikan makanan sesuai toleransi", "jaga kebersihan area genital", "ajarkan higiene toilet", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-145",
            code: "D.0021",
            label: "Disfungsi Motilitas Gastrointestinal",
            domain: "Nutrisi",
            etiology: "Terhubung dengan gangguan neurologis, operasi, atau efek obat",
            characteristics: {
                subjective: ["sulit BAB", "sulit BAK", "mual", "muntah", "perut penuh", "berat badan turun"],
                objective: ["BAB tidak teratur", "perut kembung", "auskultasi usus berkurang", "feses keras", "mukosa mulut kering"]
            },
            relatedFactors: ["gangguan neurologis", "operasi abdomen", "efek obat", "stres", "infeksi", "gangguan metabolisme"],
            keywords: ["disfungsi motilitas gastrointestinal", "sulit BAB", "sulit BAK", "mual", "muntah", "perut penuh", "perut kembung", "auskultasi berkurang", "feses keras"],
            interventions: ["monitor pola BAB dan BAK", "monitor bunyi usus", "berikan makanan tinggi serat", "ajarkan pola makan", "monitor intake cairan", "berikan obat sesuai dokter", "monitor berat badan", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-007",
            code: "D.0129",
            label: "Integritas Kulit Terganggu",
            domain: "Kulit",
            etiology: "Terhubung dengan tekanan berlebih, gizi kurang, kelemahan otot, atau inkontinensia",
            characteristics: {
                subjective: ["nyeri pada area kulit", "gatal", "tidak nyaman", "banyak yang tidak normal"],
                objective: ["eritema", "ulkus", "nekrosis", "edema", "eksudat", "pendarahan", "tidak ada jaringan granulasi", "kulit rapuh"]
            },
            relatedFactors: ["tekanan berlebih", "gizi kurang", "kelemahan otot", "inkontinensia", "fraktur", "postur tetap"],
            keywords: ["nyeri kulit", "gatal", "tidak nyaman", "eritema", "ulkus", "nekrosis", "edema", "eksudat", "pendarahan", "tidak ada granulasi", "kulit rapuh", "luka", "dekit"],
            interventions: ["assess kondisi kulit setiap shift", "lakukan perubahan posisi 2 hourly", "berikan perawatan luka sesuai protokol", "monitor intake gizi", "jaga kebersihan dan kenyamanan", "berikan perlindungan tekanan", "libatkan keluarga dalam perawatan", "dokumentasi perubahan kulit"]
        },
        {
            id: "ACT-009",
            code: "D.0080",
            label: "Ansietas",
            domain: "Integritas ego",
            etiology: "Terhubung dengan perubahan kesehatan, ketidakpastian, atau ketakutan akan kematian",
            characteristics: {
                subjective: ["takut", "khawatir", "tegang", "tidak nyaman", "pikiran kacau", "tidak bisa berkonsentrasi", "tidak bisa berkomunikasi"],
                objective: ["tegang", "tremor", "tekanan darah naik", "detak jantung cepat", "pupil membesar", "sweating", "tampak gelisah"]
            },
            relatedFactors: ["perubahan kesehatan", "ketidakpastian", "ketakutan kematian", "stres", "kekerasan", "kehilangan"],
            keywords: ["takut", "khawatir", "tegang", "tidak nyaman", "pikiran kacau", "tidak berkonsentrasi", "tidak bisa berkomunikasi", "tremor", "tekanan darah naik", "detak jantung cepat", "pupil membesar", "sweating", "gelisah", "cemas"],
            interventions: ["assess tingkat kecemasan", "berikan informasi yang jelas dan jujur", "ajarkan teknik relaksasi", "dengarkan keluhan pasien", "libatkan keluarga dalam perawatan", "monitor tanda panik", "berikan lingkungan yang tenang", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-013",
            code: "D.0003",
            label: "Pertukaran Gas Terganggu",
            domain: "Respirasi",
            etiology: "Terhubung dengan gangguan pertukaran oksigen, atelectasis, atau edema paru",
            characteristics: {
                subjective: ["sesak napas", "kelelahan", "tidak bisa napas dalam", "pusing"],
                objective: ["tachypnea", "takikardia", "cyanosis", "wheezing", "ronchi", "ketidaksesuaian vaskular", "peningkatan PaCO2", "penurunan PaO2", "pH abnormal"]
            },
            relatedFactors: ["gangguan pertukaran oksigen", "atelectasis", "edema paru", "emboli", "pneumonia", "asma", "PPOK"],
            keywords: ["sesak napas", "kelelahan", "tidak bisa napas dalam", "pusing", "tachypnea", "takikardia", "cyanosis", "wheezing", "ronchi", "PaCO2 naik", "PaO2 turun", "sianosis"],
            interventions: ["monitor saturasi oksigen", "monitor pernapasan", "berikan oksigen sesuai dokter", "ajarkan teknik pernapasan dalam", "monitor gas darah arteri", "jaga posisi tinggi 30 derajat", "berikan antibiotik sesuai dokter", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-016",
            code: "D.0023",
            label: "Hipovolemia",
            domain: "Eliminasi",
            etiology: "Terhubung dengan kehilangan cairan berlebih, kurang asupan, atau gangguan regulasi",
            characteristics: {
                subjective: ["haus", "lelah", "pusing", "tangan dingin", "lemah"],
                objective: ["turgor kulit menurun", "mukosa mulut kering", "hipotensi", "takikardia", "hematokrit naik", "berat badan turun", "volume urine turun", "pengisian kapiler lambat", "tekanan ven pusat turun"]
            },
            relatedFactors: ["kehilangan cairan berlebih", "kurang asupan", "gangguan regulasi", "muntah", "diare", "perdarahan", "demam"],
            keywords: ["haus", "lelah", "pusing", "tangan dingin", "lemah", "turgor kulit menurun", "mukosa mulut kering", "hipotensi", "takikardia", "hematokrit naik", "volume urine turun", "pengisian kapiler lambat", "dehidrasi"],
            interventions: ["monitor intake dan output", "monitor tanda dehidrasi", "berikan cairan sesuai dokter", "monitor tekanan darah dan nadi", "monitor elektrolit", "berikan makanan sesuai toleransi", "jaga kebersihan mulut", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-017",
            code: "D.0019",
            label: "Imbalance Nutrisi: Kurang dari Kebutuhan Tubuh",
            domain: "Nutrisi/Cairan",
            etiology: "Terhubung dengan gangguan menelan, mual, atau defisit nutrisi",
            characteristics: {
                subjective: ["tidak nafsu makan", "kelelahan", "lemah", "tidak ada nafsu makan", "penguraian"],
                objective: ["berat badan turun", "BMI kurang", "defisit gizi", "kulit kaku", "turgor kulit menurun", "hipoalbuminemia", "kaki bereda", "leukositopenia", "defisiensi vitamin"]
            },
            relatedFactors: ["gangguan menelan", "mual", "defisit nutrisi", "malabsorpsi", "kemoerapi", "depresi", "kemoterapi"],
            keywords: ["tidak nafsu makan", "kelelahan", "lemah", "penguraian", "berat badan turun", "BMI kurang", "defisit gizi", "kulit kaku", "hipoalbuminemia", "kaki bereda", "leukositopenia", "malnutrisi"],
            interventions: ["monitor berat badan harian", "monitor intake gizi", "berikan makanan sesuai toleransi", "ajarkan pola makan seimbang", "monitor laboratorium gizi", "berikan suplemen sesuai dokter", "jaga kebersihan mulut", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-018",
            code: "D.0040",
            label: "Gangguan Eliminasi Urin",
            domain: "Eliminasi",
            etiology: "Terhubung dengan obstruksi, infeksi, atau neurogenik",
            characteristics: {
                subjective: ["kesulitan berkemih", "nyeri saat berkemih", "frekuensi berubah", "inkontinensia", "retensi"],
                objective: ["frekuensi tidak teratur", "volume urine abnormal", "inkontinensia", "retensi", "nyeri tekan kandung kemih", "urin berwarna abnormal", "urin bau"]
            },
            relatedFactors: ["obstruksi", "infeksi", "neurogenik", "prostat hiperplasi", "kista", "defisit neurologis"],
            keywords: ["kesulitan berkemih", "nyeri berkemih", "frekuensi berubah", "inkontinensia", "retensi", "frekuensi tidak teratur", "volume urine abnormal", "nyeri tekan kandung kemih", "urin abnormal", "BAK abnormal"],
            interventions: ["monitor frekuensi dan volume BAK", "monitor warna dan bau urin", "berikan minum sesuai jadwal", "jaga kebersihan area genital", "monitor tanda retensi", "berikan obat diuretik sesuai dokter", "ajarkan teknik kegel", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-019",
            code: "D.0055",
            label: "Gangguan Pola Tidur",
            domain: "Istirahat",
            etiology: "Terhubung dengan lingkungan tidak nyaman, nyeri, atau cemas",
            characteristics: {
                subjective: ["tidak bisa tidur", "tidur tidak nyenyak", "bangun tengah malam", "kelelahan saat bangun", "mengantuk"],
                objective: ["tidak bisa tidur", "tidak fokus", "iritabilitas", "tampak mengantuk", "pupil membesar"]
            },
            relatedFactors: ["lingkungan tidak nyaman", "nyeri", "cemas", "depresi", "stres", "gangguan medis"],
            keywords: ["tidak bisa tidur", "tidur tidak nyenyak", "bangun tengah malam", "kelelahan", "mengantuk", "tidak fokus", "iritabilitas", "insomnia"],
            interventions: ["assess pola tidur", "jaga lingkungan yang tenang", "berikan obat tidur sesuai dokter", "ajarkan teknik relaksasi", "monitor waktu tidur", "batasi kafein sore hari", "jaga rutinitas tidur", "dokumentasi perubahan tidur"]
        },
{
            id: "ACT-023",
            code: "D.0130",
            label: "Hipertermia",
            domain: "Termoregulasi",
            etiology: "Terhubung dengan infeksi, dehidrasi, atau gangguan hipotalamus",
            characteristics: {
                subjective: ["panas", "pusing", "kelelahan", "sakit kepala"],
                objective: ["suhu >38°C", "kulit merah", "hangat", "tachypnea", "takikardia", "hipotensi", "dehidrasi"]
            },
            relatedFactors: ["infeksi", "dehidrasi", "gangguan hipotalamus", "keracunan", "strok", "kelebihan obat"],
            keywords: ["panas", "pusing", "kelelahan", "sakit kepala", "suhu tinggi", "kulit merah", "hangat", "tachypnea", "takikardia", "dehidrasi", "demam"],
            interventions: ["monitor suhu setiap 4 jam", "berikan antipiretik sesuai dokter", "berikan cairan hangat", "ajarkan perawatan mandi hangat", "monitor tanda dehidrasi", "jaga lingkungan yang sejuk", "berikan pakaian tipis", "dokumentasi perubahan suhu"]
        },
        {
            id: "ACT-024",
            code: "D.0131",
            label: "Hipotermia",
            domain: "Termoregulasi",
            etiology: "Terhubung dengan eksposur dingin, hipotiroid, atau kurang nutrisi",
            characteristics: {
                subjective: ["dingin", "menggigil", "lemas", "tidak fokus"],
                objective: ["suhu <35°C", "kulit pucat", "dingin", "tremor", "bradikardia", "tekanan darah naik", "pupil membesar", "turgor kulit naik"]
            },
            relatedFactors: ["eksposur dingin", "hipotiroid", "kurang nutrisi", "penyalahgunaan alkohol", "usia lanjut", "hipoglikemi"],
            keywords: ["dingin", "menggigil", "lemas", "tidak fokus", "suhu rendah", "kulit pucat", "tremor", "bradikardia", "pupil membesar", "turgor kulit naik"],
            interventions: ["monitor suhu setiap 4 jam", "berikan selimut hangat", "berangkan minum hangat", "monitor nadi dan pernapasan", "jaga lingkungan yang hangat", "berikan pakaian tebal", "monitor tanda kejang", "dokumentasi perubahan suhu"]
        },
        {
            id: "ACT-029",
            code: "D.0111",
            label: "Defisit Pengetahuan",
            domain: "Edukasi",
            etiology: "Terhubung dengan kurang informasi, kurang minat, atau kesulitan memahami",
            characteristics: {
                subjective: ["tidak tahu", "salah informasi", "tidak bisa menjelaskan", "tidak mau belajar", "tidak sesuai informasi"],
                objective: ["kesalahan tindakan", "tidak sesuai prosedur", "tidak mengikuti instruksi", "salah perawatan mandiri", "tidak bisa menjawab pertanyaan"]
            },
            relatedFactors: ["kurang informasi", "kurang minat", "kesulitan memahami", "kesulitan mengingat", "kurang akses informasi", "bahasa"],
            keywords: ["tidak tahu", "salah informasi", "tidak bisa menjelaskan", "tidak mau belajar", "tidak sesuai informasi", "kesalahan tindakan", "tidak sesuai prosedur", "tidak mengikuti instruksi", "salah perawatan mandiri", "kurang tahu"],
            interventions: ["assess pengetahuan pasien", "berikan informasi yang jelas", "ajarkan sesuai kebutuhan", "gunakan media yang mudah dipahami", "monitor pemahaman", "ajarkan kembali jika diperlukan", "libatkan keluarga dalam edukasi", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "ACT-011",
            code: "D.0096",
            label: "Koping Tidak Efektif",
            domain: "Integritas ego",
            etiology: "Terhubung dengan stres berlebihan, kurang dukungan, atau perubahan kehidupan",
            characteristics: {
                subjective: ["tidak bisa mengatasi", "cemas", "tidak nyaman", "tidak bisa menyesuaikan", "putus asa"],
                objective: ["tampak gelisah", "perubahan perilaku", "tidak konsentrasi", "tidak produktif", "perubahan tidur"]
            },
            relatedFactors: ["stres berlebihan", "kurang dukungan", "perubahan kehidupan", "krisis", "kerugian", "ketidakpastian"],
            keywords: ["tidak bisa mengatasi", "cemas", "tidak nyaman", "tidak bisa menyesuaikan", "putus asa", "tampak gelisah", "perubahan perilaku", "tidak konsentrasi", "tidak produktif", "perubahan tidur"],
            interventions: ["assess mekanisme coping", "dengarkan keluhan pasien", "berikan dukungan emosional", "ajarkan teknik coping", "libatkan keluarga", "monitor psikologis", "rujuk ke psikolog jika diperlukan", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-015",
            code: "D.0093",
            label: "Ketidakmampuan Koping Keluarga",
            domain: "Integritas ego",
            etiology: "Terhubung dengan kurang informasi, dukungan kurang, atau perilaku keluarga tidak membantu",
            characteristics: {
                subjective: ["keluarga tidak membantu", "tidak ada dukungan", "tidak ada perawatan", "salah perawatan"],
                objective: ["tidak ada tindakan", "tidak ada kehadiran", "salah perawatan", "tidak ada komunikasi"]
            },
            relatedFactors: ["kurang informasi", "dukungan kurang", "perilaku keluarga tidak membantu", "stres keluarga", "kurang pengetahuan"],
            keywords: ["keluarga tidak membantu", "tidak ada dukungan", "tidak ada perawatan", "salah perawatan", "tidak ada tindakan", "tidak ada kehadiran", "salah perawatan", "tidak ada komunikasi"],
            interventions: ["assess dukungan keluarga", "berikan edukasi keluarga", "libatkan keluarga dalam perawatan", "ajarkan teknik perawatan", "monitor interaksi keluarga", "rujuk ke layanan sosial jika diperlukan", "berikan dukungan emosional", "dokumentasi respons terhadap intervensi"]
        },

        {
            id: "ACT-030",
            code: "D.0009",
            label: "Perfusi Jaringan Perifer Tidak Efektif",
            domain: "Kardiovaskular",
            etiology: "Terhubung dengan obstruksi vaskular, arteriosklerosis, atau shock",
            characteristics: {
                subjective: ["nyeri", "dingin", "lemas", "tidak ada nadi", "pusing"],
                objective: ["kulit pucat", "edema", "perubahan nadi", "perubahan tekanan darah", "perubahan warna kulit", "perubahan suhu"]
            },
            relatedFactors: ["obstruksi vaskular", "arteriosklerosis", "shock", "diabetes", "hipertensi", "merokok"],
            keywords: ["perfusio jaringan tidak efektif", "nyeri", "dingin", "lemas", "tidak ada nadi", "pusing", "kulit pucat", "edema", "perubahan nadi", "perubahan tekanan darah", "perubahan warna kulit"],
            interventions: ["monitor nadi dan tekanan darah", "monitor suhu ekstremitas", "monitor warna dan kelembaban kulit", "berikan obat sesuai dokter", "jaga aktivitas sesuai toleransi", "hindari kompresi", "ajarkan manajemen risiko", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-039",
            code: "D.0041",
            label: "Inkontinensia Fekal",
            domain: "Eliminasi",
            etiology: "Terhubung dengan kerusakan otot sfingter, diare, atau gangguan neurologis",
            characteristics: {
                subjective: ["tidak bisa menahan BAB", "BU tidak terkontrol", "tidak nyaman", "malu"],
                objective: ["feses di celana", "gatal", "irritasi kulit", "bau tidak sedap"]
            },
            relatedFactors: ["kerusakan otot sfingter", "diare", "gangguan neurologis", "inkontinensia", "malnutrisi"],
            keywords: ["inkontinensia BAB", "tidak bisa menahan BAB", "BU tidak terkontrol", "tidak nyaman", "malu", "feses di celana", "gatal", "irritasi kulit", "bau tidak sedap"],
            interventions: ["monitor frekuensi BAB", "jaga kebersihan area genital", "berikan popok sesuai kebutuhan", "monitor irritasi kulit", "ajarkan latihan otot sfingter", "berikan makanan sesuai toleransi", "monitor tanda dehidrasi", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-040",
            code: "D.0047",
            label: "Inkontinensia Urin Urgensi",
            domain: "Eliminasi",
            etiology: "Terhubung dengan obstruksi, infeksi, atau neurogenik",
            characteristics: {
                subjective: ["tidak bisa menahan BAK", "BAK tidak terkontrol", "tidak nyaman", "malu"],
                objective: ["volume urine abnormal", "frekuensi tidak teratur", "irritasi kulit", "bau tidak sedap"]
            },
            relatedFactors: ["obstruksi", "infeksi", "neurogenik", "prostat hiperplasi", "kista", "defisit neurologis"],
            keywords: ["inkontinensia BAK", "tidak bisa menahan BAK", "BAK tidak terkontrol", "tidak nyaman", "malu", "volume urine abnormal", "frekuensi tidak teratur", "irritasi kulit", "bau tidak sedap"],
            interventions: ["monitor frekuensi dan volume BAK", "jaga kebersihan area genital", "berikan popok sesuai kebutuhan", "monitor irritasi kulit", "ajarkan latihan kegel", "berikan minum sesuai jadwal", "monitor tanda infeksi", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-041",
            code: "D.0050",
            label: "Retensi Urin",
            domain: "Eliminasi",
            etiology: "Terhubung dengan obstruksi, neurogenik, atau efek obat",
            characteristics: {
                subjective: ["tidak bisa berkemih", "nyeri perut bawah", "tidak nyaman", "tampak penuh"],
                objective: ["kandung kemih menonjol", "volume urine menurun", "nyeri tekan kandung kemih", "distensi perut"]
            },
            relatedFactors: ["obstruksi", "neurogenik", "efek obat", "prostat hiperplasi", "kista", "defisit neurologis"],
            keywords: ["retensi urin", "tidak bisa berkemih", "nyeri perut bawah", "tidak nyaman", "tampak penuh", "kandung kemih menonjol", "volume urine menurun", "nyeri tekan kandung kemih", "distensi perut"],
            interventions: ["monitor frekuensi dan volume BAK", "monitor tanda retensi", "berikan obat diuretik sesuai dokter", "ajarkan teknik kegel", "jaga kebersihan area genital", "monitor tekanan abdomen", "berikan minum sesuai jadwal", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-042",
            code: "D.0018",
            label: "Berat Badan Lebih",
            domain: "Nutrisi/Cairan",
            etiology: "Terhubung dengan asupan berlebih, kurang aktivitas, atau gangguan metabolisme",
            characteristics: {
                subjective: ["berat badan naik", "tidak nafsu makan", "tidak ada nafsu makan", "kelelahan", "lemah"],
                objective: ["BMI lebih", "lemak tubuh naik", "kulit kaku", "turgor kulit naik", "berat badan naik", "aktivitas menurun"]
            },
            relatedFactors: ["asupan berlebih", "kurang aktivitas", "gangguan metabolisme", "genetik", "psikologis", "obesitas"],
            keywords: ["nutrisi tidak seimbang", "berat badan naik", "tidak nafsu makan", "kelelahan", "lemah", "BMI lebih", "lemak tubuh naik", "kulit kaku", "turgor kulit naik", "aktivitas menurun", "obesitas"],
            interventions: ["monitor berat badan harian", "monitor BMI", "berikan diet sesuai kebutuhan", "ajarkan pola makan seimbang", "monitor gizi", "libatkan ahli gizi", "berikan aktivitas sesuai toleransi", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-045",
            code: "D.0124",
            label: "Peran Tidak Efektif",
            domain: "Integritas ego",
            etiology: "Terhubung dengan perubahan kesehatan, stres, atau ketidaksesuaian peran",
            characteristics: {
                subjective: ["tidak bisa kerja", "tidak bisa peran keluarga", "tidak puas", "stres"],
                objective: ["perubahan perilaku", "tidak produktif", "konflik", "tidak ada komunikasi"]
            },
            relatedFactors: ["perubahan kesehatan", "stres", "ketidaksesuaian peran", "gangguan fisik", "gangguan psikologis"],
            keywords: ["peran tidak efektif", "tidak bisa kerja", "tidak bisa peran keluarga", "tidak puas", "stres", "perubahan perilaku", "tidak produktif", "konflik", "tidak ada komunikasi"],
            interventions: ["assess peran keluarga", "dengarkan keluhan pasien", "berikan dukungan emosional", "ajarkan manajemen stres", "libatkan keluarga", "rujuk ke layanan sosial", "monitor perubahan perilaku", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-047",
            code: "D.0119",
            label: "Komunikasi Verbal Terganggu",
            domain: "Komunikasi",
            etiology: "Terhubung dengan gangguan bicara, gangguan pendengaran, atau budaya",
            characteristics: {
                subjective: ["tidak bisa berbicara", "tidak bisa memahami", "tidak bisa menulis", "tidak bisa membaca"],
                objective: ["tidak bisa berbicara", "tidak bisa memahami", "tidak bisa menulis", "tidak bisa membaca", "tidak ada komunikasi"]
            },
            relatedFactors: ["gangguan bicara", "gangguan pendengaran", "budaya", "bahasa", "kerusakan otak", "trauma"],
            keywords: ["komunikasi verbal terganggu", "tidak bisa berbicara", "tidak bisa memahami", "tidak bisa menulis", "tidak bisa membaca", "gangguan bicara", "gangguan pendengaran", "budaya", "bahasa"],
            interventions: ["assess kemampuan komunikasi", "berikan alat komunikasi alternatif", "berikan waktu yang cukup", "monitor pemahaman", "libatkan keluarga", "ajarkan isyarat jika diperlukan", "rujuk ke terapi wicara", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-048",
            code: "D.0121",
            label: "Isolasi Sosial",
            domain: "Integritas ego",
            etiology: "Terhubung dengan perubahan kesehatan, ketakutan, atau ketidaksesuaian sosial",
            characteristics: {
                subjective: ["tidak ada teman", "tidak ada keluarga", "tidak ada dukungan", "tidak ada aktivitas sosial", "tidak ada komunikasi"],
                objective: ["tidak ada interaksi", "tidak ada aktivitas", "tidak ada komunikasi", "tidak ada dukungan"]
            },
            relatedFactors: ["perubahan kesehatan", "ketakutan", "ketidaksesuaian sosial", "stigma", "depresi", "kecemasan"],
            keywords: ["isolasi sosial", "tidak ada teman", "tidak ada keluarga", "tidak ada dukungan", "tidak ada aktivitas sosial", "tidak ada komunikasi", "tidak ada interaksi", "stigma", "depresi"],
            interventions: ["assess dukungan sosial", "monitor interaksi sosial", "ajarkan komunikasi efektif", "libatkan keluarga", "berikan dukungan emosional", "rujuk ke layanan sosial", "ajarkan manajemen stres", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-052",
            code: "D.0104",
            label: "Sindrom Pasca Trauma",
            domain: "Integritas ego",
            etiology: "Terhubung dengan trauma, kekerasan, atau pengalaman menakutkan",
            characteristics: {
                subjective: ["ingat trauma", "takut", "cemas", "tidak nyaman", "halusinasi"],
                objective: ["tegang", "tremor", "tidak fokus", "perilaku aneh", "isolasi"]
            },
            relatedFactors: ["trauma", "kekerasan", "pengalaman menakutkan", "perang", "kecelakaan", "penipuan"],
            keywords: ["sindrom pasca trauma", "ingat trauma", "takut", "cemas", "tidak nyaman", "halusinasi", "tegang", "tremor", "tidak fokus", "perilaku aneh", "isolasi"],
            interventions: ["assess trauma", "dengarkan keluhan pasien", "berikan dukungan emosional", "monitor tanda panik", "ajarkan teknik relaksasi", "jaga lingkungan yang tenang", "rujuk ke terapi trauma", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-056",
            code: "D.0092",
            label: "Ketidakberdayaan",
            domain: "Integritas ego",
            etiology: "Terhubung dengan penyakit menahun, ketidakmampuan mengendalikan situasi, atau ketidakpastian",
            characteristics: {
                subjective: ["tidak bisa mengendalikan", "tidak ada harapan", "tidak ada kontrol", "tidak berdaya", "tidak bisa memutuskan"],
                objective: ["tidak ada partisipasi", "tidak ada inisiatif", "tidak ada respon", "tidak ada motivasi", "pasif"]
            },
            relatedFactors: ["penyakit menahun", "ketidakmampuan mengendalikan situasi", "ketidakpastian", "stres", "krisis", "ketidakdayaan"],
            keywords: ["tidak berdaya", "tidak bisa mengendalikan", "tidak ada harapan", "tidak ada kontrol", "tidak bisa memutuskan", "tidak ada partisipasi", "tidak ada inisiatif", "tidak ada respon", "tidak ada motivasi", "pasif"],
            interventions: ["assess kontrol pasien", "berikan pilihan yang mungkin", "libatkan dalam perencanaan perawatan", "monitor partisipasi", "ajarkan manajemen stres", "berikan dukungan emosional", "monitor psikologis", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-057",
            code: "D.0088",
            label: "Tidak Ada Harapan",
            domain: "Integritas ego",
            etiology: "Terhubung dengan penyakit menahun, stres berlebihan, atau kehilangan",
            characteristics: {
                subjective: ["tidak ada harapan", "tidak ada masa depan", "tidak ada tujuan", "tidak ada sukacita", "tidak ada motivasi"],
                objective: ["tampak sedih", "tidak ada interaksi", "tidak ada aktivitas", "tidak ada komunikasi", "pasif"]
            },
            relatedFactors: ["penyakit menahun", "stres berlebihan", "kehilangan", "krisis", "trauma", "depresi"],
            keywords: ["tidak ada harapan", "tidak ada masa depan", "tidak ada tujuan", "tidak ada sukacita", "tidak ada motivasi", "tampak sedih", "tidak ada interaksi", "tidak ada aktivitas", "tidak ada komunikasi", "pasif"],
            interventions: ["assess tingkat harapan", "dengarkan keluhan pasien", "berikan dukungan emosional", "ajarkan manajemen stres", "libatkan keluarga", "monitor tanda depresi", "rujuk ke konseling", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-061",
            code: "D.0144",
            label: "Risiko Kekerasan ke Diri Sendiri",
            domain: "Integritas ego",
            etiology: "Terhubung dengan depresi, putus asa, atau gangguan kepribadian",
            characteristics: {
                subjective: ["tidak ada harapan", "tidak ada masa depan", "ingin mati", "ingin bunuh diri"],
                objective: ["tampak sedih", "tidak ada interaksi", "tidak ada aktivitas", "memberi milik", "rencana bunuh diri"]
            },
            relatedFactors: ["depresi", "putus asa", "gangguan kepribadian", "trauma", "krisis", "kehilangan"],
            keywords: ["risiko kekerasan ke diri sendiri", "tidak ada harapan", "tidak ada masa depan", "ingin mati", "ingin bunuh diri", "tampak sedih", "tidak ada interaksi", "tidak ada aktivitas", "memberi milik", "rencana bunuh diri"],
            interventions: ["monitor risiko kekerasan", "jaga lingkungan yang aman", "berikan pengawasan terus", "dengarkan keluhan pasien", "berikan dukungan emosional", "rujuk ke psikiatri segera", "libatkan keluarga", "dokumentasi respon terhadap intervensi"]
        },

        {
            id: "ACT-046",
            code: "D.0056",
            label: "Intoleransi Aktivitas",
            domain: "Aktivitas dan Istirahat",
            etiology: "Terhubung dengan kelemahan otot, penyakit kardiovaskular, atau gangguan metabolisme",
            characteristics: {
                subjective: ["kelelahan berlebihan", "tidak ada energi", "tidak bisa beraktivitas", "sesak napas saat aktivitas", "palpitasi"],
                objective: ["takikardia berlebihan", "hipotensi", "pusing", "tampak lelah", "aktivitas menurun"]
            },
            relatedFactors: ["kelemahan otot", "penyakit kardiovaskular", "gangguan metabolisme", "anemia", "obesitas", "malnutrisi", "usia tua"],
            keywords: ["intoleransi aktivitas", "kelelahan berlebihan", "tidak ada energi", "tidak bisa beraktivitas", "sesak napas", "palpitasi", "takikardia", "hipotensi", "pusing", "tampak lelah", "aktivitas menurun"],
            interventions: ["assess toleransi aktivitas", "monitor nadi dan tekanan darah", "berikan istirahat sesuai jadwal", "ajarkan manajemen energi", "jaga aktivitas sesuai toleransi", "monitor tanda kelelahan", "berikan makanan sesuai toleransi", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-074",
            code: "D.0063",
            label: "Gangguan Menelan",
            domain: "Neurosensori",
            etiology: "Terhubung dengan gangguan neurologis, stroke, atau gangguan struktur",
            characteristics: {
                subjective: ["sulit menelan", "tidak bisa menelan", "cebok saat makan", "tidak nyaman saat makan"],
                objective: ["batuk saat makan", "suara basah", "gag", "tidak bisa menelan", "timbulan makanan", "sianosis"]
            },
            relatedFactors: ["gangguan neurologis", "stroke", "gangguan struktur", "pembedahan kepala", "trauma", "sedasi", "penyakit neuromuscular"],
            keywords: ["gangguan menelan", "sulit menelan", "tidak bisa menelan", "cebok saat makan", "tidak nyaman saat makan", "batuk saat makan", "suara basah", "gag", "timbulan makanan", "sianosis"],
            interventions: ["assess kemampuan menelan", "berikan makanan lunak/lembut", "ajarkan cara makan perlahan", "berikan posisi tinggi 30 derajat saat makan", "monitor tanda aspirasi", "berikan makanan yang mudah menelan", "hindari makanan yang mudah tersedak", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-078",
            code: "D.0074",
            label: "Kenyamanan Terganggu",
            domain: "Nyeri dan Kenyamanan",
            etiology: "Terhubung dengan nyeri, lingkungan tidak nyaman, atau perawatan medis",
            characteristics: {
                subjective: ["tidak nyaman", "tidak nyaman dengan posisi", "tidak nyaman dengan suhu", "tidak nyaman dengan lingkungan"],
                objective: ["tampak tidak nyaman", "gelisah", "tidak bisa rileks", "tidak bisa tidur", "tidak bisa beraktivitas"]
            },
            relatedFactors: ["nyeri", "lingkungan tidak nyaman", "perawatan medis", "operasi", "cedera", "kerusakan", "stres"],
            keywords: ["kenyamanan terganggu", "tidak nyaman", "tidak nyaman dengan posisi", "tidak nyaman dengan suhu", "tidak nyaman dengan lingkungan", "tampak tidak nyaman", "gelisah", "tidak bisa rileks", "tidak bisa tidur"],
            interventions: ["assess sumber ketidaknyamanan", "jaga lingkungan yang nyaman", "berikan kompres hangat/dingin sesuai indikasi", "ajarkan teknik relaksasi", "monitor respon terhadap intervensi", "berikan posisi yang nyaman", "jaga kebersihan dan kenyamanan", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-080",
            code: "D.0084",
            label: "Gangguan Identitas Diri",
            domain: "Integritas ego",
            etiology: "Terhubung dengan perubahan fisik, penyakit menahun, atau trauma",
            characteristics: {
                subjective: ["tidak mengenal diri", "tidak percaya diri", "tidak nyaman dengan diri", "tidak tahu siapa diri"],
                objective: ["perubahan perilaku", "perubahan penampilan", "isolasi", "tidak mau beraktivitas", "perubahan komunikasi"]
            },
            relatedFactors: ["perubahan fisik", "penyakit menahun", "trauma", "operasi", "cedera", "kerusakan", "gangguan mental"],
            keywords: ["identitas pribadi terganggu", "tidak mengenal diri", "tidak percaya diri", "tidak nyaman dengan diri", "tidak tahu siapa diri", "perubahan perilaku", "perubahan penampilan", "isolasi", "tidak mau beraktivitas"],
            interventions: ["assess identitas diri pasien", "dengarkan keluhan pasien", "berikan dukungan emosional", "ajarkan penerimaan diri", "libatkan keluarga", "monitor perilaku", "rujuk ke psikolog jika diperlukan", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-081",
            code: "D.0120",
            label: "Hubungan Tidak Efektif",
            domain: "Integritas ego",
            etiology: "Terhubung dengan komunikasi kurang, konflik, atau perubahan kehidupan",
            characteristics: {
                subjective: ["tidak bisa komunikasi", "tidak ada dukungan", "tidak puas", "konflik"],
                objective: ["tidak ada komunikasi", "tidak ada interaksi", "konflik", "tidak ada dukungan", "perubahan perilaku"]
            },
            relatedFactors: ["komunikasi kurang", "konflik", "perubahan kehidupan", "stres", "krisis", "ketidaksesuaian", "kurang dukungan"],
            keywords: ["hubungan tidak efektif", "tidak bisa komunikasi", "tidak ada dukungan", "tidak puas", "konflik", "tidak ada komunikasi", "tidak ada interaksi", "perubahan perilaku"],
            interventions: ["assess hubungan keluarga", "dengarkan keluhan pasien", "berikan dukungan emosional", "ajarkan komunikasi efektif", "libatkan keluarga", "monitor interaksi", "rujuk ke konseling jika diperlukan", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-083",
            code: "D.0116",
            label: "Perlindungan Tidak Efektif",
            domain: "Perlindungan",
            etiology: "Terhubung dengan gangguan kekebalan, luka terbuka, atau prosedur invasif",
            characteristics: {
                subjective: ["tidak ada perlindungan", "tidak ada vaksin", "tidak ada kekebalan"],
                objective: ["luka terbuka", "prosedur invasif", "diabetes melitus", "malnutrisi", "penggunaan steroid", "usia tua"]
            },
            relatedFactors: ["gangguan kekebalan", "luka terbuka", "prosedur invasif", "diabetes melitus", "malnutrisi", "penggunaan steroid", "usia tua"],
            keywords: ["perlindungan tidak efektif", "tidak ada perlindungan", "tidak ada vaksin", "tidak ada kekebalan", "luka terbuka", "prosedur invasif", "diabetes", "malnutrisi", "steroid", "usia tua"],
            interventions: ["monitor tanda infeksi", "jaga kebersihan tangan", "berikan isolasi sesuai indikasi", "monitor suhu", "berikan antibiotik sesuai dokter", "monitor laboratorium", "jaga kebersihan luka", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-084",
            code: "D.0085",
            label: "Gangguan Persepsi Sensori",
            domain: "Neurosensori",
            etiology: "Terhubung dengan kerusakan jaringan, gangguan neurologis, atau lingkungan",
            characteristics: {
                subjective: ["tidak bisa melihat", "tidak bisa dengar", "tidak bisa merasakan", "tidak bisa mengecap", "tidak bisa mencium"],
                objective: ["tidak bisa melihat", "tidak bisa dengar", "tidak bisa merasakan", "tidak bisa mengecap", "tidak bisa mencium", "gangguan kognitif"]
            },
            relatedFactors: ["kerusakan jaringan", "gangguan neurologis", "lingkungan", "trauma", "stroke", "infeksi"],
            keywords: ["persepsi sensori terganggu", "tidak bisa melihat", "tidak bisa dengar", "tidak bisa merasakan", "tidak bisa mengecap", "tidak bisa mencium", "gangguan kognitif", "gangguan sensori"],
            interventions: ["assess kemampuan sensori", "berikan alat bantu sensori", "jaga lingkungan yang aman", "monitor kesadaran", "ajarkan teknik kompensasi", "libatkan keluarga", "monitor perubahan sensori", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-085",
            code: "D.0133",
            label: "Perlambatan Pemulihan Pascabedah",
            domain: "Keamanan",
            etiology: "Terhubung dengan komplikasi, infeksi, atau kurang perawatan",
            characteristics: {
                subjective: ["tidak sembuh", "nyeri", "tidak nyaman", "tidak bisa beraktivitas"],
                objective: ["luka tidak sembuh", "infeksi", "edema", "nyeri tekan", "aktivitas menurun"]
            },
            relatedFactors: ["komplikasi", "infeksi", "kurang perawatan", "malnutrisi", "stres", "gangguan metabolisme"],
            keywords: ["pemulihan tertunda", "tidak sembuh", "nyeri", "tidak nyaman", "tidak bisa beraktivitas", "luka tidak sembuh", "infeksi", "edema", "aktivitas menurun"],
            interventions: ["monitor luka operasi", "monitor tanda infeksi", "berikan obat sesuai dokter", "monitor intake gizi", "ajarkan perawatan luka", "libatkan fisioterapi", "monitor tanda komplikasi", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-086",
            code: "D.0117",
            label: "Pemeliharaan Rumah Terganggu",
            domain: "Perawatan Diri",
            etiology: "Terhubung dengan kurang pengetahuan, kurang sumber daya, atau gangguan fisik",
            characteristics: {
                subjective: ["tidak bisa merawat rumah", "tidak ada bantuan", "tidak nyaman", "tidak bisa bersihkan"],
                objective: ["rumah kotor", "tidak ada perawatan", "tidak ada kebersihan", "tidak ada bantuan", "lingkungan tidak aman"]
            },
            relatedFactors: ["kurang pengetahuan", "kurang sumber daya", "gangguan fisik", "stres", "kurang dukungan", "malnutrisi"],
            keywords: ["perawatan rumah terganggu", "tidak bisa merawat rumah", "tidak ada bantuan", "tidak nyaman", "tidak bisa bersihkan", "rumah kotor", "tidak ada perawatan", "lingkungan tidak aman"],
            interventions: ["assess kemampuan merawat rumah", "berikan alat bantu rumah", "ajarkan teknik perawatan rumah", "libatkan keluarga", "rujuk ke layanan sosial", "monitor kebersihan rumah", "berikan dukungan emosional", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-087",
            code: "D.0090",
            label: "Kesiapan Peningkatan Koping Keluarga",
            domain: "Integritas ego",
            etiology: "Terhubung dengan keinginan meningkatkan kemampuan mengatasi stres",
            characteristics: {
                subjective: ["ingin belajar coping", "ingin mengatasi stres", "ingin lebih baik"],
                objective: ["partisipatif", "terbuka", "bertanya", "mau belajar"]
            },
            relatedFactors: ["keinginan belajar", "dukungan keluarga", "informasi yang jelas", "motivasi tinggi"],
            keywords: ["kesiapan meningkatkan coping", "ingin belajar coping", "ingin mengatasi stres", "ingin lebih baik", "partisipatif", "terbuka", "bertanya", "mau belajar"],
            interventions: ["assess motivasi pasien", "berikan informasi coping", "ajarkan teknik coping", "libatkan keluarga", "monitor kemajuan", "berikan dukungan emosional", "ajarkan manajemen stres", "dokumentasi peningkatan coping"]
        },
        {
            id: "ACT-088",
            code: "D.0026",
            label: "Kesiapan Meningkatkan Nutrisi",
            domain: "Nutrisi",
            etiology: "Terhubung dengan keinginan meningkatkan asupan gizi",
            characteristics: {
                subjective: ["ingin makan lebih baik", "ingin sehat", "ingin berat badan normal"],
                objective: ["asupan gizi baik", "berat badan stabil", "BMI normal", "tidak ada defisit"]
            },
            relatedFactors: ["keinginan sehat", "informasi gizi", "dukungan keluarga", "motivasi tinggi"],
            keywords: ["kesiapan meningkatkan nutrisi", "ingin makan lebih baik", "ingin sehat", "ingin berat badan normal", "asupan gizi baik", "BMI normal", "tidak ada defisit"],
            interventions: ["assess motivasi pasien", "berikan informasi gizi", "ajarkan pola makan seimbang", "monitor berat badan", "libatkan ahli gizi", "monitor asupan gizi", "berikan contoh menu sehat", "dokumentasi peningkatan nutrisi"]
        },
        {
            id: "ACT-146",
            code: "D.0027",
            label: "Ketidakstabilan Kadar Glukosa Darah",
            domain: "Nutrisi",
            etiology: "Terhubung dengan gangguan pankreas, diabetes, atau efek obat",
            characteristics: {
                subjective: ["pusing", "kelelahan", "haus", "penglihatan kabur"],
                objective: ["gula darah tidak stabil", "hipoglikemi", "hiperglikemi", "kencing manis", " Nafas aceton"]
            },
            relatedFactors: ["diabetes melitus", "efek obat", "gangguan pankreas", "stress", "infeksi", "kurang insulin", "kelebihan insulin"],
            keywords: ["ketidakstabilan glukosa darah", "gula darah tidak stabil", "hipoglikemi", "hiperglikemi", "diabetes", "gula darah tinggi", "gula darah rendah", "kencing manis", "haus"],
            interventions: ["monitor gula darah", "monitor tanda hipo/hiperglikemi", "berikan diet sesuai toleransi", "berikan insulin sesuai dokter", "monitor intake karbohidrat", "monitor elektrolit", "dokumentasi stabilitas glukosa darah"]
        },
        {
            id: "ACT-089",
            code: "D.0058",
            label: "Kesiapan Meningkatkan Tidur",
            domain: "Istirahat",
            etiology: "Terhubung dengan keinginan meningkatkan kualitas tidur",
            characteristics: {
                subjective: ["ingin tidur lebih nyenyak", "ingin tidur cukup", "ingin bangun segar"],
                objective: ["tidur nyenyak", "bangun segar", "tidak ada gangguan tidur", "waktu tidur cukup"]
            },
            relatedFactors: ["keinginan tidur nyenyak", "lingkungan nyaman", "informasi tidur", "motivasi tinggi"],
            keywords: ["kesiapan meningkatkan tidur", "ingin tidur lebih nyenyak", "ingin tidur cukup", "ingin bangun segar", "tidur nyenyak", "bangun segar", "tidak ada gangguan tidur"],
            interventions: ["assess pola tidur", "berikan informasi tidur", "ajarkan higiene tidur", "jaga lingkungan tenang", "monitor waktu tidur", "batasi kafein sore", "berikan rutinitas tidur", "dokumentasi peningkatan tidur"]
        },
        {
            id: "ACT-090",
            code: "D.0113",
            label: "Kesiapan Meningkatkan Pengetahuan",
            domain: "Edukasi",
            etiology: "Terhubung dengan keinginan meningkatkan pengetahuan",
            characteristics: {
                subjective: ["ingin tahu lebih banyak", "ingin belajar", "ingin memahami penyakit"],
                objective: ["bertanya", "mau belajar", "membaca materi", "partisipatif"]
            },
            relatedFactors: ["keinginan belajar", "dukungan keluarga", "informasi yang jelas", "motivasi tinggi", "akses informasi"],
            keywords: ["kesiapan meningkatkan pengetahuan", "ingin tahu lebih banyak", "ingin belajar", "ingin memahami penyakit", "bertanya", "mau belajar", "membaca materi", "partisipatif"],
            interventions: ["assess minat belajar", "berikan materi edukasi", "ajarkan sesuai kebutuhan", "monitor pemahaman", "berikan media edukasi", "libatkan keluarga", "ajarkan cara belajar", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "ACT-091",
            code: "D.0057",
            label: "Kelelahan",
            domain: "Nyeri dan Kenyamanan",
            etiology: "Terhubung dengan kelebihan aktivitas, gangguan tidur, anemia, atau kondisi medis",
            characteristics: {
                subjective: ["kelelahan", "tidak bertenaga", "tidak mau beraktivitas", "tidak bisa berkonsentrasi", "letih"],
                objective: ["lesu", "tampak mengantuk", "tidak bisa mempertahankan aktivitas", "peningkatan denyut nadi", "peningkatan laju pernapasan"]
            },
            relatedFactors: ["kelebihan aktivitas", "gangguan tidur", "anemia", "kondisi medis", "malnutrisi", "depresi"],
            keywords: ["kelelahan", "tidak bertenaga", "tidak mau beraktivitas", "tidak bisa berkonsentrasi", "letih", "lesu", "mengantuk", "tidak bisa aktivitas", "nadi cepat", "pernapasan cepat"],
            interventions: ["assess tingkat kelelahan", "monitor aktivitas dan istirahat", "ajarkan manajemen energi", "berikan istirahat yang cukup", "monitor kondisi medis penyebab", "berikan nutrisi yang cukup", "ajarkan prioritas aktivitas", "dokumentasi perubahan kelelahan"]
        },
        {
            id: "ACT-097b",
            code: "D.0022",
            label: "Kelebihan Volume Cairan",
            domain: "Eliminasi",
            etiology: "Terhubung dengan kelebihan asupan cairan, gagal jantung, atau gangguan ginjal",
            characteristics: {
                subjective: ["tidak nyaman", "tenggorokan penuh", "sesak napas", "tidak bisa bernapas"],
                objective: ["edema", "peningkatan berat badan", "turgor kulit menurun", "batas vaskuler menurun", "tampak bengkak"]
            },
            relatedFactors: ["kelebihan asupan cairan", "gagal jantung", "gangguan ginjal", "hipoalbuminemia", "liver", "obat"],
            keywords: ["tidak nyaman", "tenggorokan penuh", "sesak napas", "tidak bisa bernapas", "edema", "berat badan naik", "turgor kulit menurun", "batas vaskuler", "bengkak"],
            interventions: ["monitor berat badan harian", "monitor intake dan output", "monitor edema", "berikan obat diuretik sesuai dokter", "monitor elektrolit", "berikan diet rendah sodium", "jaga kebersihan mulut", "dokumentasi volume cairan"]
        },
        {
            id: "ACT-097c",
            code: "D.0064",
            label: "Konfusi Akut",
            domain: "Integritas ego",
            etiology: "Terhubung dengan gangguan metabolik, infeksi, atau efek obat",
            characteristics: {
                subjective: ["tidak tahu dimana", "tidak tahu waktu", "tidak mengenal orang", "tidak fokus"],
                objective: ["tidak orientasi waktu", "tidak orientasi tempat", "tidak mengenal orang", "tidak fokus", "ingatan menurun"]
            },
            relatedFactors: ["gangguan metabolik", "infeksi", "efek obat", "alkohol", "trauma kepala", "stroke"],
            keywords: ["tidak tahu dimana", "tidak tahu waktu", "tidak mengenal orang", "tidak fokus", "tidak orientasi", "ingatan menurun", "bingung", "tidak sadar"],
            interventions: ["assess orientasi", "monitor tingkat kesadaran", "berikan lingkungan yang tenang", "ajarkan orientasi realita", "monitor tanda vital", "libatkan keluarga", "monitor obat", "dokumentasi perubahan kesadaran"]
        },
        {
            id: "ACT-098",
            code: "D.0065",
            label: "Konfusi Kronis",
            domain: "Integritas ego",
            etiology: "Terhubung dengan demensia, penyakit neurodegeneratif, atau kerusakan otak",
            characteristics: {
                subjective: ["lupa", "tidak ingat", "bingung kronis", "tidak tahu diri sendiri"],
                objective: ["tidak orientasi", "tidak mengenal orang", "ingatan jangka panjang menurun", "tidak bisa berpikir logis", "tidak bisa menghitung"]
            },
            relatedFactors: ["demensia", "penyakit neurodegeneratif", "kerusakan otak", "penyakit Alzheimer", "stroke berulang"],
            keywords: ["lupa", "tidak ingat", "bingung kronis", "tidak tahu diri sendiri", "tidak orientasi", "tidak mengenal orang", "ingatan menurun", "tidak bisa berpikir", "tidak bisa menghitung"],
            interventions: ["assess tingkat demensia", "berikan lingkungan yang aman", "berikan rutinitas yang konsisten", "ajarkan orientasi", "libatkan keluarga", "monitor keselamatan", "berikan stimulasi kognitif", "dokumentasi perubahan kognitif"]
        },
        {
            id: "ACT-099",
            code: "D.0083",
            label: "Gangguan Citra Tubuh",
            domain: "Integritas ego",
            etiology: "Terhubung dengan perubahan fisik, amputasi, atau penyakit menahun",
            characteristics: {
                subjective: ["tidak menerima tubuh", "tidak nyaman dengan tubuh", "takut melihat tubuh", "tidak mau bicara tentang tubuh"],
                objective: ["menutupi bagian tubuh", "tidak mau menatap cermin", "menghindari kontak sosial", "tampak malu", "tidak peduli penampilan"]
            },
            relatedFactors: ["perubahan fisik", "amputasi", "penyakit menahun", "operasi", "radiasi", "perawatan kanker"],
            keywords: ["tidak menerima tubuh", "tidak nyaman dengan tubuh", "takut melihat tubuh", "tidak mau bicara tentang tubuh", "menutupi tubuh", "tidak mau cermin", "menghindari kontak", "malu", "tidak peduli"],
            interventions: ["assess persepsi tubuh", "berikan dukungan emosional", "ajarkan coping", "libatkan keluarga", "berikan informasi tentang perubahan", "rujuk ke dukungan kelompok", "monitor penyesuaian", "dokumentasi perubahan body image"]
        },
        {
            id: "ACT-100",
            code: "D.0081",
            label: "Berduka",
            domain: "Integritas ego",
            etiology: "Terhubung dengan kehilangan orang tercaya, kehilangan fungsi tubuh, atau penyakit terminal",
            characteristics: {
                subjective: ["sedih", "merasa kehilangan", "tidak mau bicara", "tidak mau makan", "menangis"],
                objective: ["tampak sedih", "menangis", "tidak mau bicara", "tidak mau makan", "tidak peduli diri", "tidak mau bergerak"]
            },
            relatedFactors: ["kehilangan orang tersayang", "kehilangan fungsi tubuh", "penyakit terminal", "kehilangan pekerjaan", "perceraian"],
            keywords: ["sedih", "merasa kehilangan", "tidak mau bicara", "tidak mau makan", "menangis", "tampak sedih", "menangis terus", "tidak pedari diri", "tidak mau bergerak"],
            interventions: ["assess tingkat kesedihan", "berikan dukungan emosional", "ajarkan tahapan duka", "libatkan keluarga", "berikan ruang untuk menangis", "monitor tanda depresi", "rujuk ke layanan psikologis", "dokumentasi proses duka"]
        },
        {
            id: "ACT-101",
            code: "D.0001",
            label: "Bersihan Jalan Napas Tidak Efektif",
            domain: "Respirasi",
            etiology: "Terhubung dengan spasme jalan napas, hipersekresi, disfungsi neuromuskuler, benda asing, atau efek anestesi",
            characteristics: {
                subjective: ["sesak napas", "kelelahan", "tidak bisa napas dalam", "pusing"],
                objective: ["batuk tidak efektif", "tidak mampu batuk", "sputum berlebih", "mengi", "wheezing", "ronchi kering"]
            },
            relatedFactors: ["spasme jalan napas", "hipersekresi jalan napas", "disfungsi neuromuskuler", "benda asing", "jalan napas buatan", "efek anestesi", "merokok", "infeksi"],
            keywords: ["bersihan jalan napas", "batuk tidak efektif", "tidak mampu batuk", "sputum berlebih", "mengi", "wheezing", "ronchi", "sesak napas", "kelelahan"],
            interventions: ["monitor pola napas", "monitor bunyi napas", "berikan oksigen sesuai dokter", "ajarkan teknik batuk efektif", "lakukan fisioterapi dada", "berikan minum hangat", "monitor saturasi oksigen", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-102",
            code: "D.0002",
            label: "Gangguan Penyapihan Ventilator",
            domain: "Respirasi",
            etiology: "Terhubung dengan riwayat ketergantungan ventilator, kecemasan, atau kurang informasi",
            characteristics: {
                subjective: ["sesak napas", "kelelahan", "tidak nyaman"],
                objective: ["frekuensi napas meningkat", "penggunaan otot bantu napas", "napas megap-megap", "upaya napas tidak sinkron", "napas dangkal", "agitasi", "gas darah arteri abnormal"]
            },
            relatedFactors: ["riwayat ketergantungan ventilator", "kecemasan", "perasaan tidak berdaya", "kurang informasi", "riwayat kegagalan penyapihan", "ketidaktepatan kecepatan proses"],
            keywords: ["penyapihan ventilator", "ventilator", "napas megap", "otot bantu napas", "agitasi", "sesak napas", "kelelahan", "tidak sinkron"],
            interventions: ["monitor frekuensi napas", "monitor gas darah arteri", "berikan dukungan psikologis", "ajarkan cara pengontrolan napas", "lakukan ujicoba penyapihan", "berikan teknik relaksasi", "monitor tanda kelelahan", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-103",
            code: "D.0004",
            label: "Gangguan Ventilasi Spontan",
            domain: "Respirasi",
            etiology: "Terhubung dengan gangguan metabolisme atau kelelahan otot pernapasan",
            characteristics: {
                subjective: ["sesak napas", "kelelahan", "tidak bisa napas dalam"],
                objective: ["penggunaan otot bantu napas meningkat", "volume tidak menurun", "PCO2 meningkat", "PO2 menurun", "SaO2 menurun"]
            },
            relatedFactors: ["gangguan metabolisme", "kelelahan otot pernapasan", "kelemahan otot", "penyakit neuromuscular"],
            keywords: ["ventilasi spontan", "sesak napas", "kelelahan", "otot bantu napas", "PCO2 naik", "PO2 turun", "SaO2 turun"],
            interventions: ["monitor saturasi oksigen", "monitor gas darah arteri", "berikan oksigen sesuai dokter", "ajarkan teknik pernapasan dalam", "jaga posisi tinggi 30 derajat", "monitor tanda kelelahan", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-104",
            code: "D.0007",
            label: "Gangguan Sirkulasi Spontan",
            domain: "Sirkulasi",
            etiology: "Terhubung dengan abnormalitas kelistrikan jantung, struktur jantung, atau penurunan fungsi ventrikel",
            characteristics: {
                subjective: ["tidak berespon", "pusing", "lemas"],
                objective: ["nadi < 50 atau > 150", "tekanan darah sistolik < 60 atau > 200", "napas < 6 atau > 30", "kesadaran menurun atau tidak sadar"]
            },
            relatedFactors: ["abnormalitas kelistrikan jantung", "abnormalitas struktur jantung", "penurunan fungsi ventrikel", "arytmia", "gagal jantung"],
            keywords: ["sirkulasi spontan", "tidak ada respon", "nadi tidak ada", "napas tidak ada", "tidak sadar", "tekanan darah rendah", "bradikardia", "takikardia"],
            interventions: ["monitor nadi dan tekanan darah", "monitor kesadaran", "berikan resusitasi jantung paru jika diperlukan", "monitor EKG", "libatkan tim medis", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-105",
            code: "D.0008",
            label: "Penurunan Curah Jantung",
            domain: "Sirkulasi",
            etiology: "Terhubung dengan perubahan irama jantung, preload, afterload, atau kontraktilitas",
            characteristics: {
                subjective: ["palpitasi", "lelah", "sesak napas", "batuk"],
                objective: ["bradikardia/takikardia", "EKG aritmia", "edema", "distensi vena jugularis", "CVP meningkat", "hepatomegali", "tekanan darah menurun", "nadi perifer lemah", "oliguria", "kulit pucat", "S3/S4", "EF menurun"]
            },
            relatedFactors: ["perubahan irama jantung", "perubahan preload", "perubahan afterload", "penurunan kontraktilitas", "gagal jantung", "infark miokard"],
            keywords: ["penurunan curah jantung", "palpitasi", "dada berdebar", "edema", "sesak napas", "lelah", "ortopnea", "PND", "takikardia", "bradikardia", "aritmia"],
            interventions: ["monitor tekanan darah dan nadi", "monitor EKG", "monitor intake dan output", "berikan oksigen sesuai dokter", "berikan diet jantung", "monitor berat badan", "ajarkan aktivitas sesuai toleransi", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-106",
            code: "D.0024",
            label: "Hipervolemia",
            domain: "Nutrisi",
            etiology: "Terhubung dengan gangguan regulasi, kelebihan asupan cairan, atau efek agen farmakologis",
            characteristics: {
                subjective: ["ortopnea", "sesak napas", "PND"],
                objective: ["edema anasarka", "edema perifer", "berat badan meningkat", "JVP/CVP meningkat", "refleks hepatojugular positif"]
            },
            relatedFactors: ["gangguan mekanisme regulasi", "kelebihan asupan cairan", "kelebihan asupan natrium", "gangguan aliran balik vena", "efek kortikosteroid", "efek obat"],
            keywords: ["hipervolemia", "kelebihan volume cairan", "ortopnea", "sesak napas", "edema", "berat badan naik", "JVP naik", "CVP naik"],
            interventions: ["monitor intake dan output", "monitor berat badan", "batasi asupan cairan dan garam", "tinggikan kepala 30-40 derajat", "berikan diuretik sesuai dokter", "monitor tanda edema", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-107",
            code: "D.0025",
            label: "Ikterik Neonatus",
            domain: "Nutrisi",
            etiology: "Terhubung dengan peningkatan bilirubin, hemolisis, atau gangguan hati",
            characteristics: {
                subjective: ["tidak nafsu makan", "lemas", "mengantuk"],
                objective: ["kulit kuning", "sklera kuning", "feses pucat", "urin gelap", "bilirubin meningkat"]
            },
            relatedFactors: ["peningkatan bilirubin", "hemolisis", "gangguan hati", "infeksi", "ketidakcocokan golongan darah", "kelahiran prematur"],
            keywords: ["ikterik neonatus", "kulit kuning", "sklera kuning", "feses pucat", "urin gelap", "bilirubin tinggi", "bayi baru lahir", "jaundice"],
            interventions: ["monitor bilirubin", "monitor suhu", "berikan fototerapi sesuai dokter", "monitor intake cairan", "jaga kebersihan kulit", "monitor tanda ensefalopati", "dokumentasi respon terhadap intervensi"],
            relatedFactors: ["keinginan meningkatkan hidrasi", "pengetahuan tentang pentingnya cairan", "motivasi untuk perubahan"],
            keywords: ["kesiapan cairan", "ingin minum", "hidrasi", "keseimbangan cairan", "ingin meningkatkan cairan"],
            interventions: ["assess kesiapan perubahan", "berikan informasi tentang hidrasi", "ajarkan cara memantau intake", "monitor pola minum", "berikan target cairan harian", "dokumentasi peningkatan kesiapan"]
        },
        {
            id: "ACT-109",
            code: "D.0028",
            label: "Menyusui Efektif",
            domain: "Nutrisi",
            etiology: "Terhubung dengan keinginan menyusui dan kondisi bayi yang optimal",
            characteristics: {
                subjective: ["ingin menyusui", "perlu menyusui"],
                objective: ["bayi menempel", "bayi menelan", "produksi ASI cukup", "ASI keluar dengan baik"]
            },
            relatedFactors: ["keinginan menyusui", "pengetahuan tentang menyusui", "dukungan keluarga", "posisi menyusui benar", "bayi mampu menempel"],
            keywords: ["menyusui efektif", "ASI", "bayi menempel", "menyusui", "produksi ASI", "laktasi", "ASI keluar"],
            interventions: ["assess teknik menyusui", "berikan dukungan menyusui", "ajarkan posisi menyusui", "monitor produksi ASI", "monitor berat bayi", "libatkan keluarga", "dokumentasi proses menyusui"]
        },
        {
            id: "ACT-110",
            code: "D.0029",
            label: "Menyusui Tidak Efektif",
            domain: "Nutrisi",
            etiology: "Terhubung dengan kesulitan menyusui,ASI tidak cukup, atau gangguan laktasi",
            characteristics: {
                subjective: ["sulit menyusui", "ASI tidak cukup", "bayi tidak menempel"],
                objective: ["bayi menangis terus", "berat bayi tidak naik", "produksi ASI kurang", "ASI tidak keluar", "puting sakit"]
            },
            relatedFactors: ["kesulitan menyusui", "ASI tidak cukup", "gangguan laktasi", "posisi salah", "bayi prematur", "puting rata"],
            keywords: ["menyusui tidak efektif", "sulit menyusui", "ASI kurang", "bayi menangis", "berat bayi turun", "produksi ASI kurang", "puting sakit"],
            interventions: ["assess penyebab kesulitan menyusui", "berikan dukungan emosional", "ajarkan teknik menyusui", "berikan ASI tambahan jika perlu", "monitor berat bayi", "rujuk ke konsultan laktasi", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-111",
            code: "D.0030",
            label: "Obesitas",
            domain: "Nutrisi",
            etiology: "Terhubung dengan kurang aktivitas, kelebihan konsumsi gula, atau gangguan kebiasaan makan",
            characteristics: {
                subjective: ["tidak nafsu makan olahraga", "sering ngemil"],
                objective: ["IMT > 27 kg/m2", "IMT > presentil 95"]
            },
            relatedFactors: ["kurang aktivitas fisik", "kelebihan konsumsi gula", "gangguan kebiasaan makan", "kelebihan konsumsi alkohol", "penggunaan energi kurang", "sering ngemil", "faktor keturunan"],
            keywords: ["obesitas", "IMT tinggi", "berat badan berlebih", "kelebihan lemak", "kurang olahraga", "sering makan", "gemuk"],
            interventions: ["monitor IMT", "monitor pola makan", "berikan konseling nutrisi", "ajarkan manajemen berat badan", "promosikan latihan fisik", "monitor berat badan", "dokumentasi perubahan berat"]
        },
        {
            id: "ACT-112",
            code: "D.0043",
            label: "Inkontinensia Urin Berlebih",
            domain: "Eliminasi",
            etiology: "Terhubung dengan gangguan neuromuskuler, obstruksi, atau gangguan sensori",
            characteristics: {
                subjective: ["BAK tidak bisa ditahan", "sering BAK", "tidak bisa kontrol BAK"],
                objective: ["volume BAK berlebih", "frekuensi BAK meningkat", " Inkontinensia terus menerus"]
            },
            relatedFactors: ["gangguan neuromuskuler", "obstruksi", "gangguan sensori", "stroke", "trauma spinal", "penyakit Parkinson"],
            keywords: ["inkontinensia urin berlebih", "BAK banyak", "tidak bisa tahan BAK", "sering BAK", "tidak kontrol BAK", "volume urin banyak"],
            interventions: ["monitor pola BAK", "monitor volume dan warna urin", "berikan minum sesuai jadwal", "jaga kebersihan area genital", "ajarkan teknik kegel", "berikan pembalut sesuai kebutuhan", "dokumentasi pola eliminasi"]
        },
        {
            id: "ACT-113",
            code: "D.0044",
            label: "Inkontinensia Urin Fungsional",
            domain: "Eliminasi",
            etiology: "Terhubung dengan gangguan mobilitas, gangguan kognitif, atau lingkungan tidak mendukung",
            characteristics: {
                subjective: ["tidak bisa ke kamar mandi", "tidak ada waktu ke kamar mandi"],
                objective: ["BAK tanpa sadar", "pakaian basah", "area genital basah"]
            },
            relatedFactors: ["gangguan mobilitas", "gangguan kognitif", "lingkungan tidak mendukung", "tidak ada bantuan", "kurang kesadaran", "penyakit kronis"],
            keywords: ["inkontinensia fungsional", "tidak bisa ke kamar mandi", "BAK tanpa sadar", "pakaian basah", "area genital basah", "tidak ada bantuan"],
            interventions: ["monitor pola BAK", "berikan jadwal BAK teratur", "jaga kebersihan area genital", "berikan pembalut", "modifikasi lingkungan", "libatkan keluarga", "dokumentasi pola eliminasi"]
        },
        {
            id: "ACT-114",
            code: "D.0045",
            label: "Inkontinensia Urin Refleks",
            domain: "Eliminasi",
            etiology: "Terhubung dengan kerusakan saraf sakral atau gangguan neurologis",
            characteristics: {
                subjective: ["BAK keluar tanpa sadar", "tidak bisa menahan BAK"],
                objective: ["BAK keluar saat tekanan perut", "volume BAK teratur", "kandung kemih teraba penuh"]
            },
            relatedFactors: ["kerusakan saraf sakral", "gangguan neurologis", "trauma spinal", "stroke", "multiple sclerosis", "lesi spinal"],
            keywords: ["inkontinensia refleks", "BAK keluar tanpa sadar", "tidak bisa tahan BAK", "BAK saat tekan perut", "kandung kemih penuh"],
            interventions: ["monitor pola BAK", "berikan jadwal BAK teratur", "monitor kandung kemih", "berikan kateter jika perlu", "jaga kebersihan area genital", "monitor tanda infeksi", "dokumentasi pola eliminasi"]
        },
        {
            id: "ACT-115",
            code: "D.0046",
            label: "Inkontinensia Urin Stres",
            domain: "Eliminasi",
            etiology: "Terhubung dengan kelemahan otot dasar pelvis atau gangguan saluran urethra",
            characteristics: {
                subjective: ["BAK keluar saat batuk", "BAK keluar saat bersin", "BAK keluar saat tertawa", "BAK keluar saat angkat berat"],
                objective: ["BAK keluar sedikit", "volume BAK kecil", "area genital basah saat aktivitas"]
            },
            relatedFactors: ["kelemahan otot dasar pelvis", "gangguan saluran urethra", "kehamilan", "persalinan", "menopause", "obesitas", "prosedur bedah pelvis"],
            keywords: ["inkontinensia stres", "BAK keluar saat batuk", "BAK keluar saat bersin", "BAK keluar saat tertawa", "BAK keluar saat angkat berat", "pakaian basah"],
            interventions: ["monitor pola BAK", "ajarkan teknik kegel", "berikan pembalut", "jaga kebersihan area genital", "monitor berat badan", "rujuk ke fisioterapi", "dokumentasi pola eliminasi"]
        },
        {
            id: "ACT-116",
            code: "D.0048",
            label: "Kesiapan Peningkatan Eliminasi Urin",
            domain: "Eliminasi",
            etiology: "Terhubung dengan keinginan meningkatkan pola BAK yang normal",
            characteristics: {
                subjective: ["ingin BAK teratur", "ingin kontrol BAK"],
                objective: ["mengikuti jadwal BAK", "monitor intake cairan"]
            },
            relatedFactors: ["keinginan meningkatkan pola BAK", "pengetahuan tentang pola BAK", "motivasi untuk perubahan"],
            keywords: ["kesiapan eliminasi urin", "ingin BAK teratur", "kontrol BAK", "pola BAK normal", "ingin meningkatkan eliminasi"],
            interventions: ["assess kesiapan perubahan", "berikan informasi tentang pola BAK", "ajarkan cara memantau BAK", "berikan jadwal BAK", "monitor intake cairan", "dokumentasi peningkatan kesiapan"]
        },
        {
            id: "ACT-117",
            code: "D.0061",
            label: "Disrefleksia Otonom",
            domain: "Neurosensori",
            etiology: "Terhubung dengan kerusakan saraf otonom akibat lesi spinal",
            characteristics: {
                subjective: ["sakit kepala parah", "menggigil", "keringat berlebih"],
                objective: ["tekanan darah meningkat", "bradikardia", "flushing di atas lesi", "kontraktur otot", "pilek"]
            },
            relatedFactors: ["kerusakan saraf otonom", "lesi spinal", "trauma spinal", "multiple sclerosis", "gangguan otonom"],
            keywords: ["disrefleksia otonom", "sakit kepala parah", "tekanan darah naik", "bradikardia", "flushing", "menggigil", "keringat"],
            interventions: ["monitor tekanan darah", "monitor nadi", "berikan posisi duduk", "monitor kesadaran", "berikan obat sesuai dokter", "jaga kebersihan", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-118",
            code: "D.0062",
            label: "Gangguan Memori",
            domain: "Neurosensori",
            etiology: "Terhubung dengan kerusakan otak, demensia, atau efek obat",
            characteristics: {
                subjective: ["lupa nama", "lupa tempat", "sulit mengingat", "tidak bisa menghafal"],
                objective: ["tidak bisa mengingat acara", "salah mengingat", "tidak bisa belajar hal baru", "gangguan memori jangka pendek"]
            },
            relatedFactors: ["kerusakan otak", "demensia", "efek obat", "stroke", "trauma kepala", "penyakit Alzheimer", "malnutrisi", "hipoksia"],
            keywords: ["gangguan memori", "lupa", "sulit mengingat", "tidak bisa menghafal", "lupa nama", "lupa tempat", "salah ingat"],
            interventions: ["assess tingkat gangguan memori", "berikan lingkungan yang konsisten", "gunakan alat bantu memori", "ajarkan teknik mengingat", "libatkan keluarga", "monitor perkembangan", "dokumentasi perubahan memori"]
        },
        {
            id: "ACT-119",
            code: "D.0066",
            label: "Penurunan Kapasitas Adaptif Intrakranial",
            domain: "Neurosensori",
            etiology: "Terhubung dengan edema otak, lesi massa, atau peningkatan tekanan intrakranial",
            characteristics: {
                subjective: ["sakit kepala", "pusing", "mual", "tidak fokus"],
                objective: ["kesadaran menurun", "pupil tidak seimbang", "tekanan darah meningkat", "napas berubah", "posturing", "Cushing triad"]
            },
            relatedFactors: ["edema otak", "lesi massa", "peningkatan tekanan intrakranial", "trauma kepala", "stroke", "tumor otak", "infeksi"],
            keywords: ["kapasitas adaptif intracranial", "tekanan intracranial", "sakit kepala", "pusing", "mual", "kesadaran turun", "pupil tidak seimbang", "Cushing"],
            interventions: ["monitor tingkat kesadaran", "monitor tekanan intracranial", "berikan obat selonjoran", "jaga posisi kepala 30 derajat", "monitor tanda Cushing", "monitor pupil", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-120",
            code: "D.0069",
            label: "Disfungsi Seksual",
            domain: "Reproduksi",
            etiology: "Terhubung dengan gangguan hormonal, efek obat, atau gangguan psikologis",
            characteristics: {
                subjective: ["tidak nafsu seksual", "tidak bisa performa", "nyeri saat seks"],
                objective: ["gangguan ereksi", "gangguan lubrikasi", "tidak bisa orgasme"]
            },
            relatedFactors: ["gangguan hormonal", "efek obat", "gangguan psikologis", "kecemasan", "depresi", "perubahan tubuh", "operasi pelvis"],
            keywords: ["disfungsi seksual", "tidak nafsu seks", "tidak bisa performa", "nyeri seks", "ereksi", "lubrikasi", "orgasme"],
            interventions: ["assess penyebab disfungsi", "berikan dukungan emosional", "ajarkan teknik komunikasi", "rujuk ke seksolog jika perlu", "monitor efek obat", "libatkan pasangan", "dokumentasi perubahan fungsi seksual"]
        },
        {
            id: "ACT-121",
            code: "D.0070",
            label: "Kesiapan Persalinan",
            domain: "Reproduksi",
            etiology: "Terhubung dengan keinginan persalinan normal dan kondisi ibu yang stabil",
            characteristics: {
                subjective: ["ingin persalinan normal", "ingin persiapkan persalinan"],
                objective: ["mengikuti kelas persalinan", "memantau kontraksi", "memantau fetus"]
            },
            relatedFactors: ["keinginan persalinan normal", "pengetahuan tentang persalinan", "dukungan keluarga", "kondisi ibu stabil", "kehamilan normal"],
            keywords: ["kesiapan persalinan", "ingin lahir normal", "persiapkan lahir", "kontraksi", "janin", "kehamilan normal", "kala I", "kala II", "kala III"],
            interventions: ["assess kesiapan persalinan", "berikan informasi tentang persalinan", "ajarkan teknik pernapasan", "monitor kontraksi", "monitor fetus", "berikan dukungan emosional", "dokumentasi proses persalinan"]
        },
        {
            id: "ACT-122",
            code: "D.0071",
            label: "Pola Seksual Tidak Efektif",
            domain: "Reproduksi",
            etiology: "Terhubung dengan gangguan psikologis, efek obat, atau konflik nilai",
            characteristics: {
                subjective: ["tidak puas dengan hubungan seksual", "tidak nyaman dengan seks"],
                objective: ["tidak komunikasi seksual", "tidak ada aktivitas seksual", "konflik hubungan"]
            },
            relatedFactors: ["gangguan psikologis", "efek obat", "konflik nilai", "kecemasan", "depresi", "trauma seksual", "perubahan tubuh"],
            keywords: ["pola seksual tidak efektif", "tidak puas seks", "tidak nyaman seks", "tidak komunikasi seksual", "tidak ada seks", "konflik hubungan"],
            interventions: ["assess pola seksual", "berikan dukungan emosional", "ajarkan komunikasi seksual", "rujuk ke seksolog", "monitor hubungan pasangan", "dokumentasi perubahan pola seksual"]
        },
        {
            id: "ACT-123",
            code: "D.0075",
            label: "Gangguan Rasa Nyaman",
            domain: "Kenyamanan",
            etiology: "Terhubung dengan gejala penyakit, kurang pengendalian lingkungan, atau efek terapi",
            characteristics: {
                subjective: ["tidak nyaman", "gelisah"],
                objective: ["gelisah"]
            },
            relatedFactors: ["gejala penyakit", "kurang pengendalian lingkungan", "ketidakadekuatan sumber daya", "kurang privasi", "gangguan stimulus lingkungan", "efek samping terapi", "gangguan adaptasi kehamilan"],
            keywords: ["gangguan rasa nyaman", "tidak nyaman", "gelisah", "tidak senang", "tidak lega"],
            interventions: ["assess penyebab ketidaknyamanan", "berikan obat sesuai dokter", "ajarkan teknik relaksasi", "jaga lingkungan yang nyaman", "berikan kompres hangat/dingin", "monitor respon terhadap intervensi", "dokumentasi perubahan kenyamanan"],
            relatedFactors: ["luka persalinan", "kontraksi involution", "perubahan hormonal", "episiotomi", "luka perineum", "postpartum"],
            keywords: ["ketidaknyamanan pasca partum", "nyeri perineum", "nyeri luka", "tidak nyaman postpartum", "edema perineum", "kontraksi uterus"],
            interventions: ["assess tingkat nyeri", "berikan obat analgesik sesuai dokter", "berikan kompres dingin", "jaga kebersihan area genital", "ajarkan posisi nyaman", "monitor luka", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-125",
            code: "D.0079",
            label: "Nyeri Melahirkan",
            domain: "Nyeri dan Kenyamanan",
            etiology: "Terhubung dengan dilatasi serviks atau pengeluaran janin",
            characteristics: {
                subjective: ["mengeluh nyeri", "perineum terasa tertekan"],
                objective: ["ekspresi meringis", "berposisi meringankan nyeri", "uterus teraba membulat"]
            },
            relatedFactors: ["dilatasi serviks", "pengeluaran janin", "kontraksi uterus", "persalinan"],
            keywords: ["nyeri melahirkan", "mengeluh nyeri", "perineum tertekan", "miringis", "berposisi meringankan", "uterus membulat"],
            interventions: ["assess tingkat nyeri", "berikan obat analgesik sesuai dokter", "ajarkan teknik pernapasan dalam", "berikan kompres hangat/dingin", "ajarkan posisi melahirkan", "berikan dukungan emosional", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-126",
            code: "D.0086",
            label: "Harga Diri Rendah Kronis",
            domain: "Integritas ego",
            etiology: "Terhubung dengan pengalaman negatif berulang atau kritik berlebihan",
            characteristics: {
                subjective: ["tidak percaya diri", "tidak mampu", "tidak berharga"],
                objective: ["tidak mau mencoba", "menghindari tantangan", "tidak percaya pada kemampuan sendiri"]
            },
            relatedFactors: ["pengalaman negatif berulang", "kritik berlebihan", "perbandingan diri dengan orang lain", "trauma", "penyakit kronis", "gangguan mental"],
            keywords: ["harga diri rendah kronis", "tidak percaya diri", "tidak mampu", "tidak berharga", "tidak mau mencoba", "menghindari tantangan", "rendah diri"],
            interventions: ["assess penyebab harga diri rendah", "berikan dukungan emosional", "ajarkan teknik coping", "berikan umpan balik positif", "libatkan keluarga", "rujuk ke psikolog jika perlu", "dokumentasi perubahan harga diri"]
        },
        {
            id: "ACT-127",
            code: "D.0087",
            label: "Harga Diri Rendah Situasional",
            domain: "Integritas ego",
            etiology: "Terhubung dengan perubahan kesehatan, kehilangan, atau kegagalan",
            characteristics: {
                subjective: ["tidak percaya diri", "tidak mampu", "malu"],
                objective: ["tidak mau bicara", "menghindari kontak mata", "tidak mau mencoba hal baru"]
            },
            relatedFactors: ["perubahan kesehatan", "kehilangan", "kegagalan", "perubahan penampilan", "operasi", "penyakit akut"],
            keywords: ["harga diri rendah situasional", "tidak percaya diri", "tidak mampu", "malu", "tidak mau bicara", "menghindari kontak mata"],
            interventions: ["assess penyebab harga diri rendah", "berikan dukungan emosional", "ajarkan teknik coping", "berikan umpan balik positif", "libatkan keluarga", "dokumentasi perubahan harga diri"]
        },
        {
            id: "ACT-128",
            code: "D.0094",
            label: "Koping Defensif",
            domain: "Integritas ego",
            etiology: "Terhubung dengan penggunaan mekanisme pertahanan diri yang tidak membantu",
            characteristics: {
                subjective: ["tidak mau menerima realita", "salahkan orang lain", "tidak mau bicara"],
                objective: ["menolak perawatan", "menyangkalkan masalah", "tidak mau bicara tentang masalah"]
            },
            relatedFactors: ["mekanisme pertahanan tidak membantu", "trauma", "kecemasan", "ketakutan", "kurang dukungan", "gangguan mental"],
            keywords: ["koping defensif", "tidak mau terima realita", "salahkan orang lain", "menolak perawatan", "menyangkalkan", "tidak mau bicara"],
            interventions: ["assess mekanisme coping", "berikan dukungan emosional", "ajarkan teknik coping yang tepat", "berikan informasi yang jelas", "libatkan keluarga", "rujuk ke psikolog jika perlu", "dokumentasi perubahan coping"]
        },
        {
            id: "ACT-129",
            code: "D.0095",
            label: "Koping Komunitas Tidak Efektif",
            domain: "Integritas ego",                                                  
            etiology: "Terhubung dengan kurang dukungan, konflik, atau kurang sumber daya komunitas",
            characteristics: {
                subjective: ["tidak ada dukungan", "tidak ada solusi", "tidak ada kerja sama"],
                objective: ["tidak ada komunikasi", "tidak ada kerja sama", "tidak ada rencana", "tidak ada dukungan"]
            },
            relatedFactors: ["kurang dukungan", "konflik", "kurang sumber daya", "kurang komunikasi", "tidak ada kepemimpinan", "gangguan sosial"],
            keywords: ["koping komunitas tidak efektif", "tidak ada dukungan", "tidak ada solusi", "tidak ada kerja sama", "tidak ada komunikasi", "tidak ada rencana"],
            interventions: ["assess dukungan komunitas", "berikan informasi", "ajarkan kerja sama", "fasilitasi komunikasi", "libatkan komunitas", "monitor interaksi", "dokumentasi perubahan koping komunitas"]
        },
        {
            id: "ACT-130",
            code: "D.0097",
            label: "Penurunan Koping Keluarga",
            domain: "Integritas ego",
            etiology: "Terhubung dengan stres berlebihan, kurang informasi, atau konflik keluarga",
            characteristics: {
                subjective: ["tidak bisa mengatasi masalah", "keluarga tidak membantu", "tidak ada dukungan"],
                objective: ["tidak ada komunikasi", "tidak ada kerja sama", "tidak ada rencana", "konflik keluarga"]
            },
            relatedFactors: ["stres berlebihan", "kurang informasi", "konflik keluarga", "kurang dukungan", "gangguan ekonomi", "penyakit anggota keluarga"],
            keywords: ["penurunan koping keluarga", "tidak bisa mengatasi", "keluarga tidak membantu", "tidak ada dukungan", "konflik keluarga", "tidak ada komunikasi"],
            interventions: ["assess mekanisme coping keluarga", "berikan edukasi keluarga", "ajarkan teknik coping", "libatkan keluarga dalam perawatan", "fasilitasi komunikasi", "rujuk ke layanan sosial jika perlu", "dokumentasi perubahan koping keluarga"]
        },
        {
            id: "ACT-131",
            code: "D.0098",
            label: "Penyangkalan Tidak Efektif",
            domain: "Integritas ego",
            etiology: "Terhubung dengan ketakutan, trauma, atau kurang kesiapan",
            characteristics: {
                subjective: ["tidak mau bicara tentang masalah", "tidak mau menerima realita", "menolak perawatan"],
                objective: ["menolak bicara", "menghindari topik", "tidak mau menerima diagnosis", "tidak mau minum obat"]
            },
            relatedFactors: ["ketakutan", "trauma", "kurang kesiapan", "kurang informasi", "kecemasan", "ketidakpercayaan"],
            keywords: ["penyangkalan tidak efektif", "tidak mau bicara", "tidak mau terima realita", "menolak perawatan", "menghindari topik", "tidak mau terima diagnosis"],
            interventions: ["assess tingkat penyangkalan", "berikan dukungan emosional", "berikan informasi secara bertahap", "hormati kesiapan pasien", "libatkan keluarga", "rujuk ke psikolog jika perlu", "dokumentasi perubahan penyangkalan"]
        },
        {
            id: "ACT-132",
            code: "D.0099",
            label: "Perilaku Kesehatan Cenderung Berisiko",
            domain: "Perilaku",
            etiology: "Terhubung dengan kurang pengetahuan, tekanan sosial, atau gangguan mental",
            characteristics: {
                subjective: ["tidak peduli kesehatan", "tidak mau berubah", "tidak peduli diri"],
                objective: ["perilaku berisiko", "tidak patuh", "sering sakit", "gangguan mental"]
            },
            relatedFactors: ["kurang pengetahuan", "tekanan sosial", "gangguan mental", "kurang dukungan", "lingkungan berisiko", "ketidakpercayaan"],
            keywords: ["perilaku kesehatan berisiko", "tidak peduli kesehatan", "tidak mau berubah", "perilaku berisiko", "tidak patuh", "sering sakit", "gangguan mental"],
            interventions: ["assess perilaku berisiko", "berikan informasi kesehatan", "ajarkan perilaku sehat", "berikan dukungan", "libatkan keluarga", "rujuk ke layanan kesehatan mental jika perlu", "dokumentasi perubahan perilaku"]
        },
        {
            id: "ACT-133",
            code: "D.0105",
            label: "Gangguan Tumbuh Kembang",
            domain: "Pertumbuhan dan Perkembangan",
            etiology: "Terhubung dengan gangguan genetik, malnutrisi, atau kurang stimulasi",
            characteristics: {
                subjective: ["tidak berkembang sesuai usia", "tidak bisa bicara", "tidak bisa jalan"],
                objective: ["berat badan menurun", "tinggi badan kurang", "lingkar kepala abnormal", "tidak sesuai milestone"]
            },
            relatedFactors: ["gangguan genetik", "malnutrisi", "kurang stimulasi", "penyakit kronis", "lingkungan tidak stimulasi", "abuse"],
            keywords: ["gangguan tumbuh kembang", "tidak berkembang", "tidak sesuai usia", "berat badan turun", "tinggi kurang", "tidak bicara", "tidak jalan"],
            interventions: ["assess tumbuh kembang", "monitor berat dan tinggi badan", "berikan stimulasi sesuai usia", "berikan nutrisi sesuai kebutuhan", "rujuk ke dokter jika perlu", "libatkan keluarga", "dokumentasi perkembangan"]
        },
        {
            id: "ACT-134",
            code: "D.0110",
            label: "Defisit Kesehatan Komunitas",
            domain: "Penyuluhan",
            etiology: "Terhubung dengan kurang akses layanan, kurang pengetahuan, atau lingkungan tidak sehat",
            characteristics: {
                subjective: ["tidak tahu cara sehat", "tidak ada layanan kesehatan", "tidak ada informasi"],
                objective: ["tingkat penyakit tinggi", "kurang akses layanan", "lingkungan tidak sehat"]
            },
            relatedFactors: ["kurang akses layanan", "kurang pengetahuan", "lingkungan tidak sehat", "kemiskinan", "kurang dukungan", "tidak ada layanan"],
            keywords: ["defisit kesehatan komunitas", "tidak tahu sehat", "tidak ada layanan", "tidak ada informasi", "tingkat penyakit tinggi", "lingkungan tidak sehat"],
            interventions: ["assess kebutuhan komunitas", "berikan informasi kesehatan", "ajarkan perilaku sehat", "fasilitasi akses layanan", "libatkan komunitas", "rujuk ke layanan kesehatan", "dokumentasi perubahan kesehatan komunitas"]
        },
        {
            id: "ACT-135",
            code: "D.0112",
            label: "Kesiapan Peningkatan Manajemen Kesehatan",
            domain: "Penyuluhan",
            etiology: "Terhubung dengan keinginan meningkatkan manajemen kesehatan",
            characteristics: {
                subjective: ["ingin kelola kesehatan", "ingin perawatan mandiri"],
                objective: ["mengikuti perawatan", "monitor kesehatan", "ikut jadwal kontrol"]
            },
            relatedFactors: ["keinginan meningkatkan kesehatan", "pengetahuan tentang kesehatan", "dukungan keluarga", "akses layanan", "motivasi perubahan"],
            keywords: ["kesiapan manajemen kesehatan", "ingin kelola kesehatan", "ingin perawatan mandiri", "ikut kontrol", "monitor kesehatan"],
            interventions: ["assess kesiapan perubahan", "berikan informasi kesehatan", "ajarkan manajemen penyakit", "berikan jadwal kontrol", "monitor kepatuhan", "dokumentasi peningkatan manajemen kesehatan"]
        },
        {
            id: "ACT-136",
            code: "D.0114",
            label: "Ketidakpatuhan",
            domain: "Penyuluhan",
            etiology: "Terhubung dengan kurang pemahaman, efek samping obat, atau dukungan kurang",
            characteristics: {
                subjective: ["tidak mau minum obat", "tidak mau kontrol", "tidak mau perawatan"],
                objective: ["tidak patuh jadwal", "tidak ikut kontrol", "salah dosis", "tidak mau perawatan"]
            },
            relatedFactors: ["kurang pemahaman", "efek samping obat", "dukungan kurang", "biaya tinggi", "sulit akses layanan", "kurang motivasi", "gangguan mental"],
            keywords: ["ketidakpatuhan", "tidak mau minum obat", "tidak mau kontrol", "tidak patuh jadwal", "salah dosis", "tidak mau perawatan"],
            interventions: ["assess penyebab ketidakpatuhan", "berikan informasi yang jelas", "ajarkan pentingnya perawatan", "berikan pengingat", "monitor kepatuhan", "libatkan keluarga", "dokumentasi perubahan kepatuhan"]
        },
        {
            id: "ACT-137",
            code: "D.0115",
            label: "Manajemen Kesehatan Keluarga Tidak Efektif",
            domain: "Penyuluhan",
            etiology: "Terhubung dengan kurang pengetahuan, konflik, atau kurang dukungan",
            characteristics: {
                subjective: ["keluarga tidak tahu", "tidak ada kerja sama", "tidak ada dukungan"],
                objective: ["tidak ada komunikasi", "salah perawatan", "tidak ada rencana", "komplikasi berulang"]
            },
            relatedFactors: ["kurang pengetahuan", "konflik keluarga", "kurang dukungan", "gangguan ekonomi", "kurang waktu", "tidak ada komunikasi"],
            keywords: ["manajemen kesehatan keluarga tidak efektif", "keluarga tidak tahu", "tidak ada kerja sama", "tidak ada dukungan", "tidak ada komunikasi", "salah perawatan"],
            interventions: ["assess kemampuan keluarga", "berikan edukasi keluarga", "ajarkan manajemen kesehatan", "fasilitasi komunikasi", "libatkan keluarga", "monitor interaksi", "dokumentasi perubahan manajemen keluarga"]
        },
        {
            id: "ACT-138",
            code: "D.0118",
            label: "Pemeliharaan Kesehatan Tidak Efektif",
            domain: "Penyuluhan",
            etiology: "Terhubung dengan kurang pengetahuan, kurang dukungan, atau gangguan mental",
            characteristics: {
                subjective: ["tidak tahu cara perawatan", "tidak mau perawatan", "salah perawatan"],
                objective: ["tidak patuh", "salah dosis", "tidak ikut kontrol", "komplikasi berulang"]
            },
            relatedFactors: ["kurang pengetahuan", "kurang dukungan", "gangguan mental", "efek samping", "biaya tinggi", "sulit akses"],
            keywords: ["manajemen kesehatan tidak efektif", "tidak tahu perawatan", "tidak mau perawatan", "salah perawatan", "tidak patuh", "tidak ikut kontrol"],
            interventions: ["assess kemampuan manajemen", "berikan informasi kesehatan", "ajarkan cara perawatan", "berikan dukungan", "monitor kepatuhan", "rujuk ke layanan jika perlu", "dokumentasi perubahan manajemen kesehatan"],
            relatedFactors: ["gangguan mental", "trauma", "kurang keterampilan sosial", "stigma", "perubahan penampilan", "kecemasan", "depresi"],
            keywords: ["gangguan interaksi sosial", "tidak ada teman", "tidak mau bertemu", "tidak ada dukungan", "menghindari kontak", "isolasi", "tidak bicara"],
            interventions: ["assess kemampuan sosial", "berikan dukungan emosional", "ajarkan keterampilan sosial", "fasilitasi interaksi", "libatkan keluarga", "rujuk ke kelompok support", "dokumentasi perubahan interaksi"]
        },
        {
            id: "ACT-140",
            code: "D.0122",
            label: "Kesiapan Peningkatan Menjadi Orang Tua",
            domain: "Relasional",
            etiology: "Terhubung dengan keinginan menjadi orang tua yang baik",
            characteristics: {
                subjective: ["ingin jadi orang tua baik", "ingin pelajari cara merawat bayi"],
                objective: ["mengikuti kelas parenting", "memantau pertumbuhan bayi", "berikan perawatan bayi"]
            },
            relatedFactors: ["keinginan menjadi orang tua baik", "pengetahuan tentang parenting", "dukungan keluarga", "kehamilan diinginkan", "usia matang"],
            keywords: ["kesiapan menjadi orang tua", "ingin jadi orang tua baik", "ingin pelajari merawat bayi", "parenting", "merawat bayi", "kehamilan diinginkan"],
            interventions: ["assess kesiapan parenting", "berikan informasi parenting", "ajarkan cara merawat bayi", "monitor pertumbuhan bayi", "libatkan keluarga", "dokumentasi peningkatan kemampuan orang tua"]
        },
        {
            id: "ACT-141",
            code: "D.0123",
            label: "Kesiapan Peningkatan Proses Keluarga",
            domain: "Relasional",
            etiology: "Terhubung dengan keinginan meningkatkan fungsi keluarga",
            characteristics: {
                subjective: ["ingin keluarga lebih baik", "ingin komunikasi lebih baik"],
                objective: ["meningkatkan komunikasi", "meningkatkan kerja sama", "meningkatkan dukungan"]
            },
            relatedFactors: ["keinginan meningkatkan keluarga", "pengetahuan tentang dinamika keluarga", "dukungan eksternal", "komunikasi baik"],
            keywords: ["kesiapan proses keluarga", "ingin keluarga lebih baik", "ingin komunikasi lebih baik", "proses keluarga", "dinamika keluarga"],
            interventions: ["assess dinamika keluarga", "berikan informasi keluarga", "ajarkan komunikasi efektif", "fasilitasi resolusi konflik", "libatkan keluarga", "monitor interaksi", "dokumentasi peningkatan proses keluarga"]
        },
        {
            id: "ACT-142",
            code: "D.0125",
            label: "Ketegangan Peran Pemberi Asuhan",
            domain: "Relasional",
            etiology: "Terhubung dengan konflik peran, beban berlebihan, atau kurang dukungan",
            characteristics: {
                subjective: ["tidak bisa memenuhi peran", "stres", "tidak ada waktu sendiri"],
                objective: ["tidak ada waktu istirahat", "gangguan tidur", "tidak ada dukungan", "konflik keluarga"]
            },
            relatedFactors: ["konflik peran", "beban berlebihan", "kurang dukungan", "stres", "tidak ada waktu", "gangguan ekonomi"],
            keywords: ["ketegangan peran pemberi asuhan", "tidak bisa memenuhi peran", "stres", "tidak ada waktu sendiri", "tidak ada dukungan", "beban berat"],
            interventions: ["assess beban perawat", "berikan dukungan emosional", "ajarkan manajemen stres", "fasilitasi istirahat", "libatkan keluarga", "rujuk ke layanan sosial jika perlu", "dokumentasi perubahan ketegangan peran"]
        },
        {
            id: "ACT-143",
            code: "D.0126",
            label: "Pencapaian Peran Menjadi Orang Tua",
            domain: "Relasional",
            etiology: "Terhubung dengan keinginan menjadi orang tua yang baik dan proses adaptasi",
            characteristics: {
                subjective: ["ingin menjadi orang tua baik", "ingin memberikan yang terbaik"],
                objective: ["mengikuti kelas parenting", "memantau perkembangan anak", "berikan perawatan anak"]
            },
            relatedFactors: ["keinginan menjadi orang tua baik", "pengetahuan tentang parenting", "dukungan keluarga", "kehamilan diinginkan", "usia matang", "sumber daya cukup"],
            keywords: ["pencapaian peran orang tua", "ingin jadi orang tua baik", "ingin memberikan yang terbaik", "parenting", "perawatan anak", "kehamilan diinginkan"],
            interventions: ["assess kesiapan parenting", "berikan informasi parenting", "ajarkan cara merawat anak", "monitor perkembangan anak", "libatkan keluarga", "dokumentasi peningkatan peran orang tua"]
        },
        {
            id: "ACT-144",
            code: "D.0148",
            label: "Termoregulasi Tidak Efektif",
            domain: "Termoregulasi",
            etiology: "Terhubung dengan gangguan hipotalamus, eksposur suhu ekstrem, atau penyakit",
            characteristics: {
                subjective: ["suhu tidak normal", "panas", "dingin", "menggigil"],
                objective: ["suhu > 38 atau < 35", "kulit merah", "kulit pucat", "tremor", "bradikardia", "takikardia", "dehidrasi"]
            },
            relatedFactors: ["gangguan hipotalamus", "eksposur panas", "eksposur dingin", "infeksi", "dehidrasi", "penyakit", "obat", "usia tua"],
            keywords: ["termoregulasi tidak efektif", "suhu abnormal", "panas", "dingin", "menggigil", "kulit merah", "kulit pucat", "tremor", "demam", "hipotermia"],
            interventions: ["monitor suhu setiap 4 jam", "berikan antipiretik sesuai dokter", "berikan kompres hangat/dingin", "jaga lingkungan sesuai suhu", "berikan pakaian sesuai suhu", "monitor tanda dehidrasi", "dokumentasi perubahan suhu"]
        },
        {
            id: "ACT-147",
            code: "D.0037",
            label: "Defisit Nutrisi",
            domain: "Nutrisi/Cairan",
            etiology: "Terhubung dengan kurang asupan, malabsorpsi, atau peningkatan kebutuhan",
            characteristics: {
                subjective: ["tidak nafsu makan", "kelelahan", "lemah", "penguraian", "berat badan turun"],
                objective: ["berat badan turun", "BMI kurang", "defisit gizi", "kulit kaku", "turgor kulit menurun"]
            },
            relatedFactors: ["kurang asupan", "malabsorpsi", "peningkatan kebutuhan", "penyakit menahun", "kemoerapi", "depresi"],
            keywords: ["defisit nutrisi", "tidak nafsu makan", "kelelahan", "lemah", "penguraian", "berat badan turun", "BMI kurang", "defisit gizi", "kulit kaku", "turgor kulit menurun", "malnutrisi"],
            interventions: ["monitor berat badan harian", "monitor intake gizi", "berikan makanan sesuai toleransi", "ajarkan pola makan seimbang", "monitor laboratorium gizi", "berikan suplemen sesuai dokter", "jaga kebersihan mulut", "dokumentasi respons terhadap intervensi"],
            relatedFactors: ["gangguan neuromuskuler", "obstruksi", "gangguan sensori", "stroke", "trauma spinal", "penyakit Parkinson"],
            keywords: ["inkontinensia urin berlanjut", "BAK banyak", "tidak bisa tahan BAK", "sering BAK", "tidak kontrol BAK", "volume urin banyak"],
            interventions: ["monitor pola BAK", "monitor volume dan warna urin", "berikan minum sesuai jadwal", "jaga kebersihan area genital", "ajarkan teknik kegel", "berikan pembalut sesuai kebutuhan", "dokumentasi pola eliminasi"],
            relatedFactors: ["kelebihan aktivitas", "gangguan tidur", "anemia", "kondisi medis", "malnutrisi", "depresi"],
            keywords: ["kelelahan", "tidak bertenaga", "tidak mau beraktivitas", "tidak bisa berkonsentrasi", "letih", "lesu", "mengantuk", "tidak bisa aktivitas", "nadi cepat", "pernapasan cepat"],
            interventions: ["assess tingkat kelelahan", "monitor aktivitas dan istirahat", "ajarkan manajemen energi", "berikan istirahat yang cukup", "monitor kondisi medis penyebab", "berikan nutrisi yang cukup", "ajarkan prioritas aktivitas", "dokumentasi perubahan kelelahan"]
        },
        {
            id: "ACT-153",
            code: "D.0091",
            label: "Keputusasaan",
            domain: "Integritas ego",
            etiology: "Terhubung dengan penyakit menahun, stres berlebihan, atau kehilangan",
            characteristics: {
                subjective: ["tidak ada harapan", "tidak ada masa depan", "tidak ada tujuan", "tidak ada sukacita", "tidak ada motivasi"],
                objective: ["tampak sedih", "tidak ada interaksi", "tidak ada aktivitas", "tidak ada komunikasi", "pasif"]
            },
            relatedFactors: ["penyakit menahun", "stres berlebihan", "kehilangan", "krisis", "trauma", "depresi"],
            keywords: ["tidak ada harapan", "tidak ada masa depan", "tidak ada tujuan", "tidak ada sukacita", "tidak ada motivasi", "tampak sedih", "tidak ada interaksi", "tidak ada aktivitas", "tidak ada komunikasi", "pasif"],
            interventions: ["assess tingkat harapan", "dengarkan keluhan pasien", "berikan dukungan emosional", "ajarkan manajemen stres", "libatkan keluarga", "monitor tanda depresi", "rujuk ke konseling", "dokumentasi respon terhadap intervensi"],
            relatedFactors: ["keinginan belajar", "dukungan keluarga", "informasi yang jelas", "motivasi tinggi"],
            keywords: ["kesiapan konsep diri", "ingin percaya diri", "ingin diterima", "ingin lebih baik", "partisipatif", "terbuka", "bertanya", "mau belajar"],
            interventions: ["assess motivasi pasien", "berikan informasi konsep diri", "ajarkan teknik coping", "libatkan keluarga", "monitor kemajuan", "berikan dukungan emosional", "ajarkan manajemen stres", "dokumentasi peningkatan konsep diri"],
            relatedFactors: ["keinginan belajar", "dukungan keluarga", "informasi yang jelas", "motivasi tinggi"],
            keywords: ["kesiapan koping komunitas", "ingin kerja sama", "ingin solusi", "ingin dukungan", "partisipatif", "terbuka", "bertanya", "mau belajar"],
            interventions: ["assess motivasi komunitas", "berikan informasi coping", "ajarkan teknik coping", "libatkan komunitas", "monitor kemajuan", "berikan dukungan emosional", "ajarkan manajemen stres", "dokumentasi peningkatan koping komunitas"]
        },
        {
            id: "ACT-157",
            code: "D.0100",
            label: "Gangguan Proses Keluarga",
            domain: "Interaksi Sosial",
            etiology: "Terhubung dengan konflik, komunikasi kurang, atau perubahan kehidupan",
            characteristics: {
                subjective: ["tidak ada komunikasi", "tidak ada dukungan", "konflik", "tidak ada kerja sama"],
                objective: ["tidak ada interaksi", "tidak ada rencana", "tidak ada komunikasi", "konflik keluarga"]
            },
            relatedFactors: ["konflik", "komunikasi kurang", "perubahan kehidupan", "stres", "krisis", "ketidaksesuaian", "kurang dukungan"],
            keywords: ["gangguan proses keluarga", "tidak ada komunikasi", "tidak ada dukungan", "konflik", "tidak ada kerja sama", "tidak ada interaksi", "tidak ada rencana", "konflik keluarga"],
            interventions: ["assess dinamika keluarga", "berikan informasi keluarga", "ajarkan komunikasi efektif", "fasilitasi resolusi konflik", "libatkan keluarga", "monitor interaksi", "dokumentasi perubahan proses keluarga"]
        },
        {
            id: "ACT-158",
            code: "D.0101",
            label: "Penampilan Peran Tidak Efektif",
            domain: "Interaksi Sosial",
            etiology: "Terhubung dengan perubahan kesehatan, stres, atau ketidaksesuaian peran",
            characteristics: {
                subjective: ["tidak bisa kerja", "tidak bisa peran keluarga", "tidak puas", "stres"],
                objective: ["perubahan perilaku", "tidak produktif", "konflik", "tidak ada komunikasi"]
            },
            relatedFactors: ["perubahan kesehatan", "stres", "ketidaksesuaian peran", "gangguan fisik", "gangguan psikologis"],
            keywords: ["penampilan peran tidak efektif", "tidak bisa kerja", "tidak bisa peran keluarga", "tidak puas", "stres", "perubahan perilaku", "tidak produktif", "konflik", "tidak ada komunikasi"],
            interventions: ["assess peran keluarga", "dengarkan keluhan pasien", "berikan dukungan emosional", "ajarkan manajemen stres", "libatkan keluarga", "rujuk ke layanan sosial", "monitor perubahan perilaku", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-159",
            code: "D\.105",
            label: "Defisit Perawatan Diri",
            domain: "Kebersihan Diri",
            etiology: "Terhubung dengan kelemahan otot, gangguan neuromuskuler, atau nyeri",
            characteristics: {
                subjective: ["tidak bisa mandi", "tidak bisa berpakaian", "tidak bisa makan", "tidak bisa buang air"],
                objective: ["tidak mandi", "tidak berpakaian", "tidak makan", "tidak buang air", "tidak bersih"]
            },
            relatedFactors: ["kelemahan otot", "gangguan neuromuskular", "nyeri", "post operasi", "stroke", "fraktur", "kurang motivasi", "kurang pengetahuan"],
            keywords: ["defisit perawatan diri", "tidak bisa mandi", "tidak bisa berpakaian", "tidak bisa makan", "tidak bisa buang air", "tidak mandi", "tidak berpakaian", "tidak bersih"],
            interventions: ["assess kemampuan perawatan diri", "bantu perawatan diri sesuai kebutuhan", "ajarkan teknik perawatan diri", "berikan alat bantu", "monitor kebersihan diri", "libatkan keluarga", "ajarkan manajemen perawatan diri", "dokumentasi kemajuan perawatan diri"],
            relatedFactors: ["gangguan neuromuskuler", "nyeri", "kecemasan", "trauma", "stroke", "gangguan metabolisme"],
            keywords: ["pola napas tidak efektif", "sesak napas", "kelelahan", "tidak bisa napas dalam", "pusing", "tachypnea", "takikardia", "cyanosis", "wheezing", "ronchi", "PaCO2 naik", "PaO2 turun", "sianosis"],
            interventions: ["monitor pola napas", "monitor bunyi napas", "berikan oksigen sesuai dokter", "ajarkan teknik pernapasan dalam", "monitor gas darah arteri", "jaga posisi tinggi 30 derajat", "berikan antibiotik sesuai dokter", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "ACT-147",
            code: "D.0132",
            label: "Perilaku Kekerasan",
            domain: "Keamanan",
            etiology: "Terhubung dengan gangguan mental, trauma, atau lingkungan tidak aman",
            characteristics: {
                subjective: ["marah", "tidak bisa mengendalikan", "tidak nyaman"],
                objective: ["tampak agresif", "mengancam", "merusak barang", "melukai orang lain"]
            },
            relatedFactors: ["gangguan mental", "trauma", "lingkungan tidak aman", "stres", "kepribadian antisosial", "penyalahgunaan zat"],
            keywords: ["perilaku kekerasan", "marah", "tidak bisa mengendalikan", "agresif", "mengancam", "merusak barang", "melukai orang lain"],
            interventions: ["monitor perilaku agresif", "jaga lingkungan yang aman", "berikan dukungan psikologis", "monitor emosi", "rujuk ke layanan kesehatan mental", "berikan obat sesuai dokter", "dokumentasi perilaku"]
        },
    ],

    risk: [
        {
            id: "RISK-001",
            code: "D.0142",
            label: "Risiko Infeksi",
            domain: "Perlindungan",
            riskFactors: ["gangguan kekebalan", "luka terbuka", "prosedur invasif", "diabetes melitus", "malnutrisi", "penggunaan steroid", "usia tua", "penurunan fungsi fagositosis", "kurang asupan gizi", "leucositosis", "peningkatan suhu"],
            keywords: ["infeksi", "luka terbuka", "prosedur invasif", "diabetes", "malnutrisi", "steroid", "usia tua", "fagositosis menurun", "asupan gizi kurang", "leucositosis", "suhu naik", "eritema", "pendarahan", "luka"],
            interventions: ["monitor tanda infeksi", "jaga kebersihan tangan", "berikan isolasi sesuai indikasi", "monitor suhu", "berikan antibiotik sesuai dokter", "monitor laboratorium", "jaga kebersihan luka", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "RISK-002",
            code: "D.0006",
            label: "Risiko Aspirasi",
            domain: "Respirasi",
            riskFactors: ["gangguan menelan", "gangguan kesadaran", "intubasi", "stroke", "penyakit neuromuscular", "sedasi", "trauma", "batuk saat makan", "tidak bisa menelan"],
            keywords: ["aspirasi", "batuk saat makan", "tidak bisa menelan", "cebok saat makan", "suara basah", "gag", "sianosis", "takikardia", "tachypnea", "tubuh terpasang", "kantong makan"],
            interventions: ["monitor saat makan", "berikan posisi tinggi 30 derajat", "ajarkan cara makan perlahan", "monitor bunyi pernapasan", "berikan makanan yang mudah menelan", "hindari makanan yang mudah tersedak", "monitor tanda aspirasi", "dokumentasi respon terhadap intervensi"]
        },

        {
            id: "RISK-147",
            code: "D.0134",
            label: "Risiko Alergi",
            domain: "Keamanan",
            riskFactors: ["riwayat alergi", "eksposur alergen", "genetika", "lingkungan", "obat", "makanan"],
            keywords: ["alergi", "gatal", "ruam", "sesak napas", "bengkak", "eksposur alergen", "riwayat alergi"],
            interventions: ["monitor tanda alergi", "identifikasi alergen", "hindari alergen", "berikan obat antihistamin sesuai dokter", "monitor tanda syok", "rujuk ke dokter jika perlu", "dokumentasi respons terhadap intervensi"]
        },
        {
            id: "ACT-147",
            code: "D\.137",
            label: "Perilaku Kekerasan",
            domain: "Keamanan",
            etiology: "Terhubung dengan gangguan mental, trauma, atau lingkungan tidak aman",
            characteristics: {
                subjective: ["marah", "tidak bisa mengendalikan", "tidak nyaman"],
                objective: ["tampak agresif", "mengancam", "merusak barang", "melukai orang lain"]
            },
            relatedFactors: ["gangguan mental", "trauma", "lingkungan tidak aman", "stres", "kepribadian antisosial", "penyalahgunaan zat"],
            keywords: ["perilaku kekerasan", "marah", "tidak bisa mengendalikan", "agresif", "mengancam", "merusak barang", "melukai orang lain"],
            interventions: ["monitor perilaku agresif", "jaga lingkungan yang aman", "berikan dukungan psikologis", "monitor emosi", "rujuk ke layanan kesehatan mental", "berikan obat sesuai dokter", "dokumentasi perilaku"]
        },
        {
            id: "RISK-005",
            code: "D.0135",
            label: "Risiko Bunuh Diri",
            domain: "Integritas ego",
            riskFactors: ["depresi berat", "putus asa", "kerentanan", "trauma", "kehilangan", "gangguan bipolar", "skizofrenia", "stigma", "kurang dukungan", "tidak ada harapan"],
            keywords: ["bunuh diri", "depresi", "putus asa", "tidak ada harapan", "keinginan mati", "riwayat percobaan bunuh diri", "isolasi", "perubahan suasana", "memberi milik"],
            interventions: ["monitor risiko bunuh diri", "jaga lingkungan yang aman", "berikan pengawasan terus", "dengarkan keluhan pasien", "berikan dukungan emosional", "rujuk ke psikiatri segera", "libatkan keluarga", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "RISK-006",
            code: "D.0145",
            label: "Risiko Melukai Diri",
            domain: "Integritas ego",
            riskFactors: ["gangguan kepribadian", "trauma", "kerentanan", "depresi", "gangguan bipolar", "skizofrenia", "stres kronis", "tidak berharga", "putus asa"],
            keywords: ["melukai diri", "tidak berharga", "putus asa", "kesal", "ingin melukai diri", "luka pada tubuh", "bekas luka", "perilaku agresi", "perubahan suasana", "isolasi", "benda tajam"],
            interventions: ["monitor risiko melukai diri", "jaga lingkungan yang aman", "berikan pengawasan terus", "dengarkan keluhan pasien", "berikan dukungan emosional", "rujuk ke psikiatri", "libatkan keluarga", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "RISK-007",
            code: "D.0136",
            label: "Risiko Cedera",
            domain: "Keamanan",
            riskFactors: ["gangguan kognitif", "gangguan sensori", "lingkungan tidak aman", "gangguan keseimbangan", "usia tua", "kurang pengawasan", "efek obat", "penurunan kesadaran", "tidak fokus"],
            keywords: ["cedera", "gangguan kognitif", "gangguan sensori", "lingkungan tidak aman", "gangguan keseimbangan", "usia tua", "efek obat", "tidak fokus", "pusing"],
            interventions: ["monitor risiko cedera", "jaga lingkungan yang aman", "berikan alat bantu", "monitor kesadaran", "libatkan keluarga", "ajarkan teknik aman", "monitor efek obat", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "RISK-008",
            code: "D.0143",
            label: "Risiko Jatuh",
            domain: "Keamanan",
            riskFactors: ["gangguan keseimbangan", "gangguan penglihatan", "efek obat", "riwayat jatuh", "usia tua", "gangguan kognitif", "kelemahan otot", "hipotensi ortostatik", "takut jatuh"],
            keywords: ["jatuh", "gangguan keseimbangan", "gangguan penglihatan", "efek obat", "riwayat jatuh", "usia tua", "kognitif menurun", "kelemahan otot", "hipotensi ortostatik", "takut jatuh"],
            interventions: ["monitor risiko jatuh", "jaga lingkungan yang aman", "berikan alas anti selip", "monitor tekanan darah ortostatik", "berikan alat bantu gerak", "libatkan keluarga", "ajarkan teknik aman bergerak", "dokumentasi respon terhadap intervensi"]
        },

        {
            id: "RISK-011",
            code: "D.0039",
            label: "Risiko Shock",
            domain: "Kardiovaskular",
            riskFactors: ["perdarahan", "dehidrasi", "infeksi", "alergi", "trauma", "pembedahan", "gangguan kardiak", "hipotensi", "takikardia", "tachypnea"],
            keywords: ["shock", "perdarahan", "dehidrasi", "infeksi", "alergi", "trauma", "hipotensi", "takikardia", "tachypnea", "pucat", "dingin", "lemar", "pengisian kapiler lambat"],
            interventions: ["monitor jantung dan pernapasan", "monitor tekanan darah", "berikan cairan sesuai dokter", "monitor tanda shock", "jaga aktivitas sesuai toleransi", "berikan oksigen sesuai dokter", "rujuk ke ICU jika diperlukan", "dokumentasi respon terhadap intervensi"]
        },
{
            id: "RISK-013",
            code: "D.0152",
            label: "Risiko Keracunan",
            domain: "Keamanan",
            riskFactors: ["kurang pengetahuan", "lingkungan tidak aman", "anak-anak", "usia tua", "gangguan kognitif", "sulit menelan", "gangguan kesadaran"],
            keywords: ["keracunan", "kurang pengetahuan", "lingkungan tidak aman", "anak-anak", "usia tua", "gangguan kognitif", "sulit menelan", "gangguan kesadaran", "racun"],
            interventions: ["monitor lingkungan", "berikan edukasi tentang racun", "jaga obat di tempat aman", "monitor kesadaran", "berikan pengawasan", "rujuk ke layanan sosial", "ajarkan keselamatan lingkungan", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "RISK-014",
            code: "D.0139",
            label: "Risiko Gangguan Integritas Kulit/Jaringan",
            domain: "Kulit",
            riskFactors: ["tekanan berlebih", "gizi kurang", "kelemahan otot", "inkontinensia", "fraktur", "postur tetap", "edema", "gangguan vaskular"],
            keywords: ["integritas kulit", "tekanan berlebih", "gizi kurang", "kelemahan otot", "inkontinensia", "fraktur", "postur tetap", "edema", "gangguan vaskular", "ulkus", "nekrosis"],
            interventions: ["monitor risiko ulkus tekan", "lakukan perubahan posisi 2 hourly", "berikan perlindungan tekanan", "monitor intake gizi", "jaga kebersihan dan kenyamanan", "berikan perawatan kulit rutin", "ajarkan teknik perawatan kulit", "dokumentasi respon terhadap intervensi"],
        },
        {
            id: "RISK-018",
            code: "D.0067",
            label: "Risiko Disfungsi Neurovaskular Perifer",
            domain: "Kardiovaskular",
            riskFactors: ["fraktur", "gips", "kompresi vaskular", "obstruksi arteri", "shock", "diabetes", "hipertensi", "merokok", "post operasi"],
            keywords: ["neurovaskular perifer", "fraktur", "gips", "kompresi vaskular", "obstruksi arteri", "shock", "diabetes", "hipertensi", "merokok", "nyeri", "dingin", "lemas", "edema"],
            interventions: ["monitor nadi dan tekanan darah", "monitor suhu ekstremitas", "monitor warna dan kelembaban kulit", "berikan obat sesuai dokter", "jaga aktivitas sesuai toleransi", "hindari kompresi", "ajarkan manajemen risiko", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "RISK-021",
            code: "D.0109",
            label: "Risiko Defisit Perawatan Diri",
            domain: "Perawatan Diri",
            riskFactors: ["kelemahan otot", "gangguan neuromuskular", "gangguan kognitif", "nyeri", "post operasi", "stroke", "fraktur", "kurang motivasi", "kurang pengetahuan"],
            keywords: ["perawatan diri", "kelemahan otot", "gangguan neuromuskular", "gangguan kognitif", "nyeri", "post operasi", "stroke", "fraktur", "tidak bisa mandi", "tidak bisa berpakaian", "tidak bisa buang air"],
            interventions: ["assess kemampuan perawatan diri", "bantu perawatan diri sesuai kebutuhan", "ajarkan teknik perawatan diri", "berikan alat bantu", "monitor kebersihan diri", "libatkan keluarga", "ajarkan manajemen perawatan diri", "dokumentasi kemajuan perawatan diri"]
        },
        {
            id: "RISK-024",
            code: "D.0155",
            label: "Risiko Cedera Termal",
            domain: "Keamanan",
            riskFactors: ["gangguan kesadaran", "gangguan sensori", "lingkungan tidak aman", "anak-anak", "usia tua", "gangguan kognitif", "alkohol", "obat"],
            keywords: ["cedera termal", "gangguan kesadaran", "gangguan sensori", "lingkungan tidak aman", "anak-anak", "usia tua", "gangguan kognitif", "alkohol", "obat"],
            interventions: ["monitor suhu lingkungan", "monitor suhu pasien", "jaga lingkungan yang aman", "berikan pakaian sesuai suhu", "monitor tanda cedera termal", "berikan pengawasan", "ajarkan keselamatan thermal", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "RISK-025",
            code: "D.0150",
            label: "Risiko Asfiksia",
            domain: "Respirasi",
            riskFactors: ["obstruksi jalan napas", "gangguan kesadaran", "lingkungan tidak aman", "anak-anak", "usia tua", "trauma", "asfiksia", "makan"],
            keywords: ["asfiksia", "obstruksi jalan napas", "gangguan kesadaran", "lingkungan tidak aman", "anak-anak", "usia tua", "trauma", "sesak napas", "tidak bisa napas", "tidak bisa bicara"],
            interventions: ["monitor pernapasan", "jaga lingkungan yang aman", "berikan pengawasan terus", "monitor kesadaran", "hindari benda yang bisa menghalang", "berikan posisi tinggi", "monitor tanda asfiksia", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "RISK-029",
            code: "D.0146",
            label: "Risiko Kekerasan ke Orang Lain",
            domain: "Integritas ego",
            riskFactors: ["riwayat kekerasan", "gangguan mental", "kemarahan", "halusinasi", "paranoid", "kepribadian antisosial"],
            keywords: ["kekerasan orang lain", "riwayat kekerasan", "gangguan mental", "kemarahan", "halusinasi", "paranoid", "antisosial", "menakutkan", "mengancam"],
            interventions: ["monitor perilaku agresif", "jaga lingkungan yang aman", "libatkan keamanan", "berikan dukungan psikologis", "monitor emosi", "rujuk ke layanan kesehatan mental", "berikan obat sesuai dokter", "dokumentasi perilaku"],
        },
        {
            id: "RISK-032",
            code: "D.0151",
            label: "Risiko Infeksi Saluran Kemih",
            domain: "Eliminasi",
            riskFactors: ["inkontinensia", "kateter", "obat antibiotik", "wanita", "hamil", "diabetes", "gangguan neurogenik"],
            keywords: ["infeksi saluran kemih", "inkontinensia", "kateter", "antibiotik", "wanita", "hamil", "diabetes", "gangguan neurogenik", "nyeri BAK", "BAK keruh"],
            interventions: ["monitor tanda infeksi saluran kemih", "jaga kebersihan perineal", "monitor BAK", "berikan cairan yang cukup", "monitor laboratorium", "berikan antibiotik sesuai dokter", "jaga higiene toilet", "dokumentasi infeksi"]
        },
        {
            id: "RISK-033",
            code: "D.0153",
            label: "Risiko Perfusi Jaringan Otak Tidak Efektif",
            domain: "Perfusi",
            riskFactors: ["hipertensi", "aterosklerosis", "emboli", "stroke", "gangguan koagulasi", "vaskulitis"],
            keywords: ["perfusi otak", "hipertensi", "aterosklerosis", "emboli", "stroke", "gangguan koagulasi", "vaskulitis", "pusing", "penglihatan kabur", "pusing"],
            interventions: ["monitor tekanan darah", "monitor neurologis", "monitor tanda stroke", "berikan obat sesuai dokter", "monitor saturasi oksigen", "jaga lingkungan tenang", "monitor diet", "dokumentasi perfusi otak"]
        },
        {
            id: "RISK-035",
            code: "D.0012",
            label: "Risiko Pendarahan",
            domain: "Perfusi",
            riskFactors: ["gangguan koagulasi", "obat antikoagulan", "penyakit hati", "trombositopenia", "trauma", "post operasi"],
            keywords: ["pendarahan", "gangguan koagulasi", "antikoagulan", "penyakit hati", "trombositopenia", "trauma", "post operasi", "memar", "epistaksis", "gusi berdarah"],
            interventions: ["monitor tanda pendarahan", "monitor laboratorium koagulasi", "berikan obat sesuai dokter", "monitor tekanan darah", "jaga kebersihan luka", "monitor stool dan urine", "berikan diet sesuai toleransi", "dokumentasi pendarahan"]
        },
        {
            id: "RISK-036",
            code: "D.0140",
            label: "Risiko Hipotermia",
            domain: "Regulasi suhu",
            riskFactors: ["eksposur dingin", "gangguan metabolisme", "usia tua", "hipotireosis", "malnutrisi", "alkohol"],
            keywords: ["hipotermia", "eksposur dingin", "gangguan metabolisme", "usia tua", "hipotireosis", "malnutrisi", "alkohol", "tubuh dingin", "pucat", "gigil"],
            interventions: ["monitor suhu tubuh", "berikan hangat", "jaga lingkungan yang hangat", "berikan pakaian hangat", "monitor metabolisme", "berikan minum hangat", "libatkan keluarga", "dokumentasi suhu"]
        },
        {
            id: "RISK-037",
            code: "D.0154",
            label: "Risiko Hipertermia",
            domain: "Regulasi suhu",
            riskFactors: ["eksposur panas", "gangguan metabolisme", "obat", "infeksi", "dehidrasi", "usia tua"],
            keywords: ["hipertermia", "eksposur panas", "gangguan metabolisme", "obat", "infeksi", "dehidrasi", "usia tua", "tubuh panas", "kemerahan", "keringat"],
            interventions: ["monitor suhu tubuh", "berikan dingin", "jaga lingkungan yang sejuk", "berikan minum dingin", "monitor metabolisme", "monitor tanda infeksi", "berikan pakaian tipis", "dokumentasi suhu"]
        },
        {
            id: "RISK-038",
            code: "D.0010",
            label: "Risiko Gangguan Sirkulasi Spontan",
            domain: "Sirkulasi",
            riskFactors: ["abnormalitas kelistrikan jantung", "abnormalitas struktur jantung", "penurunan fungsi ventrikel", "gagal jantung", "infark miokard", "arytmia"],
            keywords: ["risiko gangguan sirkulasi", "sirkulasi spontan", "gagal jantung", "arytmia", "bradikardia", "takikardia", "tekanan darah menurun"],
            interventions: ["monitor nadi dan tekanan darah", "monitor EKG", "monitor kesadaran", "berikan oksigen sesuai dokter", "jaga lingkungan tenang", "libatkan tim medis", "dokumentasi respon terhadap intervensi"]
        },
        {
            id: "RISK-039",
            code: "D.0014",
            label: "Risiko Perfusi Gastrointestinal Tidak Efektif",
            domain: "Sirkulasi",
            riskFactors: ["obstruksi vaskular", "syok", "hipotensi", "gagal jantung", "emboli", "aterosklerosis"],
            keywords: ["risiko perfusi gastrointestinal", "perfusi GI", "sakit perut", "nause", "muntah", "metabolic acidosis", "tekanan darah rendah"],
            interventions: ["monitor tekanan darah", "monitor nadi", "monitor output urin", "monitor suhu", "berikan oksigen sesuai dokter", "jaga reposi", "monitor abdomen", "dokumentasi perfusi GI"]
        },
        {
            id: "RISK-040",
            code: "D.0015",
            label: "Risiko Perfusi Miokard Tidak Efektif",
            domain: "Sirkulasi",
            riskFactors: ["stenosis koroner", "infark miokard", "gagal jantung", "arytmia", "hipotensi", "syok"],
            keywords: ["risiko perfusi miokard", "perfusi jantung", "sakit dada", "palpitasi", "tekanan darah menurun", "EKG abnormal"],
            interventions: ["monitor EKG", "monitor enzim jantung", "monitor tekanan darah", "monitor nadi", "berikan oksigen sesuai dokter", "jaga lingkungan tenang", "monitor tanda nyeri dada", "dokumentasi perfusi miokard"]
        },
        {
            id: "RISK-041",
            code: "D.0016",
            label: "Risiko Perfusi Perifer Tidak Efektif",
            domain: "Sirkulasi",
            riskFactors: ["obstruksi vaskular", "aterosklerosis", "diabetes", "hipertensi", "merokok", "syok", "trauma"],
            keywords: ["risiko perfusi perifer", "perfusi ekstremitas", "kulit pucat", "edema", "dingin", "nadi lemah", "sianosis"],
            interventions: ["monitor nadi perifer", "monitor suhu ekstremitas", "monitor warna kulit", "monitor edema", "hindari kompresi", "ajarkan manajemen risiko", "dokumentasi perfusi perifer"]
        },
        {
            id: "RISK-042",
            code: "D.0017",
            label: "Risiko Perfusi Renal Tidak Efektif",
            domain: "Sirkulasi",
            riskFactors: ["hipotensi", "obstruksi saluran kemih", "gangguan vaskular", "gagal jantung", "sepsis", "obat nefrotoksik"],
            keywords: ["risiko perfusi renal", "perfusi ginjal", "volume urine turun", "oliguria", "anuria", "BUN naik", "kreatinin naik"],
            interventions: ["monitor intake dan output", "monitor berat badan", "monitor BUN dan kreatinin", "monitor tekanan darah", "berikan cairan sesuai dokter", "monitor tanda edema", "dokumentasi perfusi renal"],
        },
        {
            id: "RISK-044",
            code: "D.0031",
            label: "Risiko Berat Badan Lebih",
            domain: "Nutrisi",
            riskFactors: ["kurang aktivitas fisik", "kelebihan konsumsi gula", "gangguan kebiasaan makan", "sering ngemil", "faktor keturunan"],
            keywords: ["risiko berat badan lebih", "IMT tinggi", "kurang olahraga", "sering makan", "gemuk", "keturunan"],
            interventions: ["monitor IMT", "monitor pola makan", "berikan konseling nutrisi", "ajarkan manajemen berat badan", "promosikan latihan fisik", "monitor berat badan", "dokumentasi risiko berat badan"]
        },
        {
            id: "RISK-045",
            code: "D.0032",
            label: "Risiko Defisit Nutrisi",
            domain: "Nutrisi",
            riskFactors: ["tidak nafsu makan", "sakit", "mual", "malnutrisi", "kurang akses makanan", "kemiskinan", "gangguan menelan"],
            keywords: ["risiko defisit nutrisi", "tidak nafsu makan", "sakit", "mual", "malnutrisi", "kurang akses", "kemiskinan", "berat badan turun"],
            interventions: ["monitor berat badan", "monitor pola makan", "berikan makanan sesuai toleransi", "ajarkan pola makan seimbang", "monitor laboratorium gizi", "berikan suplemen sesuai dokter", "dokumentasi risiko nutrisi"]
        },
        {
            id: "RISK-046",
            code: "D.0033",
            label: "Risiko Disfungsi Motilitas Gastrointestinal",
            domain: "Nutrisi",
            riskFactors: ["kurang serat", "kurang cairan", "kurang aktivitas", "efek samping obat", "gangguan metabolisme", "penyakit neurologis"],
            keywords: ["risiko disfungsi motilitas GI", "sulit BAB", "perut penuh", "sembelit", "diare", "gangguan usus"],
            interventions: ["monitor pola BAB", "berikan makanan tinggi serat", "ajarkan pola makan", "monitor intake cairan", "berikan obat sesuai dokter", "monitor bunyi usus", "dokumentasi risiko motilitas GI"]
        },
        {
            id: "RISK-047",
            code: "D.0034",
            label: "Risiko Hipovolemia",
            domain: "Nutrisi",
            riskFactors: ["kehilangan cairan", "kurang asupan", "muntah", "diare", "perdarahan", "demam", "dehidrasi"],
            keywords: ["risiko hipovolemia", "volume cairan kurang", "haus", "hipotensi", "turgor kulit turun", "dehidrasi", "lemas"],
            interventions: ["monitor intake dan output", "monitor tanda dehidrasi", "berikan cairan sesuai dokter", "monitor tekanan darah", "monitor nadi", "monitor elektrolit", "dokumentasi risiko hipovolemia"]
        },
        {
            id: "RISK-048",
            code: "D.0035",
            label: "Risiko Ikterik Neonatus",
            domain: "Nutrisi",
            riskFactors: ["peningkatan bilirubin", "hemolisis", "infeksi", "ketidakcocokan golongan darah", "kelahiran prematur", "gangguan hati"],
            keywords: ["risiko ikterik neonatus", "kulit kuning", "sklera kuning", "bilirubin tinggi", "bayi baru lahir", "jaundice"],
            interventions: ["monitor bilirubin", "monitor suhu", "monitor warna kulit", "berikan fototerapi sesuai dokter", "monitor intake cairan", "dokumentasi risiko ikterik"]
        },
        {
            id: "RISK-049",
            code: "D.0036",
            label: "Risiko Ketidakseimbangan Cairan",
            domain: "Nutrisi",
            riskFactors: ["kehilangan cairan", "kurang asupan", "muntah", "diare", "perdarahan", "demam", "dehidrasi", "efek obat"],
            keywords: ["risiko ketidakseimbangan cairan", "volume cairan", "haus", "hipotensi", "turgor kulit", "dehidrasi", "lemas"],
            interventions: ["monitor intake dan output", "monitor tanda dehidrasi", "berikan cairan sesuai dokter", "monitor tekanan darah", "monitor nadi", "monitor elektrolit", "dokumentasi risiko ketidakseimbangan cairan"],
        },
        {
            id: "RISK-052",
            code: "D.0052",
            label: "Risiko Inkontinensia Urin Urgensi",
            domain: "Eliminasi",
            riskFactors: ["gangguan neurologis", "infeksi saluran kemih", "obat diuretik", "prosedur bedah", "usia tua", "stroke"],
            keywords: ["risiko inkontinensia urgensi", "sering BAK", "darurat BAK", "inkontinensia", "nyeri BAK", "infeksi saluran kemih"],
            interventions: ["monitor pola BAK", "monitor warna dan volume urin", "berikan perawatan perineal", "monitor tanda infeksi", "berikan minum sesuai jadwal", "ajarkan teknik kegel", "dokumentasi risiko inkontinensia"]
        },
        {
            id: "RISK-053",
            code: "D.0053",
            label: "Risiko Konstipasi",
            domain: "Eliminasi",
            riskFactors: ["kurang serat", "kurang cairan", "kurang aktivitas", "efek samping obat", "penyakit kronis", "gangguan metabolisme"],
            keywords: ["risiko konstipasi", "sulit BAB", "perut penuh", "sembelit", "BAB kurang", "feses keras"],
            interventions: ["monitor pola BAB", "berikan makanan tinggi serat", "ajarkan pola makan", "monitor intake cairan", "berikan obat sesuai dokter", "monitor bunyi usus", "dokumentasi risiko konstipasi"],
        },
        {
            id: "RISK-056",
            code: "D.0068",
            label: "Risiko Disfungsi Neurovaskuler Perifer",
            domain: "Sirkulasi",
            riskFactors: ["diabetes", "hipertensi", "aterosklerosis", "merokok", "trauma", "gangguan metabolisme"],
            keywords: ["risiko disfungsi neurovaskuler", "neurovaskuler perifer", "kulit pucat", "dingin", "edema", "nyeri", "tidak ada nadi"],
            interventions: ["monitor nadi perifer", "monitor suhu ekstremitas", "monitor warna kulit", "monitor edema", "hindari kompresi", "monitor tekanan darah", "dokumentasi risiko neurovaskuler"],
        },
        {
            id: "RISK-058",
            code: "D.0072",
            label: "Risiko Disfungsi Seksual",
            domain: "Reproduksi",
            riskFactors: ["gangguan hormonal", "efek obat", "gangguan psikologis", "kecemasan", "depresi", "trauma", "penyakit kronis"],
            keywords: ["risiko disfungsi seksual", "tidak nafsu seks", "tidak bisa performa", "nyeri seks", "gangguan ereksi", "gangguan lubrikasi"],
            interventions: ["assess risiko disfungsi", "berikan dukungan emosional", "ajarkan komunikasi seksual", "monitor efek obat", "rujuk ke seksolog jika perlu", "dokumentasi risiko disfungsi seksual"]
        },
        {
            id: "RISK-059",
            code: "D.0073",
            label: "Risiko Kehamilan Tidak Dikehendaki",
            domain: "Reproduksi",
            riskFactors: ["tidak pakai kontrasepsi", "salah cara kontrasepsi", "kurang pengetahuan", "akses terbatas", "kegagalan kontrasepsi"],
            keywords: ["risiko kehamilan tidak dikehendaki", "tidak pakai kontrasepsi", "hamil tidak diinginkan", "kontrasepsi", "kehamilan tidak diinginkan"],
            interventions: ["monitor status kehamilan", "berikan informasi kontrasepsi", "ajarkan cara kontrasepsi", "rujuk ke layanan KB", "monitor pengetahuan", "dokumentasi risiko kehamilan tidak dikehendaki"],
        },
        {
            id: "RISK-061",
            code: "D.0102",
            label: "Risiko Harga Diri Rendah Kronis",
            domain: "Integritas ego",
            riskFactors: ["pengalaman negatif berulang", "kritik berlebihan", "trauma", "penyakit kronis", "gangguan mental", "perubahan penampilan"],
            keywords: ["risiko harga diri rendah kronis", "tidak percaya diri", "tidak mampu", "rendah diri", "tidak mau mencoba", "menghindari tantangan"],
            interventions: ["monitor harga diri", "berikan dukungan emosional", "berikan umpan balik positif", "ajarkan teknik coping", "libatkan keluarga", "rujuk ke psikolog jika perlu", "dokumentasi risiko harga diri"],
        },
        {
            id: "RISK-063",
            code: "D.0103",
            label: "Risiko Ketidakberdayaan",
            domain: "Integritas ego",
            riskFactors: ["program perawatan kompleks", "lingkungan tidak mendukung", "interaksi interpersonal tidak memuaskan", "stres kronis", "kurang dukungan"],
            keywords: ["risiko ketidakberdayaan", "tidak mampu", "tidak ada kontrol", "bergantung pada orang lain", "frustrasi", "tidak ada harapan"],
            interventions: ["monitor tingkat keberdayaan", "berikan dukungan emosional", "ajarkan teknik coping", "libatkan dalam perawatan", "berikan pilihan", "monitor interaksi", "dokumentasi risiko ketidakberdayaan"]
        },
        {
            id: "RISK-064",
            code: "D.0107",
            label: "Risiko Gangguan Perkembangan",
            domain: "Pertumbuhan",
            riskFactors: ["gangguan genetik", "malnutrisi", "kurang stimulasi", "penyakit kronis", "lingkungan tidak stimulasi", "abuse"],
            keywords: ["risiko gangguan perkembangan", "tidak berkembang sesuai usia", "tidak bicara", "tidak jalan", "berat badan kurang", "tinggi kurang"],
            interventions: ["monitor perkembangan", "monitor berat dan tinggi badan", "berikan stimulasi sesuai usia", "berikan nutrisi", "rujuk ke dokter jika perlu", "libatkan keluarga", "dokumentasi risiko perkembangan"],
        },
        {
            id: "RISK-066",
            code: "D.0127",
            label: "Risiko Gangguan Perlekatan",
            domain: "Relasional",
            riskFactors: ["orang tua tidak hadir", "perawatan tidak konsisten", "lingkungan tidak stabil", "trauma", "gangguan mental", "kemiskinan"],
            keywords: ["risiko gangguan perlekatan", "tidak ada ikatan", "tidak ada keamanan", "tidak ada dukungan", "isolasi", "trauma"],
            interventions: ["monitor ikatan anak dengan orang tua", "fasilitasi bonding", "berikan dukungan orang tua", "ajarkan parenting", "monitor lingkungan", "libatkan keluarga", "dokumentasi risiko gangguan perlekatan"],
        },
        {
            id: "RISK-068",
            code: "D.0137",
            label: "Risiko Cedera Pada Ibu",
            domain: "Keamanan",
            riskFactors: ["kehamilan berisiko", "persalinan sulit", "trauma", "penyakit kronis", "obesitas", "usia tua"],
            keywords: ["risiko cedera ibu", "cedera persalinan", "luka persalinan", "trauma", "kehamilan berisiko", "persalinan sulit"],
            interventions: ["monitor kondisi ibu", "monitor persalinan", "berikan dukungan selama persalinan", "monitor tanda cedera", "jaga kebersihan", "monitor pendarahan", "dokumentasi risiko cedera ibu"]
        },
        {
            id: "RISK-069",
            code: "D.0138",
            label: "Risiko Cedera Pada Janin",
            domain: "Keamanan",
            riskFactors: ["kehamilan berisiko", "trauma", "infeksi", "gangguan plasenta", "persalinan sulit", "usia gestasi kurang"],
            keywords: ["risiko cedera janin", "cedera bayi", "trauma janin", "infeksi", "gangguan plasenta", "persalinan sulit", "prematur"],
            interventions: ["monitor kondisi janin", "monitor detak jantung janin", "monitor gerakan janin", "monitor usia gestasi", "berikan dukungan selama persalinan", "monitor tanda stres janin", "dokumentasi risiko cedera janin"],
        },
        {
            id: "RISK-073",
            code: "D.0011",
            label: "Risiko Penurunan Curah Jantung",
            domain: "Sirkulasi",
            riskFactors: ["abnormalitas kelistrikan jantung", "abnormalitas struktur jantung", "penurunan fungsi ventrikel", "infark miokard", "arytmia", "gagal jantung"],
            keywords: ["risiko penurunan curah jantung", "curah jantung", "palpitasi", "dada berdebar", "edema", "sesak napas", "lelah", "ortopnea"],
            interventions: ["monitor tekanan darah", "monitor nadi", "monitor EKG", "monitor intake dan output", "berikan oksigen sesuai dokter", "jaga lingkungan tenang", "monitor tanda edema", "dokumentasi risiko curah jantung"],
        },
        {
            id: "RISK-076",
            code: "D.0013",
            label: "Risiko Perdarahan",
            domain: "Sirkulasi",
            riskFactors: ["aneurisma", "gangguan gastrointestinal", "gangguan fungsi hati", "komplikasi kehamilan", "komplikasi pasca partum", "gangguan koagulasi", "efek agen farmakologis", "tindakan pembedahan", "trauma", "proses keganasan"],
            keywords: ["risiko perdarahan", "kehilangan darah", "perdarahan internal", "perdarahan eksternal", "hematokrit menurun", "hemoglobin menurun", "membran mukosa kering", "kelembaban kulit menurun"],
            interventions: ["monitor tanda dan gejala perdarahan", "monitor nilai hematokrit/hemoglobin", "monitor tanda-tanda vital ortostatik", "monitor koagulasi", "pertahankan bed rest", "batasi tindakan invasive", "gunakan kasur pencegah decubitus", "hindari pengukuran suhu rektal"]
        }
    ],

    education: [
{
            id: "EDU-002",
            code: "D.0201",
            label: "Kurang Perawatan Mandiri",
            domain: "Perawatan Mandiri",
            educationFactors: ["kurang pengetahuan", "kurang motivasi", "kompleksitas perawatan", "biaya tinggi", "dukungan kurang", "gangguan kognitif", "tidak minat", "tidak mampu", "tidak mau", "tidak bisa perawatan mandiri"],
            keywords: ["tidak minat", "tidak mampu", "tidak mau", "tidak bisa perawatan mandiri", "tidak sesuai", "tidak minat perawatan mandiri", "tidak sesuai prosedur", "efek samping obat", "tidak mengikuti jadwal", "komplikasi berulang", "tidak mandiri"],
            interventions: ["assess kemampuan perawatan mandiri", "ajarkan teknik perawatan mandiri", "berikan motivasi", "monitor kemajuan", "libatkan keluarga", "ajarkan manajemen efek samping", "berikan jadwal yang jelas", "dokumentasi peningkatan perawatan mandiri"]
        },
        {
            id: "EDU-003",
            code: "D.0202",
            label: "Kurang Nutrisi",
            domain: "Nutrisi",
            educationFactors: ["kurang pengetahuan tentang nutrisi", "kurang akses makanan", "kemiskinan", "defisit pengetahuan", "tidak nafsu makan", "mual", "muntah", "penguraian", "berat badan turun"],
            keywords: ["tidak nafsu makan", "mual", "muntah", "penguraian", "berat badan turun", "defisit gizi", "malnutrisi", "kurang pengetahuan nutrisi", "kurang akses makanan"],
            interventions: ["assess pengetahuan nutrisi", "berikan informasi gizi", "ajarkan pola makan seimbang", "monitor berat badan", "libatkan ahli gizi", "berikan suplemen sesuai dokter", "monitor laboratorium gizi", "dokumentasi peningkatan nutrisi"]
        },
        {
            id: "EDU-004",
            code: "D.0203",
            label: "Kurang Pengetahuan tentang Pengelolaan Obat",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan tentang obat", "tidak mengikuti jadwal", "salah dosis", "lupa minum obat", "efek samping tidak diketahui"],
            keywords: ["kurang pengetahuan obat", "tidak mengikuti jadwal", "salah dosis", "lupa minum obat", "efek samping", "tidak tahu obat", "salah cara minum"],
            interventions: ["assess pengetahuan obat", "berikan informasi obat", "ajarkan cara minum obat", "monitor kepatuhan jadwal", "berikan pengingat obat", "monitor efek samping", "libatkan keluarga", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-005",
            code: "D.0204",
            label: "Kurang Pengetahuan tentang Penyakit",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan tentang penyakit", "tidak tahu prognosis", "tidak tahu komplikasi", "tidak tahu perawatan", "salah pemahaman"],
            keywords: ["kurang pengetahuan penyakit", "tidak tahu prognosis", "tidak tahu komplikasi", "tidak tahu perawatan", "salah pemahaman", "tidak tahu penyakit", "kurang informasi penyakit"],
            interventions: ["assess pengetahuan penyakit", "berikan informasi penyakit", "ajarkan prognosis", "ajarkan komplikasi", "monitor pemahaman", "berikan materi edukasi", "libatkan keluarga", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-006",
            code: "D.0205",
            label: "Kurang Pengetahuan tentang Gizi",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan gizi", "tidak tahu kebutuhan gizi", "salah pilihan makanan", "kurang akses makanan", "tidak tahu giziseimbang"],
            keywords: ["kurang pengetahuan gizi", "tidak tahu kebutuhan gizi", "salah pilihan makanan", "kurang akses makanan", "tidak tahu giziseimbang", "defisit pengetahuan gizi"],
            interventions: ["assess pengetahuan gizi", "berikan informasi gizi", "ajarkan giziseimbang", "monitor pola makan", "libatkan ahli gizi", "berikan contoh menu sehat", "monitor berat badan", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-007",
            code: "D.0206",
            label: "Kurang Pengetahuan tentang Kebersihan Diri",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan kebersihan", "tidak mandi", "tidak gosok gigi", "tidak cuci tangan", "kurang perawatan diri"],
            keywords: ["kurang pengetahuan kebersihan", "tidak mandi", "tidak gosok gigi", "tidak cuci tangan", "kurang perawatan diri", "tidak tahu kebersihan"],
            interventions: ["assess pengetahuan kebersihan", "berikan informasi kebersihan", "ajarkan cuci tangan", "ajarkan perawatan gigi", "monitor kebersihan diri", "libatkan keluarga", "berikan contoh perawatan diri", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-008",
            code: "D.0207",
            label: "Kurang Pengetahuan tentang Kesehatan Reproduksi",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan reproduksi", "tidak tahu kontrasepsi", "tidak tahu penyakit seksual", "tidak tahu kehamilan", "salah pemahaman reproduksi"],
            keywords: ["kurang pengetahuan reproduksi", "tidak tahu kontrasepsi", "tidak tahu penyakit seksual", "tidak tahu kehamilan", "salah pemahaman reproduksi", "kurang informasi reproduksi"],
            interventions: ["assess pengetahuan reproduksi", "berikan informasi reproduksi", "ajarkan kontrasepsi", "ajarkan penyakit seksual", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan kesehatan reproduksi", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-009",
            code: "D.0208",
            label: "Kurang Pengetahuan tentang Perawatan Luka",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan luka", "tidak tahu cara merawat luka", "tidak tahu kebersihan luka", "tidak tahu kompres luka", "tidak tahu ganti perban"],
            keywords: ["perawatan luka", "tidak tahu cara merawat luka", "tidak tahu kebersihan luka", "tidak tahu kompres luka", "tidak tahu ganti perban", "luka terbuka", "ulkus", "nekrosis"],
            interventions: ["assess pengetahuan perawatan luka", "berikan informasi perawatan luka", "ajarkan cara merawat luka", "ajarkan kebersihan luka", "monitor pemahaman", "libatkan keluarga", "berikan contoh perawatan luka", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-010",
            code: "D.0209",
            label: "Kurang Pengetahuan tentang Manajemen Nyeri",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan nyeri", "tidak tahu cara mengatasi nyeri", "tidak tahu obat nyeri", "tidak tahu teknik relaksasi", "tidak tahu kompres"],
            keywords: ["manajemen nyeri", "tidak tahu cara mengatasi nyeri", "tidak tahu obat nyeri", "tidak tahu teknik relaksasi", "tidak tahu kompres", "nyeri", "sakit", "tidak nyaman"],
            interventions: ["assess pengetahuan manajemen nyeri", "berikan informasi manajemen nyeri", "ajarkan teknik relaksasi", "ajarkan cara kompres", "monitor pemahaman", "libatkan keluarga", "berikan contoh manajemen nyeri", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-011",
            code: "D.0210",
            label: "Kurang Pengetahuan tentang Kesehatan Mental",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan mental", "tidak tahu kesehatan mental", "tidak tahu stres", "tidak tahu depresi", "tidak tahu kecemasan", "tidak tahu cara mengatasi"],
            keywords: ["kesehatan mental", "tidak tahu kesehatan mental", "tidak tahu stres", "tidak tahu depresi", "tidak tahu kecemasan", "tidak tahu cara mengatasi", "cemas", "takut", "depresi", "stres"],
            interventions: ["assess pengetahuan kesehatan mental", "berikan informasi kesehatan mental", "ajarkan manajemen stres", "ajarkan cara mengatasi depresi", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan kesehatan mental", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-012",
            code: "D.0211",
            label: "Kurang Pengetahuan tentang Kesehatan Jantung",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan jantung", "tidak tahu penyakit jantung", "tidak tahu obat jantung", "tidak tahu diet jantung", "tidak tahu aktivitas jantung"],
            keywords: ["kesehatan jantung", "tidak tahu penyakit jantung", "tidak tahu obat jantung", "tidak tahu diet jantung", "tidak tahu aktivitas jantung", "jantung", "nyeri dada", "palpitasi", "hipotensi", "edema"],
            interventions: ["assess pengetahuan kesehatan jantung", "berikan informasi kesehatan jantung", "ajarkan diet jantung", "ajarkan aktivitas jantung", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan jantung", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-013",
            code: "D.0212",
            label: "Kurang Pengetahuan tentang Kesehatan Pernapasan",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan pernapasan", "tidak tahu penyakit pernapasan", "tidak tahu inhaler", "tidak tahu teknik pernapasan", "tidak tahu kebersihan pernapasan"],
            keywords: ["kesehatan pernapasan", "tidak tahu penyakit pernapasan", "tidak tahu inhaler", "tidak tahu teknik pernapasan", "tidak tahu kebersihan pernapasan", "pernapasan", "sesak napas", "batuk", "wheezing", "sianosis"],
            interventions: ["assess pengetahuan kesehatan pernapasan", "berikan informasi kesehatan pernapasan", "ajarkan teknik pernapasan", "ajarkan cara inhaler", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan pernapasan", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-014",
            code: "D.0213",
            label: "Kurang Pengetahuan tentang Diabetes",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan diabetes", "tidak tahu penyakit diabetes", "tidak tahu insulin", "tidak tahu diet diabetes", "tidak tahu monitoring gula darah", "tidak tahu komplikasi diabetes"],
            keywords: ["diabetes", "tidak tahu penyakit diabetes", "tidak tahu insulin", "tidak tahu diet diabetes", "tidak tahu monitoring gula darah", "tidak tahu komplikasi diabetes", "gula darah tinggi", "gula darah rendah", "insulin", "obat diabetes"],
            interventions: ["assess pengetahuan diabetes", "berikan informasi diabetes", "ajarkan cara insulin", "ajarkan diet diabetes", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan diabetes", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-015",
            code: "D.0214",
            label: "Kurang Pengetahuan tentang Kesehatan Kulit",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan kulit", "tidak tahu perawatan kulit", "tidak tahu kebersihan kulit", "tidak tahu perlindungan kulit", "tidak tahu penyakit kulit"],
            keywords: ["kesehatan kulit", "tidak tahu perawatan kulit", "tidak tahu kebersihan kulit", "tidak tahu perlindungan kulit", "tidak tahu penyakit kulit", "kulit", "eritema", "ulkus", "nekrosis", "gatal"],
            interventions: ["assess pengetahuan kulit", "berikan informasi kulit", "ajarkan perawatan kulit", "ajarkan kebersihan kulit", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan kulit", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-016",
            code: "D.0215",
            label: "Kurang Pengetahuan tentang Eliminasi",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan eliminasi", "tidak tahu BAB normal", "tidak tahu BAK normal", "tidak tahu perawatan eliminasi", "tidak tahu gangguan eliminasi"],
            keywords: ["eliminasi", "tidak tahu BAB normal", "tidak tahu BAK normal", "tidak tahu perawatan eliminasi", "tidak tahu gangguan eliminasi", "sulit BAB", "sulit BAK", "diare", "sembelit", "inkontinensia"],
            interventions: ["assess pengetahuan eliminasi", "berikan informasi eliminasi", "ajarkan pola BAB/BAK normal", "ajarkan perawatan eliminasi", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan kesehatan", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-017",
            code: "D.0216",
            label: "Kurang Pengetahuan tentang Istirahat",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan istirahat", "tidak tahu pola tidur", "tidak tahu hygiene tidur", "tidak tahu gangguan tidur", "tidak tahu cara tidur nyenyak"],
            keywords: ["istirahat", "tidak tahu pola tidur", "tidak tahu hygiene tidur", "tidak tahu gangguan tidur", "tidak tahu cara tidur nyenyak", "tidur tidak nyenyak", "insomnia", "bangun tengah malam", "kelelahan"],
            interventions: ["assess pengetahuan istirahat", "berikan informasi istirahat", "ajarkan hygiene tidur", "ajarkan cara tidur nyenyak", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan tidur", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-018",
            code: "D.0217",
            label: "Kurang Pengetahuan tentang Aktivitas",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan aktivitas", "tidak tahu manfaat aktivitas", "tidak tahu olahraga", "tidak tahu mobilitas", "tidak tahu manajemen energi"],
            keywords: ["aktivitas", "tidak tahu manfaat aktivitas", "tidak tahu olahraga", "tidak tahu mobilitas", "tidak tahu manajemen energi", "kelelahan", "tidak bisa bergerak", "gerak terbatas", "tidak mandiri"],
            interventions: ["assess pengetahuan aktivitas", "berikan informasi aktivitas", "ajarkan manfaat olahraga", "ajarkan manajemen energi", "monitor pemahaman", "libatkan keluarga", "rujuk ke fisioterapi", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-019",
            code: "D.0218",
            label: "Kurang Pengetahuan tentang Komunikasi",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan komunikasi", "tidak tahu cara komunikasi", "tidak tahu bahasa isyarat", "tidak tahu alat komunikasi", "tidak tahu etika komunikasi"],
            keywords: ["komunikasi", "tidak tahu cara komunikasi", "tidak tahu bahasa isyarat", "tidak tahu alat komunikasi", "tidak tahu etika komunikasi", "tidak bisa berbicara", "tidak bisa memahami", "gangguan bicara"],
            interventions: ["assess pengetahuan komunikasi", "berikan informasi komunikasi", "ajarkan cara komunikasi efektif", "ajarkan bahasa isyarat jika diperlukan", "monitor pemahaman", "libatkan keluarga", "rujuk ke terapi wicara", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-020",
            code: "D.0219",
            label: "Kurang Pengetahuan tentang Hubungan Sosial",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan sosial", "tidak tahu cara bersosialisasi", "tidak tahu dukungan sosial", "tidak tahu manajemen stres", "tidak tahu komunikasi sosial"],
            keywords: ["hubungan sosial", "tidak tahu cara bersosialisasi", "tidak tahu dukungan sosial", "tidak tahu manajemen stres", "tidak tahu komunikasi sosial", "isolasi", "tidak ada teman", "tidak ada dukungan", "depresi", "kecemasan"],
            interventions: ["assess pengetahuan sosial", "berikan informasi sosial", "ajarkan cara bersosialisasi", "ajarkan manajemen stres", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan sosial", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-021",
            code: "D.0220",
            label: "Kurang Pengetahuan tentang Kesehatan Mata",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan mata", "tidak tahu cara merawat mata", "tidak tahu penyakit mata", "tidak tahu kacamata", "tidak tahu kebersihan mata"],
            keywords: ["kesehatan mata", "tidak tahu cara merawat mata", "tidak tahu penyakit mata", "tidak tahu kacamata", "tidak tahu kebersihan mata", "penglihatan kabur", "mata berair", "sakit mata"],
            interventions: ["assess pengetahuan mata", "berikan informasi kesehatan mata", "ajarkan cara merawat mata", "ajarkan cara menggunakan kacamata", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan mata", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-022",
            code: "D.0221",
            label: "Kurang Pengetahuan tentang Kesehatan Telinga",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan telinga", "tidak tahu cara merawat telinga", "tidak tahu penyakit telinga", "tidak tahu kebersihan telinga", "tidak tahu kacamata tuli"],
            keywords: ["kesehatan telinga", "tidak tahu cara merawat telinga", "tidak tahu penyakit telinga", "tidak tahu kebersihan telinga", "tidak tahu kacamata tuli", "telinga berdenging", "telinga sakit", "tuli", "bising telinga"],
            interventions: ["assess pengetahuan telinga", "berikan informasi kesehatan telinga", "ajarkan cara merawat telinga", "ajarkan kebersihan telinga", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan telinga", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-023",
            code: "D.0222",
            label: "Kurang Pengetahuan tentang Kesehatan Gigi",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan gigi", "tidak tahu cara menyikat gigi", "tidak tahu penyakit gigi", "tidak tahu floss", "tidak tahu dentist"],
            keywords: ["kesehatan gigi", "tidak tahu cara menyikat gigi", "tidak tahu penyakit gigi", "tidak tahu floss", "tidak tahu dentist", "gusi berdarah", "sakit gigi", "bau mulut", "karang gigi"],
            interventions: ["assess pengetahuan gigi", "berikan informasi kesehatan gigi", "ajarkan cara menyikat gigi", "ajarkan cara floss", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan gigi", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-024",
            code: "D.0223",
            label: "Kurang Pengetahuan tentang Manajemen Stres",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan stres", "tidak tahu cara mengatasi stres", "tidak tahu relaksasi", "tidak tahu manajemen waktu", "tidak tahu coping"],
            keywords: ["manajemen stres", "tidak tahu cara mengatasi stres", "tidak tahu relaksasi", "tidak tahu manajemen waktu", "tidak tahu coping", "stres", "cemas", "tegang", "tidak bisa istirahat"],
            interventions: ["assess pengetahuan stres", "berikan informasi manajemen stres", "ajarkan teknik relaksasi", "ajarkan manajemen waktu", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan stres", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-025",
            code: "D.0224",
            label: "Kurang Pengetahuan tentang Kesehatan Seksual",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan seksual", "tidak tahu kontrasepsi", "tidak tahu penyakit seksual", "tidak tahu kehamilan", "tidak tahu hubungan seksual"],
            keywords: ["kesehatan seksual", "tidak tahu kontrasepsi", "tidak tahu penyakit seksual", "tidak tahu kehamilan", "tidak tahu hubungan seksual", "seks", "kontrasepsi", "kondom", "kehamilan", "IST"],
            interventions: ["assess pengetahuan seksual", "berikan informasi kesehatan seksual", "ajarkan kontrasepsi", "ajarkan penyakit seksual", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan seksual", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-026",
            code: "D.0225",
            label: "Kurang Pengetahuan tentang Imunisasi",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan imunisasi", "tidak tahu jadwal imunisasi", "tidak tahu manfaat imunisasi", "tidak tahu efek samping", "tidak mau imunisasi"],
            keywords: ["imunisasi", "tidak tahu jadwal imunisasi", "tidak tahu manfaat imunisasi", "tidak tahu efek samping", "tidak mau imunisasi", "vaksin", "bayi", "anak", "imunisasi dasar", "booster"],
            interventions: ["assess pengetahuan imunisasi", "berikan informasi imunisasi", "ajarkan jadwal imunisasi", "ajarkan manfaat imunisasi", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan imunisasi", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-027",
            code: "D.0226",
            label: "Kurang Pengetahuan tentang Kesehatan Lingkungan",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan lingkungan", "tidak tahu polusi", "tidak tahu kebersihan lingkungan", "tidak tahu limbah", "tidak tahu sanitasi"],
            keywords: ["kesehatan lingkungan", "tidak tahu polusi", "tidak tahu kebersihan lingkungan", "tidak tahu limbah", "tidak tahu sanitasi", "polusi", "limbah", "sampah", "air bersih", "sanitasi"],
            interventions: ["assess pengetahuan lingkungan", "berikan informasi lingkungan", "ajarkan kebersihan lingkungan", "ajarkan pengelolaan limbah", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan lingkungan", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-028",
            code: "D.0227",
            label: "Kurang Pengetahuan tentang Pertolongan Pertama",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan P3K", "tidak tahu cara pertolongan pertama", "tidak tahu bahaya", "tidak tahu obat P3K", "tidak tahu prosedur P3K"],
            keywords: ["pertolongan pertama", "tidak tahu cara pertolongan pertama", "tidak tahu bahaya", "tidak tahu obat P3K", "tidak tahu prosedur P3K", "P3K", "luka", "pendarahan", "pingsan", "keracunan"],
            interventions: ["assess pengetahuan P3K", "berikan informasi pertolongan pertama", "ajarkan prosedur P3K", "ajarkan penggunaan kotak P3K", "monitor pemahaman", "libatkan keluarga", "rujuk ke kursus P3K", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-029",
            code: "D.0228",
            label: "Kurang Pengetahuan tentang Nutrisi Lansia",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan nutrisi lansia", "tidak tahu kebutuhan gizi lansia", "tidak tahu makanan lansia", "tidak tahu gangguan gizi lansia", "tidak tahu diet lansia"],
            keywords: ["nutrisi lansia", "tidak tahu kebutuhan gizi lansia", "tidak tahu makanan lansia", "tidak tahu gangguan gizi lansia", "tidak tahu diet lansia", "lansia", "usia tua", "gizi kurang", "osteoporosis", "anemia"],
            interventions: ["assess pengetahuan nutrisi lansia", "berikan informasi nutrisi lansia", "ajarkan kebutuhan gizi lansia", "ajarkan diet lansia", "monitor pemahaman", "libatkan keluarga", "libatkan ahli gizi", "dokumentasi peningkatan pengetahuan"]
        },
        {
            id: "EDU-030",
            code: "D.0229",
            label: "Kurang Pengetahuan tentang Kesehatan Ibu dan Anak",
            domain: "Edukasi",
            educationFactors: ["kurang pengetahuan ibu anak", "tidak tahu kehamilan", "tidak tahu persalinan", "tidak tahu bayi", "tidak tahu imunisasi bayi", "tidak tahu gizi ibu"],
            keywords: ["kesehatan ibu anak", "tidak tahu kehamilan", "tidak tahu persalinan", "tidak tahu bayi", "tidak tahu imunisasi bayi", "tidak tahu gizi ibu", "kehamilan", "persalinan", "bayi", "imunisasi bayi"],
            interventions: ["assess pengetahuan ibu anak", "berikan informasi kesehatan ibu anak", "ajarkan kehamilan dan persalinan", "ajarkan perawatan bayi", "monitor pemahaman", "libatkan keluarga", "rujuk ke layanan ibu anak", "dokumentasi peningkatan pengetahuan"]
        }
    ]
};









