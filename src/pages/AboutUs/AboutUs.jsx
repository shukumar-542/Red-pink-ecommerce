import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <section className="mb-12 text-gray-700 text-lg leading-relaxed">
        <p>
          Welcome to <strong>Red Pink</strong>, your one-stop destination for all your shopping needs. Founded in 2025, ShopEase was born out of a simple idea: to make online shopping easier, faster, and more delightful for everyone.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to empower customers with an intuitive and seamless online shopping experience by offering a wide range of quality products at competitive prices — backed by exceptional customer service.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed">
          <li>Thousands of handpicked products across fashion, electronics, home, and more</li>
          <li>Secure payments and fast delivery</li>
          <li>Easy returns and responsive support</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed">
          <li><strong>Customer First:</strong> We prioritize your satisfaction and trust.</li>
          <li><strong>Quality Always:</strong> We partner with verified sellers to deliver only the best.</li>
          <li><strong>Innovation Driven:</strong> We constantly improve to serve you better.</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We’re more than just a store — we’re a community of shoppers and creators. Follow us on social media and stay updated on the latest trends and offers!
        </p>
        {/* <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Start Shopping
        </button> */}
      </section>
    </div>
  );
};

export default AboutUs;
