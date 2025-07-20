// Activity Calendar for Rize Kindergarten

class ActivityCalendar {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        this.activities = this.getDefaultActivities();
        this.init();
    }

    init() {
        if (this.container) {
            this.renderCalendar();
            this.bindEvents();
        }
    }

    getDefaultActivities() {
        return {
            '2024-09-02': { title: 'Oryantasyon', type: 'orientation', icon: 'fas fa-users' },
            '2024-09-05': { title: 'Çay Bahçesi Gezisi', type: 'field-trip', icon: 'fas fa-leaf' },
            '2024-09-09': { title: 'Müzik Atölyesi', type: 'workshop', icon: 'fas fa-music' },
            '2024-09-12': { title: 'Sanat Etkinliği', type: 'art', icon: 'fas fa-paint-brush' },
            '2024-09-16': { title: 'Bilim Deneyi', type: 'science', icon: 'fas fa-flask' },
            '2024-09-19': { title: 'Spor Günü', type: 'sports', icon: 'fas fa-running' },
            '2024-09-23': { title: 'İngilizce Dersi', type: 'language', icon: 'fas fa-language' },
            '2024-09-26': { title: 'Doğa Keşfi', type: 'nature', icon: 'fas fa-tree' },
            '2024-09-30': { title: 'Aile Katılımı', type: 'family', icon: 'fas fa-heart' }
        };
    }

    renderCalendar() {
        const monthNames = [
            'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
            'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
        ];

        const daysOfWeek = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

        let calendarHTML = `
            <div class="calendar-header mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <h4>${monthNames[this.currentMonth]} ${this.currentYear} Etkinlik Takvimi</h4>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-outline-primary btn-sm" onclick="calendar.prevMonth()">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button type="button" class="btn btn-outline-primary btn-sm" onclick="calendar.nextMonth()">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="calendar-grid">
        `;

        // Add day headers
        daysOfWeek.forEach(day => {
            calendarHTML += `<div class="calendar-day-header">${day}</div>`;
        });

        // Get calendar days
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay() + 1);

        let currentDate = new Date(startDate);

        // Generate calendar grid
        for (let week = 0; week < 6; week++) {
            for (let day = 0; day < 7; day++) {
                const dateString = this.formatDate(currentDate);
                const activity = this.activities[dateString];
                const isCurrentMonth = currentDate.getMonth() === this.currentMonth;
                const isToday = this.isToday(currentDate);

                let dayClass = 'calendar-day';
                if (!isCurrentMonth) dayClass += ' other-month';
                if (isToday) dayClass += ' today';
                if (activity) dayClass += ' has-event';

                calendarHTML += `
                    <div class="${dayClass}" data-date="${dateString}" onclick="calendar.showActivityDetails('${dateString}')">
                        <div class="day-number">${currentDate.getDate()}</div>
                        ${activity ? `
                            <div class="activity-indicator">
                                <i class="${activity.icon}"></i>
                                <small>${activity.title}</small>
                            </div>
                        ` : ''}
                    </div>
                `;

                currentDate.setDate(currentDate.getDate() + 1);
            }
        }

        calendarHTML += '</div>';

        this.container.innerHTML = calendarHTML;
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    isToday(date) {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    }

    prevMonth() {
        this.currentMonth--;
        if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.renderCalendar();
    }

    nextMonth() {
        this.currentMonth++;
        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.renderCalendar();
    }

    showActivityDetails(dateString) {
        const activity = this.activities[dateString];
        if (activity) {
            this.showModal(activity, dateString);
        }
    }

    showModal(activity, dateString) {
        const modalHTML = `
            <div class="modal fade" id="activityModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <i class="${activity.icon} me-2"></i>${activity.title}
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p><strong>Tarih:</strong> ${this.formatTurkishDate(dateString)}</p>
                            <p><strong>Etkinlik Türü:</strong> ${this.getActivityTypeName(activity.type)}</p>
                            <p><strong>Açıklama:</strong> ${this.getActivityDescription(activity)}</p>
                            <div class="activity-details mt-3">
                                ${this.getActivityDetails(activity)}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                            <button type="button" class="btn btn-primary" onclick="calendar.registerForActivity('${dateString}')">
                                <i class="fas fa-calendar-check me-2"></i>Katılım Bildir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal
        const existingModal = document.getElementById('activityModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Add new modal
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('activityModal'));
        modal.show();
    }

    formatTurkishDate(dateString) {
        const date = new Date(dateString);
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('tr-TR', options);
    }

    getActivityTypeName(type) {
        const typeNames = {
            'orientation': 'Oryantasyon',
            'field-trip': 'Gezisi',
            'workshop': 'Atölye',
            'art': 'Sanat',
            'science': 'Bilim',
            'sports': 'Spor',
            'language': 'Dil',
            'nature': 'Doğa',
            'family': 'Aile Katılımı'
        };
        return typeNames[type] || type;
    }

    getActivityDescription(activity) {
        const descriptions = {
            'orientation': 'Yeni öğrencilerimizin okula alışması için özel program.',
            'field-trip': 'Rize\'nin çay bahçelerinde doğa ile iç içe öğrenme.',
            'workshop': 'Müzik aletleri ile ritim ve melodi çalışmaları.',
            'art': 'Renkli boyalar ve farklı malzemelerle yaratıcılık.',
            'science': 'Basit deneylerle bilimsel düşünme becerisi.',
            'sports': 'Eğlenceli oyunlar ve fiziksel aktiviteler.',
            'language': 'İngilizce kelimeler ve şarkılar ile dil öğrenimi.',
            'nature': 'Doğa keşfi ve çevre bilinci geliştirme.',
            'family': 'Ailelerimizin katılımıyla özel etkinlikler.'
        };
        return descriptions[activity.type] || 'Eğlenceli ve öğretici aktivite.';
    }

    getActivityDetails(activity) {
        const details = {
            'orientation': `
                <ul>
                    <li>Okul tanıtımı ve kurallar</li>
                    <li>Öğretmenlerle tanışma</li>
                    <li>Sınıf ortamına alışma</li>
                </ul>
            `,
            'field-trip': `
                <ul>
                    <li>Çay toplama deneyimi</li>
                    <li>Doğa gözlemi</li>
                    <li>Fotoğraf çekimi</li>
                </ul>
            `,
            'workshop': `
                <ul>
                    <li>Ritim aletleri tanıma</li>
                    <li>Basit melodi çalma</li>
                    <li>Grup müziği</li>
                </ul>
            `,
            'art': `
                <ul>
                    <li>Parmak boyası</li>
                    <li>Kolaj çalışması</li>
                    <li>Seramik şekillendirme</li>
                </ul>
            `,
            'science': `
                <ul>
                    <li>Renk karışımı deneyi</li>
                    <li>Su döngüsü gözlemi</li>
                    <li>Basit makine yapımı</li>
                </ul>
            `,
            'sports': `
                <ul>
                    <li>Koşu yarışları</li>
                    <li>Top oyunları</li>
                    <li>Dans aktiviteleri</li>
                </ul>
            `,
            'language': `
                <ul>
                    <li>Renk isimleri</li>
                    <li>Sayı sayma</li>
                    <li>Basit şarkılar</li>
                </ul>
            `,
            'nature': `
                <ul>
                    <li>Yaprak koleksiyonu</li>
                    <li>Kuş gözlemi</li>
                    <li>Çevre temizliği</li>
                </ul>
            `,
            'family': `
                <ul>
                    <li>Aile oyunları</li>
                    <li>Birlikte yemek</li>
                    <li>Fotoğraf çekimi</li>
                </ul>
            `
        };
        return details[activity.type] || '<p>Detaylar yakında eklenecek.</p>';
    }

    registerForActivity(dateString) {
        const activity = this.activities[dateString];
        if (activity) {
            // Show success message
            const modal = bootstrap.Modal.getInstance(document.getElementById('activityModal'));
            modal.hide();
            
            setTimeout(() => {
                this.showSuccessMessage(`${activity.title} etkinliğine katılımınız kaydedildi!`);
            }, 300);
        }
    }

    showSuccessMessage(message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show position-fixed';
        alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Auto dismiss after 3 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 3000);
    }

    bindEvents() {
        // Add event listeners for calendar interactions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('calendar-day')) {
                const dateString = e.target.dataset.date;
                this.showActivityDetails(dateString);
            }
        });
    }

    // Add new activity
    addActivity(dateString, activity) {
        this.activities[dateString] = activity;
        this.renderCalendar();
    }

    // Remove activity
    removeActivity(dateString) {
        delete this.activities[dateString];
        this.renderCalendar();
    }

    // Get activities for a specific month
    getMonthActivities(month, year) {
        const monthActivities = {};
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        
        Object.keys(this.activities).forEach(dateString => {
            const activityDate = new Date(dateString);
            if (activityDate >= startDate && activityDate <= endDate) {
                monthActivities[dateString] = this.activities[dateString];
            }
        });
        
        return monthActivities;
    }
}

// Initialize calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.calendar = new ActivityCalendar('activity-calendar');
});

// Export for global access
window.ActivityCalendar = ActivityCalendar; 