class NursingAssessmentApp {
    constructor() {
        this.currentTab = 0;
        this.menuItems = document.querySelectorAll('.menu-item');
        this.tabContents = document.querySelectorAll('.tab-content');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.mobilePrevBtn = document.getElementById('mobilePrevBtn');
        this.mobileNextBtn = document.getElementById('mobileNextBtn');
        this.backToMenuBtn = document.getElementById('backToMenuBtn');
        this.progressFill = document.getElementById('progressFill');
        this.cmdDesc = document.getElementById('p3rDesc');
        this.p3rControls = document.getElementById('p3rControls');
        this.submenuOverlay = document.getElementById('submenuOverlay');
        this.submenuPanel = document.getElementById('submenuPanel');
        this.submenuContent = document.getElementById('submenuContent');
        this.submenuBackdrop = document.getElementById('submenuBackdrop');
        this.submenuBgOverlay = document.getElementById('submenuBgOverlay');
        this.submenuFlash = document.getElementById('submenuFlash');

        this.isSubmenuOpen = false;
        this.currentSubmenuTab = null;

        this.tabContentsWrapper = document.getElementById('tabContentsWrapper');

        this.menuDescriptions = [
            'Isi data identitas pasien',
            'Jelaskan keluhan utama pasien',
            'Riwayat kesehatan pasien',
            'Pemeriksaan fisik B1-B6',
            'Review of systems',
            'Data alergi, imunisasi, sosial',
            'Lihat hasil diagnosa',
            'Daftar semua diagnosa'
        ];

        try {
            this.init();
        } catch (error) {
            console.error('Failed to initialize app:', error);
            const container = document.getElementById('hasilContainer');
            if (container) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #dc2626;">
                        <h3>Gagal Memuat Aplikasi</h3>
                        <p>${error.message}</p>
                        <p style="font-size: 12px; color: #666;">Cek console browser untuk detail error (F12)</p>
                    </div>
                `;
            }
        }
    }

    init() {
        this.initP3RMenu();
        this.initNavigation();
        this.initTouchNavigation();
        this.initBackButton();
        this.initGenerateButton();
        this.initPrintButton();
        this.initDaftarDiagnosa();
        this.initVideoBackground();
        this.updateNavigation();
        this.updateProgress();
        this.updateP3RDesc();
    }

    initBackButton() {
        if (this.backToMenuBtn) {
            this.backToMenuBtn.addEventListener('click', () => {
                if (this.tabContentsWrapper) {
                    this.tabContentsWrapper.classList.remove('active');
                }
            });
        }
    }

    initTouchNavigation() {
        if (!this.tabContentsWrapper) return;
        let touchStartX = 0;
        let touchStartY = 0;
        const minSwipeDistance = 80;

        this.tabContentsWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        this.tabContentsWrapper.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const touchEndY = e.changedTouches[0].screenY;
            const diffX = touchEndX - touchStartX;
            const diffY = touchEndY - touchStartY;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
                if (diffX > 0) {
                    this.changeTab(-1);
                } else {
                    this.changeTab(1);
                }
            }
        });
    }

    initP3RMenu() {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        const minSwipeDistance = 50;

        const handleSwipe = () => {
            const diffX = touchEndX - touchStartX;
            const diffY = touchEndY - touchStartY;
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
                if (diffX > 0) {
                    this.changeTab(-1);
                } else {
                    this.changeTab(1);
                }
            }
        };

        this.menuItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (this.isSubmenuOpen) {
                    this.closeSubmenu();
                }
                this.selectMenuItem(index);
            });

            item.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
            }, { passive: true });

            item.addEventListener('touchend', (e) => {
                if (this.isSubmenuOpen) return;
                const touch = e.changedTouches[0];
                touchEndX = touch.screenX;
                touchEndY = touch.screenY;
                const diffX = Math.abs(touchEndX - touchStartX);
                const diffY = Math.abs(touchEndY - touchStartY);
                if (diffX < 10 && diffY < 10) {
                    this.selectMenuItem(index);
                }
                handleSwipe();
            });

            item.addEventListener('mouseenter', () => {
                if (!this.isSubmenuOpen && !this.isTouchDevice()) {
                    this.selectMenuItem(index);
                }
            });
        });

        setTimeout(() => {
            this.menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('spawned');
                    this.glitchText(item.querySelector('.menu-item-text'));
                }, index * 100);
            });
            setTimeout(() => this.selectMenuItem(0), 900);
        }, 400);

        if (this.submenuBackdrop) {
            this.submenuBackdrop.addEventListener('click', () => this.closeSubmenu());
        }
        if (this.submenuBgOverlay) {
            this.submenuBgOverlay.addEventListener('click', () => this.closeSubmenu());
        }
    }

    isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }

    glitchText(element) {
        if (!element) return;
        const original = element.textContent;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
        let iterations = 0;
        const interval = setInterval(() => {
            element.textContent = original.split('').map((char, i) => {
                if (i < iterations) return original[i];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join('');
            iterations += 1;
            if (iterations > original.length) {
                clearInterval(interval);
                element.textContent = original;
            }
        }, 30);
    }

    handleKeydown(e) {
        if (this.isSubmenuOpen) {
            if (e.key === 'Escape' || e.key === 'Backspace' || e.key === 'b' || e.key === 'B') {
                this.closeSubmenu();
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
            case 's':
            case 'S':
                e.preventDefault();
                this.selectMenuItem((this.currentTab + 1) % this.menuItems.length);
                break;
            case 'ArrowUp':
            case 'w':
            case 'W':
                e.preventDefault();
                this.selectMenuItem((this.currentTab - 1 + this.menuItems.length) % this.menuItems.length);
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                this.openSubmenuForCurrent();
                break;
            default:
                break;
        }
    }

    selectMenuItem(index) {
        if (index < 0 || index >= this.menuItems.length) return;

        const prevActive = this.menuItems[this.currentTab];
        this.menuItems.forEach(item => item.classList.remove('active'));

        this.currentTab = index;
        const current = this.menuItems[index];
        current.classList.add('active');

        if (prevActive && prevActive !== current) {
            prevActive.style.transform = '';
            void prevActive.offsetWidth;
        }

        this.shakeScreen();

        this.switchTab(index);
        this.updateSideIndex();
        this.updateBottomBar();

        if (this.tabContentsWrapper) {
            this.tabContentsWrapper.classList.add('active');
        }
    }

    shakeScreen() {
        const container = document.querySelector('.container');
        if (!container) return;
        container.style.transition = 'transform 0.08s ease';
        container.style.transform = 'translateX(3px)';
        setTimeout(() => {
            container.style.transform = 'translateX(-3px)';
        }, 80);
        setTimeout(() => {
            container.style.transform = 'translateX(2px)';
        }, 160);
        setTimeout(() => {
            container.style.transform = 'translateX(-1px)';
        }, 240);
        setTimeout(() => {
            container.style.transform = 'translateX(0)';
            container.style.transition = 'transform 0.3s ease';
        }, 320);
    }

    updateP3RDesc() {
        if (!this.cmdDesc) return;
        const desc = this.menuItems[this.currentTab]?.dataset.desc || '';
        this.cmdDesc.textContent = desc;
    }

    updateSideIndex() {
        if (!this.sideIndex) return;
        const num = this.menuItems[this.currentTab]?.dataset.index || '01';
        this.sideIndex.textContent = num;
    }

    updateBottomBar() {
        if (!this.cmdDesc || !this.p3rControls) return;
        const desc = this.menuItems[this.currentTab]?.dataset.desc || 'Pilih menu';
        this.cmdDesc.textContent = desc;
        this.p3rControls.classList.remove('hidden');
    }

    openSubmenuForCurrent() {
        if (this.isSubmenuOpen) return;
        const tabId = this.menuItems[this.currentTab]?.dataset.tab;
        if (!tabId) return;
        this.openSubmenu(tabId);
    }

    openSubmenu(tabId) {
        if (this.isSubmenuOpen) return;
        this.isSubmenuOpen = true;
        this.currentSubmenuTab = tabId;

        const tabContent = document.getElementById(tabId);
        if (!tabContent) return;

        const content = tabContent.cloneNode(true);
        content.classList.add('submenu-content');
        content.id = 'submenuContentInner';

        if (this.submenuContent) {
            this.submenuContent.innerHTML = '';
            this.submenuContent.appendChild(content);
        }

        if (this.submenuOverlay) this.submenuOverlay.classList.add('active');
        if (this.submenuBgOverlay) this.submenuBgOverlay.classList.add('visible');
        if (this.p3rControls) this.p3rControls.classList.add('hidden');

        this.shakeScreen();

        const flash = document.getElementById('submenuFlash');
        if (flash) {
            flash.classList.remove('active');
            void flash.offsetWidth;
            flash.classList.add('active');
        }

        setTimeout(() => {
            if (this.submenuPanel) this.submenuPanel.classList.add('visible');
        }, 70);

        const closeBtn = document.createElement('button');
        closeBtn.className = 'btn-secondary';
        closeBtn.textContent = 'Tutup';
        closeBtn.style.marginTop = '24px';
        closeBtn.addEventListener('click', () => this.closeSubmenu());
        const navRow = content.querySelector('.nav-row');
        if (navRow && navRow.parentNode) {
            navRow.parentNode.insertBefore(closeBtn, navRow.nextSibling);
        }
    }

    closeSubmenu() {
        if (!this.isSubmenuOpen) return;

        if (this.submenuPanel) this.submenuPanel.classList.remove('visible');
        if (this.submenuOverlay) this.submenuOverlay.classList.remove('active');
        if (this.submenuBgOverlay) this.submenuBgOverlay.classList.remove('visible');
        if (this.p3rControls) this.p3rControls.classList.remove('hidden');

        setTimeout(() => {
            if (this.submenuContent) this.submenuContent.innerHTML = '';
            this.isSubmenuOpen = false;
            this.currentSubmenuTab = null;
        }, 350);
    }

    initNavigation() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.changeTab(-1));
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.changeTab(1));
        }
        if (this.mobilePrevBtn) {
            this.mobilePrevBtn.addEventListener('click', () => this.changeTab(-1));
        }
        if (this.mobileNextBtn) {
            this.mobileNextBtn.addEventListener('click', () => this.changeTab(1));
        }
    }

    initGenerateButton() {
        const btn = document.getElementById('generateBtn');
        if (btn) {
            btn.addEventListener('click', () => this.generateDiagnoses());
        }
    }

    initPrintButton() {
        const btn = document.getElementById('printBtn');
        if (btn) {
            btn.addEventListener('click', () => this.printResults());
        }
    }

    switchTab(index) {
        if (index < 0 || index >= this.tabContents.length) return;

        this.tabContents.forEach(content => content.classList.remove('active'));

        this.currentTab = index;

        this.tabContents[index].classList.add('active');

        this.updateNavigation();
        this.updateProgress();
    }

    changeTab(direction) {
        const newTab = this.currentTab + direction;
        if (newTab >= 0 && newTab < this.tabContents.length) {
            this.switchTab(newTab);
            this.menuItems.forEach(item => item.classList.remove('active'));
            this.menuItems[newTab].classList.add('active');
            this.updateSideIndex();
            this.updateBottomBar();

            if (this.tabContentsWrapper) {
                this.tabContentsWrapper.classList.add('active');
            }
        }
    }

    updateNavigation() {
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentTab === 0;
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentTab === this.tabContents.length - 1;
        }
        if (this.mobilePrevBtn) {
            this.mobilePrevBtn.disabled = this.currentTab === 0;
        }
        if (this.mobileNextBtn) {
            this.mobileNextBtn.disabled = this.currentTab === this.tabContents.length - 1;
        }
    }

    updateProgress() {
        if (!this.progressFill) return;
        const progress = ((this.currentTab + 1) / this.tabContents.length) * 100;
        this.progressFill.style.width = progress + '%';
    }

    collectFormData() {
        const data = {
            identitas: {
                nama: document.getElementById('nama')?.value || '',
                umur: parseInt(document.getElementById('umur')?.value) || 0,
                jenisKelamin: document.getElementById('jenisKelamin')?.value || '',
                noRM: document.getElementById('noRM')?.value || '',
                tanggal: document.getElementById('tanggal')?.value || ''
            },
            keluhanUtama: document.getElementById('keluhanUtama')?.value || '',
            durasiKeluhan: document.getElementById('durasiKeluhan')?.value || '',
            rpj: document.getElementById('rpj')?.value || '',
            rps: document.getElementById('rps')?.value || '',
            riwayatPengobatan: document.getElementById('riwayatPengobatan')?.value || '',
            lainnya: document.getElementById('lainnyaText')?.value || '',

            pemeriksaanFisik: {
                tandaVital: this.getVitalData(),
                b1: this.getSectionData('[data-b="b1"]'),
                b2: this.getSectionData('[data-b="b2"]'),
                b3: this.getSectionData('[data-b="b3"]'),
                b4: this.getSectionData('[data-b="b4"]'),
                b5: this.getSectionData('[data-b="b5"]'),
                b6: this.getSectionData('[data-b="b6"]')
            },

            lainnyaData: {
                alergi: this.getCheckedValues('[data-lain="alergi"]'),
                imunisasi: this.getCheckedValues('[data-lain="imunisasi"]'),
                sosial: this.getCheckedValues('[data-lain="sosial"]')
            }
        };

        return data;
    }

    getCheckedValues(selector) {
        const checkboxes = document.querySelectorAll(`${selector}:checked`);
        return Array.from(checkboxes).map(cb => cb.value.toLowerCase());
    }

    getSectionData(selector) {
        const elements = document.querySelectorAll(selector);
        const values = [];
        elements.forEach(el => {
            if (el.type === 'checkbox' && el.checked) {
                values.push(el.value.toLowerCase());
            } else if (el.type === 'radio' && el.checked) {
                values.push(el.value.toLowerCase());
            } else if (el.tagName === 'INPUT' && el.type !== 'checkbox' && el.type !== 'radio' && el.value.trim()) {
                values.push(el.value.trim().toLowerCase());
            } else if (el.tagName === 'TEXTAREA' && el.value.trim()) {
                values.push(el.value.trim().toLowerCase());
            }
        });
        return values;
    }

    getVitalData() {
        const vitals = {};
        document.querySelectorAll('[data-vital]').forEach(el => {
            const key = el.getAttribute('data-vital');
            if (el.tagName === 'SELECT') {
                vitals[key] = el.value.toLowerCase();
            } else {
                vitals[key] = el.value.trim().toLowerCase();
            }
        });
        return vitals;
    }

    interpretVitals(vitals) {
        const findings = [];
        const suhu = parseFloat(vitals.suhu?.replace(',', '.'));
        const nadi = parseInt(vitals.nadi);
        const rr = parseInt(vitals.rr);
        const td = vitals.td;

        if (!isNaN(suhu)) {
            if (suhu >= 38) findings.push('demam', 'suhu tinggi', 'panas');
            else if (suhu < 36) findings.push('hipotermia', 'suhu rendah', 'dingin');
        }

        if (!isNaN(nadi)) {
            if (nadi > 100) findings.push('takikardia', 'nadi cepat');
            else if (nadi < 60) findings.push('bradikardia', 'nadi lambat');
        }

        if (!isNaN(rr)) {
            if (rr > 20) findings.push('tachypnea', 'pernapasan cepat');
            else if (rr < 12) findings.push('bradipnea', 'pernapasan lambat');
        }

        if (td) {
            const sysMatch = td.match(/(\d+)\s*\/\s*(\d+)/);
            if (sysMatch) {
                const sys = parseInt(sysMatch[1]);
                const dia = parseInt(sysMatch[2]);
                if (sys > 140 || dia > 90) findings.push('hipertensi', 'tekanan darah tinggi');
                if (sys < 90 || dia < 60) findings.push('hipotensi', 'tekanan darah rendah');
            }
        }

        return findings;
    }

    scoreDiagnosis(diagnosis, data) {
        let score = 0;
        let matchedSubjective = [];
        let matchedObjective = [];
        let matchedKeywords = [];

        const stopWords = new Set(['yang', 'dan', 'ini', 'itu', 'dengan', 'untuk', 'dari', 'pada', 'ke', 'di', 'dalam', 'sejak', 'hari', 'minggu', 'bulan', 'tahun', 'lalu', 'saat', 'sudah', 'telah', 'disertai', 'keluhan', 'suhu', 'derajat', 'celcius', 'kali', 'tidak', 'ada', 'bisa', 'saja', 'juga', 'atau', 'apabila', 'karena', 'sehingga', 'tetapi', 'namun', 'melainkan', 'terhadap', 'antaranya', 'tersebut', 'berikut', 'pasti', 'tegas', 'tepat', 'benar', 'sesuai', 'berdasarkan']);

        const normalizeText = (text) => {
            return text.toLowerCase()
                .replace(/[^\w\s]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        };

        const getWords = (text) => {
            return normalizeText(text).split(' ').filter(w => !stopWords.has(w) && w.length > 2);
        };

        const vitalFindings = this.interpretVitals(data.pemeriksaanFisik.tandaVital || {});

        const allData = [
            ...getWords(data.keluhanUtama),
            ...getWords(data.rps),
            ...getWords(data.rpj),
            ...getWords(data.riwayatPengobatan),
            ...getWords(data.lainnya)
        ];

        Object.values(data.pemeriksaanFisik).forEach(values => {
            if (Array.isArray(values)) {
                allData.push(...values.map(v => normalizeText(v).split(' ')).flat());
            } else if (typeof values === 'object' && values !== null) {
                Object.values(values).forEach(v => {
                    if (typeof v === 'string' && v.trim()) {
                        allData.push(...getWords(v));
                    }
                });
            }
        });

        allData.push(...vitalFindings.map(f => f.toLowerCase()));

        Object.values(data.lainnyaData).forEach(values => {
            allData.push(...values);
        });

        const dataText = allData.join(' ');

        const hasMatch = (term) => {
            const words = getWords(term);
            return words.some(w => allData.includes(w));
        };

        const matchCount = (terms) => {
            if (!terms) return 0;
            return terms.filter(t => hasMatch(t)).length;
        };

        const keywordMatches = matchCount(diagnosis.keywords);
        const subjectiveMatches = matchCount(diagnosis.characteristics?.subjective);
        const objectiveMatches = matchCount(diagnosis.characteristics?.objective);
        const riskMatches = matchCount(diagnosis.riskFactors);
        const educationMatches = matchCount(diagnosis.educationFactors);
        const relatedMatches = matchCount(diagnosis.relatedFactors);

        score += keywordMatches * 2;
        score += subjectiveMatches * 8;
        score += objectiveMatches * 6;
        score += riskMatches * 3;
        score += educationMatches * 3;
        score += relatedMatches * 2;

        if (subjectiveMatches > 1) score += (subjectiveMatches - 1) * 3;
        if (objectiveMatches > 1) score += (objectiveMatches - 1) * 2;
        if (subjectiveMatches > 0 && objectiveMatches > 0) score += 6;

        diagnosis.keywords?.forEach(k => { if (hasMatch(k)) matchedKeywords.push(k); });
        diagnosis.characteristics?.subjective?.forEach(s => { if (hasMatch(s)) matchedSubjective.push(s); });
        diagnosis.characteristics?.objective?.forEach(o => { if (hasMatch(o)) matchedObjective.push(o); });

        const totalMatches = subjectiveMatches + objectiveMatches + keywordMatches + riskMatches + relatedMatches;

        if (subjectiveMatches === 0 && objectiveMatches === 0 && keywordMatches < 2) {
            score = 0;
        }

        if (subjectiveMatches === 0 && objectiveMatches === 0 && keywordMatches >= 2) {
            score = Math.min(score, 8);
        }

        return {
            score,
            matchedSubjective: [...new Set(matchedSubjective)],
            matchedObjective: [...new Set(matchedObjective)],
            totalMatches
        };
    }

    getPriorityLabel(score) {
        if (score >= 15) return { label: 'Prioritas Tinggi', class: 'priority-high' };
        if (score >= 10) return { label: 'Prioritas Sedang', class: 'priority-medium' };
        if (score >= 5) return { label: 'Prioritas Rendah', class: 'priority-low' };
        return { label: 'Prioritas Minimal', class: 'priority-minimal' };
    }

    formatDiagnosis(type, diagnosis, data, scoring) {
        const priority = this.getPriorityLabel(scoring.score);

        let html = `
            <div class="diagnosa-card">
                <div class="diagnosa-header">
                    <div>
                        <div class="diagnosa-title">${diagnosis.code ? `<span class="diagnosa-code">${diagnosis.code}</span> ` : ''}${diagnosis.label}</div>
                        <span class="diagnosa-domain">${diagnosis.domain}</span>
                    </div>
                    <span class="diagnosa-priority">${priority.label}</span>
                </div>
        `;

        if (type === 'actual') {
            html += `
                <div class="diagnosa-section">
                    <h4>Formula Diagnosa</h4>
                    <div class="diagnosa-formula">
                        <strong>P + E + S :</strong> Diagnosis Keperawatan Aktual<br>
                        <strong>b.d (berdasarkan) etiologi:</strong> ${diagnosis.etiology}<br>
                        <strong>d.d (didukung) data:</strong> Data subjektif dan objektif pasien
                    </div>
                </div>
            `;

            if (scoring.matchedSubjective.length > 0) {
                html += `
                    <div class="diagnosa-section">
                        <h4>Data Subjektif (S)</h4>
                        <div>
                            ${scoring.matchedSubjective.map(s => `<span class="tag tag-subjective">${s}</span>`).join('')}
                        </div>
                    </div>
                `;
            }

            if (scoring.matchedObjective.length > 0) {
                html += `
                    <div class="diagnosa-section">
                        <h4>Data Obyektif (E)</h4>
                        <div>
                            ${scoring.matchedObjective.map(o => `<span class="tag tag-objective">${o}</span>`).join('')}
                        </div>
                    </div>
                `;
            }

            if (diagnosis.relatedFactors && diagnosis.relatedFactors.length > 0) {
                html += `
                    <div class="diagnosa-section">
                        <h4>Faktor Terkait (P)</h4>
                        <div>
                            ${diagnosis.relatedFactors.slice(0, 5).map(rf => `<span class="tag">${rf}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
        } else if (type === 'risk') {
            html += `
                <div class="diagnosa-section">
                    <h4>Formula Diagnosa</h4>
                    <div class="diagnosa-formula">
                        <strong>P + S :</strong> Diagnosis Keperawatan Risiko<br>
                        <strong>d.d (didukung) faktor risiko:</strong> Faktor risiko yang ada di SDKI
                    </div>
                </div>
                <div class="diagnosa-section">
                    <h4>Faktor Risiko yang Ditemukan</h4>
                    <div>
                        ${(diagnosis.riskFactors || []).slice(0, 5).map(rf => `<span class="tag tag-risk">${rf}</span>`).join('')}
                    </div>
                </div>
            `;
        } else if (type === 'education') {
            html += `
                <div class="diagnosa-section">
                    <h4>Formula Diagnosa</h4>
                    <div class="diagnosa-formula">
                        <strong>P + S :</strong> Diagnosis Pendidikan Kesehatan<br>
                        <strong>d.d (didukung) faktor:</strong> Faktor pendidikan yang ada di SDKI
                    </div>
                </div>
                <div class="diagnosa-section">
                    <h4>Faktor Pendidikan yang Ditemukan</h4>
                    <div>
                        ${(diagnosis.educationFactors || []).slice(0, 5).map(ef => `<span class="tag tag-risk">${ef}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        if (diagnosis.interventions && diagnosis.interventions.length > 0) {
            html += `
                <div class="diagnosa-section">
                    <h4>Tindakan Keperawatan</h4>
                    <div>
                        ${diagnosis.interventions.slice(0, 8).map(i => `<span class="tag tag-intervention">${i}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        html += `
                <div class="diagnosa-section">
                    <h4>Skor Kecocokan</h4>
                    <div style="background: var(--bg); padding: 10px; border-radius: 8px; font-weight: 600; color: var(--primary);">
                        ${scoring.score} poin
                    </div>
                </div>
            </div>
        `;

        return html;
    }

    async generateDiagnoses() {
        const btn = document.getElementById('generateBtn');
        const container = document.getElementById('hasilContainer');

        btn.disabled = true;
        btn.textContent = 'Menganalisis...';

        try {
            if (typeof SDKI_DB === 'undefined') {
                throw new Error('Data diagnosa belum dimuat. Pastikan file sdki-db.js dimuat dengan benar.');
            }

            await new Promise(resolve => setTimeout(resolve, 500));

            const data = this.collectFormData();
            const jumlahDiagnosa = parseInt(document.getElementById('jumlahDiagnosa').value);

            const allDiagnoses = [];

            SDKI_DB.actual.forEach(diagnosis => {
                const scoring = this.scoreDiagnosis(diagnosis, data);
                if (scoring.score >= 10) {
                    allDiagnoses.push({
                        type: 'actual',
                        diagnosis,
                        scoring
                    });
                }
            });

            SDKI_DB.risk.forEach(diagnosis => {
                const scoring = this.scoreDiagnosis(diagnosis, data);
                if (scoring.score >= 10) {
                    allDiagnoses.push({
                        type: 'risk',
                        diagnosis,
                        scoring
                    });
                }
            });

            SDKI_DB.education.forEach(diagnosis => {
                const scoring = this.scoreDiagnosis(diagnosis, data);
                if (scoring.score >= 10) {
                    allDiagnoses.push({
                        type: 'education',
                        diagnosis,
                        scoring
                    });
                }
            });

            allDiagnoses.sort((a, b) => {
                if (b.scoring.totalMatches !== a.scoring.totalMatches) {
                    return b.scoring.totalMatches - a.scoring.totalMatches;
                }
                return b.scoring.score - a.scoring.score;
            });

            const topDiagnoses = allDiagnoses.slice(0, jumlahDiagnosa);

            container.innerHTML = '';

            if (topDiagnoses.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: var(--text-light);">
                        <h3>Tidak ada diagnosa yang ditemukan</h3>
                        <p>Pastikan data pengkajian telah diisi dengan lengkap</p>
                    </div>
                `;
            } else {
                topDiagnoses.forEach((item, index) => {
                    const html = this.formatDiagnosis(item.type, item.diagnosis, data, item.scoring);
                    container.innerHTML += html;
                });
            }

            const printBtn = document.getElementById('printBtn');
            if (topDiagnoses.length > 0) {
                printBtn.disabled = false;
            }

            this.switchTab(6);
        } catch (error) {
            console.error('Error generating diagnoses:', error);
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #dc2626;">
                    <h3>Terjadi Kesalahan</h3>
                    <p>${error.message}</p>
                    <p style="font-size: 12px; color: #666;">Cek console browser untuk detail error</p>
                </div>
            `;
        } finally {
            btn.disabled = false;
            btn.textContent = 'Generate Diagnosa';
        }
    }

    printResults() {
        const container = document.getElementById('hasilContainer');
        const printContent = container.innerHTML;

        const printWindow = window.open('', '_blank', 'width=800,height=600');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Hasil Diagnosa Keperawatan - SDKI AI</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
                    h1 { text-align: center; color: #2563eb; }
                    h2 { color: #1e40af; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
                    .diagnosa-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; page-break-inside: avoid; }
                    .diagnosa-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
                    .diagnosa-title { font-size: 18px; font-weight: bold; color: #1e40af; }
                    .diagnosa-domain { display: inline-block; background: #dbeafe; color: #1e40af; padding: 2px 8px; border-radius: 4px; font-size: 12px; margin-top: 5px; }
                    .diagnosa-priority { background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 4px; font-size: 14px; }
                    .diagnosa-section { margin-top: 15px; }
                    .diagnosa-section h4 { color: #374151; margin-bottom: 8px; font-size: 14px; }
                    .diagnosa-formula { background: #f3f4f6; padding: 10px; border-radius: 6px; line-height: 1.6; }
                    .tag { display: inline-block; background: #dbeafe; color: #1e40af; padding: 3px 10px; border-radius: 4px; font-size: 12px; margin: 3px; }
                    .tag-subjective { background: #fef3c7; color: #92400e; }
                    .tag-objective { background: #d1fae5; color: #065f46; }
                    .tag-risk { background: #fee2e2; color: #991b1b; }
                    .tag-intervention { background: #e0e7ff; color: #3730a3; border-color: #a5b4fc; }
                    .priority-high { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; }
                    .priority-medium { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; }
                    .priority-low { background: linear-gradient(135deg, #10b981, #059669); color: white; }
                    .priority-minimal { background: linear-gradient(135deg, #6b7280, #4b5563); color: white; }
                    .skor { background: var(--bg); padding: 10px; border-radius: 8px; font-weight: 600; color: var(--primary); }
                    .info-pasien { background: #f9fafb; padding: 10px; border-radius: 6px; margin-bottom: 20px; }
                    @media print { body { padding: 0; } }
                </style>
            </head>
            <body>
                <h1>Hasil Diagnosa Keperawatan</h1>
                <div class="info-pasien">
                    <strong>Tanggal:</strong> ${document.getElementById('tanggal')?.value || '-'}<br>
                    <strong>Pasien:</strong> ${document.getElementById('nama')?.value || '-'}
                </div>
                ${printContent}
                <script>
                    setTimeout(() => { window.print(); window.close(); }, 500);
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    initDaftarDiagnosa() {
        this.daftarContainer = document.getElementById('daftarContainer');
        this.searchInput = document.getElementById('searchDiagnosa');
        this.filterSelect = document.getElementById('filterDiagnosa');
        this.currentFilter = 'semua';

        if (this.filterSelect) {
            this.filterSelect.addEventListener('change', () => {
                this.currentFilter = this.filterSelect.value;
                this.renderDiagnosisList();
            });
        }

        if (this.searchInput) {
            this.searchInput.addEventListener('input', () => this.renderDiagnosisList());
        }

        this.renderDiagnosisList();
    }

    initVideoBackground() {
        const introVideo = document.getElementById('introVideo');
        const loopVideo = document.getElementById('loopVideo');

        if (!introVideo || !loopVideo) return;

        introVideo.src = 'videos/intro-p3r.mp4';
        loopVideo.src = 'videos/loop-p3r.mp4';

        introVideo.style.display = 'block';
        loopVideo.style.display = 'none';

        introVideo.play().catch(() => {});

        introVideo.addEventListener('ended', () => {
            introVideo.style.display = 'none';
            loopVideo.style.display = 'block';
            loopVideo.play().catch(() => {});
        }, { once: true });

        introVideo.addEventListener('error', () => {
            introVideo.style.display = 'none';
            loopVideo.style.display = 'block';
            loopVideo.play().catch(() => {});
        });
    }

    renderDiagnosisList() {
        if (!this.daftarContainer) return;
        if (typeof SDKI_DB === 'undefined') {
            this.daftarContainer.innerHTML = `
                <div class="daftar-empty">
                    <h3>Data diagnosa belum dimuat</h3>
                    <p>Muat ulang halaman atau pastikan file sdki-db.js dimuat dengan benar</p>
                </div>
            `;
            return;
        }

        const searchText = (this.searchInput?.value || '').toLowerCase().trim();
        const filter = this.filterSelect?.value || 'semua';
        let items = [];

        SDKI_DB.actual.forEach(d => {
            if (filter !== 'semua' && filter !== 'aktual') return;
            if (!this.matchesSearch(d, searchText)) return;
            items.push({ ...d, type: 'actual' });
        });

        SDKI_DB.risk.forEach(d => {
            if (filter !== 'semua' && filter !== 'risiko') return;
            if (!this.matchesSearch(d, searchText)) return;
            items.push({ ...d, type: 'risk' });
        });

        SDKI_DB.education.forEach(d => {
            if (filter !== 'semua' && filter !== 'edukasi') return;
            if (!this.matchesSearch(d, searchText)) return;
            items.push({ ...d, type: 'education' });
        });

        if (items.length === 0) {
            this.daftarContainer.innerHTML = `
                <div class="daftar-empty">
                    <h3>Tidak ada diagnosa yang ditemukan</h3>
                    <p>Coba kata kunci lain atau ubah filter</p>
                </div>
            `;
            return;
        }

        this.daftarContainer.innerHTML = `<div class="daftar-list">` + items.map(item => {
            const typeClass = item.type === 'actual' ? '' : item.type === 'risk' ? 'risk-item' : 'education-item';
            return `
                <div class="daftar-item ${typeClass}">
                    <span class="daftar-item-code">${item.code || item.id || ''}</span>
                    <span class="daftar-item-label">${item.label || 'Tanpa Label'}</span>
                    <span class="daftar-item-domain">${item.domain || ''}</span>
                </div>
            `;
        }).join('') + `</div>`;
    }

    matchesSearch(diagnosis, searchText) {
        if (!searchText) return true;
        const haystack = [
            diagnosis.code,
            diagnosis.id,
            diagnosis.label,
            diagnosis.domain,
            ...(diagnosis.keywords || []),
            ...(diagnosis.riskFactors || []),
            ...(diagnosis.educationFactors || []),
            ...(diagnosis.relatedFactors || [])
        ].join(' ').toLowerCase();
        return haystack.includes(searchText);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new NursingAssessmentApp();
});
