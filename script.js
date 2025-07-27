// Wallet Connection Functionality
class WalletManager {
    constructor() {
        this.isConnected = false;
        this.currentAccount = null;
        this.provider = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.checkConnection();
    }

    bindEvents() {
        const connectBtn = document.getElementById('connectWallet');
        const disconnectBtn = document.getElementById('disconnectWallet');
        const modal = document.getElementById('walletModal');
        const closeModal = document.querySelector('.close-modal');
        const walletOptions = document.querySelectorAll('.wallet-option');

        connectBtn?.addEventListener('click', () => this.showWalletModal());
        disconnectBtn?.addEventListener('click', () => this.disconnect());
        closeModal?.addEventListener('click', () => this.hideWalletModal());
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) this.hideWalletModal();
        });

        walletOptions.forEach(option => {
            option.addEventListener('click', () => {
                const walletType = option.dataset.wallet;
                this.connectWallet(walletType);
            });
        });
    }

    showWalletModal() {
        const modal = document.getElementById('walletModal');
        modal?.classList.remove('hidden');
    }

    hideWalletModal() {
        const modal = document.getElementById('walletModal');
        modal?.classList.add('hidden');
    }

    async connectWallet(walletType) {
        try {
            switch (walletType) {
                case 'metamask':
                    await this.connectMetaMask();
                    break;
                case 'walletconnect':
                    await this.connectWalletConnect();
                    break;
                case 'coinbase':
                    await this.connectCoinbase();
                    break;
                default:
                    throw new Error('نوع کیف پول پشتیبانی نمی‌شود');
            }
            this.hideWalletModal();
        } catch (error) {
            console.error('خطا در اتصال کیف پول:', error);
            this.showNotification('خطا در اتصال کیف پول: ' + error.message, 'error');
        }
    }

    async connectMetaMask() {
        if (typeof window.ethereum === 'undefined') {
            throw new Error('MetaMask نصب نشده است');
        }

        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            if (accounts.length > 0) {
                this.currentAccount = accounts[0];
                this.isConnected = true;
                this.provider = window.ethereum;
                this.updateUI();
                this.showNotification('کیف پول با موفقیت متصل شد', 'success');
                
                // Listen for account changes
                window.ethereum.on('accountsChanged', (accounts) => {
                    if (accounts.length === 0) {
                        this.disconnect();
                    } else {
                        this.currentAccount = accounts[0];
                        this.updateUI();
                    }
                });
            }
        } catch (error) {
            throw new Error('کاربر اتصال را رد کرد');
        }
    }

    async connectWalletConnect() {
        // WalletConnect implementation would go here
        // For demo purposes, we'll simulate a connection
        this.simulateConnection('WalletConnect');
    }

    async connectCoinbase() {
        // Coinbase Wallet implementation would go here
        // For demo purposes, we'll simulate a connection
        this.simulateConnection('Coinbase');
    }

    simulateConnection(walletName) {
        // Simulate wallet connection for demo
        this.currentAccount = '0x' + Math.random().toString(16).substr(2, 40);
        this.isConnected = true;
        this.updateUI();
        this.showNotification(`${walletName} با موفقیت متصل شد`, 'success');
    }

    disconnect() {
        this.isConnected = false;
        this.currentAccount = null;
        this.provider = null;
        this.updateUI();
        this.showNotification('کیف پول قطع شد', 'info');
    }

    updateUI() {
        const connectBtn = document.getElementById('connectWallet');
        const walletInfo = document.getElementById('walletInfo');
        const walletAddress = document.getElementById('walletAddress');
        const walletText = document.getElementById('walletText');

        if (this.isConnected && this.currentAccount) {
            connectBtn?.classList.add('hidden');
            walletInfo?.classList.remove('hidden');
            if (walletAddress) {
                walletAddress.textContent = this.formatAddress(this.currentAccount);
            }
        } else {
            connectBtn?.classList.remove('hidden');
            walletInfo?.classList.add('hidden');
            if (walletText) {
                walletText.textContent = 'اتصال کیف پول';
            }
        }
    }

    formatAddress(address) {
        if (!address) return '';
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }

    async checkConnection() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_accounts'
                });
                if (accounts.length > 0) {
                    this.currentAccount = accounts[0];
                    this.isConnected = true;
                    this.provider = window.ethereum;
                    this.updateUI();
                }
            } catch (error) {
                console.error('خطا در بررسی اتصال:', error);
            }
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }
}

