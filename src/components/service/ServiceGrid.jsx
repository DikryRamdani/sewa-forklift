import React from 'react';
import ServiceCard from './ServiceCard';

/**
 * Grid displaying list of forklift rental services.
 *
 * @param {Object} props
 * @param {Function} props.onSelectService - Callback when user chooses a service
 */
export default function ServiceGrid({ onSelectService }) {
  const services = [
    {
      id: 'daily',
      title: 'Sewa Harian / Shift',
      desc: 'Solusi persewaan jangka pendek untuk kebutuhan bongkar muat kargo kontainer, pemindahan mesin ringan, atau proyek singkat harian.',
      icon: 'daily',
      features: [
        'Sudah termasuk Operator ber-SIO',
        'Sudah termasuk bahan bakar solar',
        'Durasi minimal 1 Shift (8 jam kerja)',
        'Respon cepat & pengiriman unit instan'
      ],
      ctaText: 'Pesan Sewa Harian'
    },
    {
      id: 'monthly',
      title: 'Sewa Bulanan (Lepas Kunci / Operator)',
      desc: 'Ideal untuk industri pabrik, logistik pergudangan, atau proyek konstruksi berskala menengah yang membutuhkan unit secara konsisten.',
      icon: 'monthly',
      features: [
        'Pilihan lepas kunci atau dengan operator',
        'Layanan maintenance bulanan gratis',
        'Unit backup langsung jika terjadi kendala',
        'Tarif lebih hemat dibanding harian'
      ],
      ctaText: 'Pesan Sewa Bulanan'
    },
    {
      id: 'yearly',
      title: 'Kontrak Sewa Tahunan',
      desc: 'Kemitraan jangka panjang untuk perusahaan manufaktur atau pusat logistik. Kami menyediakan unit fresh/baru sesuai kebutuhan spesifik Anda.',
      icon: 'yearly',
      features: [
        'Penyediaan unit baru dari Toyota/Mitsubishi',
        'Dedicated maintenance team stand-by',
        'Harga flat termurah khusus kontrak',
        'Laporan inspeksi rutin bulanan'
      ],
      ctaText: 'Hubungi Kontrak Tahunan'
    },
    {
      id: 'relocation',
      title: 'Jasa Relokasi Mesin Pabrik',
      desc: 'Pemindahan mesin-mesin industri berat, setting pabrik baru, atau relokasi gudang menggunakan forklift heavy-duty dan rigging team ahli.',
      icon: 'relocation',
      features: [
        'Unit heavy duty khusus (10 - 15 Ton)',
        'Team rigger & operator berpengalaman',
        'Survei lokasi gratis sebelum pengerjaan',
        'Sertifikat jaminan kelayakan kerja'
      ],
      ctaText: 'Konsultasi Relokasi'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      margin: '32px 0'
    }}>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onSelectService={onSelectService}
        />
      ))}
    </div>
  );
}
