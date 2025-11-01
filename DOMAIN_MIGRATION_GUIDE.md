# Domain Migration Guide: wgtnews.live → wellingtontimes.co.nz

## 🎉 CONGRATULATIONS on getting wellingtontimes.co.nz!

This .co.nz domain will **MASSIVELY** improve your SEO for New Zealand searches. Here's exactly what you need to do:

---

## ✅ What I've Updated in Your Code

1. **Homepage (index.html)**
   - Changed all URLs from wgtnews.live to wellingtontimes.co.nz
   - Updated meta tags, Open Graph, Twitter cards
   - Updated structured data (JSON-LD)
   - Updated footer to show new domain

2. **sitemap.xml**
   - All URLs now point to wellingtontimes.co.nz

3. **robots.txt**
   - Updated sitemap location to new domain

4. **.htaccess**
   - Updated for wellingtontimes.co.nz
   - Will redirect www to non-www version

5. **Legal Pages**
   - Updated canonical URLs to new domain

---

## 🚀 CRITICAL STEPS YOU MUST DO NOW

### Step 1: Point wellingtontimes.co.nz to Your Hosting
1. Log into your domain registrar where you bought wellingtontimes.co.nz
2. Find DNS settings
3. Add these records (copy from your wgtnews.live DNS):
   - **A Record**: Point `@` to your hosting IP
   - **A Record**: Point `www` to your hosting IP
   - Or if using CNAME, point to your hosting provider

### Step 2: Upload These Files to wellingtontimes.co.nz
Once DNS is pointing correctly:
1. Upload ALL your website files to wellingtontimes.co.nz hosting
2. Make sure the new `.htaccess` is uploaded
3. Test that `https://wellingtontimes.co.nz` works

### Step 3: Set Up 301 Redirects from wgtnews.live
**SUPER IMPORTANT** - You need to keep wgtnews.live and redirect it to the new domain:

1. On your **wgtnews.live hosting**, create/replace the `.htaccess` file with this content:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTP_HOST} ^wgtnews\.live$ [NC,OR]
   RewriteCond %{HTTP_HOST} ^www\.wgtnews\.live$ [NC]
   RewriteRule ^(.*)$ https://wellingtontimes.co.nz/$1 [R=301,L]
   ```
   
   I've saved this in `WGTNEWS_LIVE_HTACCESS.txt` - just copy it to `.htaccess` on wgtnews.live

### Step 4: Get SSL Certificates for BOTH Domains
- wellingtontimes.co.nz needs SSL (HTTPS)
- wgtnews.live needs SSL (for the redirect)
- Use Let's Encrypt (free) or your hosting provider

### Step 5: Submit to Google Search Console
1. **Add NEW property**: wellingtontimes.co.nz
   - Verify ownership
   - Submit sitemap: https://wellingtontimes.co.nz/sitemap.xml
   - Request indexing for homepage

2. **Keep OLD property**: wgtnews.live
   - In Google Search Console
   - Go to "Change of address" tool
   - Tell Google you moved to wellingtontimes.co.nz
   - This transfers SEO authority!

### Step 6: Update Google My Business (if you have it)
- Change website URL to wellingtontimes.co.nz

### Step 7: Update Social Media
- Facebook page: Update website URL
- Any other social profiles

### Step 8: Update Any Existing Links
- If you have any backlinks, contact those sites
- Ask them to update to wellingtontimes.co.nz

---

## ⏱️ Timeline & Expectations

### Immediate (Week 1)
- DNS propagation (24-48 hours)
- Google starts crawling new domain
- Old domain redirects working

### Short Term (Weeks 2-4)
- Google recognizes the move
- Start seeing wellingtontimes.co.nz in results
- wgtnews.live visitors auto-redirect

### Medium Term (Months 1-3)
- **HUGE SEO boost** from .co.nz domain
- Should rank higher than Canadian Wellington Times
- "Wellington Times" searches should show YOUR site
- Build more authority

### Long Term (Months 3-6)
- Establish as THE Wellington Times
- Top rankings for Wellington news
- Can eventually let wgtnews.live expire (keep for 1 year minimum)

---

## 🎯 Why This Will Work

### .co.nz Domain Benefits:
✅ Google trusts .co.nz for NZ searches  
✅ Users trust .co.nz more than .live  
✅ "Wellington Times" is IN the domain name  
✅ Shows you're a legitimate NZ organization  
✅ Much harder for competitors to outrank  

### Proper 301 Redirects:
✅ Preserves your existing SEO from wgtnews.live  
✅ Transfers "link juice" to new domain  
✅ No broken links  
✅ Users automatically go to right place  

---

## 📊 Monitoring Your Migration

### Week 1 Checklist:
- [ ] DNS pointing to new domain
- [ ] Website loads on wellingtontimes.co.nz
- [ ] SSL certificate installed
- [ ] Old domain redirects working
- [ ] Submitted to Google Search Console

### Week 2-4 Checklist:
- [ ] Google has crawled new site
- [ ] New domain appearing in search results
- [ ] Used "Change of address" in Search Console
- [ ] Social media updated

### Month 2-3 Checklist:
- [ ] Ranking for "Wellington Times"
- [ ] Ahead of Canadian site for NZ searches
- [ ] Building backlinks to new domain

---

## ⚠️ COMMON MISTAKES TO AVOID

❌ **DON'T** let wgtnews.live expire immediately  
✅ **DO** keep it for at least 1 year with redirects

❌ **DON'T** forget to redirect with 301 (permanent)  
✅ **DO** use 301 redirects, not 302 (temporary)

❌ **DON'T** change domain without Search Console  
✅ **DO** use "Change of address" tool in Search Console

❌ **DON'T** forget SSL on both domains  
✅ **DO** get SSL for both wellingtontimes.co.nz AND wgtnews.live

---

## 🆘 Need Help?

If something isn't working:
1. Check DNS with: https://www.whatsmydns.net/
2. Check redirects with: https://httpstatus.io/
3. Check SSL with: https://www.ssllabs.com/ssltest/

---

## 🎊 This Is a HUGE Win!

The .co.nz domain is exactly what you needed. Combined with the SEO optimizations I did earlier, you should see **significant** improvement in rankings within 4-8 weeks.

**Next priority**: Get that SSL certificate ASAP!
