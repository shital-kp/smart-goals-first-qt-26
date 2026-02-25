// Safe data extraction and transformation this product

const page = () => {
  // Task: Extract all data safely with defaults
  // Calculate final price (handle null discount)
  // Get average rating

  const product = {
    id: 'PROD-001',
    name: 'Laptop',
    details: {
      specs: {
        cpu: 'Intel i7',
        ram: '16GB',
        storage: { type: 'SSD', size: '512GB' }
      },
      pricing: {
        base: 999,
        discount: null,
        currency: 'USD'
      }
    },
    reviews: [
      { rating: 5, comment: 'Excellent!' },
      { rating: 4, comment: 'Good value' }
    ]
  };

  // safe extraction all data defaults
  const name = product?.name ?? 'Unknown Product';
  const cpu = product?.details?.specs?.cpu ?? 'N/A';
  const ram = product?.details?.specs?.ram ?? 'N/A';
  const storageType = product?.details?.specs?.storage?.type ?? 'N/A';
  const storageSize = product?.details?.specs?.storage?.size ?? '';
  const price = product?.details?.pricing ? `${product.details.pricing.base - (product.details.pricing.discount ?? 0)} ${product.details.pricing.currency}` : 'N/A';
  const averageRating = product?.reviews ? (product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length).toFixed(1) : 'No reviews';

  return (
    <div>
      <h1>Product: {name}</h1>
      <p>CPU: {cpu}</p>
      <p>RAM: {ram}</p>
      <p>Storage: {storageType} {storageSize}</p>
      <p>Price: {price}</p>
      <p>Average Rating: {averageRating}</p>
    </div>
  )
}

export default page