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

    console.log("Created users:", userAdmin, userCustomer);
    console.log("Created products:", product1, product2, product3, product4, product5);
    console.log("Created products images:", image1, image2, image3, image4, image5);

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