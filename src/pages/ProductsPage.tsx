import { useMemo, useState } from 'react';
import { RAW_SUB_PRODUCTS } from '../data/rawProducts';
import { buildProductsData, type RawGroup, type ProductGroup, type ProductItem } from '../data/products';
const productsHero = new URL('../assets/products/hero-section.jpg', import.meta.url).href;

export function getRawProducts(): RawGroup[] {
  return RAW_SUB_PRODUCTS as unknown as RawGroup[];
}

interface ProductsPageProps {
  onNavigate?: (page: string) => void;
}

type SortBy = 'name' | 'count';

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const groups: ProductGroup[] = useMemo(() => buildProductsData(getRawProducts()), []);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortBy>('name');

  const filteredGroups = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const matchTerm = (text: string | undefined) => (text || '').toLowerCase().includes(term);
    const matchesProduct = (p: ProductItem) => {
      if (!term) return true;
      const paragraphs = (p.paragraphs || []).join('\n');
      const bullets = (p.bullets || []).join('\n');
      return matchTerm(p.name) || matchTerm(paragraphs) || matchTerm(bullets);
    };
    const categoryOk = (category: string) => selectedCategory === 'all' || category === selectedCategory;

    const mapped = groups.map((g) => ({
      category: g.category,
      items: g.items.filter((p) => categoryOk(g.category) && matchesProduct(p)),
    }));

    const nonEmpty = mapped.filter((g) => g.items.length > 0);

    if (sortBy === 'name') {
      return [...nonEmpty].sort((a, b) => a.category.localeCompare(b.category));
    }
    // sortBy === 'count'
    return [...nonEmpty].sort((a, b) => b.items.length - a.items.length);
  }, [groups, selectedCategory, searchTerm, sortBy]);

  const allCategories = useMemo(() => ['all', ...groups.map((g) => g.category)], [groups]);

  const handleOpenDetail = (product: ProductItem) => {
    if (onNavigate) onNavigate(`product:${product.slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative text-white py-20">
        <img src={productsHero} alt="Products background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-white/90 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3">Products & Solutions</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Our Products</h1>
            <p className="text-blue-100 max-w-3xl mx-auto">Explore our complete portfolio across instrumentation, automation, valves, cameras and more.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between mb-8">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products, features, text..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0073bc]"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0073bc]"
            >
              {allCategories.map((c) => (
                <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0073bc]"
            >
              <option value="name">Sort: Category Name</option>
              <option value="count">Sort: Product Count</option>
            </select>
          </div>
        </div>

        {filteredGroups.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try changing the search or selecting a different category.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="px-5 py-2 rounded-lg bg-[#0073bc] text-white hover:bg-[#005a94]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredGroups.map((g) => (
              <section key={g.category} id={g.category}>
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{g.category}</h2>
                  <span className="text-sm text-gray-500">{g.items.length} items</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {g.items.map((p) => (
                    <div key={p.slug} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer" onClick={() => handleOpenDetail(p)}>
                      {p.image && (
                        <div className="w-full h-44 bg-gray-100 overflow-hidden">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{p.name}</h3>
                        {p.paragraphs && p.paragraphs[0] && (
                          <p className="text-sm text-gray-600 line-clamp-3">{p.paragraphs[0]}</p>
                        )}
                        {(!p.paragraphs || !p.paragraphs[0]) && p.bullets && p.bullets[0] && (
                          <p className="text-sm text-gray-600 line-clamp-3">{p.bullets[0]}</p>
                        )}
                        <div className="mt-3">
                          <button className="text-[#0073bc] text-sm font-medium hover:underline">View details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


