# DOSYA ADI DEĞİŞİKLİKLERİ

Bu dosyaları public klasöründe yeniden adlandırın:

## Değiştirilmesi Gerekenler:

1. `hazelnut (1).png` → `hazelnut-1.png`
2. `fındık_dali.png` → `findik-dali.png`  
3. `kuru_yaprak.jpg` → `kuru-yaprak.jpg`

## Terminal Komutları:

```bash
cd public
mv "hazelnut (1).png" "hazelnut-1.png"
mv "fındık_dali.png" "findik-dali.png"
mv "kuru_yaprak.jpg" "kuru-yaprak.jpg"
```

## Git'e Gönderme:

```bash
git add .
git commit -m "Fix file names for Vercel deployment"
git push
```

Vercel otomatik olarak yeniden deploy edecek!