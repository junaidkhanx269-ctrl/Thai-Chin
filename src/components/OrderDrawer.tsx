import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, MapPin, User, Phone, Sparkles, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? 150 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleSendWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      // Direct inquiry if cart is empty
      const emptyMsg = encodeURIComponent(
        `Assalam-o-Alaikum Thai Chin!\nI would like to place an order from Kings Street Scheme 33, Karachi.\nPlease share today’s chef specials and delivery time.`
      );
      window.open(`${RESTAURANT_INFO.whatsappUrl}?text=${emptyMsg}`, '_blank');
      return;
    }

    const itemsSummary = cartItems
      .map(
        (ci, idx) =>
          `${idx + 1}. *${ci.item.name}* x ${ci.quantity} = Rs. ${(
            ci.item.price * ci.quantity
          ).toLocaleString()}${ci.spicePreference ? ` (${ci.spicePreference})` : ''}`
      )
      .join('\n');

    const message = `*🍜 NEW ORDER - THAI CHIN KARACHI*\n` +
      `--------------------------------\n` +
      `*Order Type:* ${orderType === 'delivery' ? '🚗 Home Delivery' : '🥡 Self Takeaway (Kings Street)'}\n` +
      `*Name:* ${customerName.trim() || 'Valued Customer'}\n` +
      `*Phone:* ${customerPhone.trim() || 'Provided on WhatsApp'}\n` +
      (orderType === 'delivery'
        ? `*Delivery Address:* ${customerAddress.trim() || 'Scheme 33, Karachi'}\n`
        : `*Pickup Location:* Kings Street Scheme 33\n`) +
      (specialInstructions.trim()
        ? `*Special Notes:* ${specialInstructions.trim()}\n`
        : '') +
      `--------------------------------\n` +
      `*ORDERED ITEMS:*\n${itemsSummary}\n` +
      `--------------------------------\n` +
      `*Subtotal:* Rs. ${subtotal.toLocaleString()}\n` +
      (orderType === 'delivery' ? `*Estimated Delivery:* Rs. ${deliveryFee}\n` : '') +
      `*GRAND TOTAL:* *Rs. ${grandTotal.toLocaleString()}*\n` +
      `--------------------------------\n` +
      `Please confirm my order and share the estimated preparation time. Thank you!`;

    window.open(
      `${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-lg bg-[#0E0E0E] text-stone-100 h-full flex flex-col border-l border-[#C1272D]/40 shadow-2xl overflow-hidden">
        {/* Drawer Header */}
        <div className="p-5 bg-gradient-to-r from-stone-900 to-[#180a0b] border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C1272D] flex items-center justify-center border border-[#FFD700]/40">
              <ShoppingBag className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white">Your WhatsApp Order</h3>
              <p className="text-xs text-stone-400">Kings Street Scheme 33 Dispatch Kitchen</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white"
            aria-label="Close Order Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Order Type Toggle */}
          <div className="grid grid-cols-2 gap-2 bg-stone-900 p-1.5 rounded-xl border border-stone-800">
            <button
              onClick={() => setOrderType('delivery')}
              className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                orderType === 'delivery'
                  ? 'bg-[#C1272D] text-white shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              🚗 Home Delivery
            </button>
            <button
              onClick={() => setOrderType('takeaway')}
              className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                orderType === 'takeaway'
                  ? 'bg-[#C1272D] text-white shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              🥡 Self Takeaway
            </button>
          </div>

          {/* Cart Items List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                Selected Dishes ({cartItems.reduce((acc, c) => acc + c.quantity, 0)})
              </span>
              {cartItems.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {cartItems.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-stone-900/50 border border-stone-800/80">
                <ShoppingBag className="w-10 h-10 text-stone-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-stone-300">Your order tray is empty</p>
                <p className="text-xs text-stone-500 mt-1 mb-4">
                  Browse our Chinese menu and add your favorite dishes.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-[#C1272D] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-stone-900 border border-stone-800/80 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                      <p className="text-xs text-[#FFD700] font-semibold mt-0.5">
                        Rs. {(item.price * quantity).toLocaleString()}
                      </p>
                      <p className="text-[11px] text-stone-400">Rs. {item.price} each</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-stone-950 rounded-lg border border-stone-700 p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 text-stone-400 hover:text-white rounded"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-stone-100">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-stone-400 hover:text-white rounded"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-stone-500 hover:text-red-400 transition-colors"
                        title="Remove dish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Customer Details Form */}
          <div className="space-y-3 pt-2 border-t border-stone-800">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
              Customer &amp; Delivery Details
            </span>

            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                placeholder="Your Full Name (e.g. Asad Khan)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-[#C1272D] text-xs text-stone-100 outline-none"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="tel"
                placeholder="WhatsApp Phone Number (03XX-XXXXXXX)"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-[#C1272D] text-xs text-stone-100 outline-none"
              />
            </div>

            {orderType === 'delivery' && (
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-stone-500" />
                <textarea
                  rows={2}
                  placeholder="Delivery Address: House #, Sector / Society in Scheme 33, Landmark"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-900 border border-stone-800 focus:border-[#C1272D] text-xs text-stone-100 outline-none"
                />
              </div>
            )}

            <div>
              <input
                type="text"
                placeholder="Special notes (e.g. extra spicy, no cutlery, call on arrival)"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-[#C1272D] text-xs text-stone-100 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Drawer Footer & WhatsApp CTA */}
        <div className="p-5 bg-stone-950 border-t border-stone-800 space-y-3">
          {/* Bill Summary */}
          <div className="space-y-1.5 text-xs text-stone-300">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-semibold text-white">Rs. {subtotal.toLocaleString()}</span>
            </div>
            {orderType === 'delivery' && (
              <div className="flex justify-between text-stone-400">
                <span>Estimated Scheme 33 Delivery:</span>
                <span>Rs. {deliveryFee}</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-bold text-[#FFD700] pt-1.5 border-t border-stone-800">
              <span>Grand Total:</span>
              <span>Rs. {grandTotal.toLocaleString()}</span>
            </div>
          </div>

          {/* Primary CTA Button: Order on WhatsApp Now */}
          <button
            id="order-drawer-submit-btn"
            onClick={handleSendWhatsAppOrder}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-[#C1272D] via-[#a81c22] to-[#8B0000] hover:from-[#d92c34] text-white text-sm font-bold uppercase tracking-wider shadow-xl shadow-[#C1272D]/40 border border-[#FFD700]/50 active:scale-[0.99] transition-all"
          >
            <MessageCircle className="w-5 h-5 text-[#FFD700]" />
            <span>Order on WhatsApp Now</span>
          </button>

          <p className="text-[11px] text-center text-stone-500">
            Directly connected to Thai Chin Karachi Dispatch (0304 1363224)
          </p>
        </div>
      </div>
    </div>
  );
};
