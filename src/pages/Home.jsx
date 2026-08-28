import React from 'react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProductCard from '../components/product/ProductCard';

/**
 * Landing Page (Home Page).
 *
 * @param {Object} props
 * @param {Array} props.featuredProducts - List of 3 featured units
 * @param {Function} props.setCurrentPage - Route switching callback
 * @param {Function} props.onViewProduct - Callback to inspect product specs
 * @param {Function} props.onBookProduct - Callback to rent a unit
 */
export default function Home({
  featuredProducts = [],
  setCurrentPage,
  onViewProduct,
  onBookProduct
}) {
  const valueProps = [
    {
      title: 'Unit Prima & Terawat',
      desc: 'Seluruh unit forklift kami menjalani maintenance rutin berkala demi kelancaran proyek Anda.',
    },
    {
      title: 'Operator Ber-SIO',
      desc: 'Operator kami berpengalaman dan dibekali sertifikasi Surat Izin Operasi (SIO) dari Kemenaker.',
    },
    {
      title: 'Respon Cepat',
      desc: 'Kirim unit backup langsung ke lokasi jika terjadi kendala operasional guna meminimalisir downtime.',
    },
    {
      title: 'Tarif Flat Kompetitif',
      desc: 'Harga bersahabat tanpa biaya tersembunyi dengan penawaran resmi yang transparan.',
    }
  ];

  return (
    <div style={{ fontFamily: 'var(--sans)', color: '#374151' }}>
      
      {/* Hero Section */}
      <section style={{
        padding: '60px 20px',
        backgroundColor: '#f9fafb',
        borderBottom: '1px solid #e5e7eb',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Badge variant="primary" style={{ marginBottom: '16px', fontSize: '13px' }}>
            #1 Rental Forklift Terpercaya di Cikarang & Karawang
          </Badge>
          <h1 style={{
            fontSize: '44px',
            lineHeight: '1.2',
            fontWeight: '800',
            color: '#111827',
            margin: '0 0 16px 0',
            letterSpacing: '-1px'
          }}>
            Sewa Forklift Profesional <br />
            <span style={{ color: '#f97316' }}>Cepat, Aman & Terjangkau</span>
          </h1>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#4b5563',
            margin: '0 0 32px 0'
          }}>
            Menyediakan jasa sewa forklift harian, bulanan, dan tahunan kapasitas 3 s.d 15 Ton untuk area industri Jabodetabek, Cikarang, Karawang, dan sekitarnya.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setCurrentPage('product')}
            >
              Lihat Katalog Unit
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setCurrentPage('contact')}
            >
              Hubungi Sales Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Lookup Bar / Quick Search */}
      <section style={{
        maxWidth: '900px',
        margin: '-30px auto 40px',
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
        padding: '20px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          alignItems: 'end'
        }}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>Kebutuhan Beban</span>
            <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e5e7eb', outline: 'none', backgroundColor: '#f9fafb', color: '#374151' }}>
              <option>3 Ton (Standard)</option>
              <option>5 Ton (Medium)</option>
              <option>10 Ton (Heavy Duty)</option>
              <option>15 Ton (Heavy Duty)</option>
            </select>
          </div>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>Jenis Bahan Bakar</span>
            <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e5e7eb', outline: 'none', backgroundColor: '#f9fafb', color: '#374151' }}>
              <option>Diesel (Solar)</option>
              <option>Electric (Baterai)</option>
              <option>Gasoline & LPG</option>
            </select>
          </div>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>Durasi Sewa</span>
            <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e5e7eb', outline: 'none', backgroundColor: '#f9fafb', color: '#374151' }}>
              <option>Harian / Shift</option>
              <option>Sewa Bulanan</option>
              <option>Kontrak Tahunan</option>
            </select>
          </div>
          <Button 
            variant="primary" 
            style={{ width: '100%', height: '42px' }}
            onClick={() => setCurrentPage('product')}
          >
            Cari Unit Cocok
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' }}>
            Kenapa Memilih Forklift Pratama?
          </h2>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '15px' }}>
            Kami berkomitmen memberikan pelayanan logistik terbaik untuk kelancaran industri Anda.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{prop.icon}</div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: '#f97316' , justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                {prop.title}
              </h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#6b7280', lineHeight: '1.5',  }}>
                {prop.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 4px 0' }}>
              Unit Unggulan & Terpopuler
            </h2>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '15px' }}>
              Daftar armada forklift yang paling sering dipesan oleh kontraktor & pabrik.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCurrentPage('product')}
            style={{
              background: 'none',
              border: 'none',
              color: '#f97316',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            Lihat Semua Unit
            <span>→</span>
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {featuredProducts.slice(0, 3).map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onViewDetail={onViewProduct}
              onBook={onBookProduct}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section style={{
        maxWidth: '1000px',
        margin: '60px auto 40px',
        padding: '40px 20px',
        borderRadius: '8px',
        backgroundColor: '#1f2937',
        color: '#ffffff',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 12px 0' }}>
            Butuh Penawaran Harga Sewa Resmi?
          </h2>
          <p style={{ fontSize: '15px', color: '#9ca3af', margin: '0 0 24px 0', lineHeight: '1.6' }}>
            Hubungi tim estimasi logistik kami. Kirim spesifikasi pekerjaan Anda dan dapatkan surat penawaran harga (quotation) resmi dalam hitungan menit.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                const message = encodeURIComponent('Halo, saya ingin berkonsultasi mengenai kebutuhan persewaan forklift di proyek saya.');
                window.open(`https://wa.me/6281298765432?text=${message}`, '_blank');
              }}
            >
              Hubungi WhatsApp Sales
            </Button>
            <Button
              variant="outline"
              size="md"
              style={{ color: '#ffffff', borderColor: '#ffffff' }}
              onClick={() => setCurrentPage('contact')}
            >
              Isi Formulir Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
