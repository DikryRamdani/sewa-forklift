import React, { useState } from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

/**
 * Lead generation and inquiry contact form.
 *
 * @param {Object} props
 * @param {Function} props.onSubmitSuccess - Callback to trigger toast/alert on submit
 */
export default function ContactForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    capacity: '',
    duration: '',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Nama lengkap wajib diisi';
    if (!formData.phone) newErrors.phone = 'Nomor telepon/WhatsApp wajib diisi';
    if (!formData.location) newErrors.location = 'Lokasi proyek wajib diisi';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate API request or direct WA redirect
    setTimeout(() => {
      setLoading(false);
      
      // Redirect to pre-filled WhatsApp
      const text = `Halo CS Forklift Pratama,\n\nSaya ingin menanyakan sewa forklift dengan detail:\n- Nama: ${formData.fullName}\n- Perusahaan: ${formData.company || '-'}\n- No. HP: ${formData.phone}\n- Kapasitas: ${formData.capacity || '-'}\n- Durasi: ${formData.duration || '-'}\n- Lokasi: ${formData.location}\n- Catatan: ${formData.message || '-'}`;
      const waUrl = `https://wa.me/6281298765432?text=${encodeURIComponent(text)}`;
      
      // Reset form
      setFormData({
        fullName: '',
        company: '',
        phone: '',
        capacity: '',
        duration: '',
        location: '',
        message: ''
      });

      if (onSubmitSuccess) {
        onSubmitSuccess('Inquiry sewa berhasil dikirim! Mengalihkan ke WhatsApp...');
      }

      window.open(waUrl, '_blank');
    }, 1000);
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
      textAlign: 'left'
    }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: '#111827' }}>
        Kirim Permintaan Sewa
      </h3>
      <p style={{ margin: '0 0 20px 0', fontSize: '13.5px', color: '#6b7280', lineHeight: '1.5' }}>
        Isi form berikut untuk mendapatkan penawaran resmi. Tim kami akan merespon dalam waktu maksimal 15 menit.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <Input
            label="Nama Lengkap"
            placeholder="Masukkan nama Anda..."
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            error={errors.fullName}
            required
          />
          <Input
            label="Nama Perusahaan (Optional)"
            placeholder="Contoh: PT. Maju Jaya"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        <Input
          label="No. WhatsApp / HP"
          placeholder="Contoh: 08123456789"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          error={errors.phone}
          required
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <Select
            label="Kapasitas Unit"
            placeholder="-- Pilih Kapasitas --"
            options={[
              { value: '3 Ton', label: '3 Ton (Standard)' },
              { value: '5 Ton', label: '5 Ton (Medium)' },
              { value: '10 Ton', label: '10 Ton (Heavy Duty)' },
              { value: '15 Ton', label: '15 Ton (Heavy Duty)' }
            ]}
            value={formData.capacity}
            onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
          />
          <Select
            label="Durasi Rencana Sewa"
            placeholder="-- Pilih Durasi --"
            options={['Harian / Shift', 'Mingguan', 'Bulanan', 'Kontrak Tahunan']}
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          />
        </div>

        <Input
          label="Lokasi Pengiriman Proyek"
          placeholder="Contoh: MM2100 Cikarang / KIIC Karawang"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          error={errors.location}
          required
        />

        <div className="ui-field-group">
          <label className="ui-label">Catatan Tambahan (Spesifikasi Kerja / Rincian Kargo)</label>
          <textarea
            rows="3"
            placeholder="Sebutkan rincian pengerjaan, tinggi tiang angkat yang dibutuhkan, dll..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 14px',
              fontSize: '15px',
              fontFamily: 'var(--sans)',
              color: 'var(--text-h)',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              outline: 'none',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>

        <Button
          variant="primary"
          size="lg"
          type="submit"
          loading={loading}
          style={{ width: '100%', marginTop: '16px' }}
        >
          Kirim Inquiry Ke WhatsApp
        </Button>
      </form>
    </div>
  );
}