import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Return & Refund Policy</h1>

      <p className="mb-4">
        Thank you for shopping at <strong>ShopEase</strong>. We want you to be completely satisfied with your purchase. If you are not satisfied, we’re here to help.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Returns</h2>
      <p className="mb-4">
        You have <strong>7 days</strong> from the date you received your item to request a return.
      </p>
      <p className="mb-4">
        To be eligible for a return, your item must be:
        <ul className="list-disc pl-6 mt-2">
          <li>Unused and in the same condition that you received it</li>
          <li>In the original packaging</li>
          <li>Accompanied by the receipt or proof of purchase</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Non-returnable items</h2>
      <p className="mb-4">The following items cannot be returned:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Gift cards</li>
        <li>Downloadable software or digital products</li>
        <li>Items marked as final sale</li>
        <li>Perishable goods (e.g., food, flowers)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Refunds</h2>
      <p className="mb-4">
        Once we receive your item, we will inspect it and notify you of the approval or rejection of your refund. If approved, your refund will be processed within 5-7 business days to your original method of payment.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Shipping Costs</h2>
      <p className="mb-4">
        You will be responsible for paying your own shipping costs for returning your item. Shipping costs are non-refundable.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How to Return</h2>
      <p className="mb-4">
        To initiate a return, please contact our support team at <a href="mailto:support@shopease.com" className="text-blue-600 hover:underline">support@shopease.com</a> with your order number and details.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Need Help?</h2>
      <p>If you have any questions about our return and refund policy, feel free to contact us at <a href="mailto:support@shopease.com" className="text-blue-600 hover:underline">support@shopease.com</a>.</p>
    </div>
  );
};

export default ReturnPolicy;
