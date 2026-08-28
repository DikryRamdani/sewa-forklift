import React, { useState } from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingSidebar from './components/layout/FloatingSidebar';
import WhatsappButton from './components/chat/WhatsappButton';
import TawkChat from './components/chat/TawkChat';

// UI components
import Modal from './components/ui/Modal';
import Toast from './components/ui/Toast';
import Input from './components/ui/Input';
import Select from './components/ui/Select';
import Button from './components/ui/Button';

// Page components
import Home from './pages/Home';
import Product from './pages/Product';
import Service from './pages/Service';
import Contact from './pages/Contact';

// Standard Mock Data for Forklift Units
const productsData = [
  {
    id: 1,
    name: 'Forklift Toyota 3 Ton Diesel',
    brand: 'Toyota',
    capacity: 3,
    liftHeight: 3,
    fuelType: 'Diesel (Solar)',
    status: 'Tersedia',
    priceDay: 'Rp 1.200.000',
    priceMonth: 'Rp 8.500.000',
    desc: 'Unit forklift Toyota 3 Ton Diesel dengan mesin legendaris 1DZ-II yang sangat tangguh, efisien bahan bakar, dan memiliki kestablian angkat yang tinggi. Cocok untuk loading kargo kontainer outdoor.'
  },
  {
    id: 2,
    name: 'Forklift Mitsubishi 5 Ton Diesel',
    brand: 'Mitsubishi',
    capacity: 5,
    liftHeight: 4,
    fuelType: 'Diesel (Solar)',
    status: 'Tersedia',
    priceDay: 'Rp 1.800.000',
    priceMonth: 'Rp 12.000.000',
    desc: 'Forklift Mitsubishi 5 Ton Diesel dengan mesin S6S yang kuat dan andal untuk logistik pergudangan baja, semen, kertas roll, dan kontainer berbeban menengah.'
  },
  {
    id: 3,
    name: 'Forklift Toyota 3 Ton Electric',
    brand: 'Toyota',
    capacity: 3,
    liftHeight: 3,
    fuelType: 'Electric (Baterai)',
    status: 'Tersedia',
    priceDay: 'Rp 1.500.000',
    priceMonth: 'Rp 10.500.000',
    desc: 'Forklift Toyota 3 Ton Electric bertenaga AC motor yang ramah lingkungan, bebas emisi gas buang, dan tidak bising. Sangat direkomendasikan untuk industri makanan (F&B) dan farmasi indoor.'
  },
  {
    id: 4,
    name: 'Forklift CAT 10 Ton Diesel',
    brand: 'Caterpillar',
    capacity: 10,
    liftHeight: 5,
    fuelType: 'Diesel (Solar)',
    status: 'Disewa',
    priceDay: 'Rp 3.500.000',
    priceMonth: 'Rp 22.000.000',
    desc: 'Caterpillar 10 Ton heavy duty forklift dirancang untuk mengangkat beban berat ekstrim seperti gulungan kabel, mesin pabrik besar, pelat baja tebal di depo kontainer atau konstruksi.'
  },
  {
    id: 5,
    name: 'Forklift Komatsu 15 Ton Diesel',
    brand: 'Komatsu',
    capacity: 15,
    liftHeight: 5,
    fuelType: 'Diesel (Solar)',
    status: 'Tersedia',
    priceDay: 'Rp 5.000.000',
    priceMonth: 'Rp 32.000.000',
    desc: 'Komatsu FD150 merupakan unit forklift kelas berat (15 Ton) yang handal dengan daya cengkram maksimal, suspensi tangguh, dan sangat stabil untuk relokasi pabrik dan industri peleburan logam.'
  },
  {
    id: 6,
    name: 'Forklift Mitsubishi 3.5 Ton Gasoline/LPG',
    brand: 'Mitsubishi',
    capacity: 3.5,
    liftHeight: 3,
    fuelType: 'Gasoline & LPG',
    status: 'Tersedia',
    priceDay: 'Rp 1.400.000',
    priceMonth: 'Rp 9.500.000',
    desc: 'Unit dwi-bahan bakar (bensin/LPG) yang bersih, minim emisi dibanding diesel konvensional, namun menghasilkan torsi tinggi untuk penataan logistik semi-indoor pabrik kimia.'
  }
];

function App() {
  // Navigation / Route state
  const [currentPage, setCurrentPage] = useState('home');

  // Specs Sub-view State (Allows clicking spec on home, then jumping straight to details in product list)
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingUnit, setBookingUnit] = useState(null);

  // Global Toast State
  const [toast, setToast] = useState({ isOpen: false, message: '', type: 'success' });

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    duration: 'Bulanan',
    location: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [bookingLoading, setBookingLoading] = useState(false);

  const triggerToast = (message, type = 'success') => {
    setToast({ isOpen: true, message, type });
  };

  const handleOpenBookingModal = (unit) => {
    setBookingUnit(unit);
    setIsBookingModalOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!bookingForm.name) errors.name = 'Nama lengkap / perusahaan wajib diisi';
    if (!bookingForm.phone) errors.phone = 'Nomor WhatsApp aktif wajib diisi';
    if (!bookingForm.location) errors.location = 'Lokasi proyek pengiriman wajib diisi';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setBookingLoading(true);

    setTimeout(() => {
      setBookingLoading(false);
      setIsBookingModalOpen(false);
      
      const message = `Halo CS Forklift Pratama,\n\nSaya ingin memesan sewa forklift:\n- Unit: ${bookingUnit.name}\n- Pemesan: ${bookingForm.name}\n- WhatsApp: ${bookingForm.phone}\n- Durasi: ${bookingForm.duration}\n- Lokasi: ${bookingForm.location}`;
      const waUrl = `https://wa.me/6281298765432?text=${encodeURIComponent(message)}`;
      
      // Reset Booking form
      setBookingForm({ name: '', phone: '', duration: 'Bulanan', location: '' });

      triggerToast('Pesanan sewa diproses! Mengalihkan ke WhatsApp...', 'success');
      
      window.open(waUrl, '_blank');
    }, 800);
  };

  // Navigates and resets sub-details view
  const handleNavigatePage = (pageId) => {
    setSelectedProduct(null);
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  // Renders correct active page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'product':
        return (
          <Product
            products={productsData}
            onBookProduct={handleOpenBookingModal}
          />
        );
      case 'service':
        return <Service setCurrentPage={handleNavigatePage} />;
      case 'contact':
        return <Contact triggerToast={triggerToast} />;
      case 'home':
      default:
        return (
          <Home
            featuredProducts={productsData}
            setCurrentPage={handleNavigatePage}
            onViewProduct={(prod) => {
              // Custom hook to set active specs detail view inside Product.jsx
              setSelectedProduct(prod);
              setCurrentPage('product');
              window.scrollTo(0, 0);
            }}
            onBookProduct={handleOpenBookingModal}
          />
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Top Contact Bar */}
      <Header />

      {/* Main Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={handleNavigatePage} />

      {/* Core Dynamic Content */}
      <div style={{ flexGrow: 1 }}>
        {/* Pass selectedProduct inline override to Catalog if navigating from Home featured links */}
        {currentPage === 'product' && selectedProduct ? (
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 20px' }}>
            <Product
              products={productsData}
              onBookProduct={handleOpenBookingModal}
              // Pass custom initial details override
              initialSelectedDetail={selectedProduct}
            />
          </div>
        ) : (
          renderCurrentPage()
        )}
      </div>

      {/* Footer Directory */}
      <Footer setCurrentPage={handleNavigatePage} />

      {/* Floating Helpers */}
      <FloatingSidebar />
      <WhatsappButton />
      <TawkChat />

      {/* Quick Booking Modal */}
      <Modal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={bookingUnit ? `Sewa ${bookingUnit.name}` : 'Pemesanan Unit Forklift'}
        size="md"
      >
        {bookingUnit && (
          <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ 
              backgroundColor: '#f9fafb', 
              padding: '12px', 
              borderRadius: '6px', 
              border: '1px solid #e5e7eb',
              fontSize: '13.5px',
              color: '#4b5563',
              marginBottom: '10px'
            }}>
              <strong>Unit Pilihan:</strong> {bookingUnit.name} <br />
              <strong>Kapasitas:</strong> {bookingUnit.capacity} Ton • <strong>Bahan Bakar:</strong> {bookingUnit.fuelType}
            </div>

            <Input
              label="Nama Pemesan / Perusahaan"
              placeholder="Contoh: Budi Santoso / PT. Logistik"
              value={bookingForm.name}
              onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
              error={formErrors.name}
              required
            />

            <Input
              label="Nomor WhatsApp"
              placeholder="Contoh: 08123456789"
              value={bookingForm.phone}
              onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
              error={formErrors.phone}
              required
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <Select
                label="Durasi Rencana Sewa"
                options={['Harian / Shift', 'Mingguan', 'Bulanan', 'Kontrak Tahunan']}
                value={bookingForm.duration}
                onChange={(e) => setBookingForm({ ...bookingForm, duration: e.target.value })}
              />
              <Input
                label="Lokasi Proyek"
                placeholder="Contoh: Cikarang Barat"
                value={bookingForm.location}
                onChange={(e) => setBookingForm({ ...bookingForm, location: e.target.value })}
                error={formErrors.location}
                required
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
              <Button variant="ghost" onClick={() => setIsBookingModalOpen(false)}>
                Batal
              </Button>
              <Button variant="primary" type="submit" loading={bookingLoading}>
                Konfirmasi Via WhatsApp
              </Button>
            </div>
          </form>
        )}
      </Modal>

      {/* Global Alert Notification */}
      <Toast
        isOpen={toast.isOpen}
        message={toast.message}
        type={toast.type}
        duration={4500}
        onClose={() => setToast((t) => ({ ...t, isOpen: false }))}
      />
    </div>
  );
}

export default App;
