#!/bin/bash

echo "🚀 Production Build Test Başlıyor..."
echo ""

cd /Users/mehmetsubasi/Desktop/Sigorta/frontend

echo "1️⃣ .env dosyası kontrolü..."
if [ -f .env ]; then
    echo "✅ .env dosyası mevcut"
else
    echo "❌ .env dosyası bulunamadı!"
    echo "👉 Önce .env dosyasını oluşturun"
    exit 1
fi

echo ""
echo "2️⃣ Dependencies kontrolü..."
if [ -d node_modules ]; then
    echo "✅ node_modules mevcut"
else
    echo "⚠️  node_modules yok, yükleniyor..."
    npm install
fi

echo ""
echo "3️⃣ Production build oluşturuluyor..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build başarılı!"
    echo ""
    echo "4️⃣ Build boyutu kontrol ediliyor..."
    du -sh build/
    echo ""
    echo "5️⃣ Local test için:"
    echo "   npx serve -s build"
    echo "   Sonra: http://localhost:3000"
else
    echo "❌ Build başarısız!"
    exit 1
fi