// Investment Management
class InvestmentManager {
    constructor() {
        this.investments = [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadInvestments();
    }

    bindEvents() {
        const investBtns = document.querySelectorAll('.invest-btn');
        investBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const investmentItem = btn.closest('.investment-item');
                const investmentName = investmentItem.querySelector('h4').textContent;
                this.handleInvestment(investmentName);
            });
        });

        const investmentItems = document.querySelectorAll('.investment-item');
        investmentItems.forEach(item => {
            item.addEventListener('click', () => {
                const investmentName = item.querySelector('h4').textContent;
                this.showInvestmentDetails(investmentName);
            });
        });
    }

    handleInvestment(investmentName) {
        // Check if wallet is connected
        if (!window.walletManager.isConnected) {
            window.walletManager.showNotification('لطفاً ابتدا کیف پول خود را متصل کنید', 'warning');
            return;
        }

        // Simulate investment process
        this.processInvestment(investmentName);
    }

    processInvestment(investmentName) {
        // Show loading state
        const notification = window.walletManager.showNotification(
            `در حال پردازش سرمایه‌گذاری در ${investmentName}...`, 
            'info'
        );

        // Simulate API call
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success rate for demo
            
            if (success) {
                this.investments.push({
                    name: investmentName,
                    amount: Math.floor(Math.random() * 1000) + 100,
                    date: new Date(),
                    status: 'active'
                });
                
                window.walletManager.showNotification(
                    `سرمایه‌گذاری در ${investmentName} با موفقیت انجام شد`, 
                    'success'
                );
            } else {
                window.walletManager.showNotification(
                    `خطا در سرمایه‌گذاری در ${investmentName}`, 
                    'error'
                );
            }
        }, 2000);
    }

    showInvestmentDetails(investmentName) {
        // This would show a modal with investment details
        console.log(`نمایش جزئیات ${investmentName}`);
    }

    loadInvestments() {
        // Load user's investments from API or localStorage
        const savedInvestments = localStorage.getItem('finvest_investments');
        if (savedInvestments) {
            this.investments = JSON.parse(savedInvestments);
        }
    }

    saveInvestments() {
        localStorage.setItem('finvest_investments', JSON.stringify(this.investments));
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Animation on Scroll
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const animatedElements = document.querySelectorAll(
            '.investment-category, .stat-item, .card'
        );
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// Header Scroll Effect
class HeaderEffects {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 15, 35, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = 'rgba(15, 15, 35, 0.95)';
                header.style.boxShadow = 'none';
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.walletManager = new WalletManager();
    window.investmentManager = new InvestmentManager();
    new SmoothScroll();
    new ScrollAnimations();
    new HeaderEffects();

    // Add some CSS for notifications
    const notificationStyles = `
        <style>
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: rgba(15, 15, 35, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(139, 69, 255, 0.3);
            border-radius: 10px;
            padding: 1rem;
            z-index: 3000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
        }
        
        .notification-success {
            border-color: rgba(0, 255, 136, 0.3);
        }
        
        .notification-error {
            border-color: rgba(255, 107, 107, 0.3);
        }
        
        .notification-warning {
            border-color: rgba(255, 193, 7, 0.3);
        }
        
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #a0a0a0;
            cursor: pointer;
            font-size: 1.2rem;
            margin-left: 1rem;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', notificationStyles);
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WalletManager,
        InvestmentManager
    };
}
