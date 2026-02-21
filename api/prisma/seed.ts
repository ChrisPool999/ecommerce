import { prisma } from '../src/prisma.ts'

async function main() {
    const userAdmin = await prisma.user.create({
      data: {
        firstName: "Chris",
        lastName: "Pool",
        email: "admin@example.com",
        passwordHash: "placeholder_data_123",
        phoneNumber: "1-559-453-9648",
        role: "ADMIN",
      }
    });

    const userCustomer = await prisma.user.create({
      data: {
        firstName: "Yashwant",
        lastName: "Mahal",
        email: "YashwantMahal@exmaple.com",
        passwordHash: "placeholder_data_124",
        phoneNumber: "1-559-555-555",
        role: "CUSTOMER",
      }
    });

    const product1 = await prisma.product.create({
      data: {
        name: "BYOMA Hydrating Milky Toner - Dewy, Ultra Hydrating Toner for Face - Soothes Skin, Locks in Moisture, Reduces Redness - Barrier Repair - 5.07 fl oz",
        brand: "byoma",
        description: "HYDRATE + SOOTHE: This ultra-soothing toner works to quench dry skin while supporting sensitive + sensitized skin barriers. Skin is instantly transformed, looking + feeling soft, supple, dewy and radiant all day long. ALL-DAY DEW: Polyglutamic Acid + Cica help lock in moisture across multiple layers of the skin + reduce the appearance of redness from dry skin.\nBARRIER-BOOSTING: BYOMA’s carefully researched Barrier Lipid Complex utilises a concentration of ceramides + skin identical lipids in an oil-based formula for the same results you know + love from BYOMA’s Tri-Ceramide Complex. THE ULTIMATE SKIN-COMPATIBLE SOLUTION: Dermatologist tested + approved skin care, soap-free, non-comedogenic, alcohol + fragrance-free, vegan + cruelty free. Suitable for all skin types. BACKED BY SCIENCE: Efficacy is the new luxury. That's why BYOMA delivers clinically-proven formulas backed by science + powered by actives. When we stop stripping our skin + start boosting our barrier, we find the key to balanced, brighter skin.",
        cost: "14.99",
        stock: 252,
        weight: 2.3,
        rating: 4.7,
        reviews: 3493
      }
    })

    const product2 = await prisma.product.create({
      data: {
        name: "CeraVe Foaming Facial Cleanser, Daily Face Wash for Oily Skin, Hyaluronic Acid + Ceramides + Niacinamide, Fragrance Free & Paraben Free, Non-Drying Oil Control Face Wash, 16 Fluid Ounces",
        brand: "CeraVe",
        description: "FOAMING FACE WASH ] Dispenses as a clear gel cleanser and transforms into a foam as you lather. Cleanses without leaving skin feeling tight, dry, or stripped [NON- DRYING FACE CLEANSER] Fragrance-free, paraben free, non-comedogenic, non-drying, and non-irritating. Gently refreshes and effectively removes excess oil, dirt, and makeup [ MULTI-USE SKIN CARE ] Skin Cleanser for face and/or body and can be used as a hand wash. Suitable for daily cleansing morning (AM) and night (PM) for normal to oily skin [ 3 ESSENTIAL CERAMIDES ] Ceramides are found naturally in the skin and make up 50% of the lipids in the skin barrier. All CeraVe products, formulated with three essential ceramides (1, 3, 6-II)to help maintain the skin’s natural barrier. [ DEVELOPED WITH DERMATOLOGISTS & #1 DERMATOLOGIST RECOMMENDED SKINCARE BRAND ] CeraVe Skincare is developed with dermatologists and has products suitable for dry skin, sensitive skin, oily skin, acne-prone, and more.",
        cost: "18.99",
        stock: 4252,
        weight: 2.4,
        rating: 4.7,
        reviews: 1138
      }
    })

    const product3 = await prisma.product.create({
      data: {
        name: "CeraVe Hydrating Facial Cleanser, Moisturizing Face Wash For Dry Skin, Hyaluronic Acid + Ceramides + Glycerin, Hydrating Cleanser For Normal To Dry Skin, National Eczema Association Certified",
        brand: "CeraVe",
        description: "HYDRATING FACE WASH ] Daily face wash with hyaluronic acid, ceramides, and glycerin to help hydrate skin without stripping moisture. Removes face makeup, dirt, and excess oil, provides 24-hour hydration and leaves a moisturized, non-greasy feel. [ ECZEMA FACE WASH ] Non-foaming cleanser for dry skin with a lotion-like consistency feels smooth as it cleanses, even on sensitive, dry skin. Fragrance-free, paraben-free, non-comedogenic and non-drying. Certified by the National Eczema Association [ MULTI-USE GENTLE CLEANSER ] Cream cleanser for face and/or body and can be used as a hand wash. Suitable for daily cleansing morning (AM) and night (PM) for normal to dry skin. Skin care for dry skin. [ 3 ESSENTIAL CERAMIDES ] Ceramides are found naturally in the skin and make up 50% of the lipids in the skin barrier. All CeraVe products, formulated with three essential ceramides (1, 3, 6-II)to help maintain the skin’s natural barrier. [ DEVELOPED WITH DERMATOLOGISTS & #1 DERMATOLOGIST RECOMMENDED SKINCARE BRAND ] CeraVe Skincare is developed with dermatologists and has products suitable for dry skin, sensitive skin, oily skin, acne-prone, and more.",
        cost: "18.99",
        stock: 2485,
        weight: 2.7,
        rating: 4.6,
        reviews: 517
      }
    })

    const product4 = await prisma.product.create({
      data: {
        name: "Beauty of Joseon Red Bean Water Gel Hydrating Peptide Hydro Boost Moisturizer for Acne Prone Dry Skin, Korean Skin Care for Men and Women, 100ml, 3.38 fl.oz",
        brand: "Beauty of Joseon",
        description: "Strong Moisturizer: Immerse your skin in the luxurious hydration it craves. The Beauty of Joseon Red Bean Water Gel stands as a formidable moisturizer, providing an intense boost of hydration that lasts. Deep Hydration for All Skin Types: Tailored for dry, sensitive, tanned, and irritated skin, this gel is a hydrating haven. Pamper your skin with a formula that understands its unique needs, leaving it feeling nourished and revitalized. Minimizes Oiliness: Say farewell to unwanted oiliness as this gel features the extraordinary benefits of 'red bean,' renowned for its abundance of saponins. This natural ingredient helps absorb sebum, ensuring your skin stays beautifully matte and balanced. Wrinkle-Improving Peptides: Infused with 'peptides,' this skincare marvel goes beyond hydration to target wrinkles. Revel in the age-defying properties of peptides as they work their magic, leaving your skin looking smoother and more youthful. Patch Test: Please do a patch test before actually using the product to prevent any reactions to your skin.",
        cost: "18.00",
        stock: 381,
        weight: 2.1,
        rating: 4.9,
        reviews: 5701
      }
    })

    const product5 = await prisma.product.create({
      data: {
        name: "Haruharu Wonder Black Rice Daily Sunscreen 1.69fl.oz - Velvet Finish | No White Cast | Moisture Airyfit | Hydrating | Moisturizing | Korean Skin Care | Vegan | Clean Beauty", 
        brand: "Haruharu",
        description: "AIRLESS PROTECTION: Shield your product from oxidation with airless packaging, ensuring freshness and efficacy every time you use it! ANTIOXIDANT BLISS: Infused with Rice Bran Oil and Black Rice, our formula provides a powerful antioxidant effect for radiant, moisturised skin. TWO FINGERS, FULL PROTECTION: Follow the 2-finger rule for perfect coverage on face, neck, and ears—no spots missed! SKIN-FRIENDLY ELEGANCE: Revel in a non-greasy formula that offers your skin the care it deserves. VEGAN-FRIENDLY ASSURANCE: Committed to ethical choices, we are vegan-friendly, cruelty-free, ensuring a responsible skincare regimen.",
        cost: "14.29",
        stock: 504,
        weight: 2.9,
        rating: 4.5,
        reviews: 2184
      }
    })

    const product6 = await prisma.product.create({
      data: {
        name: "medicube Collagen Jelly Cream- Niacinamide & Freeze-Dried Hydrolyzed Collagen - Boosts skin's barrier hydration and gives 24h Glow & Lifted Look - Korean skincare (1.69 Fl Oz (Pack of 1))",
        brand: "medicube",
        description: "EVEN OUT UNEVEN SKIN TONE – Unlock the power of a transparent collagen jelly cream designed to specifically target and correct uneven skin tone. Reveal a more harmonious, luminous complexion for a naturally smooth and radiant look. GLASS GLOW SKIN - Discover a transparent collagen jelly cream offering anti-aging benefits. Enhance facial contours, promote firmness, and achieve a polished, glowing complexion effortlessly. PRODUCT BENEFITS - Instantly experience tightened, radiant skin with the 'Korean Glass Glow' effect post-application. Dermatologist-tested, low-irritating, silicone-free, with a skin-friendly pH of 5.69–7.69 and no artificial colorants. KEY INGREDIENTS - Hydrolyzed Collagen: Smaller segments enable better skin absorption, preserving firmness and elasticity, and Niacinamide (Vitamin B3) enhances the skin's barrier function and boosts hydration for improved texture. arrier function and boosts hydration for improved texture. DERMATOLOGIST TESTED - Skin elasticity 1.793% improved and Sagging skin 2.488% improved after 24hr. HOW TO APPLY - Apply a quarter amount of jelly cream morning and evening to face and décolletage (neck & chest), after applying targeted serums that address your individual skin concerns.",
        cost: "14.90",
        stock: 842,
        weight: 2.1,
        rating: 4.4,
        reviews: 20293
      }
    })

    const product7 = await prisma.product.create({
      data: {
        name: "medicube PDRN Pink Peptide Serum with Salmon DNA | Pink Glow Serum with Peptides & Niacinamide for Hydration & Firm-Looking Skin | Uneven Tone Care | Korean Skincare, 1.01 fl. Oz",
        brand: "medicube",
        description: "KOREAN GLASS GLOW SKIN: This pink glow serum targets dull skin and boosts elasticity, helping to prevent future breakouts while enhancing the skin's glow and resilience. SALMON DNA PDRN: Salmon DNA PDRN is a form of DNA extracted from salmon. It stimulates skin renewal and repair, giving your skin a clearer, more luminous complexion. It promotes a more even skin tone and a natural glow by improving skin health. KEY INGREDIENTS: Containing Salmon DNA PDRN, five types of peptide complex, niacinamide, adenosine, and Ocimum Sanctum (Holy Basil) leaf extract, this formula provides effective care for uneven skin tone and elasticity. LONG LASTING HYDRATION: Strengthens the skin’s barrier function, enhancing its resistance to external aggressors and pollutants. It provides deep hydration and smooths skin texture. MILD FORMULA LIGHT TEXTURE: The formula is mild and gentle for all skin types—gentle enough to be used daily. Dermatologist-tested, low-irritating, and free from gluten and artificial colors.",
        cost: "21.80",
        stock: 1084,
        weight: 1.7,
        rating: 4.6,
        reviews: 11938
      }
    })

    const product8 = await prisma.product.create({
      data: {
        name: "Anua Heartleaf Quercetinol Pore Deep Cleansing Foam, Face wash for Pore Refining Cleanser, Hydrating Daily Facial Cleanser For Double Cleansing, Gentle Foaming with BHA, Korean Skincare (5.07 fl.oz.)",
        brand: "ANUA",
        description: "[Deep Cleansing] A Gentle face wash that effectively removes impurities and excess sebum* with non-stripping finish. Formulated with Anti-Sebum P to cleanse deep into pores, plus Hyaluronic Acid and a soft bubble texture for a rich, nice lather. [Heartleaf Foam] Fine, dense foam infused with Heartleaf gently cleanses without irritation. Recommended for oily and combination skin looking for a balanced, everyday facial cleanser. [Soothing Care] Contains Quercetinol extracted from Heartleaf, known for its soothing ingredients. Helps calm stressed skin and maintain a refreshed feel. [Gentle Exfoliation] It provides gentle exfoliating care. Leaves skin feeling hydrated instead of dry, while helping improve skin texture and smoothness around the nose and cheeks. [Double Cleansing] Effectively washes away base makeup, making it ideal for the first step of double cleansing routine. Gentle and easy to use for daily AM & PM routines.",
        cost: "13.00",
        stock: 471,
        weight: 3.2,
        rating: 4.6,
        reviews: 16857
      }
    })

    const product9 = await prisma.product.create({
      data: {
        name: "Beauty of Joseon Dynasty Cream Hydrating Face Moisturizer for Dry, Sensitive Skin, Korean Skincare for Men and Women 50ml, 1.69 fl.oz.",
        brand: "Beauty of Joseon",
        description: "Long Lasting Hydration, All Day Long: With a unique blend of 2% niacinamide and 2% squalane, Dynasty Cream expertly maintains your skin's oil-moisture balance. Immerse your skin with Dynasty Cream. Specially formulated to address dry skin, this Korean moisturizer reigns supreme in hydrating your face. Radiant Dewy Complexion: Dynasty Cream stands out with its luxuriously dense and firm texture, a hallmark of Beauty of Joseon's creams. This proprietary texture offers more than just moisture; it delivers a dewy, radiant finish to your skin. All-in-One Solution: Dynasty Cream isn't just any moisturizer – it's your complete skincare solution. Packed with multiple benefits, it balances oil and moisture, protects from external elements, and enhances your skin's radiance. Experience the power of an all-in-one cream that simplifies your skincare routine while delivering remarkable results. Double Moisturizer: Revel in the dual-action benefits of our Dynasty Cream. This facial moisturizer not only hydrates your facial skin, but also extends its nurturing touch to your delicate eye area. Great Gift: Perfect for grand parents, moms, dads, girlfriends and boyfriends as a birthday gift and event for special occasions. Present your loved ones with this dynasty cream korean skincare.",
        cost: "24.00",
        stock: 2610,
        weight: 2.2,
        rating: 4.5,
        reviews: 6273
      }
    })

    const product10 = await prisma.product.create({
      data: {
        name: "Beauty of Joseon Revive Snail Mucin Ginseng Serum Hydrating Peptide Facial Moisturizer Dark Spot Acne Scar Remover for Sensitive Face. Korean Skin Care for Men and Women, 30ml, 1fl. Oz",
        brand: "Beauty of Joseon",
        description: "Revitalize Your Skin: Beauty of Joseon Revive Serum Ginseng+Snail Mucin combines snail mucin and ginseng for a powerful skincare experience. Youthful Radiance: Address acne scar and achieve deep hydration with this serum, leaving your skin plump and visibly youthful. Versatile Skincare: Snail mucin, ginseng and peptide-rich formula care the skin's barrier, making it suitable for dry, acne-prone skin. Corrects dark spots for an even complexion. Great Gift: Perfect for grand parents, moms, dads, girlfriends and boyfriends as a birthday gift and event for special occasions. Present your loved ones with this ginseng cleansing oil korean skincare. Comprehensive Solution: Use it as a makeup line, snail mucin moisturizer, or eye cream. Lightweight texture absorbs quickly, suitable for all skin types.",
        cost: "17.00",
        stock: 932,
        weight: 1.6,
        rating: 4.5,
        reviews: 3146
      }
    })

    const product11 = await prisma.product.create({
      data: {
        name: "Beauty of Joseon Revive Eye Serum with Retinal Niacinamide Correction for Puffy Eye Bags Fine Lines Dark Circles Wrinkles, Korean Skin Care 30ml, 1 fl.oz",
        brand: "Beauty of Joseon",
        description: "Ginseng and Retinol Synergy: Experience the power of ginseng and retinal working in perfect harmony. This serum is a tribute to age-old Korean beauty wisdom, bringing you the best of nature's rejuvenating elements. Youthful Radiance: Unveil brighter, more youthful eyes as the serum addresses fine lines, wrinkles, and signs of fatigue. Let the potent blend of ingredients breathe life into your skin, leaving you with a radiant and revitalized gaze. Key Ingredients: Ginseng Extract for skin elasticity and protection, Retinal for reduction of wrinkles and Niacinamide for brightness Deep Hydration: Ginseng root extract deeply moisturizes, maintaining skin vitality. Unveil well-nourished, age-defying skin with lasting moisture. Great Gift: Perfect for grand parents, moms, dads, girlfriends and boyfriends as a birthday gift and event for special occasions. Present your loved ones with this eye cream serum.",
        cost: "16.99",
        stock: 732,
        weight: 1.9,
        rating: 4.3,
        reviews: 16235
      }
    })    

    const product12 = await prisma.product.create({
      data: {
        name: "Beauty of Joseon Ginseng Essence Water Hydrating Face Toner for Dry, Dull Skin. Korean Moisturizing Skin Care for Men and Women 150ml, 5 fl.oz",
        brand: "Beauty of Joseon",
        description: "Skin Harmony: Whether you're dealing with oily or dry skin, this ginseng essence water serves as a gentle astringent, toner, and hydrating solution, leaving your face feeling revitalized and glowing. K-Beauty Essential: Elevate your personal care routine with Beauty of Joseon, where traditional Korean skincare meets modern beauty. A perfect fusion of toner, moisturizer, and essence, making it the best in Korean skincare. Key Ingredients: Ginseng Water 80% for moisturizing and energizing the skin with full nutrition. Niacinamide 2% for Niacinamide 2% for skin barrier, tone up, pore closing. BHA 0.5% for exfoliating [Ginseng hydration] Ginseng is a vital herbal ingredient that has been used for a long time for our body and skin health. It contains 80% of ginseng water and focuses on the benefits of ginseng itself, giving sufficient moisture and nutrition to the skin. It fills moisture and nutrition firmly to help keep your skin moisturized for a long period of time. Great Gift: Perfect for grand parents, moms, dads, girlfriends and boyfriends as a birthday gift and event for special occasions. Present your loved ones with this ginseng essence water korean skincare.",
        cost: "17.99",
        stock: 1132,
        weight: 2.2,
        rating: 4.6,
        reviews: 6048
      }
    })    

    const product13 = await prisma.product.create({
      data: {
        name: "Beauty of Joseon Glow Serum Propolis and Niacinamide Hydrating Facial Soothing Moisturizer for Irritated Uneven Skin Tone, Korean Skin Care, 60ml, 2 Fl.Oz",
        brand: "Beauty of Joseon",
        description: "Korean Skincare Brilliance: Dive into the world of K-beauty with our Glow Serum, a harmonious blend of traditional Joseon skincare practices and modern innovations. Experience the glow that defines Korean beauty. Glows and Exfoliates: Niacinamide keeps the skin stronger and hydrated. Skin tone and pore improvement. BHA will mildly exfoliate. Key ingredients: 60% Propolis & 2% Niacinamide Elixir, energy of propolis and the revitalizing essence of niacinamide. Our serum brings together Korean skincare treasures to provide a nourishing and anti-aging boost. All-Day Hydration: Our unique blend ensures consistent hydration, leaving your skin with a captivating, radiant glow. Great Gift: Perfect for grand parents, moms, dads, girlfriends and boyfriends as a birthday gift and event for special occasions. Present your loved ones with this glow serum korean skincare.",
        cost: "27.00",
        stock: 132,
        weight: 1.7,
        rating: 4.6,
        reviews: 1021
      }
    })    

    const product14 = await prisma.product.create({
      data: {
        name: "medicube Salmon DNA PDRN Pink Vita Coating Sheet Mask 10EA - Korean sheet mask for glass skin - Luxurious Home care Mask for Hydration, Firming, and Balanced Skin, Korean Skin Care (22g/0.77oz x 10ea)",
        brand: "medicube",
        description: "Korean Sheet Masks for All Skin Types: Experience the benefits of Korean sheet masks made for all skin types. Our masks improve your skin, leaving it clean, healthy, and glowing. Easy to use and perfect for achieving glass glow skin. Advanced Formulation: Enriched with 99% purity Salmon DNA PDRN, collagen, and Vitamin B12 in a pink sheet mask for a plump, glowing complexion. PDRN enhances skin firmness, while hydrolyzed collagen and Vitamin B12 are effectively absorbed to provide a more supple and refined appearance. Micro Skin-Fit Sheet: The sheet mask that adheres seamlessly to your skin delivers key ingredients more effectively. Discover our soft sheet that doesn’t dry out or fall off easily. How to use: 1. After cleansing your face, prep your skin with a toner. 2. Remove the film and apply the mask to your face, ensuring it adheres perfectly to your skin. 3. Wait for 10-20 minutes. 4. Gently pat the remaining essence into your skin for better absorption.",
        cost: "22.00",
        stock: 703,
        weight: 4.9,
        rating: 4.7,
        reviews: 641
      }
    })    

    const product15 = await prisma.product.create({
      data: {
        name: "medicube Hyaluronic Multi Peptide PDRN Serum for Glowing and Soothing | Lightweight Water Plumping Radiant Facial Serum for All Skin Type, Hydrating Moisturizer, Korean Skincare | 30ml 1.01fl.oz.",
        brand: "medicube",
        description: "Rapid Moisture Boost : Achieve plumping and glowing skin by improving moisture and elasticity. Intensive hydrating and soothing effect for dry and flaky skin Oil Drop Plumping : A double-layer serum with an oil layer to lock in moisture and a serum layer for deep hydration helps keep moisture sealed in the skin for long-lasting hydration. Effective Ingredients for Natural Skin Glow : Hyaluronic Acid, PDRN, and Peptide fill moisture inside the skin and promote firmness. Provide hydration deeply inside the layer of the skin for smoother feeling. Low-irritating Daily Serum : Mild all-in-one soothing serum without artificial pigment and fragrance. Lightweight texture quickly absorbed to the skin with pleasant feeling. How To Use : Shake the serum to mix the oil layer and serum layer, and apply to skin until fully absorbed. Gentle enough for daily use on all skin types.",
        cost: "21.00",
        stock: 68,
        weight: 1.7,
        rating: 4.6,
        reviews: 542
      }
    })    

     const product16 = await prisma.product.create({
      data: {
        name: "Beauty of Joseon Red Bean Pore Refreshing Mask Mud Cream Hydrating Wash Off Pack, Pore Cleansing Exfoliator, Korean Skin Care for Men and Women 140ml, 4.73 fl.oz",
        brand: "Beauty of Joseon",
        description: "Pore Cleansing Excellence: Immerse your face in the deeply cleansing and hydrating power of red bean with our Beauty of Joseon Pore Refreshing Mask. This clay mask effortlessly removes dead skin cells, banishes blackheads, and leaves your skin feeling silky-smooth. Gentle Exfoliation: Say goodbye to dullness as our mask acts as a gentle exfoliator, revealing a fresher and more youthful complexion beneath the surface. Skin-Revitalizing Red Bean: Harness the centuries-old Korean beauty secret of red bean for a pore-minimizing experience. This mask is formulated to purify and hydrate your skin, giving you a radiant glow. [Kaolin] Kaolin absorbs sebum, and red bean extract and red bean powder help with exfoliating and clear skin texture. Great Gift: Perfect for grand parents, moms, dads, girlfriends and boyfriends as a birthday gift and event for special occasions. Present your loved ones with this ginseng cleansing oil korean skincare.",
        cost: 20.00,
        stock: 1407,
        weight: 2.7,
        rating: 4.6,
        reviews: 4358 
      }
    })    

     const product17 = await prisma.product.create({
      data: {
        name: "The Ordinary Glycolic Acid 7% Exfoliating Toner, Brightening and Smoothing Daily Toner for More Even-Looking Skin Tone",
        brand: "The Ordinary",
        description: "The Ordinary Glycolic Acid 7% Exfoliating Toner smooths skin texture, visibly evens tone, and boosts radiance with daily use. Contains Tasmanian Pepperberry, aloe, and ginseng.",
        cost: 9.00,
        stock: 351,
        weight: 1.8,
        rating: 4.7,
        reviews: 43052 
      }
    })      
   
     const product18 = await prisma.product.create({
      data: {
        name: "medicube PDRN Toner Salmon DNA Milky Toner | for Hydrating, Moisturizing, Soothing with Ceramide, Peptide | Glass Glow Skin | Korean Skincare, 5.07 fl.oz",
        brand: "medicube",
        description: "Intensive Hydrating and Nourishing : Pink Milky toner for dewy, glowy, and moisturizing skin. Powerful ingredients delivers moisture to the skin for smoother and healthier looking. Effective Ingredients for Natural Skin Glow : Salmon DNA PDRN and Niacinamide make a healthy complexion targeting uneven skin tone. Ceramide and Peptide deliver moisture to all skin layers, achieving glowy and dewy skin. Salmon DNA PDRN: Salmon DNA PDRN is a form of DNA extracted from salmon. It is known for its beneficial properties, supporting a refreshed skin appearance and contributing to a clearer, more luminous complexion. It helps provide a balanced skin tone and a natural glow by enhancing the overall appearance of skin. (*Based on raw material properties only) Milky and lightweight texture : Daily toner with a milky texture that delivers moisture into the skin, leaving natural skin glow with just one application. Light texture absorbed quickly to the skin without stickiness or residue. Non-comedogenic Toner : Low-irritating toner without pore clogging, suitable for all skin types. Apply gently along the skin texture and pat lightly to achieve clear and moist skin. *Clinical Trial Tested by the 'Global Institute of Dermatological Sciences', 'P&K Skin Research Center' Patch Test Recommended: Based on a Primary Skin Irritation Patch Test, this PDRN Pink Niacinamide Milky Toner is safe for use on sensitive skin. Perform a patch test on your body before applying to your face. If no irritation occurs within 24 hours, proceed with facial application. If irritation occurs, discontinue use and consult a doctor immediately.",
        cost: 20.20,
        stock: 190,
        weight: 3.8,
        rating: 4.7,
        reviews: 3173
      }
    }) 
    
     const product19 = await prisma.product.create({
      data: {
        name: "The Ordinary Soothing & Barrier Support Serum, Redness-Reducing & Hydrating Solution for Skin Barrier Recovery",
        brand: "The Ordinary",
        description: "The Ordinary Soothing & Barrier Support Serum is a multi-active solution designed to help repair skin barrier, soothe discomfort, and reduce the look of redness.",
        cost: 17.00,
        stock: 195,
        weight: 1.6,
        rating: 4.6,
        reviews: 1220
      }
    }) 

     const product20 = await prisma.product.create({
      data: {
        name: "LANEIGE Lip Sleeping Mask: Nourish, Hydrate, Vitamin C, Murumuru & Shea Butter, Antioxidants, Flaky, Dry Lips",
        brand: "LANEIGE",
        description: "A leave-on lip mask powered by Korean skincare to soften lips while delivering intense moisture and antioxidants while you sleep. Enriched with Berry Fruit Complex, Murumuru Seed, and Shea butter.",
        cost: 24.00,
        stock: 755,
        weight: 3.1,
        rating: 4.6,
        reviews: 54456 
      }
    }) 

     const product21 = await prisma.product.create({
      data: {
        name: "SKIN1004 Madagascar Centella Ampoule, Korean Face Serum with Centella Asiatica for Hydrating & Moisturizing Care, Soothing Facial Serum for Skin Balance and Glow, Korean Skin Care, 3.38 fl.oz / 100 ml",
        brand: "SKIN1004",
        description: "",
        cost: 29.99,
        stock: 1293,
        weight: 4.4,
        rating: 4.6,
        reviews: 11191 
      }
    }) 

     const product22 = await prisma.product.create({
      data: {
        name: "The Ordinary Niacinamide 10% + Zinc 1%, Smoothing Serum for Blemish-Prone Skin ",
        brand: "The Ordinary",
        description: "The Ordinary Niacinamide 10% +Zince 1% is a universal serum for blemish-prone skin that smooths, brightens, and supports the skin barrier.",
        cost: 6.00,
        stock: 4121,
        weight: 2.1,
        rating: 4.7,
        reviews: 48717 
      }
    }) 

     const product23 = await prisma.product.create({
      data: {
        name: "medicube Wrapping Mask Collagen Overnight Peel Off Facial Mask | Elasticity & Hydration Care, Reduces Sagging & Dullness | Hydrolyzed Collagen For Glowing Skin | Korean Skin Care, 2.53 fl.oz",
        brand: "medicube",
        description: "Awaken Your Glow with Overnight Elasticity Booster - Protect and enhance your skin's elasticity with our collagen wrapping film, delivering 8 hours of intensive care while you sleep. Perfect for waking up with firmer, more resilient skin. Comes Off in One Piece -Just like there's no better feeling than a clean shed, this easy-to-peel mask leaves your face feeling fresh and clean. To avoid confusion, the tube is filled to 80% capacity for safety and secure transport, while the product itself contains the standard 2.53 fl. oz. Powerful Ingredients: Ceramide NP for skin barrier and hydration, Collagen Extract for elasticity and youthful complexion, and Adenosine for reducing fine lines through skin renewal Proven Results - Clinical trials show significant improvements with Medicube Collagen Night Wrapping Mask: +31.4% skin elasticity, +24.8% 24-hour moisture retention, and +23.4% skin surface hydration after 2 weeks of use. Individual results may vary.",
        cost: 18.90,
        stock: 401,
        weight: 5.6,
        rating: 4.5,
        reviews: 17132 
      }
    }) 

     const product24 = await prisma.product.create({
      data: {
        name: "Beauty of Joseon Glow Deep Serum Rice Alpha-Arbutin for Uneven Dull Skin Tone, Daily Korean Skin Care for Men and Women 30ml, 1 fl.oz",
        brand: "Beauty of Joseon",
        description: "Radiant Revelation: Unveil the beauty secrets of Joseon with the Glow Deep Serum, a meticulously crafted blend of rice and alpha-arbutin for unparalleled radiance. Address dark spots, discoloration, and acne scars with a powerful formula enriched with rice and alpha arbutin. Korean Skincare Essential: Elevate your skincare routine with the Beauty of Joseon Glow Deep Serum, a commitment to timeless k-beauty secrets that unlocks the path to glowing, flawless skin. Key Ingredients: Rice Water 68%: Moisturizing, hydration and glowing. Alpha-Albutin 2%: Radiance, dark spots, skin protection and pigmentation. Niacinamide: Skin tone, skin barrier and acne care. Deep Hydration, Rice Bran: Rice bran water moisturizes, enhances suppleness. Experience intense hydration alongside pigmentation correction for ultimate skin health. Tackle Skin Concerns: Suited for all skin types, even sensitive. Tackle uneven tone, dark spots, and dryness. Reveal luminosity and confidence in your skin's journey.",
        cost: 17.00,
        stock: 749,
        weight: 1.6,
        rating: 4.4,
        reviews: 8339 
      }
    }) 

    const image1 = await prisma.productImage.create({
      data: {
        productId: 1,
        imageUrl: "/images/products/1/1.jpg",
      }
    });

    const image2 = await prisma.productImage.create({
      data: {
        productId: 2,
        imageUrl: "/images/products/2/1.jpg",
      }
    });

    const image3 = await prisma.productImage.create({
      data: {
        productId: 3,
        imageUrl: "/images/products/3/1.jpg",
      }
    });

    const image4 = await prisma.productImage.create({
      data: {
        productId: 4,
        imageUrl: "/images/products/4/1.jpg",
      }
    });

    const image5 = await prisma.productImage.create({
      data: {
        productId: 5,
        imageUrl: "/images/products/5/1.jpg",
      }
    });

    const image6 = await prisma.productImage.create({
      data: {
        productId: 6,
        imageUrl: "/images/products/6/1.jpg",
      }
    });

    const image7 = await prisma.productImage.create({
      data: {
        productId: 7,
        imageUrl: "/images/products/7/1.jpg",
      }
    });

    const image8 = await prisma.productImage.create({
      data: {
        productId: 8,
        imageUrl: "/images/products/8/1.jpg",
      }
    });

    const image9 = await prisma.productImage.create({
      data: {
        productId: 9,
        imageUrl: "/images/products/9/1.jpg",
      }
    });

    const image10 = await prisma.productImage.create({
      data: {
        productId: 10,
        imageUrl: "/images/products/10/1.jpg",
      }
    });

    const image11 = await prisma.productImage.create({
      data: {
        productId: 11,
        imageUrl: "/images/products/11/1.jpg",
      }
    });

    const image12 = await prisma.productImage.create({
      data: {
        productId: 12,
        imageUrl: "/images/products/12/1.jpg",
      }
    });

    const image13 = await prisma.productImage.create({
      data: {
        productId: 13,
        imageUrl: "/images/products/13/1.jpg",
      }
    });

    const image14 = await prisma.productImage.create({
      data: {
        productId: 14,
        imageUrl: "/images/products/14/1.jpg",
      }
    });

    const image15 = await prisma.productImage.create({
      data: {
        productId: 15,
        imageUrl: "/images/products/15/1.jpg",
      }
    });

    const image16 = await prisma.productImage.create({
      data: {
        productId: 16,
        imageUrl: "/images/products/16/1.jpg",
      }
    });

    const image17 = await prisma.productImage.create({
      data: {
        productId: 17,
        imageUrl: "/images/products/17/1.jpg",
      }
    });

    const image18 = await prisma.productImage.create({
      data: {
        productId: 18,
        imageUrl: "/images/products/18/1.jpg",
      }
    });

    const image19 = await prisma.productImage.create({
      data: {
        productId: 19,
        imageUrl: "/images/products/19/1.jpg",
      }
    });

    const image20 = await prisma.productImage.create({
      data: {
        productId: 20,
        imageUrl: "/images/products/20/1.jpg",
      }
    });

    const image21 = await prisma.productImage.create({
      data: {
        productId: 21,
        imageUrl: "/images/products/21/1.jpg",
      }
    });

    const image22 = await prisma.productImage.create({
      data: {
        productId: 22,
        imageUrl: "/images/products/22/1.jpg",
      }
    });

    const image23 = await prisma.productImage.create({
      data: {
        productId: 23,
        imageUrl: "/images/products/23/1.jpg",
      }
    });

    const image24 = await prisma.productImage.create({
      data: {
        productId: 24,
        imageUrl: "/images/products/24/1.jpg",
      }
    });

    console.log("Created users:", userAdmin, userCustomer);
    console.log("Created products:", product1, product2, product3, product4, product5, product6, product7, product8, product9, product10);
    console.log("Created products images:", image1, image2, image3, image4, image5, image6, image7, image8, image9, image10);

}

main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })