import { type ProductItem } from './types';

export const productCatalog: ProductItem[] = [
  {
    id: '1',
    name: 'Premium Cement Bags',
    price: 24.99,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1718117075248-3d3c3cd65264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc3MTE4NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cement & Concrete',
    description:
      'High-quality Portland cement bags designed for heavy-duty construction projects. Our premium cement offers exceptional strength, durability, and workability. Ideal for foundations, structural work, and general concrete applications.',
    specs: [
      { label: 'Weight', value: '50 lbs per bag' },
      { label: 'Type', value: 'Portland Cement Type I/II' },
      { label: 'Compressive Strength', value: '3500 PSI at 28 days' },
      { label: 'Setting Time', value: '2-4 hours initial set' },
      { label: 'Coverage', value: 'Approximately 0.45 cubic feet' },
    ],
    images: [
      'https://images.unsplash.com/photo-1718117075248-3d3c3cd65264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
  },
  {
    id: '2',
    name: 'Premium Lumber Planks',
    price: 89.99,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1764025390519-1ccc15d719a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wood & Lumber',
    description:
      'Premium kiln-dried lumber planks suitable for framing, decking, furniture making, and various carpentry projects.',
    specs: [
      { label: 'Dimensions', value: `2" x 6" x 8'` },
      { label: 'Wood Type', value: 'Douglas Fir' },
      { label: 'Grade', value: 'Premium Select' },
      { label: 'Moisture Content', value: '15% kiln-dried' },
      { label: 'Quantity', value: 'Sold individually' },
    ],
    images: [
      'https://images.unsplash.com/photo-1764025390519-1ccc15d719a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1465804575741-338df8554e02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
  },
  {
    id: '3',
    name: 'Red Clay Bricks',
    price: 0.89,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1761358270922-5a4df4ab9782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Bricks & Blocks',
    description:
      'Traditional red clay bricks manufactured to high standards for walls, patios, pathways, and architectural features.',
    specs: [
      { label: 'Dimensions', value: '8" x 4" x 2.25"' },
      { label: 'Material', value: 'Fire-hardened clay' },
      { label: 'Compressive Strength', value: '3000+ PSI' },
      { label: 'Water Absorption', value: 'Less than 8%' },
      { label: 'Color', value: 'Classic red' },
    ],
    images: [
      'https://images.unsplash.com/photo-1761358270922-5a4df4ab9782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
  },
  {
    id: '4',
    name: 'Steel I-Beams',
    price: 349.99,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1707236527163-bd3478178466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Steel & Metal',
    description:
      'Heavy-duty structural steel I-beams engineered for high load-bearing construction and support applications.',
    specs: [
      { label: 'Length', value: '20 feet' },
      { label: 'Profile', value: 'W10x49' },
      { label: 'Material', value: 'ASTM A992 Grade 50 Steel' },
      { label: 'Weight', value: '980 lbs' },
      { label: 'Yield Strength', value: '50 ksi' },
    ],
    images: [
      'https://images.unsplash.com/photo-1707236527163-bd3478178466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
  },
  {
    id: '5',
    name: 'Exterior Paint Set',
    price: 45.99,
    rating: 3.5,
    image:
      'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Paint & Coatings',
    description:
      'Professional-grade exterior paint set with strong coverage and weather resistance for residential and commercial surfaces.',
    specs: [
      { label: 'Volume', value: '5 gallons total' },
      { label: 'Type', value: '100% Acrylic Latex' },
      { label: 'Coverage', value: '400 sq ft per gallon' },
      { label: 'Finish', value: 'Satin' },
      { label: 'Dry Time', value: '2-4 hours' },
    ],
    images: [
      'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1532634726-8b9fb99825ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
  },
  {
    id: '6',
    name: 'Plywood Sheets',
    price: 52.99,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1704167674713-649193461719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wood & Lumber',
    description:
      'Construction-grade plywood sheets engineered for strength and dimensional stability across common job-site tasks.',
    specs: [
      { label: 'Dimensions', value: `4' x 8'` },
      { label: 'Thickness', value: '3/4 inch' },
      { label: 'Grade', value: 'CDX' },
      { label: 'Plies', value: '7-ply construction' },
      { label: 'Exposure', value: 'Exterior grade' },
    ],
    images: [
      'https://images.unsplash.com/photo-1704167674713-649193461719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1465804575741-338df8554e02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
  },
];
