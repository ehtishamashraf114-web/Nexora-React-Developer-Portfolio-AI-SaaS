import React, { useState, useMemo } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Search, ArrowRight, CheckCircle2, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Product {
  id: string;
  name: string;
  category: 'Audio' | 'Peripherals' | 'Accessories';
  price: number;
  rating: number;
  tagline: string;
  iconType: 'headphone' | 'mic' | 'keyboard' | 'amp' | 'mat';
}

const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Aura Acoustic Pro Wireless',
    category: 'Audio',
    price: 349,
    rating: 4.9,
    tagline: 'Planar magnetic drivers with 48hr battery',
    iconType: 'headphone'
  },
  {
    id: 'prod-2',
    name: 'Vocalis Studio Condenser Mic',
    category: 'Audio',
    price: 189,
    rating: 4.8,
    tagline: 'Cardioid polar pattern with USB-C 192kHz',
    iconType: 'mic'
  },
  {
    id: 'prod-3',
    name: 'Tactile87 Custom Keyboard',
    category: 'Peripherals',
    price: 199,
    rating: 4.9,
    tagline: 'Gasket-mounted hot-swap mechanical switches',
    iconType: 'keyboard'
  },
  {
    id: 'prod-4',
    name: 'Nexora Stream Audio Hub',
    category: 'Audio',
    price: 129,
    rating: 4.7,
    tagline: 'Dual balanced XLR outputs with zero-latency loopback',
    iconType: 'amp'
  },
  {
    id: 'prod-5',
    name: 'Minimalist Felt Desk Mat XL',
    category: 'Accessories',
    price: 45,
    rating: 4.6,
    tagline: 'High-density natural wool with non-slip base',
    iconType: 'mat'
  }
];

interface CartItem {
  product: Product;
  quantity: number;
}

export const LiveStoreModal: React.FC<LiveStoreModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }
  ]);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortOrder]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = subtotal - discountAmount;
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'NEXORA10') {
      setDiscountPercent(10);
      setPromoMessage('10% discount applied!');
    } else {
      setPromoMessage('Invalid coupon code. Try "NEXORA10"');
    }
  };

  const handleCheckout = () => {
    setOrderComplete(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#090E17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-200">
        {/* Store Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/70 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-white">AuraCraft Modern Storefront</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Interactive Cart Demo
                </span>
              </div>
              <p className="text-xs text-slate-400">Dynamic product search, instant filters & cart calculations</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCartDrawer(!showCartDrawer)}
              className="relative px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/50 text-indigo-200 text-xs font-medium flex items-center gap-2 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Cart ({totalItemCount})</span>
              <span className="font-mono font-semibold">${finalTotal}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col md:flex-row gap-6">
          {/* Main Catalog View */}
          <div className={`flex-1 space-y-4 ${showCartDrawer ? 'hidden md:block md:w-3/5' : 'w-full'}`}>
            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search products by title or spec..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
                  {['All', 'Audio', 'Peripherals', 'Accessories'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                        selectedCategory === cat
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as any)}
                  className="py-1.5 px-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((p) => {
                const inCart = cart.find((c) => c.product.id === p.id);
                return (
                  <div
                    key={p.id}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Product Vector Icon Frame */}
                      <div className="w-full aspect-[4/3] rounded-lg bg-slate-950 border border-white/5 flex items-center justify-center mb-3 text-indigo-400">
                        {p.iconType === 'headphone' && (
                          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                          </svg>
                        )}
                        {p.iconType === 'mic' && (
                          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <line x1="12" x2="12" y1="19" y2="22" />
                          </svg>
                        )}
                        {p.iconType === 'keyboard' && (
                          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10" />
                          </svg>
                        )}
                        {p.iconType === 'amp' && (
                          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <circle cx="8" cy="12" r="2" />
                            <circle cx="16" cy="12" r="2" />
                          </svg>
                        )}
                        {p.iconType === 'mat' && (
                          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect width="20" height="12" x="2" y="6" rx="2" />
                            <line x1="6" x2="18" y1="12" y2="12" />
                          </svg>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                        <span>{p.category}</span>
                        <span className="text-amber-400 font-mono">★ {p.rating}</span>
                      </div>
                      <h4 className="text-xs font-semibold text-white mb-1">{p.name}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mb-3">{p.tagline}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                      <span className="text-sm font-bold text-white font-mono">${p.price}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(p)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                          inCart
                            ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                            : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        {inCart ? `Add More (${inCart.quantity})` : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart & Checkout Panel */}
          <div className={`bg-slate-900/70 p-5 rounded-xl border border-slate-800 flex flex-col justify-between ${showCartDrawer ? 'w-full md:w-2/5' : 'hidden md:flex md:w-72 shrink-0'}`}>
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-indigo-400" />
                  Shopping Basket ({totalItemCount})
                </h4>
                {cart.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setCart([])}
                    className="text-[10px] text-rose-400 hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-xs">
                  Your cart is currently empty. Add products from the catalog above.
                </div>
              ) : (
                <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.product.id} className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 flex items-center justify-between">
                      <div className="min-w-0 flex-1 pr-2">
                        <div className="text-xs font-medium text-white truncate">{item.product.name}</div>
                        <div className="text-[11px] text-indigo-300 font-mono">${item.product.price} each</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-mono font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1 text-slate-500 hover:text-rose-400 ml-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Calculations & Checkout */}
            <div className="pt-4 border-t border-slate-800 mt-4 space-y-3">
              {/* Promo input */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
                  <input
                    type="text"
                    placeholder='Coupon "NEXORA10"'
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full pl-8 pr-2 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-white uppercase placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 border border-slate-700"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <div className="text-[10px] text-emerald-400 font-mono">{promoMessage}</div>
              )}

              <div className="space-y-1.5 text-xs text-slate-400 font-mono">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-white">${subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (10%):</span>
                    <span>-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-emerald-400">FREE Worldwide</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-slate-800">
                  <span>Total Amount:</span>
                  <span className="text-indigo-400">${finalTotal}</span>
                </div>
              </div>

              {orderComplete ? (
                <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Payment Simulated!</div>
                  <div className="text-[10px] text-slate-300">Demo order placed successfully.</div>
                </div>
              ) : (
                <button
                  type="button"
                  disabled={cart.length === 0}
                  onClick={handleCheckout}
                  className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:pointer-events-none text-white font-semibold text-xs tracking-wide shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Simulate Checkout (${finalTotal})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
