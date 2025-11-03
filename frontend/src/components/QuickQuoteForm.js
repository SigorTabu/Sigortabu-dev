import React, { useState } from 'react';

const insuranceTypes = [
  { value: 'health', label: 'Sağlık Sigortası' },
  { value: 'car', label: 'Araç Sigortası' },
  { value: 'home', label: 'Konut Sigortası' },
  { value: 'travel', label: 'Seyahat Sigortası' }
];

function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    insuranceType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form gönderim işlemleri yapılacak
    console.log('Form Gönderildi:', formData);
    // Backend'e form verilerini gönderme işlemi eklenecek
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
            Hızlı Teklif Al
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Ad Soyad
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Adınızı girin"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-posta Adresi
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="E-posta adresinizi girin"
              />
            </div>
            <div>
              <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700">
                Sigorta Türü
              </label>
              <select
                name="insuranceType"
                id="insuranceType"
                required
                value={formData.insuranceType}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              >
                <option value="">Sigorta türü seçin</option>
                {insuranceTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition duration-300 font-semibold"
              >
                Teklif İste
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuickQuoteForm;
