# Eyakub Shop — Free GitHub Pages E-commerce Starter

এই project টি আপনার দেওয়া reference theme অনুযায়ী **Eyakub Shop** নামে তৈরি করা হয়েছে। এতে 300টি demo catalog item আছে: **150 shoes + 150 bags**।

## Included

- Responsive Daraz-style inspired green/dark theme
- Home hero, category navigation, Flash Sale, Popular Products
- Search, category filter, sorting
- Product details modal + related products
- Cart + quantity control
- Checkout form: নাম, ফোন, বিকল্প ফোন, বিভাগ, জেলা, উপজেলা/থানা, পোস্ট কোড, সম্পূর্ণ ঠিকানা, payment, note
- WhatsApp order link: `966567225245`
- Facebook Page link
- 300 demo catalog entries: 150 shoes + 150 bags
- Admin panel: add/edit/delete products
- Admin product image upload (`Choose File`/Gallery)
- Product fields: category, SKU, price, old price, stock, color, size, rating, sold count, description, featured, flash sale
- Orders saved locally in the admin browser
- No paid hosting required for the static version

## Important limitation

GitHub Pages is **static hosting**. এই ZIP-এর Admin Panel localStorage ব্যবহার করে। তাই এটি demo/Starter হিসেবে সঙ্গে সঙ্গে চলবে, কিন্তু:

1. Customer-এর browser-এর product change আপনার Admin browser-এ sync হবে না।
2. Customer device থেকে তৈরি order Admin Panel-এ automatically পৌঁছাবে না।
3. Customer order WhatsApp-এ সরাসরি পাঠানো হবে, তাই বাস্তবে order নেওয়া সম্ভব।
4. `admin.html`-এর username/password client-side code-এ আছে; এটি real secure authentication নয়।

সত্যিকারের multi-device ecommerce করতে Supabase/Firebase database + authentication + storage যুক্ত করতে হবে।

## Default Admin Login

- Username: `admin`
- Password: `Eyakub@12345`

**Publish করার আগে `admin.js`-এ USER এবং PASS পরিবর্তন করুন।**

## GitHub Pages-এ এখনই চালানোর সবচেয়ে সহজ পদ্ধতি

### Option A — আপনার existing GitHub repository

1. ZIP extract করুন।
2. GitHub repository-তে সব files upload করুন।
3. পুরনো `index.html` থাকলে এই project-এর `index.html` দিয়ে replace করুন।
4. নিশ্চিত করুন `products.js`, `app.js`, `style.css`, `admin.html`, `admin.js`, `admin.css` এবং `assets/products/` folder upload হয়েছে।
5. GitHub → **Settings → Pages**
6. **Deploy from a branch**
7. Branch: `main` এবং folder: `/ (root)`
8. Save করুন।
9. কয়েক মিনিট পর আপনার GitHub Pages URL খুলুন।

### Option B — Git command

আপনার repository clone করার পরে:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

তারপর এই ZIP extract করে সব files repository folder-এ রাখুন এবং:

```bash
git add .
git commit -m "Launch Eyakub Shop ecommerce website"
git push origin main
```

তারপর GitHub → Settings → Pages থেকে `main / root` select করুন।

## Admin Panel

Website:
```text
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

Admin:
```text
https://YOUR-USERNAME.github.io/YOUR-REPO/admin.html
```

Admin page website-এর public navigation-এ দেখানো হয়নি। তবে URL জানলে কেউ page দেখতে পারে, তাই real business-এর জন্য server-side authentication ব্যবহার করুন।

## Product image upload

Admin → Products → নতুন পণ্য/Edit → `Product Image` → Choose File → Gallery থেকে image select → Save Product।

Uploaded image browser localStorage-এ রাখা হয়। বড় ছবি বেশি upload করলে browser storage limit দ্রুত পূর্ণ হতে পারে।

## Brand / copyright note

এই starter catalog-এ generic Eyakub product names এবং generated placeholder product images দেওয়া হয়েছে। Nike/Adidas ইত্যাদি brand-এর official product image/name ব্যবহার করতে হলে আপনার বৈধ ব্যবহারাধিকার থাকা প্রয়োজন।

## Recommended next upgrade

Real production version-এর জন্য:
- Supabase Auth
- Supabase Postgres database
- Supabase Storage
- Server-side admin protection
- Persistent orders
- Order status management
- Customer accounts
- Coupon system
- Delivery charge by district
- bKash/Nagad/payment gateway
- Product image CDN
- SEO + sitemap

এই version-টি আগে GitHub Pages-এ চালিয়ে UI/flow পরীক্ষা করার জন্য প্রস্তুত।
