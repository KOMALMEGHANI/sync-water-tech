import React from 'react';

interface ProductDetailPageProps {
  productName: string;
  productImage: string;
  productDescription?: string[];
  bullets?: string[];
  onBack: () => void;
}

export default function ProductDetailPage({ productName, productImage, productDescription, bullets, onBack }: ProductDetailPageProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <button onClick={onBack} className="text-[#0073bc] hover:underline mb-6">Back to products</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={productImage} alt={productName} className="w-full h-auto rounded-xl border" />
                </div>
                <div>
          <h1 className="text-3xl font-bold mb-4">{productName}</h1>
          {productDescription && productDescription.map((p, i) => (
            <p key={i} className="text-gray-700 mb-3">{p}</p>
          ))}
          {bullets && bullets.length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Key features</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </div>
          )}
              </div>
            </div>
    </div>
  );
}